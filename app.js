(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.workoutTracker = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = App;
  function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  // ── SWIPE HOOK ────────────────────────────────────────────────────────────────
  function useSwipe(onLeft, onRight) {
    var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    var startX = (0, _react.useRef)(null);
    var startY = (0, _react.useRef)(null);
    var onTouchStart = (0, _react.useCallback)(function (e) {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    }, []);
    var onTouchEnd = (0, _react.useCallback)(function (e) {
      if (startX.current === null) return;
      var dx = e.changedTouches[0].clientX - startX.current;
      var dy = e.changedTouches[0].clientY - startY.current;
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) onLeft();else onRight();
      }
      startX.current = null;
      startY.current = null;
    }, [onLeft, onRight, threshold]);
    return {
      onTouchStart: onTouchStart,
      onTouchEnd: onTouchEnd
    };
  }

  // ── TAP ANIMATION HOOK ────────────────────────────────────────────────────────
  function useTap() {
    var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      tapping = _useState2[0],
      setTapping = _useState2[1];
    var timerRef = (0, _react.useRef)(null);
    var trigger = (0, _react.useCallback)(function () {
      if (timerRef.current) clearTimeout(timerRef.current);
      setTapping(false);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          setTapping(true);
          timerRef.current = setTimeout(function () {
            return setTapping(false);
          }, 260);
        });
      });
    }, []);
    (0, _react.useEffect)(function () {
      return function () {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);
    return [tapping ? "tap" : "", trigger];
  }

  // ── CONSTANTS ─────────────────────────────────────────────────────────────────
  var C = {
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
  var W = {
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
  var GROUP_COLORS = {
    CNS: "#f5c842",
    Legs: "#00c9b1",
    Push: "#ff7043",
    Pull: "#4fc3f7",
    Core: "#ab97e8",
    Stability: "#80cbc4"
  };
  var GROUPS = ["CNS", "Legs", "Push", "Pull", "Core", "Stability"];
  var EX_GROUP = {
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
  var LIGHT_INTENT = new Set(["Cuban Press", "Cuban Press (Sunday)", "Band Pull-Aparts", "Band Pull-Aparts (overhand)", "Band Pull-Aparts (Sunday)", "Light Cable External Rotation", "Side-Lying External Rotation (DB)", "Rack Hip CARs", "Wall Angels", "Scapular Wall Slides", "Scapular Pull-Ups", "Dead Hangs (passive → active)", "Hip 90/90 Stretch", "Ankle Circles + Dorsiflexion Wall Drill", "Thoracic Extension over Roller", "Pec Minor Doorway Stretch", "Thoracic Rotation (Kneeling)", "Thoracic Cat-Cow", "Diaphragmatic Breathing", "World's Greatest Stretch", "Shoulder CARs", "Cable Y Raises", "Band Clamshells", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "SL Glute Bridge", "Nordic Hamstring Curl ISO", "Copenhagen Plank", "V-Ups", "Hanging Leg Raises", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Snap Down x3 (sub-max)", "MB Slam x3 (easy)", "Force Plate CMJ", "Empty Bar Bench Press", "50–60% Bench Press", "Light Trap Bar DL Ramp", "Lat Stretch (Bar Hang)", "Thoracic Cat-Cow", "Hang Clean", "MB Slam → MB Lateral Toss", "Snap Down → Split Squat Jump", "Suitcase Carry", "Elevated Band Hip Flexor/Glute", "Rear Delt Cable Fly"]);
  var PROGRESSIVE_OVERLOAD_EX = new Set([
  // Barbell compounds
  "BB Back Squat", "BB Bench Press", "BB Split Squat", "Trap Bar Deadlift", "RDL", "BB Row", "Barbell Zercher Curls",
  // Dumbbell compounds
  "DB Incline Bench Press", "DB Incline Bench", "SA DB Row", "SA DB Shoulder Press", "Incline Dumbbell Curl",
  // Cable / machine isolation — respond well to progressive overload
  "Straight Bar Pulldown", "Lat Pulldown", "Chest Supported Row", "Overhead DB Tricep Extension", "DB Lateral Raises", "Hammer Curl",
  // Weighted bodyweight
  "Pull-Ups", "Bulgarian Split Squat"]);
  var BODYWEIGHT_EX = new Set(["Pull-Ups", "Hanging Leg Raises", "V-Ups", "Copenhagen Plank", "Dead Hangs (passive → active)", "Scapular Pull-Ups", "Bodyweight Squat to Box", "Box Drop → Stick Landing", "Snap Down x3 (sub-max)", "Snap Down → Split Squat Jump", "Force Plate CMJ", "Nordic Hamstring Curl ISO", "SL Glute Bridge", "Glute Bridge Hold", "Glute Bridge + ISO Hold", "World's Greatest Stretch", "Shoulder CARs", "Diaphragmatic Breathing", "Hip 90/90 Stretch", "Thoracic Cat-Cow", "Thoracic Rotation (Kneeling)", "Pec Minor Doorway Stretch", "Thoracic Extension over Roller", "Ankle Circles + Dorsiflexion Wall Drill", "Wall Angels", "Scapular Wall Slides", "Lat Stretch (Bar Hang)", "MB Slam x3 (easy)"]);
  // ── FONT SCALE ────────────────────────────────────────────────────────────────
  var FS = {
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
  var BADGES = {
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
  var LOWER_HYP_DAY = {
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
  var DAYS = [{
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
  }, _objectSpread(_objectSpread({
    id: "thu",
    label: "Thursday"
  }, LOWER_HYP_DAY), {}, {
    accent: C.thu
  }), _objectSpread(_objectSpread({
    id: "fri",
    label: "Friday"
  }, LOWER_HYP_DAY), {}, {
    accent: C.fri
  })];

  // ── STORAGE ───────────────────────────────────────────────────────────────────
  var STORE_KEY = "wt_entries_v1";
  var BLOCK_STATE_KEY = "wt_block_state_v1";
  // Module-level save status — components can subscribe via a version bump
  var saveErrorCallback = null;
  var lastSaveStatus = "ok"; // "ok" | "error"
  function reportSaveStatus(ok) {
    lastSaveStatus = ok ? "ok" : "error";
    if (saveErrorCallback) saveErrorCallback(ok);
  }
  // In-session workout state cache — persists across navigation within same session
  var workoutStateCache = {};
  function saveWorkoutState(dayId, state) {
    workoutStateCache[dayId] = _objectSpread(_objectSpread({}, state), {}, {
      savedAt: Date.now()
    });
    // Also persist to storage so state survives page reloads mid-workout
    try {
      window.storage.set("wt_wstate_" + dayId, JSON.stringify(_objectSpread(_objectSpread({}, state), {}, {
        savedAt: Date.now()
      })));
    } catch (e) {}
  }
  function loadWorkoutState(dayId) {
    // Check in-memory cache first
    var s = workoutStateCache[dayId];
    if (s) {
      if (Date.now() - s.savedAt > 4 * 60 * 60 * 1000) {
        delete workoutStateCache[dayId];
      } else return s;
    }
    // Fallback: try storage (handles page reloads mid-workout) — synchronous not possible,
    // so we pre-load into cache during app init via loadWorkoutStateFromStorage()
    return null;
  }
  function loadWorkoutStateFromStorage(_x) {
    return _loadWorkoutStateFromStorage.apply(this, arguments);
  }
  function _loadWorkoutStateFromStorage() {
    _loadWorkoutStateFromStorage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dayId) {
      var r, s, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return window.storage.get("wt_wstate_" + dayId);
          case 1:
            r = _context4.v;
            if (r !== null && r !== void 0 && r.value) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, null);
          case 2:
            s = JSON.parse(r.value);
            if (!(!s || Date.now() - s.savedAt > 4 * 60 * 60 * 1000)) {
              _context4.n = 3;
              break;
            }
            window.storage.delete("wt_wstate_" + dayId).catch(function () {});
            return _context4.a(2, null);
          case 3:
            workoutStateCache[dayId] = s;
            return _context4.a(2, s);
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            return _context4.a(2, null);
        }
      }, _callee4, null, [[0, 4]]);
    }));
    return _loadWorkoutStateFromStorage.apply(this, arguments);
  }
  var blockStateStore = {};
  function loadBlockState() {
    return _loadBlockState.apply(this, arguments);
  }
  function _loadBlockState() {
    _loadBlockState = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var r, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return window.storage.get(BLOCK_STATE_KEY);
          case 1:
            r = _context5.v;
            if (r !== null && r !== void 0 && r.value) blockStateStore = JSON.parse(r.value);
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return _loadBlockState.apply(this, arguments);
  }
  function saveBlockState() {
    return _saveBlockState.apply(this, arguments);
  }
  function _saveBlockState() {
    _saveBlockState = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return window.storage.set(BLOCK_STATE_KEY, JSON.stringify(blockStateStore));
          case 1:
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return _saveBlockState.apply(this, arguments);
  }
  function getBlockOpen(dayId, blockTitle) {
    var k = dayId + "_" + blockTitle;
    return k in blockStateStore ? blockStateStore[k] : true;
  }
  function setBlockOpen(dayId, blockTitle, val) {
    blockStateStore[dayId + "_" + blockTitle] = val;
    saveBlockState();
  }
  var THUFI_KEY = "wt_thufri_v1";
  var BW_KEY = "wt_bodyweight_v1";
  var REST_KEY = "wt_rest_v1";
  var SESSIONS_KEY = "wt_sessions_v1";
  var FONT_KEY = "wt_font_scale_v1";
  var BW_RESET_KEY = "wt_bw_reset_v3";
  var memStore = {};
  var bwStore = [];
  var restStore = {};
  var sessionsStore = [];
  var fontScaleStore = "md";
  function loadFontScale() {
    return _loadFontScale.apply(this, arguments);
  }
  function _loadFontScale() {
    _loadFontScale = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var r, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            _context7.n = 1;
            return window.storage.get(FONT_KEY);
          case 1:
            r = _context7.v;
            if (r !== null && r !== void 0 && r.value) fontScaleStore = r.value;
            _context7.n = 3;
            break;
          case 2:
            _context7.p = 2;
            _t7 = _context7.v;
          case 3:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 2]]);
    }));
    return _loadFontScale.apply(this, arguments);
  }
  function saveFontScale(_x2) {
    return _saveFontScale.apply(this, arguments);
  }
  function _saveFontScale() {
    _saveFontScale = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(v) {
      var _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            fontScaleStore = v;
            _context8.p = 1;
            _context8.n = 2;
            return window.storage.set(FONT_KEY, v);
          case 2:
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t8 = _context8.v;
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return _saveFontScale.apply(this, arguments);
  }
  function loadAllFromStorage() {
    return _loadAllFromStorage.apply(this, arguments);
  }
  function _loadAllFromStorage() {
    _loadAllFromStorage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var r, seed, _r2, p, _r3, _p, _r4, _p2, _r5, _p3, _t9, _t0, _t1, _t10, _t11;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.n = 1;
            return loadFontScale();
          case 1:
            _context9.n = 2;
            return loadBlockState();
          case 2:
            _context9.n = 3;
            return Promise.all(DAYS.map(function (d) {
              return loadWorkoutStateFromStorage(d.id);
            }));
          case 3:
            _context9.p = 3;
            _context9.n = 4;
            return window.storage.get(BW_RESET_KEY);
          case 4:
            r = _context9.v;
            if (r !== null && r !== void 0 && r.value) {
              _context9.n = 6;
              break;
            }
            seed = [{
              date: "2026-03-10",
              weight: 195
            }];
            bwStore = seed;
            _context9.n = 5;
            return window.storage.set(BW_KEY, JSON.stringify(seed));
          case 5:
            _context9.n = 6;
            return window.storage.set(BW_RESET_KEY, "done");
          case 6:
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t9 = _context9.v;
          case 8:
            _context9.p = 8;
            _context9.n = 9;
            return window.storage.get(STORE_KEY);
          case 9:
            _r2 = _context9.v;
            if (_r2 !== null && _r2 !== void 0 && _r2.value) {
              p = JSON.parse(_r2.value);
              if (p && _typeof(p) === 'object' && !Array.isArray(p)) {
                Object.keys(p).forEach(function (k) {
                  if (Array.isArray(p[k])) memStore[k] = _toConsumableArray(p[k]);
                });
              }
            }
            _context9.n = 11;
            break;
          case 10:
            _context9.p = 10;
            _t0 = _context9.v;
            console.error('wt: corrupt entries store', _t0);
          case 11:
            _context9.p = 11;
            _context9.n = 12;
            return window.storage.get(BW_KEY);
          case 12:
            _r3 = _context9.v;
            if (_r3 !== null && _r3 !== void 0 && _r3.value) {
              _p = JSON.parse(_r3.value);
              if (Array.isArray(_p)) bwStore = _p;
            }
            _context9.n = 14;
            break;
          case 13:
            _context9.p = 13;
            _t1 = _context9.v;
            console.error('wt: corrupt bwStore', _t1);
          case 14:
            _context9.p = 14;
            _context9.n = 15;
            return window.storage.get(REST_KEY);
          case 15:
            _r4 = _context9.v;
            if (_r4 !== null && _r4 !== void 0 && _r4.value) {
              _p2 = JSON.parse(_r4.value);
              if (_p2 && _typeof(_p2) === 'object' && !Array.isArray(_p2)) restStore = _p2;
            }
            _context9.n = 17;
            break;
          case 16:
            _context9.p = 16;
            _t10 = _context9.v;
            console.error('wt: corrupt restStore', _t10);
          case 17:
            _context9.p = 17;
            _context9.n = 18;
            return window.storage.get(SESSIONS_KEY);
          case 18:
            _r5 = _context9.v;
            if (_r5 !== null && _r5 !== void 0 && _r5.value) {
              _p3 = JSON.parse(_r5.value);
              if (Array.isArray(_p3)) sessionsStore = _p3;
            }
            _context9.n = 20;
            break;
          case 19:
            _context9.p = 19;
            _t11 = _context9.v;
            console.error('wt: corrupt sessionsStore', _t11);
          case 20:
            return _context9.a(2);
        }
      }, _callee9, null, [[17, 19], [14, 16], [11, 13], [8, 10], [3, 7]]);
    }));
    return _loadAllFromStorage.apply(this, arguments);
  }
  function saveEntries() {
    return _saveEntries.apply(this, arguments);
  }
  function _saveEntries() {
    _saveEntries = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var r, _t12;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(Object.keys(memStore).length === 0)) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            _context0.n = 2;
            return window.storage.set(STORE_KEY, JSON.stringify(memStore));
          case 2:
            r = _context0.v;
            if (!r) {
              console.error("wt: saveEntries returned null");
              reportSaveStatus(false);
            } else reportSaveStatus(true);
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t12 = _context0.v;
            console.error("wt: saveEntries failed", _t12);
            reportSaveStatus(false);
          case 4:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 3]]);
    }));
    return _saveEntries.apply(this, arguments);
  }
  function saveBW() {
    return _saveBW.apply(this, arguments);
  }
  function _saveBW() {
    _saveBW = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _t13;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            _context1.n = 1;
            return window.storage.set(BW_KEY, JSON.stringify(bwStore));
          case 1:
            _context1.n = 3;
            break;
          case 2:
            _context1.p = 2;
            _t13 = _context1.v;
            console.error("wt: saveBW failed", _t13);
          case 3:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 2]]);
    }));
    return _saveBW.apply(this, arguments);
  }
  function saveRest() {
    return _saveRest.apply(this, arguments);
  }
  function _saveRest() {
    _saveRest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var _t14;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            _context10.n = 1;
            return window.storage.set(REST_KEY, JSON.stringify(restStore));
          case 1:
            _context10.n = 3;
            break;
          case 2:
            _context10.p = 2;
            _t14 = _context10.v;
          case 3:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 2]]);
    }));
    return _saveRest.apply(this, arguments);
  }
  function saveSessions() {
    return _saveSessions.apply(this, arguments);
  }
  function _saveSessions() {
    _saveSessions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var val, r, _t15;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            val = JSON.stringify(sessionsStore);
            _context11.n = 1;
            return window.storage.set(SESSIONS_KEY, val);
          case 1:
            r = _context11.v;
            if (!r) console.error("wt: saveSessions write returned null");
            _context11.n = 3;
            break;
          case 2:
            _context11.p = 2;
            _t15 = _context11.v;
            console.error("wt: saveSessions failed", _t15);
          case 3:
            return _context11.a(2);
        }
      }, _callee11, null, [[0, 2]]);
    }));
    return _saveSessions.apply(this, arguments);
  }
  function getEntries(ex) {
    if (!memStore[ex]) return [];
    return memStore[ex].filter(function (e) {
      return e && _typeof(e) === "object" && e.date && e.weight != null;
    });
  }
  function setEntries(ex, arr) {
    memStore[ex] = _toConsumableArray(arr);
    saveEntries();
  }
  function delEntriesByDate(date) {
    var dayId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    Object.keys(memStore).forEach(function (ex) {
      memStore[ex] = (memStore[ex] || []).filter(function (e) {
        if (e.date !== date) return true;
        // When scoped by dayId: only delete entries that explicitly match that dayId
        // Entries without a dayId are preserved (legacy data)
        if (dayId) return !e.dayId || e.dayId !== dayId;
        return false;
      });
    });
    saveEntries();
  }
  function delSessionByDate(date) {
    var dayId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    sessionsStore = sessionsStore.filter(function (s) {
      return s.date !== date || dayId && s.dayId !== dayId;
    });
    saveSessions();
  }
  function getLastEntry(ex) {
    var e = getEntries(ex);
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
    var day = DAYS.find(function (d) {
      return d.id === dayId;
    });
    if (!day) return null;
    var allDates = day.blocks.flatMap(function (b) {
      return b.exercises || [];
    }).flatMap(function (ex) {
      return getEntries(ex.name).map(function (e) {
        return e.date;
      });
    });
    return allDates.length ? allDates.sort().pop() : null;
  }
  function logBW(weight) {
    var today = todayStr();
    bwStore = bwStore.filter(function (e) {
      return e.date !== today;
    });
    bwStore.push({
      date: today,
      weight: parseFloat(weight)
    });
    bwStore.sort(function (a, b) {
      return a.date.localeCompare(b.date);
    });
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
    var saves = [];
    if (Object.keys(memStore).length > 0) saves.push(window.storage.set(STORE_KEY, JSON.stringify(memStore)).catch(function () {}));
    if (bwStore.length > 0) saves.push(window.storage.set(BW_KEY, JSON.stringify(bwStore)).catch(function () {}));
    if (Object.keys(restStore).length > 0) saves.push(window.storage.set(REST_KEY, JSON.stringify(restStore)).catch(function () {}));
    if (sessionsStore.length > 0) saves.push(window.storage.set(SESSIONS_KEY, JSON.stringify(sessionsStore)).catch(function () {}));
    return Promise.all(saves);
  }
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      flushAllStores();
    }
  });
  window.addEventListener("pagehide", function () {
    flushAllStores();
  });
  function haptic() {
    var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    try {
      var _navigator$vibrate, _navigator;
      (_navigator$vibrate = (_navigator = navigator).vibrate) === null || _navigator$vibrate === void 0 || _navigator$vibrate.call(_navigator, pattern);
    } catch (e) {}
  }
  function playBeep() {
    var freq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 880;
    var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.18;
    var vol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.4;
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "sine";
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var g = ctx.createGain();
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      var o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = freq;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur + 0.05);
      setTimeout(function () {
        return ctx.close();
      }, 500);
    } catch (e) {}
  }
  function restEndAlert() {
    haptic([60, 40, 60, 40, 120]);
    setTimeout(function () {
      return playBeep(660, 0.12);
    }, 0);
    setTimeout(function () {
      return playBeep(780, 0.12);
    }, 140);
    setTimeout(function () {
      return playBeep(920, 0.22);
    }, 280);
  }
  function calc1RM(w, r) {
    if (!w || !r || r <= 0) return 0;
    return Math.round(w * (1 + r / 30));
  }
  function isPR(entries, idx) {
    if (!entries.length || !entries[idx]) return false;
    return entries[idx].weight >= entries.reduce(function (b, e) {
      return Math.max(b, e.weight);
    }, 0) && (idx === 0 || entries[idx].weight > entries.slice(0, idx).reduce(function (b, e) {
      return Math.max(b, e.weight);
    }, 0));
  }
  var BARBELL_EX = new Set(["BB Back Squat", "BB Bench Press", "Trap Bar Deadlift", "RDL", "BB Row", "BB Split Squat", "Barbell Zercher Curls"]);
  function getOverloadSug(entries) {
    var _lastDateEntries$;
    var exName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (exName && !PROGRESSIVE_OVERLOAD_EX.has(exName)) return null;
    if (!entries.length) return null;
    var last = entries[entries.length - 1];
    var best = entries.reduce(function (b, e) {
      return e.weight > b.weight ? e : b;
    }, entries[0]);
    // Plate increment: barbells get 5lb jumps heavy / 2.5 light; everything else 2.5
    var isBarbell = BARBELL_EX.has(exName);
    var inc = isBarbell && best.weight >= 95 ? 5 : 2.5;
    // Double-progression: check if last session hit all sets at target reps
    var lastDateEntries = entries.filter(function (e) {
      return e.date === last.date;
    });
    var avgReps = lastDateEntries.reduce(function (s, e) {
      return s + e.reps;
    }, 0) / lastDateEntries.length;
    // Target = first (freshest) set reps of last session — the set done with most energy
    var targetReps = ((_lastDateEntries$ = lastDateEntries[0]) === null || _lastDateEntries$ === void 0 ? void 0 : _lastDateEntries$.reps) || last.reps;
    // Ready to progress if avg met or exceeded the target (all sets hit the top end)
    if (avgReps >= targetReps) {
      return {
        last: "".concat(last.weight, "lbs \xD7 ").concat(last.reps, "r"),
        next: "".concat(best.weight + inc, "lbs"),
        inc: "+".concat(inc, "lbs")
      };
    }
    // Otherwise hold weight, focus on hitting reps
    return {
      last: "".concat(last.weight, "lbs \xD7 ").concat(last.reps, "r"),
      next: "".concat(last.weight, "lbs"),
      inc: "same",
      hint: "hit your reps first"
    };
  }
  function fmtDate(d) {
    try {
      var _d$split = d.split("-"),
        _d$split2 = _slicedToArray(_d$split, 3),
        m = _d$split2[1],
        day = _d$split2[2];
      var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+m - 1];
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
    var list = [];
    DAYS.forEach(function (day) {
      return day.blocks.forEach(function (b) {
        return (b.exercises || []).forEach(function (ex) {
          return list.push(_objectSpread(_objectSpread({}, ex), {}, {
            dayId: day.id,
            dayAccent: day.accent
          }));
        });
      });
    });
    return list;
  }
  function getWeekRange() {
    var weeksAgo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var now = new Date(),
      dow = now.getDay();
    var mon = new Date(now);
    mon.setDate(now.getDate() - (dow + 6) % 7 - weeksAgo * 7);
    mon.setHours(0, 0, 0, 0);
    var sun = new Date(mon);
    sun.setDate(mon.getDate() + 6);
    return {
      sunStr: mon.toISOString().split("T")[0],
      satStr: sun.toISOString().split("T")[0]
    };
  }
  function thisWeekRange() {
    var now = new Date(),
      dow = now.getDay();
    var mon = new Date(now);
    mon.setDate(now.getDate() - (dow + 6) % 7);
    mon.setHours(0, 0, 0, 0);
    var sun = new Date(mon);
    sun.setDate(mon.getDate() + 6);
    return {
      monStr: mon.toISOString().split("T")[0],
      sunStr: sun.toISOString().split("T")[0]
    };
  }
  function parseDetail(d) {
    var m = d.match(/(\d+)[x×](\d+)/);
    if (!m) return null;
    return {
      sets: parseInt(m[1]),
      reps: parseInt(m[2])
    };
  }
  function isoWeek() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    var w1 = new Date(d.getFullYear(), 0, 4);
    return d.getFullYear() + "-W" + String(1 + Math.round(((d - w1) / 86400000 - 3 + (w1.getDay() + 6) % 7) / 7)).padStart(2, "0");
  }
  function computeThuFriVisibility(thuCompletedThisWeek) {
    var now = new Date(),
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
  function Badge(_ref) {
    var type = _ref.type;
    var s = BADGES[type] || BADGES.MOB;
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
  function RestTimerBubble(_ref2) {
    var seconds = _ref2.seconds,
      total = _ref2.total,
      onDismiss = _ref2.onDismiss,
      exName = _ref2.exName;
    var pct = total > 0 ? seconds / total : 0;
    var R = 32,
      cx = 38,
      cy = 38,
      circ = 2 * Math.PI * R;
    var dash = circ * pct;
    var urgent = seconds <= 10;
    var done = seconds === 0;
    var color = done ? W.cyan : urgent ? W.red : W.cyan;
    var trackColor = urgent ? "rgba(255,71,87,0.15)" : "rgba(255,255,255,0.07)";
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
        border: "1px solid ".concat(urgent ? "rgba(255,71,87,0.35)" : color + "28"),
        borderRadius: 44,
        padding: "10px 22px 10px 10px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.8), 0 0 0 1px ".concat(W.border).concat(urgent ? ", 0 0 24px rgba(255,71,87,0.12)" : ""),
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
      strokeDasharray: "".concat(dash, " ").concat(circ),
      strokeLinecap: "round",
      transform: "rotate(-90 ".concat(cx, " ").concat(cy, ")"),
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
        color: color,
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
  function RestSettingsModal(_ref3) {
    var exName = _ref3.exName,
      current = _ref3.current,
      onSave = _ref3.onSave,
      onClose = _ref3.onClose;
    var opts = [30, 60, 90, 120, 180, 240];
    var _useState3 = (0, _react.useState)(current),
      _useState4 = _slicedToArray(_useState3, 2),
      val = _useState4[0],
      setVal = _useState4[1];
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return e.target === e.currentTarget && onClose();
      },
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
        border: "1px solid ".concat(W.borderHi),
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
    }, opts.map(function (o) {
      return /*#__PURE__*/React.createElement("button", {
        key: o,
        onClick: function onClick() {
          return setVal(o);
        },
        style: {
          padding: "13px 0",
          borderRadius: 8,
          border: "1.5px solid ".concat(val === o ? W.cyan : W.border),
          background: val === o ? W.cyanDim : "transparent",
          color: val === o ? W.cyan : W.textMid,
          fontFamily: "'DM Mono',monospace",
          fontSize: 13,
          fontWeight: val === o ? 700 : 400
        }
      }, o < 60 ? "".concat(o, "s") : "".concat(o / 60, "m"));
    })), /*#__PURE__*/React.createElement("div", {
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
        border: "1px solid ".concat(W.border),
        background: "transparent",
        color: W.textMid,
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 14,
        fontWeight: 500
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
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
  function RestSettingsPage(_ref4) {
    var onRestUpdate = _ref4.onRestUpdate,
      fontScale = _ref4.fontScale,
      onFontScaleChange = _ref4.onFontScaleChange;
    var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      version = _useState6[0],
      setVersion = _useState6[1];
    var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      editingEx = _useState8[0],
      setEditingEx = _useState8[1];
    var _useState9 = (0, _react.useState)(""),
      _useState0 = _slicedToArray(_useState9, 2),
      search = _useState0[0],
      setSearch = _useState0[1];
    var opts = [30, 60, 90, 120, 180, 240];
    var allEx = [];
    var seen = new Set();
    DAYS.forEach(function (day) {
      day.blocks.forEach(function (b) {
        (b.exercises || []).forEach(function (ex) {
          if (!seen.has(ex.name)) {
            seen.add(ex.name);
            allEx.push(_objectSpread(_objectSpread({}, ex), {}, {
              dayId: day.id,
              dayLabel: day.label,
              dayAccent: day.accent
            }));
          }
        });
      });
    });
    var filtered = search.trim() === "" ? allEx : allEx.filter(function (ex) {
      return ex.name.toLowerCase().includes(search.toLowerCase());
    });
    var byDay = {};
    DAYS.forEach(function (d) {
      byDay[d.id] = {
        label: d.label,
        accent: d.accent,
        exercises: []
      };
    });
    filtered.forEach(function (ex) {
      if (byDay[ex.dayId]) byDay[ex.dayId].exercises.push(ex);
    });
    function handleSet(exName, val) {
      setRestTime(exName, val);
      setVersion(function (v) {
        return v + 1;
      });
      if (onRestUpdate) onRestUpdate();
    }
    function fmtTime(s) {
      return s < 60 ? "".concat(s, "s") : "".concat(s / 60, "m");
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
        borderBottom: "1px solid ".concat(W.border)
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
        borderBottom: "1px solid ".concat(W.border)
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
    }, [["S", "sm"], ["M", "md"], ["L", "lg"]].map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        label = _ref6[0],
        val = _ref6[1];
      var active = fontScale === val;
      return /*#__PURE__*/React.createElement("button", {
        key: val,
        onClick: function onClick() {
          return onFontScaleChange(val);
        },
        style: {
          flex: 1,
          padding: "11px 0",
          borderRadius: 8,
          border: "1.5px solid ".concat(active ? W.cyan : W.border),
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
        borderBottom: "1px solid ".concat(W.border)
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
        borderBottom: "1px solid ".concat(W.border)
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Search exercises...",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      },
      style: {
        width: "100%",
        boxSizing: "border-box",
        background: W.surfaceHi,
        border: "1px solid ".concat(W.border),
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
        borderBottom: "1px solid ".concat(W.border)
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
    }, opts.map(function (o) {
      return /*#__PURE__*/React.createElement("button", {
        key: o,
        onClick: function onClick() {
          allEx.forEach(function (ex) {
            return handleSet(ex.name, o);
          });
        },
        style: {
          flex: 1,
          padding: "9px 0",
          borderRadius: 6,
          border: "1px solid ".concat(W.border),
          background: W.surface,
          color: W.textMid,
          fontFamily: "'DM Mono',monospace",
          fontSize: 11,
          fontWeight: 500
        }
      }, fmtTime(o));
    }))), DAYS.map(function (day) {
      var _byDay$day$id;
      var exList = ((_byDay$day$id = byDay[day.id]) === null || _byDay$day$id === void 0 ? void 0 : _byDay$day$id.exercises) || [];
      if (!exList.length) return null;
      return /*#__PURE__*/React.createElement("div", {
        key: day.id
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px 8px",
          borderBottom: "1px solid ".concat(W.border)
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
      }, "\u2014 ", day.title)), exList.map(function (ex) {
        var current = getRestTime(ex.name);
        var group = EX_GROUP[ex.name];
        var groupColor = group ? GROUP_COLORS[group] : W.textDim;
        return /*#__PURE__*/React.createElement("div", {
          key: ex.name,
          style: {
            borderBottom: "1px solid ".concat(W.border),
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
        }, opts.map(function (o) {
          return /*#__PURE__*/React.createElement("button", {
            key: o,
            onClick: function onClick() {
              return handleSet(ex.name, o);
            },
            style: {
              flex: 1,
              padding: "8px 0",
              borderRadius: 6,
              border: "1px solid ".concat(current === o ? W.cyan : W.border),
              background: current === o ? W.cyanDim : "transparent",
              color: current === o ? W.cyan : W.textDim,
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              fontWeight: current === o ? 700 : 400,
              transition: "all 0.15s"
            }
          }, fmtTime(o));
        })));
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
      onSave: function onSave(val) {
        return handleSet(editingEx, val);
      },
      onClose: function onClose() {
        return setEditingEx(null);
      }
    }));
  }

  // ── TAP BUTTON ────────────────────────────────────────────────────────────────
  function TapButton(_ref7) {
    var _onClick = _ref7.onClick,
      style = _ref7.style,
      children = _ref7.children,
      _ref7$className = _ref7.className,
      className = _ref7$className === void 0 ? "" : _ref7$className;
    var _useTap = useTap(),
      _useTap2 = _slicedToArray(_useTap, 2),
      tapClass = _useTap2[0],
      triggerTap = _useTap2[1];
    return /*#__PURE__*/React.createElement("button", {
      className: [tapClass, className].filter(Boolean).join(" "),
      onClick: function onClick() {
        triggerTap();
        if (_onClick) _onClick();
      },
      style: style
    }, children);
  }

  // ── SET TOGGLE BUTTON ─────────────────────────────────────────────────────────
  function SetToggleButton(_ref8) {
    var done = _ref8.done,
      onToggle = _ref8.onToggle;
    var _useTap3 = useTap(),
      _useTap4 = _slicedToArray(_useTap3, 2),
      tapClass = _useTap4[0],
      triggerTap = _useTap4[1];
    var _useState1 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState1, 2),
      flash = _useState10[0],
      setFlash = _useState10[1];
    var cooldownRef = (0, _react.useRef)(false);
    function handleToggle() {
      if (cooldownRef.current) return;
      cooldownRef.current = true;
      setTimeout(function () {
        cooldownRef.current = false;
      }, 400);
      triggerTap();
      if (!done) {
        setFlash(true);
        setTimeout(function () {
          return setFlash(false);
        }, 500);
      }
      onToggle();
    }
    var active = done || flash;
    return /*#__PURE__*/React.createElement("button", {
      className: tapClass,
      onClick: handleToggle,
      style: {
        height: 40,
        borderRadius: 8,
        border: "1.5px solid ".concat(active ? W.cyan : W.borderHi),
        background: active ? W.cyanDim : "transparent",
        color: active ? W.cyan : W.textDim,
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "border-color 0.2s,background 0.2s,color 0.2s,box-shadow 0.2s",
        width: "100%",
        boxShadow: done ? "0 0 8px ".concat(W.cyan, "33") : "none"
      }
    }, done || flash ? "✓" : "○");
  }

  // ── INLINE SET LOGGER ─────────────────────────────────────────────────────────
  function InlineSetLogger(_ref9) {
    var ex = _ref9.ex,
      isActive = _ref9.isActive,
      onStartRest = _ref9.onStartRest,
      onSaved = _ref9.onSaved,
      bodyweight = _ref9.bodyweight,
      _ref9$fontScale = _ref9.fontScale,
      fontScale = _ref9$fontScale === void 0 ? "md" : _ref9$fontScale,
      _ref9$version = _ref9.version,
      version = _ref9$version === void 0 ? 0 : _ref9$version,
      _ref9$dayId = _ref9.dayId,
      dayId = _ref9$dayId === void 0 ? "" : _ref9$dayId,
      _ref9$onExerciseDone = _ref9.onExerciseDone,
      onExerciseDone = _ref9$onExerciseDone === void 0 ? null : _ref9$onExerciseDone;
    var loggerRef = (0, _react.useRef)(null);
    var F = FS[fontScale] || FS.md;
    var parsed = parseDetail(ex.detail);
    var defaultSets = (parsed === null || parsed === void 0 ? void 0 : parsed.sets) || 3,
      defaultReps = (parsed === null || parsed === void 0 ? void 0 : parsed.reps) || 10;
    var isBW = BODYWEIGHT_EX.has(ex.name);
    var lastEntry = getLastEntry(ex.name);
    var lastW = lastEntry ? lastEntry.weight : 0;
    var lastR = lastEntry ? lastEntry.reps : defaultReps;
    var prevEntries = getEntries(ex.name);
    var prevDates = _toConsumableArray(new Set(prevEntries.map(function (e) {
      return e.date;
    }))).sort();
    // lastDate = most recent completed session (exclude today so mid-workout state doesn't corrupt prefill)
    var todayKey = todayStr();
    var lastDate = prevDates.filter(function (d) {
      return d !== todayKey;
    }).pop() || null;
    var lastSessionSets = lastDate ? prevEntries.filter(function (e) {
      return e.date === lastDate;
    }) : [];
    // prevDate = second-most-recent (for placeholder ghost values)
    var prevDate = prevDates.filter(function (d) {
      return d !== todayKey && d !== lastDate;
    }).pop() || null;
    var prevSets = prevDate ? prevEntries.filter(function (e) {
      return e.date === prevDate;
    }) : [];
    var prefillW = lastW > 0 ? isBW ? Math.max(0, lastW - (bodyweight || 0)) : lastW : 0;
    // Per-set reps from last session: use set-index match so each row carries its own rep count
    var prefillR = function prefillR(i) {
      var s = lastSessionSets[i];
      if (s) return s.reps;
      // fallback: use last entry's reps, then default
      return lastR || defaultReps;
    };
    var _useState11 = (0, _react.useState)(function () {
        return Array.from({
          length: defaultSets
        }, function (_, i) {
          return {
            weight: prefillW > 0 ? String(prefillW) : "",
            reps: String(prefillR(i)),
            done: false,
            id: i
          };
        });
      }),
      _useState12 = _slicedToArray(_useState11, 2),
      sets = _useState12[0],
      setSets = _useState12[1];
    var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showRestSettings = _useState14[0],
      setShowRestSettings = _useState14[1];
    var _useState15 = (0, _react.useState)(getRestTime(ex.name)),
      _useState16 = _slicedToArray(_useState15, 2),
      restTime = _useState16[0],
      setRestTimeLocal = _useState16[1];
    var _useState17 = (0, _react.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      prFlashIdx = _useState18[0],
      setPrFlashIdx = _useState18[1];
    function handleSetRestTime(t) {
      setRestTime(ex.name, t);
      setRestTimeLocal(t);
    }
    function toggleSet(i) {
      var updated = sets.map(function (s, idx) {
        if (idx !== i) return s;
        var nowDone = !s.done;
        if (nowDone) {
          var w = parseFloat(s.weight);
          var r = parseInt(s.reps) || defaultReps;
          // FIX: allow weight=0, only reject empty/NaN for non-BW exercises
          if (!isBW && (s.weight.trim() === "" || isNaN(w))) {
            haptic([10, 20, 10, 20, 10]);
            var container = loggerRef.current;
            if (container) {
              var inputs = container.querySelectorAll(".set-input-weight");
              if (inputs[i]) {
                inputs[i].style.borderColor = "#ff4757";
                inputs[i].style.boxShadow = "0 0 0 2px rgba(255,71,87,0.25)";
                setTimeout(function () {
                  inputs[i].style.borderColor = "";
                  inputs[i].style.boxShadow = "";
                }, 800);
              }
            }
            return s;
          }
          var safeW = isNaN(w) ? 0 : w;
          if (safeW > 2000) {
            haptic([10, 20, 10]);
            return s;
          } // sanity: reject >2000 lbs
          if (r > 200) {
            haptic([10, 20, 10]);
            return s;
          } // sanity: reject >200 reps
          haptic(30);
          var all = getEntries(ex.name);
          all.push({
            date: todayStr(),
            dayId: dayId,
            weight: isBW ? bodyweight ? bodyweight + safeW : safeW : safeW,
            sets: 1,
            reps: r,
            note: "",
            bodyweight: isBW
          });
          all.sort(function (a, b) {
            return a.date.localeCompare(b.date);
          });
          setEntries(ex.name, all);
          onSaved();
          // Check if this was the last set — if so, fire onExerciseDone
          var willAllDone = sets.every(function (s2, idx2) {
            return idx2 === i ? true : s2.done;
          });
          if (willAllDone && onExerciseDone) onExerciseDone(ex.name);
          var freshAll = getEntries(ex.name);
          var newIdx = freshAll.length - 1;
          if (!isBW && isPR(freshAll, newIdx)) {
            setPrFlashIdx(idx);
            haptic([40, 30, 60, 30, 80]);
            setTimeout(function () {
              return setPrFlashIdx(null);
            }, 1800);
          }
          onStartRest(ex.name, restTime);
        } else {
          haptic([15, 30, 15]);
          var todayS = todayStr();
          var _w = parseFloat(s.weight);
          var _safeW = isNaN(_w) ? 0 : _w;
          var _r = parseInt(s.reps) || defaultReps;
          var loggedW = isBW ? bodyweight ? bodyweight + _safeW : _safeW : _safeW;
          var _all = getEntries(ex.name);
          var matchIdx = _all.map(function (e, i) {
            return i;
          }).reverse().find(function (i) {
            return _all[i].date === todayS && (_all[i].dayId === dayId || !_all[i].dayId) && _all[i].reps === _r && _all[i].weight === loggedW;
          });
          if (matchIdx !== undefined) _all.splice(matchIdx, 1);
          setEntries(ex.name, _all);
          onSaved();
        }
        return _objectSpread(_objectSpread({}, s), {}, {
          done: nowDone
        });
      });
      setSets(updated);
    }
    function addSet() {
      setSets(function (s) {
        return [].concat(_toConsumableArray(s), [{
          weight: prefillW > 0 ? String(prefillW) : "",
          reps: String(prefillR(s.length)),
          done: false,
          id: s.length
        }]);
      });
    }
    function updateSet(i, field, val) {
      setSets(function (s) {
        return s.map(function (x, idx) {
          return idx === i ? _objectSpread(_objectSpread({}, x), {}, _defineProperty({}, field, val)) : x;
        });
      });
    }
    var doneCount = sets.filter(function (s) {
      return s.done;
    }).length;
    var allDone = doneCount === sets.length && sets.length > 0;
    var sug = getOverloadSug(getEntries(ex.name), ex.name);
    var liveVolume = sets.reduce(function (acc, s) {
      if (!s.done) return acc;
      var w = parseFloat(s.weight) || 0;
      var r = parseInt(s.reps) || 0;
      var fullW = isBW ? (bodyweight || 0) + w : w;
      return acc + fullW * r;
    }, 0);
    var totalProjectedVolume = sets.reduce(function (acc, s) {
      var w = parseFloat(s.weight) || 0;
      var r = parseInt(s.reps) || 0;
      var fullW = isBW ? (bodyweight || 0) + w : w;
      return acc + fullW * r;
    }, 0);
    var inputStyle = function inputStyle(disabled) {
      return {
        background: disabled ? "transparent" : W.surfaceHi,
        border: "1px solid ".concat(disabled ? W.border : W.borderHi),
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
      };
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: loggerRef,
      style: {
        padding: "8px 0 12px",
        borderTop: "1px solid ".concat(W.border)
      }
    }, sug && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: W.cyan,
        marginBottom: 12,
        padding: "8px 12px",
        background: W.cyanDim,
        borderRadius: 6,
        border: "1px solid rgba(0,201,177,0.15)",
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
    }, "Reps"), /*#__PURE__*/React.createElement("span", null)), sets.map(function (s, i) {
      var prev = prevSets[i] || null;
      var prevW = prev ? isBW ? Math.max(0, prev.weight - (bodyweight || 0)) : prev.weight : null;
      var prevR = prev ? prev.reps : null;
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          marginBottom: 11,
          animation: "setRowIn 0.2s cubic-bezier(0.16,1,0.3,1) ".concat(i * 0.04, "s both")
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
        onChange: function onChange(e) {
          return updateSet(i, "weight", e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.key === "Enter") {
            e.preventDefault();
            var next = document.querySelectorAll(".set-input-reps")[i];
            if (next) next.focus();
          }
        },
        disabled: s.done,
        placeholder: prevW != null ? String(prevW) : isBW ? "0" : "—",
        "aria-label": "Set ".concat(i + 1, " weight"),
        className: "set-input-weight",
        style: inputStyle(s.done)
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
        type: "number",
        inputMode: "numeric",
        value: s.reps,
        onChange: function onChange(e) {
          return updateSet(i, "reps", e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.key === "Enter") {
            e.preventDefault();
            toggleSet(i);
          }
        },
        disabled: s.done,
        placeholder: prevR != null ? String(prevR) : String(defaultReps),
        "aria-label": "Set ".concat(i + 1, " reps"),
        className: "set-input-reps",
        style: inputStyle(s.done)
      })), /*#__PURE__*/React.createElement(SetToggleButton, {
        done: s.done,
        onToggle: function onToggle() {
          return toggleSet(i);
        }
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
        border: "1px dashed ".concat(W.border),
        borderRadius: 8,
        background: "transparent",
        color: W.textDim,
        fontFamily: "'DM Mono',monospace",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.08em"
      }
    }, "+ SET"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowRestSettings(true);
      },
      style: {
        height: 36,
        padding: "0 14px",
        border: "1px solid ".concat(W.border),
        borderRadius: 8,
        background: W.surface,
        color: W.textMid,
        fontFamily: "'DM Mono',monospace",
        fontSize: 11,
        fontWeight: 600,
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, "\u23F1 ", restTime < 60 ? "".concat(restTime, "s") : "".concat(restTime / 60, "m")), totalProjectedVolume > 0 && /*#__PURE__*/React.createElement("div", {
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
      onClose: function onClose() {
        return setShowRestSettings(false);
      }
    }));
  }

  // ── HISTORY / EDIT MODAL ──────────────────────────────────────────────────────
  function HistoryModal(_ref0) {
    var exName = _ref0.exName,
      onClose = _ref0.onClose,
      onSaved = _ref0.onSaved;
    var _useState19 = (0, _react.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      version = _useState20[0],
      setVersion = _useState20[1];
    var entries = getEntries(exName);
    var sug = entries.length ? getOverloadSug(entries, exName) : null;
    function del(idx) {
      var all = getEntries(exName);
      all.splice(idx, 1);
      setEntries(exName, all);
      setVersion(function (v) {
        return v + 1;
      });
      onSaved();
    }
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return e.target === e.currentTarget && onClose();
      },
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
        borderTop: "1px solid ".concat(W.borderHi),
        borderLeft: "1px solid ".concat(W.borderHi),
        borderRight: "1px solid ".concat(W.borderHi),
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
        borderBottom: "1px solid ".concat(W.border),
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
        border: "1px solid ".concat(W.border),
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
        border: "1px solid rgba(0,201,177,0.15)",
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
    }, "No entries yet") : _toConsumableArray(entries).reverse().map(function (e, i) {
      var ri = entries.length - 1 - i,
        pr = !e.bodyweight && isPR(entries, ri);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 0",
          borderBottom: "1px solid ".concat(W.border),
          animation: "setRowIn 0.18s ease ".concat(i * 0.03, "s both")
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
      }, e.bodyweight ? e.weight > 0 ? "+".concat(e.weight, "lbs BW") : "BW" : "".concat(e.weight, "lbs"), " \xB7 ", e.sets > 1 ? "".concat(e.sets, "\xD7") : "", e.reps, "r"), pr && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 8,
          background: W.cyanDim,
          border: "1px solid rgba(0,201,177,0.25)",
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
        onClick: function onClick() {
          return del(ri);
        },
        style: {
          background: "rgba(255,71,87,0.08)",
          border: "1px solid rgba(255,71,87,0.15)",
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
  function BodyweightCard(_ref1) {
    var onUpdate = _ref1.onUpdate;
    var _useState21 = (0, _react.useState)(""),
      _useState22 = _slicedToArray(_useState21, 2),
      input = _useState22[0],
      setInput = _useState22[1];
    var _useState23 = (0, _react.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      msg = _useState24[0],
      setMsg = _useState24[1];
    var _useState25 = (0, _react.useState)(0),
      _useState26 = _slicedToArray(_useState25, 2),
      bwVersion = _useState26[0],
      setBwVersion = _useState26[1];
    var entries = _toConsumableArray(bwStore).slice(-10);
    function save() {
      var w = parseFloat(input);
      if (isNaN(w) || w < 50 || w > 999) return; // sanity guard: 50–999 lbs
      logBW(w);
      setInput("");
      setMsg("✓");
      onUpdate();
      setBwVersion(function (v) {
        return v + 1;
      });
      setTimeout(function () {
        return setMsg(null);
      }, 1500);
    }
    var latest = getLatestBW();
    var prev = entries.length >= 2 ? entries[entries.length - 2].weight : null;
    var trend = latest && prev ? latest - prev : null;
    var trendColor = trend === null ? W.textDim : trend > 0 ? W.cyan : trend < 0 ? W.red : W.textDim;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid ".concat(W.border),
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
    }, latest != null ? "".concat(latest) : "—"), latest != null && /*#__PURE__*/React.createElement("span", {
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
      onChange: function onChange(e) {
        return setInput(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && save();
      },
      style: {
        width: 68,
        background: W.surfaceHi,
        border: "1px solid ".concat(W.borderHi),
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
    var byDayDate = {};
    DAYS.forEach(function (day) {
      day.blocks.flatMap(function (b) {
        return b.exercises || [];
      }).forEach(function (ex) {
        getEntries(ex.name).forEach(function (e) {
          var k = "".concat(e.dayId || day.id, "_").concat(e.date);
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
    return Object.values(byDayDate).sort(function (a, b) {
      return b.date.localeCompare(a.date);
    }).map(function (s) {
      var _DAYS$find;
      return {
        dayId: s.dayId,
        date: s.date,
        duration: "—",
        exercisesLogged: s.exNames.size,
        exercisesTotal: ((_DAYS$find = DAYS.find(function (d) {
          return d.id === s.dayId;
        })) === null || _DAYS$find === void 0 ? void 0 : _DAYS$find.blocks.flatMap(function (b) {
          return b.exercises || [];
        }).length) || s.exNames.size,
        sets: s.sets,
        _synthesized: true
      };
    });
  }
  function WorkoutHistoryCard(_ref10) {
    var _ref10$version = _ref10.version,
      version = _ref10$version === void 0 ? 0 : _ref10$version,
      onDelete = _ref10.onDelete;
    var _useState27 = (0, _react.useState)(null),
      _useState28 = _slicedToArray(_useState27, 2),
      expanded = _useState28[0],
      setExpanded = _useState28[1]; // key: date_dayId
    // Merge stored sessions with any entry-based sessions not yet in sessionsStore
    var storedKeys = new Set(sessionsStore.map(function (s) {
      return "".concat(s.dayId, "_").concat(s.date);
    }));
    var synthesized = synthesizeSessionsFromEntries().filter(function (s) {
      return !storedKeys.has("".concat(s.dayId, "_").concat(s.date));
    });
    var allSessions = [].concat(_toConsumableArray(sessionsStore), _toConsumableArray(synthesized)).sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });
    if (!allSessions.length) return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid ".concat(W.border),
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
        borderBottom: "1px solid ".concat(W.border)
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
    }, allSessions.slice(0, 30).map(function (s, i) {
      var day = DAYS.find(function (d) {
        return d.id === s.dayId;
      });
      var sessionKey = "".concat(s.date, "_").concat(s.dayId);
      var isOpen = expanded === sessionKey;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          borderTop: "1px solid ".concat(W.border)
        }
      }, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return setExpanded(isOpen ? null : sessionKey);
        },
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
          boxShadow: "0 0 6px ".concat(W.cyanGlow),
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
      }, (day === null || day === void 0 ? void 0 : day.title) || s.dayId), /*#__PURE__*/React.createElement("div", {
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
      }, s.sets && s.sets.length > 0 ? s.sets.map(function (entry, j) {
        return /*#__PURE__*/React.createElement("div", {
          key: j,
          style: {
            display: "flex",
            gap: 8,
            padding: "5px 0",
            fontSize: 11,
            fontFamily: "'DM Mono',monospace",
            color: W.textMid,
            borderBottom: "1px solid ".concat(W.border)
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            color: W.text
          }
        }, entry.name), /*#__PURE__*/React.createElement("span", null, entry.weight > 0 ? "".concat(entry.weight, "lbs \xD7 ") : "", entry.sets, "\xD7", entry.reps));
      }) : /*#__PURE__*/React.createElement("div", {
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
        onClick: function onClick(e) {
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
          border: "1px solid rgba(255,71,87,0.25)",
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
  function DeleteDayModal(_ref11) {
    var date = _ref11.date,
      _ref11$dayId = _ref11.dayId,
      dayId = _ref11$dayId === void 0 ? null : _ref11$dayId,
      onClose = _ref11.onClose,
      onDeleted = _ref11.onDeleted;
    var allEx = getAllWorkingExercises();
    var affected = allEx.filter(function (ex) {
      return getEntries(ex.name).some(function (e) {
        return e.date === date && (!dayId || e.dayId === dayId || !e.dayId);
      });
    });
    function confirm() {
      delEntriesByDate(date, dayId);
      delSessionByDate(date, dayId);
      onDeleted();
      onClose();
    }
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return e.target === e.currentTarget && onClose();
      },
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
        border: "1px solid rgba(255,71,87,0.3)",
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
    }, affected.map(function (ex) {
      return /*#__PURE__*/React.createElement("div", {
        key: ex.name,
        style: {
          fontSize: 11,
          color: W.textDim,
          fontFamily: "'DM Mono',monospace",
          padding: "2px 0"
        }
      }, "\xB7 ", ex.name);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 1,
        background: "transparent",
        border: "1px solid ".concat(W.borderHi),
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
        border: "1px solid rgba(255,71,87,0.3)",
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
  function WorkoutSummaryModal(_ref12) {
    var day = _ref12.day,
      elapsed = _ref12.elapsed,
      setsLogged = _ref12.setsLogged,
      onClose = _ref12.onClose,
      onDelete = _ref12.onDelete;
    var m = Math.floor(elapsed / 60),
      s = elapsed % 60;
    var todayS = todayStr();
    var allEx = day.blocks.flatMap(function (b) {
      return b.exercises || [];
    });
    var loggedExNames = allEx.filter(function (ex) {
      return getEntries(ex.name).some(function (e) {
        return e.date === todayS && (e.dayId === day.id || !e.dayId);
      });
    }).map(function (ex) {
      return ex.name;
    });
    var prsToday = [];
    allEx.forEach(function (ex) {
      var ents = getEntries(ex.name);
      ents.filter(function (e) {
        return e.date === todayS && (e.dayId === day.id || !e.dayId);
      }).forEach(function (e, _) {
        var idx = ents.indexOf(e);
        if (!e.bodyweight && isPR(ents, idx)) prsToday.push({
          name: ex.name,
          weight: e.weight,
          reps: e.reps
        });
      });
    });
    var totalVol = 0;
    allEx.forEach(function (ex) {
      getEntries(ex.name).filter(function (e) {
        return e.date === todayS && (e.dayId === day.id || !e.dayId);
      }).forEach(function (e) {
        totalVol += e.weight * e.reps;
      });
    });
    var exSummary = allEx.map(function (ex) {
      var todaySets = getEntries(ex.name).filter(function (e) {
        return e.date === todayS && (e.dayId === day.id || !e.dayId);
      });
      if (!todaySets.length) return null;
      var bestW = Math.max.apply(Math, _toConsumableArray(todaySets.map(function (e) {
        return e.weight;
      })));
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
        padding: "env(safe-area-inset-top) 16px env(safe-area-inset-bottom)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "au",
      style: {
        background: W.surfaceHi,
        border: "1px solid ".concat(W.border),
        borderTop: "2px solid ".concat(W.cyan),
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
        borderBottom: "1px solid ".concat(W.border),
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
        borderBottom: "1px solid ".concat(W.border),
        flexShrink: 0
      }
    }, [["Time", "".concat(m, ":").concat(String(s).padStart(2, "0"))], ["Exercises", "".concat(loggedExNames.length, "/").concat(allEx.length)], ["Volume", totalVol > 0 ? "".concat(Math.round(totalVol).toLocaleString()) : "—"]].map(function (_ref13, i) {
      var _ref14 = _slicedToArray(_ref13, 2),
        label = _ref14[0],
        val = _ref14[1];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          padding: "14px 12px",
          borderRight: i < 2 ? "1px solid ".concat(W.border) : "none",
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
      }, "lbs"));
    })), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "Personal Records")), prsToday.map(function (pr, i) {
      return /*#__PURE__*/React.createElement("div", {
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
          animation: "setRowIn 0.18s ease ".concat(i * 0.06, "s both")
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
      }, "PR"));
    })), /*#__PURE__*/React.createElement("div", {
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
    }, "Sets Logged"), exSummary.map(function (ex, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 0",
          borderBottom: "1px solid ".concat(W.border),
          animation: "setRowIn 0.16s ease ".concat(i * 0.04, "s both")
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
      }, ex.sets, " set", ex.sets !== 1 ? "s" : "", " \xB7 ", ex.isBW ? "BW" : "".concat(ex.weight, "lbs"), " \xD7 ", ex.reps, "r"));
    }), exSummary.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace",
        padding: "12px 0"
      }
    }, "No sets logged today"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 18px 28px",
        borderTop: "1px solid ".concat(W.border),
        flexShrink: 0,
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onDelete,
      style: {
        padding: "12px 16px",
        borderRadius: 10,
        border: "1px solid rgba(255,71,87,0.25)",
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
  function EndWorkoutModal(_ref15) {
    var day = _ref15.day,
      elapsed = _ref15.elapsed,
      onConfirm = _ref15.onConfirm,
      onCancel = _ref15.onCancel;
    var m = Math.floor(elapsed / 60),
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
        border: "1px solid ".concat(W.borderHi),
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
        border: "1px solid ".concat(W.borderHi),
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
  var DONUT_COLORS = {
    CNS: "#f5c842",
    Legs: "#00e5a0",
    Push: "#ff5c7a",
    Pull: "#4fc3f7",
    Core: "#b57bee",
    Stability: "#ff9a3c"
  };
  function DonutChart(_ref16) {
    var data = _ref16.data,
      _ref16$size = _ref16.size,
      size = _ref16$size === void 0 ? 240 : _ref16$size;
    var cx = size / 2,
      cy = size / 2,
      outerR = size * 0.32,
      innerR = size * 0.17;
    var entries = GROUPS.map(function (g) {
      return {
        g: g,
        v: data[g] || 0
      };
    });
    var total = entries.reduce(function (s, e) {
      return s + e.v;
    }, 0) || 1;
    var cursor = -Math.PI / 2;
    var segments = entries.map(function (_ref17) {
      var g = _ref17.g,
        v = _ref17.v;
      var frac = v / total,
        startA = cursor,
        sweep = frac * Math.PI * 2;
      cursor += sweep;
      return {
        g: g,
        frac: frac,
        startA: startA,
        endA: cursor,
        sweep: sweep
      };
    });
    function arc(r, a1, a2) {
      var x1 = cx + r * Math.cos(a1),
        y1 = cy + r * Math.sin(a1),
        x2 = cx + r * Math.cos(a2),
        y2 = cy + r * Math.sin(a2),
        large = a2 - a1 > Math.PI ? 1 : 0;
      return {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        large: large
      };
    }
    function slicePath(seg) {
      var startA = seg.startA,
        endA = seg.endA,
        o = arc(outerR, startA, endA),
        i = arc(innerR, startA, endA);
      return "M".concat(o.x1, ",").concat(o.y1, " A").concat(outerR, ",").concat(outerR, ",0,").concat(o.large, ",1,").concat(o.x2, ",").concat(o.y2, " L").concat(i.x2, ",").concat(i.y2, " A").concat(innerR, ",").concat(innerR, ",0,").concat(i.large, ",0,").concat(i.x1, ",").concat(i.y1, " Z");
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
    }), segments.map(function (seg) {
      if (seg.sweep < 0.015) return null;
      var color = DONUT_COLORS[seg.g] || GROUP_COLORS[seg.g],
        midA = seg.startA + seg.sweep / 2,
        pct = Math.round(seg.frac * 100);
      var lineR1 = outerR + 4,
        lineR2 = outerR + 14 + pct * 0.4;
      var lx1 = cx + lineR1 * Math.cos(midA),
        ly1 = cy + lineR1 * Math.sin(midA),
        lx2 = cx + lineR2 * Math.cos(midA),
        ly2 = cy + lineR2 * Math.sin(midA);
      var anchor = Math.cos(midA) > 0.15 ? "start" : Math.cos(midA) < -0.15 ? "end" : "middle";
      var tx = cx + (lineR2 + 4) * Math.cos(midA),
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
  function ProgressView(_ref18) {
    var onClose = _ref18.onClose,
      version = _ref18.version;
    var _useState29 = (0, _react.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      sel = _useState30[0],
      setSel = _useState30[1],
      _useState31 = (0, _react.useState)(0),
      _useState32 = _slicedToArray(_useState31, 2),
      range = _useState32[0],
      setRange = _useState32[1];
    var canvasRef = (0, _react.useRef)(null),
      chartRef = (0, _react.useRef)(null);
    var allEnts = sel ? getEntries(sel) : [];
    var filtered = allEnts;
    if (range > 0) {
      var cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - range);
      var cs = cutoff.toISOString().split("T")[0];
      filtered = allEnts.filter(function (e) {
        return e.date >= cs;
      });
    }
    (0, _react.useEffect)(function () {
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
      var Chart = window.Chart;
      if (!Chart) return;
      var labels = filtered.map(function (e) {
          return fmtDate(e.date);
        }),
        weights = filtered.map(function (e) {
          return e.weight;
        }),
        oneRMs = filtered.map(function (e) {
          return calc1RM(e.weight, e.reps);
        }),
        volumes = filtered.map(function (e) {
          return e.weight * e.sets * e.reps;
        });
      var pColors = filtered.map(function (e) {
        return isPR(allEnts, allEnts.indexOf(e)) ? W.yellow : W.cyan;
      });
      var pSizes = filtered.map(function (e) {
        return isPR(allEnts, allEnts.indexOf(e)) ? 8 : 4;
      });
      chartRef.current = new Chart(canvasRef.current.getContext("2d"), {
        type: "line",
        data: {
          labels: labels,
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
                afterBody: function afterBody(items) {
                  var e = filtered[items[0].dataIndex],
                    pr = isPR(allEnts, allEnts.indexOf(e));
                  return ["  ".concat(e.sets, "\xD7").concat(e.reps)].concat(_toConsumableArray(e.note ? ["  \"".concat(e.note, "\"")] : []), _toConsumableArray(pr ? ["  ★ PR"] : []));
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
              min: Math.min.apply(Math, _toConsumableArray(weights).concat(_toConsumableArray(oneRMs))) - 5,
              max: Math.max.apply(Math, _toConsumableArray(weights).concat(_toConsumableArray(oneRMs))) + 10,
              position: "left",
              ticks: {
                color: W.textDim,
                font: {
                  size: 10
                },
                callback: function callback(v) {
                  return v + " lbs";
                }
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
                callback: function callback(v) {
                  return v.toLocaleString();
                }
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
      return function () {
        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }
      };
    }, [sel, range, version]);
    var sug = allEnts.length ? getOverloadSug(allEnts) : null,
      best1RM = allEnts.length ? Math.max.apply(Math, _toConsumableArray(allEnts.map(function (e) {
        return calc1RM(e.weight, e.reps);
      }))) : 0;
    var prCount = allEnts.filter(function (e, i) {
      return isPR(allEnts, i);
    }).length;
    var diff = allEnts.length > 1 ? (allEnts[allEnts.length - 1].weight - allEnts[0].weight).toFixed(1) : null;
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
        borderBottom: "1px solid ".concat(W.border),
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
        background: "linear-gradient(90deg,".concat(W.cyan, ",#ab97e8,").concat(W.orange, ",").concat(W.yellow, ")")
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
        border: "1px solid ".concat(W.border),
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
        borderBottom: "1px solid ".concat(W.border),
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
        flexShrink: 0,
        padding: "8px 12px",
        gap: 6,
        WebkitOverflowScrolling: "touch"
      }
    }, DAYS.filter(function (d) {
      return d.id !== "fri";
    }).flatMap(function (day) {
      return day.blocks.flatMap(function (b) {
        return b.exercises || [];
      }).map(function (ex) {
        var cnt = getEntries(ex.name).length;
        var prs = getEntries(ex.name).filter(function (e, i) {
          return isPR(getEntries(ex.name), i);
        }).length;
        return /*#__PURE__*/React.createElement("button", {
          key: ex.name,
          onClick: function onClick() {
            setSel(ex.name);
            setRange(0);
          },
          style: {
            flexShrink: 0,
            padding: "7px 12px",
            borderRadius: 20,
            border: "1px solid ".concat(sel === ex.name ? W.cyan : W.border),
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
      });
    })), /*#__PURE__*/React.createElement("div", {
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
    }, [["Sessions", new Set(allEnts.map(function (e) {
      return e.date;
    })).size, null], ["Best", "".concat(Math.max.apply(Math, _toConsumableArray(allEnts.map(function (e) {
      return e.weight;
    }))), " lbs"), null], ["Last", "".concat(allEnts[allEnts.length - 1].weight, "lbs \xD7 ").concat(allEnts[allEnts.length - 1].reps, "r"), null], diff !== null && ["Change", "".concat(+diff > 0 ? "+" : "").concat(diff, " lbs"), +diff > 0 ? W.cyan : +diff < 0 ? W.red : W.textMid], prCount > 0 && ["PRs", "\u2605 ".concat(prCount), W.yellow]].filter(Boolean).map(function (_ref19) {
      var _ref20 = _slicedToArray(_ref19, 3),
        k = _ref20[0],
        v = _ref20[1],
        col = _ref20[2];
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          fontSize: 10,
          fontFamily: "'DM Mono',monospace",
          color: W.textMid,
          background: W.surface,
          border: "1px solid ".concat(W.border),
          borderRadius: 4,
          padding: "4px 9px"
        }
      }, k, ": ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: col || W.text
        }
      }, v));
    })), /*#__PURE__*/React.createElement("div", {
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
        border: "1px solid rgba(0,201,177,0.2)",
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
    }, [15, 30, 60, 90, 0].map(function (r) {
      return /*#__PURE__*/React.createElement("button", {
        key: r,
        onClick: function onClick() {
          return setRange(r);
        },
        style: {
          background: range === r ? W.cyanDim : W.surface,
          border: "1px solid ".concat(range === r ? W.cyan : W.border),
          color: range === r ? W.cyan : W.textMid,
          fontFamily: "'DM Mono',monospace",
          fontSize: 10,
          padding: "4px 10px",
          borderRadius: 5,
          cursor: "pointer"
        }
      }, r === 0 ? "ALL" : "".concat(r, "D"));
    })), filtered.length < 2 ? /*#__PURE__*/React.createElement("div", {
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
        border: "1px dashed ".concat(W.border)
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

  // ── NAV DOT ───────────────────────────────────────────────────────────────────
  var NAV_CONTENT_H = 64; // fixed content area, dots always live here
  var NAV_DOT_CY = 30; // vertical center of dots within content area

  function NavDot(_ref21) {
    var day = _ref21.day,
      isActive = _ref21.isActive,
      isDone = _ref21.isDone,
      hasLogged = _ref21.hasLogged,
      onTap = _ref21.onTap;
    var _useTap5 = useTap(),
      _useTap6 = _slicedToArray(_useTap5, 2),
      tapClass = _useTap6[0],
      triggerTap = _useTap6[1];
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
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
        border: "1.5px solid ".concat(isActive ? day.accent : isDone ? day.accent + "88" : "rgba(255,255,255,0.12)"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isActive ? "0 0 0 3px ".concat(day.accent, "28,0 0 16px ").concat(day.accent, "44") : "none",
        transition: "background 0.25s,box-shadow 0.25s,border-color 0.25s"
      }
    }, hasLogged && !isActive && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: day.accent,
        opacity: isDone ? 0.55 : 0.85,
        transition: "opacity 0.2s"
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

  // ── BOTTOM NAV ────────────────────────────────────────────────────────────────
  var NAV_REST_COLOR = "rgba(255,255,255,0.55)";
  function NavIconBtn(_ref22) {
    var tapClass = _ref22.tapClass,
      onClick = _ref22.onClick,
      isActive = _ref22.isActive,
      children = _ref22.children,
      label = _ref22.label;
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
  function BottomNav(_ref23) {
    var page = _ref23.page,
      setPage = _ref23.setPage,
      visibleDayIds = _ref23.visibleDayIds;
    var _thisWeekRange = thisWeekRange(),
      monStr = _thisWeekRange.monStr,
      sunStr = _thisWeekRange.sunStr;
    var days = DAYS.filter(function (d) {
      return visibleDayIds.includes(d.id);
    });
    var activeIdx = days.findIndex(function (d) {
      return d.id === page;
    });
    var isDay = activeIdx >= 0;
    var _useTap7 = useTap(),
      _useTap8 = _slicedToArray(_useTap7, 2),
      homeTap = _useTap8[0],
      triggerHome = _useTap8[1];
    var _useTap9 = useTap(),
      _useTap0 = _slicedToArray(_useTap9, 2),
      settingsTap = _useTap0[0],
      triggerSettings = _useTap0[1];
    var n = days.length;
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
      onClick: function onClick() {
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
        height: "".concat(NAV_CONTENT_H, "px"),
        overflow: "visible",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("defs", null, days.slice(0, -1).map(function (_, i) {
      var x1pct = (i + 0.5) / n * 100,
        x2pct = (i + 1 + 0.5) / n * 100;
      return /*#__PURE__*/React.createElement("linearGradient", {
        key: i,
        id: "seg-".concat(i),
        gradientUnits: "userSpaceOnUse",
        x1: "".concat(x1pct, "%"),
        y1: NAV_DOT_CY,
        x2: "".concat(x2pct, "%"),
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
    })))), days.slice(0, -1).map(function (_, i) {
      var x1pct = (i + 0.5) / n * 100,
        x2pct = (i + 1 + 0.5) / n * 100;
      var colored = isDay && i <= activeIdx;
      var isLeading = isDay && i === activeIdx;
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: "".concat(x1pct, "%"),
        y1: NAV_DOT_CY,
        x2: "".concat(x2pct, "%"),
        y2: NAV_DOT_CY,
        stroke: "rgba(255,255,255,0.08)",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), colored && /*#__PURE__*/React.createElement("line", {
        x1: "".concat(x1pct, "%"),
        y1: NAV_DOT_CY,
        x2: "".concat(x2pct, "%"),
        y2: NAV_DOT_CY,
        stroke: "url(#seg-".concat(i, ")"),
        strokeWidth: "3",
        strokeLinecap: "round",
        filter: isLeading ? "url(#line-glow)" : undefined
      }));
    })), days.map(function (d, i) {
      var isActive = page === d.id;
      var isDone = isDay && activeIdx > i;
      var hasLogged = d.blocks.flatMap(function (b) {
        return b.exercises || [];
      }).some(function (ex) {
        return getEntries(ex.name).some(function (e) {
          return e.date >= monStr && e.date <= sunStr;
        });
      });
      return /*#__PURE__*/React.createElement(NavDot, {
        key: d.id,
        day: d,
        isActive: isActive,
        isDone: isDone,
        hasLogged: hasLogged,
        onTap: function onTap() {
          return setPage(d.id);
        }
      });
    })), /*#__PURE__*/React.createElement(NavIconBtn, {
      tapClass: settingsTap,
      onClick: function onClick() {
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

  // ── HOME PAGE ─────────────────────────────────────────────────────────────────
  function HomePage(_ref24) {
    var version = _ref24.version,
      setPage = _ref24.setPage,
      onViewProgress = _ref24.onViewProgress,
      onDeleteDate = _ref24.onDeleteDate,
      onBWUpdate = _ref24.onBWUpdate;
    var _thisWeekRange2 = thisWeekRange(),
      monStr = _thisWeekRange2.monStr,
      sunStr = _thisWeekRange2.sunStr;
    var allWorkingEx = getAllWorkingExercises();
    var totalPRs = 0;
    allWorkingEx.forEach(function (ex) {
      var ents = getEntries(ex.name);
      ents.forEach(function (e, i) {
        if (!e.bodyweight && isPR(ents, i)) totalPRs++;
      });
    });
    // Count sessions this week from sessionsStore (proper ended sessions only)
    var sessions = new Set(sessionsStore.filter(function (s) {
      return s.date >= monStr && s.date <= sunStr;
    }).map(function (s) {
      return s.date + "_" + s.dayId;
    })).size;
    var top1RMs = [];
    allWorkingEx.filter(function (ex) {
      return !BODYWEIGHT_EX.has(ex.name) && !LIGHT_INTENT.has(ex.name);
    }).forEach(function (ex) {
      var ents = getEntries(ex.name);
      if (!ents.length) return;
      var best = Math.max.apply(Math, _toConsumableArray(ents.map(function (e) {
        return calc1RM(e.weight, e.reps);
      })));
      var bestEntry = ents.reduce(function (b, e) {
        return calc1RM(e.weight, e.reps) >= calc1RM(b.weight, b.reps) ? e : b;
      });
      top1RMs.push({
        name: ex.name,
        orm: best,
        weight: bestEntry.weight,
        reps: bestEntry.reps,
        accent: ex.dayAccent
      });
    });
    top1RMs.sort(function (a, b) {
      return b.orm - a.orm;
    });
    var trends = [];
    allWorkingEx.filter(function (ex) {
      return !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name);
    }).forEach(function (ex) {
      var ents = getEntries(ex.name);
      if (ents.length < 2) return;
      var first = ents[0].weight,
        last = ents[ents.length - 1].weight;
      if (first <= 0 || last <= 0) return; // skip BW/bodyweight-only or unweighted entries
      var pct = (last - first) / first * 100;
      var distinctDates = new Set(ents.map(function (e) {
        return e.date;
      })).size;
      if (distinctDates < 2) return; // need at least 2 separate days
      trends.push({
        name: ex.name,
        pct: pct,
        first: first,
        last: last,
        sessions: distinctDates,
        accent: ex.dayAccent
      });
    });
    trends.sort(function (a, b) {
      return b.pct - a.pct;
    });
    var topGainers = trends.slice(0, 3);
    var PROGRESS_EXEMPT = new Set(["Hang Clean", "Force Plate CMJ", "MB Slam → MB Lateral Toss", "Snap Down → Split Squat Jump", "Box Drop → Stick Landing", "Rear Delt Cable Fly", "Cuban Press", "Cuban Press (Sunday)", "Cable Y Raises", "Band Pull-Aparts", "Band Pull-Aparts (overhand)", "Band Pull-Aparts (Sunday)", "Suitcase Carry", "Copenhagen Plank", "Elevated Band Hip Flexor/Glute"]);
    var fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
    var fourWeeksAgoStr = fourWeeksAgo.toISOString().slice(0, 10);
    var needsAttention = [];
    allWorkingEx.filter(function (ex) {
      return !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name) && !PROGRESS_EXEMPT.has(ex.name);
    }).forEach(function (ex) {
      var allEnts = getEntries(ex.name);
      var window4w = allEnts.filter(function (e) {
        return e.date >= fourWeeksAgoStr;
      });
      if (window4w.length < 2) return;
      var wFirst = window4w[0].weight,
        wLast = window4w[window4w.length - 1].weight;
      var pct4w = wFirst === 0 ? wLast > 0 ? 100 : 0 : (wLast - wFirst) / wFirst * 100;
      if (pct4w < 10) {
        var distinctDates4w = new Set(window4w.map(function (e) {
          return e.date;
        })).size;
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
    needsAttention.sort(function (a, b) {
      return a.pct - b.pct;
    });
    var _useState33 = (0, _react.useState)(0),
      _useState34 = _slicedToArray(_useState33, 2),
      spiderWeekOffset = _useState34[0],
      setSpiderWeekOffset = _useState34[1];
    var spiderRange = getWeekRange(spiderWeekOffset);
    var groupVol = {
      CNS: 0,
      Legs: 0,
      Push: 0,
      Pull: 0,
      Core: 0,
      Stability: 0
    };
    allWorkingEx.forEach(function (ex) {
      var g = EX_GROUP[ex.name];
      if (!g) return;
      getEntries(ex.name).filter(function (e) {
        return e.date >= spiderRange.sunStr && e.date <= spiderRange.satStr;
      }).forEach(function (e) {
        groupVol[g] += e.weight > 0 ? e.weight * e.sets * e.reps : e.sets * e.reps * 10;
      });
    });
    var totalVol = Object.values(groupVol).reduce(function (a, b) {
      return a + b;
    }, 0) || 1;
    var spiderData = Object.fromEntries(GROUPS.map(function (g) {
      return [g, groupVol[g] / totalVol];
    }));
    var spiderHasData = Object.values(groupVol).some(function (v) {
      return v > 0;
    });
    var spiderLabel = spiderWeekOffset === 0 ? "This Week" : spiderWeekOffset === 1 ? "Last Week" : "".concat(spiderWeekOffset, " Weeks Ago");
    var _useState35 = (0, _react.useState)(0),
      _useState36 = _slicedToArray(_useState35, 2),
      heatMonthOffset = _useState36[0],
      setHeatMonthOffset = _useState36[1];
    var now = new Date();
    var heatDate = new Date(now.getFullYear(), now.getMonth() - heatMonthOffset, 1);
    var heatYear = heatDate.getFullYear(),
      heatMonth = heatDate.getMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysInMonth = new Date(heatYear, heatMonth + 1, 0).getDate();
    var firstDow = new Date(heatYear, heatMonth, 1).getDay();
    var loggedDates = new Set();
    allWorkingEx.forEach(function (ex) {
      return getEntries(ex.name).forEach(function (e) {
        return loggedDates.add(e.date);
      });
    });
    var todayS = todayStr();
    var calCells = [];
    for (var i = 0; i < firstDow; i++) calCells.push(null);
    for (var d = 1; d <= daysInMonth; d++) {
      var ds = "".concat(heatYear, "-").concat(String(heatMonth + 1).padStart(2, "0"), "-").concat(String(d).padStart(2, "0"));
      calCells.push({
        d: d,
        ds: ds,
        logged: loggedDates.has(ds),
        isToday: ds === todayS,
        isFuture: ds > todayS
      });
    }
    while (calCells.length % 7 !== 0) calCells.push(null);
    var calRows = [];
    for (var _i = 0; _i < calCells.length; _i += 7) calRows.push(calCells.slice(_i, _i + 7));
    var totalLoggedDays = _toConsumableArray(loggedDates).filter(function (d) {
      return d.startsWith("".concat(heatYear, "-").concat(String(heatMonth + 1).padStart(2, "0")));
    }).length;
    var allPRs = [];
    allWorkingEx.filter(function (ex) {
      return !BODYWEIGHT_EX.has(ex.name);
    }).forEach(function (ex) {
      var ents = getEntries(ex.name);
      ents.forEach(function (e, i) {
        if (isPR(ents, i)) allPRs.push(_objectSpread(_objectSpread({
          name: ex.name
        }, e), {}, {
          orm: calc1RM(e.weight, e.reps),
          accent: ex.dayAccent
        }));
      });
    });
    allPRs.sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });
    var btnStyle = {
      background: "transparent",
      border: "1px solid ".concat(W.border),
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
        padding: "0 0 calc(env(safe-area-inset-bottom) + 86px)",
        maxWidth: 680,
        margin: "0 auto",
        background: "linear-gradient(180deg,#131313 0%,#0a0a0a 300px,#080808 100%)"
      },
      className: "ai"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "calc(env(safe-area-inset-top) + 20px) 16px 16px",
        borderBottom: "1px solid ".concat(W.border)
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
        border: "1px solid ".concat(W.border),
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
        borderBottom: "1px solid ".concat(W.border)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "14px 16px",
        borderRight: "1px solid ".concat(W.border)
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
        borderRight: "1px solid ".concat(W.border)
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
    }, function () {
      var overdueDay = DAYS.filter(function (d) {
        return d.id !== "fri";
      }).find(function (d) {
        var last = dayLastLoggedDate(d.id);
        if (!last) return false;
        var diffDays = Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24));
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
      var last = dayLastLoggedDate(overdueDay.id);
      var diffDays = Math.floor((new Date() - new Date(last)) / (1000 * 60 * 60 * 24));
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
    }())), /*#__PURE__*/React.createElement("div", {
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
        borderBottom: "1px solid ".concat(W.border)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px",
        borderRight: "1px solid ".concat(W.border)
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
    }, "Log 2+ sessions per lift") : topGainers.map(function (t) {
      var barW = Math.min(100, Math.max(2, t.pct * 2.5));
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
          width: "".concat(barW, "%"),
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
      onClick: function onClick() {
        return setSpiderWeekOffset(function (o) {
          return o + 1;
        });
      }
    }, "\u2190"), spiderWeekOffset > 0 && /*#__PURE__*/React.createElement("button", {
      style: btnStyle,
      onClick: function onClick() {
        return setSpiderWeekOffset(function (o) {
          return o - 1;
        });
      }
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
        borderBottom: "1px solid ".concat(W.border)
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
        border: "1px solid rgba(255,71,87,0.2)",
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
        boxShadow: "0 0 8px ".concat(W.cyan)
      }
    }), allWorkingEx.filter(function (ex) {
      return !LIGHT_INTENT.has(ex.name) && !BODYWEIGHT_EX.has(ex.name);
    }).some(function (ex) {
      return getEntries(ex.name).length >= 2;
    }) ? "All tracked lifts progressing" : "Log 2+ sessions per lift to track") : needsAttention.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.name,
        style: {
          padding: "11px 12px",
          borderRadius: 8,
          marginBottom: 6,
          background: "rgba(255,71,87,0.04)",
          border: "1px solid rgba(255,71,87,0.1)"
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
      }, t.first, " \u2192 ", t.last, " lbs \xB7 ", t.sessions, " sessions"));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid ".concat(W.border)
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
      onClick: function onClick() {
        return setHeatMonthOffset(function (o) {
          return o + 1;
        });
      }
    }, "\u2190"), heatMonthOffset > 0 && /*#__PURE__*/React.createElement("button", {
      style: btnStyle,
      onClick: function onClick() {
        return setHeatMonthOffset(function (o) {
          return o - 1;
        });
      }
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
    }, ["S", "M", "T", "W", "T", "F", "S"].map(function (l, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          fontSize: 9,
          color: W.textDim,
          fontFamily: "'DM Mono',monospace",
          textAlign: "center",
          fontWeight: 500,
          letterSpacing: "0.05em"
        }
      }, l);
    })), calRows.map(function (row, ri) {
      return /*#__PURE__*/React.createElement("div", {
        key: ri,
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gap: 4,
          marginBottom: 4
        }
      }, row.map(function (cell, ci) {
        return /*#__PURE__*/React.createElement("div", {
          key: ci,
          onClick: function onClick() {
            return cell && cell.logged && !cell.isFuture && onDeleteDate(cell.ds);
          },
          style: {
            aspectRatio: "1",
            borderRadius: 6,
            background: !cell ? "transparent" : cell.isFuture ? "rgba(255,255,255,0.01)" : cell.logged ? W.cyan : "rgba(255,255,255,0.03)",
            border: cell !== null && cell !== void 0 && cell.isToday ? "1px solid ".concat(W.cyan) : cell !== null && cell !== void 0 && cell.logged ? "none" : "1px solid transparent",
            outline: cell !== null && cell !== void 0 && cell.isToday ? "2px solid ".concat(W.cyan, "22") : "none",
            cursor: cell !== null && cell !== void 0 && cell.logged && !cell.isFuture ? "pointer" : "default",
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
        }, cell.d));
      }));
    }))), /*#__PURE__*/React.createElement(WorkoutHistoryCard, {
      version: version,
      onDelete: onDeleteDate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        borderBottom: "1px solid ".concat(W.border)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px",
        borderRight: "1px solid ".concat(W.border)
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
    }, "Log sets to see your top lifts") : top1RMs.slice(0, 5).map(function (t, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.name,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 0",
          borderBottom: i < 4 ? "1px solid ".concat(W.border) : "none",
          animation: "setRowIn 0.2s ease ".concat(i * 0.05, "s both")
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 22,
          height: 22,
          borderRadius: 6,
          background: i === 0 ? W.cyanDim : W.surface,
          border: "1px solid ".concat(i === 0 ? W.cyan : W.border),
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
      }, "EST 1RM")));
    })), /*#__PURE__*/React.createElement("div", {
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
    }, "No PRs logged yet") : allPRs.slice(0, 12).map(function (pr, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          paddingBottom: 10,
          marginBottom: 4,
          borderBottom: i < Math.min(allPRs.length, 12) - 1 ? "1px solid ".concat(W.border) : "none",
          animation: "setRowIn 0.18s ease ".concat(i * 0.03, "s both")
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
          boxShadow: "0 0 6px ".concat(W.cyanGlow)
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
      }, "~", pr.orm, " 1RM"))));
    })))), /*#__PURE__*/React.createElement(BodyweightCard, {
      onUpdate: onBWUpdate
    })));
  }

  // ── EXERCISE ROW ──────────────────────────────────────────────────────────────
  function ExRow(_ref25) {
    var ex = _ref25.ex,
      num = _ref25.num,
      isWorking = _ref25.isWorking,
      isActive = _ref25.isActive,
      onHistory = _ref25.onHistory,
      onStartRest = _ref25.onStartRest,
      onSaved = _ref25.onSaved,
      bodyweight = _ref25.bodyweight,
      _ref25$fontScale = _ref25.fontScale,
      fontScale = _ref25$fontScale === void 0 ? "md" : _ref25$fontScale,
      _ref25$version = _ref25.version,
      version = _ref25$version === void 0 ? 0 : _ref25$version,
      _ref25$dayId = _ref25.dayId,
      dayId = _ref25$dayId === void 0 ? "" : _ref25$dayId,
      _ref25$onExerciseDone = _ref25.onExerciseDone,
      onExerciseDone = _ref25$onExerciseDone === void 0 ? null : _ref25$onExerciseDone,
      _ref25$exRefs = _ref25.exRefs,
      exRefs = _ref25$exRefs === void 0 ? null : _ref25$exRefs;
    var F = FS[fontScale] || FS.md;
    var entries = getEntries(ex.name);
    var isBW = BODYWEIGHT_EX.has(ex.name);
    var _useState37 = (0, _react.useState)(false),
      _useState38 = _slicedToArray(_useState37, 2),
      showInline = _useState38[0],
      setShowInline = _useState38[1];
    (0, _react.useEffect)(function () {
      if (isActive && isWorking) setShowInline(true);
    }, [isActive]);
    var rootRef = (0, _react.useCallback)(function (el) {
      if (exRefs && el) exRefs.current[ex.name] = el;
    }, [ex.name]);
    return /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      style: {
        borderBottom: "1px solid ".concat(W.border)
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
        fontSize: (F === null || F === void 0 ? void 0 : F.body) || 13,
        fontWeight: 600,
        color: W.text,
        lineHeight: 1.3
      }
    }, ex.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: (F === null || F === void 0 ? void 0 : F.label) || 10,
        color: W.textDim,
        fontFamily: "'DM Mono',monospace",
        marginTop: 2
      }
    }, ex.detail), function () {
      var ents = getEntries(ex.name);
      if (!ents.length) return isWorking ? /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 9,
          fontFamily: "'DM Mono',monospace",
          color: W.border,
          marginTop: 2,
          letterSpacing: "0.05em"
        }
      }, "First session") : null;
      var dates = _toConsumableArray(new Set(ents.map(function (e) {
        return e.date;
      }))).sort();
      var lastDate = dates[dates.length - 1];
      var lastSets = ents.filter(function (e) {
        return e.date === lastDate;
      });
      var isBW = BODYWEIGHT_EX.has(ex.name);
      var best = lastSets.reduce(function (b, e) {
        return e.weight > b.weight ? e : b;
      }, lastSets[0]);
      var label = isBW ? "BW +".concat(Math.max(0, best.weight - (getLatestBW() || best.weight)), "lbs") : "".concat(best.weight, "lbs");
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
    }()), /*#__PURE__*/React.createElement("div", {
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
      onClick: function onClick() {
        return onHistory(ex.name);
      },
      style: {
        background: W.surface,
        border: "1px solid ".concat(W.border),
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
  function Block(_ref26) {
    var block = _ref26.block,
      accent = _ref26.accent,
      onHistory = _ref26.onHistory,
      isWarmup = _ref26.isWarmup,
      isActive = _ref26.isActive,
      onStartRest = _ref26.onStartRest,
      onSaved = _ref26.onSaved,
      bodyweight = _ref26.bodyweight,
      _ref26$fontScale = _ref26.fontScale,
      fontScale = _ref26$fontScale === void 0 ? "md" : _ref26$fontScale,
      _ref26$dayId = _ref26.dayId,
      dayId = _ref26$dayId === void 0 ? "" : _ref26$dayId,
      _ref26$version = _ref26.version,
      version = _ref26$version === void 0 ? 0 : _ref26$version,
      _ref26$warmupDone = _ref26.warmupDone,
      warmupDone = _ref26$warmupDone === void 0 ? false : _ref26$warmupDone,
      _ref26$onWarmupDone = _ref26.onWarmupDone,
      onWarmupDone = _ref26$onWarmupDone === void 0 ? null : _ref26$onWarmupDone,
      _ref26$onExerciseDone = _ref26.onExerciseDone,
      onExerciseDone = _ref26$onExerciseDone === void 0 ? null : _ref26$onExerciseDone,
      _ref26$exRefs = _ref26.exRefs,
      exRefs = _ref26$exRefs === void 0 ? null : _ref26$exRefs;
    var _useState39 = (0, _react.useState)(function () {
        return isWarmup ? true : getBlockOpen(dayId, block.title);
      }),
      _useState40 = _slicedToArray(_useState39, 2),
      open = _useState40[0],
      setOpen = _useState40[1];
    var _useTap1 = useTap(),
      _useTap10 = _slicedToArray(_useTap1, 2),
      tapClass = _useTap10[0],
      triggerTap = _useTap10[1];
    var todayS = todayStr();
    var blockComplete = !isWarmup && isActive && (block.exercises || []).length > 0 && (block.exercises || []).every(function (ex) {
      var parsed = parseDetail(ex.detail);
      var needed = (parsed === null || parsed === void 0 ? void 0 : parsed.sets) || 1;
      var logged = getEntries(ex.name).filter(function (e) {
        return e.date === todayS && (e.dayId === dayId || !e.dayId);
      }).length;
      return logged >= needed;
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid ".concat(W.border)
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: tapClass,
      onClick: function onClick() {
        triggerTap();
        setOpen(function (o) {
          var next = !o;
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
        boxShadow: blockComplete ? "0 0 6px ".concat(W.cyan, "88") : undefined
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
        border: "1px solid rgba(0,201,177,0.25)",
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
        border: "1px solid rgba(0,201,177,0.25)",
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
      onClick: function onClick(e) {
        e.stopPropagation();
        onWarmupDone();
      },
      style: {
        fontSize: 9,
        fontFamily: "'DM Mono',monospace",
        padding: "4px 10px",
        borderRadius: 6,
        border: "1px solid ".concat(warmupDone ? "rgba(0,201,177,0.35)" : W.border),
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
    }, block.phases ? block.phases.map(function (ph, pi) {
      return /*#__PURE__*/React.createElement("div", {
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
      })), ph.exercises.map(function (ex, i) {
        return /*#__PURE__*/React.createElement(ExRow, {
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
        });
      }));
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, block.exercises.map(function (ex, i) {
      return /*#__PURE__*/React.createElement(ExRow, {
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
      });
    }), block.note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        padding: "9px 12px",
        borderRadius: 6,
        background: W.surface,
        borderLeft: "2px solid ".concat(W.cyan, "44"),
        fontSize: 11,
        color: W.textMid,
        lineHeight: 1.6,
        fontFamily: "'DM Mono',monospace"
      }
    }, block.note))));
  }

  // ── ESTIMATED TIME ────────────────────────────────────────────────────────────
  function parseDurationToMin(str) {
    var m = str === null || str === void 0 ? void 0 : str.match(/^(\d+):(\d{2})$/);
    if (!m) return null;
    return parseInt(m[1]) + parseInt(m[2]) / 60;
  }
  function getHistoricalAvgMin(dayId) {
    var sessions = sessionsStore.filter(function (s) {
      return s.dayId === dayId || dayId === "thu" && s.dayId === "fri" || dayId === "fri" && s.dayId === "thu";
    });
    var durations = sessions.map(function (s) {
      return parseDurationToMin(s.duration);
    }).filter(function (v) {
      return v != null;
    });
    if (!durations.length) return null;
    var recent = durations.slice(0, 5);
    return recent.reduce(function (a, b) {
      return a + b;
    }, 0) / recent.length;
  }
  function computeEstimatedTime(day) {
    var _day$warmup;
    var warmupMatch = (_day$warmup = day.warmup) === null || _day$warmup === void 0 || (_day$warmup = _day$warmup.duration) === null || _day$warmup === void 0 ? void 0 : _day$warmup.match(/(\d+)[–\-](\d+)/);
    var warmupMin = warmupMatch ? (parseInt(warmupMatch[1]) + parseInt(warmupMatch[2])) / 2 : 10;
    var workMin = 0;
    (day.blocks || []).forEach(function (block) {
      (block.exercises || []).forEach(function (ex) {
        var parsed = parseDetail(ex.detail || "");
        var sets = parsed ? parsed.sets : 3;
        var isLight = LIGHT_INTENT.has(ex.name) || BODYWEIGHT_EX.has(ex.name);
        var restSecs = isLight ? 45 : getRestTime(ex.name);
        var setTime = (30 + restSecs) * sets - restSecs;
        workMin += setTime / 60;
      });
    });
    var transitionMin = (day.blocks || []).length * 1.5;
    var calcTotal = warmupMin + workMin + transitionMin;
    var histAvg = getHistoricalAvgMin(day.id);
    var finalMin = calcTotal;
    if (histAvg != null) {
      var count = sessionsStore.filter(function (s) {
        return s.dayId === day.id || day.id === "thu" && s.dayId === "fri" || day.id === "fri" && s.dayId === "thu";
      }).length;
      var histWeight = Math.min(count, 5) / 5;
      finalMin = calcTotal * (1 - histWeight) + histAvg * histWeight;
    }
    var rounded = Math.round(finalMin / 5) * 5;
    return "~".concat(rounded, " min");
  }

  // ── DAY PAGE ──────────────────────────────────────────────────────────────────
  function DayPage(_ref27) {
    var _day$warmup2, _day$warmup3;
    var day = _ref27.day,
      onHistory = _ref27.onHistory,
      setPage = _ref27.setPage,
      onWorkoutComplete = _ref27.onWorkoutComplete,
      onSessionDeleted = _ref27.onSessionDeleted,
      bodyweight = _ref27.bodyweight,
      restVersion = _ref27.restVersion,
      visibleDayIds = _ref27.visibleDayIds,
      _ref27$fontScale = _ref27.fontScale,
      fontScale = _ref27$fontScale === void 0 ? "md" : _ref27$fontScale;
    var visibleDays = DAYS.filter(function (d) {
      return visibleDayIds.includes(d.id);
    });
    var dayIdx = visibleDays.findIndex(function (d) {
      return d.id === day.id;
    });
    var prev = dayIdx > 0 ? visibleDays[dayIdx - 1] : null,
      next = dayIdx < visibleDays.length - 1 ? visibleDays[dayIdx + 1] : null;
    var _cached = loadWorkoutState(day.id);
    var _useState41 = (0, _react.useState)((_cached === null || _cached === void 0 ? void 0 : _cached.started) || false),
      _useState42 = _slicedToArray(_useState41, 2),
      started = _useState42[0],
      setStarted = _useState42[1],
      _useState43 = (0, _react.useState)((_cached === null || _cached === void 0 ? void 0 : _cached.ended) || false),
      _useState44 = _slicedToArray(_useState43, 2),
      ended = _useState44[0],
      setEnded = _useState44[1];
    var _useState45 = (0, _react.useState)(false),
      _useState46 = _slicedToArray(_useState45, 2),
      showEndConfirm = _useState46[0],
      setShowEndConfirm = _useState46[1];
    var _useState47 = (0, _react.useState)((_cached === null || _cached === void 0 ? void 0 : _cached.elapsed) || 0),
      _useState48 = _slicedToArray(_useState47, 2),
      elapsed = _useState48[0],
      setElapsed = _useState48[1],
      _useState49 = (0, _react.useState)((_cached === null || _cached === void 0 ? void 0 : _cached.finalElapsed) || 0),
      _useState50 = _slicedToArray(_useState49, 2),
      finalElapsed = _useState50[0],
      setFinalElapsed = _useState50[1],
      _useState51 = (0, _react.useState)((_cached === null || _cached === void 0 ? void 0 : _cached.startTime) || null),
      _useState52 = _slicedToArray(_useState51, 2),
      startTime = _useState52[0],
      setStartTime = _useState52[1];
    var _useState53 = (0, _react.useState)(false),
      _useState54 = _slicedToArray(_useState53, 2),
      showDeleteModal = _useState54[0],
      setShowDeleteModal = _useState54[1];
    var _useState55 = (0, _react.useState)(false),
      _useState56 = _slicedToArray(_useState55, 2),
      showSummary = _useState56[0],
      setShowSummary = _useState56[1];
    var _useState57 = (0, _react.useState)(0),
      _useState58 = _slicedToArray(_useState57, 2),
      version = _useState58[0],
      setVersion = _useState58[1];
    var _useState59 = (0, _react.useState)(false),
      _useState60 = _slicedToArray(_useState59, 2),
      warmupDone = _useState60[0],
      setWarmupDone = _useState60[1];
    var _useState61 = (0, _react.useState)(false),
      _useState62 = _slicedToArray(_useState61, 2),
      autoEndShown = _useState62[0],
      setAutoEndShown = _useState62[1];
    var _useState63 = (0, _react.useState)(false),
      _useState64 = _slicedToArray(_useState63, 2),
      restActive = _useState64[0],
      setRestActive = _useState64[1];
    var _useState65 = (0, _react.useState)(90),
      _useState66 = _slicedToArray(_useState65, 2),
      restSecs = _useState66[0],
      setRestSecs = _useState66[1];
    var _useState67 = (0, _react.useState)(90),
      _useState68 = _slicedToArray(_useState67, 2),
      restTotal = _useState68[0],
      setRestTotal = _useState68[1];
    var _useState69 = (0, _react.useState)(""),
      _useState70 = _slicedToArray(_useState69, 2),
      restExName = _useState70[0],
      setRestExName = _useState70[1];
    var _useState71 = (0, _react.useState)(function () {
        return computeEstimatedTime(day);
      }),
      _useState72 = _slicedToArray(_useState71, 2),
      estTime = _useState72[0],
      setEstTime = _useState72[1];
    var restRef = (0, _react.useRef)(null);
    var blocksRef = (0, _react.useRef)(null);
    var firstBlockRef = (0, _react.useRef)(null);
    var exRefs = (0, _react.useRef)({});
    var swipe = useSwipe((0, _react.useCallback)(function () {
      if (next) setPage(next.id);
    }, [next]), (0, _react.useCallback)(function () {
      if (prev) setPage(prev.id);
    }, [prev]));
    (0, _react.useEffect)(function () {
      setEstTime(computeEstimatedTime(day));
    }, [restVersion, day.id]);
    (0, _react.useEffect)(function () {
      saveWorkoutState(day.id, {
        started: started,
        ended: ended,
        elapsed: elapsed,
        finalElapsed: finalElapsed,
        startTime: startTime
      });
    }, [started, ended, elapsed, finalElapsed, startTime]);
    (0, _react.useEffect)(function () {
      if (!started || ended) return;
      var id = setInterval(function () {
        return setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return function () {
        return clearInterval(id);
      };
    }, [started, ended, startTime]);
    function startRest(exName, duration) {
      if (restRef.current) clearInterval(restRef.current);
      setRestSecs(duration);
      setRestTotal(duration);
      setRestActive(true);
      setRestExName(exName);
      restRef.current = setInterval(function () {
        setRestSecs(function (s) {
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
    (0, _react.useEffect)(function () {
      return function () {
        if (restRef.current) clearInterval(restRef.current);
      };
    }, []);
    function fmtElapsed(s) {
      var m = Math.floor(s / 60),
        sec = s % 60;
      return "".concat(m, ":").concat(String(sec).padStart(2, "0"));
    }
    function handleStart() {
      haptic(40);
      setStarted(true);
      setStartTime(Date.now());
      setTimeout(function () {
        var el = blocksRef.current;
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
      var allEx = day.blocks.flatMap(function (b) {
        return b.exercises || [];
      });
      var todayS = todayStr();
      var loggedSets = allEx.flatMap(function (ex) {
        var ents = getEntries(ex.name).filter(function (e) {
          return e.date === todayS && (e.dayId === day.id || !e.dayId);
        });
        return ents.map(function (e) {
          return {
            name: ex.name,
            weight: e.weight,
            sets: e.sets,
            reps: e.reps
          };
        });
      });
      saveSession({
        dayId: day.id,
        date: todayS,
        duration: fmtElapsed(elapsed),
        exercisesLogged: allEx.filter(function (ex) {
          return getEntries(ex.name).some(function (e) {
            return e.date === todayS && (e.dayId === day.id || !e.dayId);
          });
        }).length,
        exercisesTotal: allEx.length,
        sets: loggedSets
      });
      if (day.id === "thu" || day.id === "fri") onWorkoutComplete(day.id);
    }
    var todayS = todayStr();
    var allBlocksComplete = started && !ended && day.blocks.length > 0 && day.blocks.every(function (block) {
      if (!block.exercises || !block.exercises.length) return true;
      return block.exercises.every(function (ex) {
        var parsed = parseDetail(ex.detail);
        var needed = (parsed === null || parsed === void 0 ? void 0 : parsed.sets) || 1;
        return getEntries(ex.name).filter(function (e) {
          return e.date === todayS && (e.dayId === day.id || !e.dayId);
        }).length >= needed;
      });
    });
    (0, _react.useEffect)(function () {
      if (allBlocksComplete && !autoEndShown) {
        setAutoEndShown(true);
        haptic([40, 30, 60, 30, 80]);
        setTimeout(function () {
          return setShowEndConfirm(true);
        }, 600); // slight delay so last set toggle settles
      }
    }, [allBlocksComplete, version]);
    var loggedToday = day.blocks.flatMap(function (b) {
      return b.exercises || [];
    }).filter(function (ex) {
      return getEntries(ex.name).some(function (e) {
        return e.date === todayS && (e.dayId === day.id || !e.dayId);
      });
    }).length;
    var totalEx = day.blocks.flatMap(function (b) {
      return b.exercises || [];
    }).length;
    var warmup = {
      icon: "🔥",
      title: "Warmup",
      sub: ((_day$warmup2 = day.warmup) === null || _day$warmup2 === void 0 ? void 0 : _day$warmup2.duration) || "",
      phases: ((_day$warmup3 = day.warmup) === null || _day$warmup3 === void 0 ? void 0 : _day$warmup3.phases) || []
    };
    var saved = function saved() {
      return setVersion(function (v) {
        return v + 1;
      });
    };
    function onExerciseDone(exName) {
      // Find next incomplete exercise in flat ordered list
      var allEx = day.blocks.flatMap(function (b) {
        return b.exercises || [];
      });
      var idx = allEx.findIndex(function (e) {
        return e.name === exName;
      });
      if (idx === -1) return;
      var todayS2 = todayStr();
      var _loop = function _loop() {
          var next = allEx[i];
          var parsed = parseDetail(next.detail);
          var needed = (parsed === null || parsed === void 0 ? void 0 : parsed.sets) || 1;
          var logged = getEntries(next.name).filter(function (e) {
            return e.date === todayS2 && (e.dayId === day.id || !e.dayId);
          }).length;
          if (logged < needed) {
            var el = exRefs.current[next.name];
            if (el) setTimeout(function () {
              return el.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }, 320);
            return {
              v: void 0
            };
          }
        },
        _ret;
      for (var i = idx + 1; i < allEx.length; i++) {
        _ret = _loop();
        if (_ret) return _ret.v;
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
        borderBottom: "1px solid ".concat(W.border),
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: "linear-gradient(90deg,".concat(day.accent, ",").concat(day.accent, "44,transparent)")
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "calc(env(safe-area-inset-top) + 16px) 16px 18px",
        background: "linear-gradient(135deg,".concat(day.accent, "08 0%,transparent 60%)")
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
      onClick: function onClick() {
        haptic(20);
        setShowEndConfirm(true);
      },
      style: {
        width: "100%",
        background: "transparent",
        color: W.red,
        border: "1px solid rgba(255,71,87,0.3)",
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
        border: "1px solid rgba(0,201,177,0.15)",
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
      onClick: function onClick() {
        return setShowSummary(true);
      },
      style: {
        background: W.cyanDim,
        border: "1px solid rgba(0,201,177,0.25)",
        borderRadius: 8,
        color: W.cyan,
        fontFamily: "'DM Mono',monospace",
        fontSize: 10,
        padding: "7px 12px",
        cursor: "pointer",
        fontWeight: 600
      }
    }, "Summary"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowDeleteModal(true);
      },
      style: {
        background: "rgba(255,71,87,0.08)",
        border: "1px solid rgba(255,71,87,0.2)",
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
        borderBottom: "1px solid ".concat(W.border),
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
      onWarmupDone: function onWarmupDone() {
        return setWarmupDone(function (d) {
          return !d;
        });
      }
    })), day.blocks.map(function (b, i) {
      return /*#__PURE__*/React.createElement("div", {
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
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        padding: "0 12px"
      }
    }, prev ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setPage(prev.id);
      },
      style: {
        flex: 1,
        background: W.surface,
        border: "1px solid ".concat(W.border),
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
      onClick: function onClick() {
        return setPage(next.id);
      },
      style: {
        flex: 1,
        background: W.surface,
        border: "1px solid ".concat(W.border),
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
      onCancel: function onCancel() {
        return setShowEndConfirm(false);
      }
    }), showSummary && /*#__PURE__*/React.createElement(WorkoutSummaryModal, {
      day: day,
      elapsed: finalElapsed,
      onClose: function onClose() {
        return setShowSummary(false);
      },
      onDelete: function onDelete() {
        setShowSummary(false);
        setShowDeleteModal(true);
      }
    }), showDeleteModal && /*#__PURE__*/React.createElement(DeleteDayModal, {
      date: todayS,
      dayId: day.id,
      onClose: function onClose() {
        return setShowDeleteModal(false);
      },
      onDeleted: function onDeleted() {
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
    var _useState73 = (0, _react.useState)("home"),
      _useState74 = _slicedToArray(_useState73, 2),
      page = _useState74[0],
      setPage = _useState74[1];
    var _useState75 = (0, _react.useState)(null),
      _useState76 = _slicedToArray(_useState75, 2),
      historyModal = _useState76[0],
      setHistoryModal = _useState76[1];
    var _useState77 = (0, _react.useState)(false),
      _useState78 = _slicedToArray(_useState77, 2),
      showProg = _useState78[0],
      setShowProg = _useState78[1];
    var _useState79 = (0, _react.useState)(0),
      _useState80 = _slicedToArray(_useState79, 2),
      version = _useState80[0],
      setVersion = _useState80[1];
    var _useState81 = (0, _react.useState)(null),
      _useState82 = _slicedToArray(_useState81, 2),
      deleteDate = _useState82[0],
      setDeleteDate = _useState82[1]; // {date, dayId} or just date string
    var _useState83 = (0, _react.useState)(false),
      _useState84 = _slicedToArray(_useState83, 2),
      loaded = _useState84[0],
      setLoaded = _useState84[1];
    var _useState85 = (0, _react.useState)(null),
      _useState86 = _slicedToArray(_useState85, 2),
      thuCompletedWeek = _useState86[0],
      setThuCompletedWeek = _useState86[1];
    var _useState87 = (0, _react.useState)({
        showThu: true,
        showFri: true
      }),
      _useState88 = _slicedToArray(_useState87, 2),
      thuFriVis = _useState88[0],
      setThuFriVis = _useState88[1];
    var _useState89 = (0, _react.useState)(0),
      _useState90 = _slicedToArray(_useState89, 2),
      bwVersion = _useState90[0],
      setBwVersion = _useState90[1];
    var _useState91 = (0, _react.useState)(0),
      _useState92 = _slicedToArray(_useState91, 2),
      restVersion = _useState92[0],
      setRestVersion = _useState92[1];
    var _useState93 = (0, _react.useState)("md"),
      _useState94 = _slicedToArray(_useState93, 2),
      fontScale = _useState94[0],
      setFontScale = _useState94[1];
    var _useState95 = (0, _react.useState)(null),
      _useState96 = _slicedToArray(_useState95, 2),
      saveFlash = _useState96[0],
      setSaveFlash = _useState96[1];
    var saveFlashTimer = (0, _react.useRef)(null);
    function handleFontScaleChange(v) {
      setFontScale(v);
      saveFontScale(v);
    }
    (0, _react.useEffect)(function () {
      saveErrorCallback = function saveErrorCallback(ok) {
        if (saveFlashTimer.current) clearTimeout(saveFlashTimer.current);
        setSaveFlash(ok ? "saved" : "error");
        saveFlashTimer.current = setTimeout(function () {
          return setSaveFlash(null);
        }, ok ? 1200 : 3000);
      };
      return function () {
        saveErrorCallback = null;
      };
    }, []);
    function refreshVisibility(completedWeek) {
      var vis = computeThuFriVisibility(completedWeek === isoWeek());
      setThuFriVis(vis);
      // page redirect handled by useEffect([visibleDayIds]) below — avoids stale closure
    }
    (0, _react.useEffect)(function () {
      loadAllFromStorage().then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res, _s, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return window.storage.get(THUFI_KEY);
            case 1:
              res = _context.v;
              if (res !== null && res !== void 0 && res.value) {
                _s = JSON.parse(res.value);
                setThuCompletedWeek(_s.week || null);
                refreshVisibility(_s.week || null);
              } else {
                refreshVisibility(null);
              }
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              refreshVisibility(null);
            case 3:
              setFontScale(fontScaleStore);
              setLoaded(true);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      })));
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js";
      document.head.appendChild(s);
      var interval = setInterval(function () {
        return setThuCompletedWeek(function (prev) {
          refreshVisibility(prev);
          return prev;
        });
      }, 60000);
      return function () {
        return clearInterval(interval);
      };
    }, []);
    (0, _react.useEffect)(function () {
      refreshVisibility(thuCompletedWeek);
    }, [thuCompletedWeek]);
    function handleWorkoutComplete(_x3) {
      return _handleWorkoutComplete.apply(this, arguments);
    }
    function _handleWorkoutComplete() {
      _handleWorkoutComplete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dayId) {
        var week, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(dayId === "thu" || dayId === "fri")) {
                _context2.n = 4;
                break;
              }
              week = isoWeek();
              setThuCompletedWeek(week);
              _context2.p = 1;
              _context2.n = 2;
              return window.storage.set(THUFI_KEY, JSON.stringify({
                week: week
              }));
            case 2:
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
            case 4:
              setVersion(function (v) {
                return v + 1;
              });
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }));
      return _handleWorkoutComplete.apply(this, arguments);
    }
    function handleAfterDelete() {
      return _handleAfterDelete.apply(this, arguments);
    }
    function _handleAfterDelete() {
      _handleAfterDelete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var week, hasThuFriThisWeek, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              // After any delete, check if thu/fri session still exists this week.
              // If not, un-hide the hidden day by clearing thuCompletedWeek.
              week = isoWeek();
              hasThuFriThisWeek = sessionsStore.some(function (s) {
                return (s.dayId === "thu" || s.dayId === "fri") && isoWeek(new Date(s.date)) === week;
              });
              if (hasThuFriThisWeek) {
                _context3.n = 4;
                break;
              }
              setThuCompletedWeek(null);
              _context3.p = 1;
              _context3.n = 2;
              return window.storage.set(THUFI_KEY, JSON.stringify({
                week: null
              }));
            case 2:
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
            case 4:
              saved();
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return _handleAfterDelete.apply(this, arguments);
    }
    var saved = function saved() {
      return setVersion(function (v) {
        return v + 1;
      });
    };
    var visibleDayIds = DAYS.filter(function (d) {
      if (d.id === "thu") return thuFriVis.showThu;
      if (d.id === "fri") return thuFriVis.showFri;
      return true;
    }).map(function (d) {
      return d.id;
    });
    // Global page order for swipe navigation
    var allPages = ["home"].concat(_toConsumableArray(visibleDayIds), ["settings"]);
    var globalSwipe = useSwipe((0, _react.useCallback)(function () {
      var i = allPages.indexOf(page);
      if (i < allPages.length - 1) setPage(allPages[i + 1]);
    }, [page, allPages.join(",")]), (0, _react.useCallback)(function () {
      var i = allPages.indexOf(page);
      if (i > 0) setPage(allPages[i - 1]);
    }, [page, allPages.join(",")]));
    var currentDay = DAYS.find(function (d) {
      return d.id === page;
    });
    var bodyweight = getLatestBW();
    (0, _react.useEffect)(function () {
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
        border: "2px solid ".concat(W.border),
        borderTopColor: W.cyan,
        animation: "spin 0.8s linear infinite"
      }
    }), /*#__PURE__*/React.createElement("style", null, "@keyframes spin{to{transform:rotate(360deg)}}"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'DM Mono',monospace",
        color: W.textDim,
        fontSize: 10,
        letterSpacing: "0.3em",
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
    }), /*#__PURE__*/React.createElement("style", null, "\n        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap');\n        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\n        html{font-size:16px;height:100%;}\n        body{overscroll-behavior-y:none;background:#0c0a09;height:100%;}\n        input,button{font-family:'DM Sans',sans-serif;-webkit-appearance:none;appearance:none;font-size:16px;}\n        input{color-scheme:dark;}\n        button{cursor:pointer;user-select:none;}\n        ::-webkit-scrollbar{width:2px;height:2px;}\n        ::-webkit-scrollbar-track{background:transparent;}\n        ::-webkit-scrollbar-thumb{background:#1e1e1e;border-radius:2px;}\n        input[type=number]::-webkit-inner-spin-button,\n        input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}\n        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n        @keyframes fadeIn{from{opacity:0}to{opacity:1}}\n        @keyframes scaleIn{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}\n        @keyframes setRowIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}\n        @keyframes blockOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}\n        @keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}\n        @keyframes prFlash{0%{opacity:1}60%{opacity:0.8}100%{opacity:0}}\n        @keyframes tapPop{0%{transform:scale(1)}35%{transform:scale(0.87)}100%{transform:scale(1)}}\n        .au{animation:fadeUp 0.22s cubic-bezier(0.16,1,0.3,1) both;}\n        .ai{animation:fadeIn 0.18s ease both;}\n        .as{animation:scaleIn 0.2s cubic-bezier(0.16,1,0.3,1) both;}\n        .tap{animation:tapPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both;}\n      "), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
      version: version,
      setPage: setPage,
      onViewProgress: function onViewProgress() {
        return setShowProg(true);
      },
      onDeleteDate: function onDeleteDate(d) {
        var dId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return setDeleteDate({
          date: d,
          dayId: dId
        });
      },
      onBWUpdate: function onBWUpdate() {
        return setBwVersion(function (v) {
          return v + 1;
        });
      }
    }) : page === "settings" ? /*#__PURE__*/React.createElement(RestSettingsPage, {
      onRestUpdate: function onRestUpdate() {
        saved();
        setRestVersion(function (v) {
          return v + 1;
        });
      },
      fontScale: fontScale,
      onFontScaleChange: handleFontScaleChange
    }) : currentDay && /*#__PURE__*/React.createElement(DayPage, {
      day: currentDay,
      onHistory: function onHistory(name) {
        return setHistoryModal(name);
      },
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
      onClose: function onClose() {
        return setHistoryModal(null);
      },
      onSaved: saved
    }), showProg && /*#__PURE__*/React.createElement(ProgressView, {
      onClose: function onClose() {
        return setShowProg(false);
      },
      version: version
    }), deleteDate && /*#__PURE__*/React.createElement(DeleteDayModal, {
      date: typeof deleteDate === "string" ? deleteDate : deleteDate.date,
      dayId: typeof deleteDate === "string" ? null : deleteDate.dayId,
      onClose: function onClose() {
        return setDeleteDate(null);
      },
      onDeleted: function onDeleted() {
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
  }
});
