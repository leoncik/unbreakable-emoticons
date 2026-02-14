import { smiley } from "./emoticons/smiley";
import { happy } from "./emoticons/happy";
import type { Category } from "./categories";
import { sad } from "./emoticons/sad";
import { angry } from "./emoticons/angry";
import { blushing } from "./emoticons/blushing";
import { celebration } from "./emoticons/celebration";
import { demon } from "./emoticons/demon";
import { love } from "./emoticons/love";
import { shocked } from "./emoticons/shocked";
import { shrugs } from "./emoticons/shrugs";
import { sparkles } from "./emoticons/sparkles";
import { tired } from "./emoticons/tired";
import { tableFlip } from "./emoticons/tableFlip";
import { greeting } from "./emoticons/greeting";
import { writing } from "./emoticons/writing";
import { facepalm } from "./emoticons/facepalm";
import { lenny } from "./emoticons/lenny";
import { hiding } from "./emoticons/hiding";
import { cat } from "./emoticons/cat";

// Word Joiner character to prevent line breaks
const WJ = "\u2060";

// Non-breaking space character to prevent line breaks
const NBSP = "\u00A0";

// Wrap emoticon with word joiners between each character and replace spaces with non-breaking spaces.
export function makeUnbreakable(emoticon: string): string {
  return emoticon
    .split("")
    .map((character) => (character === " " ? NBSP : character))
    .join(WJ);
}

export interface Emoticon {
  emoticon: string;
  category: Category;
}

// Build emoticons array with category tags
export const emoticons: Emoticon[] = [
  ...smiley.map((e) => ({ emoticon: e, category: "smiley" as const })),
  ...happy.map((e) => ({ emoticon: e, category: "happy" as const })),
  ...sad.map((e) => ({ emoticon: e, category: "sad" as const })),
  ...blushing.map((e) => ({ emoticon: e, category: "blushing" as const })),
  ...angry.map((e) => ({ emoticon: e, category: "angry" as const })),
  ...demon.map((e) => ({ emoticon: e, category: "demon" as const })),
  ...love.map((e) => ({ emoticon: e, category: "love" as const })),
  ...sparkles.map((e) => ({ emoticon: e, category: "sparkles" as const })),
  ...tired.map((e) => ({ emoticon: e, category: "tired" as const })),
  ...celebration.map((e) => ({
    emoticon: e,
    category: "celebration" as const,
  })),
  ...cat.map((e) => ({ emoticon: e, category: "cat" as const })),
  ...shrugs.map((e) => ({ emoticon: e, category: "shrugs" as const })),
  ...tableFlip.map((e) => ({ emoticon: e, category: "tableFlip" as const })),
  ...greeting.map((e) => ({ emoticon: e, category: "greeting" as const })),
  ...writing.map((e) => ({ emoticon: e, category: "writing" as const })),
  ...lenny.map((e) => ({ emoticon: e, category: "lenny" as const })),
  ...facepalm.map((e) => ({ emoticon: e, category: "facepalm" as const })),
  ...hiding.map((e) => ({ emoticon: e, category: "hiding" as const })),
];

export const emoticonsByCategory = {
  smiley,
  happy,
  sad,
  blushing,
  angry,
  demon,
  love,
  sparkles,
  shocked,
  tired,
  celebration,
  cat,
  shrugs,
  tableFlip,
  greeting,
  writing,
  lenny,
  facepalm,
  hiding,
} as const;
