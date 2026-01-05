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
  | "table-flip";

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
  "table-flip": {
    label: "Table flip",
    emoji: "(⁠╯⁠°⁠□⁠°⁠）⁠╯⁠︵⁠ ⁠┻⁠━⁠┻",
    navIcon: "🪑💥",
  },
};

export const emoticons: Emoticon[] = [
  // Smiley - Classic text smileys
  {
    emoticon: ":-)",
    category: "smiley",
  },
  {
    emoticon: ":)",
    category: "smiley",
  },
  {
    emoticon: ":-(",
    category: "smiley",
  },
  {
    emoticon: ":(",
    category: "smiley",
  },
  {
    emoticon: ":-D",
    category: "smiley",
  },
  {
    emoticon: ":D",
    category: "smiley",
  },
  {
    emoticon: ";-)",
    category: "smiley",
  },
  {
    emoticon: ";)",
    category: "smiley",
  },
  {
    emoticon: ":-P",
    category: "smiley",
  },
  {
    emoticon: ":P",
    category: "smiley",
  },
  {
    emoticon: ":-O",
    category: "smiley",
  },
  {
    emoticon: ":O",
    category: "smiley",
  },
  {
    emoticon: "XD",
    category: "smiley",
  },
  {
    emoticon: ":-/",
    category: "smiley",
  },
  {
    emoticon: "<3",
    category: "smiley",
  },

  // Happy
  {
    emoticon: "(◕‿◕)",
    category: "happy",
  },
  {
    emoticon: "(◠‿◠)",
    category: "happy",
  },
  {
    emoticon: "(｡◕‿◕｡)",
    category: "happy",
  },
  {
    emoticon: "(◕ᴗ◕✿)",
    category: "happy",
  },
  {
    emoticon: "(◠ω◠)",
    category: "happy",
  },
  {
    emoticon: "(´・ᴗ・`)",
    category: "happy",
  },
  {
    emoticon: "(✧ω✧)",
    category: "happy",
  },
  {
    emoticon: "(◡‿◡)",
    category: "happy",
  },
  {
    emoticon: "╰(◡‿◡)╯",
    category: "happy",
  },
  {
    emoticon: "(◕‿◕)♡",
    category: "happy",
  },
  {
    emoticon: "(ノ´ヮ`)ノ*: ・゚✧",
    category: "happy",
  },
  {
    emoticon: "(●´ω`●)",
    category: "happy",
  },
  {
    emoticon: "(☆▽☆)",
    category: "happy",
  },
  {
    emoticon: "(◠‿・)—☆",
    category: "happy",
  },
  {
    emoticon: "٩(◕‿◕)۶",
    category: "happy",
  },

  // Sad
  {
    emoticon: "(´;ω;`)",
    category: "sad",
  },
  {
    emoticon: "(T_T)",
    category: "sad",
  },
  {
    emoticon: "(╥﹏╥)",
    category: "sad",
  },
  {
    emoticon: "(ಥ_ಥ)",
    category: "sad",
  },
  {
    emoticon: "(;´༎ຶД༎ຶ`)",
    category: "sad",
  },
  {
    emoticon: "(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥`)",
    category: "sad",
  },
  {
    emoticon: "(╯︵╰,)",
    category: "sad",
  },
  {
    emoticon: "(◞‸◟)",
    category: "sad",
  },
  {
    emoticon: "(´・ω・`)",
    category: "sad",
  },
  {
    emoticon: "(๑◕︵◕๑)",
    category: "sad",
  },
  {
    emoticon: "( ´_ゝ`)",
    category: "sad",
  },
  {
    emoticon: "(っ˘̩╭╮˘̩)っ",
    category: "sad",
  },
  {
    emoticon: "(｡•́︿•̀｡)",
    category: "sad",
  },

  // Blushing
  {
    emoticon: "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
    category: "blushing",
  },
  {
    emoticon: "(*´∀`*)",
    category: "blushing",
  },
  {
    emoticon: "(〃▽〃)",
    category: "blushing",
  },
  {
    emoticon: "(//ω//)",
    category: "blushing",
  },
  {
    emoticon: "(⺣◡⺣)♡*",
    category: "blushing",
  },
  {
    emoticon: "(*ノωノ)",
    category: "blushing",
  },
  {
    emoticon: "(⁄⁄⁄ω⁄⁄⁄)",
    category: "blushing",
  },
  {
    emoticon: "(*/ω＼*)",
    category: "blushing",
  },
  {
    emoticon: "(´,,•ω•,,)♡",
    category: "blushing",
  },
  {
    emoticon: "(◕//◕)",
    category: "blushing",
  },
  {
    emoticon: "(#^.^#)",
    category: "blushing",
  },
  {
    emoticon: "(｡･ω･｡)ノ♡",
    category: "blushing",
  },
  {
    emoticon: "(灬º‿º灬)♡",
    category: "blushing",
  },

  // Angry
  {
    emoticon: "(╬▔皿▔)╯",
    category: "angry",
  },
  {
    emoticon: "(ノಠ益ಠ)ノ彡┻━┻",
    category: "angry",
  },
  {
    emoticon: "(ಠ_ಠ)",
    category: "angry",
  },
  {
    emoticon: "(`ε´)",
    category: "angry",
  },
  {
    emoticon: "(>﹏<)",
    category: "angry",
  },
  {
    emoticon: "凸(`△´#)",
    category: "angry",
  },
  {
    emoticon: "(╯°□°)╯︵ ┻━┻",
    category: "angry",
  },
  {
    emoticon: "(≧Д≦)",
    category: "angry",
  },
  {
    emoticon: "(◣_◢)",
    category: "angry",
  },
  {
    emoticon: "(`A´)",
    category: "angry",
  },
  {
    emoticon: "( ` ω ´ )",
    category: "angry",
  },
  {
    emoticon: "(▼へ▼メ)",
    category: "angry",
  },

  // Demon
  {
    emoticon: "(◣∀◢)ψ",
    category: "demon",
  },
  {
    emoticon: "(´◉◞౪◟◉`)",
    category: "demon",
  },
  {
    emoticon: "ψ(｀∇´)ψ",
    category: "demon",
  },
  {
    emoticon: "( ◞ਊ◟)",
    category: "demon",
  },
  {
    emoticon: "(屮゚Д゚)屮",
    category: "demon",
  },
  {
    emoticon: "(☼Д☼)",
    category: "demon",
  },
  {
    emoticon: "ψ(☆ｗ☆)ψ",
    category: "demon",
  },
  {
    emoticon: "(◞≼◎≽◟◞౪◟◞≼◎≽◟)",
    category: "demon",
  },
  {
    emoticon: "༼ つ ◕_◕ ༽つ",
    category: "demon",
  },
  {
    emoticon: "(ʘᗩʘ')",
    category: "demon",
  },
  {
    emoticon: "( ͡° ͜ʖ ͡°)",
    category: "demon",
  },
  {
    emoticon: "(◉◞౪◟◉)",
    category: "demon",
  },
  // Love
  {
    emoticon: "(´♡‿♡`)",
    category: "love",
  },
  {
    emoticon: "(◍•ᴗ•◍)❤",
    category: "love",
  },
  {
    emoticon: "♡(◡‿◡)",
    category: "love",
  },
  {
    emoticon: "(♥ω♥*)",
    category: "love",
  },
  {
    emoticon: "(๑>◡<๑)♡",
    category: "love",
  },
  {
    emoticon: "(*˘︶˘*).｡.:*♡",
    category: "love",
  },
  {
    emoticon: "(♡°▽°♡)",
    category: "love",
  },
  {
    emoticon: "(｡♥‿♥｡)",
    category: "love",
  },
  {
    emoticon: "(✿ ♥‿♥)",
    category: "love",
  },
  {
    emoticon: "♡＾▽＾♡",
    category: "love",
  },
  {
    emoticon: "(´ε｀ )♡",
    category: "love",
  },
  {
    emoticon: "(ᵔᴥᵔ)♡",
    category: "love",
  },
  {
    emoticon: "♡(●´ω`●)♡",
    category: "love",
  },
  {
    emoticon: "(♡˙︶˙♡)",
    category: "love",
  },
  {
    emoticon: "♡(◕ᗜ◕✿)",
    category: "love",
  },

  // Sparkles
  {
    emoticon: "✧(≖ ◡ ≖✿)",
    category: "sparkles",
  },
  {
    emoticon: "(ノ´ヮ`)ノ*: ・゚✧",
    category: "sparkles",
  },
  {
    emoticon: "✧٩(ˊᗜˋ*)و✧*。",
    category: "sparkles",
  },
  {
    emoticon: "(ﾉ◕ヮ◕)ﾉ*:・゚✧",
    category: "sparkles",
  },
  {
    emoticon: "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    category: "sparkles",
  },
  {
    emoticon: "*:..｡o○☆*゚¨゚゚",
    category: "sparkles",
  },
  {
    emoticon: "☆彡",
    category: "sparkles",
  },
  {
    emoticon: "✩°｡⋆⸜(ू˙꒳​˙ )",
    category: "sparkles",
  },
  {
    emoticon: "(◕ᴗ◕✿)✧",
    category: "sparkles",
  },
  {
    emoticon: "･ﾟ✧ヽ(◕ヮ◕ヽ)",
    category: "sparkles",
  },
  {
    emoticon: "˚✧₊⁎( ˘ω˘ )⁎⁺˳✧",
    category: "sparkles",
  },
  {
    emoticon: "٩(●˙▿˙●)۶…⋆ฺ",
    category: "sparkles",
  },

  // Shocked
  {
    emoticon: "(゜◇゜)",
    category: "shocked",
  },
  {
    emoticon: "Σ(°△°|||)",
    category: "shocked",
  },
  {
    emoticon: "(ʘ‿ʘ)",
    category: "shocked",
  },
  {
    emoticon: "(°ロ°)!",
    category: "shocked",
  },
  {
    emoticon: "Σ(゜゜)",
    category: "shocked",
  },
  {
    emoticon: "(⊙_⊙)",
    category: "shocked",
  },
  {
    emoticon: "(◎_◎;)",
    category: "shocked",
  },
  {
    emoticon: "Σ(°Д°)",
    category: "shocked",
  },
  {
    emoticon: "(๑•̀ㅁ•́๑)✧",
    category: "shocked",
  },
  {
    emoticon: "(°▽°)",
    category: "shocked",
  },
  {
    emoticon: "∑(O_O;)",
    category: "shocked",
  },
  {
    emoticon: "(○o○)",
    category: "shocked",
  },

  // Tired
  {
    emoticon: "(´-ω-`)",
    category: "tired",
  },
  {
    emoticon: "(。-ω-)zzz",
    category: "tired",
  },
  {
    emoticon: "(-.-)Zzz・・・・",
    category: "tired",
  },
  {
    emoticon: "(=_=)",
    category: "tired",
  },
  {
    emoticon: "(´〜`*)",
    category: "tired",
  },
  {
    emoticon: "(o・ω・o)",
    category: "tired",
  },
  {
    emoticon: "(－_－) zzZ",
    category: "tired",
  },
  {
    emoticon: "(￣o￣) . z Z",
    category: "tired",
  },
  {
    emoticon: "꒰ঌ(⌯᷄ᴗ⌯᷅)ა",
    category: "tired",
  },
  {
    emoticon: "( ´~`)",
    category: "tired",
  },
  {
    emoticon: "(´△`)",
    category: "tired",
  },
  {
    emoticon: "(´ぅω・`)",
    category: "tired",
  },

  // Celebration
  {
    emoticon: "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    category: "celebration",
  },
  {
    emoticon: "٩(◕‿◕)۶",
    category: "celebration",
  },
  {
    emoticon: "\\(★ω★)/",
    category: "celebration",
  },
  {
    emoticon: "(ノ^_^)ノ",
    category: "celebration",
  },
  {
    emoticon: "\\(◎o◎)/",
    category: "celebration",
  },
  {
    emoticon: "٩(^ᴗ^)۶",
    category: "celebration",
  },
  {
    emoticon: "(ノ´ヮ`)ノ*: ・゚",
    category: "celebration",
  },
  {
    emoticon: "ヽ(>∀<☆)ノ",
    category: "celebration",
  },
  {
    emoticon: "＼(◎o◎)／",
    category: "celebration",
  },
  {
    emoticon: "☆ヾ(*´・∀・)ノ☆",
    category: "celebration",
  },
  {
    emoticon: "(ノ°∀°)ノ⌒・*:.｡",
    category: "celebration",
  },
  {
    emoticon: "♪ヽ(´▽`)/",
    category: "celebration",
  },

  // Animals
  {
    emoticon: "(=^・ω・^=)",
    category: "animals",
  },
  {
    emoticon: "(◕ᴥ◕)",
    category: "animals",
  },
  {
    emoticon: "(・ω・)",
    category: "animals",
  },
  {
    emoticon: "ʕ•ᴥ•ʔ",
    category: "animals",
  },
  {
    emoticon: "(^._.^)ﾉ",
    category: "animals",
  },
  {
    emoticon: "(≧◡≦)",
    category: "animals",
  },
  {
    emoticon: 'ヾ(=`ω´=)ノ"',
    category: "animals",
  },
  {
    emoticon: "(=✪ᆽ✪=)",
    category: "animals",
  },
  {
    emoticon: "(◉ω◉)",
    category: "animals",
  },
  {
    emoticon: "( ͡°ᴥ ͡° ʋ)",
    category: "animals",
  },
  {
    emoticon: "(ฅ^・ω・^ฅ)",
    category: "animals",
  },
  {
    emoticon: "ε(´סּ︵סּ`)з",
    category: "animals",
  },
  {
    emoticon: "(^◇^)",
    category: "animals",
  },
  {
    emoticon: "(◕‿◕)っ🐱",
    category: "animals",
  },
  {
    emoticon: "( ᵔᴥᵔ )",
    category: "animals",
  },

  // Shrugs
  {
    emoticon: "¯\\_(ツ)_/¯",
    category: "shrugs",
  },
  {
    emoticon: "┐(´д`)┌",
    category: "shrugs",
  },
  {
    emoticon: "╮(╯_╰)╭",
    category: "shrugs",
  },
  {
    emoticon: "¯\\(°_o)/¯",
    category: "shrugs",
  },
  {
    emoticon: "(ㆆ_ㆆ)",
    category: "shrugs",
  },
  {
    emoticon: "( ´_ゝ`)",
    category: "shrugs",
  },
  // Table flip
  {
    emoticon: "(╯°□°）╯︵ ┻━┻",
    category: "table-flip",
  },
  {
    emoticon: "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
    category: "table-flip",
  },
  {
    emoticon: "┻┻ ︵㇏(òДó㇏)",
    category: "table-flip",
  },
  {
    emoticon: "(ノ-_-)ノ・・・~~┻━┻",
    category: "table-flip",
  },
  {
    emoticon: "(ﾉ´･ω･)ﾉ ﾐ ┸━┸",
    category: "table-flip",
  },
  {
    emoticon: "(┛◉Д◉) ┛彡┻━┻",
    category: "table-flip",
  },
];

export const categories: Category[] = [
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
  "table-flip",
];
