// main.js — Core Controller for CHRIST M.Sc. Psychology (HRDM) Study Web App
// Built for Michelle Josephine E (Application No: 272982079)

// --- 1. STATE & STORAGE MANAGEMENT ---
const STORAGE_KEY = 'christ_psych_prep_state_v1';

const defaultState = {
  user: {
    name: 'Michelle Josephine E',
    appNo: '272982079',
    program: 'M.Sc. Psychology (HRDM)',
    campus: 'Bangalore Central Campus',
    examDate: '2026-12-05'
  },
  settings: {
    theme: 'dark',
    geminiKey: ''
  },
  streak: {
    current: 1,
    lastDate: new Date().toDateString()
  },
  activePart: 'all', // 'all', 'A', 'B'
  activeTopicId: 'history_schools',
  masteredConcepts: {}, // conceptId: true
  // Topic Mastery: { topicId: { attempted: 0, correct: 0, wrong: 0, history: [] } }
  topicMastery: {},
  // Question logs: { qId: { attempted: true, correct: bool, selected: optKey, timestamp: ms } }
  questionProgress: {},
  // Spaced Repetition Flashcards
  flashcards: [],
  // Recent sessions
  sessions: []
};

let appState = loadState();

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultState;
  try {
    const parsed = JSON.parse(stored);
    return { ...defaultState, ...parsed };
  } catch (e) {
    return defaultState;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// Custom User Questions Loader
function getCustomQuestions() {
  try {
    return JSON.parse(localStorage.getItem('christ_psych_custom_questions') || '[]');
  } catch (e) {
    return [];
  }
}

function refreshAllQuestions() {
  const custom = getCustomQuestions();
  allQuestions = [...(window.SEED_MCQS || []), ...custom];
}

// Global Questions Pool (360 Curated Seed MCQs + Any Custom User Added Questions)
let allQuestions = [...(window.SEED_MCQS || []), ...getCustomQuestions()];

// --- 2. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  applySettings();
  initSeedFlashcardsIfEmpty();
  setupEventListeners();
  renderDashboard();
  renderHubTopics();
  populateArenaScopeSelect();
  renderMasteryHeatmap();
  renderFlashcards();
  initBankControls();
});

function setupEventListeners() {
  // Mobile drawer controls
  const menuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const mobThemeBtn = document.getElementById('mobile-theme-toggle');

  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function toggleMobileSidebar() {
    if (sidebar) sidebar.classList.toggle('mobile-open');
    if (backdrop) backdrop.classList.toggle('active');
  }

  if (menuBtn) menuBtn.addEventListener('click', toggleMobileSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileSidebar);
  if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);
  if (mobThemeBtn) mobThemeBtn.addEventListener('click', toggleTheme);

  // Desktop & Mobile Navigation Links
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      switchView(el.dataset.target);
      closeMobileSidebar();
    });
  });

  document.querySelectorAll('.mob-nav-item').forEach(el => {
    el.addEventListener('click', () => {
      switchView(el.dataset.target);
      closeMobileSidebar();
    });
  });

  // Part toggles
  document.querySelectorAll('.part-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.part-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activePart = btn.dataset.part;
      saveState();
      renderDashboard();
      renderHubTopics();
      renderMasteryHeatmap();
      if (typeof renderBankQuestions === 'function') renderBankQuestions();
      populateArenaScopeSelect();
      showToast(`Switched view to ${btn.innerText}`, 'info');
    });
  });

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Settings
  document.getElementById('btn-save-key').addEventListener('click', saveApiKey);
  document.getElementById('btn-test-key').addEventListener('click', testApiKey);
  document.getElementById('btn-reset-data').addEventListener('click', resetAllData);

  // Hub buttons
  document.getElementById('hub-btn-drill-topic').addEventListener('click', () => {
    startTopicDrill(appState.activeTopicId);
  });
  document.getElementById('hub-btn-ai-generate').addEventListener('click', handleHubAIGenerate);

  // Arena setup
  const numSlider = document.getElementById('arena-num-slider');
  numSlider.addEventListener('input', (e) => {
    document.getElementById('arena-num-display').innerText = e.target.value;
  });

  document.querySelectorAll('.arena-mode-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.arena-mode-card').forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'var(--border-color)';
      });
      card.classList.add('active');
      card.style.borderColor = 'var(--cyan)';
    });
  });

  document.getElementById('arena-btn-start').addEventListener('click', startArenaSession);
  document.getElementById('arena-btn-quit').addEventListener('click', quitArenaSession);
  document.getElementById('arena-btn-finish').addEventListener('click', finishArenaSession);
  document.getElementById('arena-btn-prev').addEventListener('click', arenaPrevQuestion);
  document.getElementById('arena-btn-next').addEventListener('click', arenaNextQuestion);
  document.getElementById('arena-btn-add-fc').addEventListener('click', addCurrentArenaQToFlashcards);
  document.getElementById('arena-btn-ai-explain').addEventListener('click', handleArenaAIExplain);

  // Mastery AI Gap
  document.getElementById('btn-run-ai-gap').addEventListener('click', runAIGapAnalysis);

  // Flashcards
  document.getElementById('active-fc-card').addEventListener('click', flipActiveFlashcard);
  document.getElementById('fc-btn-generate-ai').addEventListener('click', handleAIFlashcardGenerate);

  // Mock
  document.getElementById('btn-start-full-mock').addEventListener('click', startMockExam);
  document.getElementById('mock-btn-submit-early').addEventListener('click', submitMockExam);
  document.getElementById('mock-btn-prev').addEventListener('click', mockPrevQuestion);
  document.getElementById('mock-btn-next').addEventListener('click', mockNextQuestion);
}

// --- 3. VIEW ROUTER ---
function switchView(targetView) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.target === targetView);
  });

  document.querySelectorAll('.mob-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.target === targetView);
  });

  // Auto-close mobile drawer if open
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');

  // Scroll to top of main view
  const mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.scrollTop = 0;

  document.querySelectorAll('.view-container').forEach(view => {
    if (view.id === `view-${targetView}`) {
      view.classList.remove('hidden');
      view.classList.add('fade-in');
    } else {
      view.classList.add('hidden');
      view.classList.remove('fade-in');
    }
  });

  if (targetView === 'dashboard') renderDashboard();
  if (targetView === 'hub') renderHubContent(appState.activeTopicId);
  if (targetView === 'bank') renderBankQuestions();
  if (targetView === 'mastery') renderMasteryHeatmap();
  if (targetView === 'flashcards') renderFlashcards();
}

window.switchView = switchView;

// --- 4. DASHBOARD RENDERER ---
function renderDashboard() {
  document.getElementById('dash-user-name').innerText = appState.user.name.split(' ')[0];

  const conceptsMap = window.SEED_CONCEPTS || {};
  const activePart = appState.activePart || 'all';

  // Filter topics based on activePart
  const filteredTopicIds = Object.keys(conceptsMap).filter(id => {
    if (activePart === 'all') return true;
    return conceptsMap[id].part === activePart;
  });

  const totalTopics = filteredTopicIds.length;
  let masteredCount = 0;
  let totalAttempted = 0;
  let totalCorrect = 0;
  let totalWrong = 0;

  filteredTopicIds.forEach(topicId => {
    const tm = appState.topicMastery[topicId];
    if (tm && tm.attempted >= 3) {
      const acc = (tm.correct / tm.attempted) * 100;
      if (acc >= 75) masteredCount++;
    }
    if (tm) {
      totalAttempted += tm.attempted || 0;
      totalCorrect += tm.correct || 0;
      totalWrong += tm.wrong || 0;
    }
  });

  const accuracyPct = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  // Available questions in this scope
  const availableQs = allQuestions.filter(q => {
    if (activePart === 'all') return true;
    return q.part === activePart;
  }).length;

  // Update Part Scope Banner & Buttons on Dashboard
  const scopeTitleEl = document.getElementById('dash-scope-title');
  const scopeSubEl = document.getElementById('dash-scope-sub');
  const partDrillBtn = document.getElementById('dash-btn-part-drill');
  const quickDrillBtn = document.getElementById('dash-quick-drill-btn');

  if (scopeTitleEl && scopeSubEl) {
    if (activePart === 'A') {
      scopeTitleEl.innerText = "Viewing: Part A — General & Core Psychology (90 Marks)";
      scopeSubEl.innerText = `Filtered to Part A · 5 Units (Basic Psych, Research, Ethics, Aptitude, GK) · ${totalTopics} Topics · ${availableQs} Practice Questions`;
      if (partDrillBtn) partDrillBtn.innerText = "Drill Part A (10 Qs)";
      if (quickDrillBtn) quickDrillBtn.querySelector('span').innerText = "Quick 10-Question Drill (Part A: 90 Marks)";
    } else if (activePart === 'B') {
      scopeTitleEl.innerText = "Viewing: Part B — HRDM & I/O Specialization (30 Marks)";
      scopeSubEl.innerText = `Filtered to Part B · 2 Units (HRM & I/O Psychology) · ${totalTopics} Topics · ${availableQs} Practice Questions`;
      if (partDrillBtn) partDrillBtn.innerText = "Drill Part B (10 Qs)";
      if (quickDrillBtn) quickDrillBtn.querySelector('span').innerText = "Quick 10-Question Drill (Part B: 30 Marks)";
    } else {
      scopeTitleEl.innerText = "Viewing: All Exam Sections (Part A + Part B: 120 Marks)";
      scopeSubEl.innerText = `Full Syllabus · 7 Units · ${totalTopics} Topics · ${availableQs} Questions Available (100% Offline)`;
      if (partDrillBtn) partDrillBtn.innerText = "Drill Mixed (10 Qs)";
      if (quickDrillBtn) quickDrillBtn.querySelector('span').innerText = "Quick 10-Question Drill (Mixed)";
    }
  }

  // Sync sidebar pills active state
  document.querySelectorAll('.part-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.part === activePart);
  });

  document.getElementById('stat-topics-mastered').innerText = `${masteredCount} / ${totalTopics}`;
  document.getElementById('stat-attempted').innerText = totalAttempted;
  document.getElementById('stat-accuracy').innerText = `${accuracyPct}%`;
  document.getElementById('stat-streak').innerText = `${appState.streak.current} day${appState.streak.current > 1 ? 's' : ''}`;

  const topicsSub = document.getElementById('stat-topics-sub');
  if (topicsSub) {
    topicsSub.innerText = activePart === 'all' ? 'All 33 topics' : activePart === 'A' ? 'Part A (23 topics)' : 'Part B (10 topics)';
  }

  // Due flashcards count
  const now = Date.now();
  const dueCount = appState.flashcards.filter(f => !f.nextReview || f.nextReview <= now).length;
  document.getElementById('dash-fc-count').innerText = dueCount;

  // Exam Countdown Timer (Target: 5 Dec 2026, 09:00 AM IST)
  const examTarget = new Date('2026-12-05T09:00:00+05:30').getTime();
  const diffMs = examTarget - now;
  const countdownEl = document.getElementById('countdown-timer');
  if (countdownEl) {
    if (diffMs > 0) {
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdownEl.innerText = `⏳ ${days}d ${hours}h to Exam`;
    } else {
      countdownEl.innerText = `Exam Period Active`;
    }
  }

  // Weak Topics Alert
  renderDashboardWeakTopics();
}

function renderDashboardWeakTopics() {
  const container = document.getElementById('dash-weak-topics-list');
  const conceptsMap = window.SEED_CONCEPTS || {};
  const activePart = appState.activePart || 'all';

  // Find topics with lowest accuracy filtered by activePart
  const rankedTopics = [];
  Object.keys(conceptsMap).forEach(topicId => {
    const t = conceptsMap[topicId];
    if (activePart !== 'all' && t.part !== activePart) return;

    const tm = appState.topicMastery[topicId];
    const attempted = tm ? tm.attempted : 0;
    const correct = tm ? tm.correct : 0;
    const acc = attempted > 0 ? Math.round((correct / attempted) * 100) : null;
    rankedTopics.push({
      id: topicId,
      title: t.title,
      part: t.part,
      unit: t.unit,
      attempted,
      accuracy: acc
    });
  });

  // Filter topics that have been attempted and are weak (<65%) OR unattempted high-weight topics
  const weakOrUnattempted = rankedTopics
    .filter(t => (t.attempted > 0 && t.accuracy < 65) || t.attempted === 0)
    .sort((a, b) => {
      if (a.attempted > 0 && b.attempted > 0) return a.accuracy - b.accuracy;
      if (a.attempted > 0) return -1;
      return 1;
    })
    .slice(0, 3);

  if (weakOrUnattempted.length === 0) {
    container.innerHTML = `<p class="text-green" style="font-size:0.9rem;">🌟 Outstanding! All attempted topics in Part ${activePart} are above 65% accuracy. Try a full 120-Q Mock!</p>`;
    return;
  }

  container.innerHTML = weakOrUnattempted.map(t => `
    <div class="weak-topic-row">
      <div>
        <div style="font-size:0.88rem; font-weight:600;">${t.title}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">Part ${t.part} · ${t.unit}</div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:0.85rem; font-family:var(--font-mono); font-weight:600; color:${t.accuracy === null ? 'var(--text-muted)' : t.accuracy < 50 ? 'var(--red)' : 'var(--yellow)'};">
          ${t.accuracy === null ? 'New' : t.accuracy + '%'}
        </span>
        <button class="btn btn-cyan" style="padding:4px 8px; font-size:0.75rem;" onclick="startTopicDrill('${t.id}')">Drill</button>
      </div>
    </div>
  `).join('');
}

// --- 5. LEARNING HUB CONTROLLER ---
function renderHubTopics() {
  const container = document.getElementById('hub-topic-list');
  container.innerHTML = '';
  const conceptsMap = window.SEED_CONCEPTS || {};

  const topicIds = Object.keys(conceptsMap).filter(id => {
    if (appState.activePart === 'all') return true;
    return conceptsMap[id].part === appState.activePart;
  });

  topicIds.forEach((topicId, idx) => {
    const topic = conceptsMap[topicId];
    const tm = appState.topicMastery[topicId];
    const attempted = tm ? tm.attempted : 0;
    const correct = tm ? tm.correct : 0;
    const acc = attempted > 0 ? Math.round((correct / attempted) * 100) : null;

    const el = document.createElement('div');
    el.className = `hub-topic-item ${topicId === appState.activeTopicId ? 'active' : ''}`;
    el.innerHTML = `
      <div>
        <div class="hub-topic-title">${topic.title}</div>
        <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">Part ${topic.part} · ${topic.unit}</div>
      </div>
      <div class="hub-topic-badge" style="color:${acc === null ? 'var(--text-muted)' : acc >= 75 ? 'var(--green)' : acc >= 60 ? 'var(--yellow)' : 'var(--red)'}">
        ${acc === null ? '—' : acc + '%'}
      </div>
    `;
    el.onclick = () => {
      appState.activeTopicId = topicId;
      document.querySelectorAll('.hub-topic-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      renderHubContent(topicId);
    };
    container.appendChild(el);
  });

  if (topicIds.length > 0) {
    if (!topicIds.includes(appState.activeTopicId)) {
      appState.activeTopicId = topicIds[0];
    }
    renderHubContent(appState.activeTopicId);
  }
}

function renderHubContent(topicId) {
  const container = document.getElementById('hub-content-area');
  const conceptsMap = window.SEED_CONCEPTS || {};
  const topic = conceptsMap[topicId];
  if (!topic) return;

  const tm = appState.topicMastery[topicId] || { attempted: 0, correct: 0 };
  const acc = tm.attempted > 0 ? Math.round((tm.correct / tm.attempted) * 100) : 0;

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-color);">
      <div>
        <span class="term-tag">Part ${topic.part} (${topic.marks} Marks)</span>
        <h2 style="margin:8px 0 2px 0;">${topic.title}</h2>
        <span class="text-muted" style="font-size:0.85rem;">Unit: ${topic.unit} · Practice History: ${tm.attempted} Qs (${acc}% accuracy)</span>
      </div>
    </div>
  `;

  // Concept Cards
  topic.concepts.forEach((concept, cIdx) => {
    const isMastered = !!appState.masteredConcepts[concept.id];
    html += `
      <div class="card concept-card" id="card-${concept.id}">
        <div class="concept-header">
          <div class="concept-title">
            <span>${concept.icon || '📖'}</span>
            <span>${concept.title}</span>
          </div>
          <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; cursor:pointer; user-select:none;">
            <input type="checkbox" ${isMastered ? 'checked' : ''} onchange="toggleConceptMastery('${concept.id}', this.checked)" style="accent-color:var(--green); cursor:pointer;">
            <span style="color:${isMastered ? 'var(--green)' : 'var(--text-muted)'}; font-weight:600;">${isMastered ? '✓ Mastered' : 'Mark as Done'}</span>
          </label>
        </div>
        <div class="concept-summary">${concept.summary}</div>

        <div class="key-terms-row">
          ${(concept.key_terms || []).map(term => `<span class="term-tag">${term}</span>`).join('')}
        </div>

        ${concept.trap ? `
          <div class="trap-box">
            <strong>⚡ EXAM TRAP:</strong> ${concept.trap}
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

function toggleConceptMastery(conceptId, isDone) {
  if (isDone) {
    appState.masteredConcepts[conceptId] = true;
    showToast('Marked as mastered!', 'success');
  } else {
    delete appState.masteredConcepts[conceptId];
  }
  saveState();
  renderDashboard();
}
window.toggleConceptMastery = toggleConceptMastery;

async function handleHubAIGenerate() {
  const conceptsMap = window.SEED_CONCEPTS || {};
  const topic = conceptsMap[appState.activeTopicId];
  if (!topic) return;

  const btn = document.getElementById('hub-btn-ai-generate');
  const originalText = btn.innerHTML;
  btn.innerHTML = `<span class="text-cyan">Generating...</span>`;
  btn.classList.add('disabled');

  try {
    showToast(`Generating 5 new MCQs for ${topic.title}...`, 'info');
    const newQs = await AI_SERVICE.generateTopicMCQs(topic.title, topic.unit, 5);
    newQs.forEach(q => {
      q.topic = appState.activeTopicId;
      allQuestions.push(q);
    });
    showToast(`Added 5 AI questions to question bank!`, 'success');
    populateArenaScopeSelect();
    startTopicDrill(appState.activeTopicId);
  } catch (err) {
    showToast(err.message || 'AI Generation failed.', 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.classList.remove('disabled');
  }
}

// --- 6. MCQ ARENA CONTROLLER ---
let arenaSession = {
  questions: [],
  currentIndex: 0,
  answers: {}, // qId: selectedOpt
  mode: 'immediate',
  negativeMarking: true,
  timerInterval: null,
  timeLeft: 45
};

function populateArenaScopeSelect() {
  const sel = document.getElementById('arena-scope-select');
  if (!sel) return;
  const conceptsMap = window.SEED_CONCEPTS || {};

  sel.innerHTML = `
    <option value="all">Full Syllabus (Part A + Part B) [${allQuestions.length} Qs]</option>
    <option value="part_a">Part A Only: General & Core Psychology (90 marks)</option>
    <option value="part_b">Part B Only: HRM & I/O Psychology (30 marks)</option>
  `;

  Object.keys(conceptsMap).forEach(topicId => {
    const t = conceptsMap[topicId];
    const qCount = allQuestions.filter(q => q.topic === topicId).length;
    sel.innerHTML += `<option value="${topicId}">${t.title} (${qCount} Qs)</option>`;
  });
}

function startTopicDrill(topicId) {
  const select = document.getElementById('arena-scope-select');
  if (select) select.value = topicId;
  switchView('arena');
  document.getElementById('arena-num-slider').value = 10;
  document.getElementById('arena-num-display').innerText = 10;
  startArenaSession();
}
window.startTopicDrill = startTopicDrill;

function quickStartDrill(count = 10) {
  switchView('arena');
  document.getElementById('arena-scope-select').value = 'all';
  document.getElementById('arena-num-slider').value = count;
  document.getElementById('arena-num-display').innerText = count;
  startArenaSession();
}
window.quickStartDrill = quickStartDrill;

function startArenaSession() {
  const scope = document.getElementById('arena-scope-select').value;
  const count = parseInt(document.getElementById('arena-num-slider').value, 10);
  const activeModeCard = document.querySelector('.arena-mode-card.active');
  const mode = activeModeCard ? activeModeCard.dataset.mode : 'immediate';
  const negMarking = document.getElementById('arena-negative-marking').checked;

  let pool = [...allQuestions];
  if (scope === 'part_a') {
    pool = pool.filter(q => q.part === 'A');
  } else if (scope === 'part_b') {
    pool = pool.filter(q => q.part === 'B');
  } else if (scope !== 'all') {
    pool = pool.filter(q => q.topic === scope);
  }

  if (pool.length === 0) {
    showToast('No questions found for this topic yet. Generate some with AI!', 'error');
    return;
  }

  // Shuffle and slice
  pool.sort(() => Math.random() - 0.5);
  arenaSession.questions = pool.slice(0, count);
  arenaSession.currentIndex = 0;
  arenaSession.answers = {};
  arenaSession.mode = mode;
  arenaSession.negativeMarking = negMarking;

  document.getElementById('arena-config').classList.add('hidden');
  document.getElementById('arena-results').classList.add('hidden');
  document.getElementById('arena-active').classList.remove('hidden');
  document.body.classList.add('in-exam-mode');

  renderArenaQuestion();
}

function renderArenaQuestion() {
  const q = arenaSession.questions[arenaSession.currentIndex];
  if (!q) return;

  document.getElementById('arena-q-curr').innerText = arenaSession.currentIndex + 1;
  document.getElementById('arena-q-total').innerText = arenaSession.questions.length;
  document.getElementById('arena-q-text').innerText = q.question;

  const conceptsMap = window.SEED_CONCEPTS || {};
  const topicTitle = conceptsMap[q.topic]?.title || q.unit || 'General';
  document.getElementById('arena-q-badge').innerText = `PART ${q.part || 'A'} · ${topicTitle.toUpperCase()}`;

  const optsContainer = document.getElementById('arena-options-container');
  optsContainer.innerHTML = '';

  const userAnswer = arenaSession.answers[q.id];
  const isAnswered = userAnswer !== undefined;
  const showFeedback = arenaSession.mode === 'immediate' && isAnswered;

  ['a', 'b', 'c', 'd'].forEach(optKey => {
    const optText = q.options[optKey];
    if (!optText) return;

    const btn = document.createElement('button');
    btn.className = 'option-btn';

    if (showFeedback) {
      btn.classList.add('disabled');
      if (optKey === q.answer) btn.classList.add('correct');
      if (userAnswer === optKey && optKey !== q.answer) btn.classList.add('wrong');
    } else if (userAnswer === optKey) {
      btn.classList.add('selected');
    }

    btn.innerHTML = `<span class="opt-letter">${optKey.toUpperCase()}</span> <span>${optText}</span>`;

    if (!isAnswered || arenaSession.mode !== 'immediate') {
      btn.onclick = () => selectArenaOption(q.id, optKey);
    }

    optsContainer.appendChild(btn);
  });

  // Explanation Box
  const expBox = document.getElementById('arena-explanation-box');
  const expText = document.getElementById('arena-explanation-text');
  const aiBox = document.getElementById('arena-ai-explain-response');
  aiBox.classList.add('hidden');
  aiBox.innerHTML = '';

  if (showFeedback && q.explanation) {
    expBox.classList.remove('hidden');
    expText.innerHTML = q.explanation;
  } else {
    expBox.classList.add('hidden');
  }

  // Navigation button states
  document.getElementById('arena-btn-prev').disabled = arenaSession.currentIndex === 0;
  const nextBtn = document.getElementById('arena-btn-next');
  if (arenaSession.currentIndex === arenaSession.questions.length - 1) {
    nextBtn.innerText = 'Submit Drill';
    nextBtn.onclick = finishArenaSession;
  } else {
    nextBtn.innerText = 'Next Question';
    nextBtn.onclick = arenaNextQuestion;
  }

  renderArenaPalette();

  // Handle Timed Mode
  clearInterval(arenaSession.timerInterval);
  if (arenaSession.mode === 'timed') {
    arenaSession.timeLeft = 45;
    const timerEl = document.getElementById('arena-timer');
    timerEl.style.display = 'block';
    timerEl.innerText = `${arenaSession.timeLeft}s`;
    arenaSession.timerInterval = setInterval(() => {
      arenaSession.timeLeft--;
      timerEl.innerText = `${arenaSession.timeLeft}s`;
      if (arenaSession.timeLeft <= 0) {
        clearInterval(arenaSession.timerInterval);
        if (arenaSession.currentIndex < arenaSession.questions.length - 1) {
          arenaNextQuestion();
        } else {
          finishArenaSession();
        }
      }
    }, 1000);
  } else {
    document.getElementById('arena-timer').style.display = 'none';
  }
}

function selectArenaOption(qId, optKey) {
  arenaSession.answers[qId] = optKey;
  const q = arenaSession.questions[arenaSession.currentIndex];
  const isCorrect = optKey === q.answer;

  // Log in state
  appState.questionProgress[qId] = {
    attempted: true,
    correct: isCorrect,
    selected: optKey,
    timestamp: Date.now()
  };

  // Update Topic Mastery
  if (q.topic) {
    if (!appState.topicMastery[q.topic]) {
      appState.topicMastery[q.topic] = { attempted: 0, correct: 0, wrong: 0, errorLog: [] };
    }
    const tm = appState.topicMastery[q.topic];
    tm.attempted++;
    if (isCorrect) {
      tm.correct++;
    } else {
      tm.wrong++;
      tm.errorLog = tm.errorLog || [];
      tm.errorLog.push({ qId, selected: optKey, correct: q.answer, qText: q.question });
    }
  }

  saveState();
  renderArenaQuestion();
}

function arenaNextQuestion() {
  if (arenaSession.currentIndex < arenaSession.questions.length - 1) {
    arenaSession.currentIndex++;
    renderArenaQuestion();
  }
}

function arenaPrevQuestion() {
  if (arenaSession.currentIndex > 0) {
    arenaSession.currentIndex--;
    renderArenaQuestion();
  }
}

function renderArenaPalette() {
  const palette = document.getElementById('arena-palette');
  palette.innerHTML = '';
  arenaSession.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `palette-btn ${idx === arenaSession.currentIndex ? 'active' : ''}`;
    btn.innerText = idx + 1;

    const ans = arenaSession.answers[q.id];
    if (ans) {
      if (arenaSession.mode === 'immediate') {
        btn.classList.add(ans === q.answer ? 'correct' : 'wrong');
      } else {
        btn.classList.add('answered');
      }
    }

    btn.onclick = () => {
      arenaSession.currentIndex = idx;
      renderArenaQuestion();
    };
    palette.appendChild(btn);
  });
}

function finishArenaSession() {
  clearInterval(arenaSession.timerInterval);
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  arenaSession.questions.forEach(q => {
    const userAns = arenaSession.answers[q.id];
    if (!userAns) {
      skipped++;
    } else if (userAns === q.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const penalty = arenaSession.negativeMarking ? wrong * 0.25 : 0;
  const netScore = Math.max(0, +(correct - penalty).toFixed(2));
  const maxScore = arenaSession.questions.length;
  const scorePct = maxScore > 0 ? Math.round((netScore / maxScore) * 100) : 0;

  document.getElementById('arena-active').classList.add('hidden');
  document.getElementById('arena-results').classList.remove('hidden');
  document.body.classList.remove('in-exam-mode');

  document.getElementById('arena-res-score-pct').innerText = `${scorePct}%`;
  document.getElementById('arena-res-summary').innerText = `You earned ${netScore} net marks out of ${maxScore} (${correct} correct, ${wrong} wrong, ${skipped} skipped)`;
  document.getElementById('arena-res-correct').innerText = correct;
  document.getElementById('arena-res-wrong').innerText = wrong;
  document.getElementById('arena-res-skipped').innerText = skipped;
  document.getElementById('arena-res-net').innerText = netScore;

  // Render Detailed Review
  const reviewList = document.getElementById('arena-res-review-list');
  reviewList.innerHTML = '';
  arenaSession.questions.forEach((q, idx) => {
    const userAns = arenaSession.answers[q.id];
    const isCorrect = userAns === q.answer;
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '16px';
    card.style.borderLeft = `4px solid ${!userAns ? 'var(--text-muted)' : isCorrect ? 'var(--green)' : 'var(--red)'}`;
    card.innerHTML = `
      <div style="font-size:0.8rem; font-family:var(--font-mono); color:var(--cyan); margin-bottom:4px;">Question ${idx + 1}</div>
      <div style="font-weight:500; font-size:0.95rem; margin-bottom:10px;">${q.question}</div>
      <div style="font-size:0.88rem; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Correct:</strong> <span class="text-green">${q.options[q.answer]}</span></div>
        ${userAns ? `<div><strong>Your Answer:</strong> <span class="${isCorrect ? 'text-green' : 'text-red'}">${q.options[userAns]}</span></div>` : '<div class="text-muted">Skipped</div>'}
      </div>
      ${q.explanation ? `<div style="margin-top:10px; font-size:0.84rem; color:var(--text-muted); border-top:1px solid var(--border-color); padding-top:8px;">${q.explanation}</div>` : ''}
    `;
    reviewList.appendChild(card);
  });

  // Log session in history
  appState.sessions.push({
    type: 'arena',
    timestamp: Date.now(),
    scope: arenaSession.scope,
    mode: arenaSession.mode,
    questionsCount: maxScore,
    correct,
    wrong,
    skipped,
    netScore,
    scorePct
  });
  saveState();

  renderDashboard();
  renderMasteryHeatmap();
}

function quitArenaSession() {
  if (confirm('Are you sure you want to end this drill session?')) {
    clearInterval(arenaSession.timerInterval);
    document.body.classList.remove('in-exam-mode');
    document.getElementById('arena-active').classList.add('hidden');
    document.getElementById('arena-config').classList.remove('hidden');
  }
}

function restartArena() {
  document.getElementById('arena-results').classList.add('hidden');
  document.getElementById('arena-config').classList.remove('hidden');
}
window.restartArena = restartArena;

function addCurrentArenaQToFlashcards() {
  const q = arenaSession.questions[arenaSession.currentIndex];
  if (!q) return;

  const exists = appState.flashcards.some(f => f.qId === q.id);
  if (exists) {
    showToast('Already in your flashcards library!', 'info');
    return;
  }

  appState.flashcards.push({
    id: `fc_${Date.now()}`,
    qId: q.id,
    front: q.question,
    back: `<strong>${q.options[q.answer]}</strong><br><br>${q.explanation || ''}`,
    ease: 2.5,
    interval: 0,
    nextReview: Date.now(),
    lastResponse: 'none'
  });

  saveState();
  showToast('Saved to Spaced Flashcards!', 'success');
  renderDashboard();
  renderFlashcards();
}

async function handleArenaAIExplain() {
  const q = arenaSession.questions[arenaSession.currentIndex];
  if (!q) return;
  const userAns = arenaSession.answers[q.id];

  const aiBox = document.getElementById('arena-ai-explain-response');
  aiBox.classList.remove('hidden');
  aiBox.innerHTML = `<span class="text-cyan">✨ Gemini is generating an intuitive explanation...</span>`;

  try {
    const expl = await AI_SERVICE.explainQuestionSimply(q, userAns);
    aiBox.innerHTML = expl;
  } catch (err) {
    aiBox.innerHTML = `<span class="text-red">AI Error: ${err.message}</span>`;
  }
}

// --- 7. MASTERY HEATMAP CONTROLLER ---
function renderMasteryHeatmap() {
  const container = document.getElementById('mastery-heatmap-container');
  if (!container) return;
  container.innerHTML = '';
  const conceptsMap = window.SEED_CONCEPTS || {};

  Object.keys(conceptsMap).forEach(topicId => {
    const t = conceptsMap[topicId];
    if (appState.activePart !== 'all' && t.part !== appState.activePart) return;

    const tm = appState.topicMastery[topicId];
    const attempted = tm ? tm.attempted : 0;
    const correct = tm ? tm.correct : 0;
    const acc = attempted > 0 ? Math.round((correct / attempted) * 100) : null;

    let statusClass = 'status-new';
    let fillColor = 'rgba(255,255,255,0.2)';
    let statusText = 'Not Attempted';

    if (acc !== null) {
      if (acc >= 75) {
        statusClass = 'status-high';
        fillColor = 'var(--green)';
        statusText = 'Mastered';
      } else if (acc >= 60) {
        statusClass = 'status-mid';
        fillColor = 'var(--yellow)';
        statusText = 'Developing';
      } else {
        statusClass = 'status-low';
        fillColor = 'var(--red)';
        statusText = 'Critical Gap';
      }
    }

    const card = document.createElement('div');
    card.className = `heatmap-card ${statusClass}`;
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <span class="term-tag">Part ${t.part}</span>
        <span style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:${fillColor};">${acc === null ? '—' : acc + '%'}</span>
      </div>
      <div style="font-size:1rem; font-weight:600; margin-bottom:4px;">${t.title}</div>
      <div style="font-size:0.75rem; color:var(--text-muted);">${t.unit} · ${attempted} attempted</div>
      <div class="heatmap-bar">
        <div class="heatmap-fill" style="width:${acc || 0}%; background:${fillColor};"></div>
      </div>
    `;

    card.onclick = () => {
      appState.activeTopicId = topicId;
      switchView('hub');
    };

    container.appendChild(card);
  });
}

async function runAIGapAnalysis() {
  const btn = document.getElementById('btn-run-ai-gap');
  const card = document.getElementById('ai-gap-results-card');
  const content = document.getElementById('ai-gap-content');

  btn.classList.add('disabled');
  btn.innerHTML = `<span>⏳</span> Analyzing Diagnostic Data...`;
  card.classList.remove('hidden');
  content.innerHTML = `<span class="text-cyan">Querying Gemini API with your mastery records...</span>`;

  try {
    // Gather error logs
    const errorLog = [];
    Object.keys(appState.topicMastery).forEach(tId => {
      const tm = appState.topicMastery[tId];
      if (tm.errorLog) errorLog.push(...tm.errorLog);
    });

    const report = await AI_SERVICE.analyzeGapsAI(appState.topicMastery, errorLog);
    content.innerHTML = report;
    showToast('AI Gap Analysis Complete!', 'success');
  } catch (err) {
    content.innerHTML = `<span class="text-red">Error: ${err.message}</span>`;
  } finally {
    btn.classList.remove('disabled');
    btn.innerHTML = `<span>🧠</span> Run AI Diagnostic Gap Analysis`;
  }
}

// --- 8. FLASHCARDS CONTROLLER (SM-2 Algorithm) ---
function initSeedFlashcardsIfEmpty() {
  if (appState.flashcards && appState.flashcards.length > 0) return;

  appState.flashcards = [
    {
      id: 'fc_init_1',
      front: 'What does Weber\'s Law state regarding sensory perception?',
      back: 'The Just Noticeable Difference (JND) is a constant proportion of the original stimulus intensity: <strong>ΔI / I = k</strong>, not a constant absolute value.',
      ease: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastResponse: 'none'
    },
    {
      id: 'fc_init_2',
      front: 'What is the crucial difference between Negative Reinforcement and Punishment?',
      back: '<strong>Negative Reinforcement INCREASES</strong> a target behavior by removing an aversive stimulus.<br><br><strong>Punishment DECREASES</strong> a behavior by adding an aversive stimulus or removing a pleasant one.',
      ease: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastResponse: 'none'
    },
    {
      id: 'fc_init_3',
      front: 'What are the 3 variables in Victor Vroom\'s Expectancy Theory of Motivation?',
      back: '<strong>Motivation = Expectancy × Instrumentality × Valence</strong>.<br><br>If any single component is zero, total motivation drops to zero.',
      ease: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastResponse: 'none'
    },
    {
      id: 'fc_init_4',
      front: 'According to Edgar Schein, what is the deepest and most powerful level of Organizational Culture?',
      back: '<strong>Basic Underlying Assumptions</strong> (unconscious, taken-for-granted beliefs that actually govern organizational perception and behavior).',
      ease: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastResponse: 'none'
    }
  ];
  saveState();
}

let activeDueCard = null;

function renderFlashcards() {
  const now = Date.now();
  const dueCards = appState.flashcards.filter(f => !f.nextReview || f.nextReview <= now);
  document.getElementById('fc-due-num').innerText = dueCards.length;
  document.getElementById('fc-total-count').innerText = appState.flashcards.length;

  const studyBox = document.getElementById('fc-study-box');
  const emptyState = document.getElementById('fc-empty-state');
  const cardEl = document.getElementById('active-fc-card');
  const buttonsRow = document.getElementById('fc-buttons-row');

  if (dueCards.length === 0) {
    studyBox.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    studyBox.classList.remove('hidden');
    emptyState.classList.add('hidden');
    cardEl.classList.remove('flipped');
    buttonsRow.classList.add('hidden');

    activeDueCard = dueCards[0];
    document.getElementById('fc-front-text').innerHTML = activeDueCard.front;
    document.getElementById('fc-back-text').innerHTML = activeDueCard.back;
  }

  renderFlashcardBuckets();
}

function flipActiveFlashcard() {
  const cardEl = document.getElementById('active-fc-card');
  cardEl.classList.add('flipped');
  document.getElementById('fc-buttons-row').classList.remove('hidden');
}

function handleFCResponse(quality) {
  if (!activeDueCard) return;

  activeDueCard.lastResponse = quality;
  if (quality === 'hard') {
    activeDueCard.ease = Math.max(1.3, (activeDueCard.ease || 2.5) - 0.2);
    activeDueCard.interval = 0;
    activeDueCard.nextReview = Date.now() + 10 * 60 * 1000; // 10 minutes
  } else if (quality === 'good') {
    activeDueCard.interval = (activeDueCard.interval === 0) ? 1 : Math.round(activeDueCard.interval * activeDueCard.ease);
    activeDueCard.nextReview = Date.now() + activeDueCard.interval * 86400000; // days
  } else if (quality === 'easy') {
    activeDueCard.ease = (activeDueCard.ease || 2.5) + 0.15;
    activeDueCard.interval = (activeDueCard.interval === 0) ? 3 : Math.round(activeDueCard.interval * activeDueCard.ease * 1.3);
    activeDueCard.nextReview = Date.now() + activeDueCard.interval * 86400000;
  }

  saveState();
  renderFlashcards();
}
window.handleFCResponse = handleFCResponse;

function renderFlashcardBuckets() {
  const grid = document.getElementById('fc-buckets-grid');
  grid.innerHTML = '';

  const buckets = [
    { key: 'hard', label: 'Hard', icon: '🔴', color: 'var(--red)' },
    { key: 'good', label: 'Good', icon: '🟡', color: 'var(--yellow)' },
    { key: 'easy', label: 'Easy / Mastered', icon: '🟢', color: 'var(--green)' },
    { key: 'none', label: 'New / Unreviewed', icon: '⚪', color: 'var(--cyan)' }
  ];

  buckets.forEach(b => {
    const count = appState.flashcards.filter(f => (f.lastResponse || 'none') === b.key).length;
    const div = document.createElement('div');
    div.className = 'card';
    div.style.padding = '18px';
    div.style.textAlign = 'center';
    div.innerHTML = `
      <div style="font-size:1.8rem; margin-bottom:4px;">${b.icon}</div>
      <div style="font-weight:600; font-size:0.92rem; color:${b.color};">${b.label}</div>
      <div style="font-size:1.6rem; font-weight:700; margin-top:4px;">${count}</div>
      <div style="font-size:0.75rem; color:var(--text-muted);">cards</div>
    `;
    grid.appendChild(div);
  });
}

async function handleAIFlashcardGenerate() {
  const conceptsMap = window.SEED_CONCEPTS || {};
  const topic = conceptsMap[appState.activeTopicId] || Object.values(conceptsMap)[0];
  const btn = document.getElementById('fc-btn-generate-ai');

  btn.classList.add('disabled');
  btn.innerHTML = `<span>⏳</span> Generating Cards...`;

  try {
    const summary = topic.concepts.map(c => c.summary).join(' ');
    const newCards = await AI_SERVICE.generateAIFlashcardsForTopic(topic.title, summary);
    newCards.forEach(c => {
      appState.flashcards.push({
        id: `fc_ai_${Date.now()}_${Math.random()}`,
        front: c.front,
        back: c.back,
        ease: 2.5,
        interval: 0,
        nextReview: Date.now(),
        lastResponse: 'none'
      });
    });
    saveState();
    showToast(`Added ${newCards.length} flashcards on ${topic.title}!`, 'success');
    renderFlashcards();
  } catch (err) {
    showToast(err.message || 'Failed to generate flashcards.', 'error');
  } finally {
    btn.classList.remove('disabled');
    btn.innerHTML = `<span>✨</span> Generate AI Flashcards`;
  }
}

// --- 9. FULL 120-Q MOCK EXAM SIMULATION ---
let mockState = {
  questions: [],
  currentIndex: 0,
  answers: {},
  timerSeconds: 90 * 60, // 90 minutes
  timerInterval: null
};

function startMockExam() {
  // Construct 120 Questions proportionally according to official CHRIST entrance blueprint:
  // Part A: Basic Psych (30), Research (15), Ethics (15), Aptitude (15), GK (15) = 90
  // Part B: HRM (15), I/O (15) = 30
  const blueprintQuotas = [
    { unit: 'Basic Psychology', count: 30 },
    { unit: 'Research Aptitude', count: 15 },
    { unit: 'Ethical Concerns', count: 15 },
    { unit: 'General Aptitude', count: 15 },
    { unit: 'Current Affairs & GK', count: 15 },
    { unit: 'Human Resource Management', count: 15 },
    { unit: 'I/O Psychology', count: 15 }
  ];

  let mock120 = [];

  blueprintQuotas.forEach(quota => {
    let unitQuestions = allQuestions.filter(q => q.unit === quota.unit);
    // Shuffle unit pool
    unitQuestions.sort(() => Math.random() - 0.5);

    let picked = [];
    if (unitQuestions.length >= quota.count) {
      picked = unitQuestions.slice(0, quota.count);
    } else if (unitQuestions.length > 0) {
      while (picked.length < quota.count) {
        for (let q of unitQuestions) {
          if (picked.length >= quota.count) break;
          picked.push(q);
        }
      }
    }
    mock120.push(...picked);
  });

  // Assign mockUniqueId to each question
  mock120 = mock120.map((q, idx) => ({
    ...q,
    mockUniqueId: `mock_q_${idx + 1}`
  }));

  mockState.questions = mock120;
  mockState.currentIndex = 0;
  mockState.answers = {};
  mockState.timerSeconds = 90 * 60;

  document.getElementById('mock-briefing').classList.add('hidden');
  document.getElementById('mock-results').classList.add('hidden');
  document.getElementById('mock-active').classList.remove('hidden');
  document.body.classList.add('in-exam-mode');

  clearInterval(mockState.timerInterval);
  mockState.timerInterval = setInterval(updateMockTimer, 1000);

  renderMockQuestion();
}

function updateMockTimer() {
  mockState.timerSeconds--;
  const m = Math.floor(mockState.timerSeconds / 60).toString().padStart(2, '0');
  const s = (mockState.timerSeconds % 60).toString().padStart(2, '0');
  const timerEl = document.getElementById('mock-timer');
  timerEl.innerText = `${m}:${s}`;

  if (mockState.timerSeconds < 15 * 60) {
    timerEl.style.color = 'var(--yellow)';
  }
  if (mockState.timerSeconds < 5 * 60) {
    timerEl.style.color = 'var(--red)';
  }

  if (mockState.timerSeconds <= 0) {
    clearInterval(mockState.timerInterval);
    submitMockExam();
  }
}

function renderMockQuestion() {
  const q = mockState.questions[mockState.currentIndex];
  if (!q) return;

  document.getElementById('mock-q-current').innerText = mockState.currentIndex + 1;
  document.getElementById('mock-q-text').innerText = q.question;

  const conceptsMap = window.SEED_CONCEPTS || {};
  const topicTitle = conceptsMap[q.topic]?.title || q.unit || 'General';
  document.getElementById('mock-section-tag').innerText = `Part ${q.part || 'A'} · ${topicTitle}`;

  const container = document.getElementById('mock-options-container');
  container.innerHTML = '';

  const userAns = mockState.answers[q.mockUniqueId];

  ['a', 'b', 'c', 'd'].forEach(optKey => {
    const optText = q.options[optKey];
    if (!optText) return;

    const btn = document.createElement('button');
    btn.className = `option-btn ${userAns === optKey ? 'selected' : ''}`;
    btn.innerHTML = `<span class="opt-letter">${optKey.toUpperCase()}</span> <span>${optText}</span>`;
    btn.onclick = () => {
      mockState.answers[q.mockUniqueId] = optKey;
      renderMockQuestion();
    };
    container.appendChild(btn);
  });

  document.getElementById('mock-btn-prev').disabled = mockState.currentIndex === 0;
  const nextBtn = document.getElementById('mock-btn-next');
  if (mockState.currentIndex === 119) {
    nextBtn.innerText = 'Review & Submit';
    nextBtn.onclick = submitMockExam;
  } else {
    nextBtn.innerText = 'Next Question';
    nextBtn.onclick = mockNextQuestion;
  }

  renderMockPalette();
}

function mockNextQuestion() {
  if (mockState.currentIndex < 119) {
    mockState.currentIndex++;
    renderMockQuestion();
  }
}

function mockPrevQuestion() {
  if (mockState.currentIndex > 0) {
    mockState.currentIndex--;
    renderMockQuestion();
  }
}

function renderMockPalette() {
  const palette = document.getElementById('mock-palette');
  palette.innerHTML = '';
  mockState.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `palette-btn ${idx === mockState.currentIndex ? 'active' : ''} ${mockState.answers[q.mockUniqueId] ? 'answered' : ''}`;
    btn.innerText = idx + 1;
    btn.onclick = () => {
      mockState.currentIndex = idx;
      renderMockQuestion();
    };
    palette.appendChild(btn);
  });
}

function submitMockExam() {
  if (!confirm('Are you ready to submit your exam?')) return;
  clearInterval(mockState.timerInterval);

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  mockState.questions.forEach(q => {
    const userAns = mockState.answers[q.mockUniqueId];
    if (!userAns) skipped++;
    else if (userAns === q.answer) correct++;
    else wrong++;
  });

  const penalty = wrong * 0.25;
  const netScore = Math.max(0, +(correct - penalty).toFixed(2));
  const accPct = Math.round((correct / (correct + wrong || 1)) * 100);

  document.body.classList.remove('in-exam-mode');
  document.getElementById('mock-active').classList.add('hidden');
  document.getElementById('mock-results').classList.remove('hidden');

  document.getElementById('mock-res-net').innerText = `${netScore} / 120`;
  document.getElementById('mock-res-sub').innerText = `Completed in ${Math.round((90 * 60 - mockState.timerSeconds) / 60)} minutes`;
  document.getElementById('mock-res-correct').innerText = correct;
  document.getElementById('mock-res-wrong').innerText = wrong;
  document.getElementById('mock-res-skipped').innerText = skipped;
  document.getElementById('mock-res-accuracy').innerText = `${accPct}%`;

  // Update Topic Mastery & Question Logs from Mock
  mockState.questions.forEach(q => {
    const userAns = mockState.answers[q.mockUniqueId];
    if (userAns && q.topic) {
      if (!appState.topicMastery[q.topic]) {
        appState.topicMastery[q.topic] = { attempted: 0, correct: 0, wrong: 0, errorLog: [] };
      }
      const tm = appState.topicMastery[q.topic];
      tm.attempted++;
      if (userAns === q.answer) {
        tm.correct++;
      } else {
        tm.wrong++;
        tm.errorLog.push({
          questionId: q.id,
          question: q.question,
          userAnswer: userAns,
          correctAnswer: q.answer,
          timestamp: Date.now()
        });
      }
    }
  });

  // Log Mock Session History
  appState.sessions.push({
    type: 'mock',
    timestamp: Date.now(),
    durationSeconds: 90 * 60 - mockState.timerSeconds,
    questionsCount: 120,
    correct,
    wrong,
    skipped,
    netScore,
    scorePct: accPct
  });
  saveState();
  renderDashboard();
  renderMasteryHeatmap();

  // Render full review
  const reviewEl = document.getElementById('mock-res-review-container');
  reviewEl.innerHTML = '';
  mockState.questions.forEach((q, idx) => {
    const userAns = mockState.answers[q.mockUniqueId];
    const isCorrect = userAns === q.answer;
    const div = document.createElement('div');
    div.className = 'card';
    div.style.padding = '14px';
    div.style.borderLeft = `4px solid ${!userAns ? 'var(--text-muted)' : isCorrect ? 'var(--green)' : 'var(--red)'}`;
    div.innerHTML = `
      <div style="font-size:0.78rem; font-family:var(--font-mono); color:var(--cyan);">Q${idx + 1} (${q.unit})</div>
      <div style="font-weight:500; margin:4px 0 8px 0;">${q.question}</div>
      <div style="font-size:0.86rem;">
        <div><strong>Correct:</strong> <span class="text-green">${q.options[q.answer]}</span></div>
        ${userAns ? `<div><strong>Yours:</strong> <span class="${isCorrect ? 'text-green' : 'text-red'}">${q.options[userAns]}</span></div>` : '<div class="text-muted">Skipped</div>'}
      </div>
      ${q.explanation ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; border-top:1px solid var(--border-color); padding-top:6px;">${q.explanation}</div>` : ''}
    `;
    reviewEl.appendChild(div);
  });
}

// --- 10. SETTINGS & AI CONFIG ---
function applySettings() {
  document.getElementById('setting-name').value = appState.user.name;
  const key = AI_SERVICE.getApiKey();
  if (key) {
    document.getElementById('setting-api-key').value = key;
  }
  const model = AI_SERVICE.getActiveModel();
  const modelSelect = document.getElementById('setting-model');
  if (modelSelect && model) {
    modelSelect.value = model;
  }
  const isLight = appState.settings.theme === 'light';
  if (isLight) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  // Sync mobile theme color meta tag & buttons
  const metaTheme = document.getElementById('meta-theme-color');
  if (metaTheme) metaTheme.setAttribute('content', isLight ? '#f8fafc' : '#0b0c16');

  const mobThemeIcon = document.querySelector('#mobile-theme-toggle .theme-icon');
  if (mobThemeIcon) mobThemeIcon.textContent = isLight ? '🌙' : '☀️';

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) themeToggleBtn.textContent = isLight ? 'Switch to Dark Theme' : 'Switch to Light Theme';
}

function toggleTheme() {
  appState.settings.theme = appState.settings.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applySettings();
  showToast(`Switched to ${appState.settings.theme} theme`, 'info');
}

function saveApiKey() {
  const key = document.getElementById('setting-api-key').value.trim();
  const model = document.getElementById('setting-model')?.value || 'gemini-3.8-flash';
  localStorage.setItem('christ_psych_gemini_model', model);

  if (key) {
    localStorage.setItem('christ_psych_gemini_key', key);
    appState.settings.geminiKey = key;
  }
  saveState();
  showToast(`Settings & ${model} saved successfully!`, 'success');
}

async function testApiKey() {
  const key = document.getElementById('setting-api-key').value.trim();
  const model = document.getElementById('setting-model')?.value || 'gemini-3.8-flash';
  if (!key) {
    showToast('Enter a key before testing.', 'error');
    return;
  }
  localStorage.setItem('christ_psych_gemini_key', key);
  localStorage.setItem('christ_psych_gemini_model', model);

  showToast(`Testing connection with ${model}...`, 'info');
  try {
    const reply = await AI_SERVICE.explainQuestionSimply(
      { question: "What is psychology?", options: { a: "Empirical study of mind and behavior" }, answer: "a", explanation: "Empirical scientific study" },
      "a"
    );
    showToast(`Connection Successful! ${model} is fully unlocked.`, 'success');
  } catch (err) {
    showToast(`Test failed: ${err.message}`, 'error');
  }
}

function resetAllData() {
  if (confirm('Are you absolutely sure you want to reset all your progress, mastery heatmap, and flashcards? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// --- 11. TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- 12. CANVAS PARTICLES ---
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleCount = window.innerWidth < 768 ? 18 : 45;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 - dist / 1100})`;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// --- 13. QUESTION BANK & CUSTOM QUESTIONS MANAGER ---
function initBankControls() {
  const btnAdd = document.getElementById('bank-btn-add-q');
  const btnBulk = document.getElementById('bank-btn-bulk-import');
  const btnExport = document.getElementById('bank-btn-export');
  const btnCloseAdd = document.getElementById('bank-close-add');
  const btnCloseImport = document.getElementById('bank-close-import');
  const btnSaveQ = document.getElementById('bank-save-new-q');
  const btnRunImport = document.getElementById('bank-run-import');
  const searchInput = document.getElementById('bank-search');
  const unitFilter = document.getElementById('bank-unit-filter');
  const sourceFilter = document.getElementById('bank-source-filter');

  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      document.getElementById('bank-add-panel').classList.toggle('hidden');
      document.getElementById('bank-import-panel').classList.add('hidden');
    });
  }
  if (btnBulk) {
    btnBulk.addEventListener('click', () => {
      document.getElementById('bank-import-panel').classList.toggle('hidden');
      document.getElementById('bank-add-panel').classList.add('hidden');
    });
  }
  if (btnCloseAdd) {
    btnCloseAdd.addEventListener('click', () => document.getElementById('bank-add-panel').classList.add('hidden'));
  }
  if (btnCloseImport) {
    btnCloseImport.addEventListener('click', () => document.getElementById('bank-import-panel').classList.add('hidden'));
  }

  if (searchInput) searchInput.addEventListener('input', renderBankQuestions);
  if (unitFilter) unitFilter.addEventListener('change', renderBankQuestions);
  if (sourceFilter) sourceFilter.addEventListener('change', renderBankQuestions);

  if (btnSaveQ) btnSaveQ.addEventListener('click', saveNewCustomQuestion);
  if (btnRunImport) btnRunImport.addEventListener('click', runBulkImportQuestions);
  if (btnExport) btnExport.addEventListener('click', exportQuestionBank);

  populateBankUnitAndTopics();
}

function populateBankUnitAndTopics() {
  const unitSelect = document.getElementById('bank-new-unit');
  const topicSelect = document.getElementById('bank-new-topic');
  if (!unitSelect || !topicSelect) return;

  const units = [
    "Basic Psychology",
    "Research Aptitude",
    "Ethical Concerns",
    "General Aptitude",
    "Current Affairs & GK",
    "Human Resource Management",
    "I/O Psychology"
  ];

  unitSelect.innerHTML = units.map(u => `<option value="${u}">${u}</option>`).join('');

  function updateTopics() {
    const selectedUnit = unitSelect.value;
    const conceptsMap = window.SEED_CONCEPTS || {};
    const matchingTopics = Object.entries(conceptsMap).filter(([id, c]) => c.unit === selectedUnit);

    topicSelect.innerHTML = matchingTopics.map(([id, c]) => `<option value="${id}">${c.title}</option>`).join('');
  }

  unitSelect.addEventListener('change', updateTopics);
  updateTopics();
}

function renderBankQuestions() {
  refreshAllQuestions();
  const search = document.getElementById('bank-search')?.value.toLowerCase().trim() || '';
  const unitFilter = document.getElementById('bank-unit-filter')?.value || 'all';
  const sourceFilter = document.getElementById('bank-source-filter')?.value || 'all';

  const customList = getCustomQuestions();
  const customIds = new Set(customList.map(q => q.id));

  let filtered = allQuestions.filter(q => {
    if (unitFilter !== 'all' && q.unit !== unitFilter) return false;
    if (sourceFilter === 'custom' && !customIds.has(q.id)) return false;
    if (sourceFilter === 'seed' && customIds.has(q.id)) return false;
    if (search) {
      const matchQ = (q.question || '').toLowerCase().includes(search);
      const matchExp = (q.explanation || '').toLowerCase().includes(search);
      const matchOpts = Object.values(q.options || {}).some(opt => opt.toLowerCase().includes(search));
      if (!matchQ && !matchExp && !matchOpts) return false;
    }
    return true;
  });

  const countShowingEl = document.getElementById('bank-count-showing');
  if (countShowingEl) countShowingEl.innerText = filtered.length;

  const customTag = document.getElementById('bank-custom-count-tag');
  if (customTag) customTag.innerHTML = `Custom Added: <strong>${customList.length}</strong>`;

  const container = document.getElementById('bank-questions-list');
  if (!container) return;
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; padding: 32px;"><p class="text-muted">No questions found matching your filter criteria.</p></div>`;
    return;
  }

  filtered.forEach(q => {
    const isCustom = customIds.has(q.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '18px';

    let optionsHtml = '';
    ['a', 'b', 'c', 'd'].forEach(letter => {
      const isCorrect = q.answer === letter;
      const optText = q.options ? q.options[letter] : '';
      if (!optText) return;
      optionsHtml += `
        <div class="bank-opt-item ${isCorrect ? 'bank-opt-correct' : ''}">
          <span style="font-weight: 700; color: ${isCorrect ? 'var(--green)' : 'var(--text-muted)'}; font-size: 0.82rem; min-width: 18px;">${letter.toUpperCase()})</span>
          <span class="bank-opt-text">${optText}</span>
          ${isCorrect ? '<span class="bank-opt-tag">✓ Correct</span>' : ''}
        </div>
      `;
    });

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan); background: var(--badge-bg); padding: 2px 8px; border-radius: 4px; border: 1px solid var(--border-color);">#${q.id}</span>
          <span class="term-tag" style="font-size: 0.72rem; padding: 2px 8px;">Part ${q.part || 'A'} · ${q.unit}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">${q.topic}</span>
          ${isCustom ? '<span style="font-size: 0.7rem; background: rgba(34, 197, 94, 0.2); color: var(--green); padding: 1px 6px; border-radius: 4px;">Custom Added</span>' : ''}
        </div>
        ${isCustom ? `<button class="btn btn-danger" style="padding: 2px 8px; font-size: 0.75rem;" onclick="deleteCustomQuestion('${q.id}')">Delete</button>` : ''}
      </div>
      <div style="font-size: 0.98rem; font-weight: 500; margin-bottom: 12px; line-height: 1.5; color: var(--text-main);">${q.question}</div>
      <div style="margin-bottom: 12px;">${optionsHtml}</div>
      ${q.explanation ? `
        <div class="bank-explanation-box">
          <strong style="color: var(--cyan);">💡 Explanation:</strong> ${q.explanation}
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });
}

function saveNewCustomQuestion() {
  const unit = document.getElementById('bank-new-unit').value;
  const topic = document.getElementById('bank-new-topic').value;
  const question = document.getElementById('bank-new-question').value.trim();
  const optA = document.getElementById('bank-new-opt-a').value.trim();
  const optB = document.getElementById('bank-new-opt-b').value.trim();
  const optC = document.getElementById('bank-new-opt-c').value.trim();
  const optD = document.getElementById('bank-new-opt-d').value.trim();
  const answer = document.getElementById('bank-new-answer').value;
  const explanation = document.getElementById('bank-new-explanation').value.trim();

  if (!question || !optA || !optB || !optC || !optD) {
    showToast('Please fill out the question and all 4 options.', 'error');
    return;
  }

  const part = (unit === "Human Resource Management" || unit === "I/O Psychology") ? "B" : "A";
  const newQ = {
    id: `custom_${Date.now()}`,
    topic,
    unit,
    part,
    question,
    options: { a: optA, b: optB, c: optC, d: optD },
    answer,
    explanation: explanation || "Custom user verified question."
  };

  const customList = getCustomQuestions();
  customList.push(newQ);
  localStorage.setItem('christ_psych_custom_questions', JSON.stringify(customList));

  // Reset form
  document.getElementById('bank-new-question').value = '';
  document.getElementById('bank-new-opt-a').value = '';
  document.getElementById('bank-new-opt-b').value = '';
  document.getElementById('bank-new-opt-c').value = '';
  document.getElementById('bank-new-opt-d').value = '';
  document.getElementById('bank-new-explanation').value = '';
  document.getElementById('bank-add-panel').classList.add('hidden');

  refreshAllQuestions();
  populateArenaScopeSelect();
  renderBankQuestions();
  showToast('Question successfully added to your master bank!', 'success');
}

function deleteCustomQuestion(id) {
  if (!confirm('Are you sure you want to delete this custom question?')) return;
  let customList = getCustomQuestions();
  customList = customList.filter(q => q.id !== id);
  localStorage.setItem('christ_psych_custom_questions', JSON.stringify(customList));
  refreshAllQuestions();
  populateArenaScopeSelect();
  renderBankQuestions();
  showToast('Custom question removed.', 'info');
}
window.deleteCustomQuestion = deleteCustomQuestion;

function runBulkImportQuestions() {
  const text = document.getElementById('bank-import-text').value.trim();
  if (!text) {
    showToast('Please paste JSON or text to import.', 'error');
    return;
  }

  let importedList = [];

  // Try JSON parse first
  if (text.startsWith('[') || text.startsWith('{')) {
    try {
      const parsed = JSON.parse(text);
      importedList = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      showToast('Invalid JSON format. Check syntax.', 'error');
      return;
    }
  } else {
    // Parse plaintext format:
    // Format: Q: ... \n A: ... \n B: ... \n C: ... \n D: ... \n ANS: ... \n EXP: ... \n UNIT: ... \n TOPIC: ...
    const blocks = text.split(/(?=(?:^|\n)\s*(?:Q:|Question:|\d+\.))/i).filter(b => b.trim());
    blocks.forEach((block, idx) => {
      const qMatch = block.match(/(?:Q:|Question:|\d+\.)\s*(.*?)(?=\n\s*(?:[A-Da-d][:\.]))/s);
      const aMatch = block.match(/(?:A:|A\.)\s*(.*?)(?=\n\s*(?:B:|B\.))/s);
      const bMatch = block.match(/(?:B:|B\.)\s*(.*?)(?=\n\s*(?:C:|C\.))/s);
      const cMatch = block.match(/(?:C:|C\.)\s*(.*?)(?=\n\s*(?:D:|D\.))/s);
      const dMatch = block.match(/(?:D:|D\.)\s*(.*?)(?=\n\s*(?:ANS:|Answer:|\n|$))/s);
      const ansMatch = block.match(/(?:ANS:|Answer:)\s*([a-dA-D])/i);
      const expMatch = block.match(/(?:EXP:|Explanation:)\s*(.*?)(?=\n\s*(?:UNIT:|TOPIC:|$))/is);
      const unitMatch = block.match(/(?:UNIT:|Unit:)\s*(.*?)(?=\n|$)/i);
      const topicMatch = block.match(/(?:TOPIC:|Topic:)\s*(.*?)(?=\n|$)/i);

      if (qMatch && aMatch && bMatch && cMatch && dMatch) {
        const unit = unitMatch ? unitMatch[1].trim() : "Basic Psychology";
        const part = (unit === "Human Resource Management" || unit === "I/O Psychology") ? "B" : "A";
        importedList.push({
          id: `imported_${Date.now()}_${idx + 1}`,
          topic: topicMatch ? topicMatch[1].trim() : "history_schools",
          unit: unit,
          part: part,
          question: qMatch[1].trim(),
          options: {
            a: aMatch[1].trim(),
            b: bMatch[1].trim(),
            c: cMatch[1].trim(),
            d: dMatch[1].trim()
          },
          answer: ansMatch ? ansMatch[1].toLowerCase() : "a",
          explanation: expMatch ? expMatch[1].trim() : "Imported practice question."
        });
      }
    });
  }

  if (importedList.length === 0) {
    showToast('Could not parse any valid questions. Please check format instructions.', 'error');
    return;
  }

  const customList = getCustomQuestions();
  customList.push(...importedList);
  localStorage.setItem('christ_psych_custom_questions', JSON.stringify(customList));

  document.getElementById('bank-import-text').value = '';
  document.getElementById('bank-import-panel').classList.add('hidden');
  refreshAllQuestions();
  populateArenaScopeSelect();
  renderBankQuestions();
  showToast(`Successfully imported ${importedList.length} questions into your bank!`, 'success');
}

function exportQuestionBank() {
  refreshAllQuestions();
  const jsonStr = JSON.stringify(allQuestions, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `christ_psych_master_question_bank_${allQuestions.length}_questions.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Exported all ${allQuestions.length} questions as JSON!`, 'success');
}
