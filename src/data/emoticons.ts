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
  id: string;
  emoticon: string;
  tags: string[];
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
  | "shrugs";

export const categoryInfo: Record<
  Category,
  { label: string; emoji: string; color: string }
> = {
  smiley: { label: "Smiley", emoji: ":⁠-⁠)", color: "kawaii-yellow" },
  happy: { label: "Happy", emoji: "( ^ω^ )", color: "kawaii-yellow" },
  sad: { label: "Sad", emoji: "(｡•́︿•̀｡)", color: "kawaii-sky" },
  blushing: {
    label: "Blushing",
    emoji: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
    color: "kawaii-pink",
  },
  angry: { label: "Angry", emoji: "（⇀‸↼‶)", color: "kawaii-peach" },
  demon: { label: "Demon", emoji: "↜(•w•)", color: "kawaii-lavender" },
  love: { label: "Love", emoji: "♡⁠(⁠●⁠´⁠ω⁠`⁠●⁠)⁠♡", color: "kawaii-pink" },
  sparkles: {
    label: "Sparkles",
    emoji: "☆⁠*⁠:⁠.⁠｡⁠.⁠o⁠(⁠≧⁠▽⁠≦⁠)⁠o⁠.⁠｡⁠.⁠:⁠*⁠☆",
    color: "kawaii-yellow",
  },
  shocked: {
    label: "Shocked",
    emoji: "Σ⁠(⁠°⁠△⁠°⁠|⁠|⁠|⁠)",
    color: "kawaii-sky",
  },
  tired: {
    label: "Tired",
    emoji: "(⁠￣⁠o⁠￣⁠)⁠ ⁠.⁠ ⁠z⁠ ⁠Z",
    color: "kawaii-lavender",
  },
  celebration: {
    label: "Celebration",
    emoji: "♪⁠ヽ⁠(⁠´⁠▽⁠`⁠)⁠/",
    color: "kawaii-peach",
  },
  animals: { label: "Animals", emoji: "ʕ⁠•⁠ᴥ⁠•⁠ʔ", color: "kawaii-mint" },
  shrugs: { label: "Shrugs", emoji: "¯\\_(ツ)_/¯", color: "kawaii-mint" },
};

export const emoticons: Emoticon[] = [
  // Smiley - Classic text smileys (15)
  {
    id: "smiley-1",
    emoticon: ":-)",
    tags: ["smiley", "smile", "happy", "classic"],
    category: "smiley",
  },
  {
    id: "smiley-2",
    emoticon: ":)",
    tags: ["smiley", "smile", "happy", "simple"],
    category: "smiley",
  },
  {
    id: "smiley-3",
    emoticon: ":-(",
    tags: ["smiley", "sad", "frown", "classic"],
    category: "smiley",
  },
  {
    id: "smiley-4",
    emoticon: ":(",
    tags: ["smiley", "sad", "frown", "simple"],
    category: "smiley",
  },
  {
    id: "smiley-5",
    emoticon: ":-D",
    tags: ["smiley", "grin", "happy", "big smile"],
    category: "smiley",
  },
  {
    id: "smiley-6",
    emoticon: ":D",
    tags: ["smiley", "grin", "happy", "laugh"],
    category: "smiley",
  },
  {
    id: "smiley-7",
    emoticon: ";-)",
    tags: ["smiley", "wink", "flirt", "classic"],
    category: "smiley",
  },
  {
    id: "smiley-8",
    emoticon: ";)",
    tags: ["smiley", "wink", "flirt", "simple"],
    category: "smiley",
  },
  {
    id: "smiley-9",
    emoticon: ":-P",
    tags: ["smiley", "tongue", "playful", "tease"],
    category: "smiley",
  },
  {
    id: "smiley-10",
    emoticon: ":P",
    tags: ["smiley", "tongue", "playful", "silly"],
    category: "smiley",
  },
  {
    id: "smiley-11",
    emoticon: ":-O",
    tags: ["smiley", "surprised", "shocked", "wow"],
    category: "smiley",
  },
  {
    id: "smiley-12",
    emoticon: ":O",
    tags: ["smiley", "surprised", "shocked", "gasp"],
    category: "smiley",
  },
  {
    id: "smiley-13",
    emoticon: "XD",
    tags: ["smiley", "laugh", "funny", "lol"],
    category: "smiley",
  },
  {
    id: "smiley-14",
    emoticon: ":-/",
    tags: ["smiley", "unsure", "skeptical", "confused"],
    category: "smiley",
  },
  {
    id: "smiley-15",
    emoticon: "<3",
    tags: ["smiley", "heart", "love", "classic"],
    category: "smiley",
  },

  // Happy (15)
  {
    id: "happy-1",
    emoticon: "(◕‿◕)",
    tags: ["happy", "smile", "joy", "cute", "pleased"],
    category: "happy",
  },
  {
    id: "happy-2",
    emoticon: "(◠‿◠)",
    tags: ["happy", "smile", "gentle", "soft", "content"],
    category: "happy",
  },
  {
    id: "happy-3",
    emoticon: "(｡◕‿◕｡)",
    tags: ["happy", "adorable", "sweet", "joyful"],
    category: "happy",
  },
  {
    id: "happy-4",
    emoticon: "(◕ᴗ◕✿)",
    tags: ["happy", "flower", "cute", "girl", "pretty"],
    category: "happy",
  },
  {
    id: "happy-5",
    emoticon: "(◠ω◠)",
    tags: ["happy", "cat", "content", "pleased", "soft"],
    category: "happy",
  },
  {
    id: "happy-6",
    emoticon: "(´・ᴗ・`)",
    tags: ["happy", "gentle", "soft", "innocent"],
    category: "happy",
  },
  {
    id: "happy-7",
    emoticon: "(✧ω✧)",
    tags: ["happy", "excited", "sparkle", "star"],
    category: "happy",
  },
  {
    id: "happy-8",
    emoticon: "(◡‿◡)",
    tags: ["happy", "closed eyes", "peaceful", "content"],
    category: "happy",
  },
  {
    id: "happy-9",
    emoticon: "╰(◡‿◡)╯",
    tags: ["happy", "arms up", "cheerful", "excited"],
    category: "happy",
  },
  {
    id: "happy-10",
    emoticon: "(◕‿◕)♡",
    tags: ["happy", "love", "heart", "sweet"],
    category: "happy",
  },
  {
    id: "happy-11",
    emoticon: "(ノ´ヮ`)ノ*: ・゚✧",
    tags: ["happy", "magic", "sparkle", "excited"],
    category: "happy",
  },
  {
    id: "happy-12",
    emoticon: "(●´ω`●)",
    tags: ["happy", "cute", "soft", "gentle"],
    category: "happy",
  },
  {
    id: "happy-13",
    emoticon: "(☆▽☆)",
    tags: ["happy", "star", "excited", "amazed"],
    category: "happy",
  },
  {
    id: "happy-14",
    emoticon: "(◠‿・)—☆",
    tags: ["happy", "wink", "magic", "playful"],
    category: "happy",
  },
  {
    id: "happy-15",
    emoticon: "٩(◕‿◕)۶",
    tags: ["happy", "celebrate", "arms", "excited"],
    category: "happy",
  },

  // Sad (13)
  {
    id: "sad-1",
    emoticon: "(´;ω;`)",
    tags: ["sad", "crying", "tears", "upset"],
    category: "sad",
  },
  {
    id: "sad-2",
    emoticon: "(T_T)",
    tags: ["sad", "crying", "tears", "upset", "simple"],
    category: "sad",
  },
  {
    id: "sad-3",
    emoticon: "(╥﹏╥)",
    tags: ["sad", "crying", "sobbing", "upset"],
    category: "sad",
  },
  {
    id: "sad-4",
    emoticon: "(ಥ_ಥ)",
    tags: ["sad", "crying", "emotional", "moved"],
    category: "sad",
  },
  {
    id: "sad-5",
    emoticon: "(;´༎ຶД༎ຶ`)",
    tags: ["sad", "crying", "dramatic", "sobbing"],
    category: "sad",
  },
  {
    id: "sad-6",
    emoticon: "(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥`)",
    tags: ["sad", "crying", "tears", "upset"],
    category: "sad",
  },
  {
    id: "sad-7",
    emoticon: "(╯︵╰,)",
    tags: ["sad", "disappointed", "down", "dejected"],
    category: "sad",
  },
  {
    id: "sad-8",
    emoticon: "(◞‸◟)",
    tags: ["sad", "disappointed", "frown", "down"],
    category: "sad",
  },
  {
    id: "sad-9",
    emoticon: "(´・ω・`)",
    tags: ["sad", "worried", "concerned", "unsure"],
    category: "sad",
  },
  {
    id: "sad-10",
    emoticon: "(๑◕︵◕๑)",
    tags: ["sad", "puppy eyes", "please", "begging"],
    category: "sad",
  },
  {
    id: "sad-11",
    emoticon: "( ´_ゝ`)",
    tags: ["sad", "disappointed", "unimpressed", "bored"],
    category: "sad",
  },
  {
    id: "sad-12",
    emoticon: "(っ˘̩╭╮˘̩)っ",
    tags: ["sad", "hug", "comfort", "need hug"],
    category: "sad",
  },
  {
    id: "sad-13",
    emoticon: "(｡•́︿•̀｡)",
    tags: ["sad", "pouty", "upset", "unhappy"],
    category: "sad",
  },

  // Blushing (13)
  {
    id: "blush-1",
    emoticon: "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
    tags: ["blush", "shy", "embarrassed", "cute"],
    category: "blushing",
  },
  {
    id: "blush-2",
    emoticon: "(*´∀`*)",
    tags: ["blush", "happy", "embarrassed", "pleased"],
    category: "blushing",
  },
  {
    id: "blush-3",
    emoticon: "(〃▽〃)",
    tags: ["blush", "shy", "embarrassed", "cute"],
    category: "blushing",
  },
  {
    id: "blush-4",
    emoticon: "(//ω//)",
    tags: ["blush", "shy", "embarrassed", "flustered"],
    category: "blushing",
  },
  {
    id: "blush-5",
    emoticon: "(⺣◡⺣)♡*",
    tags: ["blush", "love", "heart", "smitten"],
    category: "blushing",
  },
  {
    id: "blush-6",
    emoticon: "(*ノωノ)",
    tags: ["blush", "hiding", "shy", "embarrassed"],
    category: "blushing",
  },
  {
    id: "blush-7",
    emoticon: "(⁄⁄⁄ω⁄⁄⁄)",
    tags: ["blush", "shy", "embarrassed", "flustered"],
    category: "blushing",
  },
  {
    id: "blush-8",
    emoticon: "(*/ω＼*)",
    tags: ["blush", "hiding face", "shy", "embarrassed"],
    category: "blushing",
  },
  {
    id: "blush-9",
    emoticon: "(´,,•ω•,,)♡",
    tags: ["blush", "love", "cute", "heart"],
    category: "blushing",
  },
  {
    id: "blush-10",
    emoticon: "(◕//◕)",
    tags: ["blush", "shy", "embarrassed", "cute"],
    category: "blushing",
  },
  {
    id: "blush-11",
    emoticon: "(#^.^#)",
    tags: ["blush", "happy", "embarrassed", "pleased"],
    category: "blushing",
  },
  {
    id: "blush-12",
    emoticon: "(｡･ω･｡)ノ♡",
    tags: ["blush", "wave", "love", "greeting"],
    category: "blushing",
  },
  {
    id: "blush-13",
    emoticon: "(灬º‿º灬)♡",
    tags: ["blush", "love", "adoring", "smitten"],
    category: "blushing",
  },

  // Angry (12)
  {
    id: "angry-1",
    emoticon: "(╬▔皿▔)╯",
    tags: ["angry", "mad", "furious", "rage"],
    category: "angry",
  },
  {
    id: "angry-2",
    emoticon: "(ノಠ益ಠ)ノ彡┻━┻",
    tags: ["angry", "table flip", "rage", "furious"],
    category: "angry",
  },
  {
    id: "angry-3",
    emoticon: "(ಠ_ಠ)",
    tags: ["angry", "disapproval", "glare", "stern"],
    category: "angry",
  },
  {
    id: "angry-4",
    emoticon: "(`ε´)",
    tags: ["angry", "annoyed", "pouting", "upset"],
    category: "angry",
  },
  {
    id: "angry-5",
    emoticon: "(>﹏<)",
    tags: ["angry", "frustrated", "annoyed", "upset"],
    category: "angry",
  },
  {
    id: "angry-6",
    emoticon: "凸(`△´#)",
    tags: ["angry", "rude", "middle finger", "furious"],
    category: "angry",
  },
  {
    id: "angry-7",
    emoticon: "(╯°□°)╯︵ ┻━┻",
    tags: ["angry", "table flip", "rage", "classic"],
    category: "angry",
  },
  {
    id: "angry-8",
    emoticon: "(≧Д≦)",
    tags: ["angry", "frustrated", "yelling", "upset"],
    category: "angry",
  },
  {
    id: "angry-9",
    emoticon: "(◣_◢)",
    tags: ["angry", "glare", "stern", "serious"],
    category: "angry",
  },
  {
    id: "angry-10",
    emoticon: "(`A´)",
    tags: ["angry", "shouting", "yelling", "mad"],
    category: "angry",
  },
  {
    id: "angry-11",
    emoticon: "( ` ω ´ )",
    tags: ["angry", "determined", "stern", "serious"],
    category: "angry",
  },
  {
    id: "angry-12",
    emoticon: "(▼へ▼メ)",
    tags: ["angry", "glare", "yakuza", "intimidating"],
    category: "angry",
  },

  // Demon (12)
  {
    id: "demon-1",
    emoticon: "(◣∀◢)ψ",
    tags: ["demon", "evil", "devil", "mischief"],
    category: "demon",
  },
  {
    id: "demon-2",
    emoticon: "(´◉◞౪◟◉`)",
    tags: ["demon", "crazy", "insane", "creepy"],
    category: "demon",
  },
  {
    id: "demon-3",
    emoticon: "ψ(｀∇´)ψ",
    tags: ["demon", "evil", "devil", "horns"],
    category: "demon",
  },
  {
    id: "demon-4",
    emoticon: "( ◞ਊ◟)",
    tags: ["demon", "creepy", "weird", "strange"],
    category: "demon",
  },
  {
    id: "demon-5",
    emoticon: "(屮゚Д゚)屮",
    tags: ["demon", "evil", "claws", "attack"],
    category: "demon",
  },
  {
    id: "demon-6",
    emoticon: "(☼Д☼)",
    tags: ["demon", "intense", "scary", "creepy"],
    category: "demon",
  },
  {
    id: "demon-7",
    emoticon: "ψ(☆ｗ☆)ψ",
    tags: ["demon", "cute evil", "playful", "mischief"],
    category: "demon",
  },
  {
    id: "demon-8",
    emoticon: "(◞≼◎≽◟◞౪◟◞≼◎≽◟)",
    tags: ["demon", "creepy", "spider", "weird"],
    category: "demon",
  },
  {
    id: "demon-9",
    emoticon: "༼ つ ◕_◕ ༽つ",
    tags: ["demon", "give", "grabby", "want"],
    category: "demon",
  },
  {
    id: "demon-10",
    emoticon: "(ʘᗩʘ')",
    tags: ["demon", "scared", "horror", "creepy"],
    category: "demon",
  },
  {
    id: "demon-11",
    emoticon: "( ͡° ͜ʖ ͡°)",
    tags: ["demon", "lenny", "suggestive", "smirk"],
    category: "demon",
  },
  {
    id: "demon-12",
    emoticon: "(◉◞౪◟◉)",
    tags: ["demon", "crazy", "weird", "derp"],
    category: "demon",
  },

  // Love (15)
  {
    id: "love-1",
    emoticon: "(´♡‿♡`)",
    tags: ["love", "heart eyes", "adoring", "smitten"],
    category: "love",
  },
  {
    id: "love-2",
    emoticon: "(◍•ᴗ•◍)❤",
    tags: ["love", "heart", "cute", "adoring"],
    category: "love",
  },
  {
    id: "love-3",
    emoticon: "♡(◡‿◡)",
    tags: ["love", "heart", "happy", "content"],
    category: "love",
  },
  {
    id: "love-4",
    emoticon: "(♥ω♥*)",
    tags: ["love", "heart eyes", "smitten", "adoring"],
    category: "love",
  },
  {
    id: "love-5",
    emoticon: "(๑>◡<๑)♡",
    tags: ["love", "excited", "heart", "happy"],
    category: "love",
  },
  {
    id: "love-6",
    emoticon: "(*˘︶˘*).｡.:*♡",
    tags: ["love", "dreamy", "romantic", "sparkle"],
    category: "love",
  },
  {
    id: "love-7",
    emoticon: "(♡°▽°♡)",
    tags: ["love", "excited", "heart", "happy"],
    category: "love",
  },
  {
    id: "love-8",
    emoticon: "(｡♥‿♥｡)",
    tags: ["love", "heart eyes", "adoring", "sweet"],
    category: "love",
  },
  {
    id: "love-9",
    emoticon: "(✿ ♥‿♥)",
    tags: ["love", "flower", "heart", "sweet"],
    category: "love",
  },
  {
    id: "love-10",
    emoticon: "♡＾▽＾♡",
    tags: ["love", "happy", "hearts", "joyful"],
    category: "love",
  },
  {
    id: "love-11",
    emoticon: "(´ε｀ )♡",
    tags: ["love", "kiss", "heart", "romantic"],
    category: "love",
  },
  {
    id: "love-12",
    emoticon: "(ᵔᴥᵔ)♡",
    tags: ["love", "animal", "cute", "heart"],
    category: "love",
  },
  {
    id: "love-13",
    emoticon: "♡(●´ω`●)♡",
    tags: ["love", "happy", "hearts", "cute"],
    category: "love",
  },
  {
    id: "love-14",
    emoticon: "(♡˙︶˙♡)",
    tags: ["love", "content", "happy", "hearts"],
    category: "love",
  },
  {
    id: "love-15",
    emoticon: "♡(◕ᗜ◕✿)",
    tags: ["love", "flower", "heart", "cute"],
    category: "love",
  },

  // Sparkles (12)
  {
    id: "sparkle-1",
    emoticon: "✧(≖ ◡ ≖✿)",
    tags: ["sparkle", "wink", "magic", "flower"],
    category: "sparkles",
  },
  {
    id: "sparkle-2",
    emoticon: "(ノ´ヮ`)ノ*: ・゚✧",
    tags: ["sparkle", "magic", "throwing", "excited"],
    category: "sparkles",
  },
  {
    id: "sparkle-3",
    emoticon: "✧٩(ˊᗜˋ*)و✧*。",
    tags: ["sparkle", "excited", "celebration", "magic"],
    category: "sparkles",
  },
  {
    id: "sparkle-4",
    emoticon: "(ﾉ◕ヮ◕)ﾉ*:・゚✧",
    tags: ["sparkle", "magic", "throwing", "excited"],
    category: "sparkles",
  },
  {
    id: "sparkle-5",
    emoticon: "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    tags: ["sparkle", "excited", "star", "happy"],
    category: "sparkles",
  },
  {
    id: "sparkle-6",
    emoticon: "*:..｡o○☆*゚¨゚゚",
    tags: ["sparkle", "stars", "magic", "decoration"],
    category: "sparkles",
  },
  {
    id: "sparkle-7",
    emoticon: "☆彡",
    tags: ["sparkle", "shooting star", "simple", "star"],
    category: "sparkles",
  },
  {
    id: "sparkle-8",
    emoticon: "✩°｡⋆⸜(ू˙꒳​˙ )",
    tags: ["sparkle", "stars", "cute", "dreamy"],
    category: "sparkles",
  },
  {
    id: "sparkle-9",
    emoticon: "(◕ᴗ◕✿)✧",
    tags: ["sparkle", "flower", "cute", "magic"],
    category: "sparkles",
  },
  {
    id: "sparkle-10",
    emoticon: "･ﾟ✧ヽ(◕ヮ◕ヽ)",
    tags: ["sparkle", "magic", "catch", "excited"],
    category: "sparkles",
  },
  {
    id: "sparkle-11",
    emoticon: "˚✧₊⁎( ˘ω˘ )⁎⁺˳✧",
    tags: ["sparkle", "sleepy", "peaceful", "dreamy"],
    category: "sparkles",
  },
  {
    id: "sparkle-12",
    emoticon: "٩(●˙▿˙●)۶…⋆ฺ",
    tags: ["sparkle", "happy", "arms up", "excited"],
    category: "sparkles",
  },

  // Shocked (12)
  {
    id: "shock-1",
    emoticon: "(゜◇゜)",
    tags: ["shocked", "surprised", "amazed", "wow"],
    category: "shocked",
  },
  {
    id: "shock-2",
    emoticon: "Σ(°△°|||)",
    tags: ["shocked", "surprised", "scared", "panic"],
    category: "shocked",
  },
  {
    id: "shock-3",
    emoticon: "(ʘ‿ʘ)",
    tags: ["shocked", "stare", "wide eyes", "amazed"],
    category: "shocked",
  },
  {
    id: "shock-4",
    emoticon: "(°ロ°)!",
    tags: ["shocked", "surprised", "exclaim", "wow"],
    category: "shocked",
  },
  {
    id: "shock-5",
    emoticon: "Σ(゜゜)",
    tags: ["shocked", "surprised", "simple", "wow"],
    category: "shocked",
  },
  {
    id: "shock-6",
    emoticon: "(⊙_⊙)",
    tags: ["shocked", "stare", "surprised", "amazed"],
    category: "shocked",
  },
  {
    id: "shock-7",
    emoticon: "(◎_◎;)",
    tags: ["shocked", "surprised", "nervous", "sweat"],
    category: "shocked",
  },
  {
    id: "shock-8",
    emoticon: "Σ(°Д°)",
    tags: ["shocked", "surprised", "yelling", "panic"],
    category: "shocked",
  },
  {
    id: "shock-9",
    emoticon: "(๑•̀ㅁ•́๑)✧",
    tags: ["shocked", "determined", "serious", "focused"],
    category: "shocked",
  },
  {
    id: "shock-10",
    emoticon: "(°▽°)",
    tags: ["shocked", "surprised", "happy", "amazed"],
    category: "shocked",
  },
  {
    id: "shock-11",
    emoticon: "∑(O_O;)",
    tags: ["shocked", "surprised", "scared", "panic"],
    category: "shocked",
  },
  {
    id: "shock-12",
    emoticon: "(○o○)",
    tags: ["shocked", "surprised", "simple", "wow"],
    category: "shocked",
  },

  // Tired (12)
  {
    id: "tired-1",
    emoticon: "(´-ω-`)",
    tags: ["tired", "sleepy", "exhausted", "weary"],
    category: "tired",
  },
  {
    id: "tired-2",
    emoticon: "(。-ω-)zzz",
    tags: ["tired", "sleeping", "zzz", "nap"],
    category: "tired",
  },
  {
    id: "tired-3",
    emoticon: "(-.-)Zzz・・・・",
    tags: ["tired", "sleeping", "zzz", "deep sleep"],
    category: "tired",
  },
  {
    id: "tired-4",
    emoticon: "(=_=)",
    tags: ["tired", "sleepy", "exhausted", "simple"],
    category: "tired",
  },
  {
    id: "tired-5",
    emoticon: "(´〜`*)",
    tags: ["tired", "yawn", "sleepy", "drowsy"],
    category: "tired",
  },
  {
    id: "tired-6",
    emoticon: "(o・ω・o)",
    tags: ["tired", "dazed", "confused", "sleepy"],
    category: "tired",
  },
  {
    id: "tired-7",
    emoticon: "(－_－) zzZ",
    tags: ["tired", "sleeping", "zzz", "nap"],
    category: "tired",
  },
  {
    id: "tired-8",
    emoticon: "(￣o￣) . z Z",
    tags: ["tired", "sleeping", "zzz", "snoring"],
    category: "tired",
  },
  {
    id: "tired-9",
    emoticon: "꒰ঌ(⌯᷄ᴗ⌯᷅)ა",
    tags: ["tired", "sleepy", "cute", "drowsy"],
    category: "tired",
  },
  {
    id: "tired-10",
    emoticon: "( ´~`)",
    tags: ["tired", "exhausted", "weary", "simple"],
    category: "tired",
  },
  {
    id: "tired-11",
    emoticon: "(´△`)",
    tags: ["tired", "exhausted", "done", "weary"],
    category: "tired",
  },
  {
    id: "tired-12",
    emoticon: "(´ぅω・`)",
    tags: ["tired", "waking up", "drowsy", "sleepy"],
    category: "tired",
  },

  // Celebration (12)
  {
    id: "celeb-1",
    emoticon: "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    tags: ["celebration", "party", "excited", "stars"],
    category: "celebration",
  },
  {
    id: "celeb-2",
    emoticon: "٩(◕‿◕)۶",
    tags: ["celebration", "arms up", "happy", "excited"],
    category: "celebration",
  },
  {
    id: "celeb-3",
    emoticon: "\\(★ω★)/",
    tags: ["celebration", "star", "excited", "happy"],
    category: "celebration",
  },
  {
    id: "celeb-4",
    emoticon: "(ノ^_^)ノ",
    tags: ["celebration", "throwing", "happy", "excited"],
    category: "celebration",
  },
  {
    id: "celeb-5",
    emoticon: "\\(◎o◎)/",
    tags: ["celebration", "amazed", "excited", "wow"],
    category: "celebration",
  },
  {
    id: "celeb-6",
    emoticon: "٩(^ᴗ^)۶",
    tags: ["celebration", "arms up", "happy", "cute"],
    category: "celebration",
  },
  {
    id: "celeb-7",
    emoticon: "(ノ´ヮ`)ノ*: ・゚",
    tags: ["celebration", "magic", "sparkle", "excited"],
    category: "celebration",
  },
  {
    id: "celeb-8",
    emoticon: "ヽ(>∀<☆)ノ",
    tags: ["celebration", "star", "excited", "happy"],
    category: "celebration",
  },
  {
    id: "celeb-9",
    emoticon: "＼(◎o◎)／",
    tags: ["celebration", "shocked", "excited", "wow"],
    category: "celebration",
  },
  {
    id: "celeb-10",
    emoticon: "☆ヾ(*´・∀・)ノ☆",
    tags: ["celebration", "stars", "wave", "excited"],
    category: "celebration",
  },
  {
    id: "celeb-11",
    emoticon: "(ノ°∀°)ノ⌒・*:.｡",
    tags: ["celebration", "throwing", "magic", "sparkle"],
    category: "celebration",
  },
  {
    id: "celeb-12",
    emoticon: "♪ヽ(´▽`)/",
    tags: ["celebration", "music", "happy", "singing"],
    category: "celebration",
  },

  // Animals (15)
  {
    id: "animal-1",
    emoticon: "(=^・ω・^=)",
    tags: ["animal", "cat", "cute", "kitty"],
    category: "animals",
  },
  {
    id: "animal-2",
    emoticon: "(◕ᴥ◕)",
    tags: ["animal", "dog", "cute", "puppy"],
    category: "animals",
  },
  {
    id: "animal-3",
    emoticon: "(・ω・)",
    tags: ["animal", "cat", "simple", "cute"],
    category: "animals",
  },
  {
    id: "animal-4",
    emoticon: "ʕ•ᴥ•ʔ",
    tags: ["animal", "bear", "cute", "teddy"],
    category: "animals",
  },
  {
    id: "animal-5",
    emoticon: "(^._.^)ﾉ",
    tags: ["animal", "cat", "wave", "hello"],
    category: "animals",
  },
  {
    id: "animal-6",
    emoticon: "(≧◡≦)",
    tags: ["animal", "bunny", "cute", "happy"],
    category: "animals",
  },
  {
    id: "animal-7",
    emoticon: 'ヾ(=`ω´=)ノ"',
    tags: ["animal", "cat", "angry", "hiss"],
    category: "animals",
  },
  {
    id: "animal-8",
    emoticon: "(=✪ᆽ✪=)",
    tags: ["animal", "cat", "star eyes", "cute"],
    category: "animals",
  },
  {
    id: "animal-9",
    emoticon: "(◉ω◉)",
    tags: ["animal", "owl", "stare", "cute"],
    category: "animals",
  },
  {
    id: "animal-10",
    emoticon: "( ͡°ᴥ ͡° ʋ)",
    tags: ["animal", "dog", "happy", "puppy"],
    category: "animals",
  },
  {
    id: "animal-11",
    emoticon: "(ฅ^・ω・^ฅ)",
    tags: ["animal", "cat", "paws", "cute"],
    category: "animals",
  },
  {
    id: "animal-12",
    emoticon: "ε(´סּ︵סּ`)з",
    tags: ["animal", "fish", "sad", "cute"],
    category: "animals",
  },
  {
    id: "animal-13",
    emoticon: "(^◇^)",
    tags: ["animal", "pig", "happy", "cute"],
    category: "animals",
  },
  {
    id: "animal-14",
    emoticon: "(◕‿◕)っ🐱",
    tags: ["animal", "holding cat", "cute", "pet"],
    category: "animals",
  },
  {
    id: "animal-15",
    emoticon: "( ᵔᴥᵔ )",
    tags: ["animal", "dog", "happy", "cute"],
    category: "animals",
  },

  // Shrugs & Gestures (15)
  {
    id: "shrug-1",
    emoticon: "¯\\_(ツ)_/¯",
    tags: ["shrug", "whatever", "idk", "gesture"],
    category: "shrugs",
  },
  {
    id: "shrug-2",
    emoticon: "┐(´д`)┌",
    tags: ["shrug", "whatever", "sigh", "disappointed"],
    category: "shrugs",
  },
  {
    id: "shrug-3",
    emoticon: "╮(╯_╰)╭",
    tags: ["shrug", "whatever", "idk", "simple"],
    category: "shrugs",
  },
  {
    id: "shrug-4",
    emoticon: "¯\\(°_o)/¯",
    tags: ["shrug", "confused", "idk", "weird"],
    category: "shrugs",
  },
  {
    id: "shrug-5",
    emoticon: "(ㆆ_ㆆ)",
    tags: ["gesture", "stare", "waiting", "unamused"],
    category: "shrugs",
  },
  {
    id: "shrug-6",
    emoticon: "( ´_ゝ`)",
    tags: ["gesture", "unimpressed", "bored", "meh"],
    category: "shrugs",
  },
  {
    id: "shrug-7",
    emoticon: "(っ˘з˘⌣˘)",
    tags: ["gesture", "kiss", "love", "couple"],
    category: "shrugs",
  },
  {
    id: "shrug-8",
    emoticon: "( ˘︹˘ )",
    tags: ["gesture", "sad", "disappointed", "pouty"],
    category: "shrugs",
  },
  {
    id: "shrug-9",
    emoticon: "(´∀`)b",
    tags: ["gesture", "thumbs up", "good", "approve"],
    category: "shrugs",
  },
  {
    id: "shrug-10",
    emoticon: "d(´▽`)b",
    tags: ["gesture", "double thumbs up", "great", "approve"],
    category: "shrugs",
  },
  {
    id: "shrug-11",
    emoticon: "(；一_一)",
    tags: ["gesture", "side eye", "suspicious", "hmm"],
    category: "shrugs",
  },
  {
    id: "shrug-12",
    emoticon: "(⌐■_■)",
    tags: ["gesture", "sunglasses", "cool", "deal with it"],
    category: "shrugs",
  },
  {
    id: "shrug-13",
    emoticon: "( •_•)>⌐■-■",
    tags: ["gesture", "putting on sunglasses", "cool", "yeahhh"],
    category: "shrugs",
  },
  {
    id: "shrug-14",
    emoticon: "(ง'̀-'́)ง",
    tags: ["gesture", "fight", "ready", "boxing"],
    category: "shrugs",
  },
  {
    id: "shrug-15",
    emoticon: "(╯°□°）╯︵ ┻━┻",
    tags: ["gesture", "table flip", "angry", "rage"],
    category: "shrugs",
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
];
