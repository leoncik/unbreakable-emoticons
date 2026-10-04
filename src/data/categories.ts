export type Category =
  | "smiley"
  | "happy"
  | "sad"
  | "blushing"
  | "angry"
  | "demon"
  | "love"
  | "kiss"
  | "sparkles"
  | "shocked"
  | "confused"
  | "nervous"
  | "tired"
  | "celebration"
  | "cat"
  | "bear"
  | "shrugs"
  | "tableFlip"
  | "tableReturn"
  | "greeting"
  | "writing"
  | "lenny"
  | "facepalm"
  | "hiding";

export const categoryInfo: Record<
  Category,
  { label: string; emoji: string; navIcon: string }
> = {
  smiley: {
    label: "Smiley",
    emoji: ":⁠-⁠)",
    navIcon: ":⁠-⁠)",
  },
  happy: {
    label: "Happy",
    emoji: "( ^ω^ )",
    navIcon: "😊",
  },
  sad: {
    label: "Sad & crying",
    emoji: "(｡•́︿•̀｡)",
    navIcon: "😢",
  },
  blushing: {
    label: "Blushing",
    emoji: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
    navIcon: "😳",
  },
  angry: {
    label: "Angry",
    emoji: "（⇀‸↼‶)",
    navIcon: "😠",
  },
  demon: {
    label: "Demon",
    emoji: "↜(•w•)",
    navIcon: "👿",
  },
  love: {
    label: "Love",
    emoji: "♡⁠(⁠●⁠´⁠ω⁠`⁠●⁠)⁠♡",
    navIcon: "💕",
  },
  kiss: {
    label: "Kiss",
    emoji: "(づ￣ ³￣)づ",
    navIcon: "😘",
  },
  sparkles: {
    label: "Sparkles",
    emoji: "☆⁠*⁠:⁠.⁠｡⁠.⁠o⁠(⁠≧⁠▽⁠≦⁠)⁠o⁠.⁠｡⁠.⁠:⁠*⁠☆",
    navIcon: "✨",
  },
  shocked: {
    label: "Shocked",
    emoji: "Σ⁠(⁠°⁠△⁠°⁠|⁠|⁠|⁠)",
    navIcon: "🙀",
  },
  confused: {
    label: "Confused",
    emoji: "(・・?)",
    navIcon: "😕",
  },
  nervous: {
    label: "Nervous",
    emoji: "(;;)",
    navIcon: "😰",
  },
  tired: {
    label: "Tired & sleepy",
    emoji: "(⁠￣⁠o⁠￣⁠)⁠ ⁠.⁠ ⁠z⁠ ⁠Z",
    navIcon: "😴",
  },
  celebration: {
    label: "Celebration",
    emoji: "♪⁠ヽ⁠(⁠´⁠▽⁠`⁠)⁠/",
    navIcon: "🎉",
  },
  cat: {
    label: "Cat",
    emoji: "ฅ₍^•⩊ •マⳊ",
    navIcon: "🐱",
  },
  bear: {
    label: "Bear",
    emoji: "ʕ•ᴥ•ʔ",
    navIcon: "🐻",
  },
  shrugs: {
    label: "Shrugs",
    emoji: "¯\\_(ツ)_/¯",
    navIcon: "🤷",
  },
  tableFlip: {
    label: "Table flip",
    emoji: "(⁠╯⁠°⁠□⁠°⁠）⁠╯⁠︵⁠ ⁠┻⁠━⁠┻",
    navIcon: "🪑💥",
  },
  tableReturn: {
    label: "Table return",
    emoji: "┬─┬ノ( º _ ºノ)",
    navIcon: "🪑✨",
  },
  greeting: {
    label: "Greeting",
    emoji: "(・∀・)ノ",
    navIcon: "👋",
  },
  writing: {
    label: "Writing",
    emoji: "___〆(・∀・)",
    navIcon: "✍️",
  },
  lenny: {
    label: "Lenny",
    emoji: "( ͡° ͜ʖ ͡°)",
    navIcon: "😏",
  },
  facepalm: {
    label: "Facepalm",
    emoji: "(－‸ლ)",
    navIcon: "🤦",
  },
  hiding: {
    label: "Hiding",
    emoji: "|･ω･)",
    navIcon: "🫣",
  },
};

export const categories: Category[] = [
  "smiley",
  "happy",
  "sad",
  "blushing",
  "angry",
  "demon",
  "love",
  "kiss",
  "sparkles",
  "shocked",
  "confused",
  "nervous",
  "tired",
  "celebration",
  "cat",
  "bear",
  "shrugs",
  "tableFlip",
  "tableReturn",
  "greeting",
  "writing",
  "lenny",
  "facepalm",
  "hiding",
];
