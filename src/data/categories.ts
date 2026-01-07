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
  | "animals"
  | "shrugs"
  | "tableFlip";

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
  sad: { label: "Sad", emoji: "(｡•́︿•̀｡)", navIcon: "😢" },
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
    label: "Tired",
    emoji: "(⁠￣⁠o⁠￣⁠)⁠ ⁠.⁠ ⁠z⁠ ⁠Z",
    navIcon: "😴",
  },
  celebration: {
    label: "Celebration",
    emoji: "♪⁠ヽ⁠(⁠´⁠▽⁠`⁠)⁠/",
    navIcon: "🎉",
  },
  animals: {
    label: "Animals",
    emoji: "ʕ⁠•⁠ᴥ⁠•⁠ʔ",
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
  "animals",
  "shrugs",
  "tableFlip",
];
