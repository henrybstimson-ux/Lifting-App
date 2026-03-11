// Destructure React hooks from global React
const { useState, useEffect, useRef, useCallback } = React;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// hooks from React global

// ── SWIPE HOOK ────────────────────────────────────────────────────────────────
function useSwipe(onLeft, onRight, threshold = 50) {
  const startX = useRef(null);
  const startY = useRef(null);
  const onTouchStart = useCallback(e => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }, []);
  const onTouchEnd = useCallback(e => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) onLeft();else onRight();
    }
    startX.current = null;
    startY.current = null;
  }, [onLeft, onRight, threshold]);
  return {
    onTouchStart,
    onTouchEnd
  };
}

// ── TAP ANIMATION HOOK ────────────────────────────────────────────────────────
function useTap() {
  const [tapping, setTapping] = useState(false);
  const timerRef = useRef(null);
  const trigger = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTapping(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTapping(true);
        timerRef.current = setTimeout(() => setTapping(false), 260);
      });
    });
  }, []);
  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);
  return [tapping ? "tap" : "", trigger];
}

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const C = {
  bg: "#080808",
  card: "#0f0f0f",
  border: "#1a1a1a",
  mon: "#e8c547",
  tue: "#e05c3a",
  wed: "#4a9eff",
  thu: "#5ecb7c",
  fri: "#5ecb7c",
  sun: "#c47aff",
  text: "#f5f5f5",
  muted: "#666",
  small: "#333"
};
const W = {
  bg: "#0c0a09",
  surface: "#131110",
  surfaceHi: "#1a1714",
  border: "#242424",
  borderHi: "#303030",
  cyan: "#00c9b1",
  cyanDim: "rgba(0,201,177,0.12)",
  cyanGlow: "rgba(0,201,177,0.25)",
  text: "#f0f0f0",
  textMid: "#999",
  textDim: "#b0b0b0",
  red: "#ff4757",
  green: "#00c9b1",
  yellow: "#f5c842",
  orange: "#ff7043"
};
const GROUP_COLORS = {
  CNS: "#f5c842",
  Legs: "#00c9b1",
  Push: "#ff7043",
  Pull: "#4fc3f7",
  Core: "#ab97e8",
  Stability: "#80cbc4"
};
const GROUPS = ["CNS", "Legs", "Push", "Pull", "Core", "Stability"];
const EX_GROUP = {
  "Force Plate CMJ": "CNS",
  "Hang Clean": "CNS",
  "Box Drop → Stick Landing": "CNS",
  "MB Slam → MB Lateral Toss": "CNS",
  "Snap Down → Split Squat Jump": "CNS",
  "MB Slam x3 (easy)": "CNS",
  "Snap Down x3 (sub-max)": "CNS",
  "BB Back Squat": "Legs",
  "Trap Bar Deadlift": "Legs",
  "Bulgarian Split Squat": "Legs",
  "BB Split Squat": "Legs",
  "Elevated Band Hip Flexor/Glute": "Legs",
  "RDL": "Legs",
  "Barbell Zercher Curls": "Legs",
  "Lying Ham Curl": "Legs",
  "Light Trap Bar DL Ramp": "Legs",
  "Bodyweight Squat to Box": "Legs",
  "Nordic Hamstring Curl ISO": "Legs",
  "SL Glute Bridge": "Legs",
  "Glute Bridge Hold": "Legs",
  "Glute Bridge + ISO Hold": "Legs",
  "Band Clamshells": "Legs",
  "BB Bench Press": "Push",
  "DB Incline Bench Press": "Push",
  "DB Incline Bench": "Push",
  "DB Lateral Raises": "Push",
  "Cable Y Raises": "Push",
  "Straight Bar Pulldown": "Push",
  "Overhead DB Tricep Extension": "Push",
  "SA DB Shoulder Press": "Push",
  "Empty Bar Bench Press": "Push",
  "50–60% Bench Press": "Push",
  "Pull-Ups": "Pull",
  "SA DB Row": "Pull",
  "Chest Supported Row": "Pull",
  "Incline Dumbbell Curl": "Pull",
  "Hammer Curl": "Pull",
  "Lat Pulldown": "Pull",
  "BB Row": "Pull",
  "Dead Hangs (passive → active)": "Pull",
  "Scapular Pull-Ups": "Pull",
  "Lat Stretch (Bar Hang)": "Pull",
  "Copenhagen Plank": "Core",
  "V-Ups": "Core",
  "Hanging Leg Raises": "Core",
  "Suitcase Carry": "Core",
  "Cuban Press": "Stability",
  "Cuban Press (Sunday)": "Stability",
  "Rear Delt Cable Fly": "Stability",
  "Rack Hip CARs": "Stability",
  "Band Pull-Aparts": "Stability",
  "Band Pull-Aparts (overhand)": "Stability",
  "Band Pull-Aparts (Sunday)": "Stability",
  "Side-Lying External Rotation (DB)": "Stability",
  "Scapular Wall Slides": "Stability",
  "Light Cable External Rotation": "Stability",
  "Wall Angels": "Stability",
  "Hip 90/90 Stretch": "Stability",
  "Ankle Circles + Dorsiflexion Wall Drill": "Stability",
  "Thoracic Extension over Roller": "Stability",
  "Pec Minor Doorway Stretch": "Stability",
  "Thoracic Rotation (Kneeling)": "Stability",
  "Thoracic Cat-Cow": "Stability",
  "Diaphragmatic Breathing": "Stability",
  "World's Greatest Stretch": "Stability",
  "Shoulder CARs": "Stability"
};
const LIGHT_INTENT = new Set(["Cuban Press", "Cuban Press (Sunday)", "Band Pull-Aparts", "Band Pull-Aparts (overhand)", "Band Pull-Aparts (Sunday)", "Light Cable External Rotation", "Side-Lying External Rotation (DB)", "Rack Hip CARs", "Wall Angels", "Scapular Wall Slides", "Scapular Pull-Ups", "Dead Hangs (passive → active)", "Hip 90/90 Stretch", "Ankle Circles + Dorsiflexion Wall Drill", "Thoracic Extension over Roller", "Pec Minor Doorway Stretch", "Thoracic Rotation (Kneeling)", "Thoracic Cat-Cow", "Diaphragmatic Breathing", "World's Greatest Stretch", "Shoulder CARs", "Cable Y Raises", "Band Clamshells", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "SL Glute Bridge", "Nordic Hamstring Curl ISO", "Copenhagen Plank", "V-Ups", "Hanging Leg Raises", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Snap Down x3 (sub-max)", "MB Slam x3 (easy)", "Force Plate CMJ", "Empty Bar Bench Press", "50–60% Bench Press", "Light Trap Bar DL Ramp", "Lat Stretch (Bar Hang)", "Thoracic Cat-Cow", "Hang Clean", "MB Slam → MB Lateral Toss", "Snap Down → Split Squat Jump", "Suitcase Carry", "Elevated Band Hip Flexor/Glute", "Rear Delt Cable Fly"]);
const PROGRESSIVE_OVERLOAD_EX = new Set([
// Barbell compounds
"BB Back Squat", "BB Bench Press", "BB Split Squat", "Trap Bar Deadlift", "RDL", "BB Row", "Barbell Zercher Curls",
// Dumbbell compounds
"DB Incline Bench Press", "DB Incline Bench", "SA DB Row", "SA DB Shoulder Press", "Incline Dumbbell Curl",
// Cable / machine isolation — respond well to progressive overload
"Straight Bar Pulldown", "Lat Pulldown", "Chest Supported Row", "Overhead DB Tricep Extension", "DB Lateral Raises", "Hammer Curl",
// Weighted bodyweight
"Pull-Ups", "Bulgarian Split Squat"]);
const BODYWEIGHT_EX = new Set(["Pull-Ups", "Hanging Leg Raises", "V-Ups", "Copenhagen Plank", "Dead Hangs (passive → active)", "Scapular Pull-Ups", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Snap Down x3 (sub-max)", "Snap Down → Split Squat Jump", "Force Plate CMJ", "Nordic Hamstring Curl ISO", "SL Glute Bridge", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "World's Greatest Stretch", "Shoulder CARs", "Diaphragmatic Breathing", "Hip 90/90 Stretch", "Thoracic Cat-Cow", "Thoracic Rotation (Kneeling)", "Pec Minor Doorway Stretch", "Thoracic Extension over Roller", "Ankle Circles + Dorsiflexion Wall Drill", "Wall Angels", "Scapular Wall Slides", "Lat Stretch (Bar Hang)", "MB Slam x3 (easy)"]);
// ── FONT SCALE ────────────────────────────────────────────────────────────────
const FS = {
  sm: {
    body: 11,
    label: 9,
    mono: 9,
    title: 18,
    head: 24,
    input: 13,
    badge: 7
  },
  md: {
    body: 13,
    label: 10,
    mono: 10,
    title: 22,
    head: 28,
    input: 15,
    badge: 8
  },
  lg: {
    body: 15,
    label: 12,
    mono: 12,
    title: 26,
    head: 32,
    input: 17,
    badge: 9
  }
};
const BADGES = {
  MOB: {
    bg: "rgba(255,255,255,0.04)",
    color: W.textDim
  },
  ACT: {
    bg: "rgba(0,201,177,0.1)",
    color: "#00c9b1"
  },
  CNS: {
    bg: "rgba(245,200,66,0.1)",
    color: "#f5c842"
  },
  PRIME: {
    bg: "rgba(79,195,247,0.1)",
    color: "#4fc3f7"
  },
  POWER: {
    bg: "rgba(255,112,67,0.1)",
    color: "#ff7043"
  },
  STR: {
    bg: "rgba(245,200,66,0.12)",
    color: "#f5c842"
  },
  HYP: {
    bg: "rgba(171,151,232,0.1)",
    color: "#ab97e8"
  },
  CORE: {
    bg: "rgba(79,195,247,0.08)",
    color: "#4fc3f7"
  },
  HEALTH: {
    bg: "rgba(0,201,177,0.08)",
    color: "#80cbc4"
  }
};

// ── WORKOUT DATA ──────────────────────────────────────────────────────────────
const LOWER_HYP_DAY = {
  title: "Lower Hypertrophy",
  focus: "Glutes + Quads",
  warmup: {
    duration: "10–12 min",
    phases: [{
      label: "Tissue Prep",
      exercises: [{
        name: "Foam Roll Quads + IT Band",
        detail: "30 sec/side · reduce stiffness",
        badge: "MOB"
      }, {
        name: "Hip Flexor Couch Stretch",
        detail: "45 sec/side · critical for split squat depth",
        badge: "MOB"
      }]
    }, {
      label: "Glute + Hamstring Activation",
      exercises: [{
        name: "Glute Bridge Hold",
        detail: "2×10 + 3 sec hold/rep",
        badge: "ACT"
      }, {
        name: "Nordic Hamstring Curl ISO",
        detail: "2×5 slow negatives",
        badge: "ACT"
      }, {
        name: "SL Glute Bridge",
        detail: "2×8/side",
        badge: "ACT"
      }]
    }, {
      label: "Movement Prep + CNS Tap",
      exercises: [{
        name: "Snap Down x3 (sub-max)",
        detail: "50% effort",
        badge: "CNS"
      }, {
        name: "Light Trap Bar DL Ramp",
        detail: "1×8 @ 40%, 1×5 @ 60%",
        badge: "PRIME"
      }]
    }]
  },
  blocks: [{
    icon: "💥",
    title: "A — Power",
    sub: "Reactive Primer",
    exercises: [{
      name: "Snap Down → Split Squat Jump",
      detail: "3×3",
      badge: "POWER"
    }]
  }, {
    icon: "🏋️",
    title: "B — Main Lift",
    sub: "Moderate Load",
    exercises: [{
      name: "Trap Bar Deadlift",
      detail: "4×6",
      badge: "HYP"
    }]
  }, {
    icon: "🦵",
    title: "C — Unilateral",
    sub: "Quad + Glute",
    exercises: [{
      name: "BB Split Squat",
      detail: "4×8 ea",
      badge: "HYP"
    }]
  }, {
    icon: "🍑",
    title: "D — Glutes",
    sub: "Isolation",
    exercises: [{
      name: "Elevated Band Hip Flexor/Glute",
      detail: "3×12",
      badge: "HYP"
    }, {
      name: "RDL",
      detail: "5×6",
      badge: "STR"
    }]
  }, {
    icon: "🦿",
    title: "E — Quads",
    sub: "Added Block",
    exercises: [{
      name: "BB Back Squat",
      detail: "4×8",
      badge: "HYP"
    }, {
      name: "Bulgarian Split Squat",
      detail: "4×8",
      badge: "HYP"
    }]
  }, {
    icon: "🔗",
    title: "F — Posterior Chain",
    sub: "Accessory",
    exercises: [{
      name: "Barbell Zercher Curls",
      detail: "3×8",
      badge: "HYP"
    }]
  }, {
    icon: "🧱",
    title: "G — Core",
    sub: "Finisher",
    exercises: [{
      name: "Copenhagen Plank",
      detail: "3×20 sec",
      badge: "CORE"
    }]
  }]
};
const DAYS = [{
  id: "sun",
  label: "Sunday",
  accent: C.sun,
  title: "Upper Pump + Stability",
  focus: "Injury-Proofing Day",
  warmup: {
    duration: "6–8 min",
    phases: [{
      label: "Nervous System Reset",
      exercises: [{
        name: "Diaphragmatic Breathing",
        detail: "10 deep breaths",
        badge: "MOB"
      }, {
        name: "World's Greatest Stretch",
        detail: "4/side slow",
        badge: "MOB"
      }, {
        name: "Shoulder CARs",
        detail: "5/direction/side",
        badge: "MOB"
      }]
    }, {
      label: "Shoulder + Rotator Cuff Prep",
      exercises: [{
        name: "Band Pull-Aparts (Sunday)",
        detail: "2×15",
        badge: "ACT"
      }, {
        name: "Light Cable External Rotation",
        detail: "2×12/side",
        badge: "ACT"
      }, {
        name: "Wall Angels",
        detail: "2×10",
        badge: "ACT"
      }]
    }]
  },
  blocks: [{
    icon: "🛡️",
    title: "A — Shoulder Health",
    sub: "Joint Longevity",
    exercises: [{
      name: "Rack Hip CARs",
      detail: "3×3 ea",
      badge: "HEALTH"
    }, {
      name: "Rear Delt Cable Fly",
      detail: "3×15",
      badge: "HEALTH"
    }, {
      name: "Cuban Press (Sunday)",
      detail: "3×12",
      badge: "HEALTH"
    }]
  }, {
    icon: "💪",
    title: "B — Moderate Press",
    sub: "Pump, Not Power",
    exercises: [{
      name: "SA DB Shoulder Press",
      detail: "3×10",
      badge: "HYP"
    }, {
      name: "DB Incline Bench",
      detail: "3×10",
      badge: "HYP"
    }]
  }, {
    icon: "🔙",
    title: "C — Back Pump",
    sub: "Volume / Feel",
    exercises: [{
      name: "Lat Pulldown",
      detail: "3×12",
      badge: "HYP"
    }, {
      name: "BB Row",
      detail: "3×12",
      badge: "HYP"
    }]
  }, {
    icon: "🦾",
    title: "D — Arms",
    sub: "Pump Finisher",
    exercises: [{
      name: "Incline Dumbbell Curl",
      detail: "3×12",
      badge: "HYP"
    }, {
      name: "Straight Bar Pulldown",
      detail: "3×12",
      badge: "HYP"
    }]
  }, {
    icon: "🧱",
    title: "E — Core",
    sub: "Anti-Rotation + Flexion",
    exercises: [{
      name: "V-Ups",
      detail: "4×12",
      badge: "CORE"
    }, {
      name: "Hanging Leg Raises",
      detail: "3×12",
      badge: "CORE"
    }]
  }, {
    icon: "🧳",
    title: "F — Carry",
    sub: "Loaded Stability",
    exercises: [{
      name: "Suitcase Carry",
      detail: "4×20m",
      badge: "CORE"
    }]
  }]
}, {
  id: "mon",
  label: "Monday",
  accent: C.mon,
  title: "Lower Strength",
  focus: "Heavy CNS Day",
  warmup: {
    duration: "12–15 min",
    phases: [{
      label: "Mobility",
      exercises: [{
        name: "Hip 90/90 Stretch",
        detail: "45 sec/side",
        badge: "MOB"
      }, {
        name: "Ankle Circles + Dorsiflexion Wall Drill",
        detail: "10 reps/side",
        badge: "MOB"
      }, {
        name: "Thoracic Extension over Roller",
        detail: "8–10 reps",
        badge: "MOB"
      }]
    }, {
      label: "Activation",
      exercises: [{
        name: "Glute Bridge + ISO Hold",
        detail: "2×10 + 5 sec hold",
        badge: "ACT"
      }, {
        name: "Band Clamshells",
        detail: "2×15/side",
        badge: "ACT"
      }, {
        name: "Bodyweight Squat to Box",
        detail: "2×8 controlled",
        badge: "ACT"
      }]
    }, {
      label: "CNS Primer",
      exercises: [{
        name: "Box Drop → Stick Landing",
        detail: "3×3",
        badge: "CNS"
      }]
    }]
  },
  blocks: [{
    icon: "⚡",
    title: "A — Power Primer",
    sub: "Low Volume",
    exercises: [{
      name: "Force Plate CMJ",
      detail: "1×2",
      badge: "POWER"
    }, {
      name: "Hang Clean",
      detail: "6×3",
      badge: "POWER"
    }]
  }, {
    icon: "🏋️",
    title: "B — Strength",
    sub: "Primary Loading",
    note: "Keep trap bar volume capped. Full CNS expression on squats first.",
    exercises: [{
      name: "BB Back Squat",
      detail: "5×5",
      badge: "STR"
    }, {
      name: "Trap Bar Deadlift",
      detail: "3×5",
      badge: "STR"
    }]
  }, {
    icon: "🔗",
    title: "C — Posterior Chain",
    sub: "Accessory",
    exercises: [{
      name: "Barbell Zercher Curls",
      detail: "3×8",
      badge: "HYP"
    }]
  }, {
    icon: "🧱",
    title: "D — Core",
    sub: "Finisher",
    exercises: [{
      name: "Copenhagen Plank",
      detail: "3×20 sec",
      badge: "CORE"
    }]
  }]
}, {
  id: "tue",
  label: "Tuesday",
  accent: C.tue,
  title: "Upper Push",
  focus: "Chest / Shoulders",
  warmup: {
    duration: "8–10 min",
    phases: [{
      label: "Mobility",
      exercises: [{
        name: "Pec Minor Doorway Stretch",
        detail: "30 sec/side",
        badge: "MOB"
      }, {
        name: "Thoracic Rotation (Kneeling)",
        detail: "8/side",
        badge: "MOB"
      }]
    }, {
      label: "Shoulder Health",
      exercises: [{
        name: "Band Pull-Aparts",
        detail: "2×20",
        badge: "ACT"
      }, {
        name: "Side-Lying External Rotation (DB)",
        detail: "2×12 @ light",
        badge: "ACT"
      }, {
        name: "Scapular Wall Slides",
        detail: "2×10",
        badge: "ACT"
      }]
    }, {
      label: "Press Ramp",
      exercises: [{
        name: "Empty Bar Bench Press",
        detail: "1×15",
        badge: "PRIME"
      }, {
        name: "50–60% Bench Press",
        detail: "1×6",
        badge: "PRIME"
      }]
    }]
  },
  blocks: [{
    icon: "🛡️",
    title: "A — Activation",
    sub: "Shoulder Health",
    exercises: [{
      name: "Cuban Press",
      detail: "3×10",
      badge: "HEALTH"
    }]
  }, {
    icon: "🏋️",
    title: "B — Main Press",
    sub: "Primary Strength",
    exercises: [{
      name: "BB Bench Press",
      detail: "4×6",
      badge: "STR"
    }]
  }, {
    icon: "💪",
    title: "C — Secondary Press",
    sub: "Volume",
    exercises: [{
      name: "DB Incline Bench Press",
      detail: "4×8–10",
      badge: "HYP"
    }]
  }, {
    icon: "🔺",
    title: "D — Shoulder Hypertrophy",
    sub: "Added Block",
    exercises: [{
      name: "DB Lateral Raises",
      detail: "4×12–15",
      badge: "HYP"
    }, {
      name: "Cable Y Raises",
      detail: "3×12",
      badge: "HYP"
    }]
  }, {
    icon: "🦾",
    title: "E — Triceps",
    sub: "Added Block",
    exercises: [{
      name: "Straight Bar Pulldown",
      detail: "4×12",
      badge: "HYP"
    }, {
      name: "Overhead DB Tricep Extension",
      detail: "3×10",
      badge: "HYP"
    }]
  }]
}, {
  id: "wed",
  label: "Wednesday",
  accent: C.wed,
  title: "Upper Pull",
  focus: "Back Thickness + Width",
  warmup: {
    duration: "8–10 min",
    phases: [{
      label: "Mobility",
      exercises: [{
        name: "Lat Stretch (Bar Hang)",
        detail: "30 sec/side",
        badge: "MOB"
      }, {
        name: "Thoracic Cat-Cow",
        detail: "10 reps",
        badge: "MOB"
      }]
    }, {
      label: "Scap + Rear Delt Activation",
      exercises: [{
        name: "Dead Hangs (passive → active)",
        detail: "2×20 sec",
        badge: "ACT"
      }, {
        name: "Scapular Pull-Ups",
        detail: "2×8",
        badge: "ACT"
      }, {
        name: "Band Pull-Aparts (overhand)",
        detail: "2×15",
        badge: "ACT"
      }]
    }, {
      label: "Power Ramp",
      exercises: [{
        name: "MB Slam x3 (easy)",
        detail: "50% effort",
        badge: "CNS"
      }]
    }]
  },
  blocks: [{
    icon: "💥",
    title: "A — Power",
    sub: "Minimal",
    exercises: [{
      name: "MB Slam → MB Lateral Toss",
      detail: "3×3",
      badge: "POWER"
    }]
  }, {
    icon: "🔝",
    title: "B — Vertical Pull",
    sub: "Width Driver",
    exercises: [{
      name: "Pull-Ups",
      detail: "6×6",
      badge: "STR"
    }]
  }, {
    icon: "↔️",
    title: "C — Horizontal Pull",
    sub: "Thickness",
    exercises: [{
      name: "SA DB Row",
      detail: "4×8",
      badge: "HYP"
    }, {
      name: "Chest Supported Row",
      detail: "4×10",
      badge: "HYP"
    }]
  }, {
    icon: "🎯",
    title: "D — Rear Delt / Scap",
    sub: "Injury Proofing",
    exercises: [{
      name: "Rear Delt Cable Fly",
      detail: "3×12",
      badge: "HEALTH"
    }]
  }, {
    icon: "💪",
    title: "E — Biceps",
    sub: "Added Block",
    exercises: [{
      name: "Incline Dumbbell Curl",
      detail: "3×10",
      badge: "HYP"
    }, {
      name: "Hammer Curl",
      detail: "3×12",
      badge: "HYP"
    }]
  }]
}, {
  id: "thu",
  label: "Thursday",
  ...LOWER_HYP_DAY,
  accent: C.thu
}, {
  id: "fri",
  label: "Friday",
  ...LOWER_HYP_DAY,
  accent: C.fri
}];

// ── STORAGE ───────────────────────────────────────────────────────────────────
const STORE_KEY = "wt_entries_v1";
const BLOCK_STATE_KEY = "wt_block_state_v1";
// Module-level save status — components can subscribe via a version bump
let saveErrorCallback = null;
let lastSaveStatus = "ok"; // "ok" | "error"
function reportSaveStatus(ok) {
  lastSaveStatus = ok ? "ok" : "error";
  if (saveErrorCallback) saveErrorCallback(ok);
}
// In-session workout state cache — persists across navigation within same session
const workoutStateCache = {};
function saveWorkoutState(dayId, state) {
  workoutStateCache[dayId] = {
    ...state,
    savedAt: Date.now()
  };
  // Also persist to storage so state survives page reloads mid-workout
  try {
    window.storage.set("wt_wstate_" + dayId, JSON.stringify({
      ...state,
      savedAt: Date.now()
    }));
  } catch (e) {}
}
function loadWorkoutState(dayId) {
  // Check in-memory cache first
  const s = workoutStateCache[dayId];
  if (s) {
    if (Date.now() - s.savedAt > 4 * 60 * 60 * 1000) {
      delete workoutStateCache[dayId];
    } else return s;
  }
  // Fallback: try storage (handles page reloads mid-workout) — synchronous not possible,
  // so we pre-load into cache during app init via loadWorkoutStateFromStorage()
  return null;
}
async function loadWorkoutStateFromStorage(dayId) {
  try {
    const r = await window.storage.get("wt_wstate_" + dayId);
    if (!r?.value) return null;
    const s = JSON.parse(r.value);
    if (!s || Date.now() - s.savedAt > 4 * 60 * 60 * 1000) {
      window.storage.delete("wt_wstate_" + dayId).catch(() => {});
      return null;
    }
    workoutStateCache[dayId] = s;
    return s;
  } catch (e) {
    return null;
  }
}
let blockStateStore = {};
async function loadBlockState() {
  try {
    const r = await window.storage.get(BLOCK_STATE_KEY);
    if (r?.value) blockStateStore = JSON.parse(r.value);
  } catch (e) {}
}
async function saveBlockState() {
  try {
    await window.storage.set(BLOCK_STATE_KEY, JSON.stringify(blockStateStore));
  } catch (e) {}
}
function getBlockOpen(dayId, blockTitle) {
  const k = dayId + "_" + blockTitle;
  return k in blockStateStore ? blockStateStore[k] : true;
}
function setBlockOpen(dayId, blockTitle, val) {
  blockStateStore[dayId + "_" + blockTitle] = val;
  saveBlockState();
}
const THUFI_KEY = "wt_thufri_v1";
const BW_KEY = "wt_bodyweight_v1";
const REST_KEY = "wt_rest_v1";
const SESSIONS_KEY = "wt_sessions_v1";
const FONT_KEY = "wt_font_scale_v1";
const BW_RESET_KEY = "wt_bw_reset_v3";
const memStore = {};
let bwStore = [];
let restStore = {};
let sessionsStore = [];
let fontScaleStore = "md";
async function loadFontScale() {
  try {
    const r = await window.storage.get(FONT_KEY);
    if (r?.value) fontScaleStore = r.value;
  } catch (e) {}
}
async function saveFontScale(v) {
  fontScaleStore = v;
  try {
    await window.storage.set(FONT_KEY, v);
  } catch (e) {}
}
async function loadAllFromStorage() {
  await loadFontScale();
  await loadBlockState();
  // Pre-load any in-progress workout states (for page reload recovery)
  await Promise.all(DAYS.map(d => loadWorkoutStateFromStorage(d.id)));
  try {
    const r = await window.storage.get(BW_RESET_KEY);
    if (!r?.value) {
      const seed = [{
        date: "2026-03-10",
        weight: 195
      }];
      bwStore = seed;
      await window.storage.set(BW_KEY, JSON.stringify(seed));
      await window.storage.set(BW_RESET_KEY, "done");
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(STORE_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object' && !Array.isArray(p)) {
        Object.keys(p).forEach(k => {
          if (Array.isArray(p[k])) memStore[k] = [...p[k]];
        });
      }
    }
  } catch (e) {
    console.error('wt: corrupt entries store', e);
  }
  try {
    const r = await window.storage.get(BW_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (Array.isArray(p)) bwStore = p;
    }
  } catch (e) {
    console.error('wt: corrupt bwStore', e);
  }
  try {
    const r = await window.storage.get(REST_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object' && !Array.isArray(p)) restStore = p;
    }
  } catch (e) {
    console.error('wt: corrupt restStore', e);
  }
  try {
    const r = await window.storage.get(SESSIONS_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (Array.isArray(p)) sessionsStore = p;
    }
  } catch (e) {
    console.error('wt: corrupt sessionsStore', e);
  }
}
async function saveEntries() {
  try {
    if (Object.keys(memStore).length === 0) {
      const check = await window.storage.get(STORE_KEY);
      if (check?.value) return;
    }
    const r = await window.storage.set(STORE_KEY, JSON.stringify(memStore));
    if (!r) {
      console.error("wt: saveEntries returned null");
      reportSaveStatus(false);
    } else reportSaveStatus(true);
  } catch (e) {
    console.error("wt: saveEntries failed", e);
    reportSaveStatus(false);
  }
}
async function saveBW() {
  try {
    await window.storage.set(BW_KEY, JSON.stringify(bwStore));
  } catch (e) {
    console.error("wt: saveBW failed", e);
  }
}
async function saveRest() {
  try {
    await window.storage.set(REST_KEY, JSON.stringify(restStore));
  } catch (e) {}
}
async function saveSessions() {
  try {
    const val = JSON.stringify(sessionsStore);
    const r = await window.storage.set(SESSIONS_KEY, val);
    if (!r) console.error("wt: saveSessions write returned null");
  } catch (e) {
    console.error("wt: saveSessions failed", e);
  }
}
function getEntries(ex) {
  if (!memStore[ex]) return [];
  return memStore[ex].filter(e => e && typeof e === "object" && e.date && e.weight != null);
}
function setEntries(ex, arr) {
  memStore[ex] = [...arr];
  saveEntries();
}
function delEntriesByDate(date, dayId = null) {
  Object.keys(memStore).forEach(ex => {
    memStore[ex] = (memStore[ex] || []).filter(e => {
      if (e.date !== date) return true;
      // When scoped by dayId: only delete entries that explicitly match that dayId
      // Entries without a dayId are preserved (legacy data)
      if (dayId) return !e.dayId || e.dayId !== dayId;
      return false;
    });
  });
  saveEntries();
}
function delSessionByDate(date, dayId = null) {
  sessionsStore = sessionsStore.filter(s => s.date !== date || dayId && s.dayId !== dayId);
  saveSessions();
}
function getLastEntry(ex) {
  const e = getEntries(ex);
  return e.length ? e[e.length - 1] : null;
}
function getRestTime(ex) {
  return restStore[ex] || 90;
}
function setRestTime(ex, t) {
  restStore[ex] = t;
  saveRest();
}
function getLatestBW() {
  return bwStore.length ? bwStore[bwStore.length - 1].weight : null;
}
function dayLastLoggedDate(dayId) {
  const day = DAYS.find(d => d.id === dayId);
  if (!day) return null;
  const allDates = day.blocks.flatMap(b => b.exercises || []).flatMap(ex => getEntries(ex.name).map(e => e.date));
  return allDates.length ? allDates.sort().pop() : null;
}
function logBW(weight) {
  const today = todayStr();
  bwStore = bwStore.filter(e => e.date !== today);
  bwStore.push({
    date: today,
    weight: parseFloat(weight)
  });
  bwStore.sort((a, b) => a.date.localeCompare(b.date));
  saveBW();
}
function saveSession(s) {
  sessionsStore.unshift(s);
  if (sessionsStore.length > 500) sessionsStore = sessionsStore.slice(0, 500);
  saveSessions();
}
function haptic(pattern = 30) {
  try {
    navigator.vibrate?.(pattern);
  } catch (e) {}
}
function playBeep(freq = 880, dur = 0.18, vol = 0.4, type = "sine") {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + dur + 0.05);
    setTimeout(() => ctx.close(), 500);
  } catch (e) {}
}
function restEndAlert() {
  haptic([60, 40, 60, 40, 120]);
  setTimeout(() => playBeep(660, 0.12), 0);
  setTimeout(() => playBeep(780, 0.12), 140);
  setTimeout(() => playBeep(920, 0.22), 280);
}
function calc1RM(w, r) {
  if (!w || !r || r <= 0) return 0;
  return Math.round(w * (1 + r / 30));
}
function isPR(entries, idx) {
  if (!entries.length || !entries[idx]) return false;
  return entries[idx].weight >= entries.reduce((b, e) => Math.max(b, e.weight), 0) && (idx === 0 || entries[idx].weight > entries.slice(0, idx).reduce((b, e) => Math.max(b, e.weight), 0));
}
const BARBELL_EX = new Set(["BB Back Squat", "BB Bench Press", "Trap Bar Deadlift", "RDL", "BB Row", "BB Split Squat", "Barbell Zercher Curls"]);
function getOverloadSug(entries, exName = "") {
  if (exName && !PROGRESSIVE_OVERLOAD_EX.has(exName)) return null;
  if (!entries.length) return null;
  const last = entries[entries.length - 1];
  const best = entries.reduce((b, e) => e.weight > b.weight ? e : b, entries[0]);
  // Plate increment: barbells get 5lb jumps heavy / 2.5 light; everything else 2.5
  const isBarbell = BARBELL_EX.has(exName);
  const inc = isBarbell && best.weight >= 95 ? 5 : 2.5;
  // Double-progression: check if last session hit all sets at target reps
  const lastDateEntries = entries.filter(e => e.date === last.date);
  const avgReps = lastDateEntries.reduce((s, e) => s + e.reps, 0) / lastDateEntries.length;
  // Target = first (freshest) set reps of last session — the set done with most energy
  const targetReps = lastDateEntries[0]?.reps || last.reps;
  // Ready to progress if avg met or exceeded the target (all sets hit the top end)
  if (avgReps >= targetReps) {
    return {
      last: `${last.weight}lbs × ${last.reps}r`,
      next: `${best.weight + inc}lbs`,
      inc: `+${inc}lbs`
    };
  }
  // Otherwise hold weight, focus on hitting reps
  return {
    last: `${last.weight}lbs × ${last.reps}r`,
    next: `${last.weight}lbs`,
    inc: "same",
    hint: "hit your reps first"
  };
}
function fmtDate(d) {
  try {
    const [, m, day] = d.split("-");
    const mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+m - 1];
    if (!mo || !day) return d;
    return mo + " " + +day;
  } catch (e) {
    return d || "?";
  }
}
function todayStr() {
  return new Date().toISOString().split("T")[0];
}
function getAllWorkingExercises() {
  const list = [];
  DAYS.forEach(day => day.blocks.forEach(b => (b.exercises || []).forEach(ex => list.push({
    ...ex,
    dayId: day.id,
    dayAccent: day.accent
  }))));
  return list;
}
function getWeekRange(weeksAgo = 0) {
  const now = new Date(),
    dow = now.getDay();
  const mon = new Date(now);
  mon.setDate(now.getDate() - (dow + 6) % 7 - weeksAgo * 7);
  mon.setHours(0, 0, 0, 0);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  return {
    sunStr: mon.toISOString().split("T")[0],
    satStr: sun.toISOString().split("T")[0]
  };
}
function thisWeekRange() {
  const now = new Date(),
    dow = now.getDay();
  const mon = new Date(now);
  mon.setDate(now.getDate() - (dow + 6) % 7);
  mon.setHours(0, 0, 0, 0);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  return {
    monStr: mon.toISOString().split("T")[0],
    sunStr: sun.toISOString().split("T")[0]
  };
}
function parseDetail(d) {
  const m = d.match(/(\d+)[x×](\d+)/);
  if (!m) return null;
  return {
    sets: parseInt(m[1]),
    reps: parseInt(m[2])
  };
}
function isoWeek(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const w1 = new Date(d.getFullYear(), 0, 4);
  return d.getFullYear() + "-W" + String(1 + Math.round(((d - w1) / 86400000 - 3 + (w1.getDay() + 6) % 7) / 7)).padStart(2, "0");
}
function computeThuFriVisibility(thuCompletedThisWeek) {
  const now = new Date(),
    dow = now.getDay(),
    hour = now.getHours();
  if (dow === 6) {
    if (thuCompletedThisWeek) return {
      showThu: true,
      showFri: false
    };
    return {
      showThu: false,
      showFri: false
    };
  }
  if (dow === 4) {
    if (thuCompletedThisWeek) return {
      showThu: true,
      showFri: false
    };
    return {
      showThu: true,
      showFri: true
    };
  }
  if (dow === 5) {
    if (hour >= 1) {
      if (thuCompletedThisWeek) return {
        showThu: true,
        showFri: false
      };
      return {
        showThu: false,
        showFri: true
      };
    }
    if (thuCompletedThisWeek) return {
      showThu: true,
      showFri: false
    };
    return {
      showThu: true,
      showFri: true
    };
  }
  return {
    showThu: true,
    showFri: true
  };
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────────
function Badge({
  type
}) {
  const s = BADGES[type] || BADGES.MOB;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      padding: "2px 6px",
      borderRadius: 4,
      background: s.bg,
      color: s.color,
      flexShrink: 0,
      fontFamily: "'DM Mono',monospace",
      fontWeight: 600,
      letterSpacing: "0.08em"
    }
  }, type);
}

// ── REST TIMER BUBBLE ─────────────────────────────────────────────────────────
function RestTimerBubble({
  seconds,
  total,
  onDismiss,
  exName
}) {
  const pct = total > 0 ? seconds / total : 0;
  const R = 32,
    cx = 38,
    cy = 38,
    circ = 2 * Math.PI * R;
  const dash = circ * pct;
  const urgent = seconds <= 10;
  const done = seconds === 0;
  const color = done ? W.cyan : urgent ? W.red : W.cyan;
  const trackColor = urgent ? "rgba(255,71,87,0.15)" : "rgba(255,255,255,0.07)";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onDismiss,
    style: {
      position: "fixed",
      bottom: 92,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "rgba(12,10,9,0.98)",
      backdropFilter: "blur(28px)",
      border: `1px solid ${urgent ? "rgba(255,71,87,0.35)" : color + "28"}`,
      borderRadius: 44,
      padding: "10px 22px 10px 10px",
      boxShadow: `0 12px 40px rgba(0,0,0,0.8), 0 0 0 1px ${W.border}${urgent ? `, 0 0 24px rgba(255,71,87,0.12)` : ""}`,
      cursor: "pointer",
      userSelect: "none",
      animation: "slideUp 0.28s cubic-bezier(0.16,1,0.3,1) both",
      transition: "border-color 0.3s,box-shadow 0.3s"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 76,
    height: 76,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: R + 4,
    fill: urgent ? "rgba(255,71,87,0.06)" : done ? "rgba(0,201,177,0.06)" : "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: R,
    fill: "none",
    stroke: trackColor,
    strokeWidth: 4.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: R,
    fill: "none",
    stroke: color,
    strokeWidth: 4.5,
    strokeDasharray: `${dash} ${circ}`,
    strokeLinecap: "round",
    transform: `rotate(-90 ${cx} ${cy})`,
    style: {
      transition: "stroke-dasharray 1s linear,stroke 0.3s,filter 0.3s"
    },
    filter: done ? "url(#ring-glow)" : undefined
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "ring-glow",
    x: "-30%",
    y: "-30%",
    width: "160%",
    height: "160%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2.5",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "blur"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), !done && /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy,
    textAnchor: "middle",
    dominantBaseline: "middle",
    style: {
      fontSize: 16,
      fontFamily: "'DM Mono',monospace",
      fontWeight: 800,
      fill: urgent ? W.red : W.text
    }
  }, seconds), done && /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy,
    textAnchor: "middle",
    dominantBaseline: "middle",
    style: {
      fontSize: 20,
      fill: W.cyan
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 3
    }
  }, "Rest Timer"), exName && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: W.textMid,
      marginBottom: 3,
      maxWidth: 120,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, exName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color,
      letterSpacing: "0.01em",
      fontFamily: "'DM Sans',sans-serif"
    }
  }, done ? "Let's go!" : urgent ? "Almost..." : "Rest up..."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      marginTop: 3,
      letterSpacing: "0.05em"
    }
  }, "tap to dismiss")));
}

// ── REST TIMER SETTINGS MODAL ─────────────────────────────────────────────────
function RestSettingsModal({
  exName,
  current,
  onSave,
  onClose
}) {
  const opts = [30, 60, 90, 120, 180, 240];
  const [val, setVal] = useState(current);
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      zIndex: 2100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "au",
    style: {
      background: W.surfaceHi,
      border: `1px solid ${W.borderHi}`,
      borderRadius: "20px",
      width: "100%",
      maxWidth: 480,
      padding: "20px 18px 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: W.borderHi,
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.textDim,
      marginBottom: 4,
      textTransform: "uppercase"
    }
  }, "Rest Timer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: W.text,
      marginBottom: 18,
      lineHeight: 1.3
    }
  }, exName), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8,
      marginBottom: 16
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setVal(o),
    style: {
      padding: "13px 0",
      borderRadius: 8,
      border: `1.5px solid ${val === o ? W.cyan : W.border}`,
      background: val === o ? W.cyanDim : "transparent",
      color: val === o ? W.cyan : W.textMid,
      fontFamily: "'DM Mono',monospace",
      fontSize: 13,
      fontWeight: val === o ? 700 : 400
    }
  }, o < 60 ? `${o}s` : `${o / 60}m`))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 8,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textMid,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onSave(val);
      onClose();
    },
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 8,
      border: "none",
      background: W.cyan,
      color: W.bg,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 700
    }
  }, "Save"))));
}

// ── REST TIMER SETTINGS PAGE ──────────────────────────────────────────────────
function RestSettingsPage({
  onRestUpdate,
  fontScale,
  onFontScaleChange
}) {
  const [version, setVersion] = useState(0);
  const [editingEx, setEditingEx] = useState(null);
  const [search, setSearch] = useState("");
  const opts = [30, 60, 90, 120, 180, 240];
  const allEx = [];
  const seen = new Set();
  DAYS.forEach(day => {
    day.blocks.forEach(b => {
      (b.exercises || []).forEach(ex => {
        if (!seen.has(ex.name)) {
          seen.add(ex.name);
          allEx.push({
            ...ex,
            dayId: day.id,
            dayLabel: day.label,
            dayAccent: day.accent
          });
        }
      });
    });
  });
  const filtered = search.trim() === "" ? allEx : allEx.filter(ex => ex.name.toLowerCase().includes(search.toLowerCase()));
  const byDay = {};
  DAYS.forEach(d => {
    byDay[d.id] = {
      label: d.label,
      accent: d.accent,
      exercises: []
    };
  });
  filtered.forEach(ex => {
    if (byDay[ex.dayId]) byDay[ex.dayId].exercises.push(ex);
  });
  function handleSet(exName, val) {
    setRestTime(exName, val);
    setVersion(v => v + 1);
    if (onRestUpdate) onRestUpdate();
  }
  function fmtTime(s) {
    return s < 60 ? `${s}s` : `${s / 60}m`;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 100px",
      maxWidth: 680,
      margin: "0 auto"
    },
    className: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: W.textDim,
      marginBottom: 6,
      textTransform: "uppercase"
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.01em"
    }
  }, "Preferences"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 4
    }
  }, "Rest timers, display, accessibility")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      marginBottom: 10,
      textTransform: "uppercase"
    }
  }, "Text Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [["S", "sm"], ["M", "md"], ["L", "lg"]].map(([label, val]) => {
    const active = fontScale === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      onClick: () => onFontScaleChange(val),
      style: {
        flex: 1,
        padding: "11px 0",
        borderRadius: 8,
        border: `1.5px solid ${active ? W.cyan : W.border}`,
        background: active ? W.cyanDim : "transparent",
        color: active ? W.cyan : W.textMid,
        fontFamily: "'DM Mono',monospace",
        fontSize: active ? 15 : 13,
        fontWeight: active ? 700 : 400,
        transition: "all 0.15s"
      }
    }, label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 10px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      marginBottom: 6,
      textTransform: "uppercase"
    }
  }, "Rest Timers")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "12px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search exercises...",
    value: search,
    onChange: e => setSearch(e.target.value),
    style: {
      width: "100%",
      boxSizing: "border-box",
      background: W.surfaceHi,
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      color: W.text,
      fontFamily: "'DM Mono',monospace",
      fontSize: 13,
      padding: "11px 12px",
      outline: "none",
      letterSpacing: "0.02em"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      marginBottom: 10,
      textTransform: "uppercase"
    }
  }, "Set All Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => {
      allEx.forEach(ex => handleSet(ex.name, o));
    },
    style: {
      flex: 1,
      padding: "9px 0",
      borderRadius: 6,
      border: `1px solid ${W.border}`,
      background: W.surface,
      color: W.textMid,
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      fontWeight: 500
    }
  }, fmtTime(o))))), DAYS.map(day => {
    const exList = byDay[day.id]?.exercises || [];
    if (!exList.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: day.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px 8px",
        borderBottom: `1px solid ${W.border}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: W.cyan,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        letterSpacing: "0.15em",
        color: W.cyan,
        textTransform: "uppercase"
      }
    }, day.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace"
      }
    }, "\u2014 ", day.title)), exList.map(ex => {
      const current = getRestTime(ex.name);
      const group = EX_GROUP[ex.name];
      const groupColor = group ? GROUP_COLORS[group] : W.textDim;
      return /*#__PURE__*/React.createElement("div", {
        key: ex.name,
        style: {
          borderBottom: `1px solid ${W.border}`,
          padding: "12px 16px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 500,
          color: W.text,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, ex.name), group && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 9,
          fontFamily: "'DM Mono',monospace",
          color: groupColor,
          marginTop: 2,
          letterSpacing: "0.08em"
        }
      }, group)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: W.cyan,
          fontFamily: "'DM Mono',monospace",
          flexShrink: 0
        }
      }, fmtTime(current))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 5
        }
      }, opts.map(o => /*#__PURE__*/React.createElement("button", {
        key: o,
        onClick: () => handleSet(ex.name, o),
        style: {
          flex: 1,
          padding: "8px 0",
          borderRadius: 6,
          border: `1px solid ${current === o ? W.cyan : W.border}`,
          background: current === o ? W.cyanDim : "transparent",
          color: current === o ? W.cyan : W.textDim,
          fontFamily: "'DM Mono',monospace",
          fontSize: 10,
          fontWeight: current === o ? 700 : 400,
          transition: "all 0.15s"
        }
      }, fmtTime(o)))));
    }));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 0",
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, "No exercises match \"", search, "\""), editingEx && /*#__PURE__*/React.createElement(RestSettingsModal, {
    exName: editingEx,
    current: getRestTime(editingEx),
    onSave: val => handleSet(editingEx, val),
    onClose: () => setEditingEx(null)
  }));
}

// ── TAP BUTTON ────────────────────────────────────────────────────────────────
function TapButton({
  onClick,
  style,
  children,
  className = ""
}) {
  const [tapClass, triggerTap] = useTap();
  return /*#__PURE__*/React.createElement("button", {
    className: [tapClass, className].filter(Boolean).join(" "),
    onClick: () => {
      triggerTap();
      if (onClick) onClick();
    },
    style: style
  }, children);
}

// ── SET TOGGLE BUTTON ─────────────────────────────────────────────────────────
function SetToggleButton({
  done,
  onToggle
}) {
  const [tapClass, triggerTap] = useTap();
  const [flash, setFlash] = useState(false);
  const cooldownRef = useRef(false);
  function handleToggle() {
    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setTimeout(() => {
      cooldownRef.current = false;
    }, 400);
    triggerTap();
    if (!done) {
      setFlash(true);
      setTimeout(() => setFlash(false), 500);
    }
    onToggle();
  }
  const active = done || flash;
  return /*#__PURE__*/React.createElement("button", {
    className: tapClass,
    onClick: handleToggle,
    style: {
      height: 40,
      borderRadius: 8,
      border: `1.5px solid ${active ? W.cyan : W.borderHi}`,
      background: active ? W.cyanDim : "transparent",
      color: active ? W.cyan : W.textDim,
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "border-color 0.2s,background 0.2s,color 0.2s,box-shadow 0.2s",
      width: "100%",
      boxShadow: done ? `0 0 8px ${W.cyan}33` : "none"
    }
  }, done || flash ? "✓" : "○");
}

// ── INLINE SET LOGGER ─────────────────────────────────────────────────────────
function InlineSetLogger({
  ex,
  isActive,
  onStartRest,
  onSaved,
  bodyweight,
  fontScale = "md",
  version = 0,
  dayId = "",
  onExerciseDone = null
}) {
  const loggerRef = useRef(null);
  const F = FS[fontScale] || FS.md;
  const parsed = parseDetail(ex.detail);
  const defaultSets = parsed?.sets || 3,
    defaultReps = parsed?.reps || 10;
  const isBW = BODYWEIGHT_EX.has(ex.name);
  const lastEntry = getLastEntry(ex.name);
  const lastW = lastEntry ? lastEntry.weight : 0;
  const lastR = lastEntry ? lastEntry.reps : defaultReps;
  const prevEntries = getEntries(ex.name);
  const prevDates = [...new Set(prevEntries.map(e => e.date))].sort();
  // lastDate = most recent completed session (exclude today so mid-workout state doesn't corrupt prefill)
  const todayKey = todayStr();
  const lastDate = prevDates.filter(d => d !== todayKey).pop() || null;
  const lastSessionSets = lastDate ? prevEntries.filter(e => e.date === lastDate) : [];
  // prevDate = second-most-recent (for placeholder ghost values)
  const prevDate = prevDates.filter(d => d !== todayKey && d !== lastDate).pop() || null;
  const prevSets = prevDate ? prevEntries.filter(e => e.date === prevDate) : [];
  const prefillW = lastW > 0 ? isBW ? Math.max(0, lastW - (bodyweight || 0)) : lastW : 0;
  // Per-set reps from last session: use set-index match so each row carries its own rep count
  const prefillR = i => {
    const s = lastSessionSets[i];
    if (s) return s.reps;
    // fallback: use last entry's reps, then default
    return lastR || defaultReps;
  };
  const [sets, setSets] = useState(() => Array.from({
    length: defaultSets
  }, (_, i) => ({
    weight: prefillW > 0 ? String(prefillW) : "",
    reps: String(prefillR(i)),
    done: false,
    id: i
  })));
  const [showRestSettings, setShowRestSettings] = useState(false);
  const [restTime, setRestTimeLocal] = useState(getRestTime(ex.name));
  const [prFlashIdx, setPrFlashIdx] = useState(null);
  function handleSetRestTime(t) {
    setRestTime(ex.name, t);
    setRestTimeLocal(t);
  }
  function toggleSet(i) {
    const updated = sets.map((s, idx) => {
      if (idx !== i) return s;
      const nowDone = !s.done;
      if (nowDone) {
        const w = parseFloat(s.weight);
        const r = parseInt(s.reps) || defaultReps;
        // FIX: allow weight=0, only reject empty/NaN for non-BW exercises
        if (!isBW && (s.weight.trim() === "" || isNaN(w))) {
          haptic([10, 20, 10, 20, 10]);
          const container = loggerRef.current;
          if (container) {
            const inputs = container.querySelectorAll(".set-input-weight");
            if (inputs[i]) {
              inputs[i].style.borderColor = "#ff4757";
              inputs[i].style.boxShadow = "0 0 0 2px rgba(255,71,87,0.25)";
              setTimeout(() => {
                inputs[i].style.borderColor = "";
                inputs[i].style.boxShadow = "";
              }, 800);
            }
          }
          return s;
        }
        const safeW = isNaN(w) ? 0 : w;
        if (safeW > 2000) {
          haptic([10, 20, 10]);
          return s;
        } // sanity: reject >2000 lbs
        if (r > 200) {
          haptic([10, 20, 10]);
          return s;
        } // sanity: reject >200 reps
        haptic(30);
        const all = getEntries(ex.name);
        all.push({
          date: todayStr(),
          dayId: dayId,
          weight: isBW ? bodyweight ? bodyweight + safeW : safeW : safeW,
          sets: 1,
          reps: r,
          note: "",
          bodyweight: isBW
        });
        all.sort((a, b) => a.date.localeCompare(b.date));
        setEntries(ex.name, all);
        onSaved();
        // Check if this was the last set — if so, fire onExerciseDone
        const willAllDone = sets.every((s2, idx2) => idx2 === i ? true : s2.done);
        if (willAllDone && onExerciseDone) onExerciseDone(ex.name);
        const freshAll = getEntries(ex.name);
        const newIdx = freshAll.length - 1;
        if (!isBW && isPR(freshAll, newIdx)) {
          setPrFlashIdx(idx);
          haptic([40, 30, 60, 30, 80]);
          setTimeout(() => setPrFlashIdx(null), 1800);
        }
        onStartRest(ex.name, restTime);
      } else {
        haptic([15, 30, 15]);
        const todayS = todayStr();
        const w = parseFloat(s.weight);
        const safeW = isNaN(w) ? 0 : w;
        const r = parseInt(s.reps) || defaultReps;
        const loggedW = isBW ? bodyweight ? bodyweight + safeW : safeW : safeW;
        const all = getEntries(ex.name);
        const matchIdx = all.map((e, i) => i).reverse().find(i => all[i].date === todayS && (all[i].dayId === dayId || !all[i].dayId) && all[i].reps === r && all[i].weight === loggedW);
        if (matchIdx !== undefined) all.splice(matchIdx, 1);
        setEntries(ex.name, all);
        onSaved();
      }
      return {
        ...s,
        done: nowDone
      };
    });
    setSets(updated);
  }
  function addSet() {
    setSets(s => [...s, {
      weight: prefillW > 0 ? String(prefillW) : "",
      reps: String(prefillR(s.length)),
      done: false,
      id: s.length
    }]);
  }
  function updateSet(i, field, val) {
    setSets(s => s.map((x, idx) => idx === i ? {
      ...x,
      [field]: val
    } : x));
  }
  const doneCount = sets.filter(s => s.done).length;
  const allDone = doneCount === sets.length && sets.length > 0;
  const sug = getOverloadSug(getEntries(ex.name), ex.name);
  const liveVolume = sets.reduce((acc, s) => {
    if (!s.done) return acc;
    const w = parseFloat(s.weight) || 0;
    const r = parseInt(s.reps) || 0;
    const fullW = isBW ? (bodyweight || 0) + w : w;
    return acc + fullW * r;
  }, 0);
  const totalProjectedVolume = sets.reduce((acc, s) => {
    const w = parseFloat(s.weight) || 0;
    const r = parseInt(s.reps) || 0;
    const fullW = isBW ? (bodyweight || 0) + w : w;
    return acc + fullW * r;
  }, 0);
  const inputStyle = disabled => ({
    background: disabled ? "transparent" : W.surfaceHi,
    border: `1px solid ${disabled ? W.border : W.borderHi}`,
    borderRadius: 8,
    color: disabled ? W.textDim : W.text,
    fontFamily: "'DM Mono',monospace",
    fontSize: F.input,
    padding: "13px 8px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
    transition: "all 0.15s",
    fontWeight: 600
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: loggerRef,
    style: {
      padding: "8px 0 12px",
      borderTop: `1px solid ${W.border}`
    }
  }, sug && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.cyan,
      marginBottom: 12,
      padding: "8px 12px",
      background: W.cyanDim,
      borderRadius: 6,
      border: `1px solid rgba(0,201,177,0.15)`,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'DM Mono',monospace"
    }
  }, sug.hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textMid
    }
  }, "Hold: ") : /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "\u2192 "), /*#__PURE__*/React.createElement("strong", null, sug.last), sug.hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.yellow
    }
  }, " \xB7 ", sug.hint) : /*#__PURE__*/React.createElement("span", null, " \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#7aedb0"
    }
  }, sug.next, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      opacity: 0.7
    }
  }, "(", sug.inc, ")"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "28px 1fr 1fr 44px",
      gap: 6,
      marginBottom: 8,
      padding: "0 2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.1em"
    }
  }, "#"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.1em"
    }
  }, isBW ? "+ lbs" : "Weight"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.1em"
    }
  }, "Reps"), /*#__PURE__*/React.createElement("span", null)), sets.map((s, i) => {
    const prev = prevSets[i] || null;
    const prevW = prev ? isBW ? Math.max(0, prev.weight - (bodyweight || 0)) : prev.weight : null;
    const prevR = prev ? prev.reps : null;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        marginBottom: 11,
        animation: `setRowIn 0.2s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s both`
      }
    }, prFlashIdx === i && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: -4,
        borderRadius: 10,
        background: "rgba(245,200,66,0.12)",
        border: "1px solid rgba(245,200,66,0.4)",
        pointerEvents: "none",
        animation: "prFlash 1.8s ease forwards",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -10,
        right: 4,
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        color: W.yellow,
        fontWeight: 700,
        letterSpacing: "0.05em",
        background: "rgba(12,10,9,0.9)",
        padding: "1px 6px",
        borderRadius: 4,
        border: "1px solid rgba(245,200,66,0.3)"
      }
    }, "PR \u2605")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "28px 1fr 1fr 44px",
        gap: 6,
        alignItems: "center",
        opacity: s.done ? 0.30 : 1,
        transition: "opacity 0.25s",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        textAlign: "center",
        fontWeight: 600
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "number",
      inputMode: "decimal",
      value: s.weight,
      onChange: e => updateSet(i, "weight", e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter") {
          e.preventDefault();
          const next = document.querySelectorAll(".set-input-reps")[i];
          if (next) next.focus();
        }
      },
      disabled: s.done,
      placeholder: prevW != null ? String(prevW) : isBW ? "0" : "—",
      "aria-label": `Set ${i + 1} weight`,
      className: "set-input-weight",
      style: inputStyle(s.done)
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "number",
      inputMode: "numeric",
      value: s.reps,
      onChange: e => updateSet(i, "reps", e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter") {
          e.preventDefault();
          toggleSet(i);
        }
      },
      disabled: s.done,
      placeholder: prevR != null ? String(prevR) : String(defaultReps),
      "aria-label": `Set ${i + 1} reps`,
      className: "set-input-reps",
      style: inputStyle(s.done)
    })), /*#__PURE__*/React.createElement(SetToggleButton, {
      done: s.done,
      onToggle: () => toggleSet(i)
    })));
  }), doneCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      letterSpacing: "0.15em",
      textAlign: "right",
      marginBottom: 4,
      opacity: 0.7,
      textTransform: "uppercase",
      animation: "fadeIn 0.3s ease"
    }
  }, "\u2713 saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: addSet,
    style: {
      flex: 1,
      height: 36,
      border: `1px dashed ${W.border}`,
      borderRadius: 8,
      background: "transparent",
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.08em"
    }
  }, "+ SET"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowRestSettings(true),
    style: {
      height: 36,
      padding: "0 14px",
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      background: W.surface,
      color: W.textMid,
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "\u23F1 ", restTime < 60 ? `${restTime}s` : `${restTime / 60}m`), totalProjectedVolume > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      flexShrink: 0,
      whiteSpace: "nowrap",
      textAlign: "right",
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: doneCount > 0 ? W.cyan : W.textDim,
      fontWeight: 700,
      transition: "color 0.3s"
    }
  }, liveVolume > 0 ? liveVolume.toLocaleString() : totalProjectedVolume.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginTop: 1
    }
  }, "vol lbs")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: allDone ? W.cyan : W.textDim,
      fontWeight: 700,
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, doneCount, "/", sets.length)), showRestSettings && /*#__PURE__*/React.createElement(RestSettingsModal, {
    exName: ex.name,
    current: restTime,
    onSave: handleSetRestTime,
    onClose: () => setShowRestSettings(false)
  }));
}

// ── HISTORY / EDIT MODAL ──────────────────────────────────────────────────────
function HistoryModal({
  exName,
  onClose,
  onSaved
}) {
  const [version, setVersion] = useState(0);
  const entries = getEntries(exName);
  const sug = entries.length ? getOverloadSug(entries, exName) : null;
  function del(idx) {
    const all = getEntries(exName);
    all.splice(idx, 1);
    setEntries(exName, all);
    setVersion(v => v + 1);
    onSaved();
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      zIndex: 999,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "au",
    style: {
      background: W.surfaceHi,
      borderTop: `1px solid ${W.borderHi}`,
      borderLeft: `1px solid ${W.borderHi}`,
      borderRight: `1px solid ${W.borderHi}`,
      borderRadius: "20px 20px 0 0",
      width: "100%",
      maxWidth: 480,
      maxHeight: "82vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px 14px",
      borderBottom: `1px solid ${W.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: W.borderHi,
      margin: "0 auto 16px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.textDim,
      marginBottom: 5,
      textTransform: "uppercase"
    }
  }, "History"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: W.text,
      lineHeight: 1.2
    }
  }, exName)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      color: W.textDim,
      fontSize: 13,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      flex: 1,
      padding: "14px 18px 28px"
    }
  }, sug && /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.15)`,
      borderRadius: 8,
      padding: "11px 14px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.18em",
      color: W.cyan,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Next Session"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: W.text,
      fontFamily: "'DM Mono',monospace"
    }
  }, sug.hint ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textMid
    }
  }, "Hold: "), /*#__PURE__*/React.createElement("strong", null, sug.last), /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.yellow
    }
  }, " \xB7 ", sug.hint)) : /*#__PURE__*/React.createElement(React.Fragment, null, "Last: ", /*#__PURE__*/React.createElement("strong", null, sug.last), " \u2192 Try: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: W.cyan
    }
  }, sug.next), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: W.textDim
    }
  }, "(", sug.inc, ")")))), !entries.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center",
      padding: "32px 0"
    }
  }, "No entries yet") : [...entries].reverse().map((e, i) => {
    const ri = entries.length - 1 - i,
      pr = !e.bodyweight && isPR(entries, ri);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 0",
        borderBottom: `1px solid ${W.border}`,
        animation: `setRowIn 0.18s ease ${i * 0.03}s both`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        width: 44,
        flexShrink: 0
      }
    }, fmtDate(e.date)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontFamily: "'DM Mono',monospace",
        color: W.text,
        fontWeight: 600,
        flex: 1
      }
    }, e.bodyweight ? e.weight > 0 ? `+${e.weight}lbs BW` : "BW" : `${e.weight}lbs`, " \xB7 ", e.sets > 1 ? `${e.sets}×` : "", e.reps, "r"), pr && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        background: W.cyanDim,
        border: `1px solid rgba(0,201,177,0.25)`,
        color: W.cyan,
        borderRadius: 4,
        padding: "2px 7px",
        fontFamily: "'DM Mono',monospace",
        fontWeight: 700,
        letterSpacing: "0.08em"
      }
    }, "PR"), !e.bodyweight && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace"
      }
    }, "~", calc1RM(e.weight, e.reps)), /*#__PURE__*/React.createElement("button", {
      onClick: () => del(ri),
      style: {
        background: "rgba(255,71,87,0.08)",
        border: `1px solid rgba(255,71,87,0.15)`,
        borderRadius: 6,
        color: W.red,
        fontSize: 11,
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, "\u2715"));
  }))));
}

// ── BODYWEIGHT TRACKER CARD ───────────────────────────────────────────────────
function BodyweightCard({
  onUpdate
}) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(null);
  const [bwVersion, setBwVersion] = useState(0);
  const entries = [...bwStore].slice(-10);
  function save() {
    const w = parseFloat(input);
    if (isNaN(w) || w < 50 || w > 999) return; // sanity guard: 50–999 lbs
    logBW(w);
    setInput("");
    setMsg("✓");
    onUpdate();
    setBwVersion(v => v + 1);
    setTimeout(() => setMsg(null), 1500);
  }
  const latest = getLatestBW();
  const prev = entries.length >= 2 ? entries[entries.length - 2].weight : null;
  const trend = latest && prev ? latest - prev : null;
  const trendColor = trend === null ? W.textDim : trend > 0 ? W.cyan : trend < 0 ? W.red : W.textDim;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Body Weight"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: latest ? 22 : 14,
      fontWeight: 800,
      color: latest ? trendColor : W.textDim,
      lineHeight: 1,
      fontFamily: "'DM Mono',monospace"
    }
  }, latest != null ? `${latest}` : "—"), latest != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "lbs"), trend !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: trendColor,
      fontFamily: "'DM Mono',monospace"
    }
  }, trend > 0 ? "+" : "", trend.toFixed(1)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    placeholder: "lbs",
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && save(),
    style: {
      width: 68,
      background: W.surfaceHi,
      border: `1px solid ${W.borderHi}`,
      borderRadius: 8,
      color: W.text,
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      padding: "8px",
      outline: "none",
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      height: 36,
      padding: "0 16px",
      borderRadius: 8,
      border: "none",
      background: W.cyan,
      color: W.bg,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0,
      letterSpacing: "0.05em"
    }
  }, msg || "Log")));
}

// ── WORKOUT HISTORY CARD ──────────────────────────────────────────────────────
function synthesizeSessionsFromEntries() {
  // Reconstruct session records from raw memStore entries when sessionsStore is missing them.
  // Groups entries by {dayId, date} and builds a minimal session object.
  const byDayDate = {};
  DAYS.forEach(day => {
    day.blocks.flatMap(b => b.exercises || []).forEach(ex => {
      getEntries(ex.name).forEach(e => {
        const k = `${e.dayId || day.id}_${e.date}`;
        if (!byDayDate[k]) byDayDate[k] = {
          dayId: e.dayId || day.id,
          date: e.date,
          sets: [],
          exNames: new Set()
        };
        byDayDate[k].sets.push({
          name: ex.name,
          weight: e.weight,
          sets: 1,
          reps: e.reps
        });
        byDayDate[k].exNames.add(ex.name);
      });
    });
  });
  return Object.values(byDayDate).sort((a, b) => b.date.localeCompare(a.date)).map(s => ({
    dayId: s.dayId,
    date: s.date,
    duration: "—",
    exercisesLogged: s.exNames.size,
    exercisesTotal: DAYS.find(d => d.id === s.dayId)?.blocks.flatMap(b => b.exercises || []).length || s.exNames.size,
    sets: s.sets,
    _synthesized: true
  }));
}
function WorkoutHistoryCard({
  version = 0,
  onDelete
}) {
  const [expanded, setExpanded] = useState(null); // key: date_dayId
  // Merge stored sessions with any entry-based sessions not yet in sessionsStore
  const storedKeys = new Set(sessionsStore.map(s => `${s.dayId}_${s.date}`));
  const synthesized = synthesizeSessionsFromEntries().filter(s => !storedKeys.has(`${s.dayId}_${s.date}`));
  const allSessions = [...sessionsStore, ...synthesized].sort((a, b) => b.date.localeCompare(a.date));
  if (!allSessions.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Workout History"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      paddingTop: 4
    }
  }, "Log a workout to see history"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, "Workout History"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, allSessions.length, " sessions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 300,
      overflowY: "auto"
    }
  }, allSessions.slice(0, 30).map((s, i) => {
    const day = DAYS.find(d => d.id === s.dayId);
    const sessionKey = `${s.date}_${s.dayId}`;
    const isOpen = expanded === sessionKey;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: `1px solid ${W.border}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setExpanded(isOpen ? null : sessionKey),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        cursor: "pointer",
        background: isOpen ? W.surface : "transparent",
        transition: "background 0.15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: W.cyan,
        flexShrink: 0,
        boxShadow: `0 0 6px ${W.cyanGlow}`,
        opacity: i === 0 ? 1 : 0.4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: W.text
      }
    }, day?.title || s.dayId), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        marginTop: 2
      }
    }, fmtDate(s.date), " \xB7 ", s.duration, " \xB7 ", s.exercisesLogged, "/", s.exercisesTotal, " ex")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        color: W.textDim,
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform 0.2s",
        fontFamily: "'DM Mono',monospace"
      }
    }, "\u25BC")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 16px 12px",
        background: W.surface
      }
    }, s.sets && s.sets.length > 0 ? s.sets.map((entry, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        display: "flex",
        gap: 8,
        padding: "5px 0",
        fontSize: 11,
        fontFamily: "'DM Mono',monospace",
        color: W.textMid,
        borderBottom: `1px solid ${W.border}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: W.text
      }
    }, entry.name), /*#__PURE__*/React.createElement("span", null, entry.weight > 0 ? `${entry.weight}lbs × ` : "", entry.sets, "\xD7", entry.reps))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        padding: "6px 0"
      }
    }, "No set data recorded"), onDelete && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 10,
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onDelete(s.date, s.dayId);
        setExpanded(null);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 14px",
        borderRadius: 8,
        border: `1px solid rgba(255,71,87,0.25)`,
        background: "rgba(255,71,87,0.07)",
        color: W.red,
        fontFamily: "'DM Mono',monospace",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.05em",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3h9M4.5 3V2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1M5 5.5v3M7 5.5v3M2.5 3l.5 6.5a.5.5 0 00.5-.5L9.5 3",
      stroke: W.red,
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), "Delete Session"))));
  })));
}

// ── DELETE DAY MODAL ──────────────────────────────────────────────────────────
function DeleteDayModal({
  date,
  dayId = null,
  onClose,
  onDeleted
}) {
  const allEx = getAllWorkingExercises();
  const affected = allEx.filter(ex => getEntries(ex.name).some(e => e.date === date && (!dayId || e.dayId === dayId || !e.dayId)));
  function confirm() {
    delEntriesByDate(date, dayId);
    delSessionByDate(date, dayId);
    onDeleted();
    onClose();
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.92)",
      zIndex: 1500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "au",
    style: {
      background: W.surfaceHi,
      border: `1px solid rgba(255,71,87,0.3)`,
      borderRadius: "20px",
      width: "100%",
      maxWidth: 480,
      padding: "24px 22px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: W.borderHi,
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.red,
      marginBottom: 8,
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "Delete Session"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: W.text,
      marginBottom: 6
    }
  }, fmtDate(date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 16
    }
  }, "Removes all data for this date (", affected.length, " exercise", affected.length !== 1 ? "s" : "", ")."), affected.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18,
      maxHeight: 80,
      overflowY: "auto",
      background: W.surface,
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, affected.map(ex => /*#__PURE__*/React.createElement("div", {
    key: ex.name,
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      padding: "2px 0"
    }
  }, "\xB7 ", ex.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      background: "transparent",
      border: `1px solid ${W.borderHi}`,
      borderRadius: 10,
      color: W.textMid,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 600,
      padding: "14px 0"
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: confirm,
    style: {
      flex: 1,
      background: "rgba(255,71,87,0.12)",
      border: `1px solid rgba(255,71,87,0.3)`,
      borderRadius: 10,
      color: W.red,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 700,
      padding: "14px 0"
    }
  }, "Delete"))));
}

// ── WORKOUT SUMMARY MODAL ─────────────────────────────────────────────────────
function WorkoutSummaryModal({
  day,
  elapsed,
  setsLogged,
  onClose,
  onDelete
}) {
  const m = Math.floor(elapsed / 60),
    s = elapsed % 60;
  const todayS = todayStr();
  const allEx = day.blocks.flatMap(b => b.exercises || []);
  const loggedExNames = allEx.filter(ex => getEntries(ex.name).some(e => e.date === todayS && (e.dayId === day.id || !e.dayId))).map(ex => ex.name);
  const prsToday = [];
  allEx.forEach(ex => {
    const ents = getEntries(ex.name);
    ents.filter(e => e.date === todayS && (e.dayId === day.id || !e.dayId)).forEach((e, _) => {
      const idx = ents.indexOf(e);
      if (!e.bodyweight && isPR(ents, idx)) prsToday.push({
        name: ex.name,
        weight: e.weight,
        reps: e.reps
      });
    });
  });
  let totalVol = 0;
  allEx.forEach(ex => {
    getEntries(ex.name).filter(e => e.date === todayS && (e.dayId === day.id || !e.dayId)).forEach(e => {
      totalVol += e.weight * e.reps;
    });
  });
  const exSummary = allEx.map(ex => {
    const todaySets = getEntries(ex.name).filter(e => e.date === todayS && (e.dayId === day.id || !e.dayId));
    if (!todaySets.length) return null;
    const bestW = Math.max(...todaySets.map(e => e.weight));
    return {
      name: ex.name,
      sets: todaySets.length,
      reps: todaySets[0].reps,
      weight: bestW,
      isBW: BODYWEIGHT_EX.has(ex.name)
    };
  }).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.96)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "au",
    style: {
      background: W.surfaceHi,
      border: `1px solid ${W.border}`,
      borderTop: `2px solid ${W.cyan}`,
      borderRadius: "20px",
      width: "100%",
      maxWidth: 480,
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      borderBottom: `1px solid ${W.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: W.borderHi,
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: W.cyan,
      marginBottom: 6,
      textTransform: "uppercase"
    }
  }, "Session Complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: W.text,
      letterSpacing: "-0.01em",
      marginBottom: 2
    }
  }, day.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, day.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      borderBottom: `1px solid ${W.border}`,
      flexShrink: 0
    }
  }, [["Time", `${m}:${String(s).padStart(2, "0")}`], ["Exercises", `${loggedExNames.length}/${allEx.length}`], ["Volume", totalVol > 0 ? `${Math.round(totalVol).toLocaleString()}` : "—"]].map(([label, val], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "14px 12px",
      borderRight: i < 2 ? `1px solid ${W.border}` : "none",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: i === 0 ? W.text : i === 1 ? W.cyan : W.yellow,
      fontFamily: "'DM Mono',monospace",
      lineHeight: 1
    }
  }, val), i === 2 && totalVol > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 2
    }
  }, "lbs")))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      flex: 1,
      padding: "14px 18px 8px"
    }
  }, prsToday.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.yellow,
      textTransform: "uppercase",
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "Personal Records")), prsToday.map((pr, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 12px",
      background: "rgba(245,200,66,0.06)",
      border: "1px solid rgba(245,200,66,0.15)",
      borderRadius: 8,
      marginBottom: 6,
      animation: `setRowIn 0.18s ease ${i * 0.06}s both`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text
    }
  }, pr.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.yellow,
      marginTop: 2
    }
  }, pr.weight, " lbs \xD7 ", pr.reps, " reps \xB7 ~", calc1RM(pr.weight, pr.reps), " 1RM")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      background: "rgba(245,200,66,0.12)",
      color: W.yellow,
      border: "1px solid rgba(245,200,66,0.25)",
      borderRadius: 4,
      padding: "2px 8px",
      fontWeight: 700
    }
  }, "PR")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Sets Logged"), exSummary.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 0",
      borderBottom: `1px solid ${W.border}`,
      animation: `setRowIn 0.16s ease ${i * 0.04}s both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: W.text,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, ex.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textMid,
      flexShrink: 0
    }
  }, ex.sets, " set", ex.sets !== 1 ? "s" : "", " \xB7 ", ex.isBW ? "BW" : `${ex.weight}lbs`, " \xD7 ", ex.reps, "r"))), exSummary.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      padding: "12px 0"
    }
  }, "No sets logged today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px 28px",
      borderTop: `1px solid ${W.border}`,
      flexShrink: 0,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: "12px 16px",
      borderRadius: 10,
      border: `1px solid rgba(255,71,87,0.25)`,
      background: "rgba(255,71,87,0.06)",
      color: W.red,
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      fontWeight: 600,
      flexShrink: 0
    }
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 10,
      border: "none",
      background: W.cyan,
      color: W.bg,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 700
    }
  }, "Done \u2713"))));
}

// ── END WORKOUT CONFIRM MODAL ─────────────────────────────────────────────────
function EndWorkoutModal({
  day,
  elapsed,
  onConfirm,
  onCancel
}) {
  const m = Math.floor(elapsed / 60),
    s = elapsed % 60;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.94)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "au",
    style: {
      background: W.surfaceHi,
      border: `1px solid ${W.borderHi}`,
      borderRadius: "20px",
      width: "100%",
      maxWidth: 480,
      padding: "28px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: W.borderHi,
      margin: "0 auto 24px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.cyan,
      marginBottom: 8,
      textAlign: "center",
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "End Workout?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: W.text,
      marginBottom: 4,
      textAlign: "center"
    }
  }, day.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      marginBottom: 24,
      textAlign: "center"
    }
  }, "Session time: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.text,
      fontWeight: 700
    }
  }, m, ":", String(s).padStart(2, "0"))), (day.id === "thu" || day.id === "fri") && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 20,
      textAlign: "center",
      lineHeight: 1.6,
      padding: "10px 14px",
      background: W.surface,
      borderRadius: 8
    }
  }, "This session \u2192 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.cyan,
      fontWeight: 700
    }
  }, "Friday will be hidden"), " this week."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      flex: 1,
      background: "transparent",
      border: `1px solid ${W.borderHi}`,
      borderRadius: 10,
      color: W.textMid,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 600,
      padding: "15px 0"
    }
  }, "Keep Going"), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      flex: 1,
      background: W.cyan,
      border: "none",
      borderRadius: 10,
      color: W.bg,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 700,
      padding: "15px 0",
      letterSpacing: "0.02em"
    }
  }, "End It \u2713"))));
}

// ── DONUT CHART ───────────────────────────────────────────────────────────────
// Distinct colors for each muscle group segment
const DONUT_COLORS = {
  CNS: "#f5c842",
  Legs: "#00e5a0",
  Push: "#ff5c7a",
  Pull: "#4fc3f7",
  Core: "#b57bee",
  Stability: "#ff9a3c"
};
function DonutChart({
  data,
  size = 240
}) {
  const cx = size / 2,
    cy = size / 2,
    outerR = size * 0.32,
    innerR = size * 0.17;
  const entries = GROUPS.map(g => ({
    g,
    v: data[g] || 0
  }));
  const total = entries.reduce((s, e) => s + e.v, 0) || 1;
  let cursor = -Math.PI / 2;
  const segments = entries.map(({
    g,
    v
  }) => {
    const frac = v / total,
      startA = cursor,
      sweep = frac * Math.PI * 2;
    cursor += sweep;
    return {
      g,
      frac,
      startA,
      endA: cursor,
      sweep
    };
  });
  function arc(r, a1, a2) {
    const x1 = cx + r * Math.cos(a1),
      y1 = cy + r * Math.sin(a1),
      x2 = cx + r * Math.cos(a2),
      y2 = cy + r * Math.sin(a2),
      large = a2 - a1 > Math.PI ? 1 : 0;
    return {
      x1,
      y1,
      x2,
      y2,
      large
    };
  }
  function slicePath(seg) {
    const {
        startA,
        endA
      } = seg,
      o = arc(outerR, startA, endA),
      i = arc(innerR, startA, endA);
    return `M${o.x1},${o.y1} A${outerR},${outerR},0,${o.large},1,${o.x2},${o.y2} L${i.x2},${i.y2} A${innerR},${innerR},0,${i.large},0,${i.x1},${i.y1} Z`;
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      overflow: "visible",
      display: "block",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: outerR,
    fill: "none",
    stroke: W.border,
    strokeWidth: outerR - innerR
  }), segments.map(seg => {
    if (seg.sweep < 0.015) return null;
    const color = DONUT_COLORS[seg.g] || GROUP_COLORS[seg.g],
      midA = seg.startA + seg.sweep / 2,
      pct = Math.round(seg.frac * 100);
    const lineR1 = outerR + 4,
      lineR2 = outerR + 14 + pct * 0.4;
    const lx1 = cx + lineR1 * Math.cos(midA),
      ly1 = cy + lineR1 * Math.sin(midA),
      lx2 = cx + lineR2 * Math.cos(midA),
      ly2 = cy + lineR2 * Math.sin(midA);
    const anchor = Math.cos(midA) > 0.15 ? "start" : Math.cos(midA) < -0.15 ? "end" : "middle";
    const tx = cx + (lineR2 + 4) * Math.cos(midA),
      ty = cy + (lineR2 + 4) * Math.sin(midA);
    return /*#__PURE__*/React.createElement("g", {
      key: seg.g
    }, /*#__PURE__*/React.createElement("path", {
      d: slicePath(seg),
      fill: color,
      fillOpacity: 0.9,
      stroke: W.bg,
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement("line", {
      x1: lx1,
      y1: ly1,
      x2: lx2,
      y2: ly2,
      stroke: color,
      strokeWidth: 1,
      strokeOpacity: 0.6
    }), /*#__PURE__*/React.createElement("text", {
      x: tx,
      y: ty - 5,
      textAnchor: anchor,
      dominantBaseline: "middle",
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        fontWeight: 600,
        fill: color
      }
    }, seg.g), /*#__PURE__*/React.createElement("text", {
      x: tx,
      y: ty + 7,
      textAnchor: anchor,
      dominantBaseline: "middle",
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        fill: color,
        opacity: 0.7
      }
    }, pct, "%"));
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: innerR,
    fill: W.bg
  }));
}

// ── PROGRESS VIEW ─────────────────────────────────────────────────────────────
function ProgressView({
  onClose,
  version
}) {
  const [sel, setSel] = useState(null),
    [range, setRange] = useState(0);
  const canvasRef = useRef(null),
    chartRef = useRef(null);
  const allEnts = sel ? getEntries(sel) : [];
  let filtered = allEnts;
  if (range > 0) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - range);
    const cs = cutoff.toISOString().split("T")[0];
    filtered = allEnts.filter(e => e.date >= cs);
  }
  useEffect(() => {
    if (!sel || !canvasRef.current || filtered.length < 2) {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      return;
    }
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
    const Chart = window.Chart;
    if (!Chart) return;
    const labels = filtered.map(e => fmtDate(e.date)),
      weights = filtered.map(e => e.weight),
      oneRMs = filtered.map(e => calc1RM(e.weight, e.reps)),
      volumes = filtered.map(e => e.weight * e.sets * e.reps);
    const pColors = filtered.map(e => isPR(allEnts, allEnts.indexOf(e)) ? W.yellow : W.cyan);
    const pSizes = filtered.map(e => isPR(allEnts, allEnts.indexOf(e)) ? 8 : 4);
    chartRef.current = new Chart(canvasRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Weight",
          data: weights,
          borderColor: W.cyan,
          backgroundColor: "rgba(0,201,177,0.06)",
          borderWidth: 2,
          pointRadius: pSizes,
          pointBackgroundColor: pColors,
          pointBorderColor: W.bg,
          pointBorderWidth: 2,
          tension: 0.3,
          fill: true,
          yAxisID: "y"
        }, {
          label: "Est. 1RM",
          data: oneRMs,
          borderColor: "rgba(171,151,232,0.8)",
          borderWidth: 2,
          borderDash: [5, 3],
          pointRadius: 3,
          pointBackgroundColor: "#ab97e8",
          tension: 0.3,
          yAxisID: "y"
        }, {
          label: "Volume",
          data: volumes,
          borderColor: "rgba(245,200,66,0.4)",
          borderWidth: 1.5,
          borderDash: [3, 3],
          pointRadius: 2,
          tension: 0.3,
          yAxisID: "y2"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            labels: {
              color: W.textMid,
              font: {
                size: 10,
                family: "DM Mono"
              },
              boxWidth: 12,
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: W.surfaceHi,
            borderColor: W.borderHi,
            borderWidth: 1,
            titleColor: W.text,
            bodyColor: W.textMid,
            padding: 10,
            callbacks: {
              afterBody: items => {
                const e = filtered[items[0].dataIndex],
                  pr = isPR(allEnts, allEnts.indexOf(e));
                return [`  ${e.sets}×${e.reps}`, ...(e.note ? [`  "${e.note}"`] : []), ...(pr ? ["  ★ PR"] : [])];
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: W.textDim,
              font: {
                size: 10
              },
              maxTicksLimit: 10,
              maxRotation: 30
            },
            grid: {
              color: W.border
            },
            border: {
              color: W.border
            }
          },
          y: {
            min: Math.min(...weights, ...oneRMs) - 5,
            max: Math.max(...weights, ...oneRMs) + 10,
            position: "left",
            ticks: {
              color: W.textDim,
              font: {
                size: 10
              },
              callback: v => v + " lbs"
            },
            grid: {
              color: W.border
            },
            border: {
              color: W.border
            }
          },
          y2: {
            position: "right",
            ticks: {
              color: W.textDim,
              font: {
                size: 10
              },
              callback: v => v.toLocaleString()
            },
            grid: {
              display: false
            },
            border: {
              color: W.border
            }
          }
        }
      }
    });
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [sel, range, version]);
  const sug = allEnts.length ? getOverloadSug(allEnts) : null,
    best1RM = allEnts.length ? Math.max(...allEnts.map(e => calc1RM(e.weight, e.reps))) : 0;
  const prCount = allEnts.filter((e, i) => isPR(allEnts, i)).length;
  const diff = allEnts.length > 1 ? (allEnts[allEnts.length - 1].weight - allEnts[0].weight).toFixed(1) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.92)",
      zIndex: 2000,
      display: "flex",
      padding: 16,
      alignItems: "stretch",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.surfaceHi,
      border: `1px solid ${W.borderHi}`,
      borderRadius: 12,
      width: "100%",
      maxWidth: 1050,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 14px",
      borderBottom: `1px solid ${W.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: `linear-gradient(90deg,${W.cyan},#ab97e8,${W.orange},${W.yellow})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.textDim,
      marginBottom: 4,
      textTransform: "uppercase"
    }
  }, "All Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: W.text
    }
  }, "Progression Charts")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "transparent",
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      color: W.textMid,
      fontSize: 14,
      cursor: "pointer",
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "210px 1fr",
      flex: 1,
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: `1px solid ${W.border}`,
      overflowY: "auto",
      padding: "8px 6px"
    }
  }, DAYS.filter(d => d.id !== "fri").map(day => /*#__PURE__*/React.createElement("div", {
    key: day.id,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.15em",
      color: W.textDim,
      textTransform: "uppercase",
      padding: "4px 8px 2px"
    }
  }, day.label), day.blocks.flatMap(b => b.exercises || []).map(ex => {
    const cnt = getEntries(ex.name).length,
      prs = getEntries(ex.name).filter((e, i) => isPR(getEntries(ex.name), i)).length;
    return /*#__PURE__*/React.createElement("div", {
      key: ex.name,
      onClick: () => {
        setSel(ex.name);
        setRange(0);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 8px",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 11,
        color: sel === ex.name ? W.cyan : cnt > 0 ? W.textMid : W.textDim,
        background: sel === ex.name ? W.cyanDim : "transparent",
        transition: "all 0.1s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: cnt > 0 ? W.cyan : W.border,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ex.name), prs > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        color: W.yellow,
        fontFamily: "'DM Mono',monospace"
      }
    }, "\u2605", prs), cnt > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim
      }
    }, cnt));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, !sel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "\u2190 Select an exercise") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: W.text
    }
  }, sel), allEnts.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, [["Sessions", new Set(allEnts.map(e => e.date)).size, null], ["Best", `${Math.max(...allEnts.map(e => e.weight))} lbs`, null], ["Last", `${allEnts[allEnts.length - 1].weight}lbs × ${allEnts[allEnts.length - 1].reps}r`, null], diff !== null && ["Change", `${+diff > 0 ? "+" : ""}${diff} lbs`, +diff > 0 ? W.cyan : +diff < 0 ? W.red : W.textMid], prCount > 0 && ["PRs", `★ ${prCount}`, W.yellow]].filter(Boolean).map(([k, v, col]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.textMid,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 4,
      padding: "4px 9px"
    }
  }, k, ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: col || W.text
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.2)`,
      color: W.cyan,
      borderRadius: 4,
      padding: "4px 11px"
    }
  }, "Est. 1RM: ", /*#__PURE__*/React.createElement("strong", null, best1RM, " lbs")), sug && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      background: "rgba(171,151,232,0.08)",
      border: "1px solid rgba(171,151,232,0.2)",
      color: "#ab97e8",
      borderRadius: 4,
      padding: "4px 11px"
    }
  }, "Next: ", /*#__PURE__*/React.createElement("strong", null, sug.next)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, [15, 30, 60, 90, 0].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRange(r),
    style: {
      background: range === r ? W.cyanDim : W.surface,
      border: `1px solid ${range === r ? W.cyan : W.border}`,
      color: range === r ? W.cyan : W.textMid,
      fontFamily: "'DM Mono',monospace",
      fontSize: 10,
      padding: "4px 10px",
      borderRadius: 5,
      cursor: "pointer"
    }
  }, r === 0 ? "ALL" : `${r}D`))), filtered.length < 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 180,
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      background: W.surface,
      borderRadius: 8,
      border: `1px dashed ${W.border}`
    }
  }, allEnts.length === 0 ? "No entries logged yet" : "Log at least 2 entries to see the chart") : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 280
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  })))))));
}

// ── NAV DOT ───────────────────────────────────────────────────────────────────
const NAV_BAR_H = 76;
const NAV_DOT_CY = 31;
function NavDot({
  day,
  isActive,
  isDone,
  hasLogged,
  onTap
}) {
  const [tapClass, triggerTap] = useTap();
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      triggerTap();
      onTap();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      background: "none",
      border: "none",
      padding: "0 2px",
      zIndex: 1,
      flex: 1,
      cursor: "pointer",
      height: "100%",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: tapClass,
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      flexShrink: 0,
      background: isActive ? day.accent : isDone ? day.accent + "28" : "rgba(255,255,255,0.05)",
      border: `1.5px solid ${isActive ? day.accent : isDone ? day.accent + "88" : "rgba(255,255,255,0.12)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: isActive ? `0 0 0 3px ${day.accent}28,0 0 16px ${day.accent}44` : "none",
      transition: "background 0.25s,box-shadow 0.25s,border-color 0.25s"
    }
  }, hasLogged && !isActive && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: day.accent,
      opacity: isDone ? 0.55 : 0.85,
      transition: "opacity 0.2s"
    }
  }), isActive && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#0c0a09"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: isActive ? day.accent : isDone ? day.accent + "aa" : "rgba(255,255,255,0.35)",
      fontWeight: isActive ? 700 : 400,
      transition: "color 0.25s",
      lineHeight: 1
    }
  }, day.label.slice(0, 3)));
}

// ── BOTTOM NAV ────────────────────────────────────────────────────────────────
const NAV_REST_COLOR = "rgba(255,255,255,0.55)";
function NavIconBtn({
  tapClass,
  onClick,
  isActive,
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      padding: "0 20px",
      border: "none",
      background: "transparent",
      flexShrink: 0,
      cursor: "pointer",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: tapClass,
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: isActive ? "rgba(0,201,177,0.1)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.25s"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      color: isActive ? W.cyan : NAV_REST_COLOR,
      fontWeight: isActive ? 600 : 400,
      textTransform: "uppercase",
      transition: "color 0.25s",
      lineHeight: 1
    }
  }, label));
}
function BottomNav({
  page,
  setPage,
  visibleDayIds
}) {
  const {
    monStr,
    sunStr
  } = thisWeekRange();
  const days = DAYS.filter(d => visibleDayIds.includes(d.id));
  const activeIdx = days.findIndex(d => d.id === page);
  const isDay = activeIdx >= 0;
  const [homeTap, triggerHome] = useTap();
  const [settingsTap, triggerSettings] = useTap();
  const n = days.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "rgba(9,7,6,0.97)",
      backdropFilter: "blur(28px)",
      WebkitBackdropFilter: "blur(28px)",
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: "0 auto",
      display: "flex",
      alignItems: "stretch",
      height: NAV_BAR_H,
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, /*#__PURE__*/React.createElement(NavIconBtn, {
    tapClass: homeTap,
    onClick: () => {
      triggerHome();
      setPage("home");
    },
    isActive: page === "home",
    label: "Home"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L8 2l6 4.5V14H10v-3.5H6V14H2V6.5z",
    fill: page === "home" ? W.cyan : NAV_REST_COLOR
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: `${NAV_BAR_H}px`,
      overflow: "visible",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("defs", null, days.slice(0, -1).map((_, i) => {
    const x1pct = (i + 0.5) / n * 100,
      x2pct = (i + 1 + 0.5) / n * 100;
    return /*#__PURE__*/React.createElement("linearGradient", {
      key: i,
      id: `seg-${i}`,
      gradientUnits: "userSpaceOnUse",
      x1: `${x1pct}%`,
      y1: NAV_DOT_CY,
      x2: `${x2pct}%`,
      y2: NAV_DOT_CY
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: days[i].accent
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: days[i + 1].accent
    }));
  }), /*#__PURE__*/React.createElement("filter", {
    id: "line-glow",
    x: "-5%",
    y: "-400%",
    width: "110%",
    height: "900%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "1.8",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "blur"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), days.slice(0, -1).map((_, i) => {
    const x1pct = (i + 0.5) / n * 100,
      x2pct = (i + 1 + 0.5) / n * 100;
    const colored = isDay && i <= activeIdx;
    const isLeading = isDay && i === activeIdx;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: `${x1pct}%`,
      y1: NAV_DOT_CY,
      x2: `${x2pct}%`,
      y2: NAV_DOT_CY,
      stroke: "rgba(255,255,255,0.07)",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), colored && /*#__PURE__*/React.createElement("line", {
      x1: `${x1pct}%`,
      y1: NAV_DOT_CY,
      x2: `${x2pct}%`,
      y2: NAV_DOT_CY,
      stroke: `url(#seg-${i})`,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      filter: isLeading ? "url(#line-glow)" : undefined
    }));
  })), days.map((d, i) => {
    const isActive = page === d.id;
    const isDone = isDay && activeIdx > i;
    const hasLogged = d.blocks.flatMap(b => b.exercises || []).some(ex => getEntries(ex.name).some(e => e.date >= monStr && e.date <= sunStr));
    return /*#__PURE__*/React.createElement(NavDot, {
      key: d.id,
      day: d,
      isActive: isActive,
      isDone: isDone,
      hasLogged: hasLogged,
      onTap: () => setPage(d.id)
    });
  })), /*#__PURE__*/React.createElement(NavIconBtn, {
    tapClass: settingsTap,
    onClick: () => {
      triggerSettings();
      setPage("settings");
    },
    isActive: page === "settings",
    label: "Timers"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "2.5",
    stroke: page === "settings" ? W.cyan : NAV_REST_COLOR,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41",
    stroke: page === "settings" ? W.cyan : NAV_REST_COLOR,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))));
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({
  version,
  setPage,
  onViewProgress,
  onDeleteDate,
  onBWUpdate
}) {
  const {
    monStr,
    sunStr
  } = thisWeekRange();
  const allWorkingEx = getAllWorkingExercises();
  let totalPRs = 0;
  allWorkingEx.forEach(ex => {
    const ents = getEntries(ex.name);
    ents.forEach((e, i) => {
      if (!e.bodyweight && isPR(ents, i)) totalPRs++;
    });
  });
  // Count sessions this week from sessionsStore (proper ended sessions only)
  const sessions = new Set(sessionsStore.filter(s => s.date >= monStr && s.date <= sunStr).map(s => s.date + "_" + s.dayId)).size;
  const top1RMs = [];
  allWorkingEx.filter(ex => !BODYWEIGHT_EX.has(ex.name) && !LIGHT_INTENT.has(ex.name)).forEach(ex => {
    const ents = getEntries(ex.name);
    if (!ents.length) return;
    const best = Math.max(...ents.map(e => calc1RM(e.weight, e.reps)));
    const bestEntry = ents.reduce((b, e) => calc1RM(e.weight, e.reps) >= calc1RM(b.weight, b.reps) ? e : b);
    top1RMs.push({
      name: ex.name,
      orm: best,
      weight: bestEntry.weight,
      reps: bestEntry.reps,
      accent: ex.dayAccent
    });
  });
  top1RMs.sort((a, b) => b.orm - a.orm);
  const trends = [];
  allWorkingEx.filter(ex => !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name)).forEach(ex => {
    const ents = getEntries(ex.name);
    if (ents.length < 2) return;
    const first = ents[0].weight,
      last = ents[ents.length - 1].weight;
    if (first <= 0 || last <= 0) return; // skip BW/bodyweight-only or unweighted entries
    const pct = (last - first) / first * 100;
    const distinctDates = new Set(ents.map(e => e.date)).size;
    if (distinctDates < 2) return; // need at least 2 separate days
    trends.push({
      name: ex.name,
      pct,
      first,
      last,
      sessions: distinctDates,
      accent: ex.dayAccent
    });
  });
  trends.sort((a, b) => b.pct - a.pct);
  const topGainers = trends.slice(0, 3);
  const PROGRESS_EXEMPT = new Set(["Hang Clean", "Force Plate CMJ", "MB Slam → MB Lateral Toss", "Snap Down → Split Squat Jump", "Box Drop → Stick Landing", "Rear Delt Cable Fly", "Cuban Press", "Cuban Press (Sunday)", "Cable Y Raises", "Band Pull-Aparts", "Band Pull-Aparts (overhand)", "Band Pull-Aparts (Sunday)", "Suitcase Carry", "Copenhagen Plank", "Elevated Band Hip Flexor/Glute"]);
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
  const fourWeeksAgoStr = fourWeeksAgo.toISOString().slice(0, 10);
  const needsAttention = [];
  allWorkingEx.filter(ex => !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name) && !PROGRESS_EXEMPT.has(ex.name)).forEach(ex => {
    const allEnts = getEntries(ex.name);
    const window4w = allEnts.filter(e => e.date >= fourWeeksAgoStr);
    if (window4w.length < 2) return;
    const wFirst = window4w[0].weight,
      wLast = window4w[window4w.length - 1].weight;
    const pct4w = wFirst === 0 ? wLast > 0 ? 100 : 0 : (wLast - wFirst) / wFirst * 100;
    if (pct4w < 10) {
      const distinctDates4w = new Set(window4w.map(e => e.date)).size;
      needsAttention.push({
        name: ex.name,
        pct: pct4w,
        first: wFirst,
        last: wLast,
        sessions: distinctDates4w,
        accent: ex.dayAccent
      });
    }
  });
  needsAttention.sort((a, b) => a.pct - b.pct);
  const [spiderWeekOffset, setSpiderWeekOffset] = useState(0);
  const spiderRange = getWeekRange(spiderWeekOffset);
  const groupVol = {
    CNS: 0,
    Legs: 0,
    Push: 0,
    Pull: 0,
    Core: 0,
    Stability: 0
  };
  allWorkingEx.forEach(ex => {
    const g = EX_GROUP[ex.name];
    if (!g) return;
    getEntries(ex.name).filter(e => e.date >= spiderRange.sunStr && e.date <= spiderRange.satStr).forEach(e => {
      groupVol[g] += e.weight > 0 ? e.weight * e.sets * e.reps : e.sets * e.reps * 10;
    });
  });
  const totalVol = Object.values(groupVol).reduce((a, b) => a + b, 0) || 1;
  const spiderData = Object.fromEntries(GROUPS.map(g => [g, groupVol[g] / totalVol]));
  const spiderHasData = Object.values(groupVol).some(v => v > 0);
  const spiderLabel = spiderWeekOffset === 0 ? "This Week" : spiderWeekOffset === 1 ? "Last Week" : `${spiderWeekOffset} Weeks Ago`;
  const [heatMonthOffset, setHeatMonthOffset] = useState(0);
  const now = new Date();
  const heatDate = new Date(now.getFullYear(), now.getMonth() - heatMonthOffset, 1);
  const heatYear = heatDate.getFullYear(),
    heatMonth = heatDate.getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(heatYear, heatMonth + 1, 0).getDate();
  const firstDow = new Date(heatYear, heatMonth, 1).getDay();
  const loggedDates = new Set();
  allWorkingEx.forEach(ex => getEntries(ex.name).forEach(e => loggedDates.add(e.date)));
  const todayS = todayStr();
  const calCells = [];
  for (let i = 0; i < firstDow; i++) calCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${heatYear}-${String(heatMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    calCells.push({
      d,
      ds,
      logged: loggedDates.has(ds),
      isToday: ds === todayS,
      isFuture: ds > todayS
    });
  }
  while (calCells.length % 7 !== 0) calCells.push(null);
  const calRows = [];
  for (let i = 0; i < calCells.length; i += 7) calRows.push(calCells.slice(i, i + 7));
  const totalLoggedDays = [...loggedDates].filter(d => d.startsWith(`${heatYear}-${String(heatMonth + 1).padStart(2, "0")}`)).length;
  const allPRs = [];
  allWorkingEx.filter(ex => !BODYWEIGHT_EX.has(ex.name)).forEach(ex => {
    const ents = getEntries(ex.name);
    ents.forEach((e, i) => {
      if (isPR(ents, i)) allPRs.push({
        name: ex.name,
        ...e,
        orm: calc1RM(e.weight, e.reps),
        accent: ex.dayAccent
      });
    });
  });
  allPRs.sort((a, b) => b.date.localeCompare(a.date));
  const btnStyle = {
    background: "transparent",
    border: `1px solid ${W.border}`,
    borderRadius: 6,
    color: W.textDim,
    fontFamily: "'DM Mono',monospace",
    fontSize: 11,
    padding: "4px 10px",
    cursor: "pointer",
    fontWeight: 500,
    letterSpacing: "0.05em"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 100px",
      maxWidth: 680,
      margin: "0 auto",
      background: "linear-gradient(180deg,#131313 0%,#0a0a0a 300px,#080808 100%)"
    },
    className: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Training Program"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: W.text,
      lineHeight: 1
    }
  }, "Weekly Tracker")), /*#__PURE__*/React.createElement("button", {
    onClick: onViewProgress,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 14px",
      borderRadius: 20,
      border: `1px solid ${W.border}`,
      background: W.surface,
      color: W.cyan,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.02em"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "1,12 5,6 9,9 15,2",
    stroke: W.cyan,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Charts"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "14px 16px",
      borderRight: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "This Week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: W.cyan,
      lineHeight: 1
    }
  }, sessions), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      marginTop: 3,
      fontFamily: "'DM Mono',monospace"
    }
  }, "sessions")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "14px 16px",
      borderRight: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "All-Time PRs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: W.text,
      lineHeight: 1
    }
  }, totalPRs), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      marginTop: 3,
      fontFamily: "'DM Mono',monospace"
    }
  }, "records")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "14px 16px"
    }
  }, (() => {
    const overdueDay = DAYS.filter(d => d.id !== "fri").find(d => {
      const last = dayLastLoggedDate(d.id);
      if (!last) return false;
      const diffDays = Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24));
      return diffDays > 7;
    });
    if (!overdueDay) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 9,
          fontFamily: "'DM Mono',monospace",
          color: W.textDim,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 4
        }
      }, "On Track"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: W.cyan,
          lineHeight: 1
        }
      }, "\u2713"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: W.textDim,
          marginTop: 3,
          fontFamily: "'DM Mono',monospace"
        }
      }, "all days current"));
    }
    const last = dayLastLoggedDate(overdueDay.id);
    const diffDays = Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        color: W.red,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: 4
      }
    }, "Overdue"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        color: W.red,
        lineHeight: 1,
        letterSpacing: "-0.01em"
      },
      title: overdueDay.label
    }, overdueDay.label.slice(0, 3).toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: W.textDim,
        marginTop: 3,
        fontFamily: "'DM Mono',monospace"
      }
    }, diffDays, "d since last"));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "0",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      borderRight: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, "Top Gainers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "Biggest weight increase"))), topGainers.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 0",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "Log 2+ sessions per lift") : topGainers.map(t => {
    const barW = Math.min(100, Math.max(2, t.pct * 2.5));
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: W.text,
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: W.cyan,
        marginLeft: 10,
        flexShrink: 0,
        fontFamily: "'DM Mono',monospace"
      }
    }, "+", t.pct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        background: W.border,
        borderRadius: 1,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${barW}%`,
        background: W.cyan,
        borderRadius: 1,
        transition: "width 0.4s ease"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace"
      }
    }, t.first, " \u2192 ", t.last, " lbs \xB7 ", t.sessions, " sessions"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, "Muscle Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, spiderLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setSpiderWeekOffset(o => o + 1)
  }, "\u2190"), spiderWeekOffset > 0 && /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setSpiderWeekOffset(o => o - 1)
  }, "\u2192"))), !spiderHasData ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 0",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "No sessions for ", spiderLabel.toLowerCase()) : /*#__PURE__*/React.createElement(DonutChart, {
    data: spiderData,
    size: 220
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, "Needs Attention"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "<", "10% gain \xB7 last 4 weeks")), needsAttention.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.red,
      background: "rgba(255,71,87,0.1)",
      border: `1px solid rgba(255,71,87,0.2)`,
      borderRadius: 12,
      padding: "3px 10px",
      fontWeight: 600
    }
  }, needsAttention.length, " lift", needsAttention.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, needsAttention.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0",
      fontSize: 12,
      color: W.cyan,
      fontFamily: "'DM Mono',monospace",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: W.cyan,
      boxShadow: `0 0 8px ${W.cyan}`
    }
  }), allWorkingEx.filter(ex => !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name)).some(ex => getEntries(ex.name).length >= 2) ? "All tracked lifts progressing" : "Log 2+ sessions per lift to track") : needsAttention.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      padding: "11px 12px",
      borderRadius: 8,
      marginBottom: 6,
      background: "rgba(255,71,87,0.04)",
      border: `1px solid rgba(255,71,87,0.1)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: W.text,
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: t.pct < 0 ? W.red : W.textMid,
      marginLeft: 10,
      flexShrink: 0,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.pct >= 0 ? "+" : "", t.pct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.first, " \u2192 ", t.last, " lbs \xB7 ", t.sessions, " sessions"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, monthNames[heatMonth], " ", heatYear), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, totalLoggedDays, " training day", totalLoggedDays !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setHeatMonthOffset(o => o + 1)
  }, "\u2190"), heatMonthOffset > 0 && /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setHeatMonthOffset(o => o - 1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4,
      marginBottom: 6
    }
  }, ["S", "M", "T", "W", "T", "F", "S"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      textAlign: "center",
      fontWeight: 500,
      letterSpacing: "0.05em"
    }
  }, l))), calRows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4,
      marginBottom: 4
    }
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    onClick: () => cell && cell.logged && !cell.isFuture && onDeleteDate(cell.ds),
    style: {
      aspectRatio: "1",
      borderRadius: 6,
      background: !cell ? "transparent" : cell.isFuture ? "rgba(255,255,255,0.01)" : cell.logged ? W.cyan : "rgba(255,255,255,0.03)",
      border: cell?.isToday ? `1px solid ${W.cyan}` : cell?.logged ? "none" : "1px solid transparent",
      outline: cell?.isToday ? `2px solid ${W.cyan}22` : "none",
      cursor: cell?.logged && !cell.isFuture ? "pointer" : "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.15s"
    }
  }, cell && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: cell.logged ? "#000" : cell.isFuture ? W.border : W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontWeight: cell.logged ? 700 : 400
    }
  }, cell.d))))))), /*#__PURE__*/React.createElement(WorkoutHistoryCard, {
    version: version,
    onDelete: onDeleteDate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      borderRight: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "Top Est. 1RMs"), top1RMs.slice(0, 5).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 0",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, "Log sets to see your top lifts") : top1RMs.slice(0, 5).map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderBottom: i < 4 ? `1px solid ${W.border}` : "none",
      animation: `setRowIn 0.2s ease ${i * 0.05}s both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      background: i === 0 ? W.cyanDim : W.surface,
      border: `1px solid ${i === 0 ? W.cyan : W.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: i === 0 ? W.cyan : W.textDim,
      fontWeight: 700
    }
  }, i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 1
    }
  }, t.weight, " \xD7 ", t.reps, "r")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: i === 0 ? W.cyan : W.text,
      lineHeight: 1,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.orm), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      marginTop: 1
    }
  }, "EST 1RM"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "PR Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 300,
      overflowY: "auto"
    }
  }, allPRs.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 0",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, "No PRs logged yet") : allPRs.slice(0, 12).map((pr, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      paddingBottom: 10,
      marginBottom: 4,
      borderBottom: i < Math.min(allPRs.length, 12) - 1 ? `1px solid ${W.border}` : "none",
      animation: `setRowIn 0.18s ease ${i * 0.03}s both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 10,
      flexShrink: 0,
      paddingTop: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: W.cyan,
      flexShrink: 0,
      boxShadow: `0 0 6px ${W.cyanGlow}`
    }
  }), i < Math.min(allPRs.length, 12) - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      flex: 1,
      background: W.border,
      minHeight: 10,
      marginTop: 3
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text,
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, pr.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      flexShrink: 0
    }
  }, fmtDate(pr.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.textMid,
      marginTop: 2
    }
  }, pr.weight, "lbs \xD7 ", pr.reps, "r \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.cyan
    }
  }, "~", pr.orm, " 1RM")))))))), /*#__PURE__*/React.createElement(BodyweightCard, {
    onUpdate: onBWUpdate
  })));
}

// ── EXERCISE ROW ──────────────────────────────────────────────────────────────
function ExRow({
  ex,
  num,
  isWorking,
  isActive,
  onHistory,
  onStartRest,
  onSaved,
  bodyweight,
  fontScale = "md",
  version = 0,
  dayId = "",
  onExerciseDone = null,
  exRefs = null
}) {
  const F = FS[fontScale] || FS.md;
  const entries = getEntries(ex.name);
  const isBW = BODYWEIGHT_EX.has(ex.name);
  const [showInline, setShowInline] = useState(false);
  useEffect(() => {
    if (isActive && isWorking) setShowInline(true);
  }, [isActive]);
  const rootRef = useCallback(el => {
    if (exRefs && el) exRefs.current[ex.name] = el;
  }, [ex.name]);
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 0",
      minHeight: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: W.border,
      width: 18,
      flexShrink: 0,
      textAlign: "center",
      fontFamily: "'DM Mono',monospace",
      fontWeight: 500
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: F?.body || 13,
      fontWeight: 600,
      color: W.text,
      lineHeight: 1.3
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: F?.label || 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 2
    }
  }, ex.detail), (() => {
    const ents = getEntries(ex.name);
    if (!ents.length) return isWorking ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        color: W.border,
        marginTop: 2,
        letterSpacing: "0.05em"
      }
    }, "First session") : null;
    const dates = [...new Set(ents.map(e => e.date))].sort();
    const lastDate = dates[dates.length - 1];
    const lastSets = ents.filter(e => e.date === lastDate);
    const isBW = BODYWEIGHT_EX.has(ex.name);
    const best = lastSets.reduce((b, e) => e.weight > b.weight ? e : b, lastSets[0]);
    const label = isBW ? `BW +${Math.max(0, best.weight - (getLatestBW() || best.weight))}lbs` : `${best.weight}lbs`;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        color: W.textMid,
        marginTop: 2,
        letterSpacing: "0.03em"
      }
    }, "Last: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.cyan,
        fontWeight: 600
      }
    }, label, " \xD7 ", best.reps), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.border,
        fontSize: 8
      }
    }, "(", fmtDate(lastDate), ")"));
  })()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    type: ex.badge
  }), isBW && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      padding: "2px 5px",
      borderRadius: 3,
      background: "rgba(79,195,247,0.08)",
      color: "#4fc3f7",
      fontFamily: "'DM Mono',monospace",
      fontWeight: 600,
      letterSpacing: "0.05em"
    }
  }, "BW"), isWorking && /*#__PURE__*/React.createElement("button", {
    onClick: () => onHistory(ex.name),
    style: {
      background: W.surface,
      border: `1px solid ${W.border}`,
      color: W.textDim,
      fontSize: 10,
      padding: "5px 9px",
      borderRadius: 6,
      flexShrink: 0,
      fontFamily: "'DM Mono',monospace",
      fontWeight: 500,
      minHeight: 30,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, entries.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textMid,
      fontWeight: 600
    }
  }, entries.length) : "—"))), isWorking && isActive && showInline && /*#__PURE__*/React.createElement(InlineSetLogger, {
    ex: ex,
    isActive: isActive,
    onStartRest: onStartRest,
    onSaved: onSaved,
    bodyweight: bodyweight,
    fontScale: fontScale,
    version: version,
    dayId: dayId,
    onExerciseDone: onExerciseDone
  }));
}

// ── BLOCK ─────────────────────────────────────────────────────────────────────
function Block({
  block,
  accent,
  onHistory,
  isWarmup,
  isActive,
  onStartRest,
  onSaved,
  bodyweight,
  fontScale = "md",
  dayId = "",
  version = 0,
  warmupDone = false,
  onWarmupDone = null,
  onExerciseDone = null,
  exRefs = null
}) {
  const [open, setOpen] = useState(() => isWarmup ? true : getBlockOpen(dayId, block.title));
  const [tapClass, triggerTap] = useTap();
  const todayS = todayStr();
  const blockComplete = !isWarmup && isActive && (block.exercises || []).length > 0 && (block.exercises || []).every(ex => {
    const parsed = parseDetail(ex.detail);
    const needed = parsed?.sets || 1;
    const logged = getEntries(ex.name).filter(e => e.date === todayS && (e.dayId === dayId || !e.dayId)).length;
    return logged >= needed;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: tapClass,
    onClick: () => {
      triggerTap();
      setOpen(o => {
        const next = !o;
        if (!isWarmup) setBlockOpen(dayId, block.title, next);
        return next;
      });
    },
    style: {
      padding: "15px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      background: open ? W.surface : "transparent",
      userSelect: "none",
      minHeight: 54,
      transition: "background 0.15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, !isWarmup && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 20,
      borderRadius: 2,
      background: blockComplete ? W.cyan : accent,
      opacity: blockComplete ? 1 : 0.5,
      flexShrink: 0,
      transition: "background 0.3s,opacity 0.3s",
      boxShadow: blockComplete ? `0 0 6px ${W.cyan}88` : undefined
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isWarmup ? 12 : 13,
      fontWeight: 600,
      color: isWarmup ? warmupDone ? W.cyan : W.textDim : W.text,
      letterSpacing: "0.01em",
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, block.title, blockComplete && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.25)`,
      borderRadius: 4,
      padding: "1px 6px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      animation: "setRowIn 0.3s ease both"
    }
  }, "\u2713 DONE"), isWarmup && warmupDone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.25)`,
      borderRadius: 4,
      padding: "1px 6px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      animation: "setRowIn 0.3s ease both"
    }
  }, "\u2713 DONE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: warmupDone ? W.cyan : W.textDim,
      fontFamily: "'DM Mono',monospace",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginTop: 1
    }
  }, block.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, isWarmup && onWarmupDone && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onWarmupDone();
    },
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      padding: "4px 10px",
      borderRadius: 6,
      border: `1px solid ${warmupDone ? "rgba(0,201,177,0.35)" : W.border}`,
      background: warmupDone ? W.cyanDim : "transparent",
      color: warmupDone ? W.cyan : W.textDim,
      fontWeight: warmupDone ? 700 : 400,
      transition: "all 0.2s",
      flexShrink: 0,
      letterSpacing: "0.05em"
    }
  }, warmupDone ? "✓ Done" : "Mark Done"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: W.textDim,
      display: "block",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 0.2s",
      fontFamily: "'DM Mono',monospace"
    }
  }, "\u25BC"))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 16px 12px",
      animation: "blockOpen 0.2s cubic-bezier(0.16,1,0.3,1) both"
    }
  }, block.phases ? block.phases.map((ph, pi) => /*#__PURE__*/React.createElement("div", {
    key: pi
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "10px 0 4px",
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      textTransform: "uppercase",
      letterSpacing: "0.18em"
    }
  }, ph.label, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  })), ph.exercises.map((ex, i) => /*#__PURE__*/React.createElement(ExRow, {
    key: i,
    ex: ex,
    num: i + 1,
    isWorking: false,
    isActive: false,
    onHistory: onHistory,
    onStartRest: onStartRest,
    onSaved: onSaved,
    bodyweight: bodyweight,
    version: version,
    dayId: dayId
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, block.exercises.map((ex, i) => /*#__PURE__*/React.createElement(ExRow, {
    key: i,
    ex: ex,
    num: i + 1,
    isWorking: !isWarmup,
    isActive: isActive,
    onHistory: onHistory,
    onStartRest: onStartRest,
    onSaved: onSaved,
    bodyweight: bodyweight,
    version: version,
    dayId: dayId,
    onExerciseDone: !isWarmup ? onExerciseDone : null,
    exRefs: !isWarmup ? exRefs : null
  })), block.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: "9px 12px",
      borderRadius: 6,
      background: W.surface,
      borderLeft: `2px solid ${W.cyan}44`,
      fontSize: 11,
      color: W.textMid,
      lineHeight: 1.6,
      fontFamily: "'DM Mono',monospace"
    }
  }, block.note))));
}

// ── ESTIMATED TIME ────────────────────────────────────────────────────────────
function parseDurationToMin(str) {
  const m = str?.match(/^(\d+):(\d{2})$/);
  if (!m) return null;
  return parseInt(m[1]) + parseInt(m[2]) / 60;
}
function getHistoricalAvgMin(dayId) {
  const sessions = sessionsStore.filter(s => s.dayId === dayId || dayId === "thu" && s.dayId === "fri" || dayId === "fri" && s.dayId === "thu");
  const durations = sessions.map(s => parseDurationToMin(s.duration)).filter(v => v != null);
  if (!durations.length) return null;
  const recent = durations.slice(0, 5);
  return recent.reduce((a, b) => a + b, 0) / recent.length;
}
function computeEstimatedTime(day) {
  const warmupMatch = day.warmup?.duration?.match(/(\d+)[–\-](\d+)/);
  const warmupMin = warmupMatch ? (parseInt(warmupMatch[1]) + parseInt(warmupMatch[2])) / 2 : 10;
  let workMin = 0;
  (day.blocks || []).forEach(block => {
    (block.exercises || []).forEach(ex => {
      const parsed = parseDetail(ex.detail || "");
      const sets = parsed ? parsed.sets : 3;
      const isLight = LIGHT_INTENT.has(ex.name) || BODYWEIGHT_EX.has(ex.name);
      const restSecs = isLight ? 45 : getRestTime(ex.name);
      const setTime = (30 + restSecs) * sets - restSecs;
      workMin += setTime / 60;
    });
  });
  const transitionMin = (day.blocks || []).length * 1.5;
  const calcTotal = warmupMin + workMin + transitionMin;
  const histAvg = getHistoricalAvgMin(day.id);
  let finalMin = calcTotal;
  if (histAvg != null) {
    const count = sessionsStore.filter(s => s.dayId === day.id || day.id === "thu" && s.dayId === "fri" || day.id === "fri" && s.dayId === "thu").length;
    const histWeight = Math.min(count, 5) / 5;
    finalMin = calcTotal * (1 - histWeight) + histAvg * histWeight;
  }
  const rounded = Math.round(finalMin / 5) * 5;
  return `~${rounded} min`;
}

// ── DAY PAGE ──────────────────────────────────────────────────────────────────
function DayPage({
  day,
  onHistory,
  setPage,
  onWorkoutComplete,
  onSessionDeleted,
  bodyweight,
  restVersion,
  visibleDayIds,
  fontScale = "md"
}) {
  const visibleDays = DAYS.filter(d => visibleDayIds.includes(d.id));
  const dayIdx = visibleDays.findIndex(d => d.id === day.id);
  const prev = dayIdx > 0 ? visibleDays[dayIdx - 1] : null,
    next = dayIdx < visibleDays.length - 1 ? visibleDays[dayIdx + 1] : null;
  const _cached = loadWorkoutState(day.id);
  const [started, setStarted] = useState(_cached?.started || false),
    [ended, setEnded] = useState(_cached?.ended || false);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  const [elapsed, setElapsed] = useState(_cached?.elapsed || 0),
    [finalElapsed, setFinalElapsed] = useState(_cached?.finalElapsed || 0),
    [startTime, setStartTime] = useState(_cached?.startTime || null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [version, setVersion] = useState(0);
  const [warmupDone, setWarmupDone] = useState(false);
  const [autoEndShown, setAutoEndShown] = useState(false);
  const [restActive, setRestActive] = useState(false);
  const [restSecs, setRestSecs] = useState(90);
  const [restTotal, setRestTotal] = useState(90);
  const [restExName, setRestExName] = useState("");
  const [estTime, setEstTime] = useState(() => computeEstimatedTime(day));
  const restRef = useRef(null);
  const blocksRef = useRef(null);
  const firstBlockRef = useRef(null);
  const exRefs = useRef({});
  const swipe = useSwipe(useCallback(() => {
    if (next) setPage(next.id);
  }, [next]), useCallback(() => {
    if (prev) setPage(prev.id);
  }, [prev]));
  useEffect(() => {
    setEstTime(computeEstimatedTime(day));
  }, [restVersion, day.id]);
  useEffect(() => {
    saveWorkoutState(day.id, {
      started,
      ended,
      elapsed,
      finalElapsed,
      startTime
    });
  }, [started, ended, elapsed, finalElapsed, startTime]);
  useEffect(() => {
    if (!started || ended) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [started, ended, startTime]);
  function startRest(exName, duration) {
    if (restRef.current) clearInterval(restRef.current);
    setRestSecs(duration);
    setRestTotal(duration);
    setRestActive(true);
    setRestExName(exName);
    restRef.current = setInterval(() => {
      setRestSecs(s => {
        if (s <= 1) {
          clearInterval(restRef.current);
          setRestActive(false);
          restEndAlert();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }
  function dismissRest() {
    if (restRef.current) clearInterval(restRef.current);
    setRestActive(false);
  }
  useEffect(() => () => {
    if (restRef.current) clearInterval(restRef.current);
  }, []);
  function fmtElapsed(s) {
    const m = Math.floor(s / 60),
      sec = s % 60;
    return `${m}:${String(sec).padStart(2, "0")}`;
  }
  function handleStart() {
    haptic(40);
    setStarted(true);
    setStartTime(Date.now());
    setTimeout(() => {
      const el = blocksRef.current;
      if (el) el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 80);
  }
  function handleEndConfirm() {
    haptic([50, 30, 50, 30, 100]);
    setShowEndConfirm(false);
    setFinalElapsed(elapsed);
    setEnded(true);
    setShowSummary(true);
    const allEx = day.blocks.flatMap(b => b.exercises || []);
    const todayS = todayStr();
    const loggedSets = allEx.flatMap(ex => {
      const ents = getEntries(ex.name).filter(e => e.date === todayS && (e.dayId === day.id || !e.dayId));
      return ents.map(e => ({
        name: ex.name,
        weight: e.weight,
        sets: e.sets,
        reps: e.reps
      }));
    });
    saveSession({
      dayId: day.id,
      date: todayS,
      duration: fmtElapsed(elapsed),
      exercisesLogged: allEx.filter(ex => getEntries(ex.name).some(e => e.date === todayS && (e.dayId === day.id || !e.dayId))).length,
      exercisesTotal: allEx.length,
      sets: loggedSets
    });
    if (day.id === "thu" || day.id === "fri") onWorkoutComplete(day.id);
  }
  const todayS = todayStr();
  const allBlocksComplete = started && !ended && day.blocks.length > 0 && day.blocks.every(block => {
    if (!block.exercises || !block.exercises.length) return true;
    return block.exercises.every(ex => {
      const parsed = parseDetail(ex.detail);
      const needed = parsed?.sets || 1;
      return getEntries(ex.name).filter(e => e.date === todayS && (e.dayId === day.id || !e.dayId)).length >= needed;
    });
  });
  useEffect(() => {
    if (allBlocksComplete && !autoEndShown) {
      setAutoEndShown(true);
      haptic([40, 30, 60, 30, 80]);
      setTimeout(() => setShowEndConfirm(true), 600); // slight delay so last set toggle settles
    }
  }, [allBlocksComplete, version]);
  const loggedToday = day.blocks.flatMap(b => b.exercises || []).filter(ex => getEntries(ex.name).some(e => e.date === todayS && (e.dayId === day.id || !e.dayId))).length;
  const totalEx = day.blocks.flatMap(b => b.exercises || []).length;
  const warmup = {
    icon: "🔥",
    title: "Warmup",
    sub: day.warmup?.duration || "",
    phases: day.warmup?.phases || []
  };
  const saved = () => setVersion(v => v + 1);
  function onExerciseDone(exName) {
    // Find next incomplete exercise in flat ordered list
    const allEx = day.blocks.flatMap(b => b.exercises || []);
    const idx = allEx.findIndex(e => e.name === exName);
    if (idx === -1) return;
    const todayS2 = todayStr();
    for (let i = idx + 1; i < allEx.length; i++) {
      const next = allEx[i];
      const parsed = parseDetail(next.detail);
      const needed = parsed?.sets || 1;
      const logged = getEntries(next.name).filter(e => e.date === todayS2 && (e.dayId === day.id || !e.dayId)).length;
      if (logged < needed) {
        const el = exRefs.current[next.name];
        if (el) setTimeout(() => el.scrollIntoView({
          behavior: "smooth",
          block: "center"
        }), 320);
        return;
      }
    }
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, swipe, {
    style: {
      maxWidth: 680,
      margin: "0 auto",
      padding: "0 0 110px",
      touchAction: "pan-y"
    },
    className: "ai"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      overflow: "hidden",
      position: "relative",
      borderLeft: `3px solid ${day.accent}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: `linear-gradient(90deg,${day.accent},${day.accent}22)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 18px",
      background: `linear-gradient(135deg,${day.accent}08 0%,transparent 60%)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      padding: "4px 10px",
      borderRadius: 12,
      background: W.cyanDim,
      color: W.cyan,
      letterSpacing: "0.15em",
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, day.label), started ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      fontWeight: 700,
      letterSpacing: "0.05em"
    }
  }, "\u23F1 ", fmtElapsed(elapsed)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.03em"
    }
  }, estTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      marginBottom: 3
    }
  }, day.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 4
    }
  }, day.focus), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.border,
      letterSpacing: "0.1em",
      marginBottom: 14,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, prev && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.borderHi
    }
  }, "\u2190 ", prev.label), prev && next && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.border,
      margin: "0 4px"
    }
  }, "\xB7"), next && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.borderHi
    }
  }, next.label, " \u2192")), !started && /*#__PURE__*/React.createElement(TapButton, {
    onClick: handleStart,
    style: {
      width: "100%",
      background: W.cyan,
      color: W.bg,
      border: "none",
      borderRadius: 10,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.08em",
      padding: "15px 0",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Start Workout"), started && !ended && /*#__PURE__*/React.createElement(TapButton, {
    onClick: () => {
      haptic(20);
      setShowEndConfirm(true);
    },
    style: {
      width: "100%",
      background: "transparent",
      color: W.red,
      border: `1px solid rgba(255,71,87,0.3)`,
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.05em",
      padding: "13px 0",
      cursor: "pointer"
    }
  }, "End Workout"), ended && /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.15)`,
      borderRadius: 10,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      letterSpacing: "0.25em",
      marginBottom: 10,
      textTransform: "uppercase"
    }
  }, "Workout Complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: W.text,
      fontFamily: "'DM Mono',monospace"
    }
  }, fmtElapsed(finalElapsed)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 2,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "total time")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: W.cyan,
      fontFamily: "'DM Mono',monospace"
    }
  }, loggedToday, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: W.textDim
    }
  }, "/", totalEx)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 2,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "exercises")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowSummary(true),
    style: {
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.25)`,
      borderRadius: 8,
      color: W.cyan,
      fontFamily: "'DM Mono',monospace",
      fontSize: 10,
      padding: "7px 12px",
      cursor: "pointer",
      fontWeight: 600
    }
  }, "Summary"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowDeleteModal(true),
    style: {
      background: "rgba(255,71,87,0.08)",
      border: `1px solid rgba(255,71,87,0.2)`,
      borderRadius: 8,
      color: W.red,
      fontFamily: "'DM Mono',monospace",
      fontSize: 10,
      padding: "7px 12px",
      cursor: "pointer"
    }
  }, "Delete")))))), /*#__PURE__*/React.createElement("div", {
    ref: blocksRef,
    style: {
      borderBottom: `1px solid ${W.border}`,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: started && warmupDone ? 0.35 : 1,
      transition: "opacity 0.4s"
    }
  }, /*#__PURE__*/React.createElement(Block, {
    block: warmup,
    accent: day.accent,
    onHistory: onHistory,
    isWarmup: true,
    isActive: false,
    onStartRest: startRest,
    onSaved: saved,
    bodyweight: bodyweight,
    fontScale: fontScale,
    dayId: day.id,
    version: version,
    warmupDone: warmupDone,
    onWarmupDone: () => setWarmupDone(d => !d)
  })), day.blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    ref: i === 0 ? firstBlockRef : null
  }, /*#__PURE__*/React.createElement(Block, {
    block: b,
    accent: day.accent,
    onHistory: onHistory,
    isWarmup: false,
    isActive: started && !ended,
    onStartRest: startRest,
    onSaved: saved,
    bodyweight: bodyweight,
    fontScale: fontScale,
    dayId: day.id,
    version: version,
    onExerciseDone: onExerciseDone,
    exRefs: exRefs
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "0 12px"
    }
  }, prev ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(prev.id),
    style: {
      flex: 1,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 10,
      padding: "12px 14px",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 3,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, "\u2190 Prev"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text
    }
  }, prev.label)) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), next ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(next.id),
    style: {
      flex: 1,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 10,
      padding: "12px 14px",
      cursor: "pointer",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 3,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, "Next \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text
    }
  }, next.label)) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), restActive && /*#__PURE__*/React.createElement(RestTimerBubble, {
    seconds: restSecs,
    total: restTotal,
    onDismiss: dismissRest,
    exName: restExName
  }), showEndConfirm && /*#__PURE__*/React.createElement(EndWorkoutModal, {
    day: day,
    elapsed: elapsed,
    onConfirm: handleEndConfirm,
    onCancel: () => setShowEndConfirm(false)
  }), showSummary && /*#__PURE__*/React.createElement(WorkoutSummaryModal, {
    day: day,
    elapsed: finalElapsed,
    onClose: () => setShowSummary(false),
    onDelete: () => {
      setShowSummary(false);
      setShowDeleteModal(true);
    }
  }), showDeleteModal && /*#__PURE__*/React.createElement(DeleteDayModal, {
    date: todayS,
    dayId: day.id,
    onClose: () => setShowDeleteModal(false),
    onDeleted: () => {
      setShowDeleteModal(false);
      setStarted(false);
      setEnded(false);
      setElapsed(0);
      setFinalElapsed(0);
      setStartTime(null);
      setShowSummary(false);
      delete workoutStateCache[day.id];
      try {
        window.storage.delete('wt_wstate_' + day.id);
      } catch (e) {}
      if (onSessionDeleted) onSessionDeleted();else saved();
    }
  }));
}

// ── APP ───────────────────────────────────────────────────────────────────────
window.App = function App() {
  const [page, setPage] = useState("home");
  const [historyModal, setHistoryModal] = useState(null);
  const [showProg, setShowProg] = useState(false);
  const [version, setVersion] = useState(0);
  const [deleteDate, setDeleteDate] = useState(null); // {date, dayId} or just date string
  const [loaded, setLoaded] = useState(false);
  const [thuCompletedWeek, setThuCompletedWeek] = useState(null);
  const [thuFriVis, setThuFriVis] = useState({
    showThu: true,
    showFri: true
  });
  const [bwVersion, setBwVersion] = useState(0);
  const [restVersion, setRestVersion] = useState(0);
  const [fontScale, setFontScale] = useState("md");
  const [saveFlash, setSaveFlash] = useState(null);
  const saveFlashTimer = useRef(null);
  function handleFontScaleChange(v) {
    setFontScale(v);
    saveFontScale(v);
  }
  useEffect(() => {
    saveErrorCallback = ok => {
      if (saveFlashTimer.current) clearTimeout(saveFlashTimer.current);
      setSaveFlash(ok ? "saved" : "error");
      saveFlashTimer.current = setTimeout(() => setSaveFlash(null), ok ? 1200 : 3000);
    };
    return () => {
      saveErrorCallback = null;
    };
  }, []);
  function refreshVisibility(completedWeek) {
    const vis = computeThuFriVisibility(completedWeek === isoWeek());
    setThuFriVis(vis);
    // page redirect handled by useEffect([visibleDayIds]) below — avoids stale closure
  }
  useEffect(() => {
    loadAllFromStorage().then(async () => {
      try {
        const res = await window.storage.get(THUFI_KEY);
        if (res?.value) {
          const s = JSON.parse(res.value);
          setThuCompletedWeek(s.week || null);
          refreshVisibility(s.week || null);
        } else {
          refreshVisibility(null);
        }
      } catch (e) {
        refreshVisibility(null);
      }
      setFontScale(fontScaleStore);
      setLoaded(true);
    });
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js";
    document.head.appendChild(s);
    const interval = setInterval(() => setThuCompletedWeek(prev => {
      refreshVisibility(prev);
      return prev;
    }), 60000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    refreshVisibility(thuCompletedWeek);
  }, [thuCompletedWeek]);
  async function handleWorkoutComplete(dayId) {
    if (dayId === "thu" || dayId === "fri") {
      const week = isoWeek();
      setThuCompletedWeek(week);
      try {
        await window.storage.set(THUFI_KEY, JSON.stringify({
          week
        }));
      } catch (e) {}
    }
    setVersion(v => v + 1);
  }
  async function handleAfterDelete() {
    // After any delete, check if thu/fri session still exists this week.
    // If not, un-hide the hidden day by clearing thuCompletedWeek.
    const week = isoWeek();
    const hasThuFriThisWeek = sessionsStore.some(s => (s.dayId === "thu" || s.dayId === "fri") && isoWeek(new Date(s.date)) === week);
    if (!hasThuFriThisWeek) {
      setThuCompletedWeek(null);
      try {
        await window.storage.set(THUFI_KEY, JSON.stringify({
          week: null
        }));
      } catch (e) {}
    }
    saved();
  }
  const saved = () => setVersion(v => v + 1);
  const visibleDayIds = DAYS.filter(d => {
    if (d.id === "thu") return thuFriVis.showThu;
    if (d.id === "fri") return thuFriVis.showFri;
    return true;
  }).map(d => d.id);
  const currentDay = DAYS.find(d => d.id === page);
  const bodyweight = getLatestBW();
  useEffect(() => {
    if (page !== "home" && page !== "settings" && !visibleDayIds.includes(page)) setPage("home");
  }, [visibleDayIds]);
  if (!loaded) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0c0a09",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: `2px solid ${W.border}`,
      borderTopColor: W.cyan,
      animation: "spin 0.8s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes spin{to{transform:rotate(360deg)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      fontSize: 10,
      letterSpacing: "0.3em",
      textTransform: "uppercase"
    }
  }, "Loading"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.bg,
      minHeight: "100vh",
      color: W.text,
      fontFamily: "'DM Sans',sans-serif"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
        html{font-size:16px;}
        body{overscroll-behavior-y:none;background:#0c0a09;}
        input,button{font-family:'DM Sans',sans-serif;-webkit-appearance:none;appearance:none;}
        input{color-scheme:dark;}
        button{cursor:pointer;user-select:none;}
        ::-webkit-scrollbar{width:2px;height:2px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#1e1e1e;border-radius:2px;}
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
        @keyframes setRowIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        @keyframes blockOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        @keyframes prFlash{0%{opacity:1}60%{opacity:0.8}100%{opacity:0}}
        @keyframes tapPop{0%{transform:scale(1)}35%{transform:scale(0.87)}100%{transform:scale(1)}}
        .au{animation:fadeUp 0.22s cubic-bezier(0.16,1,0.3,1) both;}
        .ai{animation:fadeIn 0.18s ease both;}
        .as{animation:scaleIn 0.2s cubic-bezier(0.16,1,0.3,1) both;}
        .tap{animation:tapPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both;}
      `), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    version: version,
    setPage: setPage,
    onViewProgress: () => setShowProg(true),
    onDeleteDate: (d, dId = null) => setDeleteDate({
      date: d,
      dayId: dId
    }),
    onBWUpdate: () => setBwVersion(v => v + 1)
  }) : page === "settings" ? /*#__PURE__*/React.createElement(RestSettingsPage, {
    onRestUpdate: () => {
      saved();
      setRestVersion(v => v + 1);
    },
    fontScale: fontScale,
    onFontScaleChange: handleFontScaleChange
  }) : currentDay && /*#__PURE__*/React.createElement(DayPage, {
    day: currentDay,
    onHistory: name => setHistoryModal(name),
    setPage: setPage,
    onWorkoutComplete: handleWorkoutComplete,
    onSessionDeleted: handleAfterDelete,
    bodyweight: bodyweight,
    restVersion: restVersion,
    visibleDayIds: visibleDayIds,
    fontScale: fontScale
  }), /*#__PURE__*/React.createElement(BottomNav, {
    page: page,
    setPage: setPage,
    visibleDayIds: visibleDayIds
  }), historyModal && /*#__PURE__*/React.createElement(HistoryModal, {
    exName: historyModal,
    onClose: () => setHistoryModal(null),
    onSaved: saved
  }), showProg && /*#__PURE__*/React.createElement(ProgressView, {
    onClose: () => setShowProg(false),
    version: version
  }), deleteDate && /*#__PURE__*/React.createElement(DeleteDayModal, {
    date: typeof deleteDate === "string" ? deleteDate : deleteDate.date,
    dayId: typeof deleteDate === "string" ? null : deleteDate.dayId,
    onClose: () => setDeleteDate(null),
    onDeleted: () => {
      handleAfterDelete();
      setDeleteDate(null);
    }
  }), saveFlash === "error" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 16,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
      background: "rgba(255,71,87,0.95)",
      color: "#fff",
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      fontWeight: 700,
      padding: "8px 18px",
      borderRadius: 20,
      letterSpacing: "0.08em",
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      pointerEvents: "none",
      animation: "fadeUp 0.2s ease both"
    }
  }, "\u26A0 Save failed \u2014 check connection"));
};
