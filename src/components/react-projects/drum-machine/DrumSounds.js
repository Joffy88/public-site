import hihat from "../audio/hi-hat.wav";
import snare from "../audio/snare.wav";
import kick from "../audio/kick.wav";
import highTom from "../audio/high-tom.wav";
import midTom from "../audio/mid-tom.wav";
import lowTom from "../audio/low-tom.wav";
import ride from "../audio/ride.wav";
import crash from "../audio/crash.wav";
import halfHat from "../audio/half-hat.wav";

const drumSounds = [
  {
    key: 1,
    name: "Hi-Hat",
    trigger: "Q",
    audioLoc: hihat,
    code: 81,
  },
  {
    key: 2,
    name: "Snare",
    trigger: "W",
    audioLoc: snare,
    code: 87,
  },
  {
    key: 3,
    name: "Kick",
    trigger: "E",
    audioLoc: kick,
    code: 69,
  },
  {
    key: 4,
    name: "High-Tom",
    trigger: "A",
    audioLoc: highTom,
    code: 65,
  },
  {
    key: 5,
    name: "Mid-Tom",
    trigger: "S",
    audioLoc: midTom,
    code: 83,
  },
  {
    key: 6,
    name: "Low-Tom",
    trigger: "D",
    audioLoc: lowTom,
    code: 68,
  },
  {
    key: 7,
    name: "Ride",
    trigger: "Z",
    audioLoc: ride,
    code: 90,
  },
  {
    key: 8,
    name: "Crash",
    trigger: "X",
    audioLoc: crash,
    code: 88,
  },
  {
    key: 9,
    name: "Half-Hat",
    trigger: "C",
    audioLoc: halfHat,
    code: 67,
  },
];

export default drumSounds;
