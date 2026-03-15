function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* @jsxRuntime classic */
var {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} = React;

// ── STORAGE SHIM (localStorage wrapper matching window.storage API) ───────────
if (!window.storage) {
  window.storage = {
    get: async key => {
      try {
        const v = localStorage.getItem(key);
        return v != null ? {
          key,
          value: v
        } : null;
      } catch (e) {
        return null;
      }
    },
    set: async (key, value) => {
      try {
        localStorage.setItem(key, String(value));
        return {
          key,
          value
        };
      } catch (e) {
        return null;
      }
    },
    delete: async key => {
      try {
        localStorage.removeItem(key);
        return {
          key,
          deleted: true
        };
      } catch (e) {
        return null;
      }
    },
    list: async prefix => {
      try {
        const keys = Object.keys(localStorage).filter(k => !prefix || k.startsWith(prefix));
        return {
          keys
        };
      } catch (e) {
        return {
          keys: []
        };
      }
    }
  };
}

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
  Stability: "#80cbc4",
  Mobility: "#80cbc4"
};
const GROUPS = ["CNS", "Legs", "Push", "Pull", "Core", "Stability", "Mobility"];
const EX_GROUP = {
  "Force Plate CMJ": "CNS",
  "Hang Clean": "CNS",
  "Box Drop → Stick Landing": "CNS",
  "Box Drop Stick": "CNS",
  "MB Slam → Lateral Toss": "CNS",
  "MB Slam → MB Lateral Toss": "CNS",
  "Snap Down → Split Jump": "CNS",
  "Snap Down → Split Squat Jump": "CNS",
  "Pogos": "CNS",
  "Vertical Jump": "CNS",
  "CMJ": "CNS",
  "Snap Down": "CNS",
  "BB Back Squat": "Legs",
  "Trap Bar Deadlift": "Legs",
  "Bulgarian Split Squat": "Legs",
  "BB Split Squat": "Legs",
  "RDL": "Legs",
  "Hip Thrust": "Legs",
  "Nordic Curl": "Legs",
  "Nordic Hamstring Curl ISO": "Legs",
  "SL Glute Bridge": "Legs",
  "Glute Bridge Hold": "Legs",
  "Glute Bridge + ISO Hold": "Legs",
  "Band Lateral Walk": "Legs",
  "Tempo Goblet Squat": "Legs",
  "Couch Stretch": "Stability",
  "Deep Squat Pry": "Stability",
  "Ankle Rocks": "Stability",
  "Quads Roll": "Mobility",
  "Adductors Roll": "Mobility",
  "Glutes Roll": "Mobility",
  "Adductors roll": "Mobility",
  "Glutes roll": "Mobility",
  "T-Spine Roll": "Mobility",
  "Foot Roll": "Mobility",
  "Dynamic Hip Openers": "Mobility",
  "Ankle Pogo Rocks": "Mobility",
  "T-Spine Rotations": "Mobility",
  "Copenhagen Short Lever": "Core",
  "Banded Deadbug": "Core",
  "BB Bench Press": "Push",
  "DB Incline Press": "Push",
  "DB Incline Bench Press": "Push",
  "DB Incline Bench": "Push",
  "DB Lateral Raise": "Push",
  "DB Lateral Raises": "Push",
  "Cable Y Raise": "Push",
  "Cable Y Raises": "Push",
  "Straight Bar Pushdown": "Push",
  "Straight Bar Pulldown": "Push",
  "OH DB Extension": "Push",
  "Overhead DB Tricep Extension": "Push",
  "SA DB Shoulder Press": "Push",
  "Empty Bar Bench Press": "Push",
  "50–60% Bench Press": "Push",
  "Explosive Empty Bar Bench": "Push",
  "Dead Hang Active": "Pull",
  "Passive → Active Hang": "Pull",
  "Passive Hang": "Pull",
  "Serratus Wall Slides": "Stability",
  "Cable External Rotation": "Stability",
  "Weighted Pull-Ups": "Pull",
  "Pull-Ups": "Pull",
  "Scap Pull-Ups": "Pull",
  "Scapular Pull-Ups": "Pull",
  "Straight Arm Pulldown": "Pull",
  "SA DB Row": "Pull",
  "Chest Supported Row": "Pull",
  "Cable Rear Fly": "Stability",
  "Rear Delt Cable Fly": "Stability",
  "Incline Curl": "Pull",
  "Incline Dumbbell Curl": "Pull",
  "Hammer Curl": "Pull",
  "Lat Pulldown": "Pull",
  "BB Row": "Pull",
  "Dead Hangs (passive → active)": "Pull",
  "Lat Stretch (Bar Hang)": "Pull",
  "Thoracic Extension": "Stability",
  "Copenhagen Plank": "Core",
  "V-Ups": "Core",
  "Hanging Leg Raises": "Core",
  "Suitcase Carry": "Core",
  "Cuban Press": "Stability",
  "Rack Hip CARs": "Stability",
  "Band Pull-Aparts": "Stability",
  "Band Pull-Aparts (overhand)": "Stability",
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
  "Shoulder CARs": "Stability",
  // New Sunday exercises
  "Foam Roll T-Spine": "Stability",
  "Foam Roll Adductors": "Legs",
  "Foam Roll Glutes": "Legs",
  "Foam Roll Lats": "Pull",
  "Foam Roll Quads": "Legs",
  "90/90 Hip Rotations": "Stability",
  "Deadbugs": "Core",
  "Cable External Rotations": "Stability",
  "Ankle Dorsiflexion Rocks": "Stability",
  "Rear Foot Elevated Split Squat": "Legs",
  "Single Leg RDL": "Legs",
  "Tibialis Raises": "Stability",
  "Half-Kneeling Landmine Press": "Push",
  "Chest Supported DB Row": "Pull",
  "Face Pull to External Rotation": "Stability",
  "Pallof Press": "Core",
  // Warm-down
  "Crocodile Breathing": "Stability",
  "Hip Flexor Stretch": "Stability",
  "Pec Doorway Stretch": "Stability",
  "Lat Stretch on Bench": "Stability",
  "Hamstring Neural Glide": "Stability",
  "Nasal Walk": "Stability",
  "Hamstring Glide": "Stability",
  "Supine Breathing": "Stability",
  "Adductor Rock": "Stability",
  "Nasal Breathing": "Stability",
  "Pec Minor Release": "Stability",
  "Trap Stretch": "Stability",
  "Thoracic Breathing": "Stability",
  "Child Pose Lat Stretch": "Stability",
  "Passive Hang": "Pull",
  "90-90 Breathing": "Stability",
  "Lat Bench Stretch": "Stability",
  "Calf Stretch": "Stability",
  "Incline Treadmill Walk": "Stability",
  "Adductor Stretch": "Stability",
  "Slow Walk": "Stability",
  "Band Shoulder Traction": "Stability",
  "Pec Minor Stretch": "Stability",
  "Thoracic Extension Breathing": "Stability",
  "Deep Nasal Breathing": "Stability",
  "Nasal Incline Walk": "Stability",
  "Deep Squat Hold Breathing": "Stability",
  "Supine Legs-Up Breathing": "Stability",
  // Mobility group — warmup tissue/mobility work and all warmdown recovery exercises
  "Foam Roll T-Spine": "Mobility",
  "Foam Roll Adductors": "Mobility",
  "Foam Roll Glutes": "Mobility",
  "Foam Roll Lats": "Mobility",
  "Foam Roll Quads": "Mobility",
  "Quads Roll": "Mobility",
  "Adductors Roll": "Mobility",
  "Glutes Roll": "Mobility",
  "T-Spine Roll": "Mobility",
  "Foot Roll": "Mobility",
  "90/90 Hip Rotations": "Mobility",
  "Ankle Dorsiflexion Rocks": "Mobility",
  "Ankle Rocks": "Mobility",
  "Ankle Pogo Rocks": "Mobility",
  "Dynamic Hip Openers": "Mobility",
  "T-Spine Rotations": "Mobility",
  "Thoracic Extension": "Mobility",
  "Thoracic Extension Breathing": "Mobility",
  "Couch Stretch": "Mobility",
  "Deep Squat Pry": "Mobility",
  "Deep Squat Hold Breathing": "Mobility",
  "Hip Flexor Stretch": "Mobility",
  "Adductor Rock": "Mobility",
  "Adductor Stretch": "Mobility",
  "Calf Stretch": "Mobility",
  "Child Pose Lat Stretch": "Mobility",
  "Lat Bench Stretch": "Mobility",
  "Supine Breathing": "Mobility",
  "Supine Legs-Up Breathing": "Mobility",
  "90-90 Breathing": "Mobility",
  "Deep Nasal Breathing": "Mobility",
  "Nasal Walk": "Mobility",
  "Slow Walk": "Mobility",
  "Nasal Incline Walk": "Mobility",
  "Incline Treadmill Walk": "Mobility",
  "Band Shoulder Traction": "Mobility",
  "Pec Minor Stretch": "Mobility",
  "Scap Pull-Ups": "Mobility",
  "Straight Arm Pulldown": "Mobility",
  "Passive Hang": "Mobility",
  "Deadbugs": "Mobility",
  "Cable External Rotations": "Mobility",
  "Glute Bridge Hold": "Mobility",
  "Glute Bridge + ISO Hold": "Mobility",
  "SL Glute Bridge": "Mobility"
};
const LIGHT_INTENT = new Set(["Cuban Press", "Band Pull-Aparts", "Band Pull-Aparts (overhand)", "Cable External Rotation", "Cable External Rotations", "Light Cable External Rotation", "Side-Lying External Rotation (DB)", "Rack Hip CARs", "Wall Angels", "Scapular Wall Slides", "Scapular Pull-Ups", "Scap Pull-Ups", "Dead Hangs (passive → active)", "Dead Hang Active", "Passive → Active Hang", "Passive Hang", "Hip 90/90 Stretch", "Ankle Circles + Dorsiflexion Wall Drill", "Thoracic Extension over Roller", "Thoracic Extension", "Pec Minor Doorway Stretch", "Thoracic Rotation (Kneeling)", "Thoracic Cat-Cow", "Diaphragmatic Breathing", "World's Greatest Stretch", "Shoulder CARs", "Cable Y Raises", "Cable Y Raise", "Band Clamshells", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "SL Glute Bridge", "Nordic Hamstring Curl ISO", "Copenhagen Plank", "V-Ups", "Hanging Leg Raises", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Box Drop Stick", "Snap Down x3 (sub-max)", "Snap Down", "MB Slam x3 (easy)", "Force Plate CMJ", "CMJ", "Empty Bar Bench Press", "50–60% Bench Press", "Explosive Empty Bar Bench", "Lat Stretch (Bar Hang)", "Thoracic Cat-Cow", "Hang Clean", "MB Slam → MB Lateral Toss", "MB Slam → Lateral Toss", "Snap Down → Split Squat Jump", "Snap Down → Split Jump", "Suitcase Carry", "Rear Delt Cable Fly", "Cable Rear Fly", "Serratus Wall Slides", "Straight Arm Pulldown", "Pogos", "Vertical Jump", "Copenhagen Short Lever", "Banded Deadbug", "Band Lateral Walk", "Tempo Goblet Squat", "Couch Stretch", "Deep Squat Pry", "Ankle Rocks", "Quads Roll", "Adductors Roll", "Glutes Roll", "T-Spine Roll", "Foot Roll", "Dynamic Hip Openers", "Ankle Pogo Rocks", "T-Spine Rotations",
// New Sunday
"Foam Roll T-Spine", "Foam Roll Adductors", "Foam Roll Glutes", "Foam Roll Lats", "Foam Roll Quads", "90/90 Hip Rotations", "Deadbugs", "Ankle Dorsiflexion Rocks", "Tibialis Raises", "Face Pull to External Rotation", "Pallof Press", "Half-Kneeling Landmine Press", "Chest Supported DB Row",
// Warm-down
"Crocodile Breathing", "Hip Flexor Stretch", "Pec Doorway Stretch", "Lat Stretch on Bench", "Hamstring Neural Glide", "Nasal Walk", "Hamstring Glide", "Supine Breathing", "Adductor Rock", "Nasal Breathing", "Pec Minor Release", "Trap Stretch", "Thoracic Breathing", "Child Pose Lat Stretch", "Passive Hang", "90-90 Breathing", "Lat Bench Stretch", "Calf Stretch", "Incline Treadmill Walk", "Adductor Stretch", "Slow Walk", "Band Shoulder Traction", "Pec Minor Stretch", "Thoracic Extension Breathing", "Deep Nasal Breathing", "Nasal Incline Walk", "Deep Squat Hold Breathing", "Supine Legs-Up Breathing"]);
const PROGRESSIVE_OVERLOAD_EX = new Set([
// Barbell compounds
"BB Back Squat", "BB Bench Press", "BB Split Squat", "Trap Bar Deadlift", "RDL", "BB Row", "Nordic Curl", "Weighted Pull-Ups",
// Dumbbell compounds
"DB Incline Press", "DB Incline Bench Press", "DB Incline Bench", "SA DB Row", "SA DB Shoulder Press", "Incline Curl", "Incline Dumbbell Curl",
// Cable / machine isolation
"Straight Bar Pushdown", "Lat Pulldown", "Chest Supported Row", "OH DB Extension", "Overhead DB Tricep Extension", "DB Lateral Raise", "DB Lateral Raises", "Hammer Curl", "Hip Thrust",
// Weighted bodyweight
"Pull-Ups", "Bulgarian Split Squat"]);
const BODYWEIGHT_EX = new Set(["Pull-Ups", "Hanging Leg Raises", "V-Ups", "Copenhagen Plank", "Copenhagen Short Lever", "Dead Hangs (passive → active)", "Dead Hang Active", "Passive → Active Hang", "Passive Hang", "Scapular Pull-Ups", "Scap Pull-Ups", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Box Drop Stick", "Snap Down x3 (sub-max)", "Snap Down → Split Squat Jump", "Snap Down → Split Jump", "Snap Down", "Force Plate CMJ", "CMJ", "Vertical Jump", "Pogos", "Nordic Hamstring Curl ISO", "Nordic Curl", "SL Glute Bridge", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "World's Greatest Stretch", "Shoulder CARs", "Diaphragmatic Breathing", "Hip 90/90 Stretch", "Thoracic Cat-Cow", "Thoracic Rotation (Kneeling)", "Thoracic Extension", "Thoracic Extension over Roller", "Pec Minor Doorway Stretch", "Ankle Circles + Dorsiflexion Wall Drill", "Wall Angels", "Scapular Wall Slides", "Serratus Wall Slides", "Copenhagen Short Lever", "Banded Deadbug", "Band Lateral Walk", "Tempo Goblet Squat", "Couch Stretch", "Deep Squat Pry", "Ankle Rocks", "Ankle Pogo Rocks", "Dynamic Hip Openers", "T-Spine Rotations",
// New Sunday
"Foam Roll T-Spine", "Foam Roll Adductors", "Foam Roll Glutes", "Foam Roll Lats", "Foam Roll Quads", "90/90 Hip Rotations", "Deadbugs", "Ankle Dorsiflexion Rocks", "Tibialis Raises", "Pallof Press",
// Warm-down
"Crocodile Breathing", "Hip Flexor Stretch", "Pec Doorway Stretch", "Lat Stretch on Bench", "Hamstring Neural Glide", "Nasal Walk", "Hamstring Glide", "Supine Breathing", "Adductor Rock", "Nasal Breathing", "Pec Minor Release", "Trap Stretch", "Thoracic Breathing", "Child Pose Lat Stretch", "90-90 Breathing", "Lat Bench Stretch", "Calf Stretch", "Adductor Stretch", "Slow Walk", "Band Shoulder Traction", "Pec Minor Stretch", "Thoracic Extension Breathing", "Deep Nasal Breathing", "Passive Hang", "Deep Squat Hold Breathing", "Supine Legs-Up Breathing"]);
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
  focus: "Growth Hormone + Metabolic Leg Day",
  warmup: {
    duration: "12 min",
    phases: [{
      label: "Tissue",
      exercises: [{
        name: "Quads Roll",
        detail: "45s",
        badge: "MOB"
      }, {
        name: "Adductors Roll",
        detail: "45s",
        badge: "MOB"
      }, {
        name: "Glutes Roll",
        detail: "45s",
        badge: "MOB"
      }]
    }, {
      label: "Mobility",
      exercises: [{
        name: "Couch Stretch",
        detail: "45s/side",
        badge: "MOB"
      }, {
        name: "Deep Squat Pry",
        detail: "60s",
        badge: "MOB"
      }, {
        name: "Ankle Rocks",
        detail: "12",
        badge: "MOB"
      }]
    }, {
      label: "Activation",
      exercises: [{
        name: "Band Lateral Walk",
        detail: "2×12",
        badge: "ACT"
      }, {
        name: "SL Glute Bridge",
        detail: "2×8",
        badge: "ACT"
      }, {
        name: "Tempo Goblet Squat",
        detail: "2×6",
        badge: "ACT"
      }]
    }, {
      label: "CNS",
      exercises: [{
        name: "Snap Down",
        detail: "2×3",
        badge: "CNS"
      }, {
        name: "Vertical Jump",
        detail: "2×2",
        badge: "CNS"
      }]
    }]
  },
  blocks: [{
    icon: "A",
    title: "A — Power",
    sub: "Reactive Primer",
    exercises: [{
      name: "Snap Down → Split Jump",
      detail: "3×3",
      badge: "POWER"
    }]
  }, {
    icon: "B",
    title: "B — Main Hypertrophy",
    sub: "Primary Loading",
    exercises: [{
      name: "BB Back Squat",
      detail: "4×8",
      badge: "HYP"
    }]
  }, {
    icon: "C",
    title: "C — Posterior",
    sub: "Accessory",
    exercises: [{
      name: "Trap Bar Deadlift",
      detail: "3×6",
      badge: "STR"
    }, {
      name: "RDL",
      detail: "3×8",
      badge: "STR"
    }]
  }, {
    icon: "D",
    title: "D — Unilateral",
    sub: "Quad + Glute",
    exercises: [{
      name: "BB Split Squat",
      detail: "3×8",
      badge: "HYP"
    }]
  }, {
    icon: "E",
    title: "E — Glutes",
    sub: "Isolation",
    exercises: [{
      name: "Hip Thrust",
      detail: "3×10",
      badge: "HYP"
    }]
  }, {
    icon: "F",
    title: "F — Core",
    sub: "Finisher",
    exercises: [{
      name: "Copenhagen Plank",
      detail: "3×20s",
      badge: "CORE"
    }]
  }],
  warmdown: {
    duration: "9 min",
    phases: [{
      label: "Decompression Walk",
      exercises: [{
        name: "Nasal Incline Walk",
        detail: "4 min · low speed, nose only, drop heart rate",
        badge: "MOB"
      }]
    }, {
      label: "Hip & Leg Reset",
      exercises: [{
        name: "Deep Squat Hold Breathing",
        detail: "1 min · full depth hold, breathe into hips",
        badge: "MOB"
      }, {
        name: "Hip Flexor Stretch",
        detail: "1 min/side · deep lunge hold, hands elevated",
        badge: "MOB"
      }, {
        name: "Adductor Stretch",
        detail: "1 min · wide stance, sink down slowly",
        badge: "MOB"
      }, {
        name: "Supine Legs-Up Breathing",
        detail: "2 min · legs on wall, belly breathing, full reset",
        badge: "MOB"
      }]
    }]
  }
};
const DAYS = [{
  id: "sun",
  label: "Sunday",
  accent: C.sun,
  title: "Full Body Bulletproofing",
  focus: "Longevity + Athletic Integrity",
  warmup: {
    duration: "10–12 min",
    phases: [{
      label: "Foam Rolling",
      exercises: [{
        name: "Foam Roll T-Spine",
        detail: "1 min · slow passes, pause on tight spots",
        badge: "MOB"
      }, {
        name: "Foam Roll Adductors",
        detail: "1 min / side",
        badge: "MOB"
      }, {
        name: "Foam Roll Glutes",
        detail: "1 min / side",
        badge: "MOB"
      }, {
        name: "Foam Roll Lats",
        detail: "1 min / side",
        badge: "MOB"
      }, {
        name: "Foam Roll Quads",
        detail: "1 min / side",
        badge: "MOB"
      }]
    }, {
      label: "Mobility + Activation",
      exercises: [{
        name: "90/90 Hip Rotations",
        detail: "2×8 each side",
        badge: "MOB"
      }, {
        name: "Deadbugs",
        detail: "2×8 slow · keep lower back flat",
        badge: "ACT"
      }, {
        name: "Cable External Rotations",
        detail: "2×15 · light weight",
        badge: "ACT"
      }, {
        name: "Ankle Dorsiflexion Rocks",
        detail: "2×12",
        badge: "MOB"
      }, {
        name: "Glute Bridge Hold",
        detail: "2×30 sec",
        badge: "ACT"
      }]
    }]
  },
  blocks: [{
    icon: "A",
    title: "A — Lower Body Integrity",
    sub: "Lower Body Bulletproofing",
    exercises: [{
      name: "Rear Foot Elevated Split Squat",
      detail: "3×8 each side · Tempo 3-1-1",
      badge: "STR"
    }, {
      name: "Single Leg RDL",
      detail: "3×8 each side · dumbbell",
      badge: "STR"
    }, {
      name: "Tibialis Raises",
      detail: "3×15",
      badge: "HEALTH"
    }]
  }, {
    icon: "B",
    title: "B — Shoulder + Upper Stability",
    sub: "Upper Body Bulletproofing",
    exercises: [{
      name: "Half-Kneeling Landmine Press",
      detail: "3×10 each side",
      badge: "STR"
    }, {
      name: "DB Incline Press",
      detail: "3×6 · slow tempo 4-1-2, quality reps only",
      badge: "HYP"
    }, {
      name: "Chest Supported DB Row",
      detail: "3×10 · pause at top",
      badge: "HYP"
    }, {
      name: "Face Pull to External Rotation",
      detail: "3×15",
      badge: "HEALTH"
    }]
  }, {
    icon: "C",
    title: "C — Core + Athletic Stability",
    sub: "Life Bulletproofing",
    exercises: [{
      name: "Copenhagen Plank",
      detail: "3×20 sec each side",
      badge: "CORE"
    }, {
      name: "Pallof Press",
      detail: "3×12 slow",
      badge: "CORE"
    }, {
      name: "Suitcase Carry",
      detail: "2× up & down the turf",
      badge: "CORE"
    }]
  }],
  warmdown: {
    duration: "10 min",
    phases: [{
      label: "Recovery Walk",
      exercises: [{
        name: "Nasal Walk",
        detail: "4 min · easy pace, nose only",
        badge: "MOB"
      }]
    }, {
      label: "Floor Reset",
      exercises: [{
        name: "90-90 Breathing",
        detail: "3 min · on floor, full exhale each breath",
        badge: "MOB"
      }, {
        name: "Hip Flexor Stretch",
        detail: "1 min/side · long hold, let it melt",
        badge: "MOB"
      }, {
        name: "Lat Bench Stretch",
        detail: "1 min · arms on bench, sink chest down",
        badge: "MOB"
      }, {
        name: "Calf Stretch",
        detail: "1 min · wall lean, both sides",
        badge: "MOB"
      }]
    }]
  }
}, {
  id: "mon",
  label: "Monday",
  accent: C.mon,
  title: "Lower Strength",
  focus: "Primary Testosterone + CNS Day",
  warmup: {
    duration: "12–15 min",
    phases: [{
      label: "Tissue",
      exercises: [{
        name: "Adductors Roll",
        detail: "45s",
        badge: "MOB"
      }, {
        name: "Glutes Roll",
        detail: "45s",
        badge: "MOB"
      }, {
        name: "T-Spine Roll",
        detail: "45s",
        badge: "MOB"
      }, {
        name: "Foot Roll",
        detail: "45s",
        badge: "MOB"
      }]
    }, {
      label: "Mobility",
      exercises: [{
        name: "Dynamic Hip Openers",
        detail: "8/side",
        badge: "MOB"
      }, {
        name: "Ankle Pogo Rocks",
        detail: "15",
        badge: "MOB"
      }, {
        name: "T-Spine Rotations",
        detail: "8/side",
        badge: "MOB"
      }]
    }, {
      label: "Activation",
      exercises: [{
        name: "SL Glute Bridge",
        detail: "2×8",
        badge: "ACT"
      }, {
        name: "Copenhagen Short Lever",
        detail: "2×15s",
        badge: "ACT"
      }, {
        name: "Banded Deadbug",
        detail: "2×6",
        badge: "ACT"
      }]
    }, {
      label: "CNS",
      exercises: [{
        name: "Pogos",
        detail: "2×20",
        badge: "CNS"
      }, {
        name: "Box Drop Stick",
        detail: "3×2",
        badge: "CNS"
      }, {
        name: "CMJ",
        detail: "2×2",
        badge: "CNS"
      }]
    }]
  },
  blocks: [{
    icon: "A",
    title: "A — Power",
    sub: "Low Volume",
    exercises: [{
      name: "Hang Clean",
      detail: "5×3",
      badge: "POWER"
    }]
  }, {
    icon: "B",
    title: "B — Strength",
    sub: "Primary Loading",
    exercises: [{
      name: "BB Back Squat",
      detail: "5×4",
      badge: "STR"
    }, {
      name: "Trap Bar Deadlift",
      detail: "3×3",
      badge: "STR"
    }]
  }, {
    icon: "C",
    title: "C — Posterior Chain",
    sub: "Accessory",
    exercises: [{
      name: "Nordic Curl",
      detail: "3×5",
      badge: "STR"
    }]
  }, {
    icon: "D",
    title: "D — Core",
    sub: "Finisher",
    exercises: [{
      name: "Copenhagen Plank",
      detail: "3×25s",
      badge: "CORE"
    }]
  }],
  warmdown: {
    duration: "9 min",
    phases: [{
      label: "Decompression Walk",
      exercises: [{
        name: "Incline Treadmill Walk",
        detail: "3–4 min · nasal breathing only, low speed",
        badge: "MOB"
      }]
    }, {
      label: "Spine & Hip Reset",
      exercises: [{
        name: "Passive Hang",
        detail: "1 min · decompress spine post heavy load",
        badge: "MOB"
      }, {
        name: "Hip Flexor Stretch",
        detail: "1 min/side · essential after heavy squat & deadlift",
        badge: "MOB"
      }, {
        name: "Adductor Rock",
        detail: "1 min · slow rocks, full range",
        badge: "MOB"
      }, {
        name: "Supine Breathing",
        detail: "2 min · diaphragm reset, CNS downregulation",
        badge: "MOB"
      }]
    }]
  }
}, {
  id: "tue",
  label: "Tuesday",
  accent: C.tue,
  title: "Upper Push",
  focus: "Androgen + Hypertrophy Signal",
  warmup: {
    duration: "12 min",
    phases: [{
      label: "Shoulder Prep",
      exercises: [{
        name: "Dead Hang Active",
        detail: "2×20s",
        badge: "ACT"
      }, {
        name: "Serratus Wall Slides",
        detail: "2×10",
        badge: "ACT"
      }, {
        name: "Cable External Rotation",
        detail: "2×15",
        badge: "ACT"
      }]
    }, {
      label: "Press Ramp",
      exercises: [{
        name: "Explosive Empty Bar Bench",
        detail: "2×5",
        badge: "PRIME"
      }]
    }]
  },
  blocks: [{
    icon: "A",
    title: "A — Strength",
    sub: "Primary Strength",
    exercises: [{
      name: "BB Bench Press",
      detail: "5×5",
      badge: "STR"
    }]
  }, {
    icon: "B",
    title: "B — Volume",
    sub: "Secondary Press",
    exercises: [{
      name: "DB Incline Press",
      detail: "4×8–10",
      badge: "HYP"
    }]
  }, {
    icon: "C",
    title: "C — Shoulder Hypertrophy",
    sub: "Added Block",
    exercises: [{
      name: "DB Lateral Raise",
      detail: "4×15",
      badge: "HYP"
    }, {
      name: "Cable Y Raise",
      detail: "3×12",
      badge: "HYP"
    }]
  }, {
    icon: "D",
    title: "D — Shoulder Integrity",
    sub: "Health",
    exercises: [{
      name: "Cuban Press",
      detail: "3×12",
      badge: "HEALTH"
    }]
  }, {
    icon: "E",
    title: "E — Triceps",
    sub: "Added Block",
    exercises: [{
      name: "Straight Bar Pushdown",
      detail: "4×12",
      badge: "HYP"
    }, {
      name: "OH DB Extension",
      detail: "3×10",
      badge: "HYP"
    }]
  }],
  warmdown: {
    duration: "7 min",
    phases: [{
      label: "Parasympathetic Walk",
      exercises: [{
        name: "Slow Walk",
        detail: "3 min · easy pace, let heart rate fall naturally",
        badge: "MOB"
      }]
    }, {
      label: "Upper Release",
      exercises: [{
        name: "Band Shoulder Traction",
        detail: "1 min · decompress shoulder capsule post press",
        badge: "MOB"
      }, {
        name: "Pec Minor Stretch",
        detail: "1 min/side · doorway or floor, breathe into it",
        badge: "MOB"
      }, {
        name: "Thoracic Extension Breathing",
        detail: "2 min · over roller, inhale to expand",
        badge: "MOB"
      }]
    }]
  }
}, {
  id: "wed",
  label: "Wednesday",
  accent: C.wed,
  title: "Upper Pull",
  focus: "Neural Pull + Structural Balance",
  warmup: {
    duration: "10 min",
    phases: [{
      label: "Pull Prep",
      exercises: [{
        name: "Passive → Active Hang",
        detail: "2×20s",
        badge: "ACT"
      }, {
        name: "Scap Pull-Ups",
        detail: "2×8",
        badge: "ACT"
      }, {
        name: "Straight Arm Pulldown",
        detail: "2×12",
        badge: "ACT"
      }, {
        name: "Thoracic Extension",
        detail: "1 min",
        badge: "MOB"
      }]
    }]
  },
  blocks: [{
    icon: "A",
    title: "A — Power",
    sub: "Minimal",
    exercises: [{
      name: "MB Slam → Lateral Toss",
      detail: "3×3",
      badge: "POWER"
    }]
  }, {
    icon: "B",
    title: "B — Strength",
    sub: "Width Driver",
    exercises: [{
      name: "Weighted Pull-Ups",
      detail: "5×5",
      badge: "STR"
    }]
  }, {
    icon: "C",
    title: "C — Thickness",
    sub: "Horizontal Pull",
    exercises: [{
      name: "SA DB Row",
      detail: "3×8",
      badge: "HYP"
    }, {
      name: "Chest Supported Row",
      detail: "3×10",
      badge: "HYP"
    }]
  }, {
    icon: "D",
    title: "D — Press Superset",
    sub: "Horizontal Push Balance",
    exercises: [{
      name: "BB Bench Press",
      detail: "3×5",
      badge: "STR"
    }]
  }, {
    icon: "E",
    title: "E — Rear Delt",
    sub: "Injury Proofing",
    exercises: [{
      name: "Cable Rear Fly",
      detail: "3×12",
      badge: "HEALTH"
    }]
  }, {
    icon: "F",
    title: "F — Biceps",
    sub: "Added Block",
    exercises: [{
      name: "Incline Curl",
      detail: "3×10",
      badge: "HYP"
    }, {
      name: "Hammer Curl",
      detail: "2×12",
      badge: "HYP"
    }]
  }],
  warmdown: {
    duration: "6 min",
    phases: [{
      label: "Decompression",
      exercises: [{
        name: "Passive Hang",
        detail: "2×30s · dead weight, full lat release",
        badge: "MOB"
      }]
    }, {
      label: "Reset",
      exercises: [{
        name: "Child Pose Lat Stretch",
        detail: "1 min · arms extended, breathe into lats",
        badge: "MOB"
      }, {
        name: "Deep Nasal Breathing",
        detail: "3 min · seated or supine, full exhale",
        badge: "MOB"
      }]
    }]
  }
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
// In-progress set state cache — survives tab switches within same session
const setsProgressCache = {};
function cacheSetsProgress(dayId, exName, sets) {
  setsProgressCache[dayId + "_" + exName] = sets;
}
function getCachedSets(dayId, exName) {
  return setsProgressCache[dayId + "_" + exName] || null;
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
const READINESS_KEY = "wt_readiness_v1";
const RESONANCE_KEY = "wt_resonance_v1";
const OPPONENT_KEY = "wt_opponent_v1";
const SCAR_KEY = "wt_scar_v1";
const FOSSIL_KEY = "wt_fossil_v1";
const ORACLE_KEY = "wt_oracle_v1";
const LAST_REP_KEY = "wt_lastrep_v1";
const UNDERTOW_KEY = "wt_undertow_v1";
const memStore = {};
let bwStore = [];
let restStore = {};
let sessionsStore = [];
let readinessStore = [];
let resonanceStore = {};
let opponentStore = {
  name: "",
  momentum: 0
};
let scarStore = {};
let fossilStore = {};
let lastRepStore = [];
let undertowStore = {
  debt: 0,
  lastUpdated: null
};
let oracleStore = {
  lastShown: null,
  prediction: null
};
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
  try {
    const r = await window.storage.get(READINESS_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (Array.isArray(p)) readinessStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(RESONANCE_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') resonanceStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(OPPONENT_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') opponentStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(SCAR_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') scarStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(FOSSIL_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') fossilStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(LAST_REP_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (Array.isArray(p)) lastRepStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(UNDERTOW_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') undertowStore = p;
    }
  } catch (e) {}
  try {
    const r = await window.storage.get(ORACLE_KEY);
    if (r?.value) {
      const p = JSON.parse(r.value);
      if (p && typeof p === 'object') oracleStore = p;
    }
  } catch (e) {}
}
let saveEntriesTimer = null;
let saveFailCount = 0;
async function _doSaveEntries() {
  try {
    if (Object.keys(memStore).length === 0) return;
    const val = JSON.stringify(memStore);
    let r = await window.storage.set(STORE_KEY, val);
    if (!r) {
      await new Promise(res => setTimeout(res, 600));
      r = await window.storage.set(STORE_KEY, val);
    }
    if (!r) {
      saveFailCount++;
      if (saveFailCount >= 3) {
        console.error("wt: saveEntries failed 3x");
        reportSaveStatus(false);
      }
    } else {
      saveFailCount = 0;
      reportSaveStatus(true);
    }
  } catch (e) {
    saveFailCount++;
    console.error("wt: saveEntries failed", e);
    if (saveFailCount >= 3) reportSaveStatus(false);
  }
}
function saveEntries() {
  // Debounce — collapse rapid consecutive saves into one write
  if (saveEntriesTimer) clearTimeout(saveEntriesTimer);
  saveEntriesTimer = setTimeout(() => {
    saveEntriesTimer = null;
    _doSaveEntries();
  }, 400);
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

// Canonical name map — aliases merge into primary exercise
const EX_ALIAS = {
  "Cuban Press (Sunday)": "Cuban Press",
  "Band Pull-Aparts (Sunday)": "Band Pull-Aparts"
};
function canonicalEx(name) {
  return EX_ALIAS[name] || name;
}
function getEntries(ex) {
  const key = canonicalEx(ex);
  const a = memStore[key] || [];
  const alias = Object.keys(EX_ALIAS).find(k => EX_ALIAS[k] === key);
  const b = alias && memStore[alias] ? memStore[alias] : [];
  return [...a, ...b].filter(e => e && typeof e === "object" && e.date && e.weight != null).sort((x, y) => x.date.localeCompare(y.date));
}
function setEntries(ex, arr) {
  memStore[canonicalEx(ex)] = [...arr];
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

// ── FLUSH ON BACKGROUND ───────────────────────────────────────────────────────
// iOS kills async writes when app is backgrounded. Force-flush everything
// the moment the page becomes hidden (swipe away, lock screen, etc.)
function flushAllStores() {
  // Use synchronous-style calls with Promise.all — best effort before iOS kills us
  const saves = [];
  if (Object.keys(memStore).length > 0) saves.push(window.storage.set(STORE_KEY, JSON.stringify(memStore)).catch(() => {}));
  if (bwStore.length > 0) saves.push(window.storage.set(BW_KEY, JSON.stringify(bwStore)).catch(() => {}));
  if (Object.keys(restStore).length > 0) saves.push(window.storage.set(REST_KEY, JSON.stringify(restStore)).catch(() => {}));
  if (sessionsStore.length > 0) saves.push(window.storage.set(SESSIONS_KEY, JSON.stringify(sessionsStore)).catch(() => {}));
  if (readinessStore.length > 0) saves.push(window.storage.set(READINESS_KEY, JSON.stringify(readinessStore)).catch(() => {}));
  if (Object.keys(resonanceStore).length > 0) saves.push(window.storage.set(RESONANCE_KEY, JSON.stringify(resonanceStore)).catch(() => {}));
  if (lastRepStore.length > 0) saves.push(window.storage.set(LAST_REP_KEY, JSON.stringify(lastRepStore)).catch(() => {}));
  saves.push(window.storage.set(SCAR_KEY, JSON.stringify(scarStore)).catch(() => {}));
  saves.push(window.storage.set(FOSSIL_KEY, JSON.stringify(fossilStore)).catch(() => {}));
  saves.push(window.storage.set(UNDERTOW_KEY, JSON.stringify(undertowStore)).catch(() => {}));
  saves.push(window.storage.set(ORACLE_KEY, JSON.stringify(oracleStore)).catch(() => {}));
  return Promise.all(saves);
}

// ── NEW FEATURE SAVE HELPERS ──────────────────────────────────────────────────
async function saveReadiness() {
  try {
    await window.storage.set(READINESS_KEY, JSON.stringify(readinessStore));
  } catch (e) {}
}
async function saveResonance() {
  try {
    await window.storage.set(RESONANCE_KEY, JSON.stringify(resonanceStore));
  } catch (e) {}
}
async function saveOpponent() {
  try {
    await window.storage.set(OPPONENT_KEY, JSON.stringify(opponentStore));
  } catch (e) {}
}
async function saveScar() {
  try {
    await window.storage.set(SCAR_KEY, JSON.stringify(scarStore));
  } catch (e) {}
}
async function saveFossil() {
  try {
    await window.storage.set(FOSSIL_KEY, JSON.stringify(fossilStore));
  } catch (e) {}
}
async function saveLastRep() {
  try {
    await window.storage.set(LAST_REP_KEY, JSON.stringify(lastRepStore));
  } catch (e) {}
}
async function saveUndertow() {
  try {
    await window.storage.set(UNDERTOW_KEY, JSON.stringify(undertowStore));
  } catch (e) {}
}
async function saveOracle() {
  try {
    await window.storage.set(ORACLE_KEY, JSON.stringify(oracleStore));
  } catch (e) {}
}

// ── FEATURE DATA HELPERS ──────────────────────────────────────────────────────
// Readiness
function logReadiness(sleep, stress, soreness) {
  const score = Math.round((sleep + (6 - stress) + (6 - soreness)) / 15 * 100);
  const today = todayStr();
  readinessStore = readinessStore.filter(r => r.date !== today);
  readinessStore.push({
    date: today,
    sleep,
    stress,
    soreness,
    score
  });
  readinessStore.sort((a, b) => a.date.localeCompare(b.date));
  saveReadiness();
  return score;
}
function getTodayReadiness() {
  return readinessStore.find(r => r.date === todayStr()) || null;
}
function getAvgReadiness(days = 14) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cs = cutoff.toISOString().split("T")[0];
  const recent = readinessStore.filter(r => r.date >= cs);
  if (!recent.length) return null;
  return Math.round(recent.reduce((s, r) => s + r.score, 0) / recent.length);
}

// Scar tissue — track struggles and breakthroughs per exercise
function recordStruggle(exName) {
  if (!scarStore[exName]) scarStore[exName] = {
    struggles: 0,
    breakthroughs: 0,
    lastStruggle: null
  };
  scarStore[exName].struggles++;
  scarStore[exName].lastStruggle = todayStr();
  saveScar();
}
function recordBreakthrough(exName) {
  if (!scarStore[exName]) scarStore[exName] = {
    struggles: 0,
    breakthroughs: 0,
    lastStruggle: null
  };
  scarStore[exName].breakthroughs++;
  saveScar();
}
function getScarIntensity(exName) {
  const s = scarStore[exName];
  if (!s) return 0;
  const raw = Math.max(0, s.struggles - s.breakthroughs * 2);
  return Math.min(1, raw / 8); // 0-1 scale
}

// Fossil record — preserve first-ever entry per exercise
function checkAndSaveFossil(exName, entry) {
  if (!fossilStore[exName]) {
    fossilStore[exName] = {
      date: entry.date,
      weight: entry.weight,
      reps: entry.reps
    };
    saveFossil();
  }
}

// Undertow — fatigue debt
function updateUndertow() {
  const now = new Date();
  const today = todayStr();
  if (undertowStore.lastUpdated === today) return;
  // Count sessions in last 7 days
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const wa = weekAgo.toISOString().split("T")[0];
  const recentSessions = sessionsStore.filter(s => s.date >= wa).length;
  // Recent readiness avg
  const avgR = getAvgReadiness(7) || 70;
  // Debt increases with sessions, decreases with readiness
  const sessionLoad = recentSessions * 12;
  const recoveryFactor = avgR / 100 * 40;
  undertowStore.debt = Math.max(0, Math.min(100, sessionLoad - recoveryFactor));
  undertowStore.lastUpdated = today;
  saveUndertow();
}

// Momentum score (0-100)
function computeMomentum() {
  const now = new Date();
  const thirtyAgo = new Date();
  thirtyAgo.setDate(thirtyAgo.getDate() - 30);
  const ta = thirtyAgo.toISOString().split("T")[0];
  const recentSessions = sessionsStore.filter(s => s.date >= ta);
  const sessionScore = Math.min(40, recentSessions.length * 5);
  // PR bonus
  const allEx = getAllWorkingExercises();
  let prCount = 0;
  allEx.forEach(ex => {
    const ents = getEntries(ex.name);
    ents.forEach((e, i) => {
      if (isPR(ents, i) && e.date >= ta) prCount++;
    });
  });
  const prScore = Math.min(30, prCount * 3);
  // Consistency: no gaps >7 days
  const dates = recentSessions.map(s => s.date).sort();
  let gapPenalty = 0;
  for (let i = 1; i < dates.length; i++) {
    const diff = (new Date(dates[i]) - new Date(dates[i - 1])) / (1000 * 60 * 60 * 24);
    if (diff > 7) gapPenalty += 10;
  }
  // Readiness bonus
  const readinessScore = Math.min(20, (getAvgReadiness(30) || 50) / 5);
  // BW stability bonus
  const bwScore = bwStore.length >= 4 ? 10 : 0;
  return Math.max(0, Math.min(100, Math.round(sessionScore + prScore + readinessScore + bwScore - gapPenalty)));
}

// Circadian — add hour to entry metadata (no-op if already there)
function getCurrentHour() {
  return new Date().getHours();
}
function getCircadianPeak() {
  // Find the 2-3 hour window where logged weights are statistically highest
  const hourBuckets = {};
  const allEx = getAllWorkingExercises().filter(ex => !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name));
  allEx.forEach(ex => {
    getEntries(ex.name).forEach(e => {
      if (e.hour == null) return;
      if (!hourBuckets[e.hour]) hourBuckets[e.hour] = {
        total: 0,
        count: 0
      };
      hourBuckets[e.hour].total += e.weight;
      hourBuckets[e.hour].count++;
    });
  });
  const hours = Object.keys(hourBuckets).filter(h => hourBuckets[h].count >= 3);
  if (hours.length < 3) return null;
  const avgs = hours.map(h => ({
    h: parseInt(h),
    avg: hourBuckets[h].total / hourBuckets[h].count
  }));
  avgs.sort((a, b) => b.avg - a.avg);
  return avgs[0]?.h ?? null;
}
function isInPeakWindow() {
  const peak = getCircadianPeak();
  if (peak == null) return false;
  const h = getCurrentHour();
  return Math.abs(h - peak) <= 1 || peak === 0 && h === 23 || peak === 23 && h === 0;
}

// Seasonal theme
function getSeasonalTheme() {
  const m = new Date().getMonth();
  if (m <= 1 || m === 11) return {
    name: "winter",
    accent: "#e8f0ff",
    mod: -0.15,
    speed: 0.7
  }; // Dec-Feb: quiet, monastic
  if (m <= 4) return {
    name: "spring",
    accent: "#a8e6a3",
    mod: 0.05,
    speed: 1.0
  }; // Mar-May: fresh
  if (m <= 7) return {
    name: "summer",
    accent: "#ff7043",
    mod: 0.15,
    speed: 1.3
  }; // Jun-Aug: aggressive
  return {
    name: "autumn",
    accent: "#e8c547",
    mod: 0.0,
    speed: 0.9
  }; // Sep-Nov: philosophical
}

// Oracle — Sunday night prediction
function generateOraclePrediction() {
  const allEx = getAllWorkingExercises();
  const predictions = [];
  // Check for stalled lifts
  allEx.filter(ex => PROGRESSIVE_OVERLOAD_EX.has(ex.name)).forEach(ex => {
    const ents = getEntries(ex.name);
    if (ents.length < 4) return;
    const last3 = ents.slice(-3);
    const allSame = last3.every(e => e.weight === last3[0].weight);
    if (allSame) {
      const sessionCount = new Set(ents.map(e => e.date)).size;
      // Estimate sessions to breakthrough based on historical average plateau length
      predictions.push(`Your ${ex.name} has been at ${last3[0].weight}lbs for ${last3.length} sessions. Based on your patterns, it will move in 1-2 sessions — increase volume this week, not load.`);
    }
  });
  // Check bodyweight trend vs performance
  if (bwStore.length >= 4) {
    const recent = bwStore.slice(-4);
    const bwDelta = recent[recent.length - 1].weight - recent[0].weight;
    if (bwDelta < -2) {
      predictions.push(`You've dropped ${Math.abs(bwDelta.toFixed(1))}lbs recently. Watch your strength — significant weight loss can mask CNS fatigue. Consider eating at maintenance this week.`);
    }
    if (bwDelta > 3) {
      predictions.push(`You've gained ${bwDelta.toFixed(1)}lbs recently. If intentional, expect strength gains to follow within 2-3 sessions. If not, check your recovery quality.`);
    }
  }
  // Session frequency check
  const last14 = new Date();
  last14.setDate(last14.getDate() - 14);
  const l14 = last14.toISOString().split("T")[0];
  const recentCount = sessionsStore.filter(s => s.date >= l14).length;
  if (recentCount >= 8) {
    predictions.push(`You've trained ${recentCount} times in 14 days. That's high frequency. A deload this week (60% load) will likely produce a performance spike next week.`);
  }
  if (recentCount <= 2 && sessionsStore.length > 4) {
    predictions.push(`Only ${recentCount} sessions in the past two weeks. Your nervous system is rested — this week has high PR potential if you show up.`);
  }
  if (!predictions.length) {
    const momentum = computeMomentum();
    if (momentum > 70) predictions.push(`Momentum score ${momentum}/100. You're in a growth window. Push intensity on your primary lifts this week.`);else predictions.push(`Momentum score ${momentum}/100. Focus on consistency over intensity this week. Show up, do the work, don't overthink the numbers.`);
  }
  return predictions[Math.floor(Math.random() * predictions.length)];
}
function getOracle() {
  const now = new Date();
  const isSundayNight = now.getDay() === 0 && now.getHours() >= 18;
  const isMondayMorning = now.getDay() === 1 && now.getHours() < 6;
  if (!isSundayNight && !isMondayMorning) return null;
  const today = todayStr();
  if (oracleStore.lastShown === today) return oracleStore.prediction;
  // Generate new prediction Sunday night
  if (isSundayNight) {
    const pred = generateOraclePrediction();
    oracleStore = {
      lastShown: today,
      prediction: pred
    };
    saveOracle();
    return pred;
  }
  return oracleStore.prediction; // Monday morning shows Sunday's prediction
}

// Whisper — one unique post-session insight
function generateWhisper(dayId) {
  const allEx = getAllWorkingExercises();
  const insights = [];
  // Total sets ever
  let totalSets = 0;
  Object.values(memStore).forEach(arr => {
    totalSets += arr.length;
  });
  if (totalSets > 0) insights.push(`You've now logged ${totalSets.toLocaleString()} total sets in this app.`);
  // Streak check
  const dates = [...new Set(sessionsStore.map(s => s.date))].sort().reverse();
  let streak = 0;
  const td = new Date();
  for (let i = 0; i < dates.length; i++) {
    const d = new Date(dates[i]);
    const diff = Math.round((td - d) / (1000 * 60 * 60 * 24)) - i;
    if (diff <= 1) streak++;else break;
  }
  if (streak > 2) insights.push(`This is session ${streak} in a row. Don't break the chain.`);
  // Check for clean day
  const day = DAYS.find(d => d.id === dayId);
  if (day) {
    const todayS = todayStr();
    const logged = day.blocks.flatMap(b => b.exercises || []).filter(ex => getEntries(ex.name).some(e => e.date === todayS)).length;
    const total = day.blocks.flatMap(b => b.exercises || []).length;
    if (logged === total) insights.push(`Perfect ${day.label}. Every exercise logged. That's rare.`);
  }
  // Long-standing PR
  const allPRDates = [];
  allEx.forEach(ex => {
    const ents = getEntries(ex.name);
    ents.forEach((e, i) => {
      if (isPR(ents, i)) allPRDates.push(e.date);
    });
  });
  if (allPRDates.length > 0) {
    const oldestPR = allPRDates.sort()[0];
    const daysSince = Math.round((new Date() - new Date(oldestPR)) / (1000 * 60 * 60 * 24));
    if (daysSince > 60) insights.push(`Your oldest PR is from ${fmtDate(oldestPR)} — ${daysSince} days ago. That's your floor. Every day you train above it.`);
  }
  // Session duration trend
  const recent5 = sessionsStore.slice(0, 5).map(s => parseDurationToMin(s.duration)).filter(Boolean);
  if (recent5.length >= 3) {
    const avg = recent5.reduce((a, b) => a + b, 0) / recent5.length;
    insights.push(`Your last ${recent5.length} sessions averaged ${Math.round(avg)} minutes.`);
  }
  if (!insights.length) insights.push(`Session complete. The work compounds whether you feel it or not.`);
  return insights[Math.floor(Math.random() * insights.length)];
}

// Blood Memory — exercise pairing correlations
function getBloodMemoryInsight(exName) {
  // Find exercises that co-occur with this one in sessions and correlate with performance
  const ents = getEntries(exName);
  if (ents.length < 6) return null;
  const allDates = new Set(ents.map(e => e.date));
  const allEx = getAllWorkingExercises();
  const correlations = {};
  // For each other exercise, split this exercise's sessions into "days with" vs "days without"
  allEx.forEach(other => {
    if (other.name === exName) return;
    const otherDates = new Set(getEntries(other.name).map(e => e.date));
    const withW = [],
      withoutW = [];
    ents.forEach(e => {
      if (otherDates.has(e.date)) withW.push(e.weight);else withoutW.push(e.weight);
    });
    if (withW.length >= 3 && withoutW.length >= 2) {
      correlations[other.name] = {
        withW,
        withoutW
      };
    }
  });
  // Find strongest positive correlation (performing better on days with paired exercise)
  let best = null,
    bestDelta = -Infinity;
  Object.keys(correlations).forEach(otherName => {
    const {
      withW,
      withoutW
    } = correlations[otherName];
    const avgWith = withW.reduce((a, b) => a + b, 0) / withW.length;
    const avgWithout = withoutW.reduce((a, b) => a + b, 0) / withoutW.length;
    if (avgWithout === 0) return;
    const delta = (avgWith - avgWithout) / avgWithout * 100;
    if (delta > bestDelta) {
      bestDelta = delta;
      best = otherName;
    }
  });
  if (!best || bestDelta < 5) return null;
  return {
    pairedWith: best,
    delta: Math.round(bestDelta)
  };
}

// Archaeology — surface historical moments
function getArchaeologyCard() {
  const today = todayStr();
  const allEx = getAllWorkingExercises();
  const events = [];
  // One year ago
  const yearAgo = new Date();
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  const yaStr = yearAgo.toISOString().split("T")[0];
  allEx.forEach(ex => {
    const ents = getEntries(ex.name).filter(e => e.date === yaStr);
    if (ents.length > 0) events.push(`One year ago today you logged ${ex.name} at ${ents[0].weight}lbs.`);
  });
  // Milestone sets
  let totalSets = 0;
  Object.values(memStore).forEach(arr => {
    totalSets += arr.length;
  });
  const milestones = [100, 250, 500, 1000, 2500, 5000];
  milestones.forEach(m => {
    if (totalSets === m || totalSets === m + 1) events.push(`You just crossed ${m} total logged sets. That's a real number.`);
  });
  // Long streak being built
  const dates = [...new Set(sessionsStore.map(s => s.date))].sort().reverse();
  let streak = 0;
  const td = new Date();
  for (let i = 0; i < dates.length; i++) {
    const d = new Date(dates[i]);
    const diff = Math.round((td - d) / (1000 * 60 * 60 * 24)) - i;
    if (diff <= 1) streak++;else break;
  }
  if (streak === 7) events.push(`Seven days in a row. You haven't missed a session in a week.`);
  if (streak === 14) events.push(`Two weeks straight. Whatever you're doing — keep doing it.`);
  if (streak === 30) events.push(`Thirty consecutive days. This is no longer a habit. It's identity.`);
  if (!events.length) return null;
  return events[Math.floor(Math.random() * events.length)];
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    flushAllStores();
  }
});
window.addEventListener("pagehide", () => {
  flushAllStores();
});
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

// Request notification permission on first interaction
async function requestNotifPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    try {
      await Notification.requestPermission();
    } catch (e) {}
  }
}
function fireRestNotification(exName) {
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification("Rest Over — Let's Go! 💪", {
        body: exName ? `Time for your next set of ${exName}` : "Time for your next set",
        icon: "/Lifting-App/icon-192.png",
        badge: "/Lifting-App/icon-192.png",
        silent: false,
        tag: "rest-timer"
      });
    } catch (e) {}
  }
}
function restEndAlert(exName = "") {
  haptic([60, 40, 60, 40, 120]);
  fireRestNotification(exName);
  setTimeout(() => playBeep(660, 0.12), 0);
  setTimeout(() => playBeep(780, 0.12), 140);
  setTimeout(() => playBeep(920, 0.22), 280);
}
function calc1RM(w, r) {
  if (!w || !r || r <= 0) return 0;
  if (r === 1) return Math.round(w);
  return Math.round(w * (1 + r / 30));
}
function isPR(entries, idx) {
  if (!entries.length || !entries[idx]) return false;
  const e = entries[idx];
  if (e.bodyweight) return false;
  const maxBefore = idx === 0 ? -1 : entries.slice(0, idx).reduce((b, x) => Math.max(b, x.weight), -1);
  return e.weight > maxBefore && e.weight > 0;
}
const BARBELL_EX = new Set(["BB Back Squat", "BB Bench Press", "Trap Bar Deadlift", "RDL", "BB Row", "BB Split Squat", "Nordic Curl", "Hang Clean", "Weighted Pull-Ups"]);
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
  }, !urgent && !done && /*#__PURE__*/React.createElement(RestingFaceOverlay, null), /*#__PURE__*/React.createElement("svg", {
    width: 76,
    height: 76,
    style: {
      flexShrink: 0,
      position: "relative",
      zIndex: 1
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
      padding: "0 0 calc(env(safe-area-inset-bottom) + 86px)",
      maxWidth: 680,
      margin: "0 auto"
    },
    className: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "calc(env(safe-area-inset-top) + 20px) 16px 16px",
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
      fontSize: 16,
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
  const [sets, setSets] = useState(() => {
    const cached = getCachedSets(dayId, ex.name);
    if (cached && cached.length > 0) return cached;
    return Array.from({
      length: defaultSets
    }, (_, i) => ({
      weight: prefillW > 0 ? String(prefillW) : "",
      reps: String(prefillR(i)),
      done: false,
      id: i
    }));
  });
  // Persist set progress to cache on every change (survives tab switches)
  useEffect(() => {
    if (dayId) cacheSetsProgress(dayId, ex.name, sets);
  }, [sets]);
  const [showRestSettings, setShowRestSettings] = useState(false);
  const [restTime, setRestTimeLocal] = useState(getRestTime(ex.name));
  const [prFlashIdx, setPrFlashIdx] = useState(null);
  const [confirmDeleteIdx, setConfirmDeleteIdx] = useState(null);
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
        const willAllDone = sets.every((s2, idx2) => idx2 === i ? true : s2.done);
        if (willAllDone && onExerciseDone) {
          haptic([40, 30, 60, 30, 100]);
        } else haptic(30);
        const all = getEntries(ex.name);
        const newEntry = {
          date: todayStr(),
          dayId: dayId,
          weight: isBW ? bodyweight ? bodyweight + safeW : safeW : safeW,
          sets: 1,
          reps: r,
          note: "",
          bodyweight: isBW,
          hour: getCurrentHour()
        };
        all.push(newEntry);
        all.sort((a, b) => a.date.localeCompare(b.date));
        setEntries(ex.name, all);
        checkAndSaveFossil(ex.name, newEntry);
        onSaved();
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
      id: Date.now() + s.length
    }]);
  }
  function removeSet(i) {
    if (sets[i].done) {
      // un-log from storage first
      const todayS = todayStr();
      const w = parseFloat(sets[i].weight);
      const safeW = isNaN(w) ? 0 : w;
      const r = parseInt(sets[i].reps) || defaultReps;
      const loggedW = isBW ? bodyweight ? bodyweight + safeW : safeW : safeW;
      const all = getEntries(ex.name);
      const matchIdx = all.map((_, idx) => idx).reverse().find(idx => all[idx].date === todayS && (all[idx].dayId === dayId || !all[idx].dayId) && all[idx].reps === r && all[idx].weight === loggedW);
      if (matchIdx !== undefined) all.splice(matchIdx, 1);
      setEntries(ex.name, all);
      onSaved();
    }
    setSets(s => s.filter((_, idx) => idx !== i));
    haptic(20);
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
    fontSize: Math.max(F.input, 16),
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
      gridTemplateColumns: "28px 1fr 1fr 44px 28px",
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
  }, "Reps"), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), sets.map((s, i) => {
    const prev = prevSets[i] || null;
    const prevW = prev ? isBW ? Math.max(0, prev.weight - (bodyweight || 0)) : prev.weight : null;
    const prevR = prev ? prev.reps : null;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        marginBottom: 11,
        position: "relative",
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
        gridTemplateColumns: "28px 1fr 1fr 44px 28px",
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
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setConfirmDeleteIdx(i),
      style: {
        height: 28,
        width: 28,
        borderRadius: 6,
        border: "1px solid rgba(255,71,87,0.2)",
        background: "rgba(255,71,87,0.06)",
        color: W.red,
        fontSize: 11,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: 0
      }
    }, "\u2715")));
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
  }, doneCount, "/", sets.length)), confirmDeleteIdx !== null && /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && setConfirmDeleteIdx(null),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 2200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.surfaceHi,
      border: `1px solid rgba(255,71,87,0.3)`,
      borderRadius: 16,
      padding: "20px 22px 24px",
      maxWidth: 320,
      width: "100%",
      animation: "scaleIn 0.15s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.red,
      textTransform: "uppercase",
      marginBottom: 8,
      fontWeight: 600
    }
  }, "Delete Set"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: W.text,
      marginBottom: 4
    }
  }, "Remove set ", confirmDeleteIdx + 1, "?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 18,
      lineHeight: 1.5
    }
  }, sets[confirmDeleteIdx]?.done ? "This will also remove the logged entry from your history." : "This set has not been logged yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirmDeleteIdx(null),
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: 8,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textMid,
      fontFamily: "'DM Mono',monospace",
      fontSize: 12
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      removeSet(confirmDeleteIdx);
      setConfirmDeleteIdx(null);
    },
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: 8,
      border: "none",
      background: "rgba(255,71,87,0.15)",
      color: W.red,
      fontFamily: "'DM Mono',monospace",
      fontSize: 12,
      fontWeight: 700
    }
  }, "Delete")))), showRestSettings && /*#__PURE__*/React.createElement(RestSettingsModal, {
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
  const [editIdx, setEditIdx] = useState(null);
  const [editW, setEditW] = useState("");
  const [editR, setEditR] = useState("");
  const entries = getEntries(exName);
  const sug = entries.length ? getOverloadSug(entries, exName) : null;
  function del(idx) {
    const all = getEntries(exName);
    all.splice(idx, 1);
    setEntries(exName, all);
    setVersion(v => v + 1);
    onSaved();
  }
  function startEdit(idx, e) {
    setEditIdx(idx);
    setEditW(String(e.weight));
    setEditR(String(e.reps));
  }
  function saveEdit(idx) {
    const all = getEntries(exName);
    const w = parseFloat(editW),
      r = parseInt(editR);
    if (!isNaN(w) && !isNaN(r) && r > 0) {
      all[idx] = {
        ...all[idx],
        weight: w,
        reps: r
      };
      setEntries(exName, all);
      onSaved();
    }
    setEditIdx(null);
    setVersion(v => v + 1);
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
    const isEditing = editIdx === ri;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "11px 0",
        borderBottom: `1px solid ${W.border}`,
        animation: `setRowIn 0.18s ease ${i * 0.03}s both`
      }
    }, isEditing ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        width: 44,
        flexShrink: 0
      }
    }, fmtDate(e.date)), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: editW,
      onChange: ev => setEditW(ev.target.value),
      style: {
        width: 68,
        background: W.surfaceHi,
        border: `1px solid ${W.cyan}`,
        borderRadius: 6,
        color: W.text,
        fontFamily: "'DM Mono',monospace",
        fontSize: 16,
        padding: "6px 8px",
        outline: "none",
        textAlign: "center"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.textDim,
        fontSize: 11
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: editR,
      onChange: ev => setEditR(ev.target.value),
      style: {
        width: 52,
        background: W.surfaceHi,
        border: `1px solid ${W.cyan}`,
        borderRadius: 6,
        color: W.text,
        fontFamily: "'DM Mono',monospace",
        fontSize: 16,
        padding: "6px 8px",
        outline: "none",
        textAlign: "center"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => saveEdit(ri),
      style: {
        background: W.cyan,
        border: "none",
        borderRadius: 6,
        color: W.bg,
        fontSize: 11,
        padding: "6px 12px",
        fontWeight: 700,
        flexShrink: 0
      }
    }, "Save"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditIdx(null),
      style: {
        background: "transparent",
        border: `1px solid ${W.border}`,
        borderRadius: 6,
        color: W.textDim,
        fontSize: 11,
        padding: "6px 10px",
        flexShrink: 0
      }
    }, "\u2715")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
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
      onClick: () => startEdit(ri, e),
      style: {
        background: "rgba(0,201,177,0.08)",
        border: `1px solid rgba(0,201,177,0.15)`,
        borderRadius: 6,
        color: W.cyan,
        fontSize: 11,
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, "\u270E"), /*#__PURE__*/React.createElement("button", {
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
    }, "\u2715")));
  }))));
}

// ── BODYWEIGHT TRACKER CARD ───────────────────────────────────────────────────
// ── BODYWEIGHT GRAPH ──────────────────────────────────────────────────────────
function BodyweightGraph() {
  const canvasRef = useRef(null),
    chartRef = useRef(null);
  const [range, setRange] = useState(90);
  const allEntries = [...bwStore].sort((a, b) => a.date.localeCompare(b.date));
  const cutoff = range > 0 ? (() => {
    const d = new Date();
    d.setDate(d.getDate() - range);
    return d.toISOString().split("T")[0];
  })() : null;
  const entries = cutoff ? allEntries.filter(e => e.date >= cutoff) : allEntries;
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
    const Chart = window.Chart;
    if (!Chart) return;
    if (entries.length < 2) {
      return;
    }
    const labels = entries.map(e => fmtDate(e.date));
    const weights = entries.map(e => e.weight);
    const minW = Math.min(...weights),
      maxW = Math.max(...weights);
    const pad = Math.max(2, Math.round((maxW - minW) * 0.3) || 2);

    // 7-day rolling average
    const rolling = weights.map((_, i) => {
      const slice = weights.slice(Math.max(0, i - 3), i + 4);
      return Math.round(slice.reduce((s, v) => s + v, 0) / slice.length * 10) / 10;
    });
    chartRef.current = new Chart(canvasRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Weight",
          data: weights,
          borderColor: "rgba(0,201,177,0.5)",
          backgroundColor: "rgba(0,201,177,0.06)",
          borderWidth: 1.5,
          pointRadius: 3,
          pointBackgroundColor: W.cyan,
          pointBorderColor: W.bg,
          pointBorderWidth: 1.5,
          tension: 0.3,
          fill: true,
          yAxisID: "y"
        }, {
          label: "7-day avg",
          data: rolling,
          borderColor: W.cyan,
          backgroundColor: "transparent",
          borderWidth: 2.5,
          pointRadius: 0,
          tension: 0.4,
          fill: false,
          yAxisID: "y"
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
              label: item => `  ${item.dataset.label}: ${item.raw} lbs`
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
              maxTicksLimit: 8,
              maxRotation: 20
            },
            grid: {
              color: W.border
            },
            border: {
              color: W.border
            }
          },
          y: {
            min: minW - pad,
            max: maxW + pad,
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
  }, [range, bwStore.length]);
  if (allEntries.length < 2) return null;
  const first = entries[0]?.weight,
    last = entries[entries.length - 1]?.weight;
  const delta = first && last ? +(last - first).toFixed(1) : null;
  const deltaColor = delta === null ? W.textDim : delta < 0 ? W.cyan : delta > 0 ? W.red : W.textDim;
  const btnStyle = {
    background: "transparent",
    border: `1px solid ${W.border}`,
    borderRadius: 5,
    color: W.textDim,
    fontFamily: "'DM Mono',monospace",
    fontSize: 11,
    padding: "4px 10px",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
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
  }, "Body Weight"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, entries.length, " entries"), delta !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: deltaColor,
      fontFamily: "'DM Mono',monospace"
    }
  }, delta > 0 ? "+" : "", delta, " lbs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, [[30, "30D"], [90, "90D"], [0, "ALL"]].map(([r, label]) => /*#__PURE__*/React.createElement("button", {
    key: r,
    style: {
      ...btnStyle,
      border: `1px solid ${range === r ? W.cyan : W.border}`,
      color: range === r ? W.cyan : W.textDim,
      background: range === r ? W.cyanDim : "transparent"
    },
    onClick: () => setRange(r)
  }, label)))), entries.length < 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, "Log 2+ entries to see chart") : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  })));
}
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
      fontSize: 16,
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
  // Key guard: entries with an explicit dayId are only attributed to that day.
  // Entries without a dayId are attributed to the FIRST day block that contains the exercise,
  // preventing duplicates when the same exercise appears in multiple day blocks.
  const exFirstDay = {}; // exName → first dayId that owns it
  DAYS.forEach(day => {
    day.blocks.flatMap(b => b.exercises || []).forEach(ex => {
      if (!(ex.name in exFirstDay)) exFirstDay[ex.name] = day.id;
    });
  });
  const byDayDate = {};
  DAYS.forEach(day => {
    day.blocks.flatMap(b => b.exercises || []).forEach(ex => {
      getEntries(ex.name).forEach(e => {
        // If entry has an explicit dayId, only bucket it under that day
        if (e.dayId && e.dayId !== day.id) return;
        // If entry has no dayId, only bucket under the first day that owns this exercise
        if (!e.dayId && exFirstDay[ex.name] !== day.id) return;
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
      key: sessionKey,
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
      padding: "env(safe-area-inset-top) 16px env(safe-area-inset-bottom)"
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
      zIndex: 3000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `max(env(safe-area-inset-top),16px) 16px max(calc(env(safe-area-inset-bottom) + 80px),96px)`
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
  }), /*#__PURE__*/React.createElement(WorkoutAura, {
    dayId: day.id,
    elapsed: elapsed,
    setsLogged: loggedExNames.length
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
    key: label,
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
    key: `${pr.name}-${pr.weight}`,
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
    key: ex.name,
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
      padding: "env(safe-area-inset-top) 16px calc(env(safe-area-inset-bottom) + 90px)"
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

// ── START WORKOUT MODAL ───────────────────────────────────────────────────────
function StartWorkoutModal({
  day,
  estTime,
  onConfirm,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.94)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "env(safe-area-inset-top) 16px calc(env(safe-area-inset-bottom) + 90px)"
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
      color: day.accent,
      marginBottom: 8,
      textAlign: "center",
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "Start Workout?"), /*#__PURE__*/React.createElement("div", {
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
  }, "Estimated time: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.text,
      fontWeight: 700
    }
  }, estTime)), /*#__PURE__*/React.createElement("div", {
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
      padding: "15px 0",
      cursor: "pointer"
    }
  }, "Not Yet"), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      flex: 1,
      background: day.accent,
      border: "none",
      borderRadius: 10,
      color: W.bg,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14,
      fontWeight: 700,
      padding: "15px 0",
      letterSpacing: "0.02em",
      cursor: "pointer"
    }
  }, "Let's Go \u203A"))));
}

// ── DONUT CHART ───────────────────────────────────────────────────────────────
// Distinct colors for each muscle group segment
const DONUT_COLORS = {
  CNS: "#f5c842",
  Legs: "#00e5a0",
  Push: "#ff5c7a",
  Pull: "#4fc3f7",
  Core: "#b57bee",
  Stability: "#ff9a3c",
  Mobility: "#80cbc4"
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
  const activeSegs = segments.filter(seg => seg.sweep >= 0.015);
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
  // Label ALL active segments — spread angles to avoid overlap
  const labelAngles = activeSegs.map(seg => ({
    seg,
    angle: seg.startA + seg.sweep / 2
  }));
  const MIN_ANGLE_GAP = 0.42;
  for (let pass = 0; pass < 5; pass++) {
    for (let i = 1; i < labelAngles.length; i++) {
      const diff = labelAngles[i].angle - labelAngles[i - 1].angle;
      if (diff < MIN_ANGLE_GAP) {
        const nudge = (MIN_ANGLE_GAP - diff) / 2;
        labelAngles[i - 1].angle -= nudge;
        labelAngles[i].angle += nudge;
      }
    }
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
    const color = DONUT_COLORS[seg.g] || GROUP_COLORS[seg.g];
    const pct = Math.round(seg.frac * 100);
    const labelInfo = labelAngles.find(l => l.seg === seg);
    if (!labelInfo) return /*#__PURE__*/React.createElement("g", {
      key: seg.g
    }, /*#__PURE__*/React.createElement("path", {
      d: slicePath(seg),
      fill: color,
      fillOpacity: 0.9,
      stroke: W.bg,
      strokeWidth: 2
    }));
    const midA = labelInfo.angle;
    const lineR1 = outerR + 4,
      lineR2 = outerR + 18;
    const lx1 = cx + lineR1 * Math.cos(seg.startA + seg.sweep / 2),
      ly1 = cy + lineR1 * Math.sin(seg.startA + seg.sweep / 2);
    const lx2 = cx + lineR2 * Math.cos(midA),
      ly2 = cy + lineR2 * Math.sin(midA);
    const anchor = Math.cos(midA) > 0.1 ? "start" : Math.cos(midA) < -0.1 ? "end" : "middle";
    const tx = cx + (lineR2 + 5) * Math.cos(midA),
      ty = cy + (lineR2 + 5) * Math.sin(midA);
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
      strokeOpacity: 0.7
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
      y: ty + 6,
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
      background: W.bg,
      zIndex: 2000,
      display: "flex",
      flexDirection: "column",
      paddingTop: "env(safe-area-inset-top)",
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.bg,
      width: "100%",
      maxWidth: 680,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 12px",
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
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      overflowX: "auto",
      overflowY: "hidden",
      display: "flex",
      flexShrink: 0,
      padding: "8px 12px",
      gap: 6,
      WebkitOverflowScrolling: "touch"
    }
  }, DAYS.filter(d => d.id !== "fri").flatMap(day => day.blocks.flatMap(b => b.exercises || []).map(ex => {
    const cnt = getEntries(ex.name).length;
    const prs = getEntries(ex.name).filter((e, i) => isPR(getEntries(ex.name), i)).length;
    return /*#__PURE__*/React.createElement("button", {
      key: ex.name,
      onClick: () => {
        setSel(ex.name);
        setRange(0);
      },
      style: {
        flexShrink: 0,
        padding: "7px 12px",
        borderRadius: 20,
        border: `1px solid ${sel === ex.name ? W.cyan : W.border}`,
        background: sel === ex.name ? W.cyanDim : W.surface,
        color: sel === ex.name ? W.cyan : cnt > 0 ? W.textMid : W.textDim,
        fontFamily: "'DM Mono',monospace",
        fontSize: 11,
        whiteSpace: "nowrap",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, ex.name, prs > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        color: W.yellow
      }
    }, "\u2605"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
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
      height: 240
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  })))))));
}

// ── NAV ──────────────────────────────────────────────────────────────────────
const NAV_CONTENT_H = 64;
const NAV_DOT_CY = 26;
const NAV_REST_COLOR = "rgba(255,255,255,0.55)";
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
      width: 24,
      height: 24,
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
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: day.accent,
      opacity: isDone ? 0.55 : 0.85
    }
  }), isActive && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
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
  const [statsTap, triggerStats] = useTap();
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
      height: NAV_CONTENT_H
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
      height: `${NAV_CONTENT_H}px`,
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
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeDasharray: "3 3"
    }), colored && /*#__PURE__*/React.createElement("line", {
      x1: `${x1pct}%`,
      y1: NAV_DOT_CY,
      x2: `${x2pct}%`,
      y2: NAV_DOT_CY,
      stroke: `url(#seg-${i})`,
      strokeWidth: "1.5",
      strokeLinecap: "round",
      filter: isLeading ? "url(#line-glow)" : undefined
    }));
  })), days.map((d, i) => {
    const isActive = page === d.id;
    const isDone = sessionsStore.some(s => s.dayId === d.id && s.date >= monStr && s.date <= sunStr);
    const hasLogged = d.blocks.flatMap(b => b.exercises || []).some(ex => getEntries(ex.name).some(e => e.date >= monStr && e.date <= sunStr && (e.dayId === d.id || !e.dayId)));
    return /*#__PURE__*/React.createElement(NavDot, {
      key: d.id,
      day: d,
      isActive: isActive,
      isDone: isDone,
      hasLogged: hasLogged,
      onTap: () => setPage(d.id)
    });
  })), /*#__PURE__*/React.createElement(NavIconBtn, {
    tapClass: statsTap,
    onClick: () => {
      triggerStats();
      setPage("stats");
    },
    isActive: page === "stats",
    label: "Stats"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "9",
    width: "3",
    height: "6",
    rx: "1",
    fill: page === "stats" ? W.cyan : NAV_REST_COLOR
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "3",
    height: "10",
    rx: "1",
    fill: page === "stats" ? W.cyan : NAV_REST_COLOR
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "1",
    width: "3",
    height: "14",
    rx: "1",
    fill: page === "stats" ? W.cyan : NAV_REST_COLOR
  }))), /*#__PURE__*/React.createElement(NavIconBtn, {
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
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "env(safe-area-inset-bottom)",
      background: "rgba(9,7,6,0.97)"
    }
  }));
}
// ── FEATURE COMPONENTS ───────────────────────────────────────────────────────

// CNS Readiness Modal
function ReadinessModal({
  onComplete,
  onSkip
}) {
  const [sleep, setSleep] = useState(3);
  const [stress, setStress] = useState(3);
  const [soreness, setSoreness] = useState(3);
  const score = Math.round((sleep + (6 - stress) + (6 - soreness)) / 15 * 100);
  const scoreColor = score >= 75 ? W.cyan : score >= 50 ? W.yellow : W.red;
  const labels = {
    sleep: ["Terrible", "Poor", "Fair", "Good", "Great"],
    stress: ["None", "Low", "Moderate", "High", "Extreme"],
    soreness: ["Fresh", "Mild", "Moderate", "Sore", "Wrecked"]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 2000,
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 16,
      padding: 24,
      maxWidth: 360,
      width: "100%",
      animation: "scaleIn 0.2s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Pre-Workout Check"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: W.text,
      marginBottom: 20
    }
  }, "CNS Readiness"), [["Sleep Quality", "sleep", sleep, setSleep], ["Stress Level", "stress", stress, setStress], ["Muscle Soreness", "soreness", soreness, setSoreness]].map(([label, key, val, setter]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: W.text
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan
    }
  }, labels[key][val - 1])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setter(n),
    style: {
      flex: 1,
      height: 32,
      borderRadius: 6,
      border: `1px solid ${val === n ? W.cyan : W.border}`,
      background: val === n ? W.cyanDim : "transparent",
      color: val === n ? W.cyan : W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      transition: "all 0.15s"
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      margin: "16px 0",
      padding: "12px",
      background: `${scoreColor}11`,
      border: `1px solid ${scoreColor}33`,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: scoreColor,
      fontFamily: "'DM Mono',monospace",
      lineHeight: 1
    }
  }, score), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: "0.2em",
      color: scoreColor,
      fontFamily: "'DM Mono',monospace",
      marginTop: 4,
      textTransform: "uppercase"
    }
  }, "Readiness Score")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    style: {
      flex: 1,
      padding: "11px",
      borderRadius: 8,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 12,
      cursor: "pointer"
    }
  }, "Skip"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onComplete(sleep, stress, soreness, score),
    style: {
      flex: 2,
      padding: "11px",
      borderRadius: 8,
      border: "none",
      background: W.cyan,
      color: "#000",
      fontFamily: "'DM Mono',monospace",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Log & Train"))));
}

// Seasonal accent — applied globally via CSS variable
function useSeasonalTheme() {
  const theme = getSeasonalTheme();
  useEffect(() => {
    document.documentElement.style.setProperty("--seasonal-accent", theme.accent);
    document.documentElement.style.setProperty("--seasonal-speed", String(theme.speed));
  }, []);
  return theme;
}

// Workout Aura — generative SVG based on session data
function WorkoutAura({
  dayId,
  elapsed,
  setsLogged
}) {
  const day = DAYS.find(d => d.id === dayId);
  const accent = day?.accent || W.cyan;
  const intensity = Math.min(1, setsLogged / 20);
  const readiness = getTodayReadiness()?.score || 50;
  const isHeavy = intensity > 0.6 && readiness > 60;
  const seed = elapsed + setsLogged * 7;
  const shapes = [];
  const rng = n => (seed * n * 9301 + 49297) % 233280 / 233280;
  for (let i = 0; i < (isHeavy ? 18 : 12); i++) {
    const x = 40 + rng(i + 1) * 220,
      y = 40 + rng(i + 2) * 120;
    const r = isHeavy ? 8 + rng(i + 3) * 28 : 4 + rng(i + 3) * 16;
    const op = 0.04 + rng(i + 4) * 0.12;
    shapes.push({
      x,
      y,
      r,
      op,
      i
    });
  }
  // Connecting lines for heavy sessions
  const lines = isHeavy ? shapes.slice(0, 8).map((s, i) => ({
    x1: s.x,
    y1: s.y,
    x2: shapes[(i + 3) % 8].x,
    y2: shapes[(i + 3) % 8].y,
    op: 0.04 + rng(i + 10) * 0.08
  })) : [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 12,
      overflow: "hidden",
      background: "#050505",
      border: `1px solid ${W.border}`,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 200",
    style: {
      width: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "aura-bg",
    cx: "50%",
    cy: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: accent,
    stopOpacity: "0.06"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#050505",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "aura-blur"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "8"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "aura-glow"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "3",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "blur"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), /*#__PURE__*/React.createElement("rect", {
    width: "300",
    height: "200",
    fill: "#050505"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "150",
    cy: "100",
    rx: 80 + intensity * 60,
    ry: 50 + intensity * 40,
    fill: "url(#aura-bg)",
    filter: "url(#aura-blur)"
  }), lines.map((l, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: l.x1,
    y1: l.y1,
    x2: l.x2,
    y2: l.y2,
    stroke: accent,
    strokeWidth: "0.5",
    strokeOpacity: l.op
  })), shapes.map(s => /*#__PURE__*/React.createElement("circle", {
    key: s.i,
    cx: s.x,
    cy: s.y,
    r: s.r,
    fill: accent,
    fillOpacity: s.op,
    filter: s.r > 15 ? "url(#aura-glow)" : undefined
  })), isHeavy && /*#__PURE__*/React.createElement("text", {
    x: "150",
    y: "172",
    textAnchor: "middle",
    fill: accent,
    fillOpacity: "0.3",
    fontSize: "7",
    fontFamily: "'DM Mono',monospace",
    letterSpacing: "0.3em"
  }, "HEAVY SESSION"), /*#__PURE__*/React.createElement("text", {
    x: "150",
    y: isHeavy ? 185 : 175,
    textAnchor: "middle",
    fill: accent,
    fillOpacity: "0.18",
    fontSize: "6",
    fontFamily: "'DM Mono',monospace",
    letterSpacing: "0.25em"
  }, day?.title?.toUpperCase() || "")));
}

// Nervous System Map — evidence-based neural load model
// Neural Demand Factor (NDF) per exercise type based on:
// - Motor unit recruitment threshold (Henneman's size principle)
// - Rate of force development demands
// - Multi-joint coordination complexity
// - Eccentric load component (produces greater CNS fatigue per Enoka 1996)
// References: Gandevia (2001) Spinal/supraspinal factors in fatigue;
// Taylor & Gandevia (2008) Central vs peripheral fatigue comparison;
// Thomas et al. (2018) Neuromuscular fatigue after heavy resistance/jump/sprint
const NDF_MAP = {};
// Explosive/ballistic: highest NDF — max motor unit recruitment + rate coding
["Force Plate CMJ", "Hang Clean", "Snap Down \u2192 Split Jump", "Snap Down \u2192 Split Squat Jump", "MB Slam \u2192 Lateral Toss", "MB Slam \u2192 MB Lateral Toss", "Pogos", "Vertical Jump", "CMJ", "Box Drop \u2192 Stick Landing", "Box Drop Stick", "Snap Down", "Weighted Pull-Ups"].forEach(n => {
  NDF_MAP[n] = 0.90;
});
// Heavy compounds: high NDF — large muscle mass, high absolute load, multi-joint
["BB Back Squat", "Trap Bar Deadlift", "BB Bench Press", "BB Row", "RDL", "Nordic Curl", "Hip Thrust", "BB Split Squat"].forEach(n => {
  NDF_MAP[n] = 0.75;
});
// Moderate compounds: substantial recruitment but lower absolute loads
["DB Incline Press", "DB Incline Bench Press", "DB Incline Bench", "Bulgarian Split Squat", "SA DB Row", "Chest Supported Row", "Chest Supported DB Row", "Pull-Ups", "Lat Pulldown", "SA DB Shoulder Press", "Half-Kneeling Landmine Press", "Rear Foot Elevated Split Squat", "Single Leg RDL"].forEach(n => {
  NDF_MAP[n] = 0.55;
});
// Isolation: lower NDF — single joint, smaller motor unit pools
["DB Lateral Raise", "DB Lateral Raises", "Straight Bar Pushdown", "OH DB Extension", "Overhead DB Tricep Extension", "Incline Curl", "Incline Dumbbell Curl", "Hammer Curl", "Cable Y Raise", "Cable Y Raises"].forEach(n => {
  NDF_MAP[n] = 0.35;
});
// Core: moderate — primarily isometric/anti-movement patterns
["Copenhagen Plank", "Copenhagen Short Lever", "V-Ups", "Hanging Leg Raises", "Suitcase Carry", "Banded Deadbug", "Deadbugs", "Pallof Press"].forEach(n => {
  NDF_MAP[n] = 0.30;
});
// Stability/mobility: minimal CNS cost
["Cuban Press", "Cable External Rotation", "Cable External Rotations", "Band Pull-Aparts", "Serratus Wall Slides", "Wall Angels", "Scapular Wall Slides", "Rack Hip CARs", "Shoulder CARs", "World's Greatest Stretch", "Diaphragmatic Breathing", "Tibialis Raises", "Face Pull to External Rotation", "Cable Rear Fly", "Rear Delt Cable Fly", "Band Pull-Aparts (overhand)"].forEach(n => {
  NDF_MAP[n] = 0.12;
});

// Zone mapping based on primary motor cortex regions and spinal segments
// Upper motor cortex: controls upper body force production (C5-T1 spinal segments)
// Lower motor cortex: controls lower body (L1-S2 spinal segments)
// Spinal/core: trunk stabilizers that cross the thoracolumbar junction
// Peripheral: fine motor control, joint stabilizers, low-threshold motor units
const ZONE_MAP = {};
["BB Bench Press", "DB Incline Press", "DB Incline Bench Press", "DB Incline Bench", "SA DB Shoulder Press", "Pull-Ups", "Weighted Pull-Ups", "SA DB Row", "Chest Supported Row", "Chest Supported DB Row", "BB Row", "Lat Pulldown", "Hang Clean", "MB Slam \u2192 Lateral Toss", "MB Slam \u2192 MB Lateral Toss", "Half-Kneeling Landmine Press", "Straight Arm Pulldown", "DB Lateral Raise", "DB Lateral Raises", "Straight Bar Pushdown", "OH DB Extension", "Overhead DB Tricep Extension", "Incline Curl", "Incline Dumbbell Curl", "Hammer Curl", "Cable Y Raise", "Cable Y Raises", "Face Pull to External Rotation", "Empty Bar Bench Press", "50\u201360% Bench Press", "Explosive Empty Bar Bench"].forEach(n => {
  ZONE_MAP[n] = "upper";
});
["BB Back Squat", "Trap Bar Deadlift", "RDL", "Hip Thrust", "Bulgarian Split Squat", "BB Split Squat", "Nordic Curl", "Snap Down \u2192 Split Jump", "Snap Down \u2192 Split Squat Jump", "Pogos", "Vertical Jump", "CMJ", "Force Plate CMJ", "Box Drop \u2192 Stick Landing", "Box Drop Stick", "Snap Down", "Band Lateral Walk", "Tempo Goblet Squat", "Rear Foot Elevated Split Squat", "Single Leg RDL", "SL Glute Bridge", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "Nordic Hamstring Curl ISO", "Tibialis Raises"].forEach(n => {
  ZONE_MAP[n] = "lower";
});
["Copenhagen Plank", "Copenhagen Short Lever", "V-Ups", "Hanging Leg Raises", "Suitcase Carry", "Banded Deadbug", "Deadbugs", "Pallof Press"].forEach(n => {
  ZONE_MAP[n] = "spine";
});
function NervousSystemMap({
  version
}) {
  const allEx = getAllWorkingExercises();
  const now = new Date();
  const sevenAgo = new Date();
  sevenAgo.setDate(sevenAgo.getDate() - 7);
  const sa = sevenAgo.toISOString().split("T")[0];
  const zoneLoad = {
    upper: 0,
    lower: 0,
    spine: 0,
    peripheral: 0
  };
  let totalLoad = 0;
  allEx.forEach(ex => {
    const ndf = NDF_MAP[ex.name] || 0.12;
    const zone = ZONE_MAP[ex.name] || "peripheral";
    const ents = getEntries(ex.name).filter(e => e.date >= sa);
    ents.forEach(e => {
      // Intensity approximation: use weight relative to exercise's best as proxy for %1RM
      const allEnts = getEntries(ex.name);
      const bestW = allEnts.length ? Math.max(...allEnts.map(x => x.weight)) : e.weight || 1;
      const intensity = bestW > 0 ? Math.min(1, e.weight / bestW) : 0.5;
      // Time decay: more recent sessions contribute more (exponential decay, τ=3 days)
      const daysAgo = Math.max(0, (now - new Date(e.date)) / (1000 * 60 * 60 * 24));
      const decay = Math.exp(-daysAgo / 3);
      // Neural load = sets × reps × intensity × NDF × decay
      const load = e.sets * e.reps * intensity * ndf * decay;
      zoneLoad[zone] += load;
      totalLoad += load;
    });
  });
  if (totalLoad === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "Train this week to see your nervous system map");
  const norm = v => Math.min(1, v / Math.max(...Object.values(zoneLoad), 1));
  const zones = [{
    label: "Upper CNS",
    key: "upper",
    cy: 60,
    desc: "Brain + upper motor cortex"
  }, {
    label: "Spinal",
    key: "spine",
    cy: 105,
    desc: "Core neural trunk"
  }, {
    label: "Lower CNS",
    key: "lower",
    cy: 150,
    desc: "Leg drive + hip power"
  }, {
    label: "Peripheral",
    key: "peripheral",
    cy: 190,
    desc: "Stabilizers + mobility"
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 230",
    style: {
      width: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "ns-glow"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "4",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "blur"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  }))), /*#__PURE__*/React.createElement("linearGradient", {
    id: "spine-grad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: W.cyan,
    stopOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#4fc3f7",
    stopOpacity: "0.2"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "140",
    y1: "40",
    x2: "140",
    y2: "210",
    stroke: "url(#spine-grad)",
    strokeWidth: "2",
    strokeDasharray: "4 3"
  }), zones.map(z => {
    const n = norm(zoneLoad[z.key]);
    const r = 8 + n * 28;
    const color = n > 0.7 ? W.red : n > 0.4 ? W.yellow : W.cyan;
    const opacity = 0.15 + n * 0.6;
    return /*#__PURE__*/React.createElement("g", {
      key: z.key
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "140",
      cy: z.cy,
      r: r,
      fill: color,
      fillOpacity: opacity * 0.5,
      filter: "url(#ns-glow)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "140",
      cy: z.cy,
      r: r * 0.5,
      fill: color,
      fillOpacity: opacity
    }), /*#__PURE__*/React.createElement("line", {
      x1: 160 + r,
      y1: z.cy,
      x2: 200,
      y2: z.cy,
      stroke: W.border,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "204",
      y: z.cy + 4,
      fill: color,
      fillOpacity: 0.8,
      fontSize: "9",
      fontFamily: "'DM Mono',monospace"
    }, z.label), /*#__PURE__*/React.createElement("text", {
      x: "204",
      y: z.cy + 14,
      fill: W.textDim,
      fillOpacity: "0.5",
      fontSize: "7",
      fontFamily: "'DM Mono',monospace"
    }, Math.round(n * 100), "%"));
  }));
}

// Muscle Shadow — Hevy-style anatomical heatmap with real muscle groups
// Maps exercises to specific muscles, then highlights trained muscles on body outline
const EX_MUSCLES = {
  // Compound leg movements
  "BB Back Squat": ["quads", "glutes", "hamstrings", "core"],
  "Trap Bar Deadlift": ["hamstrings", "glutes", "lowerBack", "quads", "traps"],
  "Bulgarian Split Squat": ["quads", "glutes"],
  "BB Split Squat": ["quads", "glutes"],
  "RDL": ["hamstrings", "glutes", "lowerBack"],
  "Hip Thrust": ["glutes", "hamstrings"],
  "Nordic Curl": ["hamstrings"],
  "Nordic Hamstring Curl ISO": ["hamstrings"],
  "Rear Foot Elevated Split Squat": ["quads", "glutes"],
  "Single Leg RDL": ["hamstrings", "glutes"],
  "SL Glute Bridge": ["glutes"],
  "Glute Bridge Hold": ["glutes"],
  "Glute Bridge + ISO Hold": ["glutes"],
  "Band Lateral Walk": ["glutes"],
  "Tempo Goblet Squat": ["quads", "glutes", "core"],
  // Push
  "BB Bench Press": ["chest", "shoulders", "triceps"],
  "DB Incline Press": ["chest", "shoulders", "triceps"],
  "DB Incline Bench Press": ["chest", "shoulders", "triceps"],
  "DB Incline Bench": ["chest", "shoulders", "triceps"],
  "DB Lateral Raise": ["shoulders"],
  "DB Lateral Raises": ["shoulders"],
  "Cable Y Raise": ["shoulders", "traps"],
  "Cable Y Raises": ["shoulders", "traps"],
  "Straight Bar Pushdown": ["triceps"],
  "OH DB Extension": ["triceps"],
  "Overhead DB Tricep Extension": ["triceps"],
  "SA DB Shoulder Press": ["shoulders", "triceps"],
  "Half-Kneeling Landmine Press": ["shoulders", "chest", "core"],
  "Empty Bar Bench Press": ["chest", "shoulders"],
  "50\u201360% Bench Press": ["chest", "shoulders", "triceps"],
  "Explosive Empty Bar Bench": ["chest", "shoulders"],
  // Pull
  "Weighted Pull-Ups": ["lats", "biceps", "upperBack"],
  "Pull-Ups": ["lats", "biceps", "upperBack"],
  "SA DB Row": ["upperBack", "lats", "biceps"],
  "Chest Supported Row": ["upperBack", "lats"],
  "Chest Supported DB Row": ["upperBack", "lats"],
  "Lat Pulldown": ["lats", "biceps"],
  "BB Row": ["upperBack", "lats", "biceps"],
  "Incline Curl": ["biceps"],
  "Incline Dumbbell Curl": ["biceps"],
  "Hammer Curl": ["biceps", "forearms"],
  "Straight Arm Pulldown": ["lats"],
  "Scap Pull-Ups": ["upperBack", "traps"],
  "Scapular Pull-Ups": ["upperBack", "traps"],
  "Face Pull to External Rotation": ["upperBack", "shoulders"],
  // Core
  "Copenhagen Plank": ["core"],
  "Copenhagen Short Lever": ["core"],
  "V-Ups": ["core"],
  "Hanging Leg Raises": ["core"],
  "Suitcase Carry": ["core", "forearms"],
  "Banded Deadbug": ["core"],
  "Deadbugs": ["core"],
  "Pallof Press": ["core"],
  // CNS / Power
  "Hang Clean": ["traps", "shoulders", "glutes", "hamstrings"],
  "Snap Down \u2192 Split Jump": ["quads", "glutes"],
  "Snap Down \u2192 Split Squat Jump": ["quads", "glutes"],
  "Pogos": ["calves"],
  "Vertical Jump": ["quads", "glutes", "calves"],
  "CMJ": ["quads", "glutes", "calves"],
  "Force Plate CMJ": ["quads", "glutes", "calves"],
  // Stability / Shoulders
  "Cuban Press": ["shoulders"],
  "Cable External Rotation": ["shoulders"],
  "Cable External Rotations": ["shoulders"],
  "Cable Rear Fly": ["shoulders", "upperBack"],
  "Rear Delt Cable Fly": ["shoulders", "upperBack"],
  "Band Pull-Aparts": ["upperBack", "shoulders"],
  "Band Pull-Aparts (overhand)": ["upperBack", "shoulders"],
  "Serratus Wall Slides": ["shoulders"],
  "Tibialis Raises": ["calves"]
};
const MUSCLE_COLORS = {
  chest: "#ff5c7a",
  shoulders: "#ff9a3c",
  triceps: "#ff7043",
  biceps: "#4fc3f7",
  forearms: "#80cbc4",
  upperBack: "#4fc3f7",
  lats: "#6ba3f7",
  lowerBack: "#4fc3f7",
  traps: "#b57bee",
  core: "#ab97e8",
  quads: "#00e5a0",
  hamstrings: "#00c9b1",
  glutes: "#5ecb7c",
  calves: "#80cbc4"
};
function MuscleShadow({
  version
}) {
  const sevenAgo = new Date();
  sevenAgo.setDate(sevenAgo.getDate() - 7);
  const sa = sevenAgo.toISOString().split("T")[0];
  const allEx = getAllWorkingExercises();
  const muscleVol = {};
  Object.keys(MUSCLE_COLORS).forEach(m => {
    muscleVol[m] = 0;
  });
  allEx.forEach(ex => {
    const muscles = EX_MUSCLES[ex.name];
    if (!muscles) return;
    const ents = getEntries(ex.name).filter(e => e.date >= sa);
    const vol = ents.reduce((s, e) => s + (e.weight || 10) * e.sets * e.reps, 0);
    muscles.forEach(m => {
      if (muscleVol[m] !== undefined) muscleVol[m] += vol;
    });
  });
  const maxVol = Math.max(...Object.values(muscleVol), 1);
  const heat = m => Math.min(1, muscleVol[m] / maxVol);
  const fc = m => {
    const h = heat(m);
    return h < 0.05 ? "rgba(255,255,255,0.04)" : MUSCLE_COLORS[m];
  };
  const fo = m => {
    const h = heat(m);
    return h < 0.05 ? 0.04 : 0.15 + h * 0.75;
  };
  const trained = Object.entries(muscleVol).filter(([m, v]) => v > 0).sort((a, b) => b[1] - a[1]);
  const OL = "#1a1a1a";
  const OW = 0.6;
  // Shared muscle path renderer
  const M = ({
    d,
    m,
    scaleOp
  }) => React.createElement("path", {
    d,
    fill: fc(m),
    fillOpacity: fo(m) * (scaleOp || 1),
    stroke: heat(m) > 0.05 ? fc(m) : "none",
    strokeWidth: 0.3,
    strokeOpacity: 0.3
  });
  return React.createElement("div", null, React.createElement("svg", {
    viewBox: "0 0 340 380",
    style: {
      width: "100%",
      display: "block",
      margin: "0 auto"
    }
  }, React.createElement("defs", null, React.createElement("filter", {
    id: "mg"
  }, React.createElement("feGaussianBlur", {
    stdDeviation: "3",
    result: "b"
  }), React.createElement("feMerge", null, React.createElement("feMergeNode", {
    in: "b"
  }), React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), React.createElement("text", {
    x: 85,
    y: 12,
    fill: W.textDim,
    fillOpacity: 0.4,
    fontSize: 7,
    fontFamily: "'DM Mono',monospace",
    textAnchor: "middle",
    letterSpacing: "0.15em"
  }, "FRONT"), React.createElement("text", {
    x: 255,
    y: 12,
    fill: W.textDim,
    fillOpacity: 0.4,
    fontSize: 7,
    fontFamily: "'DM Mono',monospace",
    textAnchor: "middle",
    letterSpacing: "0.15em"
  }, "BACK"),
  // ═══ FRONT VIEW (centered at x=85) ═══
  // Body outline - front
  React.createElement("path", {
    d: "M85 22 C78 22 74 26 72 32 L69 48 C62 52 54 58 49 68 L45 95 C43 103 44 112 47 118 L44 128 L38 142 L36 156 L40 156 L44 144 L49 134 L51 158 L48 175 L48 195 L53 195 L56 175 L57 166 L60 178 L54 240 L50 300 L54 332 L62 332 L66 300 L72 248 L78 210 L85 214 L92 210 L98 248 L104 300 L108 332 L116 332 L120 300 L116 240 L110 178 L113 166 L114 175 L117 195 L122 195 L122 175 L119 158 L121 134 L126 144 L130 156 L134 156 L132 142 L126 128 L123 118 C126 112 127 103 125 95 L121 68 C116 58 108 52 101 48 L98 32 C96 26 92 22 85 22Z",
    fill: "#080808",
    stroke: OL,
    strokeWidth: OW
  }),
  // Head
  React.createElement("ellipse", {
    cx: 85,
    cy: 18,
    rx: 10,
    ry: 11,
    fill: "#080808",
    stroke: OL,
    strokeWidth: OW
  }),
  // Front muscles
  // Traps
  M({
    d: "M72 42 L69 48 C66 50 63 53 60 56 L72 52 L85 50 L98 52 L110 56 C107 53 104 50 101 48 L98 42 L92 40 L85 39 L78 40 Z",
    m: "traps"
  }),
  // Shoulders/Delts
  M({
    d: "M60 56 C54 60 50 66 48 72 L46 80 L49 86 L54 78 L60 68 L66 60 Z",
    m: "shoulders"
  }), M({
    d: "M110 56 C116 60 120 66 122 72 L124 80 L121 86 L116 78 L110 68 L104 60 Z",
    m: "shoulders"
  }),
  // Chest (pecs) - two halves
  M({
    d: "M66 66 L60 72 L56 82 L58 92 L66 96 L76 98 L84 96 L84 72 L78 66 Z",
    m: "chest"
  }), M({
    d: "M104 66 L110 72 L114 82 L112 92 L104 96 L94 98 L86 96 L86 72 L92 66 Z",
    m: "chest"
  }),
  // Biceps
  M({
    d: "M48 82 L45 95 L44 110 L44 122 L47 118 L50 108 L52 96 L50 86 Z",
    m: "biceps"
  }), M({
    d: "M122 82 L125 95 L126 110 L126 122 L123 118 L120 108 L118 96 L120 86 Z",
    m: "biceps"
  }),
  // Forearms
  M({
    d: "M44 124 L40 140 L37 154 L40 155 L44 144 L49 132 Z",
    m: "forearms"
  }), M({
    d: "M126 124 L130 140 L133 154 L130 155 L126 144 L121 132 Z",
    m: "forearms"
  }), M({
    d: "M49 134 L51 158 L48 175 L48 192 L52 192 L55 175 L56 162 L53 142 Z",
    m: "forearms"
  }), M({
    d: "M121 134 L119 158 L122 175 L122 192 L118 192 L115 175 L114 162 L117 142 Z",
    m: "forearms"
  }),
  // Abs/Core - segmented
  M({
    d: "M76 100 L84 98 L84 116 L76 116 Z",
    m: "core"
  }), M({
    d: "M86 98 L94 100 L94 116 L86 116 Z",
    m: "core"
  }), M({
    d: "M76 118 L84 118 L84 136 L76 136 Z",
    m: "core"
  }), M({
    d: "M86 118 L94 118 L94 136 L86 136 Z",
    m: "core"
  }), M({
    d: "M76 138 L84 138 L84 156 L78 160 Z",
    m: "core"
  }), M({
    d: "M86 138 L94 138 L94 156 L92 160 Z",
    m: "core"
  }),
  // Obliques
  M({
    d: "M62 98 L66 96 L74 100 L74 158 L68 164 L60 170 L56 164 L58 132 L60 110 Z",
    m: "core",
    scaleOp: 0.5
  }), M({
    d: "M108 98 L104 96 L96 100 L96 158 L102 164 L110 170 L114 164 L112 132 L110 110 Z",
    m: "core",
    scaleOp: 0.5
  }),
  // Quads - front thigh with teardrop shape
  M({
    d: "M60 178 L56 196 L52 224 L50 252 L52 272 L56 280 L62 272 L66 256 L70 236 L74 216 L78 204 L78 192 L72 182 Z",
    m: "quads"
  }), M({
    d: "M110 178 L114 196 L118 224 L120 252 L118 272 L114 280 L108 272 L104 256 L100 236 L96 216 L92 204 L92 192 L98 182 Z",
    m: "quads"
  }),
  // Inner thigh / adductors (subtle)
  M({
    d: "M78 200 L85 214 L85 250 L80 260 L74 240 L76 216 Z",
    m: "quads",
    scaleOp: 0.4
  }), M({
    d: "M92 200 L85 214 L85 250 L90 260 L96 240 L94 216 Z",
    m: "quads",
    scaleOp: 0.4
  }),
  // Tibialis / Shins
  M({
    d: "M56 282 L54 300 L54 328 L60 328 L62 306 L64 290 L60 280 Z",
    m: "calves",
    scaleOp: 0.5
  }), M({
    d: "M114 282 L116 300 L116 328 L110 328 L108 306 L106 290 L110 280 Z",
    m: "calves",
    scaleOp: 0.5
  }),
  // ═══ BACK VIEW (centered at x=255) ═══
  // Body outline - back
  React.createElement("path", {
    d: "M255 22 C248 22 244 26 242 32 L239 48 C232 52 224 58 219 68 L215 95 C213 103 214 112 217 118 L214 128 L208 142 L206 156 L210 156 L214 144 L219 134 L221 158 L218 175 L218 195 L223 195 L226 175 L227 166 L230 178 L224 240 L220 300 L224 332 L232 332 L236 300 L242 248 L248 210 L255 214 L262 210 L268 248 L274 300 L278 332 L286 332 L290 300 L286 240 L280 178 L283 166 L284 175 L287 195 L292 195 L292 175 L289 158 L291 134 L296 144 L300 156 L304 156 L302 142 L296 128 L293 118 C296 112 297 103 295 95 L291 68 C286 58 278 52 271 48 L268 32 C266 26 262 22 255 22Z",
    fill: "#080808",
    stroke: OL,
    strokeWidth: OW
  }),
  // Head
  React.createElement("ellipse", {
    cx: 255,
    cy: 18,
    rx: 10,
    ry: 11,
    fill: "#080808",
    stroke: OL,
    strokeWidth: OW
  }),
  // Back muscles
  // Traps (upper back diamond)
  M({
    d: "M242 42 L239 48 L235 54 L245 58 L255 60 L265 58 L275 54 L271 48 L268 42 L262 40 L255 39 L248 40 Z",
    m: "traps"
  }),
  // Rear delts
  M({
    d: "M230 56 C224 60 220 66 218 72 L216 80 L219 86 L224 78 L230 68 L236 60 Z",
    m: "shoulders"
  }), M({
    d: "M280 56 C286 60 290 66 292 72 L294 80 L291 86 L286 78 L280 68 L274 60 Z",
    m: "shoulders"
  }),
  // Upper back / Rhomboids
  M({
    d: "M240 60 L236 68 L238 82 L244 90 L255 92 L266 90 L272 82 L274 68 L270 60 L262 58 L255 57 L248 58 Z",
    m: "upperBack"
  }),
  // Lats (V-taper)
  M({
    d: "M236 84 L228 92 L224 104 L226 118 L232 132 L240 140 L248 144 L254 142 L254 100 L244 90 Z",
    m: "lats"
  }), M({
    d: "M274 84 L282 92 L286 104 L284 118 L278 132 L270 140 L262 144 L256 142 L256 100 L266 90 Z",
    m: "lats"
  }),
  // Triceps (back of arm)
  M({
    d: "M218 78 L215 92 L214 108 L214 120 L217 116 L220 106 L222 94 L220 84 Z",
    m: "triceps"
  }), M({
    d: "M292 78 L295 92 L296 108 L296 120 L293 116 L290 106 L288 94 L290 84 Z",
    m: "triceps"
  }),
  // Forearms (back)
  M({
    d: "M214 122 L210 138 L207 152 L210 153 L214 142 L219 132 Z",
    m: "forearms"
  }), M({
    d: "M296 122 L300 138 L303 152 L300 153 L296 142 L291 132 Z",
    m: "forearms"
  }),
  // Lower back / Erectors
  M({
    d: "M244 132 L240 142 L238 160 L244 168 L255 170 L266 168 L272 160 L270 142 L266 132 L256 128 L254 128 Z",
    m: "lowerBack"
  }),
  // Glutes
  M({
    d: "M238 168 L232 178 L228 192 L232 202 L242 208 L254 210 L254 178 L248 170 Z",
    m: "glutes"
  }), M({
    d: "M272 168 L278 178 L282 192 L278 202 L268 208 L256 210 L256 178 L262 170 Z",
    m: "glutes"
  }),
  // Hamstrings
  M({
    d: "M230 206 L226 220 L222 248 L222 272 L228 280 L234 270 L238 252 L240 232 L244 216 L248 208 L242 204 Z",
    m: "hamstrings"
  }), M({
    d: "M280 206 L284 220 L288 248 L288 272 L282 280 L276 270 L272 252 L270 232 L266 216 L262 208 L268 204 Z",
    m: "hamstrings"
  }),
  // Inner hamstring
  M({
    d: "M248 210 L255 214 L255 256 L250 264 L244 248 L246 224 Z",
    m: "hamstrings",
    scaleOp: 0.5
  }), M({
    d: "M262 210 L255 214 L255 256 L260 264 L266 248 L264 224 Z",
    m: "hamstrings",
    scaleOp: 0.5
  }),
  // Calves (back)
  M({
    d: "M224 280 L222 296 L224 318 L228 330 L234 330 L236 316 L234 296 L230 282 Z",
    m: "calves"
  }), M({
    d: "M286 280 L288 296 L286 318 L282 330 L276 330 L274 316 L276 296 L280 282 Z",
    m: "calves"
  })), trained.length > 0 && React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      marginTop: 8,
      justifyContent: "center"
    }
  }, trained.slice(0, 8).map(function (entry) {
    var m = entry[0];
    return React.createElement("div", {
      key: m,
      style: {
        fontSize: 7,
        fontFamily: "'DM Mono',monospace",
        color: MUSCLE_COLORS[m],
        background: MUSCLE_COLORS[m] + "15",
        border: "1px solid " + MUSCLE_COLORS[m] + "33",
        borderRadius: 4,
        padding: "2px 6px",
        letterSpacing: "0.05em"
      }
    }, m + " " + Math.round(heat(m) * 100) + "%");
  })));
}

// Gravity — solar system of strength
function GravityMap({
  version
}) {
  const allEx = getAllWorkingExercises().filter(ex => !BODYWEIGHT_EX.has(ex.name) && !LIGHT_INTENT.has(ex.name));
  const lifts = [];
  allEx.forEach(ex => {
    const ents = getEntries(ex.name);
    if (!ents.length) return;
    const best = Math.max(...ents.map(e => calc1RM(e.weight, e.reps)));
    const recent = ents.filter(e => e.date >= new Date(Date.now() - 30 * 864e5).toISOString().split("T")[0]);
    const recentBest = recent.length ? Math.max(...recent.map(e => calc1RM(e.weight, e.reps))) : 0;
    lifts.push({
      name: ex.name,
      best,
      recentBest,
      accent: ex.dayAccent,
      sessions: new Set(ents.map(e => e.date)).size
    });
  });
  if (!lifts.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "Log sessions to see your gravity map");
  lifts.sort((a, b) => b.best - a.best);
  const center = lifts[0];
  const maxBest = center.best;
  const planets = lifts.slice(1, 9);
  const cx = 140,
    cy = 120;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 240",
    style: {
      width: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "grav-glow"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "6",
    result: "b"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "b"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  }))), /*#__PURE__*/React.createElement("radialGradient", {
    id: "grav-center",
    cx: "50%",
    cy: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: center.accent,
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: center.accent,
    stopOpacity: "0.05"
  }))), planets.map((_, i) => {
    const orbitR = 40 + i * 18;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: orbitR,
      fill: "none",
      stroke: W.border,
      strokeWidth: "0.5",
      strokeDasharray: "3 4"
    });
  }), planets.map((p, i) => {
    const orbitR = 40 + i * 18;
    const angle = i / planets.length * Math.PI * 2 - Math.PI / 2;
    const px = cx + Math.cos(angle) * orbitR;
    const py = cy + Math.sin(angle) * orbitR;
    const r = 3 + p.best / maxBest * 8;
    const isRecent = p.recentBest >= p.best * 0.95;
    return /*#__PURE__*/React.createElement("g", {
      key: p.name
    }, /*#__PURE__*/React.createElement("circle", {
      cx: px,
      cy: py,
      r: r,
      fill: p.accent,
      fillOpacity: isRecent ? 0.85 : 0.35,
      filter: isRecent ? "url(#grav-glow)" : undefined
    }), i < 4 && /*#__PURE__*/React.createElement("text", {
      x: px + r + 3,
      y: py + 3,
      fill: p.accent,
      fillOpacity: "0.6",
      fontSize: "6",
      fontFamily: "'DM Mono',monospace"
    }, p.name.split(" ")[0]));
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 22,
    fill: "url(#grav-center)",
    filter: "url(#grav-glow)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 12,
    fill: center.accent,
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 28,
    textAnchor: "middle",
    fill: center.accent,
    fillOpacity: "0.8",
    fontSize: "7",
    fontFamily: "'DM Mono',monospace"
  }, center.name.split(" ")[0]), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 36,
    textAnchor: "middle",
    fill: center.accent,
    fillOpacity: "0.5",
    fontSize: "7",
    fontFamily: "'DM Mono',monospace"
  }, center.best, " lbs est 1RM"));
}

// Migration — year of training as flight paths
function MigrationMap({
  version
}) {
  const now = new Date();
  const yearAgo = new Date();
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  const sessions = sessionsStore.filter(s => new Date(s.date) >= yearAgo).sort((a, b) => a.date.localeCompare(b.date));
  if (sessions.length < 5) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      textAlign: "center"
    }
  }, "More sessions needed to see your migration");
  const W_SVG = 280,
    H_SVG = 140;
  const totalMs = now - yearAgo;
  const toX = date => (new Date(date) - yearAgo) / totalMs * W_SVG;
  const dayOrder = ["sun", "mon", "tue", "wed", "thu", "fri"];
  const toY = dayId => {
    const i = dayOrder.indexOf(dayId);
    return 20 + (i < 0 ? 3 : i) * (H_SVG - 30) / 5;
  };
  const paths = {};
  DAYS.forEach(d => {
    paths[d.id] = [];
  });
  sessions.forEach(s => {
    if (paths[s.dayId]) paths[s.dayId].push({
      x: toX(s.date),
      y: toY(s.dayId),
      date: s.date
    });
  });
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W_SVG} ${H_SVG}`,
    style: {
      width: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "mig-glow"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "2",
    result: "b"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", {
    in: "b"
  }), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), DAYS.map(d => {
    const pts = paths[d.id];
    if (pts.length < 2) return null;
    const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    return /*#__PURE__*/React.createElement("g", {
      key: d.id
    }, /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: "none",
      stroke: d.accent,
      strokeWidth: "1",
      strokeOpacity: "0.25"
    }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.x,
      cy: p.y,
      r: "1.5",
      fill: d.accent,
      fillOpacity: "0.6"
    })));
  }), /*#__PURE__*/React.createElement("text", {
    x: "2",
    y: "10",
    fill: W.textDim,
    fillOpacity: "0.4",
    fontSize: "6",
    fontFamily: "'DM Mono',monospace"
  }, yearAgo.getFullYear()), /*#__PURE__*/React.createElement("text", {
    x: W_SVG - 30,
    y: "10",
    fill: W.textDim,
    fillOpacity: "0.4",
    fontSize: "6",
    fontFamily: "'DM Mono',monospace"
  }, "Now"));
}

// Scar Tissue Indicator — used inline on exercise rows in StatsView
function ScarIndicator({
  exName
}) {
  const intensity = getScarIntensity(exName);
  if (intensity < 0.1) return null;
  const dots = Math.round(intensity * 5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      alignItems: "center",
      marginTop: 3
    }
  }, Array.from({
    length: 5
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 4,
      height: 4,
      borderRadius: 1,
      background: i < dots ? "rgba(255,71,87,0.5)" : W.border,
      transition: "background 0.3s"
    }
  })));
}

// Last Rep Screen
function LastRepModal({
  exName,
  onClose
}) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [result, setResult] = useState(null); // null | "made" | "missed"
  const countRef = useRef(null);
  const attempts = lastRepStore.filter(a => a.exName === exName).slice(-10).reverse();
  const winRate = attempts.length ? Math.round(attempts.filter(a => a.success).length / attempts.length * 100) : null;
  function startAttempt() {
    setResult(null);
    setCountdown(3);
    haptic(100);
    countRef.current = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(countRef.current);
          setCountdown(0);
          haptic([60, 30, 120]);
          return 0;
        }
        haptic(50);
        return c - 1;
      });
    }, 1000);
  }
  function logResult(success) {
    const entry = {
      date: todayStr(),
      exName,
      weight: parseFloat(weight) || 0,
      reps: parseInt(reps) || 1,
      success
    };
    lastRepStore.unshift(entry);
    if (lastRepStore.length > 500) lastRepStore = lastRepStore.slice(0, 500);
    saveLastRep();
    if (!success) recordStruggle(exName);else recordBreakthrough(exName);
    setResult(success ? "made" : "missed");
    playBeep(success ? 880 : 220, 0.3, 0.4);
  }
  useEffect(() => () => {
    if (countRef.current) clearInterval(countRef.current);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 3000,
      background: "rgba(0,0,0,0.95)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: W.textDim,
      marginBottom: 8,
      textTransform: "uppercase"
    }
  }, "The Last Rep"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: W.text,
      textAlign: "center",
      marginBottom: 24
    }
  }, exName), winRate !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      marginBottom: 20
    }
  }, winRate, "% win rate \xB7 ", attempts.length, " attempt", attempts.length !== 1 ? "s" : ""), countdown === null && result === null && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: weight,
    onChange: e => setWeight(e.target.value),
    placeholder: "Weight (lbs)",
    style: {
      flex: 1,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      padding: "10px 12px",
      color: W.text,
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: reps,
    onChange: e => setReps(e.target.value),
    placeholder: "Reps",
    style: {
      flex: 1,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 8,
      padding: "10px 12px",
      color: W.text,
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      textAlign: "center"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: startAttempt,
    style: {
      width: "100%",
      padding: "16px",
      borderRadius: 12,
      border: "none",
      background: W.red,
      color: "#fff",
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.1em",
      cursor: "pointer"
    }
  }, "BEGIN ATTEMPT")), countdown !== null && countdown > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 96,
      fontWeight: 900,
      fontFamily: "'DM Mono',monospace",
      color: W.red,
      lineHeight: 1,
      animation: "scaleIn 0.2s ease both"
    }
  }, countdown), countdown === 0 && result === null && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: W.text,
      marginBottom: 24,
      letterSpacing: "0.05em"
    }
  }, "EXECUTE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => logResult(true),
    style: {
      flex: 1,
      padding: "18px",
      borderRadius: 12,
      border: "none",
      background: "rgba(0,201,177,0.2)",
      color: W.cyan,
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "MADE IT"), /*#__PURE__*/React.createElement("button", {
    onClick: () => logResult(false),
    style: {
      flex: 1,
      padding: "18px",
      borderRadius: 12,
      border: "none",
      background: "rgba(255,71,87,0.2)",
      color: W.red,
      fontFamily: "'DM Mono',monospace",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "MISSED"))), result && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      marginBottom: 12
    }
  }, result === "made" ? "🔥" : "💀"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: result === "made" ? W.cyan : W.red,
      marginBottom: 24,
      letterSpacing: "0.05em"
    }
  }, result === "made" ? "MADE IT" : "MISSED"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setResult(null);
      setCountdown(null);
      setWeight("");
      setReps("");
    },
    style: {
      padding: "12px 24px",
      borderRadius: 8,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 12,
      cursor: "pointer"
    }
  }, "Another attempt")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 20,
      right: 20,
      background: "transparent",
      border: "none",
      color: W.textDim,
      fontSize: 24,
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), attempts.length > 0 && result === null && countdown === null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      width: "100%",
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: W.textDim,
      marginBottom: 10,
      textTransform: "uppercase"
    }
  }, "Recent Attempts"), attempts.slice(0, 5).map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: `${a.date}-${a.weight}-${a.reps}`,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      borderBottom: `1px solid ${W.border}`,
      fontSize: 11,
      fontFamily: "'DM Mono',monospace"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: a.success ? W.cyan : W.red
    }
  }, a.success ? "✓" : "✗"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.text
    }
  }, a.weight, "lbs \xD7 ", a.reps), /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textDim
    }
  }, fmtDate(a.date))))));
}

// The Void
function VoidScreen({
  onDismiss
}) {
  const [pos, setPos] = useState({
    x: 0.5,
    y: 0.5
  });
  useEffect(() => {
    const id = setInterval(() => setPos({
      x: 0.3 + Math.random() * 0.4,
      y: 0.3 + Math.random() * 0.4
    }), 3000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 5000,
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${pos.x * 100}%`,
      top: `${pos.y * 100}%`,
      transform: "translate(-50%,-50%)",
      transition: "left 3s ease,top 3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#fff",
      opacity: 0.7,
      animation: "breathe 4s ease-in-out infinite",
      boxShadow: "0 0 20px rgba(255,255,255,0.3)"
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes breathe{0%,100%{transform:scale(1);opacity:0.4}50%{transform:scale(1.8);opacity:0.9}}`));
}

// Confession Booth
function ConfessionModal({
  onClose
}) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const prompts = ["What are you actually training for?", "Who are you trying to become?", "What are you running from?", "What would you do if no one was watching?", "What does strength mean to you right now?"];
  const [prompt] = useState(() => prompts[Math.floor(Math.random() * prompts.length)]);
  async function saveConfession() {
    if (!text.trim()) return;
    const encoded = btoa(unescape(encodeURIComponent(text)));
    const entry = {
      date: todayStr(),
      encoded
    };
    const r = await window.storage.get("wt_confession_v1");
    const existing = r?.value ? JSON.parse(r.value) : [];
    existing.push(entry);
    await window.storage.set("wt_confession_v1", JSON.stringify(existing));
    setSaved(true);
    setTimeout(onClose, 1800);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 4000,
      background: "rgba(0,0,0,0.97)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: "rgba(255,255,255,0.15)",
      marginBottom: 24,
      textTransform: "uppercase"
    }
  }, "The Confession Booth"), !saved ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 300,
      color: "rgba(255,255,255,0.7)",
      lineHeight: 1.6,
      marginBottom: 32,
      fontStyle: "italic"
    }
  }, prompt), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Answer honestly. No one will see this.",
    style: {
      width: "100%",
      minHeight: 120,
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.15)",
      color: "rgba(255,255,255,0.8)",
      fontSize: 14,
      fontFamily: "'DM Sans',sans-serif",
      lineHeight: 1.7,
      outline: "none",
      resize: "none",
      padding: "0 0 12px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "transparent",
      border: "none",
      color: "rgba(255,255,255,0.2)",
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      cursor: "pointer"
    }
  }, "leave"), /*#__PURE__*/React.createElement("button", {
    onClick: saveConfession,
    style: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: 6,
      color: "rgba(255,255,255,0.5)",
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      padding: "8px 20px",
      cursor: "pointer"
    }
  }, "seal it"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.3)",
      fontSize: 13,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em"
    }
  }, "sealed.")));
}

// Resting Face — breathing overlay on rest timer
function RestingFaceOverlay() {
  const [phase, setPhase] = useState("inhale");
  const [progress, setProgress] = useState(0);
  const INHALE = 4000,
    EXHALE = 6000;
  useEffect(() => {
    let start = Date.now();
    let currentPhase = "inhale";
    let duration = INHALE;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);
      setPhase(currentPhase);
      if (elapsed >= duration) {
        currentPhase = currentPhase === "inhale" ? "exhale" : "inhale";
        duration = currentPhase === "inhale" ? INHALE : EXHALE;
        start = Date.now();
      }
    };
    const id = setInterval(tick, 50);
    return () => clearInterval(id);
  }, []);
  const scale = phase === "inhale" ? 1 + progress * 0.4 : 1.4 - progress * 0.4;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      zIndex: 0,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: "50%",
      border: `1px solid ${W.cyan}`,
      transform: `scale(${scale})`,
      transition: "transform 0.1s linear",
      boxShadow: `0 0 ${20 * scale}px rgba(0,201,177,0.2)`
    }
  }));
}

// Undertow visual
function UndertowBar({
  debt
}) {
  const pct = Math.min(100, debt);
  const color = pct > 70 ? W.red : pct > 40 ? W.yellow : W.cyan;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      background: W.border,
      borderRadius: 2,
      overflow: "hidden",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: `${pct}%`,
      background: color,
      borderRadius: 2,
      transition: "width 1s ease",
      opacity: 0.7,
      boxShadow: `0 0 6px ${color}55`
    }
  }));
}

// Threshold Hum indicator
function ThresholdHum({
  exName,
  currentWeight
}) {
  // Find threshold: weight where rest times spike
  const ents = getEntries(exName);
  if (ents.length < 6 || !currentWeight) return null;
  const sorted = [...ents].sort((a, b) => a.weight - b.weight);
  const mid = Math.floor(sorted.length * 0.6);
  const threshold = sorted[mid]?.weight || 0;
  if (!threshold || currentWeight < threshold * 0.9) return null;
  const isOver = parseFloat(currentWeight) >= threshold;
  if (!isOver) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: `linear-gradient(90deg,transparent,${W.cyan}44,transparent)`,
      borderRadius: 1,
      marginTop: 2,
      animation: "fadeIn 0.5s ease both"
    }
  });
}

// Fossil Record card
function FossilCard({
  exName
}) {
  const fossil = fossilStore[exName];
  if (!fossil) return null;
  const entries = getEntries(exName);
  if (entries.length < 3) return null; // Not interesting until there's real history
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 10px",
      background: "rgba(255,255,255,0.02)",
      border: `1px solid rgba(255,255,255,0.06)`,
      borderRadius: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.2)",
      marginBottom: 3,
      textTransform: "uppercase"
    }
  }, "First Entry"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.35)",
      fontFamily: "'DM Mono',monospace"
    }
  }, fossil.weight, "lbs \xD7 ", fossil.reps, "r \xB7 ", fmtDate(fossil.date)));
}

// ReadinessDetail popover
function ReadinessDetail({
  color
}) {
  const r = getTodayReadiness();
  if (!r) return null;
  const label = r.score >= 75 ? "High Readiness" : r.score >= 50 ? "Moderate Readiness" : "Low Readiness";
  const desc = r.score >= 75 ? "Your nervous system is primed. Sleep, stress, and soreness are all in a good window. Push intensity today — this is a day to accumulate quality work." : r.score >= 50 ? "Acceptable training conditions. Keep intensity moderate and stay attuned to how your body responds during warmup. Don't force PRs." : "Your system is taxed. Train, but reduce load by 10–15% and prioritize movement quality over numbers. Recovery is the work today.";
  const sleepLabel = ["", "Terrible", "Poor", "Fair", "Good", "Great"][r.sleep] || "—";
  const stressLabel = ["", "Extreme", "High", "Moderate", "Low", "None"][r.stress] || "—";
  const sorenessLabel = ["", "Wrecked", "Sore", "Moderate", "Mild", "Fresh"][r.soreness] || "—";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      zIndex: 200,
      width: 260,
      background: W.surfaceHi,
      border: `1px solid ${color}33`,
      borderRadius: 12,
      padding: "14px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      animation: "fadeIn 0.15s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      marginBottom: 6,
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textMid,
      lineHeight: 1.65,
      marginBottom: 12
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8
    }
  }, [["Sleep", sleepLabel, r.sleep], ["Stress", stressLabel, r.stress], ["Soreness", sorenessLabel, r.soreness]].map(([k, v, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      textAlign: "center",
      padding: "8px 4px",
      background: `${color}09`,
      borderRadius: 8,
      border: `1px solid ${color}22`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 3
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color,
      fontFamily: "'DM Mono',monospace"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      marginTop: 1
    }
  }, v)))));
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({
  version,
  bwVersion = 0,
  setPage,
  onDeleteDate,
  onBWUpdate,
  onShowReadiness,
  readinessScore
}) {
  const theme = getSeasonalTheme();
  const [showReadinessDetail, setShowReadinessDetail] = useState(false);
  useEffect(() => {
    if (!showReadinessDetail) return;
    const close = () => setShowReadinessDetail(false);
    setTimeout(() => document.addEventListener("click", close), 0);
    return () => document.removeEventListener("click", close);
  }, [showReadinessDetail]);
  const todayS = todayStr();
  const {
    monStr,
    sunStr
  } = thisWeekRange();
  const sessions = new Set(sessionsStore.filter(s => s.date >= monStr && s.date <= sunStr).map(s => s.date + "_" + s.dayId)).size;
  const allWorkingEx = getAllWorkingExercises();
  let totalPRs = 0;
  allWorkingEx.forEach(ex => {
    const ents = getEntries(ex.name);
    ents.forEach((e, i) => {
      if (!e.bodyweight && isPR(ents, i)) totalPRs++;
    });
  });
  const momentum = computeMomentum();
  updateUndertow();
  const undertow = undertowStore.debt;

  // Oracle
  const oracle = getOracle();
  // Archaeology
  const archaeology = getArchaeologyCard();
  // Whisper — show last session's whisper
  const lastSession = sessionsStore[0];
  const whisper = lastSession ? generateWhisper(lastSession.dayId) : null;

  // Void — 1% chance per day after 10+ sessions
  const [showVoid, setShowVoid] = useState(() => {
    if (sessionsStore.length < 10) return false;
    try {
      const todayVoid = localStorage.getItem("wt_void_shown");
      if (todayVoid === todayStr()) return false;
    } catch (e) {}
    return Math.random() < 0.01;
  });
  useEffect(() => {
    if (showVoid) {
      try {
        localStorage.setItem("wt_void_shown", todayStr());
      } catch (e) {}
    }
  }, [showVoid]);
  const [showConfession, setShowConfession] = useState(false);
  const [confessionTaps, setConfessionTaps] = useState(0);
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
  const readinessColor = !readinessScore ? W.textDim : readinessScore >= 75 ? W.cyan : readinessScore >= 50 ? W.yellow : W.red;

  // Undertow header tint
  const undertowAlpha = Math.min(0.25, undertow / 100 * 0.25);
  const headerBg = undertow > 30 ? `linear-gradient(180deg,rgba(255,71,87,${undertowAlpha}) 0%,transparent 100%)` : "none";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 0 calc(env(safe-area-inset-bottom) + 86px)`,
      maxWidth: 680,
      margin: "0 auto"
    },
    className: "ai"
  }, showVoid && /*#__PURE__*/React.createElement(VoidScreen, {
    onDismiss: () => setShowVoid(false)
  }), showConfession && /*#__PURE__*/React.createElement(ConfessionModal, {
    onClose: () => setShowConfession(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "calc(env(safe-area-inset-top) + 16px) 16px 14px",
      borderBottom: `1px solid ${W.border}`,
      background: headerBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: undertow > 20 ? 6 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      const t = confessionTaps + 1;
      setConfessionTaps(t);
      if (t >= 3) {
        setConfessionTaps(0);
        setShowConfession(true);
      }
    },
    style: {
      cursor: "pointer",
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.35em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Training Program"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: W.text,
      lineHeight: 1
    }
  }, "Weekly Tracker")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      position: "relative"
    }
  }, readinessScore !== null && readinessScore !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowReadinessDetail(s => !s),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "6px 10px",
      borderRadius: 16,
      border: `1px solid ${readinessColor}33`,
      background: `${readinessColor}11`,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: readinessColor,
      boxShadow: `0 0 8px ${readinessColor}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: readinessColor,
      fontWeight: 700
    }
  }, readinessScore)), showReadinessDetail && /*#__PURE__*/React.createElement(ReadinessDetail, {
    color: readinessColor
  })), !readinessScore && /*#__PURE__*/React.createElement("button", {
    onClick: onShowReadiness,
    style: {
      padding: "7px 12px",
      borderRadius: 16,
      border: `1px solid ${W.border}`,
      background: W.surface,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 10,
      cursor: "pointer",
      letterSpacing: "0.05em"
    }
  }, "Check In"))), undertow > 20 && /*#__PURE__*/React.createElement(UndertowBar, {
    debt: undertow
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 0",
      borderBottom: `1px solid ${W.border}`,
      background: W.surface
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: W.bg,
      borderRadius: 10,
      padding: "12px 14px",
      border: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "This Week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 900,
      color: W.cyan,
      lineHeight: 1,
      fontFamily: "'DM Mono',monospace"
    }
  }, sessions), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      marginTop: 3,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.05em"
    }
  }, "sessions logged")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: W.bg,
      borderRadius: 10,
      padding: "12px 14px",
      border: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Momentum"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 900,
      color: momentum > 70 ? W.cyan : momentum > 40 ? W.yellow : W.red,
      lineHeight: 1,
      fontFamily: "'DM Mono',monospace"
    }
  }, momentum), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: "rgba(255,255,255,0.06)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${momentum}%`,
      background: momentum > 70 ? W.cyan : momentum > 40 ? W.yellow : W.red,
      borderRadius: 2,
      transition: "width 0.6s ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "/100"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: W.bg,
      borderRadius: 10,
      padding: "12px 14px",
      border: `1px solid ${W.border}`
    }
  }, (() => {
    const overdueDay = DAYS.filter(d => d.id !== "fri").find(d => {
      const last = dayLastLoggedDate(d.id);
      if (!last) return false;
      return Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24)) > 7;
    });
    if (!overdueDay) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: 4
      }
    }, "Status"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 900,
        color: W.cyan,
        lineHeight: 1
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: W.cyan,
        marginTop: 3,
        fontFamily: "'DM Mono',monospace",
        letterSpacing: "0.05em"
      }
    }, "on track"));
    const last = dayLastLoggedDate(overdueDay.id);
    const diffDays = Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontFamily: "'DM Mono',monospace",
        color: W.red,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: 4
      }
    }, "Overdue"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 900,
        color: W.red,
        lineHeight: 1
      }
    }, overdueDay.label.slice(0, 3).toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: W.textDim,
        marginTop: 3,
        fontFamily: "'DM Mono',monospace"
      }
    }, diffDays, "d ago"));
  })()))), oracle && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0",
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`,
      background: "rgba(245,200,66,0.03)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: W.yellow,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "The Oracle"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: W.textMid,
      lineHeight: 1.65,
      fontStyle: "italic"
    }
  }, oracle)), archaeology && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: `1px solid ${W.border}`,
      background: "rgba(255,255,255,0.015)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.25em",
      color: "rgba(255,255,255,0.2)",
      textTransform: "uppercase",
      marginBottom: 5
    }
  }, "The Archaeology"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6
    }
  }, archaeology)), whisper && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontStyle: "italic",
      lineHeight: 1.5
    }
  }, "\"", whisper, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.01em"
    }
  }, monthNames[heatMonth], " ", heatYear), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.1em"
    }
  }, totalLoggedDays, " day", totalLoggedDays !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
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
      marginBottom: 8
    }
  }, ["S", "M", "T", "W", "T", "F", "S"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      textAlign: "center",
      fontWeight: 600,
      letterSpacing: "0.1em"
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
      borderRadius: 7,
      background: !cell ? "transparent" : cell.isFuture ? "rgba(255,255,255,0.01)" : cell.logged ? W.cyan : "rgba(255,255,255,0.04)",
      border: cell?.isToday ? `2px solid ${W.cyan}` : `1px solid ${cell?.logged ? "transparent" : "rgba(255,255,255,0.05)"}`,
      cursor: cell?.logged && !cell.isFuture ? "pointer" : "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.1s",
      boxShadow: cell?.logged && !cell.isFuture ? `0 0 10px ${W.cyan}40` : undefined
    }
  }, cell && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: cell.logged ? "#000" : cell.isFuture ? "rgba(255,255,255,0.1)" : W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontWeight: cell.logged ? 700 : 400
    }
  }, cell.d))))))), /*#__PURE__*/React.createElement(WorkoutHistoryCard, {
    version: version,
    onDelete: onDeleteDate
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BodyweightCard, {
    onUpdate: onBWUpdate
  }), /*#__PURE__*/React.createElement(BodyweightGraph, {
    key: bwVersion
  })));
}

// ── STAT EXPLAINER DROPDOWN ───────────────────────────────────────────────────
function StatExplainer({
  text
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: open ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "transparent",
      border: "none",
      color: W.textDim,
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      padding: "2px 0",
      cursor: "pointer",
      textTransform: "uppercase",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open ? "rotate(90deg)" : "none",
      transition: "transform 0.15s",
      display: "inline-block"
    }
  }, "\u25B8"), open ? "Hide" : "How it works"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      lineHeight: 1.65,
      padding: "8px 10px",
      background: "rgba(255,255,255,0.02)",
      border: `1px solid ${W.border}`,
      borderRadius: 6,
      marginTop: 4,
      animation: "fadeIn 0.15s ease both"
    }
  }, text));
}

// ── STATS PAGE ─────────────────────────────────────────────────────────────────
function StatsPage({
  version
}) {
  const [tab, setTab] = useState("progress");
  const [spiderWeekOffset, setSpiderWeekOffset] = useState(0);
  const tabs = [{
    id: "progress",
    label: "Progress"
  }, {
    id: "balance",
    label: "Balance"
  }, {
    id: "deep",
    label: "Deep"
  }];

  // All expensive derivations — computed fresh each render (StatsPage only re-renders on version/spiderWeekOffset changes)
  const {
    allWorkingEx,
    top1RMs,
    topGainers,
    needsAttention,
    allPRs,
    spiderData,
    spiderHasData,
    spiderLabel,
    circadianPeak,
    momentum,
    bloodInsights,
    btnStyle
  } = (() => {
    const allWorkingEx = getAllWorkingExercises();
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
      if (first <= 0 || last <= 0) return;
      const pct = (last - first) / first * 100;
      const distinctDates = new Set(ents.map(e => e.date)).size;
      if (distinctDates < 2) return;
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
    const topGainers = trends.slice(0, 5);
    const fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
    const fwaStr = fourWeeksAgo.toISOString().slice(0, 10);
    const PROGRESS_EXEMPT = new Set(["Hang Clean", "MB Slam → Lateral Toss", "Snap Down → Split Jump", "Box Drop → Stick Landing", "Rear Delt Cable Fly", "Cable Rear Fly", "Cuban Press", "Cable Y Raise", "Band Pull-Aparts", "Suitcase Carry", "Copenhagen Plank"]);
    const needsAttention = [];
    allWorkingEx.filter(ex => !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name) && !PROGRESS_EXEMPT.has(ex.name)).forEach(ex => {
      const allEnts = getEntries(ex.name);
      const w4 = allEnts.filter(e => e.date >= fwaStr);
      if (w4.length < 2) return;
      const wFirst = w4[0].weight,
        wLast = w4[w4.length - 1].weight;
      const pct4w = wFirst === 0 ? wLast > 0 ? 100 : 0 : (wLast - wFirst) / wFirst * 100;
      if (pct4w < 10) needsAttention.push({
        name: ex.name,
        pct: pct4w,
        first: wFirst,
        last: wLast,
        sessions: new Set(w4.map(e => e.date)).size,
        accent: ex.dayAccent
      });
    });
    needsAttention.sort((a, b) => a.pct - b.pct);
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
    const spiderRange = getWeekRange(spiderWeekOffset);
    const groupVol = {
      CNS: 0,
      Legs: 0,
      Push: 0,
      Pull: 0,
      Core: 0,
      Stability: 0,
      Mobility: 0
    };
    const allExForVol = [];
    DAYS.forEach(day => {
      day.blocks.forEach(b => (b.exercises || []).forEach(ex => allExForVol.push(ex.name)));
      (day.warmup?.phases || []).forEach(ph => (ph.exercises || []).forEach(ex => allExForVol.push(ex.name)));
      (day.warmdown?.phases || []).forEach(ph => (ph.exercises || []).forEach(ex => allExForVol.push(ex.name)));
    });
    [...new Set(allExForVol)].forEach(exName => {
      const g = EX_GROUP[exName];
      if (!g) return;
      getEntries(exName).filter(e => e.date >= spiderRange.sunStr && e.date <= spiderRange.satStr).forEach(e => {
        if (g === "Mobility") groupVol[g] += e.sets * e.reps * 5;else groupVol[g] += e.weight > 0 ? e.weight * e.sets * e.reps : e.sets * e.reps * 10;
      });
    });
    const totalVol = Object.values(groupVol).reduce((a, b) => a + b, 0) || 1;
    const spiderData = Object.fromEntries(GROUPS.map(g => [g, groupVol[g] / totalVol]));
    const spiderHasData = Object.values(groupVol).some(v => v > 0);
    const spiderLabel = spiderWeekOffset === 0 ? "This Week" : spiderWeekOffset === 1 ? "Last Week" : `${spiderWeekOffset} Weeks Ago`;
    const btnStyle = {
      background: "transparent",
      border: `1px solid ${W.border}`,
      borderRadius: 6,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      padding: "4px 10px",
      cursor: "pointer"
    };
    const circadianPeak = getCircadianPeak();
    const momentum = computeMomentum();
    const bloodInsights = [];
    allWorkingEx.slice(0, 8).forEach(ex => {
      const insight = getBloodMemoryInsight(ex.name);
      if (insight) bloodInsights.push({
        exName: ex.name,
        ...insight
      });
    });
    return {
      allWorkingEx,
      top1RMs,
      topGainers,
      needsAttention,
      allPRs,
      spiderData,
      spiderHasData,
      spiderLabel,
      circadianPeak,
      momentum,
      bloodInsights,
      btnStyle
    };
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `calc(env(safe-area-inset-top) + 16px) 0 calc(env(safe-area-inset-bottom) + 86px)`,
      maxWidth: 680,
      margin: "0 auto"
    },
    className: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 14px",
      borderBottom: `1px solid ${W.border}`,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.3em",
      color: W.textDim,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Analysis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: W.text,
      letterSpacing: "-0.02em"
    }
  }, "Stats")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim
    }
  }, "Momentum ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: momentum > 70 ? W.cyan : momentum > 40 ? W.yellow : W.red,
      fontWeight: 700
    }
  }, momentum), "/100")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: `1px solid ${W.border}`
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      flex: 1,
      padding: "11px 0",
      border: "none",
      background: "transparent",
      color: tab === t.id ? W.cyan : W.textDim,
      fontFamily: "'DM Mono',monospace",
      fontSize: 11,
      fontWeight: tab === t.id ? 700 : 400,
      borderBottom: tab === t.id ? `2px solid ${W.cyan}` : "2px solid transparent",
      cursor: "pointer",
      letterSpacing: "0.05em",
      transition: "color 0.2s"
    }
  }, t.label))), tab === "progress" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Top Est. 1RMs"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Estimated one-rep max using Epley formula: weight \xD7 (1 + reps/30). Ranks your heaviest lifts by projected single-rep strength. Only includes working sets from progressive overload exercises."
  }), top1RMs.slice(0, 7).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      padding: "12px 0"
    }
  }, "Log sets to see your top lifts") : top1RMs.slice(0, 7).map((t, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 0",
      borderBottom: i < arr.length - 1 ? `1px solid ${W.border}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      background: i === 0 ? W.cyanDim : W.surface,
      border: `1px solid ${i === 0 ? W.cyan : W.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
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
      fontSize: 9,
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
      fontSize: 18,
      fontWeight: 800,
      color: i === 0 ? W.cyan : W.text,
      lineHeight: 1,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.orm), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 7,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      marginTop: 1
    }
  }, "EST 1RM"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Top Gainers"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Percentage change from your first logged weight to your most recent for each exercise. Shows which lifts have improved the most since you started tracking. Requires 2+ sessions with distinct dates."
  }), topGainers.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "Log 2+ sessions per lift") : topGainers.map(t => {
    const barW = Math.min(100, Math.max(2, t.pct * 2.5));
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 4
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
        fontSize: 13,
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
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${barW}%`,
        background: W.cyan,
        borderRadius: 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace"
      }
    }, t.first, " \u2192 ", t.last, " lbs \xB7 ", t.sessions, " sessions"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, "Needs Attention"), needsAttention.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.red,
      background: "rgba(255,71,87,0.1)",
      border: `1px solid rgba(255,71,87,0.2)`,
      borderRadius: 12,
      padding: "3px 10px"
    }
  }, needsAttention.length, " lift", needsAttention.length !== 1 ? "s" : "")), needsAttention.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.cyan,
      fontFamily: "'DM Mono',monospace"
    }
  }, "All tracked lifts progressing") : needsAttention.slice(0, 4).map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      padding: "10px 12px",
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
      marginBottom: 2
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
      fontSize: 12,
      fontWeight: 700,
      color: t.pct < 0 ? W.red : W.textMid,
      marginLeft: 10,
      flexShrink: 0,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.pct >= 0 ? "+" : "", t.pct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, t.first, " \u2192 ", t.last, " lbs \xB7 ", t.sessions, " sessions"), /*#__PURE__*/React.createElement(ScarIndicator, {
    exName: t.name
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "PR Timeline"), allPRs.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "No PRs yet") : allPRs.slice(0, 15).map((pr, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: `${pr.name}-${pr.date}-${i}`,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      paddingBottom: 10,
      marginBottom: 4,
      borderBottom: i < arr.length - 1 ? `1px solid ${W.border}` : "none"
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
  }), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
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
      marginTop: 1
    }
  }, pr.weight, "lbs \xD7 ", pr.reps, "r \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.cyan
    }
  }, "~", pr.orm, " 1RM"))))))), tab === "balance" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Muscle Shadow"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Highlights which muscles you've trained in the past 7 days. Brightness = relative training volume (weight \xD7 sets \xD7 reps). Muscles are mapped per-exercise, so compound lifts like squats light up quads, glutes, hamstrings, and core."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 8
    }
  }, "Last 7 days"), /*#__PURE__*/React.createElement(MuscleShadow, {
    version: version
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, "Volume Split"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setSpiderWeekOffset(o => o + 1)
  }, "\u2190"), spiderWeekOffset > 0 && /*#__PURE__*/React.createElement("button", {
    style: btnStyle,
    onClick: () => setSpiderWeekOffset(o => o - 1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 8
    }
  }, spiderLabel), !spiderHasData ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      padding: "20px 0",
      textAlign: "center"
    }
  }, "No data") : /*#__PURE__*/React.createElement(DonutChart, {
    data: spiderData,
    size: 220
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
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
  }, "Nervous System Map"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Estimates neural fatigue across four motor-pathway zones using a composite load score. Each exercise is weighted by its neural demand factor (NDF): explosive/CNS work=0.9, heavy compounds=0.7, isolation=0.4, mobility=0.1. Load = sets \xD7 reps \xD7 intensity% \xD7 NDF \xD7 recovery-decay. Higher loads in a zone indicate greater neural fatigue accumulation, which can impair motor unit recruitment and rate coding. Based on Henneman's size principle and central fatigue research (Gandevia 2001, Taylor & Gandevia 2008)."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 10
    }
  }, "Neural load by zone \xB7 last 7 days"), /*#__PURE__*/React.createElement(NervousSystemMap, {
    version: version
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
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
  }, "Gravity"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Solar system visualization of your lifts. The heaviest estimated 1RM sits at the center. Other lifts orbit at distances proportional to their relative strength. Brighter planets = recently hit near your all-time best (within 95%)."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 10
    }
  }, "Heaviest lift = gravitational center"), /*#__PURE__*/React.createElement(GravityMap, {
    version: version
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px"
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
  }, "The Migration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 10
    }
  }, "A year of training as flight paths"), /*#__PURE__*/React.createElement(MigrationMap, {
    version: version
  }))), tab === "deep" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
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
  }, "Circadian Peak"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Finds the hour of day where your logged working weights are statistically highest. Based on timestamps recorded with each set. Needs 3+ entries per hour bucket to surface a pattern. Research shows most people peak in late afternoon when core body temperature is highest."
  }), circadianPeak !== null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 10
    }
  }, "Your strongest training window (based on session data)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: W.cyan,
      fontFamily: "'DM Mono',monospace"
    }
  }, circadianPeak, ":00"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textMid
    }
  }, "\xB1 1 hour. You tend to lift ", isInPeakWindow() ? "right now." : "outside this window.", " ", isInPeakWindow() && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.cyan
    }
  }, "Peak window active.")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      padding: "8px 0"
    }
  }, "Needs 3+ entries per hour to surface your peak. Keep logging \u2014 timestamps are being recorded now.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
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
  }, "Blood Memory"), /*#__PURE__*/React.createElement(StatExplainer, {
    text: "Correlational analysis of exercise pairings. For each lift, splits your sessions into days where a specific other exercise was also performed vs. days without it. Shows the percentage difference in average weight when the pairing is present. Requires 6+ sessions with 3+ co-occurrences."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 10
    }
  }, "Exercise pairings that affect performance"), bloodInsights.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "Needs 6+ sessions per lift to find patterns") : bloodInsights.map(ins => /*#__PURE__*/React.createElement("div", {
    key: ins.exName,
    style: {
      padding: "10px 12px",
      borderRadius: 8,
      marginBottom: 6,
      background: `rgba(0,201,177,0.03)`,
      border: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: W.text,
      marginBottom: 3
    }
  }, ins.exName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textMid,
      fontFamily: "'DM Mono',monospace"
    }
  }, "You perform ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.cyan
    }
  }, "+", ins.delta, "%"), " when preceded by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.text
    }
  }, ins.pairedWith))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Readiness History"), readinessStore.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "Use the Check In button before workouts") : readinessStore.slice(-10).reverse().map((r, i, arr) => {
    const color = r.score >= 75 ? W.cyan : r.score >= 50 ? W.yellow : W.red;
    return /*#__PURE__*/React.createElement("div", {
      key: r.date,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: i < arr.length - 1 ? `1px solid ${W.border}` : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `2px solid ${color}44`,
        background: `${color}11`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        color,
        fontFamily: "'DM Mono',monospace"
      }
    }, r.score)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: W.text,
        fontWeight: 600
      }
    }, fmtDate(r.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace"
      }
    }, "sleep ", r.sleep, " \xB7 stress ", r.stress, " \xB7 soreness ", r.soreness)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "The Fossil Record"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 12
    }
  }, "First-ever logged entry per exercise"), Object.keys(fossilStore).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace"
    }
  }, "Fossils are preserved as you log") : Object.entries(fossilStore).slice(0, 10).map(([name, f], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: i < arr.length - 1 ? `1px solid ${W.border}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "rgba(255,255,255,0.5)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,0.2)",
      fontFamily: "'DM Mono',monospace",
      marginTop: 1
    }
  }, fmtDate(f.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "rgba(255,255,255,0.3)",
      fontFamily: "'DM Mono',monospace"
    }
  }, f.weight, "lbs \xD7 ", f.reps))))));
}

// ── EXERCISE DESCRIPTIONS ─────────────────────────────────────────────────────
const EX_DESC = {
  "BB Back Squat": "Barbell on upper traps, feet shoulder-width. Brace core, sit back and down keeping chest up. Drive through heels to lockout. King of lower body strength.",
  "Trap Bar Deadlift": "Stand inside hex bar, hinge at hips, grip handles. Keep back flat, push floor away. Less spinal stress than straight bar — great for strength and power.",
  "BB Split Squat": "Rear foot elevated or on floor. Front shin near-vertical, lower rear knee toward ground. Builds unilateral leg strength and hip mobility simultaneously.",
  "Bulgarian Split Squat": "Rear foot elevated on bench. Lower hips straight down, front knee tracks over toe. Brutal quad/glute builder with high balance demand.",
  "RDL": "Hinge at hips with soft knee bend, bar stays close to legs. Feel hamstring stretch at bottom, drive hips forward to lockout. Posterior chain king.",
  "Nordic Curl": "Anchor feet, lower body toward floor under control. Eccentric hamstring strength — one of the best injury prevention exercises for athletes.",
  "Hip Thrust": "Shoulders on bench, bar across hips. Drive hips to full extension, squeeze glutes at top. Primary glute mass builder.",
  "BB Bench Press": "Arch back slightly, retract scapula, bar path from lower chest. Leg drive into floor. Primary horizontal push for chest/triceps/anterior delt.",
  "DB Incline Press": "30–45° incline. Dumbbells allow greater ROM than barbell. Targets upper chest and anterior delts with natural wrist rotation.",
  "DB Incline Bench Press": "30–45° incline. Dumbbells allow greater ROM than barbell. Targets upper chest and anterior delts with natural wrist rotation.",
  "DB Lateral Raise": "Slight forward lean, raise to shoulder height with pinky slightly higher. Isolates medial delt. Keep weight light and strict.",
  "DB Lateral Raises": "Slight forward lean, raise to shoulder height with pinky slightly higher. Isolates medial delt. Keep weight light and strict.",
  "Cable Y Raise": "Cable at low pulley, raise arms in Y shape above head. Targets lower trap and serratus — critical for shoulder health and scapular upward rotation.",
  "Cable Y Raises": "Cable at low pulley, raise arms in Y shape above head. Targets lower trap and serratus — critical for shoulder health and scapular upward rotation.",
  "Straight Bar Pushdown": "Overhand grip, elbows pinned at sides, push bar to full extension. Consistent cable tension isolates all three tricep heads.",
  "OH DB Extension": "Keep elbows pointed forward, lower dumbbell behind head. Full stretch at bottom builds long head of tricep.",
  "Overhead DB Tricep Extension": "Keep elbows pointed forward, lower dumbbell behind head. Full stretch at bottom builds long head of tricep.",
  "SA DB Shoulder Press": "Single arm press builds unilateral stability and reduces shoulder imbalances. Core braces hard to prevent lateral lean.",
  "Pull-Ups": "Dead hang start. Drive elbows to hips, chin over bar. Best bodyweight lat builder. Add weight when reps exceed 10 consistently.",
  "Weighted Pull-Ups": "Dead hang start with added load. Drive elbows to hips, chin over bar. Premium lat and bicep strength builder.",
  "SA DB Row": "Brace on bench, row dumbbell to hip keeping elbow close. Full stretch at bottom. Best unilateral back thickness builder.",
  "Chest Supported Row": "Lie prone on incline bench, row handles to chest. Removes lower back from the equation — pure upper back stimulus.",
  "Incline Curl": "On incline bench, full stretch at bottom. Stretches long head of bicep under load for superior development.",
  "Incline Dumbbell Curl": "On incline bench, full stretch at bottom. Stretches long head of bicep under load for superior development.",
  "Hammer Curl": "Neutral grip curl. Targets brachialis (under bicep) and brachioradialis. Adds arm thickness and grip strength.",
  "Lat Pulldown": "Wide or shoulder-width grip. Pull bar to upper chest, lean back slightly. Builds lat width. Good precursor or alternative to pull-ups.",
  "BB Row": "Hinged at hips, overhand grip. Row bar to lower chest/navel. Builds mid-back thickness. Maintain flat back throughout.",
  "Copenhagen Plank": "Side plank with top foot on bench. Demand on adductors and obliques. Critical for hip/groin injury prevention.",
  "V-Ups": "Simultaneously raise legs and torso, touch toes at top. Full rectus abdominis contraction. Control the descent.",
  "Hanging Leg Raises": "Dead hang, raise legs to 90° or higher. Hip flexors and lower abs. Avoid swinging — use controlled movement.",
  "Suitcase Carry": "Heavy dumbbell/KB in one hand, walk tall. Anti-lateral-flexion core challenge. Also builds grip and traps.",
  "Cuban Press": "External rotation + overhead press combo. Heats up the rotator cuff and promotes shoulder external rotation. Use light weight.",
  "Cuban Press (Sunday)": "External rotation + overhead press combo. Heats up the rotator cuff and promotes shoulder external rotation. Use light weight.",
  "Rear Delt Cable Fly": "Cable at head height, fly across body. Isolates posterior delt and horizontal abductors. Essential for shoulder balance.",
  "Rack Hip CARs": "Controlled articular rotations of the hip at a rack. Full active hip mobility in all planes. Daily movement hygiene.",
  "Band Pull-Aparts": "Straight arms, pull band to chest width apart. Activates lower trap, rhomboids, and posterior delts. Counters internal rotation from pressing.",
  "Band Pull-Aparts (overhand)": "Same as band pull-aparts with palms down. Targets more posterior delt.",
  "Band Pull-Aparts (Sunday)": "Same as band pull-aparts. Shoulder health staple before Sunday pressing.",
  "Side-Lying External Rotation (DB)": "Lying on side, elbow at 90°, rotate DB upward. Directly strengthens infraspinatus/teres minor. Protect your rotator cuff.",
  "Scapular Wall Slides": "Back flat to wall, slide arms overhead maintaining contact. Trains serratus anterior and scapular upward rotation.",
  "Light Cable External Rotation": "Cable at elbow height, rotate arm outward. Rotator cuff endurance work. Keep sets high, weight low.",
  "Wall Angels": "Like snow angels against a wall. Full contact required. Diagnoses and improves thoracic mobility and scapular control.",
  "Elevated Band Hip Flexor/Glute": "Band above knees, drive hips forward or backward to target glutes and hip flexors. High rep activation work.",
  "Force Plate CMJ": "Counter-movement jump on force plate. Measures CNS readiness/power output. Jump for maximum height — diagnostic tool.",
  "Hang Clean": "Pull bar explosively from hang at hip crease — triple extension of ankles, knees, and hips — then catch in front rack. Full-body power. The standard for athletic CNS development.",
  "MB Slam → Lateral Toss": "Overhead slam into ground, immediately rotate and throw ball laterally. Combines anti-rotation core work with explosive triple extension. CNS primer.",
  "Cable Rear Fly": "Cable set at head height, fly across body maintaining slight elbow bend. Isolates posterior delt and horizontal abductors. Direct fix for the rounded-shoulder posture pattern.",
  "Weighted Pull-Ups": "Dead hang start with belt/vest load. Drive elbows to hips, chin clears bar. The premium strength builder for lat width and bicep tendon integrity. Add weight only when bodyweight reps exceed 10 cleanly.",
  "MB Slam → MB Lateral Toss": "Overhead slam into ground, immediately rotate and throw ball laterally. Combines anti-rotation core work with explosive triple extension. CNS primer.",
  "Snap Down → Split Squat Jump": "Drop into athletic stance then immediately jump into split squat landing. Trains reactive strength and landing mechanics.",
  "MB Slam x3 (easy)": "Overhead to ground slam at moderate effort. Warms up full extension pattern and activates lat/core without taxing CNS.",
  "Snap Down x3 (sub-max)": "Drop to athletic stance — reactive deceleration drill. Primes nervous system without maximal effort.",
  "Box Drop → Stick Landing": "Step off box, land and hold. Eccentric load + balance. Trains ground reaction force absorption.",
  "Hip 90/90 Stretch": "Sit with both hips at 90°. Work front hip into external rotation and back hip into internal rotation. Fundamental hip mobility.",
  "Ankle Circles + Dorsiflexion Wall Drill": "Loosen ankle joint and improve dorsiflexion ROM. Critical for squat depth and knee tracking.",
  "Thoracic Extension over Roller": "Extend over foam roller segment by segment. Restores thoracic extension lost from sitting. Do slowly.",
  "Pec Minor Doorway Stretch": "Arm at 90° in doorframe, step through to stretch pec minor. Relieves anterior shoulder tightness from pressing.",
  "Thoracic Rotation (Kneeling)": "Kneeling on floor, rotate thoracic spine with hand behind head. Builds rotational mobility without lumbar compensation.",
  "Thoracic Cat-Cow": "On hands/knees, flex and extend entire spine with breath. Warms up spine and connects breathing to movement.",
  "Diaphragmatic Breathing": "Breathe into belly and lower ribs. Activates parasympathetic system and sets proper IAP (intra-abdominal pressure) for lifting.",
  "World's Greatest Stretch": "Lunge + reach + rotation. Hits hip flexor, hamstring, T-spine, and shoulder simultaneously. Most bang-for-buck mobility drill.",
  "Shoulder CARs": "Controlled articular rotation of shoulder. Takes joint through full active range. Lubricates joint and identifies restrictions.",
  "Lat Stretch (Bar Hang)": "Hang from bar with light grip, let lats lengthen. Decompresses spine and stretches tight lats from pulling.",
  "Dead Hangs (passive → active)": "Start with passive hang (relax), progress to active (pack shoulder, engage lats). Builds shoulder integrity.",
  "Scapular Pull-Ups": "Hanging, depress and retract scapula without bending elbow. Activates lower trap before pull work.",
  "Glute Bridge Hold": "Supine, drive hips up and hold. Activates glutes without loading spine. Great pre-squat primer.",
  "Glute Bridge + ISO Hold": "Bodyweight bridge with isometric holds. Builds mind-muscle connection to glutes before heavy loading.",
  "Band Clamshells": "Side-lying, resist band opening top knee. Gluteus medius activation — prevents knee valgus in squats.",
  "Bodyweight Squat to Box": "Sit to box and stand. Teaches squat pattern, depth, and control without load.",
  "Nordic Hamstring Curl ISO": "Kneeling, anchor feet, isometrically resist forward fall. Eccentric hamstring strength — among the best injury prevention exercises.",
  "SL Glute Bridge": "Single leg bridge. Challenges glute unilaterally and exposes left-right asymmetries.",
  "Empty Bar Bench Press": "Bar only, high reps. Greases the groove for bench mechanics. Warms shoulder and elbow joints before loading.",
  "50–60% Bench Press": "Working warmup set. Bridges from empty bar to working weight. Sets lat engagement and bar path.",
  // Sunday exercises
  "Foam Roll T-Spine": "Slow passes along the thoracic spine, pausing on stiff segments. Restores extension mobility lost from sitting. Breathe into each spot.",
  "Foam Roll Adductors": "Roll along inner thigh from groin to knee. Releases tight adductors that restrict hip mobility and knee tracking.",
  "Foam Roll Glutes": "Target glute med, glute max, and piriformis. Cross ankle over knee to hit deep hip rotators. Critical before lower body work.",
  "Foam Roll Lats": "Arm overhead, roll along lat from armpit to mid-back. Tight lats pull the shoulder into internal rotation — release before pressing or pulling.",
  "Foam Roll Quads": "Roll front of thigh from hip to knee. Pause on tight spots. Reduces anterior knee stress and improves squat depth.",
  "90/90 Hip Rotations": "Seated on floor, both knees at 90°. Rotate hips side to side, working each hip through internal and external rotation. Builds active hip mobility in all planes.",
  "Deadbugs": "Lying on back, arms to ceiling, knees at 90°. Extend opposite arm and leg toward floor while keeping lower back pressed down. Trains deep core stability.",
  "Cable External Rotations": "Cable at elbow height, elbow at 90° pinned to side. Rotate forearm outward against resistance. Directly strengthens the rotator cuff. Keep weight light.",
  "Ankle Dorsiflexion Rocks": "Kneeling, drive knee over toes without heel lifting. Improves ankle mobility critical for squat depth and athletic landing mechanics.",
  "Rear Foot Elevated Split Squat": "Rear foot on bench, front foot forward. Lower hips straight down, front shin near-vertical. Builds unilateral quad and glute strength. Tempo 3-1-1 = 3s down, 1s pause, 1s up.",
  "Single Leg RDL": "Stand on one leg, hinge at hip, dumbbell in opposite hand. Feel hamstring loading, return by driving hip forward. Builds posterior chain and challenges balance.",
  "Tibialis Raises": "Lean back against wall, heels on floor, raise toes toward shins. Strengthens tibialis anterior — prevents shin splints and protects the knee.",
  "Half-Kneeling Landmine Press": "One knee down, press the landmine bar overhead from shoulder. Challenges shoulder stability, anti-rotation core, and hip flexor length simultaneously.",
  "Chest Supported DB Row": "Prone on incline bench, row dumbbells to chest with pause at top. Removes lower back — pure upper back and rear delt work.",
  "Face Pull to External Rotation": "Cable at face height, pull to nose then externally rotate to goalpost. Combines rear delt, lower trap, and rotator cuff. Essential shoulder health.",
  "Pallof Press": "Cable or band at chest height, press straight out and hold. Anti-rotation core challenge — resists lateral pull. Keep hips square throughout.",
  // Warm-down exercises
  "Crocodile Breathing": "Lie prone, breathe into lower back and sides. Resets the diaphragm and parasympathetic nervous system. Full exhale, then inhale deep into the belly.",
  "Hip Flexor Stretch": "Half-kneeling, drive hip forward until stretch in front of rear hip. Critical after lower body work — tight hip flexors inhibit glutes and cause anterior pelvic tilt.",
  "Pec Doorway Stretch": "Arm at 90° in doorframe, step through. Releases anterior shoulder tightness built from pressing. Essential after any pushing work.",
  "Lat Stretch on Bench": "Kneel beside bench, arms extended on bench, sit hips back. Let lats lengthen under gravity. Decompresses thoracic spine after pulling.",
  "Hamstring Neural Glide": "Lying on back, extend leg and flex/point ankle repeatedly while holding behind the knee. Mobilizes the sciatic nerve and hamstring tissue simultaneously.",
  "Nasal Walk": "Slow walk breathing only through nose. Activates parasympathetic nervous system, drops heart rate, and locks in recovery state post-workout.",
  "Hamstring Glide": "Seated or lying, extend and flex leg while maintaining posterior pelvic tilt. Neural mobilization for hamstrings and sciatic nerve.",
  "Supine Breathing": "Lie on back, knees bent. Breathe 360° into ribcage — lateral, posterior, and anterior. Full parasympathetic downregulation.",
  "Adductor Rock": "Kneel in wide stance, rock side to side into each hip. Releases inner groin and hip capsule after heavy leg work.",
  "Nasal Breathing": "Slow, controlled nasal breathing for full parasympathetic recovery. Reduces cortisol and heart rate post-training.",
  "Pec Minor Release": "Thumbs or ball into pec minor (below collarbone near shoulder). Hold and breathe. Relieves anterior shoulder tightness from pressing.",
  "Trap Stretch": "Ear to shoulder, hand gently pulling head away. Full upper trap and levator scapulae release after heavy pulling or shrugging.",
  "Thoracic Breathing": "Hands on ribcage, breathe wide into thoracic spine. Reverses thoracic flexion from rowing. Resets posture.",
  "Child Pose Lat Stretch": "Arms extended overhead in child's pose, walk hands to one side. Deep lat and teres major stretch after pulling work.",
  "Passive Hang": "Relax completely from a bar. Decompresses shoulder joint and spine. Full shoulder traction — essential for long-term shoulder health.",
  // New Mon warmup
  "Adductors Roll": "Foam roll inner thigh from groin to knee. Slow passes, pause on knots. Reduces adductor tension before squats and hinges.",
  "Glutes Roll": "Foam roll glutes and piriformis. Cross one leg over, roll into the hip. Releases hip external rotators before lower body work.",
  "T-Spine Roll": "Foam roll thoracic spine, arms crossed. Pause at each vertebral segment. Restores extension mobility for squats and overhead work.",
  "Foot Roll": "Roll arch of foot on ball or roller. Releases plantar fascia and improves ankle mechanics for squatting.",
  "Dynamic Hip Openers": "Standing or on ground, cycle through hip flexion, abduction, extension. Lubricates hip joint through full ROM before loading.",
  "Ankle Pogo Rocks": "Rock forward and back over ankle in dorsiflexion. Warms up ankle mobility needed for deep squatting.",
  "T-Spine Rotations": "Kneeling or seated, rotate thoracic spine with hands behind head. Increases rotational mobility before compound lifts.",
  "Copenhagen Short Lever": "Side plank with bent top knee on bench, bottom leg free. Adductor isometric hold. Shorter lever than full Copenhagen — great entry point.",
  "Banded Deadbug": "Band anchored overhead, hold with both hands while performing deadbug leg extensions. Increases anti-extension demand on the core.",
  "Pogos": "Rapid small hops on balls of feet, minimal ground contact time. Activates Achilles-calf spring mechanism and CNS for power training.",
  "Box Drop Stick": "Step off box and stick the landing in athletic position. Trains force absorption and ankle-knee-hip alignment under reactive load.",
  "CMJ": "Counter-movement jump — dip and explode vertically. Measures lower body power output. Max effort, full reset between reps.",
  // New Tue warmup
  "Dead Hang Active": "Start in dead hang, then engage lats to depress and retract scapula without bending elbows. Teaches scapular control for pulling.",
  "Serratus Wall Slides": "Forearms on wall, slide arms overhead while protracting scapula. Activates serratus anterior — critical for shoulder blade upward rotation.",
  "Cable External Rotation": "Cable at elbow height, rotate arm externally keeping elbow fixed at side. Strengthens infraspinatus and teres minor for rotator cuff health.",
  "Explosive Empty Bar Bench": "Light bar, press with max intent on the concentric. Activates rate of force development before heavy pressing.",
  // New Wed warmup
  "Passive → Active Hang": "Begin fully relaxed hanging from bar, then engage lats and depress scapula. Trains the transition from passive shoulder position to active stability.",
  "Scap Pull-Ups": "Dead hang, retract and depress scapula to lift body slightly without bending elbows. Foundation of pull-up strength and shoulder health.",
  "Straight Arm Pulldown": "Cable or band, arms straight, pull from overhead to hips. Activates lats through full length before rows and pull-ups.",
  "Thoracic Extension": "Over roller or edge of bench, extend thoracic spine into extension. Counteracts flexion from pulling exercises and daily posture.",
  // New Thu/Fri warmup
  "Quads Roll": "Foam roll quadriceps from hip to knee. Prone position, slow passes. Reduces quad tension and improves knee tracking before squats.",
  "Couch Stretch": "Rear foot on wall behind you in kneeling position. Aggressive hip flexor and quad stretch. Critical for athletes with anterior hip tightness.",
  "Deep Squat Pry": "Hold weight for counterbalance, sink into deep squat and pry knees out with elbows. Opens hip capsule before loaded squatting.",
  "Ankle Rocks": "Kneel with foot flat, rock knee forward over toe repeatedly. Improves ankle dorsiflexion range needed for full depth squatting.",
  "Band Lateral Walk": "Band around ankles or knees, step sideways maintaining tension. Activates glute medius — key hip stabilizer for squats and split squats.",
  "Tempo Goblet Squat": "Slow 3-second descent with goblet hold. Teaches squat mechanics, builds positional strength, and activates full lower body before heavy work.",
  "Snap Down": "From quarter squat, rapidly pull feet into athletic stance. Trains reactive hip loading pattern that transfers to jump and sprint mechanics.",
  "Vertical Jump": "Max effort vertical jump. True CNS activation and lower body power expression. Full reset between reps.",
  "Snap Down → Split Jump": "Snap down to loaded position then explode into alternating split jump. High CNS demand reactive power exercise.",
  // New warmdown exercises
  "90-90 Breathing": "Lie on back, knees bent at 90°. Breathe wide into ribcage — posterior, lateral, and anterior expansion. Full exhale before each inhale. Resets diaphragm and fully downregulates the nervous system.",
  "Lat Bench Stretch": "Kneel beside bench, arms extended and stacked on bench, sink hips back toward heels. Let bodyweight open the lats under gravity. Decompresses thoracic spine and stretches the entire lat from hip to armpit.",
  "Calf Stretch": "Wall lean with straight rear leg, heel pressed firmly to floor. Full soleus and gastrocnemius release. Holds tight calves that accumulate during squats and walks. Both sides.",
  "Incline Treadmill Walk": "Low speed, slight incline, nasal breathing only. Forces heart rate down efficiently. The incline adds glute activation for active recovery without loading the CNS. Don't touch rails.",
  "Adductor Stretch": "Wide stance standing or sumo squat position, sink hips down and rock gently. Releases inner groin and hip capsule after heavy leg volume. Breathe into the stretch, don't force it.",
  "Slow Walk": "Easy walking at 50% pace. No destination. Heart rate drops naturally. Do not use your phone. Let the nervous system decompress through rhythmic movement.",
  "Band Shoulder Traction": "Loop band overhead, step away for tension, let shoulder be pulled into traction. Complete shoulder joint decompression after pressing. Breathe slowly — let the capsule open.",
  "Pec Minor Stretch": "Corner stretch or doorframe — arm at 90°, step through slowly. The pec minor drags the scapula forward after pressing. This reverses it. Hold and breathe. Both sides.",
  "Thoracic Extension Breathing": "Lie over foam roller at mid-back. Arms crossed or overhead. Inhale to expand ribcage into extension. Pause. Exhale and let gravity do the work. Reverses thoracic flexion from bench and daily posture.",
  "Deep Nasal Breathing": "Seated or supine. Slow 4-count inhale through nose, 6-count exhale. Full exhale activates parasympathetic system hardest. Drop shoulders on each exhale. Let the training session settle.",
  "Nasal Incline Walk": "Low speed incline treadmill walk, nasal breathing only. Triggers active recovery response — blood flow to muscles, parasympathetic activation, cortisol clearance. Don't let pace elevate breathing above comfortable nasal threshold.",
  "Deep Squat Hold Breathing": "Sink into deepest comfortable squat. Use counter-balance if needed. Breathe into hips and lower back. Passively releases quad, hip flexor, and adductor compression from heavy leg work.",
  "Supine Legs-Up Breathing": "Lie on back, legs up against wall. Gravity drains lactic acid from legs. Breathe slow and full. Parasympathetic reset. This position alone accelerates lower body recovery significantly."
};

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
  const [showDesc, setShowDesc] = useState(false);
  const desc = EX_DESC[ex.name];
  useEffect(() => {
    if (isActive && isWorking) setShowInline(true);
  }, [isActive, isWorking]);
  const rootRef = useCallback(el => {
    if (exRefs && el) exRefs.current[ex.name] = el;
  }, [ex.name]);
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      borderBottom: `1px solid rgba(255,255,255,0.06)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 0",
      minHeight: 52
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: W.textDim,
      width: 20,
      flexShrink: 0,
      textAlign: "center",
      fontFamily: "'DM Mono',monospace",
      fontWeight: 700,
      opacity: 0.5
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: F?.body || 13,
      fontWeight: 600,
      color: W.text,
      lineHeight: 1.25,
      letterSpacing: "-0.01em"
    }
  }, ex.name), desc && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowDesc(d => !d),
    style: {
      background: "transparent",
      border: "none",
      color: showDesc ? W.cyan : "rgba(255,255,255,0.2)",
      fontSize: 11,
      padding: "2px 4px",
      flexShrink: 0,
      lineHeight: 1,
      borderRadius: 4
    }
  }, "\u24D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: F?.label || 9,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginTop: 2,
      letterSpacing: "0.04em"
    }
  }, ex.detail), showDesc && desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textMid,
      fontFamily: "'DM Mono',monospace",
      marginTop: 6,
      lineHeight: 1.6,
      padding: "8px 10px",
      background: W.surface,
      borderRadius: 6,
      border: `1px solid ${W.border}`,
      animation: "fadeIn 0.15s ease both"
    }
  }, desc), (() => {
    const ents = getEntries(ex.name);
    if (!ents.length) return isWorking ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontFamily: "'DM Mono',monospace",
        color: "rgba(255,255,255,0.15)",
        marginTop: 3,
        letterSpacing: "0.1em",
        textTransform: "uppercase"
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
        color: W.textDim,
        marginTop: 3,
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.textDim,
        fontSize: 8,
        letterSpacing: "0.06em",
        textTransform: "uppercase"
      }
    }, "Last"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.cyan,
        fontWeight: 700,
        fontSize: 9
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,0.25)",
        fontSize: 8
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: W.text,
        fontWeight: 600,
        fontSize: 9
      }
    }, best.reps, "r"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,0.2)",
        fontSize: 8,
        marginLeft: 2
      }
    }, fmtDate(lastDate)));
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
  const [warmupTimerSecs, setWarmupTimerSecs] = useState(null); // null=not started
  const [warmupTimerTotal, setWarmupTimerTotal] = useState(0);
  const warmupTimerRef = useRef(null);
  const warmupEndRef = useRef(null);
  function startWarmupTimer() {
    if (warmupTimerRef.current) clearInterval(warmupTimerRef.current);
    const match = block.sub?.match(/(\d+)[–\-](\d+)/);
    const mins = match ? (parseInt(match[1]) + parseInt(match[2])) / 2 : 10;
    const totalSecs = Math.round(mins * 60);
    const endAt = Date.now() + totalSecs * 1000;
    warmupEndRef.current = endAt;
    setWarmupTimerTotal(totalSecs);
    setWarmupTimerSecs(totalSecs);
    warmupTimerRef.current = setInterval(() => {
      const rem = Math.max(0, Math.round((warmupEndRef.current - Date.now()) / 1000));
      setWarmupTimerSecs(rem);
      if (rem <= 0) {
        clearInterval(warmupTimerRef.current);
        haptic([40, 30, 80]);
      }
    }, 500);
  }
  function stopWarmupTimer() {
    if (warmupTimerRef.current) clearInterval(warmupTimerRef.current);
    setWarmupTimerSecs(null);
  }
  useEffect(() => () => {
    if (warmupTimerRef.current) clearInterval(warmupTimerRef.current);
  }, []);
  function fmtWarmup(s) {
    const m = Math.floor(s / 60),
      sec = s % 60;
    return `${m}:${String(sec).padStart(2, "0")}`;
  }
  const warmupPct = warmupTimerTotal > 0 && warmupTimerSecs != null ? warmupTimerSecs / warmupTimerTotal : 1;
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
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      background: open ? W.surfaceHi : "transparent",
      userSelect: "none",
      minHeight: 52,
      transition: "background 0.15s",
      borderLeft: !isWarmup ? `3px solid ${blockComplete ? W.cyan : accent}` : "3px solid transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, !isWarmup && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.3s",
      background: blockComplete ? `${W.cyan}22` : `${accent}18`,
      border: `1px solid ${blockComplete ? W.cyan : accent}55`,
      boxShadow: blockComplete ? `0 0 12px ${W.cyan}44` : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      fontWeight: 800,
      color: blockComplete ? W.cyan : accent,
      letterSpacing: "0.02em"
    }
  }, block.icon || "·")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isWarmup ? 11 : 13,
      fontWeight: 700,
      color: isWarmup ? warmupDone ? W.cyan : W.text : W.text,
      letterSpacing: "-0.01em",
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, block.title, blockComplete && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 7,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.25)`,
      borderRadius: 3,
      padding: "1px 6px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      animation: "setRowIn 0.3s ease both"
    }
  }, "DONE"), isWarmup && warmupDone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 7,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      background: W.cyanDim,
      border: `1px solid rgba(0,201,177,0.25)`,
      borderRadius: 3,
      padding: "1px 6px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      animation: "setRowIn 0.3s ease both"
    }
  }, "DONE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: warmupDone ? W.cyan : W.textDim,
      fontFamily: "'DM Mono',monospace",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginTop: 2
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
  }, warmupDone ? "✓ Done" : "Mark Done"), isWarmup && (warmupTimerSecs != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 28,
    height: 28,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 14,
    r: 11,
    fill: "none",
    stroke: "rgba(255,255,255,0.08)",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 14,
    r: 11,
    fill: "none",
    stroke: warmupTimerSecs === 0 ? W.cyan : accent,
    strokeWidth: 2.5,
    strokeDasharray: `${69.1 * warmupPct} 69.1`,
    strokeLinecap: "round",
    transform: "rotate(-90 14 14)",
    style: {
      transition: "stroke-dasharray 0.5s linear"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      color: warmupTimerSecs === 0 ? W.cyan : W.text,
      fontWeight: 700,
      minWidth: 36
    }
  }, fmtWarmup(warmupTimerSecs)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      stopWarmupTimer();
    },
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      padding: "4px 8px",
      borderRadius: 6,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textDim
    }
  }, "\u2715")) : /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      startWarmupTimer();
    },
    style: {
      fontSize: 9,
      fontFamily: "'DM Mono',monospace",
      padding: "4px 10px",
      borderRadius: 6,
      border: `1px solid ${W.border}`,
      background: "transparent",
      color: W.textDim,
      flexShrink: 0,
      letterSpacing: "0.05em"
    }
  }, "\u23F1 Start")), /*#__PURE__*/React.createElement("span", {
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
      padding: "8px 16px 14px",
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
  })), (ph.exercises || []).map((ex, i) => /*#__PURE__*/React.createElement(ExRow, {
    key: ex.name,
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
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, (block.exercises || []).map((ex, i) => /*#__PURE__*/React.createElement(ExRow, {
    key: ex.name,
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
// ── COOLDOWN DATA ─────────────────────────────────────────────────────────────
// All days now have warmdown sections — DAY_COOLDOWNS kept as empty fallback
const DAY_COOLDOWNS = {};
function computeEstimatedTime(day) {
  // Warmup duration — handles "12–15 min" and "12 min"
  const warmupMatch = day.warmup?.duration?.match(/(\d+)[–\-](\d+)/);
  const warmupSingle = day.warmup?.duration?.match(/^(\d+)\s*min/);
  const warmupMin = warmupMatch ? (parseInt(warmupMatch[1]) + parseInt(warmupMatch[2])) / 2 : warmupSingle ? parseInt(warmupSingle[1]) : 10;
  // Warmdown duration — replaces legacy DAY_COOLDOWNS for days that have warmdown
  const warmdownMatch = day.warmdown?.duration?.match(/(\d+)[–\-](\d+)/);
  const warmdownSingle = day.warmdown?.duration?.match(/^(\d+)\s*min/);
  const warmdownMin = warmdownMatch ? (parseInt(warmdownMatch[1]) + parseInt(warmdownMatch[2])) / 2 : warmdownSingle ? parseInt(warmdownSingle[1]) : 0;
  // Legacy cooldown fallback only for days without a warmdown
  const cooldownData = DAY_COOLDOWNS[day.id];
  const cooldownMatch = cooldownData?.duration?.match(/(\d+)[–\-](\d+)/);
  const cooldownMin = !day.warmdown && cooldownMatch ? (parseInt(cooldownMatch[1]) + parseInt(cooldownMatch[2])) / 2 : 0;
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
  const calcTotal = warmupMin + workMin + transitionMin + warmdownMin + cooldownMin;
  const histAvg = getHistoricalAvgMin(day.id);
  let finalMin = calcTotal;
  if (histAvg != null) {
    // 70% calculated, 30% historical average
    finalMin = calcTotal * 0.7 + histAvg * 0.3;
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
  const [showStartConfirm, setShowStartConfirm] = useState(false);
  const [elapsed, setElapsed] = useState(_cached?.elapsed || 0),
    [finalElapsed, setFinalElapsed] = useState(_cached?.finalElapsed || 0),
    [startTime, setStartTime] = useState(_cached?.startTime || null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSummary, setShowSummary] = useState(_cached?.showSummary || false);
  const [autoEndShown, setAutoEndShown] = useState(false);
  const [version, setVersion] = useState(0);
  const [warmupDone, setWarmupDone] = useState(false);
  const [warmdownDone, setWarmdownDone] = useState(false);
  const [cooldownDone, setCooldownDone] = useState(false);
  const cooldownData = DAY_COOLDOWNS[day.id];
  const cooldown = cooldownData ? {
    icon: "🧘",
    title: "Cool Down",
    sub: cooldownData.duration,
    phases: cooldownData.phases
  } : null;
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

  // Auto-clear ended state at 1am Sunday each week (weekly reset for all days)
  useEffect(() => {
    if (!ended) return;
    function checkSundayReset() {
      const now = new Date();
      if (now.getDay() === 0 && now.getHours() >= 1) {
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
      }
    }
    checkSundayReset();
    const id = setInterval(checkSundayReset, 60000);
    return () => clearInterval(id);
  }, [ended, day.id]);
  useEffect(() => {
    saveWorkoutState(day.id, {
      started,
      ended,
      elapsed,
      finalElapsed,
      startTime,
      showSummary
    });
  }, [started, ended, elapsed, finalElapsed, startTime, showSummary]);
  // Daily midnight reset: clear any ended workout state at start of new day
  useEffect(() => {
    function checkMidnightReset() {
      const cached = workoutStateCache[day.id];
      if (!cached || !cached.startTime) return;
      const startDate = new Date(cached.startTime).toDateString();
      const today = new Date().toDateString();
      if (startDate !== today) {
        // Workout started on a different calendar day — clear it
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
      }
    }
    checkMidnightReset();
    const id = setInterval(checkMidnightReset, 60000);
    return () => clearInterval(id);
  }, [day.id]);
  useEffect(() => {
    if (!started || ended || !startTime) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [started, ended, startTime]);
  const restEndRef = useRef(null); // timestamp when rest ends

  function startRest(exName, duration) {
    if (restRef.current) clearInterval(restRef.current);
    requestNotifPermission();
    const endAt = Date.now() + duration * 1000;
    restEndRef.current = endAt;
    setRestSecs(duration);
    setRestTotal(duration);
    setRestActive(true);
    setRestExName(exName);
    // Tell service worker to fire a notification after duration (works when app is backgrounded)
    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "SCHEDULE_REST",
        exName,
        delayMs: duration * 1000
      });
    }
    restRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.round((restEndRef.current - Date.now()) / 1000));
      setRestSecs(remaining);
      if (remaining <= 0) {
        clearInterval(restRef.current);
        setRestActive(false);
        restEndAlert(exName);
      }
    }, 500);
  }
  function dismissRest() {
    if (restRef.current) clearInterval(restRef.current);
    setRestActive(false);
    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "CANCEL_REST"
      });
    }
  }
  useEffect(() => () => {
    if (restRef.current) clearInterval(restRef.current);
  }, []);

  // Resume rest timer after app comes back from background
  useEffect(() => {
    function onVisible() {
      if (document.visibilityState === "visible" && restActive && restEndRef.current) {
        const remaining = Math.max(0, Math.round((restEndRef.current - Date.now()) / 1000));
        if (remaining <= 0) {
          if (restRef.current) clearInterval(restRef.current);
          setRestActive(false);
          restEndAlert();
        } else setRestSecs(remaining);
      }
    }
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [restActive]);
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
    onWorkoutComplete(day.id);
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
  const loggedToday = day.blocks.flatMap(b => b.exercises || []).filter(ex => getEntries(ex.name).some(e => e.date === todayS && (e.dayId === day.id || !e.dayId))).length;
  const totalEx = day.blocks.flatMap(b => b.exercises || []).length;
  const warmup = {
    icon: "🔥",
    title: "Warmup",
    sub: day.warmup?.duration || "",
    phases: day.warmup?.phases || []
  };
  const warmdownData = day.warmdown;
  const warmdown = warmdownData ? {
    icon: "🧘",
    title: "Warm Down",
    sub: warmdownData.duration || "",
    phases: warmdownData.phases || []
  } : null;
  const saved = () => setVersion(v => v + 1);
  // Gate auto end-popup: blocks must be done AND warmdown must be ticked off (if present)
  const warmdownGate = !warmdown || warmdownDone;
  useEffect(() => {
    if (allBlocksComplete && warmdownGate && !autoEndShown) {
      setAutoEndShown(true);
      haptic([40, 30, 60, 30, 80]);
      setTimeout(() => setShowEndConfirm(true), 600);
    }
  }, [allBlocksComplete, warmdownGate, version]);
  // Dynamic estTime: recompute whenever rest settings change
  useEffect(() => {
    setEstTime(computeEstimatedTime(day));
  }, [restVersion]);
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: "0 auto",
      padding: "0 0 calc(env(safe-area-inset-bottom) + 90px)"
    },
    className: "ai"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: `linear-gradient(90deg,${day.accent},${day.accent}66,transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "calc(env(safe-area-inset-top) + 16px) 16px 16px",
      background: `${day.accent}07`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      padding: "3px 9px",
      borderRadius: 4,
      background: `${day.accent}18`,
      color: day.accent,
      letterSpacing: "0.2em",
      fontWeight: 700,
      textTransform: "uppercase",
      border: `1px solid ${day.accent}33`
    }
  }, day.label), started ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontFamily: "'DM Mono',monospace",
      color: W.cyan,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, "\u23F1 ", fmtElapsed(elapsed)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.03em"
    }
  }, estTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
      marginBottom: 3
    }
  }, day.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      marginBottom: 12,
      letterSpacing: "0.03em"
    }
  }, day.focus), prev || next ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
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
      color: W.textDim
    }
  }, "\u2190 ", prev.label), prev && next && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.border,
      margin: "0 4px"
    }
  }, "\xB7"), next && /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textDim
    }
  }, next.label, " \u2192")) : null, !started && /*#__PURE__*/React.createElement(TapButton, {
    onClick: () => {
      haptic(20);
      setShowStartConfirm(true);
    },
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
  }, "Start Workout"), started && !ended && warmdownGate && /*#__PURE__*/React.createElement(TapButton, {
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
  }, "End Workout"), started && !ended && !warmdownGate && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      textAlign: "center",
      padding: "13px 0",
      borderRadius: 10,
      border: `1px solid ${W.border}`,
      color: W.textDim,
      fontSize: 12,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.05em"
    }
  }, "\u2193 Complete warm down to finish"), ended && /*#__PURE__*/React.createElement("div", {
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
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 0",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Warm Up"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 0",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: day.accent,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Main Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  })), day.blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.title,
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
  })))), warmdown && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 0",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Warm Down"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "1px",
      background: W.border
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: started && warmdownDone ? 0.35 : 1,
      transition: "opacity 0.4s"
    }
  }, /*#__PURE__*/React.createElement(Block, {
    block: warmdown,
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
    warmupDone: warmdownDone,
    onWarmupDone: () => setWarmdownDone(d => !d)
  }))), cooldown && ended && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: cooldownDone ? 0.35 : 1,
      transition: "opacity 0.4s",
      borderTop: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement(Block, {
    block: cooldown,
    accent: W.cyan,
    onHistory: onHistory,
    isWarmup: true,
    isActive: false,
    onStartRest: startRest,
    onSaved: saved,
    bodyweight: bodyweight,
    fontScale: fontScale,
    dayId: day.id,
    version: version,
    warmupDone: cooldownDone,
    onWarmupDone: () => setCooldownDone(d => !d)
  })), cooldown && !ended && started && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.4,
      borderTop: `1px solid ${W.border}`
    }
  }, /*#__PURE__*/React.createElement(Block, {
    block: cooldown,
    accent: W.cyan,
    onHistory: onHistory,
    isWarmup: true,
    isActive: false,
    onStartRest: startRest,
    onSaved: saved,
    bodyweight: bodyweight,
    fontScale: fontScale,
    dayId: day.id,
    version: version,
    warmupDone: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 16px"
    }
  }, prev ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(prev.id),
    style: {
      flex: 1,
      background: W.surface,
      border: `1px solid ${W.border}`,
      borderRadius: 10,
      padding: "10px 12px",
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textDim,
      fontSize: 14
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 1
    }
  }, "Prev"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.01em"
    }
  }, prev.label))) : /*#__PURE__*/React.createElement("div", {
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
      padding: "10px 12px",
      cursor: "pointer",
      textAlign: "right",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: W.textDim,
      fontFamily: "'DM Mono',monospace",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 1
    }
  }, "Next"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: W.text,
      letterSpacing: "-0.01em"
    }
  }, next.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: W.textDim,
      fontSize: 14
    }
  }, "\u2192")) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), restActive && /*#__PURE__*/React.createElement(RestTimerBubble, {
    seconds: restSecs,
    total: restTotal,
    onDismiss: dismissRest,
    exName: restExName
  }), showStartConfirm && /*#__PURE__*/React.createElement(StartWorkoutModal, {
    day: day,
    estTime: estTime,
    onConfirm: () => {
      setShowStartConfirm(false);
      handleStart();
    },
    onCancel: () => setShowStartConfirm(false)
  }), showEndConfirm && /*#__PURE__*/React.createElement(EndWorkoutModal, {
    day: day,
    elapsed: elapsed,
    onConfirm: handleEndConfirm,
    onCancel: () => setShowEndConfirm(false)
  }), showSummary && /*#__PURE__*/React.createElement(WorkoutSummaryModal, {
    day: day,
    elapsed: finalElapsed,
    setsLogged: loggedToday,
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
function App() {
  const [page, setPage] = useState("home");
  const [historyModal, setHistoryModal] = useState(null);
  const [showProg, setShowProg] = useState(false);
  const [version, setVersion] = useState(0);
  const [deleteDate, setDeleteDate] = useState(null);
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
  const [showReadiness, setShowReadiness] = useState(false);
  const [readinessScore, setReadinessScore] = useState(null);
  const [readinessDate, setReadinessDate] = useState(null);
  const [showLastRep, setShowLastRep] = useState(null); // exName
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
      // Load today's readiness if already checked in
      const todayR = readinessStore.find(r => r.date === todayStr());
      if (todayR) {
        setReadinessScore(todayR.score);
        setReadinessDate(todayR.date);
      }
      setLoaded(true);
    });
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js";
    document.head.appendChild(s);
    const interval = setInterval(() => {
      setThuCompletedWeek(prev => {
        refreshVisibility(prev);
        return prev;
      });
    }, 60000);
    // Reset readiness score when app is reopened on a new day (stays open overnight)
    function checkReadinessReset() {
      setReadinessDate(d => {
        if (d && d !== todayStr()) {
          setReadinessScore(null);
          return null;
        }
        return d;
      });
    }
    document.addEventListener("visibilitychange", checkReadinessReset);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", checkReadinessReset);
    };
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
  // Global page order for swipe navigation
  const allPages = ["home", ...visibleDayIds, "stats", "settings"];
  const globalSwipe = useSwipe(useCallback(() => {
    const i = allPages.indexOf(page);
    if (i < allPages.length - 1) setPage(allPages[i + 1]);
  }, [page, allPages.join(",")]), useCallback(() => {
    const i = allPages.indexOf(page);
    if (i > 0) setPage(allPages[i - 1]);
  }, [page, allPages.join(",")]));
  const currentDay = DAYS.find(d => d.id === page);
  const bodyweight = getLatestBW();
  useEffect(() => {
    if (page !== "home" && page !== "settings" && page !== "stats" && !visibleDayIds.includes(page)) setPage("home");
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
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: `2px solid ${W.border}`,
      borderTopColor: W.cyan,
      animation: "spin 0.8s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'DM Mono',monospace",
      color: W.textDim,
      fontSize: 9,
      letterSpacing: "0.35em",
      textTransform: "uppercase"
    }
  }, "Loading"));
  return /*#__PURE__*/React.createElement("div", _extends({}, globalSwipe, {
    style: {
      background: W.bg,
      minHeight: "100vh",
      color: W.text,
      fontFamily: "'DM Sans',sans-serif",
      touchAction: "pan-y"
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
        html{font-size:16px;height:100%;}
        body{overscroll-behavior-y:none;background:#0c0a09;height:100%;}
        input,button{font-family:'DM Sans',sans-serif;-webkit-appearance:none;appearance:none;font-size:16px;}
        input{color-scheme:dark;}
        button{cursor:pointer;user-select:none;}
        ::-webkit-scrollbar{width:2px;height:2px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#1e1e1e;border-radius:2px;}
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}
        ::selection{background:rgba(0,201,177,0.2);color:#f0f0f0;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
        @keyframes setRowIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        @keyframes blockOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        @keyframes prFlash{0%{opacity:1}60%{opacity:0.8}100%{opacity:0}}
        @keyframes tapPop{0%{transform:scale(1)}35%{transform:scale(0.87)}100%{transform:scale(1)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .au{animation:fadeUp 0.22s cubic-bezier(0.16,1,0.3,1) both;}
        .ai{animation:fadeIn 0.18s ease both;}
        .as{animation:scaleIn 0.2s cubic-bezier(0.16,1,0.3,1) both;}
        .tap{animation:tapPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both;}
      `), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    version: version,
    bwVersion: bwVersion,
    setPage: setPage,
    onDeleteDate: (d, dId = null) => setDeleteDate({
      date: d,
      dayId: dId
    }),
    onBWUpdate: () => setBwVersion(v => v + 1),
    onShowReadiness: () => setShowReadiness(true),
    readinessScore: readinessScore
  }) : page === "stats" ? /*#__PURE__*/React.createElement(StatsPage, {
    version: version
  }) : page === "settings" ? /*#__PURE__*/React.createElement(RestSettingsPage, {
    onRestUpdate: () => {
      saved();
      setRestVersion(v => v + 1);
    },
    fontScale: fontScale,
    onFontScaleChange: handleFontScaleChange
  }) : currentDay && /*#__PURE__*/React.createElement(DayPage, {
    key: currentDay.id,
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
  }), showReadiness && /*#__PURE__*/React.createElement(ReadinessModal, {
    onComplete: (sleep, stress, soreness, score) => {
      logReadiness(sleep, stress, soreness);
      setReadinessScore(score);
      setReadinessDate(todayStr());
      setShowReadiness(false);
    },
    onSkip: () => setShowReadiness(false)
  }), showLastRep && /*#__PURE__*/React.createElement(LastRepModal, {
    exName: showLastRep,
    onClose: () => setShowLastRep(null)
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
}

// Mount the app
(function () {
  const root = document.getElementById('root');
  if (root && typeof ReactDOM !== 'undefined') {
    if (ReactDOM.createRoot) {
      ReactDOM.createRoot(root).render(React.createElement(App));
    } else {
      ReactDOM.render(React.createElement(App), root);
    }
  }
})();
