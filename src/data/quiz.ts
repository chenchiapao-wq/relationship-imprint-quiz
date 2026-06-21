import type { QuizQuestion } from "../types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "當對方突然變冷淡，你最容易出現哪種反應？",
    options: [
      { id: "1A", label: "A", text: "焦慮，擔心對方是不是不愛我", typeScores: { A: 3, F: 1 }, dimensionScores: { safety: 3, selfWorth: 1 } },
      { id: "1B", label: "B", text: "生氣，覺得對方不尊重我", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "1C", label: "C", text: "表面沒事，但心裡慢慢關起來", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 2 } },
      { id: "1D", label: "D", text: "想立刻問清楚對方怎麼了", typeScores: { E: 3, A: 1 }, dimensionScores: { safety: 2, emotion: 1 } },
      { id: "1E", label: "E", text: "懷疑自己是不是哪裡做錯了", typeScores: { F: 3, B: 1 }, dimensionScores: { selfWorth: 3 } }
    ]
  },
  {
    id: 2,
    title: "當你和對方吵架時，你比較常出現哪種狀態？",
    options: [
      { id: "2A", label: "A", text: "忍到最後突然爆發", typeScores: { C: 3, B: 1 }, dimensionScores: { emotion: 3 } },
      { id: "2B", label: "B", text: "立刻反擊，不想被壓下去", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "2C", label: "C", text: "沉默冷戰，不想再說", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 2 } },
      { id: "2D", label: "D", text: "一直解釋，希望對方理解", typeScores: { E: 3, B: 1 }, dimensionScores: { safety: 1, emotion: 1 } },
      { id: "2E", label: "E", text: "先道歉，但心裡很委屈", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } }
    ]
  },
  {
    id: 3,
    title: "在感情裡，你最害怕哪一種感覺？",
    options: [
      { id: "3A", label: "A", text: "被拋下", typeScores: { A: 3, H: 1 }, dimensionScores: { safety: 3 } },
      { id: "3B", label: "B", text: "被否定", typeScores: { F: 3, C: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "3C", label: "C", text: "被控制", typeScores: { E: 3, D: 1 }, dimensionScores: { safety: 2 } },
      { id: "3D", label: "D", text: "不被理解", typeScores: { D: 3, C: 1 }, dimensionScores: { emotion: 2 } },
      { id: "3E", label: "E", text: "愛到最後只剩自己付出", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } }
    ]
  },
  {
    id: 4,
    title: "你是否常在感情裡重複出現哪種狀況？",
    options: [
      { id: "4A", label: "A", text: "總是愛上忽冷忽熱的人", typeScores: { A: 3, G: 1 }, dimensionScores: { safety: 2, repetition: 2 } },
      { id: "4B", label: "B", text: "總是變成付出比較多的人", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2, repetition: 1 } },
      { id: "4C", label: "C", text: "總是因小事吵到失控", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "4D", label: "D", text: "總是很難真正放下", typeScores: { H: 3, A: 1 }, dimensionScores: { repetition: 2 } },
      { id: "4E", label: "E", text: "總是遇到類似讓我受傷的人", typeScores: { G: 3, H: 1 }, dimensionScores: { repetition: 3 } }
    ]
  },
  {
    id: 5,
    title: "在感情裡，你最常冒出的念頭是什麼？",
    options: [
      { id: "5A", label: "A", text: "我是不是不值得被愛？", typeScores: { F: 3, A: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "5B", label: "B", text: "我是不是又要被丟下？", typeScores: { A: 3, H: 1 }, dimensionScores: { safety: 3 } },
      { id: "5C", label: "C", text: "為什麼我付出這麼多還不被珍惜？", typeScores: { B: 3, C: 1 }, dimensionScores: { selfWorth: 2, emotion: 1 } },
      { id: "5D", label: "D", text: "我不能讓對方看見我太脆弱", typeScores: { D: 3, F: 1 }, dimensionScores: { safety: 1, selfWorth: 1 } },
      { id: "5E", label: "E", text: "我一定要知道對方到底怎麼想", typeScores: { E: 3, A: 1 }, dimensionScores: { safety: 2 } }
    ]
  },
  {
    id: 6,
    title: "關係冷掉或分開後，你最常出現哪種狀態？",
    options: [
      { id: "6A", label: "A", text: "一直想起過去細節", typeScores: { H: 3, F: 1 }, dimensionScores: { repetition: 2 } },
      { id: "6B", label: "B", text: "很想知道對方現在怎麼樣", typeScores: { E: 3, H: 1 }, dimensionScores: { safety: 2 } },
      { id: "6C", label: "C", text: "怪自己是不是不夠好", typeScores: { F: 3, B: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "6D", label: "D", text: "表面放下，其實心裡沒放下", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 1, repetition: 1 } },
      { id: "6E", label: "E", text: "很快又被類似的人吸引", typeScores: { G: 3, A: 1 }, dimensionScores: { repetition: 3 } }
    ]
  },
  {
    id: 7,
    title: "當你覺得對方不理解你，你通常會怎麼做？",
    options: [
      { id: "7A", label: "A", text: "越講越激動", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "7B", label: "B", text: "覺得算了，不想再說", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 2 } },
      { id: "7C", label: "C", text: "更努力解釋到對方懂", typeScores: { B: 3, E: 1 }, dimensionScores: { selfWorth: 1 } },
      { id: "7D", label: "D", text: "開始懷疑是不是自己表達不好", typeScores: { F: 3, B: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "7E", label: "E", text: "覺得對方根本不在乎我", typeScores: { A: 3, C: 1 }, dimensionScores: { safety: 2, emotion: 1 } }
    ]
  },
  {
    id: 8,
    title: "當你感到不安全時，你最容易怎麼做？",
    options: [
      { id: "8A", label: "A", text: "追問對方", typeScores: { E: 3, A: 1 }, dimensionScores: { safety: 2 } },
      { id: "8B", label: "B", text: "測試對方", typeScores: { A: 3, E: 1 }, dimensionScores: { safety: 3 } },
      { id: "8C", label: "C", text: "討好對方", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "8D", label: "D", text: "假裝沒事", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 1 } },
      { id: "8E", label: "E", text: "情緒失控", typeScores: { C: 3, A: 1 }, dimensionScores: { emotion: 3 } }
    ]
  },
  {
    id: 9,
    title: "關係衝突後，你最常後悔的是什麼？",
    options: [
      { id: "9A", label: "A", text: "後悔自己說太重", typeScores: { C: 3, F: 1 }, dimensionScores: { emotion: 3 } },
      { id: "9B", label: "B", text: "後悔自己太委屈", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "9C", label: "C", text: "後悔自己沒有早點離開", typeScores: { D: 3, G: 1 }, dimensionScores: { repetition: 1 } },
      { id: "9D", label: "D", text: "後悔自己又忍不住找對方", typeScores: { H: 3, A: 1 }, dimensionScores: { safety: 1, repetition: 2 } },
      { id: "9E", label: "E", text: "後悔自己太容易相信對方", typeScores: { G: 3, F: 1 }, dimensionScores: { repetition: 2 } }
    ]
  },
  {
    id: 10,
    title: "在感情裡，哪一種痛苦對你來說最熟悉？",
    options: [
      { id: "10A", label: "A", text: "等待對方回應的焦慮", typeScores: { A: 3, E: 1 }, dimensionScores: { safety: 3 } },
      { id: "10B", label: "B", text: "付出很多卻不被珍惜", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "10C", label: "C", text: "一再被否定或比較", typeScores: { F: 3, C: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "10D", label: "D", text: "明知道不適合卻離不開", typeScores: { H: 3, G: 1 }, dimensionScores: { repetition: 3 } },
      { id: "10E", label: "E", text: "總被某種人吸引後又受傷", typeScores: { G: 3, A: 1 }, dimensionScores: { repetition: 3 } }
    ]
  },
  {
    id: 11,
    title: "在關係裡，你最常壓抑的是什麼？",
    options: [
      { id: "11A", label: "A", text: "自己真正的需求", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "11B", label: "B", text: "自己的不安", typeScores: { E: 3, A: 1 }, dimensionScores: { safety: 2 } },
      { id: "11C", label: "C", text: "自己的憤怒", typeScores: { C: 3, D: 1 }, dimensionScores: { emotion: 3 } },
      { id: "11D", label: "D", text: "自己的失望", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 1 } },
      { id: "11E", label: "E", text: "自己想離開卻離不開的矛盾", typeScores: { H: 3, G: 1 }, dimensionScores: { repetition: 2 } }
    ]
  },
  {
    id: 12,
    title: "你潛意識裡比較像相信哪句話？",
    options: [
      { id: "12A", label: "A", text: "愛一個人就要多付出", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "12B", label: "B", text: "愛的人遲早會離開", typeScores: { A: 3, H: 1 }, dimensionScores: { safety: 3 } },
      { id: "12C", label: "C", text: "我不夠好，所以要更努力", typeScores: { F: 3, B: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "12D", label: "D", text: "只要我不掌控，就會失去", typeScores: { E: 3, A: 1 }, dimensionScores: { safety: 2 } },
      { id: "12E", label: "E", text: "愛情總是讓我受傷", typeScores: { G: 3, H: 1 }, dimensionScores: { repetition: 2 } }
    ]
  },
  {
    id: 13,
    title: "當伴侶批評你時，你最容易出現哪種反應？",
    options: [
      { id: "13A", label: "A", text: "馬上反擊", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "13B", label: "B", text: "表面不說，心裡受傷", typeScores: { D: 3, F: 1 }, dimensionScores: { selfWorth: 1 } },
      { id: "13C", label: "C", text: "覺得自己很糟", typeScores: { F: 3, B: 1 }, dimensionScores: { selfWorth: 3 } },
      { id: "13D", label: "D", text: "想證明自己是對的", typeScores: { E: 3, C: 1 }, dimensionScores: { emotion: 2 } },
      { id: "13E", label: "E", text: "開始想起過去被否定的經驗", typeScores: { H: 3, F: 1 }, dimensionScores: { repetition: 2, selfWorth: 1 } }
    ]
  },
  {
    id: 14,
    title: "在感情裡，你最常變成哪一種自己？",
    options: [
      { id: "14A", label: "A", text: "很敏感、很怕失去", typeScores: { A: 3, F: 1 }, dimensionScores: { safety: 3 } },
      { id: "14B", label: "B", text: "很努力、很會忍耐", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "14C", label: "C", text: "很激烈、很容易爆炸", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "14D", label: "D", text: "很冷靜、但越來越疏離", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 1 } },
      { id: "14E", label: "E", text: "很執著、很難放手", typeScores: { H: 3, A: 1 }, dimensionScores: { repetition: 2 } }
    ]
  },
  {
    id: 15,
    title: "回頭看過去，你最常被哪種人吸引？",
    options: [
      { id: "15A", label: "A", text: "忽冷忽熱、讓我不安的人", typeScores: { A: 3, G: 1 }, dimensionScores: { safety: 2, repetition: 2 } },
      { id: "15B", label: "B", text: "需要我照顧、拯救的人", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2, repetition: 1 } },
      { id: "15C", label: "C", text: "強勢、容易讓我感到壓力的人", typeScores: { E: 3, D: 1 }, dimensionScores: { safety: 1 } },
      { id: "15D", label: "D", text: "有距離感、不容易靠近的人", typeScores: { D: 3, A: 1 }, dimensionScores: { safety: 1 } },
      { id: "15E", label: "E", text: "明知道危險卻很有吸引力的人", typeScores: { G: 3, H: 1 }, dimensionScores: { repetition: 3 } }
    ]
  },
  {
    id: 16,
    title: "如果可以改變一件事，你最想改變什麼？",
    options: [
      { id: "16A", label: "A", text: "不要再那麼怕被離開", typeScores: { A: 3, F: 1 }, dimensionScores: { safety: 3 } },
      { id: "16B", label: "B", text: "不要再委屈自己", typeScores: { B: 3, F: 1 }, dimensionScores: { selfWorth: 2 } },
      { id: "16C", label: "C", text: "不要再情緒失控", typeScores: { C: 3, E: 1 }, dimensionScores: { emotion: 3 } },
      { id: "16D", label: "D", text: "不要再把心關起來", typeScores: { D: 3, H: 1 }, dimensionScores: { emotion: 1 } },
      { id: "16E", label: "E", text: "不要再被同一種人吸引", typeScores: { G: 3, H: 1 }, dimensionScores: { repetition: 3 } }
    ]
  }
];
