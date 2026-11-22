// data_concepts.js — Comprehensive Syllabus Database for CHRIST MSc Psychology (HRDM)
// Built specifically for Michelle Josephine E

window.SEED_CONCEPTS = {
  // ==========================================
  // PART A: BASIC PSYCHOLOGY (30 Marks)
  // ==========================================
  "history_schools": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "History & Schools of Psychology",
    "marks": 30,
    "concepts": [
      {
        "id": "c_struct_func",
        "title": "Structuralism vs. Functionalism",
        "summary": "Structuralism (Wundt 1879, Titchener) aimed to map the static elements of the conscious mind via trained introspection. Functionalism (William James, Dewey) was influenced by Darwin and investigated the adaptive purpose/function of consciousness in helping organisms survive.",
        "key_terms": ["Introspection", "Wilhelm Wundt (Leipzig)", "Edward Titchener", "William James", "Stream of Consciousness"],
        "trap": "Wundt opened the first experimental lab in 1879, but Titchener coined and popularized the term Structuralism in America.",
        "icon": "🏛️"
      },
      {
        "id": "c_gestalt",
        "title": "Gestalt Psychology & Insight",
        "summary": "Founded by Wertheimer, Koffka, and Köhler. Central premise: 'The whole is different from the sum of its parts'. Emphasizes holistic perception, the Phi phenomenon (illusion of movement), and insight learning (Köhler's chimpanzee Sultan solving problems through sudden aha moments).",
        "key_terms": ["Phi Phenomenon", "Prägnanz (Good Form)", "Insight Learning", "Wolfgang Köhler"],
        "trap": "Insight learning does NOT occur through trial-and-error (Thorndike); it involves sudden cognitive restructuring.",
        "icon": "🧩"
      },
      {
        "id": "c_behavior_cognition",
        "title": "Behaviorism to Cognitive Revolution",
        "summary": "Behaviorism (Watson, Skinner) rejected consciousness as subjective and focused purely on observable S-R relationships. The Cognitive Revolution (1950s: Miller, Neisser, Chomsky) restored internal mental processes to legitimacy using computer information-processing models.",
        "key_terms": ["John B. Watson", "B.F. Skinner", "Ulric Neisser", "Information Processing", "George Miller (7±2)"],
        "trap": "Watson founded behaviorism (1913 manifesto), but Skinner introduced radical behaviorism and operant conditioning.",
        "icon": "🔄"
      }
    ]
  },

  "biological_bases": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Biological Bases of Behavior",
    "marks": 30,
    "concepts": [
      {
        "id": "c_neuron_ap",
        "title": "Neurons & The Action Potential",
        "summary": "Resting potential sits at -70mV maintained by the Na+/K+ pump (3 Na+ pumped out for 2 K+ pumped in). Depolarization past threshold (~-55mV) triggers an all-or-none action potential spike (+30mV to +40mV). Myelin sheaths facilitate rapid saltatory conduction across Nodes of Ranvier.",
        "key_terms": ["Resting Potential (-70mV)", "Threshold (-55mV)", "All-or-None Law", "Nodes of Ranvier", "Saltatory Conduction"],
        "trap": "The action potential does NOT vary in amplitude based on stimulus intensity; stronger stimuli cause higher FREQUENCY of firing, not larger spikes.",
        "icon": "⚡"
      },
      {
        "id": "c_neurotransmitters",
        "title": "Key Neurotransmitters & Clinical Links",
        "summary": "ACh governs muscle action and memory (depleted in Alzheimer's). Dopamine regulates reward and motor control (excess = positive schizophrenia symptoms, deficit = Parkinson's). Serotonin regulates mood and sleep (depleted in MDD). GABA is the chief inhibitory NT (calms anxiety); Glutamate is chief excitatory NT.",
        "key_terms": ["Acetylcholine", "Dopamine", "Serotonin (5-HT)", "GABA (Inhibitory)", "Glutamate (Excitatory)"],
        "trap": "GABA is strictly INHIBITORY in the mature CNS, while Glutamate is EXCITATORY.",
        "icon": "🧪"
      },
      {
        "id": "c_brain_lobes",
        "title": "Cerebral Lobes & Hemispheric Specialization",
        "summary": "Frontal: executive functions, motor cortex, Broca's area (speech production). Parietal: somatosensory cortex (touch/pain/spatial). Occipital: visual cortex (V1). Temporal: auditory cortex, Wernicke's area (speech comprehension). The Thalamus relays all senses EXCEPT olfaction (smell).",
        "key_terms": ["Broca's Aphasia (Expressive)", "Wernicke's Aphasia (Receptive)", "Thalamus Relay", "Hypothalamus (4 Fs)", "Hippocampus"],
        "trap": "Olfactory sensory signals travel directly to the olfactory bulb and limbic system without passing through the thalamus.",
        "icon": "🧠"
      }
    ]
  },

  "sensation_perception": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Sensation and Perception",
    "marks": 30,
    "concepts": [
      {
        "id": "c_thresholds_weber",
        "title": "Thresholds, Weber's Law & Signal Detection",
        "summary": "Absolute threshold = detected 50% of the time. Difference threshold (JND) follows Weber's Law (ΔI / I = k): JND is a constant FRACTION of initial stimulus intensity. Signal Detection Theory (SDT) accounts for decision criteria (Beta) and sensitivity (d'), yielding 4 outcomes: Hit, Miss, False Alarm, Correct Rejection.",
        "key_terms": ["Weber's Law (ΔI/I = k)", "Fechner's Law", "Signal Detection Theory", "d' (Sensitivity)", "Beta (Criterion)"],
        "trap": "Weber's law states that the ratio of the increment threshold to the background intensity is CONSTANT, not the absolute change.",
        "icon": "👁️"
      },
      {
        "id": "c_gestalt_depth",
        "title": "Gestalt Principles & Depth Cues",
        "summary": "Perceptual grouping rules: Proximity, Similarity, Continuity, Closure, and Common Fate. Depth perception utilizes Monocular cues (linear perspective, texture gradient, motion parallax, occlusion) and Binocular cues (retinal disparity, convergence).",
        "key_terms": ["Closure", "Figure-Ground", "Retinal Disparity", "Motion Parallax", "Linear Perspective"],
        "trap": "Motion parallax is a MONOCULAR depth cue, not binocular.",
        "icon": "🔭"
      },
      {
        "id": "c_color_vision",
        "title": "Trichromatic vs. Opponent-Process Theory",
        "summary": "Young-Helmholtz Trichromatic theory posits 3 cone types (Red, Green, Blue) at the retinal stage. Hering's Opponent-Process theory explains post-retinal/ganglion processing via antagonistic pairs: Red-Green, Blue-Yellow, and Black-White, which cleanly accounts for negative afterimages.",
        "key_terms": ["Trichromatic (Young-Helmholtz)", "Opponent-Process (Ewald Hering)", "Negative Afterimages", "Cones (Color/Photopic)", "Rods (Scotopic/Night)"],
        "trap": "Trichromatic operates at receptor level (cones in retina); Opponent-process operates downstream in ganglion cells, LGN, and cortex.",
        "icon": "🎨"
      }
    ]
  },

  "learning_theories": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Conditioning and Learning",
    "marks": 30,
    "concepts": [
      {
        "id": "c_classical_cond",
        "title": "Classical Conditioning (Pavlov)",
        "summary": "Pairing a neutral Conditioned Stimulus (CS: Bell) with an Unconditioned Stimulus (UCS: Food) that innately triggers an Unconditioned Response (UCR: Salivation). Eventually, CS alone triggers Conditioned Response (CR). Extinction occurs if CS presented repeatedly without UCS. Spontaneous recovery is the sudden reappearance of CR after a rest period.",
        "key_terms": ["UCS & UCR", "CS & CR", "Extinction", "Spontaneous Recovery", "Stimulus Generalization (Little Albert)"],
        "trap": "In classical conditioning, extinction is an active suppression/new learning process, NOT simply the erasure of the original association.",
        "icon": "🔔"
      },
      {
        "id": "c_operant_cond",
        "title": "Operant Conditioning & Reinforcement Schedules",
        "summary": "Skinner's operant conditioning: Reinforcement increases behavior (Positive = add good; Negative = remove aversive). Punishment decreases behavior (Positive = add aversive; Negative = remove pleasant). Schedules: Variable Ratio (VR: slot machines) produces the highest response rates and highest resistance to extinction.",
        "key_terms": ["Positive Reinforcement", "Negative Reinforcement (NOT punishment!)", "Fixed Ratio (FR)", "Variable Ratio (VR - highest resistance)", "Fixed Interval (FI - scalloped)"],
        "trap": "Negative reinforcement is NOT punishment. Negative reinforcement INCREASES a behavior by removing an unpleasant stimulus (e.g., buckling seatbelt to stop buzzing).",
        "icon": "🐀"
      },
      {
        "id": "c_observational_learning",
        "title": "Social Learning & Observational Modeling",
        "summary": "Bandura's Bobo Doll study demonstrated that learning occurs vicariously through observation and modeling without direct reinforcement. Four necessary cognitive processes: Attention → Retention → Motor Reproduction → Motivation.",
        "key_terms": ["Albert Bandura", "Bobo Doll Experiment", "Vicarious Reinforcement", "Self-Efficacy", "Modeling Steps (ARRM)"],
        "trap": "Observational learning requires internal cognitive representation; it proves learning can occur without immediate behavioral performance.",
        "icon": "👥"
      }
    ]
  },

  "memory_forgetting": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Memory and Forgetting",
    "marks": 30,
    "concepts": [
      {
        "id": "c_multi_store_wm",
        "title": "Atkinson-Shiffrin Model & Baddeley's Working Memory",
        "summary": "Atkinson-Shiffrin: Sensory Memory (iconic/echoic) → Short-Term Memory (7±2 items, 20-30s) → Long-Term Memory. Baddeley & Hitch replaced passive STM with dynamic Working Memory: Central Executive, Phonological Loop (verbal), Visuospatial Sketchpad (visual), and Episodic Buffer (multimodal binding with LTM).",
        "key_terms": ["Modal Model", "Iconic (<1s) & Echoic (3-4s)", "Phonological Loop", "Visuospatial Sketchpad", "Central Executive", "Episodic Buffer"],
        "trap": "The Episodic Buffer was added to Baddeley's model later in 2000 to explain how working memory integrates information from different sensory modalities with long-term memory.",
        "icon": "💾"
      },
      {
        "id": "c_interference_forgetting",
        "title": "Interference Theory & Forgetting Curves",
        "summary": "Ebbinghaus showed forgetting is steepest in the first 24-48 hours. Proactive interference occurs when OLD information hinders recall of NEW information (e.g., typing your old password). Retroactive interference occurs when NEW information disrupts retrieval of OLD information (e.g., learning new phone number causes you to forget old one).",
        "key_terms": ["Proactive Interference (Old disrupts New)", "Retroactive Interference (New disrupts Old)", "Ebbinghaus Forgetting Curve", "Decay vs. Retrieval Failure"],
        "trap": "Memory mnemonic: PORN (Proactive = Old interferes; Retroactive = New interferes).",
        "icon": "📉"
      },
      {
        "id": "c_ltm_systems",
        "title": "Declarative vs. Non-Declarative LTM",
        "summary": "Explicit/Declarative (conscious recall): Semantic (general world facts) and Episodic (autobiographical experiences). Implicit/Non-declarative (unconscious): Procedural (motor skills, riding a bike), Priming, and Classical Conditioning. Patient H.M. lost explicit LTM (anterograde amnesia) but retained procedural learning.",
        "key_terms": ["Episodic Memory (Tulving)", "Semantic Memory", "Procedural Memory (Basal Ganglia/Cerebellum)", "Anterograde Amnesia", "Patient H.M."],
        "trap": "Damage to hippocampus abolishes the consolidation of new explicit memories, but leaves procedural memory (e.g., mirror tracing) intact.",
        "icon": "🗄️"
      }
    ]
  },

  "cognition_intelligence": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Cognition, Language & Intelligence",
    "marks": 30,
    "concepts": [
      {
        "id": "c_heuristics_biases",
        "title": "Problem Solving Heuristics & Cognitive Biases",
        "summary": "Algorithms guarantee solutions through exhaustive steps; Heuristics are fast mental shortcuts prone to systematic error. Availability Heuristic: estimating probability based on ease of recall. Representativeness Heuristic: judging probability by prototype resemblance. Anchoring: over-relying on initial numbers.",
        "key_terms": ["Availability Heuristic", "Representativeness Heuristic", "Anchoring Bias", "Functional Fixedness", "Mental Set"],
        "trap": "Functional fixedness is the inability to see that an object can symbolize or perform a function other than its customary one.",
        "icon": "💡"
      },
      {
        "id": "c_intelligence_theories",
        "title": "Major Theories of Intelligence",
        "summary": "Spearman: General intelligence ('g') and specific ('s') factors. Cattell & Horn: Fluid intelligence (Gf - novel problem solving, declines with age) vs. Crystallized intelligence (Gc - acquired facts/vocabulary, increases with age). Sternberg's Triarchic Theory: Analytical, Creative, Practical. Gardner: 8 Multiple Intelligences.",
        "key_terms": ["Spearman's g-factor", "Fluid vs. Crystallized (Cattell-Horn)", "Sternberg Triarchic (CAP)", "Gardner Multiple Intelligences"],
        "trap": "Fluid intelligence peaks in early adulthood (around age 20-25) and declines, whereas crystallized intelligence can continue to rise well into late adulthood.",
        "icon": "🎯"
      }
    ]
  },

  "motivation_emotion": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Motivation and Emotion",
    "marks": 30,
    "concepts": [
      {
        "id": "c_theories_emotion",
        "title": "Classic Theories of Emotion",
        "summary": "James-Lange: Physiological arousal precedes and causes emotional experience ('We tremble, therefore we feel afraid'). Cannon-Bard: Physiological arousal and emotional experience occur simultaneously and independently via thalamus. Schachter-Singer Two-Factor: Physiological arousal + cognitive appraisal/label based on environmental context determines the specific emotion.",
        "key_terms": ["James-Lange (Arousal → Emotion)", "Cannon-Bard (Simultaneous)", "Schachter-Singer Two-Factor (Arousal + Cognitive Label)", "Yerkes-Dodson Law"],
        "trap": "Schachter-Singer requires BOTH general physiological arousal AND cognitive context-based appraisal to label the specific emotion.",
        "icon": "❤️"
      },
      {
        "id": "c_maslow_drive",
        "title": "Drive-Reduction & Maslow's Hierarchy",
        "summary": "Hull's Drive-Reduction: physiological deficits disrupt homeostasis, producing an internal tension state (drive) that motivates corrective behavior. Maslow's Hierarchy: Physiological → Safety → Belongingness/Love → Esteem → Self-Actualization. Lower deficiency needs must be substantially met before higher growth needs emerge.",
        "key_terms": ["Clark Hull (Drive-Reduction)", "Homeostasis", "Maslow Hierarchy", "Self-Actualization", "Deficiency vs. Growth Needs"],
        "trap": "In Yerkes-Dodson Law, optimal arousal for complex tasks is LOWER than for simple, well-learned tasks.",
        "icon": "🧗"
      }
    ]
  },

  "developmental_psych": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Developmental Psychology",
    "marks": 30,
    "concepts": [
      {
        "id": "c_piaget_stages",
        "title": "Piaget's Cognitive Development Stages",
        "summary": "Sensorimotor (0-2y: object permanence, circular reactions) → Preoperational (2-7y: symbolic play, egocentrism, animism, lack of conservation) → Concrete Operational (7-11y: conservation mastered, reversibility, seriation) → Formal Operational (12y+: hypothetical-deductive reasoning, abstract thought).",
        "key_terms": ["Object Permanence", "Centration", "Conservation", "Reversibility", "Assimilation vs. Accommodation"],
        "trap": "Conservation of volume/mass is NOT present in the Preoperational stage; it is the defining milestone achieved in Concrete Operational.",
        "icon": "🌱"
      },
      {
        "id": "c_erikson_kohlberg",
        "title": "Erikson's Psychosocial & Kohlberg's Moral Stages",
        "summary": "Erikson (8 crises): Trust vs. Mistrust (Infancy) to Integrity vs. Despair (Old Age). Identity vs. Role Confusion dominates adolescence. Kohlberg (Moral reasoning): Preconventional (punishment/reward) → Conventional (law and order, social approval) → Postconventional (social contracts, universal ethical principles).",
        "key_terms": ["Identity vs. Role Confusion", "Generativity vs. Stagnation", "Preconventional/Conventional/Postconventional", "Carol Gilligan's Critique"],
        "trap": "Kohlberg's levels evaluate the REASONING behind a moral decision, NOT whether the action itself is right or wrong.",
        "icon": "⚖️"
      }
    ]
  },

  "personality_theories": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Personality Theories",
    "marks": 30,
    "concepts": [
      {
        "id": "c_freud_defense",
        "title": "Freudian Psychodynamics & Defense Mechanisms",
        "summary": "Structural model: Id (pleasure principle, unconscious), Ego (reality principle), Superego (morality principle). Ego manages intrapsychic conflict via defense mechanisms: Repression (unconscious forgetting), Projection (attributing own unwanted impulses to others), Reaction Formation (expressing exact opposite behavior), Sublimation (channeling impulses into socially valued achievements).",
        "key_terms": ["Id, Ego, Superego", "Pleasure vs. Reality Principle", "Repression", "Projection", "Sublimation (Mature Defense)"],
        "trap": "Sublimation and humor are classified as mature defense mechanisms, whereas projection and denial are primitive/neurotic.",
        "icon": "🎭"
      },
      {
        "id": "c_big_five_traits",
        "title": "The Big Five (OCEAN) & Trait Perspectives",
        "summary": "Costa & McCrae's Five-Factor Model: Openness (imagination/curiosity), Conscientiousness (organization/dependability), Extraversion (sociability/assertiveness), Agreeableness (cooperativeness/trust), Neuroticism (emotional instability/anxiety). Allport: Cardinal (dominant), Central (consistent), and Secondary (situational) traits.",
        "key_terms": ["OCEAN Acronym", "Conscientiousness (strongest predictor of job performance)", "Neuroticism", "Allport Cardinal/Central Traits", "Cattell 16PF"],
        "trap": "Across meta-analyses in I/O psychology, CONSCIENTIOUSNESS is the single strongest and most consistent personality predictor of overall job performance across all occupations.",
        "icon": "📊"
      }
    ]
  },

  "social_psychology": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Social Psychology & Influence",
    "marks": 30,
    "concepts": [
      {
        "id": "c_social_influence",
        "title": "Conformity, Obedience & Group Dynamics",
        "summary": "Asch: Conformity driven by normative (desire to fit in) and informational (desire to be correct) influence. Milgram: 65% obeyed authority delivering 450V shocks. Zimbardo: Deindividuation and role adoption. Janis: Groupthink occurs in cohesive groups seeking consensus over critical evaluation.",
        "key_terms": ["Asch Line Study", "Milgram Obedience (65%)", "Normative vs. Informational", "Groupthink (Janis)", "Social Loafing"],
        "trap": "Social facilitation IMPROVES performance on simple or well-practiced tasks, but IMPAIRS performance (social inhibition) on complex or novel tasks in the presence of an audience.",
        "icon": "👥"
      },
      {
        "id": "c_attributions_dissonance",
        "title": "Attribution Biases & Cognitive Dissonance",
        "summary": "Fundamental Attribution Error (FAE): Overestimating internal personality factors and underestimating situational factors when judging others. Festinger's Cognitive Dissonance: Psychological tension when actions contradict beliefs, resolved by altering beliefs, rationalizing, or modifying behavior.",
        "key_terms": ["Fundamental Attribution Error", "Actor-Observer Bias", "Self-Serving Bias", "Cognitive Dissonance (Festinger & Carlsmith $1 vs $20)"],
        "trap": "In Festinger & Carlsmith's study, participants paid only $1 experienced HIGHER dissonance and changed their attitudes more than those paid $20 (insufficient external justification).",
        "icon": "🪞"
      }
    ]
  },

  "abnormal_psychology": {
    "unit": "Basic Psychology",
    "part": "A",
    "title": "Abnormal Psychology & DSM-5",
    "marks": 30,
    "concepts": [
      {
        "id": "c_anxiety_mood",
        "title": "Mood & Anxiety Disorders",
        "summary": "MDD requires depressed mood or anhedonia for at least 2 weeks plus neurovegetative symptoms. Bipolar I requires at least one full manic episode; Bipolar II requires hypomanic episodes + major depression without full mania. Panic disorder involves recurrent unexpected panic attacks. OCD pairs intrusive obsessions with ritualistic anxiety-reducing compulsions.",
        "key_terms": ["Major Depressive Disorder (2+ weeks)", "Bipolar I (Mania) vs. Bipolar II (Hypomania)", "Panic Disorder", "OCD (Obsessions vs. Compulsions)"],
        "trap": "A diagnosis of Bipolar I does NOT require a depressive episode to have occurred (though common); a single manic episode qualifies.",
        "icon": "🌧️"
      },
      {
        "id": "c_schizo_personality",
        "title": "Schizophrenia Spectrum & Personality Clusters",
        "summary": "Schizophrenia (>=6 months): Positive symptoms (hallucinations, delusions) driven by dopamine hyperactivity in mesolimbic pathway; Negative symptoms (flat affect, avolition) driven by mesocortical hypodopaminergic activity. Personality Clusters: A (Odd/Eccentric: Schizoid, Paranoid), B (Dramatic: Antisocial, Borderline, Narcissistic), C (Anxious: Avoidant, Dependent, OCPD).",
        "key_terms": ["Positive vs. Negative Symptoms", "Mesolimbic (Excess DA)", "Cluster A, B, and C Personality Disorders", "Borderline Personality Disorder"],
        "trap": "OCD is an anxiety/OC-related disorder with egodystonic intrusive thoughts, whereas OCPD is a Cluster C personality disorder characterized by egosyntonic pervasive perfectionism.",
        "icon": "🧩"
      }
    ]
  },

  // ==========================================
  // PART A: RESEARCH APTITUDE (15 Marks)
  // ==========================================
  "research_designs": {
    "unit": "Research Aptitude",
    "part": "A",
    "title": "Research Designs & Scientific Method",
    "marks": 15,
    "concepts": [
      {
        "id": "c_exp_designs",
        "title": "True Experimental vs. Quasi-Experimental",
        "summary": "True experimental designs manipulate an IV, include a control group, and rely on RANDOM ASSIGNMENT to establish definitive cause-and-effect causality. Quasi-experimental designs study pre-existing intact groups (e.g., comparing departments or genders) and lack random assignment, limiting causal certainty.",
        "key_terms": ["Random Assignment", "Internal Validity", "Causality", "Quasi-Experiment (No Random Assignment)", "Pre-test Post-test"],
        "trap": "Random SAMPLING ensures external validity (generalizability); Random ASSIGNMENT ensures internal validity (causal inference). Do not confuse them!",
        "icon": "🔬"
      },
      {
        "id": "c_between_within",
        "title": "Between-Subjects vs. Within-Subjects",
        "summary": "Between-subjects assigns distinct participants to each condition. Within-subjects (repeated measures) exposes the same participants to all conditions, reducing error variance due to individual differences but introducing order/practice effects that require counterbalancing (Latin Square).",
        "key_terms": ["Between-Subjects", "Within-Subjects (Repeated Measures)", "Order Effects", "Counterbalancing (Latin Square)"],
        "trap": "Within-subjects designs have higher statistical power because each participant serves as their own control, removing between-person variance.",
        "icon": "🔄"
      }
    ]
  },

  "variables_hypotheses": {
    "unit": "Research Aptitude",
    "part": "A",
    "title": "Variables, Hypotheses & Errors",
    "marks": 15,
    "concepts": [
      {
        "id": "c_var_types",
        "title": "Independent, Dependent, Mediators & Moderators",
        "summary": "IV = manipulated cause. DV = measured outcome. Extraneous = uncontrolled nuisance variables. Confound = extraneous variable covarying with IV. Mediator = explains the mechanism/how IV affects DV (IV → M → DV). Moderator = affects the direction or strength of the IV-DV relationship (e.g., gender, stress level).",
        "key_terms": ["Independent Variable (IV)", "Dependent Variable (DV)", "Confounder", "Mediator (Mechanism/Process)", "Moderator (Boundary Condition)"],
        "trap": "A mediator answers WHY or HOW an effect occurs; a moderator answers WHEN or FOR WHOM the effect holds.",
        "icon": "📐"
      },
      {
        "id": "c_type1_type2",
        "title": "Type I and Type II Errors & Statistical Power",
        "summary": "Type I Error (Alpha, α): False Positive — rejecting a true null hypothesis (saying an effect exists when it doesn't; p < 0.05). Type II Error (Beta, β): False Negative — failing to reject a false null hypothesis (missing a real effect). Statistical Power (1 - β) is the probability of correctly detecting a real effect.",
        "key_terms": ["Null Hypothesis (H0)", "Type I Error (α - False Positive)", "Type II Error (β - False Negative)", "Statistical Power (1 - β)"],
        "trap": "Decreasing alpha from 0.05 to 0.01 reduces the chance of a Type I error, but INCREASES the probability of a Type II error.",
        "icon": "⚠️"
      }
    ]
  },

  "sampling_techniques": {
    "unit": "Research Aptitude",
    "part": "A",
    "title": "Sampling Techniques",
    "marks": 15,
    "concepts": [
      {
        "id": "c_prob_sampling",
        "title": "Probability Sampling Methods",
        "summary": "Every unit has a known, non-zero chance of selection. Simple Random: lottery/RNG. Systematic: select every k-th item (k = N/n). Stratified Random: divide population into homogeneous strata (e.g., gender, job grade) and randomly sample within each (preserves subgroup proportions). Cluster: randomly select entire natural heterogeneous groups (e.g., hospitals, schools).",
        "key_terms": ["Simple Random", "Systematic (k-th interval)", "Stratified (Homogeneous strata)", "Cluster (Heterogeneous clusters)"],
        "trap": "In Stratified sampling, population is divided into HOMOGENEOUS strata; in Cluster sampling, clusters are internally HETEROGENEOUS representations of the population.",
        "icon": "🎲"
      },
      {
        "id": "c_nonprob_sampling",
        "title": "Non-Probability Sampling Methods",
        "summary": "Convenience: sampling who is nearby. Purposive/Judgmental: selecting participants based on researcher's specific criteria. Quota: filling non-random demographic quotas. Snowball: existing participants recruit new contacts (essential for hard-to-reach, stigmatized populations).",
        "key_terms": ["Convenience Sampling", "Purposive Sampling", "Quota Sampling", "Snowball Sampling (Chain Referral)"],
        "trap": "Quota sampling mirrors stratified sampling demographics, but uses NON-RANDOM convenience selection to fill quotas.",
        "icon": "❄️"
      }
    ]
  },

  "psychometrics": {
    "unit": "Research Aptitude",
    "part": "A",
    "title": "Reliability, Validity & Measurement",
    "marks": 15,
    "concepts": [
      {
        "id": "c_scales_noir",
        "title": "Scales of Measurement (NOIR)",
        "summary": "Nominal: categorical labels, no order (gender, blood group). Mode only. Ordinal: rank order, unequal intervals (Likert, race finish). Median valid. Interval: equal intervals, NO true absolute zero (Celsius, IQ). Mean/SD valid, ratios invalid. Ratio: equal intervals WITH absolute true zero (reaction time, weight, salary). All mathematical operations valid.",
        "key_terms": ["Nominal (Categorical)", "Ordinal (Ranks)", "Interval (No True Zero)", "Ratio (Absolute Zero - Stevens 1946)"],
        "trap": "IQ scores are INTERVAL scale because an IQ score of 0 does not mean 'zero intelligence', and 140 is not twice as smart as 70.",
        "icon": "📏"
      },
      {
        "id": "c_reliability_validity",
        "title": "Reliability & Validity Metrics",
        "summary": "Reliability = consistency (Test-retest, Split-half with Spearman-Brown, Cronbach's alpha >= 0.70). Validity = accuracy (measures what it claims). Content validity: domain coverage. Criterion validity: Concurrent (now) and Predictive (future performance). Construct validity: Convergent (correlates with similar constructs) and Discriminant (does not correlate with unrelated constructs).",
        "key_terms": ["Cronbach's Alpha (Internal Consistency)", "Test-Retest", "Predictive Validity", "Construct Validity", "Convergent vs. Discriminant"],
        "trap": "A test can be completely reliable (highly consistent) without being valid (accurate). But a test CANNOT be valid without being reliable.",
        "icon": "🎯"
      }
    ]
  },

  "statistics": {
    "unit": "Research Aptitude",
    "part": "A",
    "title": "Descriptive & Inferential Statistics",
    "marks": 15,
    "concepts": [
      {
        "id": "c_skew_normal",
        "title": "Normal Distribution & Skewness",
        "summary": "Normal Curve: Mean = Median = Mode; 68.26% within ±1 SD, 95.44% within ±2 SD, 99.74% within ±3 SD. Positive Skew (tail to right): Mode < Median < Mean (outliers pull mean upward). Negative Skew (tail to left): Mean < Median < Mode (outliers pull mean downward). Median is best central tendency for skewed data.",
        "key_terms": ["Empirical Rule (68-95-99.7)", "Positive Skew (Mode < Med < Mean)", "Negative Skew (Mean < Med < Mode)", "Z-score = (X - μ) / σ"],
        "trap": "In any skewed distribution, the MEAN is pulled furthest toward the elongated tail because it is sensitive to extreme values.",
        "icon": "📊"
      },
      {
        "id": "c_parametric_tests",
        "title": "Parametric vs. Non-Parametric Hypothesis Tests",
        "summary": "Parametric (requires normality & interval/ratio data): Independent t-test (2 unrelated groups), Paired t-test (repeated measures), One-Way ANOVA (F-test, >=3 groups to avoid compounding Type I error), Pearson's r. Non-parametric equivalents: Mann-Whitney U (vs. Indep t), Wilcoxon (vs. Paired t), Kruskal-Wallis (vs. ANOVA), Spearman rho, Chi-Square (categorical data).",
        "key_terms": ["Independent t-test", "One-Way ANOVA (F-statistic)", "Mann-Whitney U Test", "Chi-Square Test of Independence", "Pearson r vs. Spearman rho"],
        "trap": "Running multiple pairwise t-tests instead of an ANOVA exponentially inflates the experiment-wise Type I error rate (1 - (1 - α)^k).",
        "icon": "🧮"
      }
    ]
  },

  // ==========================================
  // PART A: ETHICAL CONCERNS (15 Marks)
  // ==========================================
  "apa_principles": {
    "unit": "Ethical Concerns",
    "part": "A",
    "title": "APA 5 General Ethical Principles",
    "marks": 15,
    "concepts": [
      {
        "id": "c_apa_5_principles",
        "title": "The 5 Aspirational APA Principles",
        "summary": "Principle A: Beneficence and Nonmaleficence (strive to do good and do no harm). Principle B: Fidelity and Responsibility (trust, professional integrity, manage conflicts of interest). Principle C: Integrity (honesty, truthfulness, no fraud). Principle D: Justice (fair access to psychology's benefits). Principle E: Respect for People's Rights and Dignity (autonomy, privacy, cultural respect).",
        "key_terms": ["Beneficence & Nonmaleficence", "Fidelity & Responsibility", "Integrity", "Justice", "Respect for Rights & Dignity"],
        "trap": "The General Principles are ASPIRATIONAL goals to guide ethical decisions; the Ethical Standards are mandatory, enforceable rules.",
        "icon": "📜"
      }
    ]
  },

  "consent_deception": {
    "unit": "Ethical Concerns",
    "part": "A",
    "title": "Informed Consent, Deception & Debriefing",
    "marks": 15,
    "concepts": [
      {
        "id": "c_consent_deception_rules",
        "title": "Standard 8: Consent, Deception & Debriefing",
        "summary": "Informed consent must detail study purpose, right to withdraw without penalty, potential risks, and confidentiality limits. Minors require parental consent PLUS child assent. Deception is permitted ONLY if scientifically justified AND no alternatives exist. Psychologists NEVER deceive participants about physical pain or severe emotional distress. Prompt debriefing is mandatory.",
        "key_terms": ["Informed Consent (8.02)", "Assent (Minors)", "Standard 8.07 (Deception Restrictions)", "Mandatory Debriefing (8.08)"],
        "trap": "Absolute APA rule: Psychologists can NEVER deceive participants about research that is expected to cause physical pain or severe emotional distress.",
        "icon": "✍️"
      }
    ]
  },

  "confidentiality_integrity": {
    "unit": "Ethical Concerns",
    "part": "A",
    "title": "Confidentiality & Professional Integrity",
    "marks": 15,
    "concepts": [
      {
        "id": "c_tarasoff_confidentiality",
        "title": "Limits of Confidentiality & Duty to Warn",
        "summary": "Confidentiality is protected but not absolute. Major exceptions: (1) Imminent risk of serious bodily harm to self or others (Tarasoff ruling: Duty to Warn/Protect intended victim), (2) Suspected child or elder abuse (mandatory reporting), (3) Legitimate court subpoena. Multiple relationships must be avoided if objectivity is compromised.",
        "key_terms": ["Tarasoff v. Regents (Duty to Protect)", "Child/Elder Abuse Reporting", "Dual/Multiple Relationships (3.05)", "Privileged Communication"],
        "trap": "Under the Tarasoff ruling, the therapist's duty is not just to maintain client secrecy, but an active duty to warn and protect an identifiable endangered third party.",
        "icon": "🛡️"
      }
    ]
  },

  // ==========================================
  // PART A: GENERAL APTITUDE (15 Marks)
  // ==========================================
  "quantitative": {
    "unit": "General Aptitude",
    "part": "A",
    "title": "Quantitative Aptitude Formulas",
    "marks": 15,
    "concepts": [
      {
        "id": "c_math_formulas",
        "title": "Core Quantitative Formulas",
        "summary": "Percentage change = (New - Old)/Old × 100. Combined work formula: If A completes in x days and B in y days, together they take (xy)/(x+y) days. Average speed for same distance at speeds a and b = 2ab / (a+b). Speed conversion: multiply km/h by 5/18 to get m/s.",
        "key_terms": ["Percentage Formula", "Work: xy/(x+y)", "Harmonic Average Speed: 2ab/(a+b)", "km/h to m/s (× 5/18)"],
        "trap": "Average speed over equal distances is the HARMONIC mean (2ab/(a+b)), NEVER the simple arithmetic average ((a+b)/2).",
        "icon": "🔢"
      }
    ]
  },

  "logical_reasoning": {
    "unit": "General Aptitude",
    "part": "A",
    "title": "Logical Reasoning Rules",
    "marks": 15,
    "concepts": [
      {
        "id": "c_logic_rules",
        "title": "Syllogisms & Direction Sense",
        "summary": "Syllogisms: Use Venn diagram circles. Universal affirmative (All A are B) does NOT imply All B are A. Direction sense: Compass positions (N, E, S, W). Two consecutive left turns = 180° opposite direction. Shortest path distance calculated via Pythagoras theorem (a² + b² = c²).",
        "key_terms": ["Syllogisms (Venn Diagrams)", "Pythagorean Displacement", "Letter Coding (EJOTY: 5,10,15,20,25)", "Blood Relation Generations"],
        "trap": "In syllogisms, 'Some A are B' means at least one A is B; it does NOT legally validate that 'Some A are NOT B' unless explicitly proven.",
        "icon": "🧭"
      }
    ]
  },

  "verbal_ability": {
    "unit": "General Aptitude",
    "part": "A",
    "title": "Verbal Ability & Comprehension",
    "marks": 15,
    "concepts": [
      {
        "id": "c_verbal_rules",
        "title": "Grammar Rules & Reading Inferences",
        "summary": "Subject-verb agreement: Subject separated by prepositional phrases ('The manager along with the employees IS arriving') remains singular. Conditionals: 'If I WERE you' (subjunctive mood). Reading comprehension: distinguish between direct stated facts and contextual inferences.",
        "key_terms": ["Subject-Verb Agreement", "Subjunctive Mood (were)", "Parallelism", "Reading Inferences"],
        "trap": "Phrases like 'accompanied by', 'as well as', and 'in addition to' do not compound the grammatical subject; the verb agrees solely with the initial subject.",
        "icon": "📖"
      }
    ]
  },

  // ==========================================
  // PART A: CURRENT AFFAIRS & GK (15 Marks)
  // ==========================================
  "mental_health_policies": {
    "unit": "Current Affairs & GK",
    "part": "A",
    "title": "Mental Health Initiatives & GK",
    "marks": 15,
    "concepts": [
      {
        "id": "c_tele_manas_act",
        "title": "Indian Mental Health Frameworks",
        "summary": "Mental Healthcare Act, 2017: Decriminalized suicide attempts under Section 309 IPC, prohibited electroconvulsive therapy (ECT) without muscle relaxants and anesthesia, and introduced Advance Directives. Tele-MANAS: 24/7 National tele-mental health helpline launched in 2022. World Mental Health Day: October 10.",
        "key_terms": ["Mental Healthcare Act 2017", "Tele-MANAS Helpline (14416)", "Advance Directives", "World Mental Health Day (Oct 10)"],
        "trap": "The Mental Healthcare Act 2017 legally introduced Advance Directives in India, empowering individuals to designate how they wish to be treated if incapacitation occurs.",
        "icon": "🇮🇳"
      }
    ]
  },

  // ==========================================
  // PART B: HUMAN RESOURCE MANAGEMENT (15 Marks)
  // ==========================================
  "hr_planning_job_analysis": {
    "unit": "Human Resource Management",
    "part": "B",
    "title": "HRP & Job Analysis",
    "marks": 15,
    "concepts": [
      {
        "id": "c_jd_vs_js",
        "title": "Job Description (JD) vs. Job Specification (JS)",
        "summary": "Job Analysis yields two distinct documents. Job Description (JD): Details the job itself (job title, duties, tasks, reporting structure, working conditions). Job Specification (JS): Details the human requirements needed to perform the job (qualifications, skills, abilities, experience, physical traits - KSAOs).",
        "key_terms": ["Job Analysis", "Job Description (The Job / Tasks)", "Job Specification (The Person / KSAOs)", "Competency Mapping"],
        "trap": "Job Description = TASKS and DUTIES. Job Specification = HUMAN QUALIFICATIONS and SKILLS. Do not invert them in MCQs!",
        "icon": "📋"
      },
      {
        "id": "c_job_design",
        "title": "Job Design: Enlargement vs. Enrichment",
        "summary": "Job Enlargement (Horizontal loading): adding more tasks at the same complexity level to reduce monotony. Job Enrichment (Vertical loading): Herzberg's approach of adding responsibility, autonomy, decision-making authority, and opportunities for growth. Job Rotation: moving workers between jobs.",
        "key_terms": ["Job Enlargement (Horizontal Loading)", "Job Enrichment (Vertical Loading / Herzberg)", "Job Rotation"],
        "trap": "Job Enlargement is horizontal (more of similar tasks); Job Enrichment is vertical (higher authority and autonomy).",
        "icon": "🔄"
      }
    ]
  },

  "talent_acquisition": {
    "unit": "Human Resource Management",
    "part": "B",
    "title": "Recruitment & Selection Techniques",
    "marks": 15,
    "concepts": [
      {
        "id": "c_interview_techniques",
        "title": "Structured vs. Behavioral Interviews",
        "summary": "Unstructured interviews suffer from poor validity and halo/horns biases. Structured interviews use standardized rubrics and have high predictive validity. Behavioral Description Interviews (BDI) use past behavior to predict future behavior evaluated via STAR (Situation, Task, Action, Result). Situational interviews pose hypothetical future scenarios.",
        "key_terms": ["Structured Interview", "Behavioral Interview (STAR Model)", "Situational Interview", "Assessment Centres"],
        "trap": "Past behavioral interviews (BDI) consistently demonstrate higher criterion-related validity than unstructured casual interviews.",
        "icon": "🤝"
      },
      {
        "id": "c_selection_biases",
        "title": "Interviewer Rater Biases",
        "summary": "Halo Effect: one favorable characteristic (e.g., pleasant appearance) causes the rater to judge all traits positively. Horns Effect: one negative trait contaminates entire assessment. Contrast Effect: evaluation distorted by comparison to the preceding applicant. Similar-to-me Effect: favoring candidates who share demographic or cultural backgrounds.",
        "key_terms": ["Halo Effect", "Horns Effect", "Contrast Effect", "Similar-to-me Bias", "Central Tendency"],
        "trap": "Halo effect occurs when a single positive attribute inappropriately generalizes to inflate ratings on completely unrelated dimensions.",
        "icon": "👁️"
      }
    ]
  },

  "training_development": {
    "unit": "Human Resource Management",
    "part": "B",
    "title": "Training Models & Kirkpatrick Evaluation",
    "marks": 15,
    "concepts": [
      {
        "id": "c_kirkpatrick_levels",
        "title": "Kirkpatrick's 4-Level Evaluation Model",
        "summary": "Level 1 (Reaction): Learner satisfaction ('smile sheets'). Level 2 (Learning): Acquisition of knowledge/skills tested via pre-post tests. Level 3 (Behavior): Application and transfer of skills onto the job over time. Level 4 (Results): Organizational business impact (ROI, sales revenue, reduced turnover, defect rates).",
        "key_terms": ["Level 1: Reaction", "Level 2: Learning", "Level 3: Behavior (Transfer of Learning)", "Level 4: Results (Business ROI)"],
        "trap": "Level 3 (Behavior) measures transfer of learning ON THE JOB weeks or months later; Level 2 (Learning) measures knowledge demonstrated immediately at the end of training.",
        "icon": "📈"
      },
      {
        "id": "c_tna_addie",
        "title": "TNA & The ADDIE Instructional Framework",
        "summary": "Training Needs Assessment (TNA) operates at three levels: Organizational, Operational/Task, and Person analysis. ADDIE framework: Analysis → Design → Development → Implementation → Evaluation.",
        "key_terms": ["TNA (Org, Task, Person)", "ADDIE Framework", "Vestibule Training", "Simulation"],
        "trap": "A training program must always begin with Training Needs Analysis; training without TNA often attempts to solve non-training performance problems.",
        "icon": "🛠️"
      }
    ]
  },

  "performance_management": {
    "unit": "Human Resource Management",
    "part": "B",
    "title": "Performance Management & Appraisal",
    "marks": 15,
    "concepts": [
      {
        "id": "c_bars_mbo_360",
        "title": "Modern Appraisal Tools: BARS, MBO & 360°",
        "summary": "Management by Objectives (MBO - Drucker): Joint goal-setting with SMART objectives and self-review. BARS (Behaviorally Anchored Rating Scales): Combines traditional rating scales with specific critical incident behavioral statements, reducing ambiguity. 360-degree appraisal: multi-rater assessment from managers, peers, subordinates, and self.",
        "key_terms": ["MBO (Peter Drucker)", "BARS (Behavioral Anchors)", "360-Degree Feedback", "Balanced Scorecard (Kaplan & Norton)"],
        "trap": "BARS minimizes subjective rater bias by anchoring scale points to observable, concrete behavioral critical incidents rather than vague adjectives like 'good' or 'poor'.",
        "icon": "⚖️"
      }
    ]
  },

  "compensation_relations": {
    "unit": "Human Resource Management",
    "part": "B",
    "title": "Compensation & Employee Relations",
    "marks": 15,
    "concepts": [
      {
        "id": "c_job_evaluation",
        "title": "Job Evaluation & Internal Equity",
        "summary": "Job evaluation systematically determines the relative internal worth of jobs to establish equitable pay structures. Methods: Point Method (quantitative, uses compensable factors), Factor Comparison, Job Ranking, and Job Grading. Statutory benefits in India include Provident Fund (EPF), Gratuity, and ESI.",
        "key_terms": ["Job Evaluation", "Point-Factor Method", "Compensable Factors", "Internal vs. External Equity"],
        "trap": "Job evaluation evaluates the JOB's relative internal value, NOT the individual employee's performance (performance appraisal does that).",
        "icon": "💰"
      }
    ]
  },

  // ==========================================
  // PART B: I/O PSYCHOLOGY (15 Marks)
  // ==========================================
  "io_history": {
    "unit": "I/O Psychology",
    "part": "B",
    "title": "History & The Hawthorne Studies",
    "marks": 15,
    "concepts": [
      {
        "id": "c_hawthorne_studies",
        "title": "The Hawthorne Studies & Elton Mayo",
        "summary": "Conducted at Western Electric (1924-1932) by Elton Mayo and Fritz Roethlisberger. Proved that productivity increased not due to physical variables (illumination, rest periods), but because employees felt recognized, valued, and paid special attention by researchers (The Hawthorne Effect). Catalyzed the Human Relations Movement.",
        "key_terms": ["Elton Mayo", "Hawthorne Effect", "Western Electric Plant", "Human Relations Movement"],
        "trap": "The Hawthorne effect demonstrated that social and psychological factors in the workplace often exert greater influence on productivity than physical working conditions.",
        "icon": "💡"
      },
      {
        "id": "c_taylor_munsterberg",
        "title": "Taylorism vs. Hugo Münsterberg",
        "summary": "F.W. Taylor's Scientific Management focused on time-and-motion studies, standardizing work tools, and financial incentives ('economic man'). Hugo Münsterberg published 'Psychology and Industrial Efficiency' (1913), establishing applied psychological testing for vocational selection and worker fatigue.",
        "key_terms": ["Scientific Management (Taylorism)", "Time-and-Motion Studies", "Hugo Münsterberg (Father of I/O Psychology)", "Ergonomics / Human Factors"],
        "trap": "Taylor was an engineer treating workers mechanically; Münsterberg was an experimental psychologist applying psychological science to industrial selection.",
        "icon": "⏱️"
      }
    ]
  },

  "work_motivation": {
    "unit": "I/O Psychology",
    "part": "B",
    "title": "Workplace Motivation Theories",
    "marks": 15,
    "concepts": [
      {
        "id": "c_herzberg_two_factor",
        "title": "Herzberg's Motivator-Hygiene Theory",
        "summary": "Hygiene Factors (Extrinsic: salary, company policy, working conditions, supervision): their presence prevents dissatisfaction, but CANNOT create satisfaction. Motivator Factors (Intrinsic: achievement, recognition, responsibility, growth): their presence generates true job satisfaction and high performance.",
        "key_terms": ["Hygiene Factors (Extrinsic / Dissatisfaction-preventing)", "Motivators (Intrinsic / Satisfaction-creating)", "Job Enrichment"],
        "trap": "According to Herzberg, improving salary or working conditions will merely remove dissatisfaction; it will NOT produce genuine work motivation.",
        "icon": "⚡"
      },
      {
        "id": "c_vroom_equity_jcm",
        "title": "Vroom's VIE, Adams' Equity & Hackman-Oldham JCM",
        "summary": "Vroom: Motivation = Expectancy (Effort → Performance) × Instrumentality (Performance → Reward) × Valence (Value of reward). If ANY factor is 0, motivation is 0! Adams' Equity Theory: workers compare their Output/Input ratio with referent others; inequity triggers tension. Hackman & Oldham JCM: 5 core job dimensions (Skill Variety, Task Identity, Task Significance, Autonomy, Feedback).",
        "key_terms": ["Vroom Expectancy (M = E × I × V)", "Adams' Equity Theory (Referent Others)", "Job Characteristics Model (JCM: 5 Dimensions)"],
        "trap": "In Vroom's theory, if an employee believes high performance will NOT be recognized with rewards (Instrumentality = 0), overall motivation drops to zero regardless of effort confidence.",
        "icon": "⚙️"
      }
    ]
  },

  "job_attitudes": {
    "unit": "I/O Psychology",
    "part": "B",
    "title": "Job Attitudes, Commitment & OCB",
    "marks": 15,
    "concepts": [
      {
        "id": "c_meyer_allen_commitment",
        "title": "Meyer & Allen's 3-Component Commitment",
        "summary": "Affective Commitment: emotional attachment and genuine desire to stay ('I stay because I WANT to'). Continuance Commitment: awareness of switching costs, lack of alternatives, financial dependency ('I stay because I NEED to'). Normative Commitment: sense of moral obligation/duty to organization ('I stay because I OUGHT to').",
        "key_terms": ["Affective Commitment (Want to)", "Continuance Commitment (Need to / Sunk Costs)", "Normative Commitment (Ought to / Obligation)"],
        "trap": "Continuance commitment is driven strictly by perceived costs of leaving and economic necessity, not emotional loyalty.",
        "icon": "🤝"
      },
      {
        "id": "c_ocb_vs_cwb",
        "title": "Organizational Citizenship (OCB) vs. CWB",
        "summary": "Organizational Citizenship Behavior (OCB - Organ): Discretionary, extra-role behaviors not part of formal duties that facilitate organizational effectiveness (altruism, conscientiousness, courtesy, sportsmanship, civic virtue). Counterproductive Work Behavior (CWB): Intentional actions that harm organization or employees (theft, sabotage, cyberloafing, bullying).",
        "key_terms": ["OCB (Extra-role / Discretionary)", "Altruism & Civic Virtue", "Counterproductive Work Behavior (CWB)", "Job Satisfaction"],
        "trap": "OCB is by definition DISCRETIONARY; it is not recognized by formal reward systems or explicit employment contracts.",
        "icon": "🌟"
      }
    ]
  },

  "leadership_models": {
    "unit": "I/O Psychology",
    "part": "B",
    "title": "Leadership Models & Contingency",
    "marks": 15,
    "concepts": [
      {
        "id": "c_fiedler_situational",
        "title": "Fiedler's Contingency & Hersey-Blanchard SLT",
        "summary": "Fiedler: Leader style is fixed, assessed by Least Preferred Coworker (LPC). Low LPC = task-oriented (best in extreme favorable/unfavorable control); High LPC = relationship-oriented (best in moderate control). Hersey-Blanchard SLT: Leadership style adapts to Follower Maturity (R1-R4): Directing/Telling → Coaching/Selling → Supporting/Participating → Delegating.",
        "key_terms": ["Fiedler LPC Scale", "Situational Control (Leader-member, Task structure, Position power)", "Hersey-Blanchard SLT (Maturity Levels)", "Blake-Mouton Managerial Grid (9,9)"],
        "trap": "In Fiedler's model, you cannot change a leader's style; you must CHANGE THE SITUATION (situational engineering) to match the leader's LPC orientation.",
        "icon": "👑"
      },
      {
        "id": "c_transformational_lmx",
        "title": "Transformational Leadership & LMX Theory",
        "summary": "Bass Transformational Leadership (The 4 Is): Idealized Influence (charisma), Inspirational Motivation (vision), Intellectual Stimulation (challenge status quo), Individualized Consideration (coaching). Leader-Member Exchange (LMX): Leaders form dyadic relationships dividing subordinates into In-Group (high trust, autonomy) and Out-Group (formal, contractual).",
        "key_terms": ["Transformational 4 Is (Bass)", "Transactional (Contingent Reward)", "Leader-Member Exchange (LMX: In-group vs. Out-group)"],
        "trap": "Transactional leadership focuses on clear exchange and contingent reward/punishment; Transformational leadership inspires followers to transcend self-interest for the collective vision.",
        "icon": "🚀"
      }
    ]
  },

  "culture_stress": {
    "unit": "I/O Psychology",
    "part": "B",
    "title": "Culture, Lewin's Change & Workplace Burnout",
    "marks": 15,
    "concepts": [
      {
        "id": "c_schein_culture_lewin",
        "title": "Schein's 3 Levels of Culture & Lewin's Change",
        "summary": "Edgar Schein's Culture: (1) Artifacts (visible dress codes, office layout), (2) Espoused Values (stated philosophies, company credos), (3) Basic Assumptions (unconscious, deeply embedded, taken-for-granted beliefs - core of culture). Kurt Lewin's 3-Step Change Model: Unfreezing (breaking status quo) → Changing (transition) → Refreezing (institutionalizing norms).",
        "key_terms": ["Edgar Schein (Artifacts, Values, Assumptions)", "Lewin 3-Step (Unfreeze, Change, Refreeze)", "Force-Field Analysis"],
        "trap": "Basic Underlying Assumptions are the DEEPEST and most powerful level of culture in Schein's model, yet they operate almost entirely unconsciously.",
        "icon": "🏢"
      },
      {
        "id": "c_burnout_maslach",
        "title": "Workplace Stress & Maslach Burnout (MBI)",
        "summary": "Job Demands-Resources (JD-R) model posits strain occurs when demands outpace coping resources. Christina Maslach identified 3 core dimensions of Burnout: (1) Emotional Exhaustion (depleted physical/emotional reserves), (2) Depersonalization/Cynicism (callous, detached attitude toward clients/coworkers), (3) Reduced Personal Accomplishment (feelings of incompetence and inefficiency).",
        "key_terms": ["Maslach Burnout Inventory (MBI)", "Emotional Exhaustion", "Depersonalization (Cynicism)", "Reduced Personal Accomplishment", "JD-R Model"],
        "trap": "Depersonalization in burnout refers specifically to cynical, detached, and unfeeling responses toward recipients of one's services/coworkers.",
        "icon": "🔥"
      }
    ]
  }
};
