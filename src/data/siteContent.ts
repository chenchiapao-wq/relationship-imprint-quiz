import { typeNames, typeShortDescriptions } from "./results";
import type { TypeCode } from "../types";

export const navItems = [
  { label: "首頁", href: "/" },
  { label: "開始測驗", href: "/quiz" },
  { label: "什麼是量子轉念", href: "/quantum-shift" },
  { label: "關於陳嘉堡老師", href: "/about" }
];

export const painPoints = [
  "明明不想吵，卻忍不住說出傷人的話。",
  "一點小事，就讓情緒瞬間失控。",
  "很怕被忽略、冷落，甚至被放下。",
  "常常付出很多，最後卻覺得委屈。",
  "明知道不適合，卻還是離不開。",
  "換了對象，卻重複類似的痛苦。"
];

export const processSteps = [
  "關係事件發生",
  "潛意識印記被觸發",
  "舊有反應模式啟動",
  "衝突與痛苦被放大"
];

export const contrastRows = [
  ["不是判斷誰有問題", "看見自己被什麼觸發"],
  ["不是壓抑情緒", "理解情緒從哪裡來"],
  ["不是強迫正向", "看見舊模式如何運作"],
  ["不是改變對方", "從自己開始重新選擇"]
];

export const typePreview = (Object.keys(typeNames) as TypeCode[]).map((code) => ({
  code,
  name: typeNames[code],
  description: typeShortDescriptions[code]
}));

export const quantumNotList = [
  "不是叫你壓抑情緒",
  "不是叫你假裝正向",
  "不是替你判斷誰對誰錯",
  "不是要你立刻原諒對方",
  "不是承諾改變對方",
  "不是心理疾病治療",
  "不是身體疾病治療",
  "不是感情挽回保證"
];

export const quantumDoesList = [
  "看見事件背後的潛意識印記",
  "看見情緒被觸發的原因",
  "看見反覆出現的關係模式",
  "看見自己深層的信念慣性",
  "從新的理解中重新選擇"
];

export const disclaimer =
  "本測驗僅作為自我探索與關係模式覺察參考，並非心理診斷、醫療建議或感情結果保證。若你正在經歷嚴重情緒困擾、暴力關係、自我傷害念頭或其他高風險狀況，建議尋求專業醫療、心理或安全協助。";
