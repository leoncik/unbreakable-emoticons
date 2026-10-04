import { smiley } from "./emoticons/smiley";
import { happy } from "./emoticons/happy";
import type { Category } from "./categories";
import { sad } from "./emoticons/sad";
import { angry } from "./emoticons/angry";
import { blushing } from "./emoticons/blushing";
import { celebration } from "./emoticons/celebration";
import { demon } from "./emoticons/demon";
import { love } from "./emoticons/love";
import { kiss } from "./emoticons/kiss";
import { shocked } from "./emoticons/shocked";
import { confused } from "./emoticons/confused";
import { nervous } from "./emoticons/nervous";
import { shrugs } from "./emoticons/shrugs";
import { sparkles } from "./emoticons/sparkles";
import { tired } from "./emoticons/tired";
import { tableFlip } from "./emoticons/tableFlip";
import { tableReturn } from "./emoticons/tableReturn";
import { greeting } from "./emoticons/greeting";
import { writing } from "./emoticons/writing";
import { facepalm } from "./emoticons/facepalm";
import { lenny } from "./emoticons/lenny";
import { hiding } from "./emoticons/hiding";
import { cat } from "./emoticons/cat";
import { bear } from "./emoticons/bear";

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

function tagged(list: readonly string[], category: Category): Emoticon[] {
  return list.map((emoticon) => ({ emoticon, category }));
}

// Build emoticons array with category tags
export const emoticons: Emoticon[] = [
  ...tagged(smiley, "smiley"),
  ...tagged(happy, "happy"),
  ...tagged(sad, "sad"),
  ...tagged(blushing, "blushing"),
  ...tagged(angry, "angry"),
  ...tagged(demon, "demon"),
  ...tagged(love, "love"),
  ...tagged(kiss, "kiss"),
  ...tagged(sparkles, "sparkles"),
  ...tagged(shocked, "shocked"),
  ...tagged(confused, "confused"),
  ...tagged(nervous, "nervous"),
  ...tagged(tired, "tired"),
  ...tagged(celebration, "celebration"),
  ...tagged(cat, "cat"),
  ...tagged(bear, "bear"),
  ...tagged(shrugs, "shrugs"),
  ...tagged(tableFlip, "tableFlip"),
  ...tagged(tableReturn, "tableReturn"),
  ...tagged(greeting, "greeting"),
  ...tagged(writing, "writing"),
  ...tagged(lenny, "lenny"),
  ...tagged(facepalm, "facepalm"),
  ...tagged(hiding, "hiding"),
];

export const emoticonsByCategory = {
  smiley,
  happy,
  sad,
  blushing,
  angry,
  demon,
  love,
  kiss,
  sparkles,
  shocked,
  confused,
  nervous,
  tired,
  celebration,
  cat,
  bear,
  shrugs,
  tableFlip,
  tableReturn,
  greeting,
  writing,
  lenny,
  facepalm,
  hiding,
} as const;
