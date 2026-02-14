export type Category =
  | "smiley"
  | "happy"
  | "sad"
  | "blushing"
  | "angry"
  | "demon"
  | "love"
  | "sparkles"
  | "shocked"
  | "tired"
  | "celebration"
  | "cat"
  | "shrugs"
  | "tableFlip"
  | "greeting"
  | "writing"
  | "facepalm"
  | "lenny"
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
  sad: { label: "Sad & crying", emoji: "(｡•́︿•̀｡)", navIcon: "😢" },
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
    navIcon: "🍆",
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
  "sparkles",
  "shocked",
  "tired",
  "celebration",
  "cat",
  "shrugs",
  "tableFlip",
  "greeting",
  "writing",
  "lenny",
  "facepalm",
  "hiding",
];
