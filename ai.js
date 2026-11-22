// ai.js — Gemini AI Engine for CHRIST M.Sc. Psychology (HRDM)
// Built specifically for Michelle Josephine E

const AI_CONFIG = {
  // Uses Gemini 3.8 Flash as the primary default engine
  model: 'gemini-3.8-flash',
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/'
};

// Helper to get active model (allows user customization via Settings)
function getActiveGeminiModel() {
  return localStorage.getItem('christ_psych_gemini_model') || AI_CONFIG.model;
}

// Helper to get active API key
function getGeminiApiKey() {
  return localStorage.getItem('christ_psych_gemini_key') || null;
}

// Low-level fetch wrapper with error handling
async function callGeminiRaw(prompt, temperature = 0.5) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("No Gemini API key found. Please enter your API key in Settings.");
  }

  const model = getActiveGeminiModel();
  const url = `${AI_CONFIG.endpoint}${model}:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: temperature,
      maxOutputTokens: 2500
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `API error (HTTP ${response.status})`);
  }

  const data = await response.json();
  if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
    throw new Error("Empty or malformed response received from Gemini.");
  }

  return data.candidates[0].content.parts[0].text;
}

// 1. Generate on-demand MCQs for a specific topic
async function generateTopicMCQs(topicTitle, unitName, count = 5, difficulty = "moderate") {
  const prompt = `
You are an expert psychometrics question writer for the CHRIST University M.Sc. Psychology (Human Resource Development & Management) Entrance Exam.
Generate exactly ${count} realistic, challenging multiple-choice questions on:
Topic: "${topicTitle}"
Unit: "${unitName}"
Difficulty Level: ${difficulty}

Criteria:
1. Questions must test conceptual understanding, application to workplace/human behavior, or theoretical discrimination (not trivial trivia).
2. Exactly four distinct options labeled 'a', 'b', 'c', 'd'.
3. One unequivocally correct answer.
4. Distractors must represent common psychological misconceptions.
5. Provide a clear, 2-3 sentence educational explanation for why the answer is correct and why common distractors fail.

OUTPUT REQUIREMENT:
Return ONLY a valid JSON array of objects. Do NOT wrap in markdown \`\`\`json or add introductory prose.
Schema:
[
  {
    "id": "ai_gen_${Date.now()}_1",
    "topic": "topic_id",
    "unit": "${unitName}",
    "part": "A",
    "question": "Question text here?",
    "options": {
      "a": "Option A text",
      "b": "Option B text",
      "c": "Option C text",
      "d": "Option D text"
    },
    "answer": "b",
    "explanation": "Detailed explanation here."
  }
]
`;

  const rawText = await callGeminiRaw(prompt, 0.4);
  let cleanJson = rawText.trim();
  // Strip code blocks if present
  if (cleanJson.startsWith("```")) {
    cleanJson = cleanJson.replace(/^```json/i, '').replace(/^```/i, '').replace(/```$/, '').trim();
  }

  try {
    const parsed = JSON.parse(cleanJson);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    throw new Error("Response was not a JSON array.");
  } catch (err) {
    console.error("Failed to parse AI MCQ JSON:", rawText);
    throw new Error("The AI returned a format that could not be parsed. Please try generating again.");
  }
}

// 2. Comprehensive AI Gap Analysis based on Michelle's mastery stats
async function analyzeGapsAI(masteryReport, errorLog) {
  const prompt = `
You are an elite academic coach mentoring candidate Michelle Josephine E for her CHRIST University M.Sc. Psychology (HRDM) entrance exam.
Below is her live diagnostic performance data across topics:

Performance Data by Topic:
${JSON.stringify(masteryReport, null, 2)}

Recent Misconceptions & Wrong Answer Log:
${JSON.stringify(errorLog.slice(-15), null, 2)}

Provide a sharp, motivating, and highly actionable diagnostic report in clean HTML format:
1. Executive Assessment (Michelle's readiness tier: e.g. Strong / Developing / Critical Focus).
2. Top 3 Weakness Diagnosis: For each weak topic (<65% accuracy), pinpoint the EXACT theoretical confusion (e.g., confusing Negative Reinforcement with Punishment, or Vroom's Instrumentality vs Expectancy).
3. Prescribed 48-Hour High-Yield Review Plan: What specific sections, theories, and laws she must re-read today in her OpenStax and NCERT textbooks.
4. Exam Mindset & Negative Marking Strategy: Advice on when to guess vs. skip under the -0.25 penalty rule.

Keep the tone encouraging, intellectual, and direct. Use HTML tags: <h3>, <p>, <ul>, <li>, <strong>, <span class="text-cyan">, <span class="text-green">, <span class="text-red">. Do NOT use markdown.
`;

  return await callGeminiRaw(prompt, 0.7);
}

// 3. Socratic Question Explainer
async function explainQuestionSimply(questionObj, selectedOption) {
  const prompt = `
A candidate studying for the CHRIST University M.Sc. Psychology (HRDM) Entrance Exam missed the following question:

Question: "${questionObj.question}"
Options: ${JSON.stringify(questionObj.options)}
Correct Answer: "${questionObj.answer}" (${questionObj.options[questionObj.answer]})
Candidate Selected: "${selectedOption}" (${questionObj.options[selectedOption] || "None / Skipped"})
Base Explanation: "${questionObj.explanation || "N/A"}"

Explain this in an intuitive, memorable way in clean HTML:
1. The Core Idea: Explain the underlying psychological or HR concept in plain English with an intuitive real-world workplace analogy.
2. Why Option (${selectedOption?.toUpperCase()}) Is a Trap: Clarify what misconception led to picking this distractor.
3. Why Option (${questionObj.answer?.toUpperCase()}) Is Irrefutably Correct.
4. Quick Memory Mnemonic / Rule of Thumb to never miss this in the exam.

Keep it concise (around 200 words). Do NOT output markdown code blocks.
`;

  return await callGeminiRaw(prompt, 0.6);
}

// 4. Generate AI Flashcards for spaced repetition
async function generateAIFlashcardsForTopic(topicTitle, conceptsSummary) {
  const prompt = `
Generate 4 high-yield spaced-repetition flashcards for the CHRIST Psychology HRDM Entrance Exam.
Topic: "${topicTitle}"
Context: "${conceptsSummary}"

OUTPUT REQUIREMENT:
Return ONLY a valid JSON array of objects with "front" (question/prompt/term) and "back" (concise, clear answer/definition/rule).
Example:
[
  { "front": "What does Weber's Law state?", "back": "The just-noticeable difference (JND) is a constant proportion of the original stimulus intensity: ΔI / I = k." }
]
Do NOT wrap in markdown. No introductory prose.
`;

  const rawText = await callGeminiRaw(prompt, 0.5);
  let cleanJson = rawText.trim();
  if (cleanJson.startsWith("```")) {
    cleanJson = cleanJson.replace(/^```json/i, '').replace(/^```/i, '').replace(/```$/, '').trim();
  }
  return JSON.parse(cleanJson);
}

window.AI_SERVICE = {
  getApiKey: getGeminiApiKey,
  getActiveModel: getActiveGeminiModel,
  generateTopicMCQs,
  analyzeGapsAI,
  explainQuestionSimply,
  generateAIFlashcardsForTopic
};
