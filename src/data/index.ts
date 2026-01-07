import { smiley } from "./smiley";
import { happy } from "./happy";
import type { Category } from "./categories";
import { sad } from "./sad";
import { angry } from "./angry";
import { animals } from "./animals";
import { blushing } from "./blushing";
import { celebration } from "./celebration";
import { demon } from "./demon";
import { love } from "./love";
import { shocked } from "./shoked";
import { shrugs } from "./shrugs";
import { sparkles } from "./sparkles";
import { tired } from "./tired";
import { tableFlip } from "./tableFlip";

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
  ...animals.map((e) => ({ emoticon: e, category: "animals" as const })),
  ...shrugs.map((e) => ({ emoticon: e, category: "shrugs" as const })),
  ...tableFlip.map((e) => ({ emoticon: e, category: "tableFlip" as const })),
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
  animals,
  shrugs,
  tableFlip,
} as const;
