// data_mcqs.js — High-Yield Master Question Bank for CHRIST M.Sc. Psychology (HRDM)
// Candidate: Michelle Josephine E (Application No: 272982079)
// Total Questions: 360 across all 7 Exam Blueprint Units
// Statistically balanced 25% distribution across A, B, C, D (Realistic Exam Format)
//
// HOW TO ADD MORE QUESTIONS:
// Simply copy the template below and paste it into the array:
// {
//   "id": "custom_01",
//   "topic": "history_schools", // Must match an ID from data_concepts.js
//   "unit": "Basic Psychology",
//   "part": "A",
//   "question": "Your question text here?",
//   "options": {
//     "a": "Option A text",
//     "b": "Option B text",
//     "c": "Option C text",
//     "d": "Option D text"
//   },
//   "answer": "c", // One of: a, b, c, d
//   "explanation": "Detailed pedagogical explanation here."
// }

window.SEED_MCQS = [
  {
    "id": "bp_01",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Who established the first formal laboratory for psychological research in Leipzig, Germany, in 1879?",
    "options": {
      "a": "William James",
      "b": "John B. Watson",
      "c": "Wilhelm Wundt",
      "d": "Edward Titchener"
    },
    "answer": "c",
    "explanation": "Wilhelm Wundt founded the first formal experimental psychology laboratory at the University of Leipzig in 1879, marking the formal birth of psychology as an independent empirical discipline."
  },
  {
    "id": "bp_02",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which school of psychology was heavily influenced by Charles Darwin's theory of evolution and focused on how consciousness helps humans adapt to their environment?",
    "options": {
      "a": "Psychoanalysis",
      "b": "Gestalt Psychology",
      "c": "Functionalism",
      "d": "Structuralism"
    },
    "answer": "c",
    "explanation": "Functionalism, spearheaded by William James and John Dewey, examined the adaptive purpose and function of mental operations in environmental survival, drawing heavily from Darwinian evolutionary principles."
  },
  {
    "id": "bp_03",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In his chimpanzee experiments on the island of Tenerife, Wolfgang K\u00f6hler demonstrated which form of problem-solving?",
    "options": {
      "a": "Trial-and-error conditioning",
      "b": "Insight learning",
      "c": "Vicarious reinforcement",
      "d": "Latent learning"
    },
    "answer": "b",
    "explanation": "K\u00f6hler observed that his chimpanzee Sultan solved problems (e.g., joining two sticks to reach bananas) through sudden cognitive restructuring of the perceptual field, which he termed 'insight learning'."
  },
  {
    "id": "bp_04",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "What is the approximate resting membrane potential of a typical mammalian neuron?",
    "options": {
      "a": "-55 mV",
      "b": "0 mV",
      "c": "-70 mV",
      "d": "+30 mV"
    },
    "answer": "c",
    "explanation": "A resting neuron maintains an electrical potential difference of approximately -70 millivolts across its membrane, kept negative inside by the continuous operation of the sodium-potassium pump (3 Na+ pumped out for every 2 K+ pumped in)."
  },
  {
    "id": "bp_05",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Depletion of which neurotransmitter in the nucleus basalis of Meynert and hippocampus is most directly implicated in Alzheimer's disease?",
    "options": {
      "a": "Acetylcholine (ACh)",
      "b": "Dopamine",
      "c": "GABA",
      "d": "Serotonin"
    },
    "answer": "a",
    "explanation": "Acetylcholine is critical for memory formation and synaptic plasticity. Progressive degeneration of cholinergic neurons in the basal forebrain is a definitive hallmark of Alzheimer's disease pathology."
  },
  {
    "id": "bp_06",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "All sensory modalities route their afferent signals through the thalamus before reaching the cerebral cortex, EXCEPT for which sense?",
    "options": {
      "a": "Vision",
      "b": "Gustation",
      "c": "Olfaction",
      "d": "Audition"
    },
    "answer": "c",
    "explanation": "Olfactory (smell) sensory signals bypass the thalamus completely, traveling directly via the olfactory nerve (Cranial Nerve I) to the olfactory bulb, piriform cortex, and limbic structures."
  },
  {
    "id": "bp_07",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Damage to Broca's area in the left frontal lobe typically results in which neurological condition?",
    "options": {
      "a": "Complete loss of auditory perception",
      "b": "Inability to recognize familiar faces",
      "c": "Fluent but meaningless speech output",
      "d": "Non-fluent, halting, telegraphic motor speech production"
    },
    "answer": "d",
    "explanation": "Broca's area coordinates the motor programming of speech articulation. Lesions produce expressive (Broca's) aphasia: effortful, non-fluent, grammatically impaired speech, although comprehension remains relatively intact."
  },
  {
    "id": "bp_08",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Weber's Law, if a person can barely detect an added weight of 2 grams to an initial 100-gram load, what added weight would be required to notice a difference with a 500-gram load?",
    "options": {
      "a": "2 grams",
      "b": "5 grams",
      "c": "10 grams",
      "d": "20 grams"
    },
    "answer": "c",
    "explanation": "Weber's fraction k = \u0394I / I = 2 / 100 = 0.02. For an intensity of 500g, \u0394I = k \u00d7 I = 0.02 \u00d7 500g = 10 grams."
  },
  {
    "id": "bp_09",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which of the following is considered a MONOCULAR cue for depth perception?",
    "options": {
      "a": "Motion parallax",
      "b": "Retinal disparity",
      "c": "Binocular convergence",
      "d": "Stereopsis"
    },
    "answer": "a",
    "explanation": "Motion parallax (where closer objects appear to glide past faster and in the opposite direction than distant objects) can be perceived with a single eye, making it a monocular depth cue."
  },
  {
    "id": "bp_10",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The occurrence of negative afterimages (e.g., staring at a green square and subsequently seeing red on a blank wall) is best explained by:",
    "options": {
      "a": "Hering's Opponent-Process theory",
      "b": "Young-Helmholtz Trichromatic theory",
      "c": "Frequency theory of hearing",
      "d": "Signal detection sensitivity"
    },
    "answer": "a",
    "explanation": "Hering's opponent-process theory posits antagonistic neural pairings (Red-Green, Blue-Yellow, Black-White). Fatiguing the green receptor mechanism releases the rebound excitation of the opponent red channel."
  },
  {
    "id": "bp_11",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Pavlov's classical conditioning experiments with dogs, meat powder served as the:",
    "options": {
      "a": "Unconditioned Response (UCR)",
      "b": "Unconditioned Stimulus (UCS)",
      "c": "Conditioned Stimulus (CS)",
      "d": "Conditioned Response (CR)"
    },
    "answer": "b",
    "explanation": "The meat powder is an Unconditioned Stimulus (UCS) because it naturally and reflexively triggers salivation (the UCR) without any prior training or conditioning history."
  },
  {
    "id": "bp_12",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Fastening one's seatbelt to silence an annoying buzzing chime in a car is a classic example of:",
    "options": {
      "a": "Negative Punishment",
      "b": "Positive Punishment",
      "c": "Positive Reinforcement",
      "d": "Negative Reinforcement"
    },
    "answer": "d",
    "explanation": "Negative reinforcement increases the probability of a target behavior (fastening seatbelt) by removing or terminating an aversive, irritating stimulus (the buzzing chime)."
  },
  {
    "id": "bp_13",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which schedule of intermittent reinforcement produces the highest response rates and the greatest resistance to behavioral extinction?",
    "options": {
      "a": "Fixed Ratio (FR)",
      "b": "Variable Interval (VI)",
      "c": "Fixed Interval (FI)",
      "d": "Variable Ratio (VR)"
    },
    "answer": "d",
    "explanation": "Variable Ratio (VR) schedules (such as gambling on slot machines) provide rewards after an unpredictable number of responses, yielding rapid, relentless response rates with virtually no post-reinforcement pause."
  },
  {
    "id": "bp_14",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Albert Bandura's Social Learning Theory, what are the four sequential cognitive processes required for observational modeling?",
    "options": {
      "a": "Encoding, Storage, Retrieval, Rehearsal",
      "b": "Stimulus, Organism, Response, Consequence",
      "c": "Attention, Retention, Motor Reproduction, Motivation",
      "d": "Perception, Cognition, Action, Feedback"
    },
    "answer": "c",
    "explanation": "Bandura specified four requisite components in modeling: Attention (noticing the model), Retention (remembering the behavior), Motor Reproduction (ability to physically execute), and Motivation (vicarious incentives to perform)."
  },
  {
    "id": "bp_15",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "What component was added to Alan Baddeley's Working Memory model in 2000 to explain how verbal and visual information are integrated with long-term memory into cohesive episodes?",
    "options": {
      "a": "Visuospatial Sketchpad",
      "b": "Phonological Loop",
      "c": "Central Executive",
      "d": "Episodic Buffer"
    },
    "answer": "d",
    "explanation": "Baddeley added the Episodic Buffer in 2000 as a temporary, multimodal storage system controlled by the Central Executive that binds information from slave systems and long-term memory into unitary chronological representations."
  },
  {
    "id": "bp_16",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "When an employee struggles to remember their new computer password because their old, deeply ingrained password keeps popping into mind, they are experiencing:",
    "options": {
      "a": "Retroactive Interference",
      "b": "Anterograde Amnesia",
      "c": "Source Monitoring Failure",
      "d": "Proactive Interference"
    },
    "answer": "d",
    "explanation": "Proactive interference occurs when previously learned past information (the old password) interferes with and impairs the encoding or retrieval of newly learned information (the new password)."
  },
  {
    "id": "bp_17",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Remembering how to ride a bicycle or play chords on a guitar involves which memory system?",
    "options": {
      "a": "Semantic memory",
      "b": "Episodic memory",
      "c": "Procedural memory",
      "d": "Prospective memory"
    },
    "answer": "c",
    "explanation": "Procedural memory is an implicit, non-declarative memory sub-type mediated primarily by the basal ganglia and cerebellum, encoding learned motor skills and automated behavioral repertoires."
  },
  {
    "id": "bp_18",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Judging that airplane travel is more dangerous than driving an automobile because plane crashes are dramatic and vivid in news reports is an example of the:",
    "options": {
      "a": "Representativeness heuristic",
      "b": "Framing effect",
      "c": "Confirmation bias",
      "d": "Availability heuristic"
    },
    "answer": "d",
    "explanation": "The availability heuristic leads individuals to estimate the likelihood of an event based on how easily and vividly instances or occurrences come to conscious mind (Tversky & Kahneman)."
  },
  {
    "id": "bp_19",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Raymond Cattell and John Horn, which dimension of intelligence reflects basic reasoning, novel problem-solving, and working memory capacity that peaks in young adulthood?",
    "options": {
      "a": "Crystallized intelligence (Gc)",
      "b": "Practical intelligence",
      "c": "Spatial visualization factor",
      "d": "Fluid intelligence (Gf)"
    },
    "answer": "d",
    "explanation": "Fluid intelligence (Gf) represents innate neurobiological problem-solving capacity independent of prior education. It peaks in late adolescence/early adulthood and declines progressively with age, unlike crystallized intelligence (Gc)."
  },
  {
    "id": "bp_20",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which theory of emotion asserts that emotional experience requires BOTH general physiological arousal AND a subsequent cognitive appraisal or labeling based on environmental context?",
    "options": {
      "a": "Schachter-Singer Two-Factor Theory",
      "b": "James-Lange Theory",
      "c": "Cannon-Bard Theory",
      "d": "Lazarus Cognitive-Mediational Theory"
    },
    "answer": "a",
    "explanation": "The Schachter-Singer Two-Factor Theory (1962) demonstrated via their Suproxin experiment that physiological arousal provides the intensity of emotion, while cognitive attribution/appraisal determines the qualitative emotional label."
  },
  {
    "id": "bp_21",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to the Yerkes-Dodson Law, for a highly complex and novel cognitive task, the optimal level of physiological arousal is:",
    "options": {
      "a": "Zero",
      "b": "Relatively low",
      "c": "Extremely high",
      "d": "Completely irrelevant"
    },
    "answer": "b",
    "explanation": "The Yerkes-Dodson Law shows an inverted-U relationship where complex, difficult tasks require a lower level of arousal for optimal focus, whereas simple, stamina-based tasks benefit from higher arousal."
  },
  {
    "id": "bp_22",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Jean Piaget, the hallmark cognitive achievement of the Concrete Operational stage (ages 7 to 11) is:",
    "options": {
      "a": "Abstract hypothetical-deductive reasoning",
      "b": "Mastery of conservation and reversibility",
      "c": "Object permanence",
      "d": "Animistic thinking"
    },
    "answer": "b",
    "explanation": "In Piaget's concrete operational stage, children conquer centration and egocentrism to master conservation (understanding that physical properties like volume remain identical despite perceptual alterations in shape)."
  },
  {
    "id": "bp_23",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Erik Erikson's psychosocial model of human development, which psychosocial crisis dominates the adolescent life stage?",
    "options": {
      "a": "Initiative vs. Guilt",
      "b": "Industry vs. Inferiority",
      "c": "Intimacy vs. Isolation",
      "d": "Identity vs. Role Confusion"
    },
    "answer": "d",
    "explanation": "Adolescence is defined by the psychosocial struggle between Identity and Role Confusion, where the young person consolidates their core values, vocational interests, and self-definition into a unified ego identity."
  },
  {
    "id": "bp_24",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In I/O Psychology, meta-analytic evidence consistently identifies which of the Big Five personality dimensions as the strongest and most universal predictor of job performance across all occupations?",
    "options": {
      "a": "Extraversion",
      "b": "Openness to Experience",
      "c": "Agreeableness",
      "d": "Conscientiousness"
    },
    "answer": "d",
    "explanation": "Barrick & Mount (1991) and subsequent landmark meta-analyses established that Conscientiousness (reflecting discipline, organizational skills, persistence, and reliability) is the premier general predictor of job performance across occupations."
  },
  {
    "id": "bp_25",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "A manager who unconsciously harbors deep hostility toward an underperforming subordinate behaves with exaggerated warmth, sweetness, and effusive praise toward them. This illustrates which defense mechanism?",
    "options": {
      "a": "Displacement",
      "b": "Reaction Formation",
      "c": "Sublimation",
      "d": "Projection"
    },
    "answer": "b",
    "explanation": "Reaction formation occurs when the ego conceals unacceptable, distressing unconscious impulses by adopting and acting out their exact conscious behavioral opposite."
  },
  {
    "id": "bp_26",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The tendency for observers to underestimate situational constraints and overestimate internal dispositional factors when explaining the behavior of others is known as the:",
    "options": {
      "a": "Fundamental Attribution Error (FAE)",
      "b": "False consensus effect",
      "c": "Self-serving bias",
      "d": "Just-world phenomenon"
    },
    "answer": "a",
    "explanation": "Lee Ross coined the Fundamental Attribution Error (FAE) to describe our persistent cognitive bias to view others' missteps as reflecting internal personality defects rather than acknowledging powerful situational constraints."
  },
  {
    "id": "bp_27",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Stanley Milgram's classic baseline experiment on obedience at Yale University, what percentage of participants obeyed the experimenter completely and delivered the maximum 450-volt shock?",
    "options": {
      "a": "95%",
      "b": "65%",
      "c": "1% to 2%",
      "d": "25%"
    },
    "answer": "b",
    "explanation": "Despite psychiatric predictions that less than 1% of the population would comply, 65% (26 of 40) of Milgram's ordinary adult participants administered the full sequence of shocks up to the lethal 450V limit under authority pressure."
  },
  {
    "id": "bp_28",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Leon Festinger and J. Merrill Carlsmith's famous cognitive dissonance experiment found that participants experienced the GREATEST attitude change when they were offered:",
    "options": {
      "a": "$20 to lie about a boring peg-turning task",
      "b": "No financial reward at all",
      "c": "Immunity from being judged",
      "d": "$1 to lie about a boring peg-turning task"
    },
    "answer": "d",
    "explanation": "Participants paid only $1 had insufficient external justification for their counter-attitudinal lie. To resolve the resulting intense cognitive dissonance, they internally altered their genuine attitude to believe the task was genuinely interesting."
  },
  {
    "id": "bp_29",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to the DSM-5, a definitive diagnosis of Major Depressive Disorder requires symptoms to be present for a minimum duration of:",
    "options": {
      "a": "6 consecutive months",
      "b": "3 consecutive days",
      "c": "2 consecutive weeks",
      "d": "2 consecutive years"
    },
    "answer": "c",
    "explanation": "DSM-5 requires at least five depressive symptoms (including either depressed mood or loss of interest/pleasure) to persist for at least two continuous weeks, causing clinically significant distress or impairment."
  },
  {
    "id": "bp_30",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which of the following personality disorders is classified under Cluster B (Dramatic, Emotional, or Erratic) in the DSM-5?",
    "options": {
      "a": "Avoidant Personality Disorder",
      "b": "Schizoid Personality Disorder",
      "c": "Obsessive-Compulsive Personality Disorder",
      "d": "Borderline Personality Disorder"
    },
    "answer": "d",
    "explanation": "Cluster B comprises Antisocial, Borderline, Histrionic, and Narcissistic personality disorders, characterized by marked emotional instability, interpersonal volatility, and dramatic presentations."
  },
  {
    "id": "ra_01",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is the defining methodological characteristic that distinguishes a True Experiment from a Quasi-Experiment?",
    "options": {
      "a": "Random assignment of participants to experimental conditions",
      "b": "Conducting the study in a laboratory rather than in the field",
      "c": "Use of inferential statistics for data analysis",
      "d": "The presence of a dependent variable"
    },
    "answer": "a",
    "explanation": "True experiments require random assignment of participants to conditions, ensuring baseline equivalence and strong internal validity. Quasi-experiments use pre-existing groups without random assignment."
  },
  {
    "id": "ra_02",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a research study evaluating whether an employee wellness program improves organizational productivity, what is the Independent Variable (IV)?",
    "options": {
      "a": "Organizational productivity score",
      "b": "The employee wellness program (participation vs. non-participation)",
      "c": "Employee baseline stress level",
      "d": "Years of employee tenure"
    },
    "answer": "b",
    "explanation": "The Independent Variable (IV) is the presumed causal antecedent manipulated or categorized by the researcher (here, presence or absence of the wellness program)."
  },
  {
    "id": "ra_03",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher discovers that the relationship between Job Autonomy (IV) and Job Performance (DV) is explained by an increase in Employee Motivation. In this model, Employee Motivation acts as a:",
    "options": {
      "a": "Confounding variable",
      "b": "Mediating variable",
      "c": "Categorical predictor",
      "d": "Moderating variable"
    },
    "answer": "b",
    "explanation": "A mediator variable transmits the effect of an IV to a DV, clarifying the generative psychological mechanism or process (IV \u2192 Mediator \u2192 DV; autonomy increases motivation, which in turn boosts performance)."
  },
  {
    "id": "ra_04",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A Type I Error (Alpha, \u03b1) is committed when a researcher:",
    "options": {
      "a": "Selects a non-directional rather than a directional hypothesis",
      "b": "Fails to reject the null hypothesis when the null hypothesis is actually false",
      "c": "Uses a sample size that is statistically too small",
      "d": "Rejects the null hypothesis when the null hypothesis is actually true"
    },
    "answer": "d",
    "explanation": "A Type I error is a False Positive: rejecting a true null hypothesis and concluding that an experimental effect or relationship exists when in reality it occurred purely by chance."
  },
  {
    "id": "ra_05",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "The statistical power of a research study (1 - \u03b2) represents the probability of:",
    "options": {
      "a": "Obtaining a correlation of 1.00",
      "b": "Correctly rejecting a false null hypothesis",
      "c": "Failing to replicate the experimental findings",
      "d": "Making a Type I error"
    },
    "answer": "b",
    "explanation": "Statistical power (1 - Beta) is the likelihood that a test will detect a genuine effect when one truly exists in the population. Recommended statistical power in behavioral research is typically 0.80."
  },
  {
    "id": "ra_06",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher desires to study job burnout among corporate gig workers. Because no master registry exists, she asks each initial participant to introduce her to three additional colleagues in their network. This sampling strategy is called:",
    "options": {
      "a": "Stratified random sampling",
      "b": "Quota sampling",
      "c": "Snowball / Chain-referral sampling",
      "d": "Systematic sampling"
    },
    "answer": "c",
    "explanation": "Snowball sampling is a non-probability technique where research participants recruit other participants, uniquely suited for investigating hidden, dispersed, or hard-to-access populations."
  },
  {
    "id": "ra_07",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "Dividing a company's workforce into homogeneous strata by hierarchical tier (Executives, Middle Managers, Entry-Level) and then randomly drawing representative samples from within each tier is known as:",
    "options": {
      "a": "Convenience sampling",
      "b": "Purposive sampling",
      "c": "Cluster sampling",
      "d": "Stratified random sampling"
    },
    "answer": "d",
    "explanation": "Stratified random sampling partitions the population into mutually exclusive, homogeneous subgroups (strata) based on demographic or organizational characteristics before drawing random samples from each."
  },
  {
    "id": "ra_08",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "Which level of measurement (Stevens' scale) possesses equal intervals between numerical units AND a true absolute zero point?",
    "options": {
      "a": "Ratio",
      "b": "Ordinal",
      "c": "Interval",
      "d": "Nominal"
    },
    "answer": "a",
    "explanation": "Ratio scales (e.g., reaction time in milliseconds, salary, annual sales) possess equal intervals and a meaningful absolute zero, permitting all arithmetic calculations including ratios ('twice as high')."
  },
  {
    "id": "ra_09",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "Standardized IQ test scores (with Mean = 100, SD = 15) represent which level of measurement?",
    "options": {
      "a": "Interval",
      "b": "Nominal",
      "c": "Ratio",
      "d": "Ordinal"
    },
    "answer": "a",
    "explanation": "IQ scores represent an Interval scale because intervals between points are standardized and equal, but there is no absolute zero (a score of 0 does not denote the absolute absence of intellectual function)."
  },
  {
    "id": "ra_10",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "When assessing the psychometric reliability of a newly developed 40-item HR assessment tool, Cronbach's alpha (\u03b1) measures:",
    "options": {
      "a": "Inter-rater reliability between two hiring managers",
      "b": "Criterion-related predictive validity against sales metrics",
      "c": "Internal consistency across all test items",
      "d": "Test-retest temporal stability over six months"
    },
    "answer": "c",
    "explanation": "Cronbach's alpha assesses internal consistency reliability, mathematically equivalent to the mean of all possible split-half correlation coefficients across items within a single administration."
  },
  {
    "id": "ra_11",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "If an entrance examination administered to applicants strongly predicts their subsequent semester GPA and job placement success two years later, the exam demonstrates high:",
    "options": {
      "a": "Predictive validity",
      "b": "Face validity",
      "c": "Concurrent validity",
      "d": "Split-half reliability"
    },
    "answer": "a",
    "explanation": "Predictive validity is a subtype of criterion-related validity demonstrating that test scores obtained at time 1 accurately forecast criterion performance assessed at a future time 2."
  },
  {
    "id": "ra_12",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a positively skewed (right-skewed) distribution of corporate compensation packages, what is the correct relative relationship between the measures of central tendency?",
    "options": {
      "a": "Mode < Median < Mean",
      "b": "Mean = Median = Mode",
      "c": "Mean < Median < Mode",
      "d": "Median < Mode < Mean"
    },
    "answer": "a",
    "explanation": "In positive skew, extreme high scores pull the Mean upward toward the right tail, resulting in: Mode (peak) < Median (middle) < Mean (highest)."
  },
  {
    "id": "ra_13",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a standard normal distribution curve, approximately what percentage of observations fall within \u00b11 standard deviation of the mean?",
    "options": {
      "a": "50.0%",
      "b": "95.44%",
      "c": "99.74%",
      "d": "68.26%"
    },
    "answer": "d",
    "explanation": "Under the empirical rule for normal distributions, approximately 68.26% of scores fall within \u00b11 SD (\u03bc \u00b1 1\u03c3), 95.44% within \u00b12 SD, and 99.74% within \u00b13 SD."
  },
  {
    "id": "ra_14",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher wants to compare the mean employee engagement scores across four distinct departments (Marketing, Sales, IT, HR). Which statistical test is appropriate?",
    "options": {
      "a": "One-Way Analysis of Variance (ANOVA)",
      "b": "Chi-Square test of independence",
      "c": "Independent samples t-test",
      "d": "Mann-Whitney U test"
    },
    "answer": "a",
    "explanation": "One-Way ANOVA is used to compare means across three or more independent groups, avoiding the compounding Type I error rate that would arise from executing multiple pairwise t-tests."
  },
  {
    "id": "ra_15",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "Which non-parametric statistical test serves as the distribution-free equivalent to the parametric Independent Samples t-test?",
    "options": {
      "a": "Friedman test",
      "b": "Kruskal-Wallis H test",
      "c": "Mann-Whitney U test",
      "d": "Wilcoxon Signed-Rank test"
    },
    "answer": "c",
    "explanation": "The Mann-Whitney U test is the non-parametric counterpart to the two-sample independent t-test, utilized when data are ordinal or the assumption of normality is violated."
  },
  {
    "id": "et_01",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Which of the following represents an explicit general principle in the APA Ethics Code that directs psychologists to 'strive to benefit those with whom they work and take care to do no harm'?",
    "options": {
      "a": "Integrity",
      "b": "Justice",
      "c": "Fidelity and Responsibility",
      "d": "Beneficence and Nonmaleficence"
    },
    "answer": "d",
    "explanation": "Principle A of the APA Ethics Code is Beneficence and Nonmaleficence, requiring psychologists to protect the welfare and rights of clients and research participants and avoid causing harm."
  },
  {
    "id": "et_02",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Ethical Standard 8.07, when is deception in psychological research STRICTLY and ABSOLUTELY prohibited?",
    "options": {
      "a": "Whenever financial incentives are offered to participants",
      "b": "Whenever the research is conducted on university undergraduate students",
      "c": "Whenever the Institutional Review Board (IRB) has not reviewed the study within 48 hours",
      "d": "Whenever the research is expected to cause physical pain or severe emotional distress"
    },
    "answer": "d",
    "explanation": "APA Standard 8.07(b) explicitly mandates: 'Psychologists do not deceive prospective participants about research that is reasonably expected to cause physical pain or severe emotional distress.'"
  },
  {
    "id": "et_03",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When recruiting minor children (under 18 years) for developmental psychology research, what is the mandatory ethical consent protocol?",
    "options": {
      "a": "Informed consent from a legal parent/guardian PLUS the child's affirmative assent",
      "b": "No written documentation is necessary if participation is voluntary",
      "c": "The child signs the primary legal consent form; parents are notified post-hoc",
      "d": "The school principal's consent substitutes for parental consent"
    },
    "answer": "a",
    "explanation": "Because minors lack legal capacity to consent, ethical guidelines require obtaining legally binding informed consent from the parent/guardian alongside the child's voluntary affirmative 'assent'."
  },
  {
    "id": "et_04",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "The landmark legal case 'Tarasoff v. Regents of the University of California' (1976) established which crucial precedent regarding professional confidentiality?",
    "options": {
      "a": "Clients retain intellectual property ownership of therapist notes",
      "b": "Psychological records cannot be subpoenaed under any circumstances",
      "c": "Dual relationships are permissible if disclosed within 30 days",
      "d": "Psychologists have a legal and ethical 'Duty to Warn and Protect' intended third-party victims facing imminent violent threats"
    },
    "answer": "d",
    "explanation": "The California Supreme Court ruled that protective privilege ends where public peril begins; when a therapist determines a patient presents a serious danger of violence to an identifiable victim, they incur an affirmative duty to protect the victim."
  },
  {
    "id": "et_05",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "An organizational psychologist who agrees to provide executive coaching to a CEO while simultaneously engaging in an outside commercial business investment with that same CEO is entering into:",
    "options": {
      "a": "An unconscionable breach of warranty",
      "b": "An unaccredited corporate sponsorship",
      "c": "A multiple / dual relationship",
      "d": "A vicarious liability contract"
    },
    "answer": "c",
    "explanation": "Under APA Standard 3.05, a multiple relationship occurs when a psychologist is in a professional role with a person and at the same time is in another role with that same person, creating severe conflicts of interest."
  },
  {
    "id": "ga_01",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "A worker's salary was first increased by 20% and then subsequently decreased by 20%. What is the net percentage change in their salary?",
    "options": {
      "a": "4% increase",
      "b": "0% (No change)",
      "c": "4% decrease",
      "d": "2% decrease"
    },
    "answer": "c",
    "explanation": "Net change = a + b + (ab/100) = 20 - 20 + ((20 \u00d7 -20)/100) = -4%. The salary decreases by 4%."
  },
  {
    "id": "ga_02",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Person A can complete an HR data audit in 12 days, while Person B can complete the same audit in 6 days. Working together, how many days will they take to complete the task?",
    "options": {
      "a": "4 days",
      "b": "5 days",
      "c": "3 days",
      "d": "9 days"
    },
    "answer": "a",
    "explanation": "Combined time = (A \u00d7 B) / (A + B) = (12 \u00d7 6) / (12 + 6) = 72 / 18 = 4 days."
  },
  {
    "id": "ga_03",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Consider the premises: 'All psychologists are researchers' and 'Some researchers are authors'. Which of the following conclusions logically follows with certainty?",
    "options": {
      "a": "All psychologists are authors",
      "b": "No psychologists are authors",
      "c": "Some psychologists are authors",
      "d": "None of the above necessarily follows"
    },
    "answer": "d",
    "explanation": "This syllogism commits the fallacy of the undistributed middle term (researchers). The authors who are researchers might have zero overlap with the group of psychologists."
  },
  {
    "id": "ga_04",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "What number completes the series: 3, 7, 15, 31, 63, ___?",
    "options": {
      "a": "127",
      "b": "95",
      "c": "125",
      "d": "111"
    },
    "answer": "a",
    "explanation": "Pattern: Each number is (previous number \u00d7 2) + 1. Thus: (63 \u00d7 2) + 1 = 126 + 1 = 127. Alternatively, differences double each time: +4, +8, +16, +32, +64 (63 + 64 = 127)."
  },
  {
    "id": "ga_05",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Choose the grammatically correct sentence:",
    "options": {
      "a": "The director, along with the HR associates, have organized the seminar.",
      "b": "The director, along with the HR associates, is organizing the seminar.",
      "c": "The director, along with the HR associates, are organizing the seminar.",
      "d": "The director, along with the HR associates, were organizing the seminar."
    },
    "answer": "b",
    "explanation": "Parenthetical phrases like 'along with...' do not compound the grammatical subject. The singular subject 'The director' governs the singular verb 'is organizing'."
  },
  {
    "id": "gk_01",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Which landmark legislation in India formally decriminalized suicide attempts and introduced legal provisions for 'Advance Directives' in mental healthcare?",
    "options": {
      "a": "Rehabilitation Council of India Act, 1992",
      "b": "Mental Healthcare Act, 2017",
      "c": "Persons with Disabilities Act, 1995",
      "d": "Mental Health Act, 1987"
    },
    "answer": "b",
    "explanation": "The Mental Healthcare Act, 2017 (which took effect in May 2018) decriminalized suicide attempts under Section 309 of the IPC, guaranteed the right to mental healthcare, and introduced Advance Directives."
  },
  {
    "id": "gk_02",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the name of the 24/7 National Tele-Mental Health Programme helpline initiative launched by the Government of India in 2022?",
    "options": {
      "a": "MANODARPAN",
      "b": "KIRAN",
      "c": "SWASTHYA",
      "d": "Tele-MANAS"
    },
    "answer": "d",
    "explanation": "Tele-MANAS (Tele Mental Health Assistance and Networking Across States), anchored at NIMHANS Bengaluru, was launched to provide free, universal 24/7 tele-mental health services across India (Toll-free: 14416)."
  },
  {
    "id": "gk_03",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "World Mental Health Day is observed globally each year on which date?",
    "options": {
      "a": "September 10",
      "b": "December 3",
      "c": "October 10",
      "d": "November 14"
    },
    "answer": "c",
    "explanation": "World Mental Health Day is observed annually on October 10th by the World Federation for Mental Health and WHO to raise mental health education, awareness, and advocacy."
  },
  {
    "id": "hr_01",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In job analysis, a document outlining the minimum educational qualifications, skills, experience, and personality traits (KSAOs) required of a candidate is called a:",
    "options": {
      "a": "Job Specification (JS)",
      "b": "Job Evaluation",
      "c": "Job Enlargement plan",
      "d": "Job Description (JD)"
    },
    "answer": "a",
    "explanation": "A Job Specification (JS) defines the person-oriented human attributes and qualifications (KSAOs) required to perform the job, whereas a Job Description (JD) details the job's duties and physical tasks."
  },
  {
    "id": "hr_02",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Redesigning a job by vertically loading it with increased autonomy, decision-making responsibility, and opportunities for personal growth is known as:",
    "options": {
      "a": "Job Simplification",
      "b": "Job Rotation",
      "c": "Job Enrichment",
      "d": "Job Enlargement"
    },
    "answer": "c",
    "explanation": "Job Enrichment (based on Herzberg's motivator theory) represents vertical job loading: adding higher-level planning, autonomy, and accountability, as opposed to job enlargement which is horizontal task addition."
  },
  {
    "id": "hr_03",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "During a job interview, an interviewer notices that a candidate went to the same university as them and instantly forms an overly favorable evaluation across all competencies. This is an example of the:",
    "options": {
      "a": "Contrast effect",
      "b": "Horns effect",
      "c": "Similar-to-me effect",
      "d": "Central tendency error"
    },
    "answer": "c",
    "explanation": "The Similar-to-me effect describes an interviewer's cognitive bias to rate applicants higher who share demographic, educational, background, or personality characteristics with themselves."
  },
  {
    "id": "hr_04",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In a Behavioral Description Interview (BDI), candidate responses are typically structured and scored using the STAR method, where STAR stands for:",
    "options": {
      "a": "Situation, Task, Action, Result",
      "b": "Strengths, Threats, Aspirations, Resources",
      "c": "Skill, Talent, Aptitude, Readiness",
      "d": "Strategy, Timeline, Assessment, Review"
    },
    "answer": "a",
    "explanation": "The STAR method structures behavioral interview answers: Situation (context), Task (challenge/objective), Action (specific behavior taken), and Result (quantifiable outcome achieved)."
  },
  {
    "id": "hr_05",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "According to Donald Kirkpatrick's 4-Level Training Evaluation Model, assessing whether trainees demonstrate improved operational behaviors and skills on the job months after training is evaluated at:",
    "options": {
      "a": "Level 4: Results",
      "b": "Level 2: Learning",
      "c": "Level 3: Behavior",
      "d": "Level 1: Reaction"
    },
    "answer": "c",
    "explanation": "Kirkpatrick Level 3 evaluates Behavior (transfer of learning onto the actual job environment), distinct from Level 2 (knowledge demonstrated on classroom post-tests) and Level 4 (business ROI)."
  },
  {
    "id": "hr_06",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "A systematic Training Needs Assessment (TNA) is conducted across which three organizational levels?",
    "options": {
      "a": "Financial, Marketing, and Operational analysis",
      "b": "Local, Regional, and Global analysis",
      "c": "Organizational, Task/Operational, and Person analysis",
      "d": "Recruitment, Retention, and Separation analysis"
    },
    "answer": "c",
    "explanation": "McGehee & Thayer's classic TNA framework requires analysis at three distinct levels: Organizational analysis (strategic goals), Task/Operational analysis (job KSAOs), and Person analysis (who needs training)."
  },
  {
    "id": "hr_07",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Which performance appraisal instrument combines traditional quantitative rating scales with specific narrative critical-incident descriptions of effective and ineffective behavior?",
    "options": {
      "a": "Graphic Rating Scale",
      "b": "Behaviorally Anchored Rating Scales (BARS)",
      "c": "Management by Objectives (MBO)",
      "d": "Paired Comparison method"
    },
    "answer": "b",
    "explanation": "Behaviorally Anchored Rating Scales (BARS) anchor each numerical grade with concrete, observable critical-incident descriptions, significantly increasing rater objectivity and psychometric reliability."
  },
  {
    "id": "hr_08",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "The tendency for performance appraisers to assign average or middle ratings to all subordinates, avoiding both high and low scores regardless of true performance, is called the:",
    "options": {
      "a": "Central tendency error",
      "b": "Strictness error",
      "c": "Recency effect",
      "d": "Leniency error"
    },
    "answer": "a",
    "explanation": "Central tendency error occurs when evaluators rate all employees within the middle band of the scale to avoid confrontation or excessive justification demanded by extreme ratings."
  },
  {
    "id": "hr_09",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In a 360-degree performance feedback process, appraisal ratings are gathered from which combination of stakeholders?",
    "options": {
      "a": "Supervisor, Peers, Subordinates, and Self (and occasionally clients)",
      "b": "The board of directors and corporate shareholders",
      "c": "Direct supervisor and client representatives only",
      "d": "External human resource consultants and trade union leaders only"
    },
    "answer": "a",
    "explanation": "360-degree feedback gathers holistic multi-source performance perspectives from all individuals interacting with the employee: immediate supervisor, peers/colleagues, subordinates, and self-evaluation."
  },
  {
    "id": "hr_10",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is the primary operational objective of conducting a systematic Job Evaluation within an enterprise?",
    "options": {
      "a": "To discipline unionized employees who breach contractual agreements",
      "b": "To determine the relative internal worth of distinct jobs to ensure internal wage equity",
      "c": "To rate individual employee performance for year-end bonuses",
      "d": "To calculate corporate income tax obligations"
    },
    "answer": "b",
    "explanation": "Job Evaluation evaluates the relative worth and hierarchy of jobs inside an organization to establish fair, equitable, and transparent internal wage brackets (internal equity)."
  },
  {
    "id": "io_01",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "The Hawthorne Studies (1924\u20131932) conducted at the Western Electric Plant established that workers' productivity increased primarily because:",
    "options": {
      "a": "Piece-rate financial incentives were significantly increased",
      "b": "Rest pauses were lengthened and snacks were introduced",
      "c": "Workers felt valued, special, and observed by researchers and management",
      "d": "The physical illumination of the factory was doubled"
    },
    "answer": "c",
    "explanation": "The Hawthorne Effect revealed that workers responded positively to the social attention, novelty, and sympathetic interest shown to them by researchers, ushering in the Human Relations Movement."
  },
  {
    "id": "io_02",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Who is widely acknowledged as the founder of Industrial Psychology following the 1913 publication of 'Psychology and Industrial Efficiency'?",
    "options": {
      "a": "Elton Mayo",
      "b": "Frederick Winslow Taylor",
      "c": "Hugo M\u00fcnsterberg",
      "d": "Kurt Lewin"
    },
    "answer": "c",
    "explanation": "Hugo M\u00fcnsterberg, a student of Wundt working at Harvard, published 'Psychology and Industrial Efficiency' in 1913, laying the foundational science for personnel selection and vocational matching."
  },
  {
    "id": "io_03",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "According to Frederick Herzberg's Two-Factor Theory, which of the following is classified as a HYGIENE factor rather than a MOTIVATOR?",
    "options": {
      "a": "Recognition for individual achievement",
      "b": "Challenging and meaningful work",
      "c": "Opportunities for advancement and growth",
      "d": "Base salary and working conditions"
    },
    "answer": "d",
    "explanation": "Herzberg categorized salary, company policy, supervisor quality, and physical working conditions as Hygiene factors. Their presence avoids dissatisfaction, but cannot generate true motivation or satisfaction."
  },
  {
    "id": "io_04",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Victor Vroom's Expectancy Theory of motivation (VIE), 'Instrumentality' refers to the employee's belief that:",
    "options": {
      "a": "The prospective organizational rewards are personally valuable and desirable",
      "b": "Exerting greater effort will result in successful task performance",
      "c": "Successful task performance will lead to obtaining desired outcomes/rewards",
      "d": "Coworkers are exerting equal effort on shared deliverables"
    },
    "answer": "c",
    "explanation": "Expectancy = Effort \u2192 Performance; Instrumentality = Performance \u2192 Outcome/Reward; Valence = Value/attractiveness of the reward."
  },
  {
    "id": "io_05",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "J. Stacy Adams' Equity Theory posits that workplace demotivation and tension occur primarily when an employee perceives that:",
    "options": {
      "a": "Goals established by management are too easy to accomplish",
      "b": "Organizational leadership is displaying transactional rather than transformational traits",
      "c": "Their salary is objectively below industry market standards",
      "d": "Their ratio of inputs to outcomes is unequal compared to a relevant referent other"
    },
    "answer": "d",
    "explanation": "Adams' Equity Theory asserts that employees calculate their ratio of perceived inputs (effort, loyalty, skill) to outcomes (pay, recognition) and compare it against the input-outcome ratio of referent peers."
  },
  {
    "id": "io_06",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Job Characteristics Model (Hackman & Oldham), which core job dimension most directly produces the critical psychological state of 'Experienced Meaningfulness of the Work'?",
    "options": {
      "a": "Autonomy",
      "b": "Skill Variety, Task Identity, and Task Significance",
      "c": "Extrinsic compensation",
      "d": "Feedback from the job"
    },
    "answer": "b",
    "explanation": "Skill Variety, Task Identity, and Task Significance together foster the critical psychological state of Experienced Meaningfulness, while Autonomy fosters Experienced Responsibility, and Feedback gives Knowledge of Results."
  },
  {
    "id": "io_07",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "An employee decides to remain at their current company solely because leaving would mean forfeiting lucrative unvested stock options and suffering financial loss. According to Meyer and Allen, this represents:",
    "options": {
      "a": "Continuance commitment",
      "b": "Affective commitment",
      "c": "Normative commitment",
      "d": "Discretionary commitment"
    },
    "answer": "a",
    "explanation": "Continuance commitment is rooted in an employee's calculation of the economic costs and penalties associated with departing the organization ('staying because I have to / need to')."
  },
  {
    "id": "io_08",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Discretionary behaviors that exceed formal contractual job duties, such as volunteering to assist an overburdened coworker or demonstrating civic virtue, are termed:",
    "options": {
      "a": "Organizational Citizenship Behaviors (OCB)",
      "b": "Task Performance duties",
      "c": "Scientific Management protocols",
      "d": "Counterproductive Work Behaviors (CWB)"
    },
    "answer": "a",
    "explanation": "Organizational Citizenship Behaviors (OCB), identified by Dennis Organ, represent spontaneous, discretionary extra-role actions not directly recognized by formal rewards that enhance organizational effectiveness."
  },
  {
    "id": "io_09",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Fred Fiedler's Contingency Model of leadership, the leader's fundamental orientation is assessed using which psychometric scale?",
    "options": {
      "a": "Multifactor Leadership Questionnaire (MLQ)",
      "b": "Leader-Member Exchange (LMX) 7 questionnaire",
      "c": "Managerial Grid (Blake & Mouton)",
      "d": "Least Preferred Coworker (LPC) Scale"
    },
    "answer": "d",
    "explanation": "Fiedler used the Least Preferred Coworker (LPC) scale. A leader who describes their least preferred coworker in favorable terms is Relationship-oriented (High LPC); an unfavorable description reflects Task-orientation (Low LPC)."
  },
  {
    "id": "io_10",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Which dimension of Bernard Bass's Transformational Leadership model (The 4 Is) involves encouraging followers to question assumptions, reframe problems, and think outside the box?",
    "options": {
      "a": "Idealized Influence",
      "b": "Intellectual Stimulation",
      "c": "Inspirational Motivation",
      "d": "Individualized Consideration"
    },
    "answer": "b",
    "explanation": "Intellectual Stimulation stimulates followers' creativity and critical thinking by challenging established dogmas, questioning assumptions, and reframing obstacles into learning opportunities."
  },
  {
    "id": "io_11",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "According to Edgar Schein's model of organizational culture, which level lies at the deepest core and represents unconscious, taken-for-granted beliefs and habits of perception?",
    "options": {
      "a": "Corporate slogans",
      "b": "Espoused values",
      "c": "Artifacts and symbols",
      "d": "Basic underlying assumptions"
    },
    "answer": "d",
    "explanation": "Schein proposed three levels: (1) Surface Artifacts, (2) Espoused Values, and (3) Basic Underlying Assumptions (the deepest, unconscious, unquestioned axioms that truly drive organizational behavior)."
  },
  {
    "id": "io_12",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "What are the three sequential stages in Kurt Lewin's classic model of organizational change?",
    "options": {
      "a": "Initiation, Implementation, Institutionalization",
      "b": "Unfreezing, Changing (Moving), Refreezing",
      "c": "Diagnosing, Intervening, Evaluating",
      "d": "Planning, Executing, Sustaining"
    },
    "answer": "b",
    "explanation": "Kurt Lewin's 3-step planned change model consists of Unfreezing (destabilizing existing equilibrium), Changing/Moving (introducing new behaviors/systems), and Refreezing (solidifying new norms into the culture)."
  },
  {
    "id": "io_13",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Christina Maslach's Burnout Inventory (MBI) evaluates occupational burnout across which three core dimensions?",
    "options": {
      "a": "Role ambiguity, Role conflict, Role overload",
      "b": "Emotional Exhaustion, Depersonalization (Cynicism), Reduced Personal Accomplishment",
      "c": "Absenteeism, Presenteeism, Turnover intention",
      "d": "Physiological fatigue, Sleep disturbance, Somatic anxiety"
    },
    "answer": "b",
    "explanation": "The Maslach Burnout Inventory (MBI) operationalizes burnout as a tri-partite syndrome of: Emotional Exhaustion (drained energy), Depersonalization/Cynicism (callous detachment), and Reduced Personal Accomplishment."
  },
  {
    "id": "eth_06",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Principle B of the APA Ethics Code ('Fidelity and Responsibility') primarily obligates psychologists to:",
    "options": {
      "a": "Establish relationships of trust, clarify professional roles, accept responsibility for behavior, and manage conflicts of interest",
      "b": "Publish at least two peer-reviewed articles annually",
      "c": "Provide free pro bono services to at least 50% of their client caseload",
      "d": "Ensure all psychological treatments produce quantifiable commercial ROI"
    },
    "answer": "a",
    "explanation": "Principle B (Fidelity and Responsibility) directs psychologists to build trust, uphold professional standards, clarify roles and obligations, accept responsibility for their actions, and proactively resolve conflicts of interest."
  },
  {
    "id": "eth_07",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA General Principle D ('Justice'), what ethical imperative is mandated for psychologists?",
    "options": {
      "a": "Psychologists must testify in legal proceedings whenever requested by law enforcement",
      "b": "All persons are entitled to access to and benefit from the contributions of psychology, and to equal quality in processes and services",
      "c": "Research findings must always support existing social welfare legislation",
      "d": "Psychologists must charge identical fees to all clients regardless of socioeconomic status"
    },
    "answer": "b",
    "explanation": "Principle D (Justice) affirms that fairness and justice entitle all individuals to benefit from psychology and receive equal quality in psychological services, ensuring biases do not lead to unjust practices."
  },
  {
    "id": "eth_08",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Which APA General Principle explicitly emphasizes respecting cultural, individual, and role differences, including those based on age, gender, race, culture, national origin, religion, disability, and sexual orientation?",
    "options": {
      "a": "Principle B: Fidelity and Responsibility",
      "b": "Principle C: Integrity",
      "c": "Principle E: Respect for People's Rights and Dignity",
      "d": "Principle A: Beneficence and Nonmaleficence"
    },
    "answer": "c",
    "explanation": "Principle E (Respect for People's Rights and Dignity) mandates respect for human dignity, individual autonomy, privacy, confidentiality, and cultural and demographic diversity."
  },
  {
    "id": "eth_09",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Ethical Standard 8.08 (Debriefing), what is required if research procedures have resulted in participant distress or harm?",
    "options": {
      "a": "Psychologists must take reasonable steps to minimize and remediate the harm",
      "b": "Psychologists are immune from liability if the participant signed an informed consent form",
      "c": "Debriefing may be withheld if explaining the study would compromise future publications",
      "d": "The study data must be immediately deleted without informing the participant"
    },
    "answer": "a",
    "explanation": "Standard 8.08(c) explicitly requires: 'If psychologists become aware that research procedures have caused harm to a participant, they take reasonable steps to minimize the harm.'"
  },
  {
    "id": "eth_10",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "According to APA Ethical Standard 8.06, offering financial compensation or academic credits to research participants becomes unethical when:",
    "options": {
      "a": "Undergraduate students receive course extra credit for participation",
      "b": "The inducements are excessive or inappropriate such that they are likely to coerce or unduly influence participation",
      "c": "The payment exceeds the local minimum hourly wage",
      "d": "Payments are distributed electronically rather than in physical cash"
    },
    "answer": "b",
    "explanation": "APA Standard 8.06 states that psychologists make reasonable efforts to avoid offering excessive or inappropriate financial or other inducements for research participation when such inducements are likely to coerce participation."
  },
  {
    "id": "eth_11",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 8.05, in which of the following scenarios may psychologists dispense with obtaining formal written informed consent?",
    "options": {
      "a": "Clinical trials testing novel psychoactive drugs on patients with major depression",
      "b": "Anonymous questionnaires, naturalistic observations, or normal educational classroom research where no risk of harm or distress is anticipated",
      "c": "Deceptive experiments involving high-intensity social stress or public humiliation",
      "d": "Workplace research evaluating identifiable employee performance data for potential terminations"
    },
    "answer": "b",
    "explanation": "Standard 8.05 allows dispensing with informed consent only where research would not reasonably create distress or harm, such as normal educational practices, anonymous surveys, or naturalistic observations protecting confidentiality."
  },
  {
    "id": "eth_12",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "APA Standard 3.05 governs 'Multiple Relationships'. A multiple relationship is considered ethically impermissible if it:",
    "options": {
      "a": "Could reasonably be expected to impair the psychologist's objectivity, competence, or effectiveness, or risks exploitation or harm",
      "b": "Occurs between colleagues who co-author academic articles",
      "c": "Involves attending the same scientific conference as a former client after five years",
      "d": "Is disclosed in writing to the state licensing board"
    },
    "answer": "a",
    "explanation": "A multiple relationship is unethical if it impairs professional objectivity, competence, or effectiveness in performing duties, or if it exploits or harms the other party."
  },
  {
    "id": "eth_13",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Regarding publication credit (APA Standard 8.12), what is the ethical guideline for an article substantially based on a student's doctoral dissertation?",
    "options": {
      "a": "The department chair must always be listed as first author",
      "b": "The student must be listed as principal (first) author, except under rare, clearly defined agreements",
      "c": "The faculty dissertation supervisor must always take first authorship as the grant holder",
      "d": "The student and advisor must draw lots to determine author sequence"
    },
    "answer": "b",
    "explanation": "APA Standard 8.12(c) states: 'Except under exceptional circumstances, a student is listed as principal author on any multiple-authored article that is substantially based on the student's doctoral dissertation.'"
  },
  {
    "id": "eth_14",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 2.01 (Boundaries of Competence), what must a psychologist do when asked to provide services in an emerging area where recognized standards do not yet exist?",
    "options": {
      "a": "Decline all clients until universal federal guidelines are codified into law",
      "b": "Take reasonable steps to ensure competence and protect clients from harm through relevant training, consultation, and study",
      "c": "Refer all cases immediately to general medical physicians",
      "d": "Provide services without restriction since no standards exist to violate"
    },
    "answer": "b",
    "explanation": "In emerging areas without recognized standards, psychologists must take reasonable steps to ensure competence, acquire relevant knowledge through study and consultation, and protect clients, students, and research participants from harm."
  },
  {
    "id": "eth_15",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 8.10, if a psychologist discovers a significant error in their published research data, what is their mandatory professional duty?",
    "options": {
      "a": "Take reasonable steps to publicly correct such errors in a correction, retraction, erratum, or other appropriate publication means",
      "b": "Wait until the next revision cycle of the journal before notifying readers",
      "c": "Quietly retract the paper without explaining the rationale to protect academic reputation",
      "d": "Blame research assistants and maintain the published conclusions unchanged"
    },
    "answer": "a",
    "explanation": "APA Standard 8.10(b) stipulates: 'If psychologists discover significant errors in their published data, they take reasonable steps to correct such errors in a correction, retraction, erratum, or other appropriate publication means.'"
  },
  {
    "id": "apt_06",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "A company had 400 employees at the start of the year. During the year, 60 employees resigned and 100 new employees were hired. What is the net percentage change in total headcount by year-end?",
    "options": {
      "a": "+25%",
      "b": "+20%",
      "c": "+10%",
      "d": "+15%"
    },
    "answer": "c",
    "explanation": "Net headcount change = +100 hired - 60 resigned = +40 net increase. Percentage change = (40 / 400) * 100 = +10%."
  },
  {
    "id": "apt_07",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "In an organization, the ratio of HR executives to Software engineers is 2 : 7. If there are 84 software engineers, how many total employees are in these two roles combined?",
    "options": {
      "a": "120",
      "b": "96",
      "c": "108",
      "d": "112"
    },
    "answer": "c",
    "explanation": "If 7 units = 84 engineers, then 1 unit = 84 / 7 = 12. HR executives = 2 * 12 = 24. Total employees = 84 + 24 = 108 (or 9 units * 12 = 108)."
  },
  {
    "id": "apt_08",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Recruiter A can screen 60 candidate resumes in 3 hours, while Recruiter B can screen 60 resumes in 6 hours. Working together at their constant rates, how many hours will they take to screen 60 resumes?",
    "options": {
      "a": "1.5 hours",
      "b": "2 hours",
      "c": "2.5 hours",
      "d": "4.5 hours"
    },
    "answer": "b",
    "explanation": "Rate of A = 60 / 3 = 20 resumes/hour. Rate of B = 60 / 6 = 10 resumes/hour. Combined rate = 20 + 10 = 30 resumes/hour. Time to screen 60 resumes = 60 / 30 = 2 hours."
  },
  {
    "id": "apt_09",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "The mean performance score of 10 employees is 78. When a new manager's score is included, the mean score of the 11 employees increases to 80. What score did the new manager achieve?",
    "options": {
      "a": "98",
      "b": "100",
      "c": "88",
      "d": "92"
    },
    "answer": "b",
    "explanation": "Sum of 10 employees = 10 * 78 = 780. Sum of 11 employees = 11 * 80 = 880. Manager's score = 880 - 780 = 100."
  },
  {
    "id": "apt_10",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Statements: (1) All certified psychologists are trained counselors. (2) Some HR managers are certified psychologists. Which conclusion logically follows?",
    "options": {
      "a": "All HR managers are trained counselors",
      "b": "All trained counselors are certified psychologists",
      "c": "Some HR managers are trained counselors",
      "d": "No HR managers are trained counselors"
    },
    "answer": "c",
    "explanation": "From 'Some HR managers are psychologists' and 'All psychologists are trained counselors', it follows deductively by categorical syllogism that 'Some HR managers are trained counselors'."
  },
  {
    "id": "apt_11",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Five team members (P, Q, R, S, T) sit in a row during an assessment center. R sits in the exact middle. P sits immediately to the left of R. Q sits at one of the extreme ends and is not next to P. Who sits immediately to the right of R?",
    "options": {
      "a": "P",
      "b": "Cannot be determined without knowing Q's end",
      "c": "S or T",
      "d": "Q only"
    },
    "answer": "c",
    "explanation": "Row positions: 1, 2, 3, 4, 5. Middle position 3 is R. P is immediately left of R, so P is at position 2. Since Q cannot be next to P, Q cannot be at position 1, meaning Q must be at position 5. Therefore, position 4 (immediately right of R) must be occupied by either S or T."
  },
  {
    "id": "apt_12",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Statement: 'The company should introduce flexible hybrid work schedules to enhance employee mental well-being and job retention.' Which underlying assumption is implicitly made?",
    "options": {
      "a": "Remote employees work more hours than in-office employees",
      "b": "Rigid in-office schedules contribute to employee stress and turnover intentions",
      "c": "Employees will accept a 10% pay cut for flexible schedules",
      "d": "Physical office spaces will be permanently closed by management"
    },
    "answer": "b",
    "explanation": "For hybrid work to improve well-being and retention, it must assume that existing fixed/rigid schedules negatively impact well-being or drive turnover."
  },
  {
    "id": "apt_13",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Complete the analogy based on functional relationships:\nEmpathy : Counselor :: Rigor : ________",
    "options": {
      "a": "Researcher",
      "b": "Novice",
      "c": "Client",
      "d": "Interviewee"
    },
    "answer": "a",
    "explanation": "Empathy is the cardinal defining virtue and standard of a counselor, just as methodological rigor is the defining hallmark of a scientific researcher."
  },
  {
    "id": "apt_14",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Choose the word that is most nearly OPPOSITE in meaning to 'NEPOTISM':",
    "options": {
      "a": "Meritocracy",
      "b": "Cronysim",
      "c": "Patronage",
      "d": "Favoritism"
    },
    "answer": "a",
    "explanation": "Nepotism is the practice of granting unfair advantages and jobs to relatives and friends regardless of merit. Its direct antonym is Meritocracy (advancement based purely on talent, skill, and effort)."
  },
  {
    "id": "apt_15",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Identify the grammatically correct sentence for formal executive reporting:",
    "options": {
      "a": "Neither the HR director nor the department managers have been being present at the hearing.",
      "b": "Neither the HR director nor the department managers was present at the arbitration hearing.",
      "c": "Neither the HR director or the department managers were present at the arbitration hearing.",
      "d": "Neither the HR director nor the department managers were present at the arbitration hearing."
    },
    "answer": "d",
    "explanation": "Under the rule of proximity for correlative conjunctions ('Neither... nor'), the verb agrees with the closer subject. 'Department managers' is plural, requiring the plural verb 'were'."
  },
  {
    "id": "gk_04",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is 'Tele-MANAS', launched by the Government of India under the National Tele Mental Health Programme?",
    "options": {
      "a": "An artificial intelligence chatbot replacing human clinical psychologists",
      "b": "A 24x7 free national tele-mental health helpline network providing counseling in 20+ regional languages",
      "c": "A biometric attendance app for mental asylum attendants",
      "d": "A mandatory psychiatric exam for all civil service applicants"
    },
    "answer": "b",
    "explanation": "Tele-MANAS (Tele Mental Health Assistance and Networking Across States), spearheaded by NIMHANS Bangalore, is India's flagship 24x7 toll-free mental health service offering psychological counseling across regional languages."
  },
  {
    "id": "gk_05",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under Section 115 of the Indian Mental Healthcare Act, 2017, which historic legal reform was enacted?",
    "options": {
      "a": "Electroconvulsive therapy (ECT) was made mandatory for all clinical anxiety disorders",
      "b": "Attempted suicide was effectively decriminalized by presuming severe stress unless proven otherwise",
      "c": "Private psychotherapy was prohibited outside government district hospitals",
      "d": "Psychologists were legally classified as corporate defense attorneys"
    },
    "answer": "b",
    "explanation": "Section 115 of the Mental Healthcare Act, 2017 created a statutory presumption that any person who attempts suicide is suffering from severe stress, effectively decriminalizing Section 309 of the Indian Penal Code."
  },
  {
    "id": "gk_06",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "On which date is World Mental Health Day observed globally each year by the World Health Organization (WHO) and WFMH?",
    "options": {
      "a": "7th April",
      "b": "1st December",
      "c": "5th June",
      "d": "10th October"
    },
    "answer": "d",
    "explanation": "World Mental Health Day is observed globally every year on October 10th to raise awareness of mental health issues and mobilize efforts in support of mental well-being."
  },
  {
    "id": "gk_07",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act), every workplace employing how many or more employees must constitute an Internal Complaints Committee (ICC)?",
    "options": {
      "a": "50 employees",
      "b": "25 employees",
      "c": "10 employees",
      "d": "5 employees"
    },
    "answer": "c",
    "explanation": "Under Section 4 of the POSH Act 2013, every employer of a workplace employing 10 or more workers is legally mandated to constitute an Internal Complaints Committee (ICC) headed by a senior woman employee."
  },
  {
    "id": "gk_08",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The Rights of Persons with Disabilities (RPwD) Act, 2016 in India expanded recognized disability categories from 7 to 21, explicitly incorporating which conditions critical to developmental and organizational psychology?",
    "options": {
      "a": "Mental illness, Autism Spectrum Disorder, Specific Learning Disabilities, and Intellectual Disability",
      "b": "Workplace burnout and common boredom",
      "c": "Type A personality and occupational stress",
      "d": "Introversion and stage fright"
    },
    "answer": "a",
    "explanation": "The RPwD Act 2016 expanded benchmark disabilities to include Mental Illness, Autism Spectrum Disorder (ASD), Specific Learning Disabilities (e.g., dyslexia), and Intellectual Disability, mandating affirmative workplace accommodations."
  },
  {
    "id": "gk_09",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In the World Health Organization's ICD-11 (International Classification of Diseases), how is 'Burnout' officially defined?",
    "options": {
      "a": "As an acute psychiatric illness requiring compulsory hospitalization",
      "b": "As a transient mood episode identical to bipolar depression",
      "c": "As an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed",
      "d": "As a genetic personality flaw tied to high neuroticism"
    },
    "answer": "c",
    "explanation": "In ICD-11, the WHO classifies Burnout not as a medical condition, but as an occupational phenomenon specifically tied to chronic unmanaged workplace stress, characterized by exhaustion, cynicism, and reduced efficacy."
  },
  {
    "id": "gk_10",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under India's Code on Social Security (2020), which emerging segment of workers was granted statutory recognition for welfare and health schemes for the first time?",
    "options": {
      "a": "Gig workers and platform workers",
      "b": "Foreign embassy diplomats",
      "c": "Tenured university professors",
      "d": "Stock exchange brokers"
    },
    "answer": "a",
    "explanation": "The Code on Social Security 2020 introduced pioneering statutory provisions recognizing 'gig workers' and 'platform workers', empowering the framing of social security schemes for health, disability, and accident insurance."
  },
  {
    "id": "gk_11",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "India's National Education Policy (NEP) 2020 emphasizes which mental health reform across secondary schools and higher educational institutions?",
    "options": {
      "a": "Mandating trained professional counselors, socio-emotional learning (SEL), and structured mental health support systems",
      "b": "Banning student group discussions",
      "c": "Eliminating all extracurricular and sports activities",
      "d": "Conducting monthly psychiatric polygraph testing"
    },
    "answer": "a",
    "explanation": "NEP 2020 specifically highlights the holistic development of learners, mandating institutional counseling services, mental health awareness, and socio-emotional learning (SEL) to tackle student stress and anxiety."
  },
  {
    "id": "gk_12",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In modern organizational psychology and HR literature, what does the trending workplace phenomenon 'Quiet Quitting' describe?",
    "options": {
      "a": "Secretly working two full-time remote corporate jobs simultaneously",
      "b": "Fulfilling one's defined job description duties without subscribing to hustle culture or taking on unpaid, excessive overtime",
      "c": "Remaining silent during all team meetings to show dissent",
      "d": "Resigning without submitting a written formal notice"
    },
    "answer": "b",
    "explanation": "'Quiet Quitting' refers to employees completing their contracted duties and responsibilities while rejecting hustle culture, unpaid overtime, and boundary-eroding work demands to safeguard their mental well-being."
  },
  {
    "id": "gk_13",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is an Employee Assistance Program (EAP) in corporate HR management?",
    "options": {
      "a": "A mandatory company loan deduction scheme for pension funds",
      "b": "A software tracking keystrokes and webcam movement during work hours",
      "c": "A confidential, employer-sponsored support program providing counseling, crisis intervention, and mental health assistance for personal and work-related issues",
      "d": "An executive bonus distribution algorithm"
    },
    "answer": "c",
    "explanation": "An Employee Assistance Program (EAP) is a work-based intervention program offering free, confidential assessments, short-term counseling, and referrals to employees facing personal, emotional, or work problems."
  },
  {
    "id": "gk_14",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In the context of modern Human Resource Management, what does the acronym 'DEI' stand for?",
    "options": {
      "a": "Disciplinary Enforcement Index",
      "b": "Data Evaluation and Implementation",
      "c": "Diversity, Equity, and Inclusion",
      "d": "Direct Employee Incentives"
    },
    "answer": "c",
    "explanation": "DEI stands for Diversity, Equity, and Inclusion\u2014a foundational HR framework aimed at promoting fair representation, equal access to opportunity, and a culture of belonging for all employee demographics."
  },
  {
    "id": "gk_15",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The 2024 Nobel Prize in Physiology or Medicine was awarded to Victor Ambros and Gary Ruvkun for the discovery of which fundamental biological regulatory mechanism?",
    "options": {
      "a": "Development of mRNA vaccines for infectious diseases",
      "b": "Discovery of the neural GPS system in the hippocampus (grid cells)",
      "c": "Synthesis of synthetic dopamine receptors",
      "d": "Discovery of microRNA and its role in post-transcriptional gene regulation"
    },
    "answer": "d",
    "explanation": "The 2024 Nobel Prize in Physiology or Medicine was awarded to Victor Ambros and Gary Ruvkun for their groundbreaking discovery of microRNA and its crucial role in post-transcriptional gene regulation in multicellular organisms."
  },
  {
    "id": "hrm_11",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In job analysis, what is the crucial conceptual difference between a 'Job Description' and a 'Job Specification'?",
    "options": {
      "a": "A Job Description is written by the employee; a Job Specification is written by the labor union",
      "b": "A Job Description details tasks, duties, and responsibilities (TDRs); a Job Specification outlines human qualifications, skills, and knowledge (KSAOs) required",
      "c": "A Job Description specifies salary and bonuses; a Job Specification lists employee age limits",
      "d": "They are completely interchangeable legal synonyms under Indian labor laws"
    },
    "answer": "b",
    "explanation": "Job Description focuses on the job itself (tasks, duties, responsibilities, working conditions); Job Specification focuses on the person (knowledge, skills, abilities, education, experience - KSAOs)."
  },
  {
    "id": "hrm_12",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Which recruitment and selection method utilizes multiple standardized simulation exercises (such as in-basket tasks, leaderless group discussions, and role-plays) evaluated by multiple trained raters?",
    "options": {
      "a": "Assessment Center method",
      "b": "Unstructured stress interview",
      "c": "Polygraph screening",
      "d": "Graphology handwriting analysis"
    },
    "answer": "a",
    "explanation": "An Assessment Center is a comprehensive, high-validity selection technique where candidates participate in multiple job-related simulations evaluated by a pool of trained behavioral assessors."
  },
  {
    "id": "hrm_13",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In Donald Kirkpatrick's 4-Level Training Evaluation Model, which level assesses the extent to which participants actually apply learned concepts on the job ('Transfer of Training')?",
    "options": {
      "a": "Level 4: Results",
      "b": "Level 3: Behavior",
      "c": "Level 1: Reaction",
      "d": "Level 2: Learning"
    },
    "answer": "b",
    "explanation": "Kirkpatrick's Level 3 (Behavior) evaluates transfer of training\u2014whether trainees successfully changed their work behavior and applied newly acquired skills back in the day-to-day work environment."
  },
  {
    "id": "hrm_14",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In Management by Objectives (MBO), originated by Peter Drucker, how are performance goals determined?",
    "options": {
      "a": "Goals are randomized by an automated enterprise algorithm",
      "b": "Employees write their own compensation terms without management sign-off",
      "c": "Supervisors and subordinates collaboratively formulate specific, measurable, time-bound objectives and periodically review progress",
      "d": "Top management imposes rigid production quotas without consulting employees"
    },
    "answer": "c",
    "explanation": "MBO is a collaborative management system where managers and employees mutually establish specific, clear, achievable goals (SMART criteria) and periodically assess tangible contributions toward those goals."
  },
  {
    "id": "hrm_15",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In compensation architecture, 'Internal Equity' is primarily established through ________, whereas 'External Equity' is established through ________.",
    "options": {
      "a": "Seniority rules; Unstructured CEO discretion",
      "b": "Employee favoritism; Government price ceilings",
      "c": "Salary benchmarking surveys; Job evaluation",
      "d": "Job evaluation (e.g. Point-Factor method); Wage and salary market surveys"
    },
    "answer": "d",
    "explanation": "Internal equity (fair pay relative to the worth of other jobs inside the firm) is established via systematic Job Evaluation; External equity (fair pay relative to the external labor market) is established through market salary benchmarking surveys."
  },
  {
    "id": "io_14",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "During World War I, Robert Yerkes and a committee of psychological researchers developed the Army Alpha and Army Beta tests. What was the critical distinction between them?",
    "options": {
      "a": "Army Alpha was a written group intelligence test for literate recruits; Army Beta was a non-verbal pictorial test for illiterate or non-English-speaking recruits",
      "b": "Alpha was a physical endurance test; Beta was an IQ test",
      "c": "Alpha tested officers; Beta tested naval submariners exclusively",
      "d": "Alpha evaluated personality pathology; Beta evaluated combat stress reactions"
    },
    "answer": "a",
    "explanation": "Army Alpha was designed for literate recruits reading English; Army Beta was developed for illiterate recruits and recent immigrants who could not read or understand English, using pictorial and non-verbal instructions."
  },
  {
    "id": "io_15",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In George Graen's Leader-Member Exchange (LMX) Theory, what characterizes relationships in the 'In-Group' compared to the 'Out-Group'?",
    "options": {
      "a": "In-group members have lower job satisfaction and higher turnover",
      "b": "In-group members experience high mutual trust, greater autonomy, extra-role developmental opportunities, and richer communication with the leader",
      "c": "Out-group members receive higher performance bonuses and faster promotions",
      "d": "In-group members are managed strictly by formal employment contracts and punitive discipline"
    },
    "answer": "b",
    "explanation": "LMX theory posits that leaders form differentiated dyadic relationships: In-Group subordinates enjoy high mutual trust, respect, influence, and organizational rewards, whereas Out-Group members have formal, transactional, low-trust interactions."
  },
  {
    "id": "bp_31",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Edward Titchener, a student of Wilhelm Wundt, developed which methodology to break conscious experience down into its basic elemental sensations and feelings?",
    "options": {
      "a": "Systematic Desensitization",
      "b": "Analytical Introspection",
      "c": "Free Association",
      "d": "Projective Identification"
    },
    "answer": "b",
    "explanation": "Titchener introduced Structuralism to the United States, utilizing highly trained Analytical Introspection where subjects reported raw sensory sensations without assigning semantic meaning or context."
  },
  {
    "id": "bp_32",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which principle in Gestalt psychology asserts that the mind naturally perceives objects as symmetrical, regular, and orderly rather than chaotic or complex?",
    "options": {
      "a": "Weber-Fechner Principle",
      "b": "Law of Pr\u00e4gnanz (Good Form)",
      "c": "Law of Effect",
      "d": "Law of Contiguity"
    },
    "answer": "b",
    "explanation": "The Law of Pr\u00e4gnanz (law of good figure or simplicity) is the central Gestalt axiom: perceptual organization will always be as regular, orderly, symmetrical, and simple as reality allows."
  },
  {
    "id": "bp_33",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The historic 1913 manifesto 'Psychology as the Behaviorist Views It' was authored by:",
    "options": {
      "a": "Clark Hull",
      "b": "Edward Thorndike",
      "c": "B.F. Skinner",
      "d": "John B. Watson"
    },
    "answer": "d",
    "explanation": "John B. Watson published his behaviorist manifesto in 1913, arguing that psychology must abandon consciousness and introspection in favor of purely objective, observable stimulus-response behavior."
  },
  {
    "id": "bp_34",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which pioneer in humanistic psychology proposed that individual self-actualization requires unconditional positive regard, congruence, and empathic understanding in the therapeutic alliance?",
    "options": {
      "a": "Carl Rogers",
      "b": "Rollo May",
      "c": "Viktor Frankl",
      "d": "Abraham Maslow"
    },
    "answer": "a",
    "explanation": "Carl Rogers founded Person-Centered Therapy, positing that personal growth and psychological health flourish when an individual receives unconditional positive regard, empathy, and genuine congruence."
  },
  {
    "id": "bp_35",
    "topic": "history_schools",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "George A. Miller's landmark 1956 paper, 'The Magical Number Seven, Plus or Minus Two', was a cornerstone in the development of which psychological school?",
    "options": {
      "a": "Behaviorism",
      "b": "Psychoanalysis",
      "c": "Cognitive Psychology",
      "d": "Evolutionary Psychology"
    },
    "answer": "c",
    "explanation": "Miller's demonstration that short-term memory capacity is constrained to 7\u00b12 chunks of information helped catalyze the Cognitive Revolution, proving that internal mental capacity can be scientifically quantified."
  },
  {
    "id": "bp_36",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "During the neuronal action potential, what event immediately causes the rapid depolarization phase of the axon membrane from -70 mV to approximately +30 mV?",
    "options": {
      "a": "Release of GABA into the synaptic cleft",
      "b": "Massive Influx of Sodium (Na+) ions through voltage-gated channels",
      "c": "Efflux of Potassium (K+) ions",
      "d": "Active pumping of Chloride (Cl-) ions out of the cell"
    },
    "answer": "b",
    "explanation": "When the axon hillock reaches the excitation threshold (~-55 mV), voltage-gated Na+ channels snap open, allowing positively charged Sodium ions to flood into the intracellular fluid, causing rapid depolarization to +30 mV."
  },
  {
    "id": "bp_37",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which limbic system structure is indispensable for the consolidation of new explicit episodic and semantic memories from short-term to long-term storage?",
    "options": {
      "a": "Hippocampus",
      "b": "Nucleus Accumbens",
      "c": "Cerebellum",
      "d": "Amygdala"
    },
    "answer": "a",
    "explanation": "The Hippocampus consolidates declarative (explicit) memories into cortical networks. Bilateral hippocampal resection (as in patient H.M.) prevents the formation of new long-term episodic memories (anterograde amnesia)."
  },
  {
    "id": "bp_38",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Damage to which area of the left temporal lobe causes fluent, grammatically effortless speech that is completely devoid of semantic meaning (word salad)?",
    "options": {
      "a": "Wernicke's area",
      "b": "Primary motor cortex",
      "c": "Broca's area",
      "d": "Angular gyrus"
    },
    "answer": "a",
    "explanation": "Wernicke's area (Brodmann area 22) in the left posterior superior temporal gyrus is critical for language comprehension. Damage results in receptive (Wernicke's) aphasia: fluid but incomprehensible speech."
  },
  {
    "id": "bp_39",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which neurotransmitter system is most prominently targeted by typical antipsychotic medications (neuroleptics) to suppress positive symptoms of schizophrenia?",
    "options": {
      "a": "Norepinephrine Alpha-1 receptors",
      "b": "Acetylcholine Nicotinic receptors",
      "c": "Serotonin 5-HT1A receptors",
      "d": "Dopamine D2 receptors"
    },
    "answer": "d",
    "explanation": "The dopamine hypothesis of schizophrenia posits hyperactive dopaminergic transmission in the mesolimbic pathway. First-generation neuroleptics alleviate hallucinations and delusions by antagonizing D2 receptors."
  },
  {
    "id": "bp_40",
    "topic": "biological_bases",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The autonomic nervous system's 'fight-or-flight' activation is directly mediated by which division, and which adrenal hormone does it stimulate?",
    "options": {
      "a": "Somatic division; Insulin",
      "b": "Parasympathetic division; Melatonin",
      "c": "Sympathetic division; Epinephrine (Adrenaline)",
      "d": "Enteric division; Calcitonin"
    },
    "answer": "c",
    "explanation": "The sympathetic branch mobilizes physiological resources during acute stress by triggering the adrenal medulla to release epinephrine and norepinephrine into the bloodstream."
  },
  {
    "id": "bp_41",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to the Young-Helmholtz Trichromatic Theory of color vision, what are the three primary types of photoreceptor cones in the human retina?",
    "options": {
      "a": "Cyan, Magenta, Yellow",
      "b": "Red, Green, Blue",
      "c": "Black, White, Gray",
      "d": "Red, Yellow, Blue"
    },
    "answer": "b",
    "explanation": "The Trichromatic Theory states that the retina contains three distinct cone types maximally sensitive to short (blue), medium (green), and long (red) wavelengths of light."
  },
  {
    "id": "bp_42",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which monocular depth cue explains why parallel railway tracks appear to converge toward a vanishing point on the distant horizon?",
    "options": {
      "a": "Linear Perspective",
      "b": "Texture Gradient",
      "c": "Motion Parallax",
      "d": "Retinal Disparity"
    },
    "answer": "a",
    "explanation": "Linear perspective is a pictorial monocular depth cue where parallel lines appear to converge as distance increases toward a single vanishing point."
  },
  {
    "id": "bp_43",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Signal Detection Theory, if a radar operator reports that an incoming enemy aircraft is on the screen when no aircraft is actually present, this response is classified as a:",
    "options": {
      "a": "False Alarm",
      "b": "Correct Rejection",
      "c": "Miss",
      "d": "Hit"
    },
    "answer": "a",
    "explanation": "In SDT, when a signal is absent but the observer responds 'Yes' (signal detected), the outcome is a False Alarm (Type I perceptual error)."
  },
  {
    "id": "bp_44",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Gate Control Theory of pain, formulated by Melzack and Wall, suggests that pain transmission to the brain is modulated at which neuroanatomical junction?",
    "options": {
      "a": "Parietal somatosensory cortex",
      "b": "Corpus callosum",
      "c": "Optic chiasm",
      "d": "Dorsal horn of the spinal cord"
    },
    "answer": "d",
    "explanation": "Melzack and Wall proposed that neural gates in the substantia gelatinosa of the dorsal horn of the spinal cord open or close to allow or block pain signals carried by small-diameter A-delta and C fibers."
  },
  {
    "id": "bp_45",
    "topic": "sensation_perception",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Why do negative afterimages (e.g., staring at a green circle and then seeing a red circle on a white wall) occur?",
    "options": {
      "a": "Damage to rod photoreceptors",
      "b": "Vestibular nystagmus",
      "c": "Neural adaptation and rebound firing in Opponent-Process cells (Hering's Theory)",
      "d": "Visual accommodation failure of the lens"
    },
    "answer": "c",
    "explanation": "Ewald Hering's Opponent-Process Theory posits red-green, blue-yellow, and black-white opponent cells. Prolonged viewing fatigues one component; shifting gaze causes rebound firing in the opposing color channel."
  },
  {
    "id": "bp_46",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Ivan Pavlov's classical conditioning paradigm, what term describes the sudden reappearance of an extinguished conditioned response following a rest interval?",
    "options": {
      "a": "Higher-Order Conditioning",
      "b": "Spontaneous Recovery",
      "c": "Latent Inhibition",
      "d": "Stimulus Generalization"
    },
    "answer": "b",
    "explanation": "Spontaneous recovery demonstrates that extinction inhibits rather than completely erases a conditioned association; after a delay without presentation, the CR temporarily reappears."
  },
  {
    "id": "bp_47",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "A slot machine in a casino pays out jackpots after an unpredictable number of lever pulls. This represents which schedule of reinforcement?",
    "options": {
      "a": "Fixed Ratio (FR)",
      "b": "Fixed Interval (FI)",
      "c": "Variable Ratio (VR)",
      "d": "Variable Interval (VI)"
    },
    "answer": "c",
    "explanation": "A Variable Ratio (VR) schedule delivers reinforcement after an unpredictable, varying number of responses, generating the highest, most persistent rate of responding and maximum resistance to extinction."
  },
  {
    "id": "bp_48",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "What is the crucial operational distinction between 'Negative Reinforcement' and 'Punishment' in operant conditioning?",
    "options": {
      "a": "Negative reinforcement increases behavior by removing an aversive stimulus; punishment decreases behavior by introducing or removing stimuli",
      "b": "Negative reinforcement decreases behavior; punishment increases behavior",
      "c": "Negative reinforcement requires continuous physical restraints",
      "d": "Both terms mean identical behavioral suppression"
    },
    "answer": "a",
    "explanation": "Reinforcement ALWAYS strengthens/increases behavior (negative reinforcement does so by removing an unpleasant state, like taking aspirin to remove a headache); punishment ALWAYS decreases/suppresses behavior."
  },
  {
    "id": "bp_49",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Albert Bandura's famous 1961 Bobo Doll experiment demonstrated that children acquire novel aggressive behaviors primarily through:",
    "options": {
      "a": "Direct visceral punishment",
      "b": "Genetic behavioral inheritance",
      "c": "Observational learning (vicarious modeling)",
      "d": "Systematic desensitization"
    },
    "answer": "c",
    "explanation": "Bandura proved that children can learn novel aggressive scripts without direct personal reinforcement through observational modeling and vicarious reinforcement of adult role models."
  },
  {
    "id": "bp_50",
    "topic": "learning_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Edward Tolman showed that unreinforced rats placed in a maze still developed an internal spatial representation of the pathways, a phenomenon termed:",
    "options": {
      "a": "Preparedness",
      "b": "Instinctual Drift",
      "c": "Cognitive Map & Latent Learning",
      "d": "Insight Learning"
    },
    "answer": "c",
    "explanation": "Tolman demonstrated latent learning: rats developed a mental cognitive map of the maze without reinforcement, demonstrating rapid performance improvements once food reinforcement was introduced."
  },
  {
    "id": "bp_51",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to the Atkinson-Shiffrin Multi-Store Model, what is the approximate duration and storage mechanism of iconic sensory memory?",
    "options": {
      "a": "0.25 to 0.5 seconds, raw unparsed visual trace",
      "b": "Up to 5 minutes, semantic encoding",
      "c": "Permanent structural storage",
      "d": "20 to 30 seconds, phonological rehearsal"
    },
    "answer": "a",
    "explanation": "George Sperling demonstrated that visual sensory memory (iconic memory) retains large quantities of raw environmental visual data for roughly 250\u2013500 milliseconds before fading rapidly."
  },
  {
    "id": "bp_52",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "When learning a new corporate software system makes it difficult for an employee to recall how to operate the old legacy system, this forgetting illustrates:",
    "options": {
      "a": "Cryptomnesia",
      "b": "Proactive Interference",
      "c": "Retroactive Interference",
      "d": "Source Amnesia"
    },
    "answer": "c",
    "explanation": "Retroactive interference occurs when newly encoded information impairs the retrieval of previously learned older information (New blocks Old). Proactive interference is the reverse (Old blocks New)."
  },
  {
    "id": "bp_53",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Alan Baddeley's Working Memory model, which component is responsible for allocating attentional resources, switching tasks, and inhibiting inappropriate impulses?",
    "options": {
      "a": "Visuospatial Sketchpad",
      "b": "Phonological Loop",
      "c": "Central Executive",
      "d": "Episodic Buffer"
    },
    "answer": "c",
    "explanation": "The Central Executive coordinates the slave systems (phonological loop and visuospatial sketchpad), oversees attentional focus, planning, and task-switching."
  },
  {
    "id": "bp_54",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Serial Position Effect demonstrates that items presented in the middle of a list are recalled poorly compared to items at the beginning and end. Superior recall for initial items is called the:",
    "options": {
      "a": "Von Restorff Effect",
      "b": "Primacy Effect",
      "c": "Recency Effect",
      "d": "Stroop Effect"
    },
    "answer": "b",
    "explanation": "The Primacy Effect is the cognitive tendency to recall initial list items due to longer processing time and consolidation into long-term memory. The Recency Effect reflects active maintenance in working memory."
  },
  {
    "id": "bp_55",
    "topic": "memory_forgetting",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Elizabeth Loftus's research on the 'Misinformation Effect' demonstrates that eyewitness memory is fundamentally:",
    "options": {
      "a": "Immune to leading questions when confidence is high",
      "b": "Exclusively stored in the cerebellum",
      "c": "Constructive and malleable to post-event suggestive phrasing",
      "d": "A pristine photographic recording that decays linearly"
    },
    "answer": "c",
    "explanation": "Loftus proved that memory is reconstructive; post-event leading questions (such as asking how fast cars were going when they 'smashed' vs. 'hit') alter and distort episodic recollections."
  },
  {
    "id": "bp_56",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The tendency to judge the likelihood of an event based on how readily recent or vivid examples come to mind is known as the:",
    "options": {
      "a": "Availability Heuristic",
      "b": "Anchoring and Adjustment Heuristic",
      "c": "Representativeness Heuristic",
      "d": "Framing Effect"
    },
    "answer": "a",
    "explanation": "The Availability Heuristic (Tversky & Kahneman) causes individuals to estimate probability based on cognitive ease of recall; vivid or dramatic events (like airplane crashes) are perceived as more frequent."
  },
  {
    "id": "bp_57",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "An individual cannot realize that a heavy glass paperweight can be used as a makeshift hammer to drive a nail into the wall because of:",
    "options": {
      "a": "Functional Fixedness",
      "b": "Belief Perseverance",
      "c": "Mental Set",
      "d": "Confirmation Bias"
    },
    "answer": "a",
    "explanation": "Functional fixedness (Duncker) is a cognitive bias that limits an individual to viewing an object only in the way it is traditionally or customarily utilized."
  },
  {
    "id": "bp_58",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Robert Sternberg's Triarchic Theory of Intelligence posits which three overarching facets of human mental ability?",
    "options": {
      "a": "Emotional, Social, and Abstract intelligence",
      "b": "Fluid, Crystallized, and General intelligence",
      "c": "Analytical, Creative, and Practical intelligence",
      "d": "Linguistic, Spatial, and Interpersonal intelligence"
    },
    "answer": "c",
    "explanation": "Sternberg's Triarchic Theory identifies: (1) Analytical (componential / problem-solving), (2) Creative (experiential / handling novelty), and (3) Practical (contextual / street smarts & adaptation)."
  },
  {
    "id": "bp_59",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Raymond Cattell proposed that general intelligence (g) can be partitioned into Fluid Intelligence (Gf) and Crystallized Intelligence (Gc). How do these change across adulthood?",
    "options": {
      "a": "Crystallized intelligence declines; Fluid intelligence increases",
      "b": "Fluid intelligence peaks in early adulthood and declines; Crystallized intelligence remains stable or increases with age",
      "c": "Neither changes throughout the human lifespan",
      "d": "Both decline steeply starting at age 30"
    },
    "answer": "b",
    "explanation": "Fluid intelligence (abstract reasoning, processing speed) peaks in the 20s and gradually declines, whereas Crystallized intelligence (accumulated knowledge, vocabulary) grows and stabilizes across older age."
  },
  {
    "id": "bp_60",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In the calculation of the classical Stanford-Binet Intelligence Quotient (IQ) developed by William Stern, what was the formula?",
    "options": {
      "a": "IQ = (Chronological Age / Mental Age) * 100",
      "b": "IQ = (Raw Score / Standard Deviation) * 15",
      "c": "IQ = Mental Age - Chronological Age",
      "d": "IQ = (Mental Age / Chronological Age) * 100"
    },
    "answer": "d",
    "explanation": "William Stern's original ratio IQ formula was: IQ = (Mental Age / Chronological Age) * 100. Modern psychometrics replaces this with deviation IQ based on the standard normal curve."
  },
  {
    "id": "bp_61",
    "topic": "cognition_intelligence",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Noam Chomsky posited that human children acquire complex syntax effortlessly because they are biologically endowed with a innate neural faculty called the:",
    "options": {
      "a": "Linguistic Relativity Engine",
      "b": "Language Acquisition Device (LAD)",
      "c": "Phonemic Loop",
      "d": "Universal Grammar Operant Chamber"
    },
    "answer": "b",
    "explanation": "Chomsky's nativist theory argues that humans possess an innate biological Language Acquisition Device (LAD) and Universal Grammar, refuting Skinner's purely behavioral reinforcement account."
  },
  {
    "id": "bp_62",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which theory of emotion asserts that physiological arousal and conscious emotional experience occur simultaneously and independently via the thalamus?",
    "options": {
      "a": "James-Lange Theory",
      "b": "Schachter-Singer Two-Factor Theory",
      "c": "Cannon-Bard Theory",
      "d": "Lazarus Cognitive-Mediational Theory"
    },
    "answer": "c",
    "explanation": "The Cannon-Bard theory argued that bodily arousal and subjective feeling occur at the same time; sensory signals trigger the thalamus, which simultaneously activates the cortex (feeling) and autonomic system."
  },
  {
    "id": "bp_63",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Stanley Schachter and Jerome Singer's Two-Factor Theory, what two components are required to generate an emotional experience?",
    "options": {
      "a": "General physiological arousal and cognitive appraisal/labeling of that arousal",
      "b": "Unconscious trauma and catharsis",
      "c": "Facial feedback and limbic inhibition",
      "d": "Instinctual drives and superego defense"
    },
    "answer": "a",
    "explanation": "Schachter-Singer proposed: Emotion = Undifferentiated Physiological Arousal + Cognitive Interpretation/Appraisal of the surrounding situational context."
  },
  {
    "id": "bp_64",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Yerkes-Dodson Law describes the inverted-U relationship between physiological arousal and task performance. For highly complex cognitive tasks, what arousal level yields optimal performance?",
    "options": {
      "a": "Moderate-to-low arousal",
      "b": "Panic-level arousal",
      "c": "Extremely high arousal",
      "d": "Complete absence of arousal"
    },
    "answer": "a",
    "explanation": "The Yerkes-Dodson law dictates that optimal arousal varies with task complexity: simple tasks require higher arousal to maintain focus, while complex, demanding tasks require lower arousal to prevent anxiety errors."
  },
  {
    "id": "bp_65",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Edward Deci and Richard Ryan's Self-Determination Theory (SDT), what are the three fundamental innate psychological needs required for autonomous motivation?",
    "options": {
      "a": "Safety, Esteem, Self-Actualization",
      "b": "Extrinsic, Intrinsic, Amotivation",
      "c": "Autonomy, Competence, and Relatedness",
      "d": "Power, Achievement, Affiliation"
    },
    "answer": "c",
    "explanation": "Self-Determination Theory argues that human flourishing and intrinsic motivation rely on the satisfaction of three universal psychological needs: Autonomy (agency), Competence (mastery), and Relatedness (belonging)."
  },
  {
    "id": "bp_66",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "What happens when an external monetary reward is offered to an individual for performing an activity they already found inherently enjoyable and intrinsically motivating?",
    "options": {
      "a": "The Overjustification Effect: their intrinsic interest decreases as they attribute participation to the external reward",
      "b": "Their intrinsic motivation increases dramatically",
      "c": "Their cognitive dissonance increases",
      "d": "No measurable change occurs"
    },
    "answer": "a",
    "explanation": "The Overjustification Effect demonstrates that introducing extrinsic rewards for intrinsically enjoyed behavior causes individuals to re-attribute their motivation to the external reward, eroding genuine interest."
  },
  {
    "id": "bp_67",
    "topic": "motivation_emotion",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Paul Ekman's cross-cultural research across isolated pre-literate tribes (such as the Fore of Papua New Guinea) proved that:",
    "options": {
      "a": "Facial expressions are entirely arbitrary and learned through television",
      "b": "Primary facial expressions of six basic emotions (happiness, sadness, anger, fear, surprise, disgust) are universally recognized",
      "c": "Emotional expressions have zero evolutionary survival value",
      "d": "Display rules are uniform across all cultures"
    },
    "answer": "b",
    "explanation": "Ekman established that the facial expressions for six basic emotions are biologically hardwired and universally recognized across all human cultures, though cultural 'display rules' govern their public expression."
  },
  {
    "id": "bp_68",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Jean Piaget's cognitive development theory, a child who realizes that pouring liquid from a short, wide glass into a tall, thin glass does not change the total volume has mastered:",
    "options": {
      "a": "Conservation",
      "b": "Object Permanence",
      "c": "Animism",
      "d": "Centration"
    },
    "answer": "a",
    "explanation": "Conservation (achieved in the Concrete Operational stage, ~7-11 years) is the understanding that altering the superficial appearance or shape of an object does not change its basic mass, volume, or quantity."
  },
  {
    "id": "bp_69",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Mary Ainsworth's 'Strange Situation' paradigm, an infant who explores comfortably, becomes distressed upon maternal separation, but seeks physical comfort and is quickly soothed upon her return demonstrates:",
    "options": {
      "a": "Insecure-Avoidant Attachment",
      "b": "Secure Attachment",
      "c": "Anxious-Ambivalent Attachment",
      "d": "Disorganized Attachment"
    },
    "answer": "b",
    "explanation": "Secure attachment is marked by using the caregiver as a safe base for exploration, showing normative distress during separation, and actively seeking comfort and being calmed upon reunion."
  },
  {
    "id": "bp_70",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "According to Erik Erikson's psychosocial stages, what is the core developmental crisis faced by young adults in their 20s and early 30s?",
    "options": {
      "a": "Generativity vs. Stagnation",
      "b": "Intimacy vs. Isolation",
      "c": "Identity vs. Role Confusion",
      "d": "Integrity vs. Despair"
    },
    "answer": "b",
    "explanation": "Erikson identified 'Intimacy vs. Isolation' as the central challenge of young adulthood: forming reciprocal, deeply committed emotional relationships vs. experiencing social disconnection and loneliness."
  },
  {
    "id": "bp_71",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Lawrence Kohlberg's theory of moral development, an individual in the 'Postconventional' stage bases moral decisions on:",
    "options": {
      "a": "Self-chosen universal ethical principles and human rights that may supersede local laws",
      "b": "Immediate personal transactional reciprocity",
      "c": "Conforming to peer social approval and strict adherence to codified laws",
      "d": "Avoiding physical punishment and obedience to superior authority"
    },
    "answer": "a",
    "explanation": "Postconventional morality (Stages 5 and 6) transcends rigid legalism, evaluating ethical actions against universal human rights, social contracts, and internalized ethical conscience."
  },
  {
    "id": "bp_72",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Lev Vygotsky proposed that intellectual development occurs through collaborative social interaction within the 'Zone of Proximal Development' (ZPD), which represents:",
    "options": {
      "a": "The maximum physiological limits of a child's brain maturation",
      "b": "The difference between what a learner can achieve independently and what they can achieve with guided scaffolding from a knowledgeable other",
      "c": "The age window where sensory imprinting occurs",
      "d": "The intelligence gap between identical and fraternal twins"
    },
    "answer": "b",
    "explanation": "Vygotsky's ZPD is the distance between a child's actual developmental level determined by independent problem solving and the level of potential development achieved through scaffolding with a mentor."
  },
  {
    "id": "bp_73",
    "topic": "developmental_psych",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Diana Baumrind's parenting styles framework, which style combines high parental warmth, open dialogue, and high, clear behavioral standards/demandingness?",
    "options": {
      "a": "Authoritative",
      "b": "Permissive",
      "c": "Uninvolved / Neglectful",
      "d": "Authoritarian"
    },
    "answer": "a",
    "explanation": "Authoritative parenting balances warmth, responsiveness, and emotional support with clear, firm behavioral expectations and inductive discipline, producing the highest social and academic competence."
  },
  {
    "id": "bp_74",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Sigmund Freud's structural model of the psyche, which component operates entirely on the 'Pleasure Principle' and seeks immediate tension discharge without moral constraint?",
    "options": {
      "a": "Superego",
      "b": "Id",
      "c": "Ego-Ideal",
      "d": "Ego"
    },
    "answer": "b",
    "explanation": "The Id is the instinctual, unconscious reservoir of psychic energy (libido) driven exclusively by the Pleasure Principle, demanding immediate gratification of sexual and aggressive drives."
  },
  {
    "id": "bp_75",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which Freudian defense mechanism involves redirecting unacceptable instinctual desires (such as violent or aggressive urges) into socially celebrated, productive activities (such as contact sports or surgery)?",
    "options": {
      "a": "Reaction Formation",
      "b": "Projection",
      "c": "Displacement",
      "d": "Sublimation"
    },
    "answer": "d",
    "explanation": "Sublimation is considered the most mature ego defense mechanism, transforming destructive or taboo impulses into constructive, culturally valued achievements."
  },
  {
    "id": "bp_76",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Carl Jung broke with Freud by proposing that beneath the personal unconscious lies a deeper layer of transpersonal ancestral memory and universal symbolic forms termed the:",
    "options": {
      "a": "Collective Unconscious & Archetypes",
      "b": "Shadow Defense",
      "c": "Basic Anxiety",
      "d": "Inferiority Complex"
    },
    "answer": "a",
    "explanation": "Jung postulated the Collective Unconscious, a reservoir of shared evolutionary memories and universal archetypal patterns (e.g., Anima/Animus, Shadow, Persona, Hero) shared across humanity."
  },
  {
    "id": "bp_77",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In the Big Five (Five-Factor Model - OCEAN) personality taxonomy, an employee who is systematically organized, self-disciplined, reliable, and goal-directed scores high on:",
    "options": {
      "a": "Agreeableness",
      "b": "Extraversion",
      "c": "Openness to Experience",
      "d": "Conscientiousness"
    },
    "answer": "d",
    "explanation": "Conscientiousness reflects self-control, organizational skills, duty, and dependability. In I/O psychology, it is the single most consistent personality predictor of job performance across occupations."
  },
  {
    "id": "bp_78",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Julian Rotter introduced the construct of 'Locus of Control'. An employee with an internal locus of control believes that:",
    "options": {
      "a": "Their success or failure is directly contingent upon their own personal effort, competence, and behavior",
      "b": "They have zero personal agency",
      "c": "Their career outcomes are predominantly determined by luck, fate, and office politics",
      "d": "All managerial decisions must be referred to external arbiters"
    },
    "answer": "a",
    "explanation": "Internal Locus of Control refers to the belief that one's personal choices, efforts, and capabilities control outcomes, in contrast to External Locus of Control, which attributes life events to outside chance."
  },
  {
    "id": "bp_79",
    "topic": "personality_theories",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Projective psychological tests, such as the Rorschach Inkblot Test and Murray's Thematic Apperception Test (TAT), are grounded in the theoretical premise that:",
    "options": {
      "a": "They predict mechanical aptitude with 99% accuracy",
      "b": "They measure physiological galvanic skin conductance",
      "c": "Ambiguous stimuli force respondents to project their unconscious conflicts, motives, and personality defenses",
      "d": "Objective multiple-choice scoring eliminates all examiner bias"
    },
    "answer": "c",
    "explanation": "Projective testing assumes that when presented with unstructured, ambiguous stimuli, individuals project their own unconscious needs, anxieties, and dynamic personality structures into the material."
  },
  {
    "id": "bp_80",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Fundamental Attribution Error (FAE) describes the cognitive bias where observers:",
    "options": {
      "a": "Blame themselves entirely for group failures",
      "b": "Overestimate situational constraints and underestimate personal traits when explaining others' failures",
      "c": "Attribute their own successes to external luck",
      "d": "Overestimate internal dispositional traits and underestimate external situational influences when explaining others' behavior"
    },
    "answer": "d",
    "explanation": "The Fundamental Attribution Error (Lee Ross) is the pervasive tendency to attribute other people's actions to internal character traits rather than situational circumstances."
  },
  {
    "id": "bp_81",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Solomon Asch's classic line-judgment experiments, what percentage of naive participants conformed to the clearly erroneous consensus of the confederate majority on at least one trial?",
    "options": {
      "a": "100%",
      "b": "0%",
      "c": "Approximately 10%",
      "d": "Approximately 75%"
    },
    "answer": "d",
    "explanation": "Asch found that roughly 75% of participants conformed to the unanimous incorrect consensus at least once, highlighting the powerful influence of normative social conformity even on unambiguous tasks."
  },
  {
    "id": "bp_82",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Stanley Milgram's landmark obedience experiments at Yale, what percentage of ordinary adult participants administered the maximum, lethal 450-volt shock under the prodding of the experimenter?",
    "options": {
      "a": "95%",
      "b": "Approximately 65%",
      "c": "25%",
      "d": "Less than 1%"
    },
    "answer": "b",
    "explanation": "Despite psychiatric predictions that only 1\u20132% of sadists would proceed, 65% of Milgram's participants complied fully, delivering shocks up to the maximum 450-volt mark when ordered by authority."
  },
  {
    "id": "bp_83",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Leon Festinger's Cognitive Dissonance Theory posits that psychological discomfort arises when:",
    "options": {
      "a": "Social identity is validated by a peer group",
      "b": "There is an inconsistency between two cognitions, or between one's attitudes and one's behavior",
      "c": "A supervisor assigns too many simultaneous deadlines",
      "d": "A person experiences physiological exhaustion"
    },
    "answer": "b",
    "explanation": "Cognitive dissonance is the uncomfortable psychological tension that occurs when a person holds two contradictory beliefs, or acts in a way that violates their personal values, motivating attitude change."
  },
  {
    "id": "bp_84",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Bystander Effect, documented by Darley and Latan\u00e9 following the Kitty Genovese murder, occurs primarily due to which social psychological mechanism?",
    "options": {
      "a": "Pluralistic Ignorance and Diffusion of Responsibility",
      "b": "Group Polarization",
      "c": "Social Loafing exclusively",
      "d": "Cognitive Dissonance"
    },
    "answer": "a",
    "explanation": "The Bystander Effect reveals that as the number of witnesses increases, each individual's felt obligation to intervene drops (Diffusion of Responsibility), compounded by looking to others for cues (Pluralistic Ignorance)."
  },
  {
    "id": "bp_85",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Irving Janis defined 'Groupthink' as a deterioration of mental efficiency and moral judgment resulting from:",
    "options": {
      "a": "Diverse multidisciplinary team membership",
      "b": "An excessive drive for group consensus, cohesiveness, and conformity that suppresses dissenting viewpoints",
      "c": "Random brainstorming with external evaluators",
      "d": "Deep intellectual conflict and lack of leadership"
    },
    "answer": "b",
    "explanation": "Groupthink occurs in highly cohesive in-groups when the desire for harmony and unanimity overrides realistic appraisal of alternative courses of action, creating illusions of invulnerability and self-censorship."
  },
  {
    "id": "bp_86",
    "topic": "social_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Social Loafing refers to the tendency for individuals to exert less physical or mental effort when working collectively in a group than when working alone, which occurs most when:",
    "options": {
      "a": "The task is personally fascinating and urgent",
      "b": "The group consists of only two close friends",
      "c": "Individual contributions are publicly identifiable and rewarded",
      "d": "Individual contributions are pooled and cannot be evaluated separately"
    },
    "answer": "d",
    "explanation": "Social loafing increases when individual output is anonymous or unidentifiable within group aggregation, reducing individual accountability."
  },
  {
    "id": "bp_87",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In the DSM-5 and ICD-11, what is the core diagnostic distinction between 'Bipolar I Disorder' and 'Bipolar II Disorder'?",
    "options": {
      "a": "Bipolar II requires childhood onset before age 7",
      "b": "Bipolar I involves only depression; Bipolar II involves only mania",
      "c": "Bipolar I is treated exclusively with psychotherapy; Bipolar II with neurosurgery",
      "d": "Bipolar I requires at least one full Manic episode; Bipolar II requires Hypomanic episodes and Major Depressive episodes without a full manic episode"
    },
    "answer": "d",
    "explanation": "Bipolar I diagnosis hinges on the occurrence of at least one full Manic episode (severe impairment, psychosis, or hospitalization). Bipolar II involves hypomania (less severe) coupled with major depression."
  },
  {
    "id": "bp_88",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "Which cognitive distortion, prominent in Aaron Beck's Cognitive Triad of Depression, involves viewing an isolated negative event as a never-ending pattern of defeat?",
    "options": {
      "a": "Emotional Reasoning",
      "b": "Personalization",
      "c": "Overgeneralization",
      "d": "Catastrophizing"
    },
    "answer": "c",
    "explanation": "Beck identified automatic negative cognitive distortions in depression. Overgeneralization occurs when a single setback is interpreted as a universal, permanent rule across all aspects of life."
  },
  {
    "id": "bp_89",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "In Schizophrenia, which of the following is classified as a 'Negative Symptom' reflecting an absence or reduction of normal emotional and behavioral functioning?",
    "options": {
      "a": "Auditory Hallucinations",
      "b": "Disorganized Bizarre Speech",
      "c": "Delusions of Persecution",
      "d": "Avolition and Flat Affect"
    },
    "answer": "d",
    "explanation": "Positive symptoms represent excess/distortions of normal functioning (hallucinations, delusions). Negative symptoms represent deficits or losses (avolition, flat affect, alogia, anhedonia)."
  },
  {
    "id": "bp_90",
    "topic": "abnormal_psychology",
    "unit": "Basic Psychology",
    "part": "A",
    "question": "The Diathesis-Stress Model posits that psychological disorders manifest when:",
    "options": {
      "a": "Environmental stress occurs in the complete absence of biological vulnerability",
      "b": "An underlying biological, psychological, or genetic vulnerability (diathesis) is activated by environmental psychosocial stressors",
      "c": "Parenting style is exclusively permissive",
      "d": "A person has an elevated IQ score"
    },
    "answer": "b",
    "explanation": "The Diathesis-Stress framework explains psychopathology as an interaction between an inherent predisposition (diathesis, e.g., genetic risk) and acute or chronic environmental stress."
  },
  {
    "id": "res_16",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is the defining methodological hallmark of a true experimental research design that allows researchers to infer cause-and-effect relationships?",
    "options": {
      "a": "Calculation of a Pearson product-moment correlation coefficient above 0.80",
      "b": "Longitudinal panel tracking across at least five years",
      "c": "Naturalistic observation in a real-world workplace setting",
      "d": "Active manipulation of the Independent Variable and Random Assignment of participants to conditions"
    },
    "answer": "d",
    "explanation": "Causal inference requires two essential criteria: (1) deliberate manipulation of the Independent Variable while controlling extraneous factors, and (2) random assignment to eliminate preexisting group differences."
  },
  {
    "id": "res_17",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a Quasi-Experimental design, why can researchers NOT make definitive causal claims about the effect of the intervention?",
    "options": {
      "a": "Because quasi-experiments never use control groups",
      "b": "Because participants cannot be randomly assigned to groups, introducing potential confounding selection biases",
      "c": "Because no statistical software can analyze quasi-experimental data",
      "d": "Because the sample size must always be less than 20"
    },
    "answer": "b",
    "explanation": "Quasi-experiments study pre-existing, non-randomized groups (e.g., comparing two branch offices). The lack of random assignment means observed differences could stem from baseline demographic or cultural selection confounds."
  },
  {
    "id": "res_18",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher tracks the same cohort of 100 graduate management trainees at ages 22, 27, 32, and 37 to assess long-term changes in leadership effectiveness. This is a:",
    "options": {
      "a": "Cross-Sectional design",
      "b": "Retrospective case-control design",
      "c": "Longitudinal design",
      "d": "Sequential time-lag design"
    },
    "answer": "c",
    "explanation": "A longitudinal study tracks the exact same sample of individuals repeatedly across extended developmental time intervals, holding cohort effects constant."
  },
  {
    "id": "res_19",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is a primary methodological vulnerability of Cross-Sectional developmental studies that compare multiple age cohorts at a single point in time?",
    "options": {
      "a": "High financial cost compared to longitudinal designs",
      "b": "Extremely high participant attrition over time",
      "c": "Cohort Effects (confounding historical and cultural differences between generations)",
      "d": "Inability to use standardized questionnaires"
    },
    "answer": "c",
    "explanation": "Cross-sectional designs risk confusing true developmental changes with Cohort Effects (differences in generational experiences, such as technological upbringing or educational eras)."
  },
  {
    "id": "res_20",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a Double-Blind experimental design, who is kept unaware of which participants receive the active treatment versus the control/placebo?",
    "options": {
      "a": "Only the participants",
      "b": "Only the Institutional Review Board",
      "c": "The journal peer reviewers",
      "d": "Both the participants and the experimenters/data collectors interacting with them"
    },
    "answer": "d",
    "explanation": "Double-blind controls prevent both participant expectancy effects (placebo effect) and experimenter demand characteristics or observational bias by keeping both parties blind to condition assignment."
  },
  {
    "id": "res_21",
    "topic": "research_designs",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A qualitative researcher immerses herself in a software engineering startup for six months, observing team meetings and daily social interactions to understand organizational subcultures. What research methodology is being employed?",
    "options": {
      "a": "Psychometric Meta-analysis",
      "b": "Solomon Four-Group Design",
      "c": "Ethnography",
      "d": "Factor Analysis"
    },
    "answer": "c",
    "explanation": "Ethnography involves in-depth, immersive fieldwork and participant observation within a natural social setting to discern the shared cultural norms, rituals, and practices of a group."
  },
  {
    "id": "res_22",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a study investigating whether 'workplace mindfulness training reduces burnout levels among nurses', what is the Independent Variable (IV) and Dependent Variable (DV)?",
    "options": {
      "a": "IV: Burnout levels; DV: Mindfulness training",
      "b": "IV: Nursing salary; DV: Shift duration",
      "c": "IV: Hospital size; DV: Years of experience",
      "d": "IV: Workplace mindfulness training; DV: Burnout levels"
    },
    "answer": "d",
    "explanation": "The Independent Variable is the presumed cause or intervention manipulated by the researcher (mindfulness training). The Dependent Variable is the measured outcome presumed to change in response (burnout levels)."
  },
  {
    "id": "res_23",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is an 'Extraneous Variable' that inadvertently correlates with both the independent and dependent variables, thereby clouding the true causal relationship?",
    "options": {
      "a": "Criterion Variable",
      "b": "Confounding Variable",
      "c": "Moderating Variable",
      "d": "Mediating Variable"
    },
    "answer": "b",
    "explanation": "A Confounder is an extraneous variable that varies systematically along with the independent variable, offering a rival explanation for observed changes in the dependent variable."
  },
  {
    "id": "res_24",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In mediation analysis, what role does a 'Mediating Variable' (M) play between an Independent Variable (X) and a Dependent Variable (Y)?",
    "options": {
      "a": "It replaces the need for random assignment",
      "b": "It explains the underlying psychological mechanism or internal process through which X influences Y",
      "c": "It reverses the direction of causality",
      "d": "It dictates the demographic boundary conditions under which the effect occurs"
    },
    "answer": "b",
    "explanation": "A mediator clarifies HOW or WHY a relationship exists (the intermediate causal mechanism). For instance, Goal Setting (X) leads to High Effort (M), which in turn produces High Performance (Y)."
  },
  {
    "id": "res_25",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In moderation analysis, what does a 'Moderating Variable' (Z) do to the relationship between X and Y?",
    "options": {
      "a": "It eliminates statistical error",
      "b": "It transmits the causal effect entirely",
      "c": "It acts as the primary dependent outcome measure",
      "d": "It changes the strength, magnitude, or direction of the relationship between X and Y (interaction effect)"
    },
    "answer": "d",
    "explanation": "A moderator answers WHEN or FOR WHOM a relationship holds. For example, Stress (X) impairs Performance (Y), but this relationship is moderated by Social Support (Z) such that the negative impact is buffered for those with high support."
  },
  {
    "id": "res_26",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is an 'Operational Definition' in psychological research?",
    "options": {
      "a": "A precise, transparent statement of the exact procedures, tools, and observable operations used to measure or manipulate a construct",
      "b": "The legal contract signed by research assistants",
      "c": "The philosophical debate on the nature of the mind",
      "d": "A dictionary definition found in an encyclopedia"
    },
    "answer": "a",
    "explanation": "An operational definition translates abstract constructs (like 'workplace stress') into measurable, replicable empirical terms (e.g., 'score on the Perceived Stress Scale-10' or 'salivary cortisol in nmol/L')."
  },
  {
    "id": "res_27",
    "topic": "variables_hypotheses",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher states: 'There will be a significant positive difference in employee engagement scores between employees with flexible work hours compared to employees with fixed hours.' This is an example of a:",
    "options": {
      "a": "Post-hoc Rationalization",
      "b": "Directional Alternative Hypothesis (H1)",
      "c": "Non-directional Alternative Hypothesis",
      "d": "Null Hypothesis (H0)"
    },
    "answer": "b",
    "explanation": "A directional hypothesis specifies not only that a difference exists, but also the expected direction (e.g., positive difference / higher scores), requiring a one-tailed statistical evaluation."
  },
  {
    "id": "res_28",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "Which probability sampling method ensures that specific demographic subgroups (strata) of interest in the population are represented in the sample in exact proportion to their population numbers?",
    "options": {
      "a": "Quota Sampling without randomization",
      "b": "Snowball Sampling",
      "c": "Convenience Sampling",
      "d": "Stratified Random Sampling"
    },
    "answer": "d",
    "explanation": "In proportionate stratified random sampling, the population is divided into mutually exclusive strata (e.g., gender, rank), and random samples are drawn within each stratum proportional to population sizes."
  },
  {
    "id": "res_29",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "An organizational psychologist studying rare cases of corporate whistleblowers asks an initial whistleblower to introduce her to other whistleblowers. This sampling technique is known as:",
    "options": {
      "a": "Simple Random Sampling",
      "b": "Systematic Sampling",
      "c": "Snowball (Chain-Referral) Sampling",
      "d": "Cluster Sampling"
    },
    "answer": "c",
    "explanation": "Snowball sampling is a non-probability technique invaluable for hidden, marginalized, or hard-to-reach populations, where existing research subjects recruit future subjects from their acquaintances."
  },
  {
    "id": "res_30",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A researcher selecting every 10th employee from an alphabetical company roster containing 1,000 employees is utilizing:",
    "options": {
      "a": "Systematic Sampling",
      "b": "Purposive Sampling",
      "c": "Cluster Sampling",
      "d": "Accidental Sampling"
    },
    "answer": "a",
    "explanation": "Systematic sampling selects elements from an ordered sampling frame at a regular interval (k = N / n), with a random starting point between 1 and k."
  },
  {
    "id": "res_31",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is the primary operational distinction between 'Cluster Sampling' and 'Stratified Sampling'?",
    "options": {
      "a": "Stratified sampling is non-probability; cluster sampling is probability",
      "b": "In stratified sampling, sample members are drawn from ALL strata; in cluster sampling, entire clusters are randomly sampled, and some clusters are omitted entirely",
      "c": "Cluster sampling cannot be used in corporate research",
      "d": "In cluster sampling, random individuals are drawn from all groups; in stratified sampling, entire groups are selected"
    },
    "answer": "b",
    "explanation": "Stratified sampling draws individuals from EVERY stratum (heterogeneity between strata). Cluster sampling randomly selects whole natural groupings (clusters, e.g., 5 of 50 school branches) and studies all members in them."
  },
  {
    "id": "res_32",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "When an experimenter recruits participants by posting a survey link on their personal LinkedIn page, what sampling bias is primarily introduced?",
    "options": {
      "a": "Attrition Bias",
      "b": "Berkson's Bias",
      "c": "Volunteer / Self-Selection Bias (Convenience Sampling)",
      "d": "Hawthorne Effect"
    },
    "answer": "c",
    "explanation": "Convenience/self-selection sampling introduces volunteer bias; individuals who choose to click and respond systematically differ in motivation, personality, and socioeconomic status from the general population."
  },
  {
    "id": "res_33",
    "topic": "sampling_techniques",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "According to the Central Limit Theorem (CLT), what happens to the sampling distribution of the sample mean as the sample size (n) becomes sufficiently large (usually n >= 30)?",
    "options": {
      "a": "It approaches a standard normal bell curve regardless of the underlying population distribution",
      "b": "Its standard error increases proportionally",
      "c": "It becomes skewed to match the raw population skew",
      "d": "Its variance approaches infinity"
    },
    "answer": "a",
    "explanation": "The Central Limit Theorem proves that for sufficiently large samples (n >= 30), the sampling distribution of means approximates normality with mean equal to population mean and standard error equal to sigma / sqrt(n)."
  },
  {
    "id": "res_34",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What psychometric statistic is commonly computed to evaluate the 'Internal Consistency Reliability' of a multi-item Likert questionnaire?",
    "options": {
      "a": "Durbin-Watson d",
      "b": "Cohen's d",
      "c": "Cronbach's Alpha (alpha)",
      "d": "Chi-Square statistic"
    },
    "answer": "c",
    "explanation": "Cronbach's alpha assesses how closely related a set of survey items are as a single unified construct; a value >= 0.70 is standardly accepted as demonstrating satisfactory internal consistency."
  },
  {
    "id": "res_35",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A psychometrician administers an emotional intelligence scale to candidates on Monday and re-administers the exact same test two weeks later, correlating the two scores. What type of reliability is being evaluated?",
    "options": {
      "a": "Split-Half Reliability",
      "b": "Parallel-Forms Reliability",
      "c": "Inter-Rater Reliability",
      "d": "Test-Retest Reliability"
    },
    "answer": "d",
    "explanation": "Test-retest reliability measures temporal stability by administering the same test to the same examinees at two distinct time points and calculating the Pearson correlation coefficient between testings."
  },
  {
    "id": "res_36",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "If a newly developed test of 'Executive Leadership' correlates strongly with an established valid measure of leadership (r = 0.82), but shows virtually zero correlation with an unrelated test of neurotic depression (r = 0.04), the new test demonstrates:",
    "options": {
      "a": "High Measurement Error",
      "b": "Predictive Validity failure",
      "c": "High Face Validity but zero Content Validity",
      "d": "High Convergent Validity and High Discriminant (Divergent) Validity"
    },
    "answer": "d",
    "explanation": "Construct validity requires both Convergent validity (correlating highly with related constructs) and Discriminant validity (not correlating with dissimilar, theoretically unrelated constructs)."
  },
  {
    "id": "res_37",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is the critical distinction between 'Content Validity' and 'Face Validity'?",
    "options": {
      "a": "Content validity systematically assesses whether test items fully sample the intended theoretical domain (judged by SMEs); face validity is merely the superficial appearance of validity to lay test-takers",
      "b": "They are identical psychometric synonyms",
      "c": "Content validity is statistical; face validity is qualitative",
      "d": "Face validity is required for licensing; content validity is not"
    },
    "answer": "a",
    "explanation": "Content validity involves rigorous expert analysis verifying comprehensive coverage of the construct universe. Face validity is merely superficial public optics (whether a test 'looks' like what it claims to measure)."
  },
  {
    "id": "res_38",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "When scores on an employee pre-hire aptitude test correlate significantly with supervisory job performance ratings collected 12 months after hiring, the test demonstrates high:",
    "options": {
      "a": "Predictive Criterion-Related Validity",
      "b": "Ecological Validity",
      "c": "Concurrent Validity",
      "d": "Internal Consistency"
    },
    "answer": "a",
    "explanation": "Predictive validity is demonstrated when test scores predict a criterion measure assessed in the future (here, job performance evaluated after 1 year)."
  },
  {
    "id": "res_39",
    "topic": "psychometrics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In Classical Test Theory (CTT), an observed score (X) is conceptualized as the sum of which two theoretical components?",
    "options": {
      "a": "X = Variance + Covariance",
      "b": "X = Mean + Standard Deviation",
      "c": "X = True Score (T) + Error Score (E)",
      "d": "X = Percentile Rank + Z-score"
    },
    "answer": "c",
    "explanation": "The fundamental axiom of Classical Test Theory states: X = T + E (Observed Score = True Score + Unsystematic Random Measurement Error)."
  },
  {
    "id": "res_40",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In hypothesis testing, a 'Type I Error' (alpha) is formally committed when a researcher:",
    "options": {
      "a": "Selects an unrepresentative sample",
      "b": "Rejects a true null hypothesis (a false positive conclusion)",
      "c": "Fails to reject a false null hypothesis",
      "d": "Calculates negative standard deviation"
    },
    "answer": "b",
    "explanation": "A Type I Error occurs when the researcher concludes there is a significant effect or difference when in reality no true effect exists (rejecting H0 when H0 is actually true; false alarm)."
  },
  {
    "id": "res_41",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What statistical test is appropriate for comparing the mean performance scores of three independent training groups (e.g., Classroom, E-Learning, and Hybrid)?",
    "options": {
      "a": "Independent Samples Student's t-test",
      "b": "Chi-Square Goodness-of-Fit Test",
      "c": "Pearson Product-Moment Correlation",
      "d": "One-Way Analysis of Variance (ANOVA)"
    },
    "answer": "d",
    "explanation": "ANOVA compares means across three or more independent groups simultaneously without inflating the family-wise Type I error rate that would occur from conducting multiple pairwise t-tests."
  },
  {
    "id": "res_42",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "In a positively skewed (right-skewed) distribution of corporate executive salaries, what is the relative positional order of the three measures of central tendency?",
    "options": {
      "a": "Mean = Median = Mode",
      "b": "Mode < Median < Mean",
      "c": "Mean < Median < Mode",
      "d": "Median < Mode < Mean"
    },
    "answer": "b",
    "explanation": "In a right-skewed distribution, extreme high values pull the Mean to the highest value, while the Mode remains at the peak of the curve on the left: Mode < Median < Mean."
  },
  {
    "id": "res_43",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "A Pearson correlation coefficient of r = -0.85 between employee job stress and job satisfaction indicates:",
    "options": {
      "a": "Stress directly causes job dissatisfaction with 85% probability",
      "b": "A computational error because correlations cannot be negative",
      "c": "A strong inverse relationship where higher stress is systematically accompanied by lower satisfaction",
      "d": "A weak, clinically negligible association"
    },
    "answer": "c",
    "explanation": "The sign indicates direction (- is inverse: as one rises, the other falls) and absolute magnitude (0.85 indicates a very strong linear association, though correlation does not establish causation)."
  },
  {
    "id": "res_44",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "The Coefficient of Determination (r^2) in linear bivariate regression represents:",
    "options": {
      "a": "The percentage of variance in the dependent variable explained by the independent variable",
      "b": "The statistical power of the test",
      "c": "The standard deviation of residuals",
      "d": "The probability of a Type II error"
    },
    "answer": "a",
    "explanation": "r^2 (r-squared) quantifies the proportion of total variance in the criterion variable (Y) that is predictable from or shared with the predictor variable (X)."
  },
  {
    "id": "res_45",
    "topic": "statistics",
    "unit": "Research Aptitude",
    "part": "A",
    "question": "What is the primary difference between parametric and non-parametric statistical tests?",
    "options": {
      "a": "Parametric tests cannot analyze continuous variables",
      "b": "Parametric tests assume the data follow a specific probability distribution (e.g. normality) and use interval/ratio scales; non-parametric tests make fewer distribution assumptions and handle nominal/ordinal data",
      "c": "Non-parametric tests require sample sizes greater than 500",
      "d": "Non-parametric tests always have higher statistical power"
    },
    "answer": "b",
    "explanation": "Parametric tests (t-test, ANOVA) require distributional assumptions (normality, homogeneity of variance) and interval/ratio data. Non-parametric tests (Mann-Whitney, Kruskal-Wallis) are distribution-free."
  },
  {
    "id": "eth_16",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is the structural distinction between the APA Ethics Code's 'General Principles' and its 'Ethical Standards'?",
    "options": {
      "a": "General Principles apply only to clinical psychologists; Standards apply only to academics",
      "b": "General Principles are legally enforceable rules; Ethical Standards are aspirational goals",
      "c": "They are completely interchangeable terms with identical legal weight",
      "d": "General Principles are aspirational goals intended to guide psychologists toward the highest ideals; Ethical Standards are mandatory, enforceable behavioral rules"
    },
    "answer": "d",
    "explanation": "The APA Ethics Code Introduction clarifies that General Principles (Principles A-E) are aspirational goals to inspire ethical excellence, whereas Ethical Standards (Sections 1-10) constitute enforceable conduct rules."
  },
  {
    "id": "eth_17",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Principle C ('Integrity') of the APA Ethics Code obligates psychologists to:",
    "options": {
      "a": "Refrain from engaging in any commercial business activities",
      "b": "Accept only cases where success is guaranteed",
      "c": "Never charge fees for initial consultations",
      "d": "Promote accuracy, honesty, and truthfulness in the science, teaching, and practice of psychology"
    },
    "answer": "d",
    "explanation": "Principle C (Integrity) mandates that psychologists do not steal, cheat, or engage in fraud, subterfuge, or intentional misrepresentation of fact in professional endeavors."
  },
  {
    "id": "eth_18",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When psychological ethics guidelines and organizational demands or employer regulations conflict, APA Standard 1.02 mandates that the psychologist must:",
    "options": {
      "a": "Clarify the nature of the conflict, make known their commitment to the Ethics Code, and take reasonable steps to resolve the conflict consistent with human rights",
      "b": "Blindly obey the corporate employer's directives without exception",
      "c": "Immediately resign and file a public lawsuit",
      "d": "Alter experimental data to please corporate executives"
    },
    "answer": "a",
    "explanation": "Standard 1.02 explicitly directs psychologists to articulate the conflict, state their commitment to the Ethics Code, and seek an ethical resolution, prohibiting any justification for human rights violations."
  },
  {
    "id": "eth_19",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 1.05 (Reporting Ethical Violations), what action is required when an informal resolution of a colleague's ethical violation is inappropriate or ineffective?",
    "options": {
      "a": "Confront the colleague in public to humiliate them",
      "b": "Publish the allegation on social media",
      "c": "Ignore the violation if it does not affect one's own income",
      "d": "Take further action appropriate to the situation, such as referral to state licensing boards or institutional ethics committees"
    },
    "answer": "d",
    "explanation": "If an apparent ethical violation has substantially harmed or is likely to harm a person, and informal resolution fails or is inappropriate, psychologists take formal reporting action while respecting confidentiality."
  },
  {
    "id": "eth_20",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Which principle prohibits psychologists from participating in, facilitating, assisting, or engaging in torture or other cruel, inhuman, or degrading punishment?",
    "options": {
      "a": "Principle A: Beneficence and Nonmaleficence",
      "b": "Principle B: Fidelity",
      "c": "Principle C: Integrity",
      "d": "Principle D: Justice"
    },
    "answer": "a",
    "explanation": "Principle A dictates: 'Do No Harm'. The APA has explicitly codified amendments prohibiting psychologists from collaborating in interrogation torture, cruel treatment, or human degradation."
  },
  {
    "id": "eth_21",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 3.01 (Unfair Discrimination), psychologists must not engage in unfair discrimination based on:",
    "options": {
      "a": "Academic GPA",
      "b": "Merit and objective performance qualifications",
      "c": "Job interview performance",
      "d": "Age, gender, gender identity, race, ethnicity, culture, national origin, religion, sexual orientation, disability, or socioeconomic status"
    },
    "answer": "d",
    "explanation": "Standard 3.01 strictly prohibits unfair discrimination across all protected demographic, cultural, and personal identity characteristics in work-related activities."
  },
  {
    "id": "eth_22",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is the ethical mandate under APA Standard 2.06 regarding 'Personal Problems and Conflicts'?",
    "options": {
      "a": "Psychologists are expected to be completely immune to personal emotional distress",
      "b": "Psychologists must refrain from initiating an activity when their personal problems will prevent them from performing work-related duties competently, and seek professional consultation",
      "c": "Personal stress justifies violating client confidentiality",
      "d": "Personal problems may be discussed in detail during therapy sessions with clients"
    },
    "answer": "b",
    "explanation": "Standard 2.06 requires psychologists to recognize when personal distress impairs their professional competence, taking appropriate corrective measures (such as limiting, suspending, or terminating duties)."
  },
  {
    "id": "eth_23",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 3.04 (Avoiding Harm), psychologists are mandated to:",
    "options": {
      "a": "Never challenge a client's dysfunctional behaviors",
      "b": "Avoid giving honest constructive feedback to employees",
      "c": "Take reasonable steps to avoid harming clients, students, research participants, and organizational clients, and to minimize harm where it is foreseeable and unavoidable",
      "d": "Guarantee 100% cure rates for all psychological interventions"
    },
    "answer": "c",
    "explanation": "Standard 3.04 establishes an affirmative obligation to take reasonable preventative steps to avoid inflicting harm and to remediate/minimize unavoidable distress."
  },
  {
    "id": "eth_24",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 3.08 (Exploitative Relationships), psychologists do not exploit persons over whom they have supervisory, evaluative, or other authority, such as:",
    "options": {
      "a": "Clients, students, supervisees, research participants, and employees",
      "b": "Professional book publishers",
      "c": "Commercial software vendors",
      "d": "Conference keynote speakers"
    },
    "answer": "a",
    "explanation": "Standard 3.08 strictly forbids exploiting individuals where power asymmetries exist (subordinates, trainees, patients, and research subjects)."
  },
  {
    "id": "eth_25",
    "topic": "apa_principles",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Regarding pro bono service, what does the APA Ethics Code recommend under Principle B?",
    "options": {
      "a": "Psychologists are encouraged to contribute a portion of their professional time for little or no financial return (aspirational commitment)",
      "b": "It is an enforceable requirement carrying mandatory loss of license if unfulfilled",
      "c": "Pro bono work is restricted only to forensic legal cases",
      "d": "Pro bono services are strictly prohibited to prevent market distortion"
    },
    "answer": "a",
    "explanation": "Principle B (Fidelity and Responsibility) aspirational guidance notes that psychologists strive to contribute a portion of their professional time for little or no compensation or personal advantage."
  },
  {
    "id": "eth_26",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "In informed consent for psychological research (APA Standard 8.02), which of the following elements is MANDATORY to disclose to participants prior to participation?",
    "options": {
      "a": "The specific directional hypotheses of the primary investigator",
      "b": "The full statistical formulas that will be used to analyze the data",
      "c": "The home addresses of all research assistants",
      "d": "The purpose of the research, expected duration, procedures, the right to decline or withdraw without penalty, and foreseeable risks or discomforts"
    },
    "answer": "d",
    "explanation": "Standard 8.02 mandates informing prospective participants of the study's purpose, duration, procedures, voluntary nature, right to withdraw without penalty, foreseeable risks, potential benefits, and limits of confidentiality."
  },
  {
    "id": "eth_27",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under what specific condition is deception justifiable in psychological research under APA Standard 8.07?",
    "options": {
      "a": "When justified by the study's significant prospective scientific or educational value, and effective alternative nondeceptive procedures are not feasible",
      "b": "Whenever deception makes data collection faster and cheaper",
      "c": "Whenever the research is conducted on corporate employees",
      "d": "Whenever financial compensation exceeds $100"
    },
    "answer": "a",
    "explanation": "Deception is ethically permissible only if justified by prospective scientific value, nondeceptive alternatives are unavailable, and it does not deceive about physical pain or severe emotional distress."
  },
  {
    "id": "eth_28",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When deception has been utilized in an experiment, when must participants be debriefed according to APA Standard 8.07(c)?",
    "options": {
      "a": "Debriefing is optional if participants seemed happy",
      "b": "Only after the research has been published in a peer-reviewed journal",
      "c": "Five years after data collection",
      "d": "As early as is feasible, preferably at the conclusion of their participation, but no later than at the conclusion of the data collection"
    },
    "answer": "d",
    "explanation": "Standard 8.07(c) mandates that psychologists explain any deception as early as feasible, ideally at the conclusion of their individual participation, but no later than the conclusion of overall data gathering."
  },
  {
    "id": "eth_29",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is the critical legal and ethical distinction between 'Consent' and 'Assent'?",
    "options": {
      "a": "Assent is legally binding; Consent is not",
      "b": "Informed Consent is given by legally competent adults or guardians; Assent is the affirmative agreement given by individuals who lack legal competence (e.g., minors)",
      "c": "Consent is verbal; Assent is written",
      "d": "Consent applies to therapy; Assent applies to teaching"
    },
    "answer": "b",
    "explanation": "Informed Consent requires legal capacity. For minors or cognitively impaired adults, researchers obtain legal proxy consent from a guardian while seeking voluntary, developmental 'assent' from the participant."
  },
  {
    "id": "eth_30",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 8.03, when is informed consent required prior to recording voices or images in psychological research?",
    "options": {
      "a": "Never, if recording is done on public streets",
      "b": "Only when participants are compensated",
      "c": "Only when the camera is visible",
      "d": "Always, EXCEPT when the research consists solely of naturalistic observations in public places and recording will not cause personal identification or harm"
    },
    "answer": "d",
    "explanation": "Standard 8.03 requires consent before recording voices/images unless the study involves purely naturalistic public observation where personal identification or harm is avoided, or involves deception where consent is obtained during debriefing."
  },
  {
    "id": "eth_31",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When conducting research with client/patient, student, or subordinate participants, what specific ethical safeguard does APA Standard 8.04 require?",
    "options": {
      "a": "Making research participation a mandatory condition for passing a course",
      "b": "Protecting them from adverse consequences of declining or withdrawing from participation",
      "c": "Allowing supervisors to view raw individual data",
      "d": "Paying them triple the standard market compensation"
    },
    "answer": "b",
    "explanation": "Standard 8.04 requires psychologists to take affirmative steps to ensure that subordinates, students, or patients face no penalty, academic reprisal, or adverse career consequences for declining or withdrawing."
  },
  {
    "id": "eth_32",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When research participation is an academic course requirement or opportunity for extra credit, what must students be provided under APA Standard 8.04(b)?",
    "options": {
      "a": "Automatic A grades",
      "b": "Immediate monetary stipends",
      "c": "The equitable choice of alternative activities that require comparable time and effort",
      "d": "Exemption from all final examinations"
    },
    "answer": "c",
    "explanation": "To prevent academic coercion, institutions requiring research participation must provide equitable, educational alternative activities requiring comparable investment of time and effort."
  },
  {
    "id": "eth_33",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "In the landmark Tuskegee Syphilis Study (1932\u20131972), what catastrophic ethical failure occurred regarding informed consent and participant welfare?",
    "options": {
      "a": "Surveys were conducted anonymously without signatures",
      "b": "African American men with syphilis were deceived about their diagnosis and deliberately denied penicillin treatment so researchers could observe the natural progression of the disease",
      "c": "The study concluded too quickly",
      "d": "Participants were overpaid"
    },
    "answer": "b",
    "explanation": "The Tuskegee Study is history's most infamous ethical breach: poor Black men were deceived, subjected to non-therapeutic spinal taps, and deliberately denied effective penicillin, leading to the Belmont Report."
  },
  {
    "id": "eth_34",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "The historic 1979 Belmont Report established which three foundational ethical principles for human subjects research in the United States and internationally?",
    "options": {
      "a": "Respect for Persons, Beneficence, and Justice",
      "b": "Anonymity, Confidentiality, and Debriefing",
      "c": "Validity, Reliability, and Generalizability",
      "d": "Efficiency, Profitability, and Speed"
    },
    "answer": "a",
    "explanation": "The Belmont Report articulated the triad of modern biomedical and behavioral research ethics: (1) Respect for Persons (autonomy and consent), (2) Beneficence (maximize benefits, minimize harms), and (3) Justice (equitable distribution of research burdens and benefits)."
  },
  {
    "id": "eth_35",
    "topic": "consent_deception",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is an Institutional Review Board (IRB) or Institutional Ethics Committee (IEC)?",
    "options": {
      "a": "A legal team defending researchers against lawsuits",
      "b": "A faculty promotion assessment board",
      "c": "An independent, formally constituted committee charged with reviewing, approving, and monitoring research involving human subjects to protect their rights and welfare",
      "d": "A committee of investors funding commercial research ventures"
    },
    "answer": "c",
    "explanation": "An IRB is an autonomous oversight body that reviews research protocols prior to commencement to verify compliance with ethical guidelines, risk-benefit balance, and informed consent mandates."
  },
  {
    "id": "eth_36",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 4.02 (Discussing the Limits of Confidentiality), when must a psychologist discuss confidentiality and its legal limits with clients or organizational stakeholders?",
    "options": {
      "a": "Never, because confidentiality is unconditional in all scenarios",
      "b": "Only when subpoenaed by a court",
      "c": "At the outset of the relationship and thereafter as new circumstances may warrant",
      "d": "Only upon final termination of services"
    },
    "answer": "c",
    "explanation": "Psychologists are ethically required to discuss the relevant limits of confidentiality and foreseeable uses of information at the outset of the working relationship."
  },
  {
    "id": "eth_37",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under which of the following circumstances is a psychologist legally and ethically MANDATED or PERMITTED to breach confidentiality without client consent?",
    "options": {
      "a": "Mandated reporting of suspected child abuse, elder abuse, or clear and imminent danger of bodily harm to self or an identifiable third party",
      "b": "When a client admits to having had an extramarital affair five years ago",
      "c": "When a credit card payment is delayed by 3 business days",
      "d": "When a client's employer asks for an informal update on the employee's personal life"
    },
    "answer": "a",
    "explanation": "Confidentiality is not absolute. Statutes mandate breaching confidentiality to protect vulnerable populations (child/elder abuse) or when there is an imminent threat of violence (Tarasoff duty to protect)."
  },
  {
    "id": "eth_38",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "An organizational psychologist conducts an employee morale assessment for a corporation. The CEO demands to see the raw survey responses linked to individual employee names. What is the psychologist's ethical obligation?",
    "options": {
      "a": "Sell the employee identities to external recruiters",
      "b": "Immediately comply with the CEO since the corporation pays the consulting fees",
      "c": "Refuse to disclose identifiable individual responses, upholding the promised confidentiality of respondents and providing only aggregated, de-identified findings",
      "d": "Fire the employees who expressed negative morale"
    },
    "answer": "c",
    "explanation": "Standard 4.01 requires psychologists to protect confidential information. Breaching employee trust by releasing identifiable survey responses to management violates confidentiality commitments and ethical codes."
  },
  {
    "id": "eth_39",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 9.01 (Bases for Assessments), psychologists base their opinions, recommendations, and diagnostic statements on:",
    "options": {
      "a": "Casual hearsay from workplace coworkers",
      "b": "Horoscope readings and astrology charts",
      "c": "Information and techniques sufficient to substantiate their findings, including direct individual examinations when appropriate",
      "d": "Unverified social media posts"
    },
    "answer": "c",
    "explanation": "Assessments and evaluative recommendations must be grounded in reliable, psychometrically substantiated data and direct evaluation adequate to support the specific conclusions drawn."
  },
  {
    "id": "eth_40",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is 'Test Security' under APA Standard 9.11, and why must psychological test materials (manuals, instruments, scoring keys) be protected from public dissemination?",
    "options": {
      "a": "To artificially inflate test prices for publishers",
      "b": "To preserve the psychometric validity, integrity, and future diagnostic utility of the assessment instruments",
      "c": "Test security is no longer recognized under modern open-access rules",
      "d": "To prevent clients from learning psychological terms"
    },
    "answer": "b",
    "explanation": "Publishing actual test items and scoring keys destroys the validity of psychological tests, as future examinees could memorize answers, invalidating standardization."
  },
  {
    "id": "eth_41",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 10.05, sexual intimacies with current therapy clients are:",
    "options": {
      "a": "Allowed after six months of successful therapy",
      "b": "Permissible if disclosed to the licensing board",
      "c": "Strictly and absolutely prohibited under all circumstances",
      "d": "Permissible if both parties sign a written consent form"
    },
    "answer": "c",
    "explanation": "APA Standard 10.05 establishes an unequivocal, non-negotiable prohibition: 'Psychologists do not engage in sexual intimacies with current therapy clients/patients.'"
  },
  {
    "id": "eth_42",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Regarding former clients, APA Standard 10.08 dictates that sexual intimacies are prohibited for at least how many years following the termination of therapy, and remain impermissible except in the most unusual circumstances?",
    "options": {
      "a": "10 years",
      "b": "6 months",
      "c": "No restriction exists after termination",
      "d": "At least 2 years"
    },
    "answer": "d",
    "explanation": "Standard 10.08 prohibits sexual intimacies with former clients for at least two years following termination, and even then, bears the heavy burden of demonstrating no exploitation occurred."
  },
  {
    "id": "eth_43",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "Under APA Standard 8.14 (Sharing Research Data for Verification), after research results are published, psychologists must:",
    "options": {
      "a": "Refuse to share data with competing universities",
      "b": "Charge a licensing fee of $10,000 to anyone requesting data",
      "c": "Make their data available to other competent professionals seeking to verify substantive claims through reanalysis, provided confidentiality is protected",
      "d": "Immediately shred all raw data files to maintain secrecy"
    },
    "answer": "c",
    "explanation": "Scientific integrity mandates data sharing for verification; researchers must make data available to qualified peers for reanalysis to verify findings, provided participant confidentiality is safeguarded."
  },
  {
    "id": "eth_44",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "What is 'Plagiarism' under APA Standard 8.11?",
    "options": {
      "a": "Co-authoring a paper with an international colleague",
      "b": "Citing too many historical references",
      "c": "Presenting portions of another author's work, ideas, or words as one's own, even if the other work is cited occasionally",
      "d": "Publishing research in a foreign language"
    },
    "answer": "c",
    "explanation": "Plagiarism is the unethical misappropriation of intellectual work, ideas, or verbatim text without appropriate scholarly attribution and quotation."
  },
  {
    "id": "eth_45",
    "topic": "confidentiality_integrity",
    "unit": "Ethical Concerns",
    "part": "A",
    "question": "When psychologists provide services, assessments, or therapy through digital telecommunication technologies (Telepsychology), what ethical standard applies?",
    "options": {
      "a": "Ethical standards are waived for online consultations",
      "b": "Psychologists are held to the exact same ethical standards of competence, informed consent, confidentiality, and data security as in in-person settings",
      "c": "Informed consent is not required over video calls",
      "d": "Telepsychology is prohibited across all countries"
    },
    "answer": "b",
    "explanation": "The APA Guidelines for the Practice of Telepsychology affirm that digital service delivery must adhere to identical rigorous ethical standards regarding competence, client privacy, encrypted data security, and emergency management."
  },
  {
    "id": "apt_16",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "A training cohort of 25 employees has an average post-test score of 72. Another cohort of 15 employees has an average score of 80. What is the combined weighted average score of all 40 employees?",
    "options": {
      "a": "74",
      "b": "77",
      "c": "75",
      "d": "76"
    },
    "answer": "c",
    "explanation": "Weighted sum = (25 * 72) + (15 * 80) = 1800 + 1200 = 3000. Combined average = 3000 / 40 = 75."
  },
  {
    "id": "apt_17",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "The price of an organizational psychometric testing software license was increased by 20% and then discounted by 10% during a corporate promotion. What was the net percentage change in the license price?",
    "options": {
      "a": "+10%",
      "b": "+8%",
      "c": "+12%",
      "d": "-2%"
    },
    "answer": "b",
    "explanation": "Net multiplier = 1.20 * 0.90 = 1.08. An index of 1.08 represents an 8% net increase."
  },
  {
    "id": "apt_18",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "A team of 4 HR recruiters can complete 120 candidate background checks in 6 days. How many recruiters working at the same speed are required to complete 180 checks in 4 days?",
    "options": {
      "a": "8 recruiters",
      "b": "9 recruiters",
      "c": "6 recruiters",
      "d": "12 recruiters"
    },
    "answer": "b",
    "explanation": "Rate per recruiter-day = 120 / (4 * 6) = 5 checks/recruiter-day. For 180 checks in 4 days: Total checks needed per day = 180 / 4 = 45. Recruiters needed = 45 / 5 = 9 recruiters."
  },
  {
    "id": "apt_19",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "An employee's monthly salary of Rs. 60,000 is distributed into Living Expenses, Savings, and Professional Development in the ratio 5 : 3 : 2. How much does the employee allocate to Savings and Professional Development combined?",
    "options": {
      "a": "Rs. 40,000",
      "b": "Rs. 24,000",
      "c": "Rs. 30,000",
      "d": "Rs. 36,000"
    },
    "answer": "c",
    "explanation": "Total ratio parts = 5 + 3 + 2 = 10 parts. 1 part = 60,000 / 10 = Rs. 6,000. Combined savings + professional development = 3 + 2 = 5 parts = 5 * 6,000 = Rs. 30,000 (which is exactly 50% of 60,000)."
  },
  {
    "id": "apt_20",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "In a department of 80 employees, 65% are certified in agile project management. How many employees are NOT certified?",
    "options": {
      "a": "32",
      "b": "24",
      "c": "28",
      "d": "35"
    },
    "answer": "c",
    "explanation": "Non-certified percentage = 100% - 65% = 35%. Non-certified headcount = 0.35 * 80 = 28 employees."
  },
  {
    "id": "apt_21",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Two candidates, X and Y, are being interviewed for an HR specialist vacancy. The probability of candidate X being selected is 1/4, and the probability of candidate Y being selected is 1/5. Assuming decisions are independent, what is the probability that NEITHER candidate is selected?",
    "options": {
      "a": "3/5",
      "b": "9/20",
      "c": "1/20",
      "d": "7/20"
    },
    "answer": "a",
    "explanation": "P(X not selected) = 1 - 1/4 = 3/4. P(Y not selected) = 1 - 1/5 = 4/5. P(Neither selected) = (3/4) * (4/5) = 12/20 = 3/5 (or 0.60)."
  },
  {
    "id": "apt_22",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "A recruiter travels 120 km to an assessment center at an average speed of 60 km/h and returns along the same route at 40 km/h. What is the recruiter's average speed for the entire round trip?",
    "options": {
      "a": "48 km/h",
      "b": "52 km/h",
      "c": "45 km/h",
      "d": "50 km/h"
    },
    "answer": "a",
    "explanation": "Average speed for equal distances = Harmonic Mean = (2 * v1 * v2) / (v1 + v2) = (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48 km/h."
  },
  {
    "id": "apt_23",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "If the compound interest on a corporate training investment fund of Rs. 10,000 for 2 years compounded annually is Rs. 2,100, what is the annual interest rate?",
    "options": {
      "a": "12%",
      "b": "10%",
      "c": "11%",
      "d": "9%"
    },
    "answer": "b",
    "explanation": "Amount A = P * (1 + r)^2. 12,100 = 10,000 * (1 + r)^2 -> 1.21 = (1 + r)^2 -> 1 + r = 1.1 -> r = 0.10 = 10%."
  },
  {
    "id": "apt_24",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "The variance of a set of 5 test scores is 16. What is the standard deviation?",
    "options": {
      "a": "4",
      "b": "8",
      "c": "256",
      "d": "2"
    },
    "answer": "a",
    "explanation": "Standard deviation is the positive square root of the variance: SD = sqrt(16) = 4."
  },
  {
    "id": "apt_25",
    "topic": "quantitative",
    "unit": "General Aptitude",
    "part": "A",
    "question": "In a survey of 200 corporate employees, 120 prefer hybrid work, 80 prefer flexible hours, and 40 prefer both. How many employees prefer NEITHER option?",
    "options": {
      "a": "20",
      "b": "50",
      "c": "30",
      "d": "40"
    },
    "answer": "d",
    "explanation": "By Principle of Inclusion-Exclusion: n(A or B) = n(A) + n(B) - n(A and B) = 120 + 80 - 40 = 160. Neither = Total - 160 = 200 - 160 = 40."
  },
  {
    "id": "apt_26",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Statements: (1) All team leads are mentors. (2) No mentors are unethical. Conclusion I: No team leads are unethical. Conclusion II: Some unethical persons are team leads. Which follows?",
    "options": {
      "a": "Neither conclusion follows",
      "b": "Only Conclusion II follows",
      "c": "Only Conclusion I follows",
      "d": "Both conclusions follow"
    },
    "answer": "c",
    "explanation": "Since all team leads are a subset of mentors, and the set of mentors has zero overlap with unethical persons, it follows with deductive certainty that no team leads are unethical (Conclusion I)."
  },
  {
    "id": "apt_27",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Look at this sequence: 3, 7, 15, 31, 63, ___. What number should come next?",
    "options": {
      "a": "95",
      "b": "128",
      "c": "127",
      "d": "111"
    },
    "answer": "c",
    "explanation": "Pattern: Each number is multiplied by 2 and then add 1 (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1 = 127). Alternatively, difference doubles: +4, +8, +16, +32, +64 -> 63 + 64 = 127."
  },
  {
    "id": "apt_28",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "In a certain code language, 'LEADER' is written as 'MFBEFS'. How is 'MENTOR' written in that same code?",
    "options": {
      "a": "NFOUPQ",
      "b": "NFOUPS",
      "c": "MFOUPS",
      "d": "NEOUPS"
    },
    "answer": "b",
    "explanation": "Each letter is shifted forward by 1 in the English alphabet: M->N, E->F, N->O, T->U, O->P, R->S -> NFOUPS."
  },
  {
    "id": "apt_29",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Pointing to a photograph of an executive, Maya said, 'Her mother's only son is my father.' How is Maya related to the executive in the photograph?",
    "options": {
      "a": "Sister",
      "b": "Mother",
      "c": "Daughter",
      "d": "Niece"
    },
    "answer": "d",
    "explanation": "'Her mother's only son' is the executive's brother. Maya's father is that brother. Therefore, Maya is the daughter of the executive's brother, making Maya the executive's niece."
  },
  {
    "id": "apt_30",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "An HR consultant walks 20 meters North, turns right and walks 30 meters, turns right again and walks 20 meters, and finally turns left and walks 15 meters. In which direction and how far is she from her starting point?",
    "options": {
      "a": "25 meters South",
      "b": "45 meters East",
      "c": "35 meters East",
      "d": "50 meters North-East"
    },
    "answer": "b",
    "explanation": "North 20m and subsequent South 20m cancel out to 0 in the North-South axis. In the East-West axis: East 30m + East 15m = 45 meters East."
  },
  {
    "id": "apt_31",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Statement: 'The company should establish an employee grievance redressal cell to handle interpersonal disputes.' Assumption I: Employees face interpersonal conflicts in the organization. Assumption II: The redressal cell will help resolve these conflicts. Which assumption(s) is/are implicit?",
    "options": {
      "a": "Neither Assumption is implicit",
      "b": "Only Assumption I is implicit",
      "c": "Only Assumption II is implicit",
      "d": "Both Assumption I and II are implicit"
    },
    "answer": "d",
    "explanation": "Recommending an institutional cell assumes both that the problem exists (disputes occur) and that the proposed mechanism has the capability to remediate it."
  },
  {
    "id": "apt_32",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Six executives (A, B, C, D, E, F) sit around a circular conference table facing the center. A sits opposite B. C sits between A and D. E sits between B and F. If D sits to the immediate left of A, who sits to the immediate right of B?",
    "options": {
      "a": "C",
      "b": "F",
      "c": "E",
      "d": "D"
    },
    "answer": "c",
    "explanation": "Arrange clockwise: A is at 12 o'clock, B at 6. D is left of A (10 o'clock), C is between A and D (11 o'clock). Opposite D is F (4 o'clock). Between B and F is E (5 o'clock). Facing center, immediate right of B (at 6 o'clock) is position 5 o'clock, which is E."
  },
  {
    "id": "apt_33",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Find the odd one out among the following leadership assessment categories: (A) Emotional Stability, (B) Extraversion, (C) Conscientiousness, (D) Phrenology.",
    "options": {
      "a": "Conscientiousness",
      "b": "Emotional Stability",
      "c": "Extraversion",
      "d": "Phrenology"
    },
    "answer": "d",
    "explanation": "Emotional Stability, Extraversion, and Conscientiousness are valid empirical dimensions of the Big Five personality framework, whereas Phrenology is an obsolete 19th-century pseudoscience assessing skull bumps."
  },
  {
    "id": "apt_34",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Statement: 'Should psychometric personality testing be made mandatory for all campus recruitment drives?' Argument I: 'Yes, it provides standardized, objective insights into candidate behavioral fit.' Argument II: 'No, personality tests can be faked and may disadvantage culturally diverse candidates.' Which argument is strong?",
    "options": {
      "a": "Both Argument I and II are strong",
      "b": "Only Argument II is strong",
      "c": "Only Argument I is strong",
      "d": "Neither Argument is strong"
    },
    "answer": "a",
    "explanation": "Both arguments represent legitimate, empirical perspectives in industrial/organizational psychology: psychometrics offers standardized job matching (I), while concerns regarding faking and adverse impact on diverse candidates are well-documented (II)."
  },
  {
    "id": "apt_35",
    "topic": "logical_reasoning",
    "unit": "General Aptitude",
    "part": "A",
    "question": "If 'P + Q' means P is the mother of Q, 'P - Q' means P is the brother of Q, and 'P * Q' means P is the father of Q, what does 'A * B - C + D' mean?",
    "options": {
      "a": "A is the grandfather of D",
      "b": "A is the brother of D",
      "c": "A is the father of D",
      "d": "D is the uncle of A"
    },
    "answer": "a",
    "explanation": "A * B: A is father of B. B - C: B is brother of C (so A is also father of C). C + D: C is mother of D. Since C is the mother of D and A is the father of C, A is the maternal grandfather of D."
  },
  {
    "id": "apt_36",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Choose the word most nearly SYNONYMOUS with 'AMELIORATE':",
    "options": {
      "a": "Stagnate",
      "b": "Dilute",
      "c": "Aggravate",
      "d": "Improve"
    },
    "answer": "d",
    "explanation": "'Ameliorate' means to make something bad or unsatisfactory better; to improve or enhance."
  },
  {
    "id": "apt_37",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Complete the sentence: 'The HR manager's ________ remarks during the crisis helped soothe employee anxieties and prevent mass panic.'",
    "options": {
      "a": "conciliatory",
      "b": "bellicose",
      "c": "derogatory",
      "d": "inflammatory"
    },
    "answer": "a",
    "explanation": "'Conciliatory' means intended or likely to placate, soothe, or pacify tensions."
  },
  {
    "id": "apt_38",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Identify the part of the sentence containing a grammatical error: '(A) The committee has / (B) submitted their recommendations / (C) regarding the revised / (D) employee handbook.'",
    "options": {
      "a": "Part C",
      "b": "Part B",
      "c": "Part A",
      "d": "Part D"
    },
    "answer": "b",
    "explanation": "In standard formal English, 'The committee' is treated as a collective singular noun with the singular verb 'has', so the possessive pronoun in Part B should be 'its recommendations', not 'their'."
  },
  {
    "id": "apt_39",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Complete the analogy based on relationships:\nHypothesis : Empirical :: Premise : ________",
    "options": {
      "a": "Deductive",
      "b": "Emotional",
      "c": "Anecdotal",
      "d": "Spurious"
    },
    "answer": "a",
    "explanation": "A hypothesis is the foundation of empirical scientific inquiry, just as a premise is the foundational starting point of deductive logical argumentation."
  },
  {
    "id": "apt_40",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Choose the word most nearly OPPOSITE in meaning to 'TACIT':",
    "options": {
      "a": "Explicit",
      "b": "Latent",
      "c": "Implied",
      "d": "Unspoken"
    },
    "answer": "a",
    "explanation": "'Tacit' means understood or implied without being stated directly. Its direct antonym is 'Explicit' (stated clearly and in detail, leaving no room for confusion)."
  },
  {
    "id": "apt_41",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Rearrange the scrambled phrases into a coherent sentence: (P) of employees (Q) enhances job satisfaction (R) empowering participation (S) in strategic decisions",
    "options": {
      "a": "S-R-P-Q",
      "b": "R-P-S-Q",
      "c": "P-Q-R-S",
      "d": "Q-P-R-S"
    },
    "answer": "b",
    "explanation": "'Empowering participation (R) of employees (P) in strategic decisions (S) enhances job satisfaction (Q).' (R-P-S-Q) forms a grammatically sound subject-verb-object sentence."
  },
  {
    "id": "apt_42",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "What does the idiomatic corporate expression 'to play devil's advocate' mean?",
    "options": {
      "a": "To deliberately support an immoral or illegal workplace practice",
      "b": "To sabotage competitor negotiations",
      "c": "To file a formal harassment complaint against leadership",
      "d": "To argue against an idea or consensus solely for the purpose of testing the strength of its logic and avoiding groupthink"
    },
    "answer": "d",
    "explanation": "Playing devil's advocate involves intentionally taking an opposing view in discussions to examine the validity of arguments and uncover potential weaknesses."
  },
  {
    "id": "apt_43",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Select the correctly spelled psychological term:",
    "options": {
      "a": "Decensitization",
      "b": "Desensitisation",
      "c": "Desensitization",
      "d": "Both a and b are acceptable British and American standard spellings"
    },
    "answer": "d",
    "explanation": "Both 'Desensitization' (American standard) and 'Desensitisation' (British/Commonwealth standard) are correct orthographic variants."
  },
  {
    "id": "apt_44",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Read the sentence: 'Despite being praised for her meticulous planning, her obstinate refusal to accept peer feedback alienated her coworkers.' What does 'obstinate' mean in this context?",
    "options": {
      "a": "Highly enthusiastic",
      "b": "Timid and compliant",
      "c": "Careless and hurried",
      "d": "Stubbornly adhering to an opinion or course of action"
    },
    "answer": "d",
    "explanation": "'Obstinate' means unyielding, stubbornly refusing to change one's opinion or chosen course of action despite attempts to persuade."
  },
  {
    "id": "apt_45",
    "topic": "verbal_ability",
    "unit": "General Aptitude",
    "part": "A",
    "question": "Choose the correct preposition: 'The candidate demonstrated a remarkable aptitude ________ resolving complex organizational disputes.'",
    "options": {
      "a": "towards",
      "b": "in",
      "c": "with",
      "d": "for"
    },
    "answer": "d",
    "explanation": "The noun 'aptitude' standardly takes the preposition 'for' (e.g., 'aptitude for mathematics', 'aptitude for resolving disputes')."
  },
  {
    "id": "gk_16",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Mental Healthcare Act, 2017 in India, what is an 'Advance Directive' (Section 5)?",
    "options": {
      "a": "A corporate directive ordering mandatory overtime during fiscal audits",
      "b": "A court summons requiring a psychiatrist to appear in criminal trials",
      "c": "A legally recognized document whereby a person specifies how they wish to be cared for and treated for mental illness, and who shall be their nominated representative",
      "d": "An advance payment invoice for inpatient hospital care"
    },
    "answer": "c",
    "explanation": "Section 5 of the Mental Healthcare Act 2017 empowers any person with legal capacity to draft an Advance Directive specifying treatment preferences and appointing a nominated representative should they develop severe mental illness in the future."
  },
  {
    "id": "gk_17",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under Section 34 of the Rights of Persons with Disabilities (RPwD) Act, 2016, what percentage of vacancies in government establishments is reserved for persons with benchmark disabilities?",
    "options": {
      "a": "3%",
      "b": "1%",
      "c": "Not less than 4%",
      "d": "2%"
    },
    "answer": "c",
    "explanation": "The RPwD Act 2016 increased the statutory reservation in government jobs from 3% to not less than 4% for individuals with benchmark disabilities (including visual, hearing, locomotor, autism, intellectual disability, and mental illness)."
  },
  {
    "id": "gk_18",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the POSH Act 2013 in India, within how many months of an incident of sexual harassment must a complaint be submitted to the Internal Complaints Committee (ICC)?",
    "options": {
      "a": "Within 3 years",
      "b": "Within 1 year",
      "c": "Within 30 days",
      "d": "Within 3 months (extendable by another 3 months by the ICC upon recorded reasons)"
    },
    "answer": "d",
    "explanation": "Section 9 of the POSH Act requires the aggrieved woman to file a written complaint within 3 months of the incident, with the ICC empowered to grant a 3-month extension if satisfied that circumstances prevented timely filing."
  },
  {
    "id": "gk_19",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the apex national institution in India designated as the nodal centre for Tele-MANAS and national mental health policy implementation?",
    "options": {
      "a": "Central Institute of Psychiatry (CIP), Ranchi",
      "b": "Tata Institute of Fundamental Research (TIFR), Mumbai",
      "c": "AIIMS New Delhi",
      "d": "National Institute of Mental Health and Neuro Sciences (NIMHANS), Bengaluru"
    },
    "answer": "d",
    "explanation": "NIMHANS Bengaluru is the designated apex nodal centre coordinating the technical, clinical, and supervisory rollout of the Government of India's Tele-MANAS programme."
  },
  {
    "id": "gk_20",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Maternity Benefit (Amendment) Act, 2017 in India, every establishment employing how many or more employees must mandatorily provide a cr\u00e8che facility within a prescribed distance?",
    "options": {
      "a": "50 or more employees",
      "b": "20 or more employees",
      "c": "10 or more employees",
      "d": "30 or more employees"
    },
    "answer": "a",
    "explanation": "Section 11A of the Maternity Benefit Act mandates cr\u00e8che facilities for all establishments employing 50 or more employees, permitting the mother four visits daily to the cr\u00e8che."
  },
  {
    "id": "gk_21",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Claudia Goldin was awarded the 2023 Nobel Memorial Prize in Economic Sciences for her comprehensive historical research on:",
    "options": {
      "a": "Algorithmic cryptocurrency market fluctuations",
      "b": "Game theoretical models of auction mechanics",
      "c": "International trade tariffs on agricultural commodities",
      "d": "Women's labor market outcomes and the underlying drivers of the gender pay gap"
    },
    "answer": "d",
    "explanation": "Harvard economist Claudia Goldin uncovered key drivers of gender differences in employment and pay over two centuries, demonstrating how the parenthood penalty ('greedy work') perpetuates the gender wage gap."
  },
  {
    "id": "gk_22",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The 2017 Nobel Memorial Prize in Economic Sciences was awarded to Richard Thaler for his pioneering contributions to:",
    "options": {
      "a": "Behavioral Economics and 'Nudge Theory'",
      "b": "Monetary policy interest rate adjustments",
      "c": "Stock portfolio diversification formulas",
      "d": "Quantitative econometric forecasting"
    },
    "answer": "a",
    "explanation": "Richard Thaler integrated psychological realism into economics, demonstrating how bounded rationality, social preferences (fairness), and lack of self-control predictably shape decisions (Nudge Theory)."
  },
  {
    "id": "gk_23",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In the World Health Organization's ICD-11, what modern technological condition was officially added under disorders due to addictive behaviors (code 6C40)?",
    "options": {
      "a": "Social Media Compulsion Syndrome",
      "b": "Virtual Reality Vertigo",
      "c": "Gaming Disorder (characterized by impaired control over gaming prioritized over other life interests)",
      "d": "Smartphone Induced Dyslexia"
    },
    "answer": "c",
    "explanation": "ICD-11 officially introduced Gaming Disorder (both online and offline), defining it by persistent or recurrent gaming behavior resulting in significant functional impairment across personal, family, and occupational domains."
  },
  {
    "id": "gk_24",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In corporate Human Resource Management and ESG reporting, what do the letters 'ESG' stand for?",
    "options": {
      "a": "Environmental, Social, and Governance",
      "b": "Employee Standards and Growth",
      "c": "Executive Salary Guidelines",
      "d": "Enterprise System Generalization"
    },
    "answer": "a",
    "explanation": "ESG stands for Environmental, Social, and Governance\u2014a corporate sustainability framework assessing how firms manage ethical relationships with the environment, human workforce/communities (Social), and corporate leadership (Governance)."
  },
  {
    "id": "gk_25",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The concept of 'The Right to Disconnect' (pioneered legally in France and debated internationally and in India) refers to an employee's legal entitlement to:",
    "options": {
      "a": "Refrain from engaging in work-related communications (emails, calls, messages) during non-working hours and holidays without facing disciplinary retaliation",
      "b": "Disconnect internal corporate network servers without notice",
      "c": "Refuse to use electronic computers in the workplace",
      "d": "Cancel health insurance coverage voluntarily"
    },
    "answer": "a",
    "explanation": "The Right to Disconnect protects employees' mental health and work-life balance by enshrining the right to switch off work devices outside contractual hours without punitive consequences."
  },
  {
    "id": "gk_26",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Occupational Safety, Health and Working Conditions Code, 2020 in India, what is the statutory ceiling on maximum daily working hours for an adult worker?",
    "options": {
      "a": "12 hours",
      "b": "6 hours",
      "c": "10 hours",
      "d": "8 hours"
    },
    "answer": "d",
    "explanation": "The Occupational Safety Code 2020 maintains the standard statutory 8-hour workday (and 48-hour workweek) for adult employees, with mandatory overtime compensation for additional hours."
  },
  {
    "id": "gk_27",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In industrial relations and HR compliance in India, what was consolidated into the 'Code on Wages, 2019'?",
    "options": {
      "a": "Companies Act and Income Tax Act",
      "b": "Employees' Provident Funds Act exclusively",
      "c": "Payment of Wages Act (1936), Minimum Wages Act (1948), Payment of Bonus Act (1965), and Equal Remuneration Act (1976)",
      "d": "Factories Act and Mines Act only"
    },
    "answer": "c",
    "explanation": "The Code on Wages, 2019 amalgamated four central labor enactments: Payment of Wages Act 1936, Minimum Wages Act 1948, Payment of Bonus Act 1965, and Equal Remuneration Act 1976."
  },
  {
    "id": "gk_28",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is 'Adverse Impact' (or Disparate Impact) under Equal Employment Opportunity (EEO) guidelines regarding pre-employment assessment tests?",
    "options": {
      "a": "When all candidates score 100% on a test",
      "b": "When a substantially different selection rate occurs for a protected demographic group, commonly evaluated by the Four-Fifths (80%) Rule",
      "c": "A psychometric test that costs more than the company's annual budget",
      "d": "When candidates fail an assessment due to illness"
    },
    "answer": "b",
    "explanation": "Adverse impact occurs when a facially neutral hiring selection practice disproportionately disqualifies protected group members at a rate less than 4/5ths (80%) of the group with the highest selection rate."
  },
  {
    "id": "gk_29",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Mental Healthcare Act, 2017, what quasi-judicial body is established in every state to protect the rights of persons with mental illness and review admission disputes?",
    "options": {
      "a": "State Human Rights Police Force",
      "b": "Mental Health Review Boards (MHRBs)",
      "c": "National Industrial Tribunal",
      "d": "District Consumer Protection Forum"
    },
    "answer": "b",
    "explanation": "Section 73 of the Mental Healthcare Act 2017 establishes Mental Health Review Boards (headed by a District Judge) to oversee admissions, review advance directives, and protect the legal rights of patients."
  },
  {
    "id": "gk_30",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What does the 'MANODARPAN' initiative, launched by the Ministry of Education (Government of India) under the Atmanirbhar Bharat Abhiyan, provide?",
    "options": {
      "a": "Mandatory military fitness training for schoolchildren",
      "b": "A digital attendance register for rural schools",
      "c": "Subsidized laptops for engineering college teachers",
      "d": "Psychosocial support for mental health and emotional well-being of students, teachers, and families during and beyond COVID-19"
    },
    "answer": "d",
    "explanation": "MANODARPAN is a flagship Ministry of Education initiative covering a wide range of activities to provide psychosocial support for mental health and well-being to students, families, and teachers."
  },
  {
    "id": "gk_31",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The United Nations Sustainable Development Goal (SDG) that explicitly targets 'Good Health and Well-Being', including the promotion of mental health, is:",
    "options": {
      "a": "SDG 1",
      "b": "SDG 3",
      "c": "SDG 8",
      "d": "SDG 13"
    },
    "answer": "b",
    "explanation": "UN Sustainable Development Goal 3 (SDG 3: Good Health and Well-being) Target 3.4 explicitly includes: 'promote mental health and well-being'."
  },
  {
    "id": "gk_32",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In organizational talent acquisition, what is 'Algorithmic Bias' in AI-powered automated video interviewing software?",
    "options": {
      "a": "Software running out of battery",
      "b": "A computer virus corrupting resumes",
      "c": "Systematic and repeatable errors in AI algorithms that produce unfair hiring outcomes by penalizing candidates based on non-standard accents, facial expressions, or gender/racial characteristics",
      "d": "Candidates having superior computer literacy than HR managers"
    },
    "answer": "c",
    "explanation": "Algorithmic bias occurs when machine learning models trained on historical, unrepresentative data internalize human prejudices, unfairly disadvantaging neurodivergent or culturally diverse candidates."
  },
  {
    "id": "gk_33",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the POSH Act 2013, an employer who fails to constitute an Internal Complaints Committee (ICC) can face what penalty for a first-time offense?",
    "options": {
      "a": "Life imprisonment of the HR director",
      "b": "No legal penalty exists for non-compliance",
      "c": "Immediate permanent seizure of all company assets",
      "d": "A monetary fine of up to Rs. 50,000"
    },
    "answer": "d",
    "explanation": "Section 26 of the POSH Act imposes a fine of up to Rs. 50,000 for failing to constitute an ICC or comply with provisions, with repeated violations risking cancellation of corporate operating licenses."
  },
  {
    "id": "gk_34",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the global annual observation dedicated to neurodiversity and autism awareness recognized by the United Nations on April 2nd?",
    "options": {
      "a": "World Schizophrenia Day",
      "b": "World Autism Awareness Day",
      "c": "World Bipolar Day",
      "d": "International Day of Happiness"
    },
    "answer": "b",
    "explanation": "April 2nd is officially designated as World Autism Awareness Day by the United Nations General Assembly to advocate for the rights and societal inclusion of autistic individuals."
  },
  {
    "id": "gk_35",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "In contemporary organizational design, what does 'Psychological Safety', a concept popularized by Amy Edmondson and demonstrated by Google's Project Aristotle, describe?",
    "options": {
      "a": "A shared team belief that it is safe to take interpersonal risks, speak up with ideas, admit mistakes, and ask questions without fear of humiliation or retribution",
      "b": "An employee assistance insurance contract",
      "c": "A physical office space protected by armed biometric guards",
      "d": "A mandatory requirement that all employees agree with leadership"
    },
    "answer": "a",
    "explanation": "Harvard professor Amy Edmondson defined psychological safety as a climate of interpersonal trust and mutual respect where team members feel comfortable being vulnerable and taking creative risks."
  },
  {
    "id": "gk_36",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the primary function of the Rehabilitation Council of India (RCI), established by the RCI Act of 1992?",
    "options": {
      "a": "To conduct national sports competitions",
      "b": "To finance commercial start-up business loans",
      "c": "To manage physical prisons and correctional homes",
      "d": "To regulate training policies and standardize qualifications for clinical psychologists, rehabilitation professionals, and special educators, maintaining the Central Rehabilitation Register (CRR)"
    },
    "answer": "d",
    "explanation": "The Rehabilitation Council of India (RCI) is the statutory body regulating and licensing rehabilitation professionals (including M.Phil Clinical Psychologists) and enforcing standard professional curricula in India."
  },
  {
    "id": "gk_37",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The landmark judgment of the Supreme Court of India in 'Justice K.S. Puttaswamy (Retd.) v. Union of India' (2017) unanimously affirmed which fundamental right under Article 21 of the Constitution?",
    "options": {
      "a": "Right to Privacy as an intrinsic part of the Right to Life and Personal Liberty",
      "b": "Right to Unlimited Overtime Compensation",
      "c": "Right to Free Corporate Wi-Fi",
      "d": "Right to Guaranteed Government Employment"
    },
    "answer": "a",
    "explanation": "The 9-judge bench in Puttaswamy held that the Right to Privacy is a fundamental constitutional right protected under Article 21, creating profound implications for psychometric and genetic workplace data privacy."
  },
  {
    "id": "gk_38",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is 'Neurodiversity' in modern Human Resource and DEI terminology?",
    "options": {
      "a": "The concept that neurological differences (such as Autism, ADHD, Dyslexia) represent natural human variations in brain function rather than medical deficits requiring cure",
      "b": "Mandatory neurological surgery for all executives",
      "c": "A medical term designating severe brain trauma",
      "d": "A brain-training smartphone application"
    },
    "answer": "a",
    "explanation": "Coined by sociologist Judy Singer, neurodiversity views cognitive variations (ADHD, ASD, Dyslexia) as valuable forms of human diversity that bring unique perspectives and strengths to the workplace."
  },
  {
    "id": "gk_39",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the statutory role of the 'External Member' on the Internal Complaints Committee (ICC) mandated under the POSH Act 2013?",
    "options": {
      "a": "To report findings directly to the press",
      "b": "To ensure neutrality, prevent internal corporate bias, and provide expertise from an NGO or association committed to the cause of women",
      "c": "To represent the respondent as legal counsel",
      "d": "To audit the company's financial balance sheet"
    },
    "answer": "b",
    "explanation": "Section 4(2)(c) mandates an external member from an NGO or familiar with issues relating to sexual harassment, ensuring impartiality and guarding against internal management cover-ups."
  },
  {
    "id": "gk_40",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Mental Healthcare Act 2017, what is the legal position regarding the use of Electroconvulsive Therapy (ECT) on minors (under 18 years)?",
    "options": {
      "a": "Prohibited, unless specifically authorized with prior informed consent of the guardian AND prior approval of the Mental Health Review Board",
      "b": "Mandatory for all behavioral disorders in schools",
      "c": "Permissible with verbal consent of the child's teacher",
      "d": "Administered without anesthesia"
    },
    "answer": "a",
    "explanation": "Section 95(1)(b) prohibits ECT for minors unless approved by a Mental Health Review Board with guardian consent; furthermore, unmodified ECT (without muscle relaxants and anesthesia) is completely banned for all patients."
  },
  {
    "id": "gk_41",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is the primary objective of India's National Mental Health Programme (NMHP), originally initiated in 1982?",
    "options": {
      "a": "To ensure the availability and accessibility of minimum mental healthcare for all, integrating mental health services into general primary healthcare (District Mental Health Programme - DMHP)",
      "b": "To build isolated psychiatric asylums outside all major cities",
      "c": "To replace all human psychiatrists with pharmaceutical vending machines",
      "d": "To privatize all government hospitals"
    },
    "answer": "a",
    "explanation": "NMHP aims to integrate mental healthcare into community primary health centers (PHCs) through the District Mental Health Programme (DMHP), reducing institutionalization and destigmatizing care."
  },
  {
    "id": "gk_42",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is 'Presenteeism' in corporate wellness and occupational psychology research?",
    "options": {
      "a": "Arriving early to team meetings",
      "b": "Working entirely from remote resort locations",
      "c": "Giving physical gifts to clients during holidays",
      "d": "The lost productivity that occurs when employees are physically present at work but underperforming due to illness, chronic stress, or burnout"
    },
    "answer": "d",
    "explanation": "Presenteeism refers to coming to work despite physical illness or psychological distress, resulting in severe productivity loss, higher error rates, and worsened long-term employee health."
  },
  {
    "id": "gk_43",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "Under the Employee State Insurance (ESI) Act, 1948 in India, insured employees and their dependents are entitled to:",
    "options": {
      "a": "Unlimited company equity shares",
      "b": "Comprehensive medical care, sickness benefits, maternity benefits, and disablement pensions for low-to-middle income industrial workers",
      "c": "Free international travel allowances",
      "d": "Corporate golf club memberships"
    },
    "answer": "b",
    "explanation": "The ESI scheme is an integrated social security framework providing comprehensive healthcare and income protection against sickness, maternity, disablement, and workplace injuries."
  },
  {
    "id": "gk_44",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "The 2024 World Happiness Report ranked which country as the happiest nation in the world for the seventh consecutive year?",
    "options": {
      "a": "United States",
      "b": "Finland",
      "c": "Singapore",
      "d": "Switzerland"
    },
    "answer": "b",
    "explanation": "Finland ranked first in the World Happiness Report for the seventh year in a row, attributed to high social trust, universal healthcare, robust social welfare, and low perceived corruption."
  },
  {
    "id": "gk_45",
    "topic": "mental_health_policies",
    "unit": "Current Affairs & GK",
    "part": "A",
    "question": "What is 'Quiet Thriving' in contemporary organizational psychology as a counter-movement to 'Quiet Quitting'?",
    "options": {
      "a": "Working 90 hours a week without logging overtime",
      "b": "Refusing to communicate with leadership",
      "c": "Proactively crafting one's job duties, carving out psychological boundaries, seeking mentorship, and focusing on personally meaningful workplace projects to maximize well-being",
      "d": "Secretly sabotaging competitors' projects"
    },
    "answer": "c",
    "explanation": "'Quiet Thriving' involves intentional job crafting\u2014taking psychological agency over one's workday by setting healthy boundaries, modifying tasks to align with strengths, and cultivating rewarding workplace relationships."
  },
  {
    "id": "hrm_16",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In the Critical Incident Technique (CIT) of job analysis developed by John C. Flanagan, what specific data are gathered from supervisors and incumbents?",
    "options": {
      "a": "Detailed behavioral descriptions of especially effective or ineffective actions taken by workers in crucial job situations",
      "b": "General subjective ratings of employee charisma",
      "c": "Financial audit records of the department",
      "d": "Standardized multiple-choice personality test scores"
    },
    "answer": "a",
    "explanation": "Flanagan's Critical Incident Technique collects rich qualitative behavioral accounts of specific, observable actions that led to exceptionally successful or unsuccessful outcomes in critical job situations."
  },
  {
    "id": "hrm_17",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is the Position Analysis Questionnaire (PAQ) developed by McCormick, Jeanneret, and Mecham?",
    "options": {
      "a": "A legal contract specifying employee dismissal grounds",
      "b": "An unstructured interview protocol for CEO hiring",
      "c": "A structured, standardized job analysis questionnaire evaluating 194 job elements across six major worker-oriented behavioral categories",
      "d": "A salary negotiation rubric for trade unions"
    },
    "answer": "c",
    "explanation": "The PAQ is a famous worker-oriented job analysis instrument measuring 194 job elements across 6 categories (Information input, Mental processes, Work output, Relationships, Job context, Other)."
  },
  {
    "id": "hrm_18",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is 'Succession Planning' in Human Resource Planning?",
    "options": {
      "a": "The legal bankruptcy procedure for failed companies",
      "b": "The systematic process of identifying, developing, and mentoring high-potential talent to seamlessly fill critical leadership vacancies in the future",
      "c": "Conducting monthly performance disciplinary audits",
      "d": "Replacing all senior employees with external consultants"
    },
    "answer": "b",
    "explanation": "Succession planning ensures strategic business continuity by building a talent pipeline of prepared internal candidates who can step into executive and mission-critical roles when incumbents depart."
  },
  {
    "id": "hrm_19",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In workforce forecasting, what does 'Markov Analysis' track and predict?",
    "options": {
      "a": "Employee biometric fingerprint scan attendance",
      "b": "Stock market fluctuations impacting executive equity",
      "c": "Competitor hiring budgets",
      "d": "The historical probability transitions of employees moving between internal job levels, being promoted, demoted, or leaving the organization"
    },
    "answer": "d",
    "explanation": "Markov analysis uses a transitional probability matrix to track employee historical internal mobility patterns (promotions, lateral transfers, exits), forecasting internal labor supply."
  },
  {
    "id": "hrm_20",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is 'Job Enlargement' compared to 'Job Enrichment'?",
    "options": {
      "a": "Enlargement increases salary; Enrichment reduces working hours",
      "b": "They are identical terms in industrial engineering",
      "c": "Enlargement increases horizontal task variety at the same level of responsibility; Enrichment adds vertical depth, granting greater autonomy, planning, and control",
      "d": "Enlargement is punitive; Enrichment is rewarding"
    },
    "answer": "c",
    "explanation": "Job Enlargement (horizontal loading) adds more tasks of similar complexity to combat boredom. Job Enrichment (vertical loading, Herzberg) increases autonomy, discretion, and responsibility."
  },
  {
    "id": "hrm_21",
    "topic": "hr_planning_job_analysis",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Which of the following is a key worker-oriented component in the acronym KSAO derived from job specifications?",
    "options": {
      "a": "Knowledge, Skills, Abilities, and Other characteristics",
      "b": "Knowledge-based Systems, Automation, and Operations",
      "c": "Key Salaries, Assets, and Organizational goals",
      "d": "Kinesthetic Speed, Agility, and Output"
    },
    "answer": "a",
    "explanation": "KSAOs represent the foundational human characteristics identified in job specifications: Knowledge (factual/procedural), Skills (proficiencies), Abilities (enduring capacities), and Other characteristics (personality, values)."
  },
  {
    "id": "hrm_22",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Why are 'Structured Behavioral Interviews' (e.g. using the STAR method: Situation, Task, Action, Result) empirically superior to unstructured interviews?",
    "options": {
      "a": "They eliminate the need to review resumes",
      "b": "They allow interviewers to ask spontaneous, random questions based on gut intuition",
      "c": "They standardize questions based on job analysis and evaluate past observable behavior against anchored behavioral scoring rubrics, maximizing criterion validity",
      "d": "They can be scored without human raters"
    },
    "answer": "c",
    "explanation": "Structured interviews ground questions in job analysis, ask all candidates identical questions, and evaluate past behavior ('the best predictor of future behavior') against standardized scoring keys, dramatically improving validity (r ~ 0.51)."
  },
  {
    "id": "hrm_23",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In an Assessment Center, what does the classic 'In-Basket Exercise' assess?",
    "options": {
      "a": "A candidate's physical fitness and manual dexterity",
      "b": "A candidate's ability to prioritize, organize, make decisions, and delegate simulated incoming memos, emails, and urgent operational crises under time pressure",
      "c": "Emotional personality pathology",
      "d": "Spelling and grammar errors on paper"
    },
    "answer": "b",
    "explanation": "In-basket simulations replicate managerial administrative reality: candidates receive an inbox of emails, requests, and crises, evaluating analytical thinking, delegation, decision-making, and stress tolerance."
  },
  {
    "id": "hrm_24",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is a 'Realistic Job Preview' (RJP) developed by John Wanous, and what is its primary organizational benefit?",
    "options": {
      "a": "Inflating job perks to maximize the total number of applicants",
      "b": "A confidential background check conducted without candidate consent",
      "c": "A simulated promotion ceremony",
      "d": "Providing applicants with balanced, honest information regarding both positive and stressful/challenging aspects of the role, reducing voluntary post-hire turnover"
    },
    "answer": "d",
    "explanation": "RJPs set realistic employee expectations before hiring; by candidly revealing both rewards and frustrations, candidates self-select out or arrive with accurate expectations, lowering early turnover."
  },
  {
    "id": "hrm_25",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is a 'Work Sample Test' (e.g., asking a software engineer to write actual code or an HR candidate to draft an onboarding memo)?",
    "options": {
      "a": "An informal lunch interview",
      "b": "A polygraph honesty test",
      "c": "A high-fidelity selection test that requires applicants to perform direct tasks that are physically or psychologically identical to the actual duties of the job",
      "d": "A projective inkblot test"
    },
    "answer": "c",
    "explanation": "Work sample tests evaluate actual job execution samples under standardized conditions, having among the highest criterion-related validity (Schmidt & Hunter, r ~ 0.54) of all selection methods."
  },
  {
    "id": "hrm_26",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In selection psychometrics, what is 'Banding' (e.g., sliding band method)?",
    "options": {
      "a": "Categorizing test scores into score bands based on the test's Standard Error of Measurement (SEM), treating all scores within a band as statistically equivalent to reduce adverse impact",
      "b": "Ranking candidates strictly by chronological age",
      "c": "Assigning employee uniforms",
      "d": "Banning candidates who retake an assessment"
    },
    "answer": "a",
    "explanation": "Banding recognizes that psychometric tests have measurement error (SEM). Scores within the same band are treated as non-statistically different, allowing recruiters to weigh other criteria (diversity, experience) fairly."
  },
  {
    "id": "hrm_27",
    "topic": "talent_acquisition",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "The 'Selection Ratio' in corporate staffing is defined as:",
    "options": {
      "a": "Total applicants divided by total employees",
      "b": "Number of job openings hired divided by the total number of applicants (hired / applicants)",
      "c": "Interview duration divided by test duration",
      "d": "Salary offered divided by candidate's previous salary"
    },
    "answer": "b",
    "explanation": "Selection Ratio (SR = Hires / Applicants) reflects hiring selectivity. A low selection ratio (e.g., 5 hires out of 500 applicants = 0.01) gives the organization immense utility from using valid selection tests."
  },
  {
    "id": "hrm_28",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "According to the Training Needs Analysis (TNA) framework, what are the three levels of needs assessment that must precede any training program?",
    "options": {
      "a": "Organizational Analysis, Task (Job) Analysis, and Person (Individual) Analysis",
      "b": "Pre-test, Post-test, and Follow-up analysis",
      "c": "Financial, Marketing, and Administrative analysis",
      "d": "Internal, External, and Competitor analysis"
    },
    "answer": "a",
    "explanation": "Goldstein's TNA model mandates: (1) Organizational analysis (strategic goals/climate), (2) Task analysis (job duties and required KSAOs), and (3) Person analysis (who needs training and what gaps exist)."
  },
  {
    "id": "hrm_29",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In Donald Kirkpatrick's Training Evaluation Model, what does Level 4 ('Results') measure?",
    "options": {
      "a": "Changes in supervisory personality traits",
      "b": "The tangible organizational impact and business outcomes (e.g., sales growth, quality error reduction, cost savings, ROI)",
      "c": "Post-training multiple choice quiz scores",
      "d": "How much the trainees enjoyed the instructor and catering"
    },
    "answer": "b",
    "explanation": "Kirkpatrick's Level 4 measures organizational business results\u2014the bottom-line financial, quality, safety, or productivity outcomes directly attributable to the training initiative."
  },
  {
    "id": "hrm_30",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is 'Transfer of Training' in organizational learning?",
    "options": {
      "a": "Transferring an employee to another geographical branch after training",
      "b": "Sharing training slides via corporate email",
      "c": "Passing a training exam with a score above 90%",
      "d": "The effective and continuous application of newly acquired knowledge, skills, and behaviors from the training setting to the actual job environment"
    },
    "answer": "d",
    "explanation": "Transfer of training occurs when trainees generalize learned competencies to their day-to-day job duties and maintain them over time, facilitated by supportive managerial climate and identical task elements."
  },
  {
    "id": "hrm_31",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In adult learning theory (Andragogy, popularized by Malcolm Knowles), which principle distinguishes adult learners from children (Pedagogy)?",
    "options": {
      "a": "Adults are self-directed, bring rich life experience as a learning resource, are problem-centered rather than subject-centered, and desire immediate application",
      "b": "Adults lack intrinsic motivation to learn",
      "c": "Adults are dependent on instructors for basic direction",
      "d": "Adults learn best through rote memorization and punitive testing"
    },
    "answer": "a",
    "explanation": "Knowles' Andragogy highlights that adults are self-directed, internally motivated, draw upon accumulated experiential knowledge, and learn best when solving realistic, immediate practical challenges."
  },
  {
    "id": "hrm_32",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "Behavior Modeling Training (BMT), grounded in Albert Bandura's Social Learning Theory, typically follows which pedagogical sequence?",
    "options": {
      "a": "Lecture -> Written exam -> Dismissal",
      "b": "Demonstration of model behavior -> Role-play / Behavioral rehearsal -> Constructive feedback -> Transfer planning",
      "c": "Trial and error in high-risk field environments without supervision",
      "d": "Psychoanalytic dream interpretation"
    },
    "answer": "b",
    "explanation": "BMT leverages vicarious learning: trainees observe an expert model performing the target behavior, actively practice the skill in simulations (rehearsal), receive immediate feedback, and plan workplace transfer."
  },
  {
    "id": "hrm_33",
    "topic": "training_development",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is an 'Assessment Center' used for when applied specifically to employee DEVELOPMENT rather than selection?",
    "options": {
      "a": "To immediately fire low-performing employees",
      "b": "To recalculate corporate payroll taxes",
      "c": "To test software security firewalls",
      "d": "A Developmental Assessment Center (DAC) identifies an employee's developmental strengths, skill gaps, and formulates an individual development plan (IDP)"
    },
    "answer": "d",
    "explanation": "Unlike selection assessment centers focused on pass/fail hiring decisions, Developmental Assessment Centers (DACs) focus on feedback, self-awareness, and drafting customized Individual Development Plans (IDPs)."
  },
  {
    "id": "hrm_34",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In performance appraisal, what is a Behaviorally Anchored Rating Scale (BARS)?",
    "options": {
      "a": "An unstructured essay appraisal written by coworkers",
      "b": "A forced distribution curve firing the bottom 10%",
      "c": "A rating scale that combines qualitative critical incidents with quantitative ratings by anchoring numeric scale points with explicit behavioral examples",
      "d": "A ranking scale comparing employees to national averages"
    },
    "answer": "c",
    "explanation": "BARS uses behavioral anchors (critical incidents) along a numerical continuum to define exactly what represents unsatisfactory, average, and superior performance, minimizing subjective rater bias."
  },
  {
    "id": "hrm_35",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is the 'Halo Effect' in supervisory performance appraisals?",
    "options": {
      "a": "A rater gives high ratings only to religious employees",
      "b": "A rater's overall positive impression in one prominent area (e.g., sociability) biases them to give falsely elevated ratings across all unrelated performance dimensions",
      "c": "Rating everyone harshly due to personal bad mood",
      "d": "Rating all employees in the exact middle of the scale"
    },
    "answer": "b",
    "explanation": "The Halo Error occurs when an overall favorable evaluation or one salient characteristic generalizes to inflate ratings on all distinct job dimensions. The opposite is the Horns Effect."
  },
  {
    "id": "hrm_36",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "A supervisor who avoids conflict by giving all employees ratings of 3 on a 5-point scale regardless of actual performance differences is committing which appraisal error?",
    "options": {
      "a": "Strictness Bias",
      "b": "Contrast Effect",
      "c": "Leniency Bias",
      "d": "Central Tendency Error"
    },
    "answer": "d",
    "explanation": "Central Tendency error occurs when raters cluster all scores around the mathematical midpoint of the scale, failing to distinguish between outstanding achievers and poor performers."
  },
  {
    "id": "hrm_37",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is a '360-Degree Feedback' appraisal system?",
    "options": {
      "a": "Rotating employee desks 360 degrees in the office",
      "b": "Evaluating employees exactly 360 days after hire",
      "c": "A financial audit conducted by outside stock analysts",
      "d": "A multi-source assessment gathering anonymous performance ratings from supervisors, peers, direct reports, customers, and self-evaluation"
    },
    "answer": "d",
    "explanation": "360-degree feedback gathers holistic, multi-perspective performance data from all concentric organizational relationships (boss, peers, subordinates, clients, and self), widely used for leadership development."
  },
  {
    "id": "hrm_38",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In Jack Welch's famous 'Forced Distribution' (Rank and Yank / Vitality Curve) appraisal system, employees are typically categorized into:",
    "options": {
      "a": "Ten progressive grade brackets",
      "b": "Top 20% (A players), Middle 70% (B players), and Bottom 10% (C players who are targeted for termination)",
      "c": "Only two categories: Satisfactory and Unsatisfactory",
      "d": "Equal thirds with identical compensation"
    },
    "answer": "b",
    "explanation": "Welch's GE vitality curve forced managers into a 20-70-10 distribution: rewarding top 20% high-performers, developing the middle 70%, and transitioning out the bottom 10% annually."
  },
  {
    "id": "hrm_39",
    "topic": "performance_management",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is the 'Recency Effect' in annual employee performance reviews?",
    "options": {
      "a": "Hiring only recent college graduates",
      "b": "Updating corporate software frequently",
      "c": "Using recently published psychometric tests",
      "d": "Overemphasizing an employee's performance in the last 2 to 3 weeks before the review while forgetting accomplishments or failures from earlier in the 12-month year"
    },
    "answer": "d",
    "explanation": "The Recency error is memory bias: evaluators anchor heavily on events fresh in memory from the recent past, neglecting the incumbent's comprehensive track record over the entire annual appraisal period."
  },
  {
    "id": "hrm_40",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In systematic Job Evaluation, what is the 'Point-Factor Method'?",
    "options": {
      "a": "A quantitative technique where jobs are evaluated across compensable factors (e.g., skill, effort, responsibility, working conditions), assigned factor degrees and points to establish internal relative job worth",
      "b": "Deducting points for employee tardiness",
      "c": "Calculating employee sales commissions",
      "d": "Ranking jobs purely by market executive rumor"
    },
    "answer": "a",
    "explanation": "The Point-Factor Method is the most widely utilized quantitative job evaluation system, identifying compensable factors, weighting them, and assigning points to determine relative job hierarchy for internal pay equity."
  },
  {
    "id": "hrm_41",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is 'Broadbanding' in corporate compensation structure design?",
    "options": {
      "a": "Paying all employees in a department identical salaries",
      "b": "Providing free broadband internet to remote employees",
      "c": "Eliminating all executive bonuses",
      "d": "Collapsing numerous narrow pay grades into a few wide salary bands with broad pay ranges (e.g. 100%+ spread), promoting lateral flexibility and flatter organizational hierarchies"
    },
    "answer": "d",
    "explanation": "Broadbanding consolidates multiple traditional, rigid pay grades into fewer wide bands, encouraging lateral skill development, cross-functional agility, and decentralizing managerial pay decisions."
  },
  {
    "id": "hrm_42",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In variable compensation, what is a 'Gainsharing' plan (such as the Scanlon Plan)?",
    "options": {
      "a": "Mandatory employee wage deductions for pension investments",
      "b": "Giving executives stock options during an IPO",
      "c": "A group incentive program that shares financial gains with employees based on measurable improvements in facility-wide operational productivity, scrap reduction, or cost savings",
      "d": "An individual commission for sales representatives"
    },
    "answer": "c",
    "explanation": "Gainsharing ties group bonuses to quantifiable formula-driven operational cost savings or productivity gains achieved through employee team collaboration and cost-cutting suggestions (Scanlon / Rucker plans)."
  },
  {
    "id": "hrm_43",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is an ESOP in corporate employee reward systems?",
    "options": {
      "a": "Employee Stock Ownership Plan (granting employees equity ownership shares in the company to align long-term employee and shareholder interests)",
      "b": "Emergency Safety Operating Procedure",
      "c": "Employee Sick Overhead Policy",
      "d": "Executive Severance Operational Package"
    },
    "answer": "a",
    "explanation": "An Employee Stock Ownership Plan (ESOP) provides workers with ownership interest in the firm in the form of shares, fostering an ownership mindset and long-term organizational commitment."
  },
  {
    "id": "hrm_44",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "In industrial relations and labor economics, what is 'Collective Bargaining'?",
    "options": {
      "a": "Arbitrary wage setting by government decree",
      "b": "Consumers negotiating retail discounts at supermarkets",
      "c": "A hostile corporate takeover",
      "d": "The formal negotiation process between an employer (or employers' association) and a trade union representing employees to determine wages, working hours, benefits, and working conditions"
    },
    "answer": "d",
    "explanation": "Collective bargaining is the institutionalized mechanism whereby organized employee representatives (unions) negotiate contractual employment agreements with management regarding compensation and labor standards."
  },
  {
    "id": "hrm_45",
    "topic": "compensation_relations",
    "unit": "Human Resource Management",
    "part": "B",
    "question": "What is the crucial distinction between 'Arbitration' and 'Mediation' in resolving labor disputes?",
    "options": {
      "a": "There is zero procedural difference",
      "b": "Mediation is conducted in court; Arbitration is informal",
      "c": "Arbitrators are appointed only by labor unions",
      "d": "A mediator facilitates voluntary negotiation between disputing parties without imposing a decision; an arbitrator renders a final, legally binding judgment or award"
    },
    "answer": "d",
    "explanation": "In mediation, a neutral third party guides discussions to help parties reach their own consensual agreement. In arbitration, the third-party arbitrator acts as a judge, hearing evidence and issuing a binding settlement."
  },
  {
    "id": "io_16",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Often hailed as the 'Father of Industrial Psychology', which German-American psychologist published the seminal 1913 text 'Psychology and Industrial Efficiency'?",
    "options": {
      "a": "Elton Mayo",
      "b": "Kurt Lewin",
      "c": "Hugo M\u00fcnsterberg",
      "d": "Frederick Winslow Taylor"
    },
    "answer": "c",
    "explanation": "Hugo M\u00fcnsterberg pioneered the application of psychological science to employee selection, vocational guidance, advertising, and workplace fatigue in his 1913 masterwork."
  },
  {
    "id": "io_17",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "What groundbreaking discovery emerged from the Hawthorne Studies (1924\u20131932) conducted at Western Electric's Hawthorne Works under Elton Mayo and Fritz Roethlisberger?",
    "options": {
      "a": "Workers are purely economic automatons motivated exclusively by piece-rate pay",
      "b": "Illumination levels are the sole physical determinant of manufacturing speed",
      "c": "The 'Hawthorne Effect': employee productivity increased because workers responded to being observed, valued, and receiving managerial attention as a social group",
      "d": "Rest pauses cause chronic industrial accidents"
    },
    "answer": "c",
    "explanation": "The Hawthorne Studies demonstrated that social relations, informal group norms, and feeling noticed by management (the Hawthorne Effect) strongly influence worker motivation and productivity, launching the Human Relations Movement."
  },
  {
    "id": "io_18",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Frank and Lillian Gilbreth made foundational contributions to early industrial engineering and ergonomics through their systematic analysis of:",
    "options": {
      "a": "Time-and-Motion Studies and fundamental micrometer hand motions termed 'Therbligs'",
      "b": "Stock portfolio hedging strategies",
      "c": "Projective inkblot personality assessment",
      "d": "Dream analysis of factory supervisors"
    },
    "answer": "a",
    "explanation": "The Gilbreths pioneered Time-and-Motion study to eliminate wasted physical motions, categorizing 18 basic elementary hand movements termed 'Therbligs' (Gilbreth spelled backwards), pioneering ergonomic efficiency."
  },
  {
    "id": "io_19",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Frederick Winslow Taylor's 'Scientific Management' (Taylorism), what was the central philosophy regarding job design and worker motivation?",
    "options": {
      "a": "Scientifically analyzing each task into minimal, standardized, repetitive movements, strictly separating planning (management) from execution (labor), and using economic piece-rates",
      "b": "Mandating employee self-appraisals",
      "c": "Focusing exclusively on corporate spiritual well-being",
      "d": "Granting workers complete autonomy to self-organize tasks"
    },
    "answer": "a",
    "explanation": "Taylorism aimed to maximize factory efficiency by using stopwatch time studies to break jobs down into standardized, repetitive components, training workers to execute the 'one best way' for financial incentives."
  },
  {
    "id": "io_20",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Hawthorne Works' 'Bank Wiring Observation Room' study, what social phenomenon was observed among the workers?",
    "options": {
      "a": "Workers maximized their individual output to earn maximum bonus money",
      "b": "Complete absence of social interaction among employees",
      "c": "The informal group established powerful peer norms restricting output: workers who worked too fast were ostracized as 'rate busters', and those who worked too slow were mocked as 'chiselers'",
      "d": "Employees went on a violent physical strike"
    },
    "answer": "c",
    "explanation": "The Bank Wiring Room revealed the supremacy of informal group norms over formal monetary incentives; peer pressure enforced an artificial ceiling on daily production to prevent management from lowering piece-rates."
  },
  {
    "id": "io_21",
    "topic": "io_history",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "During World War II, the U.S. Army developed which group psychological classification assessment for placing over 12 million military recruits into specialized roles?",
    "options": {
      "a": "Army Alpha Test",
      "b": "Army General Classification Test (AGCT)",
      "c": "Wechsler Intelligence Scale for Children (WISC)",
      "d": "Thematic Apperception Test (TAT)"
    },
    "answer": "b",
    "explanation": "While Army Alpha/Beta were developed during World War I, the Army General Classification Test (AGCT) was developed for World War II to measure learning ability and classify recruits for specialized military occupational specialties."
  },
  {
    "id": "io_22",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "According to Frederick Herzberg's Two-Factor (Motivator-Hygiene) Theory, what is the effect of improving 'Hygiene Factors' (such as salary, company policies, and working conditions)?",
    "options": {
      "a": "It reduces employee productivity by 50%",
      "b": "It dramatically generates high, enduring employee job satisfaction and internal motivation",
      "c": "It causes immediate cognitive dissonance",
      "d": "It prevents and eliminates job dissatisfaction, but does NOT create genuine positive job satisfaction or motivation"
    },
    "answer": "d",
    "explanation": "Herzberg argued that satisfaction and dissatisfaction are separate continua. Hygiene factors (extrinsic context: salary, policies) merely prevent dissatisfaction. True satisfaction arises only from Motivator factors (intrinsic work: achievement, recognition, growth)."
  },
  {
    "id": "io_23",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In David McClelland's Acquired Needs Theory, an employee who seeks to excel, strives against high internal standards of performance, and prefers moderate calculated risks with immediate feedback has high:",
    "options": {
      "a": "Need for Extrinsic Security",
      "b": "Need for Affiliation (nAff)",
      "c": "Need for Personalized Power (nPow)",
      "d": "Need for Achievement (nAch)"
    },
    "answer": "d",
    "explanation": "Individuals with high nAch are driven by personal mastery, taking calculated risks where success depends on effort rather than chance, requiring clear, unambiguous feedback on progress."
  },
  {
    "id": "io_24",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Victor Vroom's Expectancy Theory of motivation, what does 'Instrumentality' represent?",
    "options": {
      "a": "The subjective belief that successful task performance will actually be rewarded with an organizational outcome (P -> R)",
      "b": "The mechanical tools used in factory production",
      "c": "The emotional value or attractiveness placed on the anticipated reward (V)",
      "d": "The subjective probability that high personal effort will lead to successful task performance (E -> P)"
    },
    "answer": "a",
    "explanation": "In Vroom's framework (Motivation = Expectancy x Instrumentality x Valence): Expectancy is Effort -> Performance; Instrumentality is Performance -> Reward; Valence is the personal value of the Reward."
  },
  {
    "id": "io_25",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "According to J. Stacy Adams' Equity Theory, what psychological tension does an employee experience when their ratio of outcomes to inputs is perceived as LESS than the outcome/input ratio of a comparison other?",
    "options": {
      "a": "Underpayment Inequity (leading to anger, reduced work effort, absenteeism, or turnover)",
      "b": "Flow state",
      "c": "Self-actualization",
      "d": "Overpayment Guilt"
    },
    "answer": "a",
    "explanation": "Underpayment inequity generates distress/anger, motivating employees to restore cognitive equity by reducing effort/inputs, demanding raises, altering reference others, or quitting."
  },
  {
    "id": "io_26",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Edwin Locke and Gary Latham's Goal-Setting Theory establishes that maximum task performance is achieved when goals are:",
    "options": {
      "a": "Kept secret from employees",
      "b": "Extremely easy so everyone succeeds 100% of the time",
      "c": "Vague and flexible (e.g., 'Do your best')",
      "d": "Specific, Challenging (difficult yet attainable), and accompanied by continuous feedback"
    },
    "answer": "d",
    "explanation": "Empirical research conclusively demonstrates that specific, challenging goals produce significantly higher performance than ambiguous 'do your best' goals because they direct attention, mobilize effort, and foster persistence."
  },
  {
    "id": "io_27",
    "topic": "work_motivation",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Hackman and Oldham Job Characteristics Model (JCM), which core job dimension reflects the extent to which the job has a substantial, palpable impact on the lives or work of other people?",
    "options": {
      "a": "Task Identity",
      "b": "Autonomy",
      "c": "Skill Variety",
      "d": "Task Significance"
    },
    "answer": "d",
    "explanation": "Task Significance is the degree to which a job noticeably affects the well-being, safety, or work of others (e.g., nursing, airline piloting), creating experienced meaningfulness in the work."
  },
  {
    "id": "io_28",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "The Job Descriptive Index (JDI), developed by Smith, Kendall, and Hulin, evaluates employee job satisfaction across which five facets?",
    "options": {
      "a": "Physical layout, Air quality, Lighting, Noise, Cafeteria",
      "b": "Salary, Bonus, Stock, Pension, Insurance",
      "c": "Work on present job, Present pay, Opportunities for promotion, Supervision, and Coworkers",
      "d": "Personality, Intelligence, Emotional stability, Conscientiousness, Agreeableness"
    },
    "answer": "c",
    "explanation": "The JDI is the most validated psychometric facet scale of job satisfaction, assessing: (1) Work itself, (2) Pay, (3) Promotion opportunities, (4) Supervision, and (5) Coworkers."
  },
  {
    "id": "io_29",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Meyer and Allen's Three-Component Commitment model, an employee who stays with an organization primarily because they recognize that leaving would incur immense financial disruption, loss of pension vesting, and lack of alternative job openings demonstrates:",
    "options": {
      "a": "Moral Commitment",
      "b": "Normative Commitment",
      "c": "Continuance Commitment",
      "d": "Affective Commitment"
    },
    "answer": "c",
    "explanation": "Continuance commitment is rooted in transactional sunk costs, side-bets, and perceived lack of employment alternatives ('I stay because I HAVE to / NEED to, not because I want to')."
  },
  {
    "id": "io_30",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Denise Rousseau pioneered the concept of the 'Psychological Contract'. What occurs when an employee experiences 'Psychological Contract Breach'?",
    "options": {
      "a": "An automatic 20% wage increase",
      "b": "The perception that the organization has failed to fulfill its unwritten promises and perceived mutual obligations, leading to cynicism, reduced commitment, and turnover intentions",
      "c": "Immediate promotion to executive rank",
      "d": "A criminal court trial"
    },
    "answer": "b",
    "explanation": "A psychological contract represents unwritten mutual expectations of trust and mutual contribution. When employees perceive breach (e.g. unkept promises of training or advancement), engagement and trust plummet."
  },
  {
    "id": "io_31",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Dennis Organ's taxonomy of Organizational Citizenship Behavior (OCB), the dimension of 'Sportsmanship' involves:",
    "options": {
      "a": "Tolerating inevitable workplace inconveniences, petty grievances, and impositions without chronic complaining, whining, or blowing minor issues out of proportion",
      "b": "Competing aggressively in company table tennis tournaments",
      "c": "Helping new colleagues learn software",
      "d": "Voluntarily attending weekend committee meetings"
    },
    "answer": "a",
    "explanation": "Sportsmanship in OCB is the willingness of an employee to maintain a positive attitude and endure minor workplace friction, inconveniences, and changes without excessive griping or complaining."
  },
  {
    "id": "io_32",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Which of the following is classified as a 'Counterproductive Work Behavior' (CWB) directed specifically against the organization itself (CWB-O)?",
    "options": {
      "a": "Intentional equipment sabotage, unauthorized resource diversion, and excessive absenteeism",
      "b": "Mentoring a junior management trainee",
      "c": "Interpersonal verbal harassment of a coworker",
      "d": "Arriving early to team strategy sessions"
    },
    "answer": "a",
    "explanation": "CWB is divided into CWB-I (interpersonal: bullying, incivility) and CWB-O (organizational: theft, property sabotage, deliberate slowdowns, misuse of assets)."
  },
  {
    "id": "io_33",
    "topic": "job_attitudes",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "What is the empirical relationship between Job Satisfaction and Employee Job Performance based on modern meta-analyses (e.g., Judge et al., 2001)?",
    "options": {
      "a": "Zero correlation (r = 0.00)",
      "b": "A moderate, statistically significant positive correlation (r ~ 0.30), with even stronger links in high-complexity managerial roles",
      "c": "A perfect deterministic relationship (r = 1.00)",
      "d": "A strong negative correlation (satisfied workers are lazy)"
    },
    "answer": "b",
    "explanation": "Judge et al. (2001) synthesized decades of research, concluding that satisfaction and performance correlate moderately (r = 0.30), with the relationship being reciprocal and moderated by job complexity."
  },
  {
    "id": "io_34",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Blake-Mouton Managerial Grid, which leadership style represents the optimal 'Team Management' orientation, scoring (9,9)?",
    "options": {
      "a": "Low concern for Production (1) and High concern for People (9) [Country Club]",
      "b": "High concern for Production (9) coupled with High concern for People (9)",
      "c": "Low concern for both Production and People (1,1) [Impoverished]",
      "d": "High concern for Production (9) and Low concern for People (1) [Authority-Compliance]"
    },
    "answer": "b",
    "explanation": "The (9,9) Team Management style integrates maximum dedication to production goals with deep mutual trust, respect, and commitment to employees' personal needs."
  },
  {
    "id": "io_35",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Robert House's Path-Goal Theory of leadership, which leadership style is most effective when subordinates face ambiguous, unstructured, novel tasks?",
    "options": {
      "a": "Directive Leadership (providing explicit schedules, standards, and rules)",
      "b": "Laissez-Faire Leadership",
      "c": "Supportive Leadership exclusively",
      "d": "Hands-off Delegation"
    },
    "answer": "a",
    "explanation": "When task demands are ambiguous or confusing, directive leadership clarifies the path to goal achievement, reducing subordinate role ambiguity and anxiety."
  },
  {
    "id": "io_36",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Vroom-Yetton-Jago Normative Decision Model, how do leaders determine the appropriate level of subordinate participation in decision-making?",
    "options": {
      "a": "By navigating a structured decision tree evaluating situational variables (e.g., decision significance, importance of commitment, leader information, goal congruence)",
      "b": "By always allowing subordinates to vote democratically on all issues",
      "c": "By using a coin flip",
      "d": "By consulting corporate astrologers"
    },
    "answer": "a",
    "explanation": "The Vroom-Yetton model uses a situational decision tree to recommend the optimal decision procedure ranging from Autocratic (A1, A2) to Consultative (C1, C2) and Group Consensus (G2)."
  },
  {
    "id": "io_37",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Robert Greenleaf formulated the concept of 'Servant Leadership'. What is the central philosophical orientation of a servant leader?",
    "options": {
      "a": "Executing hostile corporate buyouts",
      "b": "Refusing to accept a salary",
      "c": "Exercising absolute autocratic dominion over employees",
      "d": "Prioritizing the growth, well-being, and empowerment of followers, viewing leadership as a stewardship duty to serve others and the broader community"
    },
    "answer": "d",
    "explanation": "Servant leadership prioritizes the needs of colleagues, empowers followers, and focuses on ethical stewardship and human development ahead of personal power or organizational aggrandizement."
  },
  {
    "id": "io_38",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Bernard Bass's conceptualization of Transactional Leadership, what does 'Management by Exception - Active' (MBE-A) entail?",
    "options": {
      "a": "The leader provides transformational vision and charisma",
      "b": "The leader completely abdicates responsibility (Laissez-Faire)",
      "c": "The leader intervenes only after severe catastrophes have occurred (MBE-P)",
      "d": "The leader actively monitors follower performance, anticipates deviations from standards, and takes immediate corrective action before major errors occur"
    },
    "answer": "d",
    "explanation": "MBE-Active involves proactive vigilance: the leader actively tracks errors and enforces compliance before failures manifest, contrasting with MBE-Passive, which intervenes only retrospectively after standards are breached."
  },
  {
    "id": "io_39",
    "topic": "leadership_models",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Implicit Leadership Theories (ILTs) in cognitive organizational psychology suggest that employees evaluate leaders based on:",
    "options": {
      "a": "The leader's astrological horoscope",
      "b": "Internalized mental cognitive schemas and prototypes of what a typical, effective leader should look, act, and communicate like",
      "c": "An objective biometric cranial scan",
      "d": "The leader's physical height exclusively"
    },
    "answer": "b",
    "explanation": "Implicit Leadership Theory (Lord & Maher) posits that individuals hold pre-existing cognitive leadership prototypes (e.g., sensitivity, dynamism, tyranny); leaders who match these prototypes are perceived as more legitimate and effective."
  },
  {
    "id": "io_40",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Robert Karasek's Job Demand-Control (JDC) Model states that the most severe chronic job strain and psychological distress occur under which combination of conditions?",
    "options": {
      "a": "High psychological demands and Low decision latitude / autonomy (High Strain)",
      "b": "High psychological demands and High decision latitude (Active / Challenging)",
      "c": "Low psychological demands and High decision latitude (Low Strain)",
      "d": "Low psychological demands and Low decision latitude (Passive)"
    },
    "answer": "a",
    "explanation": "The 'High Strain' quadrant (high demands, pressures, and workload combined with low autonomy, control, and decision latitude) produces the highest risk of anxiety, depression, and cardiovascular illness."
  },
  {
    "id": "io_41",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "Arlie Hochschild coined the term 'Emotional Labor'. What is the difference between 'Surface Acting' and 'Deep Acting' in customer-facing roles?",
    "options": {
      "a": "Surface acting prevents burnout; deep acting causes immediate heart disease",
      "b": "Surface acting alters internal authentic feelings; deep acting feigns outward facial smiles",
      "c": "Deep acting is unethical and illegal",
      "d": "Surface acting merely feigns or simulates required emotional expressions without changing internal feelings; deep acting involves genuinely attempting to align one's internal feelings with required display rules"
    },
    "answer": "d",
    "explanation": "Surface acting (faking smiles while feeling irritated) creates emotional dissonance and is strongly predictive of burnout. Deep acting (reframing perspectives to genuinely feel empathy) reduces dissonance."
  },
  {
    "id": "io_42",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In the Competing Values Framework (CVF) of organizational culture developed by Cameron and Quinn, which culture type is externally focused and driven by intense market competition, achievement, and profitability?",
    "options": {
      "a": "Clan Culture",
      "b": "Adhocracy Culture",
      "c": "Market Culture",
      "d": "Hierarchy Culture"
    },
    "answer": "c",
    "explanation": "The Market culture (external focus, high stability/control) prioritizes competitiveness, goal achievement, market penetration, and financial bottom lines, contrasting with the collaborative Clan culture."
  },
  {
    "id": "io_43",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Johannes Siegrist's Effort-Reward Imbalance (ERI) Model of workplace stress, chronic strain manifests when an employee perceives:",
    "options": {
      "a": "Equal balance between effort and reward",
      "b": "High effort expended at work paired with low rewards (financial compensation, esteem, and career advancement prospects)",
      "c": "Zero managerial oversight",
      "d": "Low effort with excessive rewards"
    },
    "answer": "b",
    "explanation": "ERI posits that reciprocal social exchange is central to occupational well-being. When high effort meets low rewards (inadequate pay, lack of recognition, job insecurity), chronic autonomic arousal and strain result."
  },
  {
    "id": "io_44",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "What is the crucial conceptual difference between 'Organizational Climate' and 'Organizational Culture'?",
    "options": {
      "a": "They are completely interchangeable terms in organizational sociology",
      "b": "Climate refers to weather conditions outside the factory; culture refers to ethnic holidays",
      "c": "Climate is the shared, surface-level daily perceptions of policies, practices, and procedures; Culture represents the deeper, shared underlying values, beliefs, and assumptions that evolve historically",
      "d": "Culture can be changed in 24 hours; Climate takes 50 years to develop"
    },
    "answer": "c",
    "explanation": "Organizational Climate reflects current, conscious perceptions of 'how things are done around here' (temporal, psychological). Culture represents deeply anchored, historically rooted, unconscious basic assumptions (anthropological)."
  },
  {
    "id": "io_45",
    "topic": "culture_stress",
    "unit": "I/O Psychology",
    "part": "B",
    "question": "In Kurt Lewin's Force-Field Analysis of organizational change, successful transition requires:",
    "options": {
      "a": "Ignoring all resistance to change and firing dissenters",
      "b": "Conducting monthly physical fitness drills",
      "c": "Increasing Driving Forces (pressures toward change) and/or Decreasing Restraining Forces (barriers, fears, and resistance holding back change)",
      "d": "Eliminating all driving forces"
    },
    "answer": "c",
    "explanation": "Lewin viewed organizations as a dynamic balance between driving forces (facilitating change) and restraining forces (resisting change). Unfreezing requires reducing restraining forces or strengthening driving forces to shift equilibrium."
  }
];
