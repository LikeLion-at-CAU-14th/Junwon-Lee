// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "맥도날드",
    category: "양식",
    emoji: "🍔",
    menu: "빅맥 세트",
    price: 7600,
    comment: "고민될 땐 결국 여기로 온다",
  },
  {
    id: 2,
    name: "칠기마라샹궈",
    category: "중식",
    emoji: "🌶️",
    menu: "마라탕",
    price: 12000,
    comment: "얼얼함이 다음 날까지 간다",
  },
  {
    id: 3,
    name: "일이삼식당",
    category: "한식",
    emoji: "🍚",
    menu: "제육볶음정식",
    price: 8000,
    comment: "공강 시간 든든하게 채워주는 집",
  },
  {
    id: 4,
    name: "숯불에닭",
    category: "한식",
    emoji: "🍗",
    menu: "숯불닭갈비",
    price: 15000,
    comment: "숯불 향이 옷에 배어도 행복함",
  },
  {
    id: 5,
    name: "세울타코",
    category: "양식",
    emoji: "🌮",
    menu: "새우 타코",
    price: 9000,
    comment: "한 입 먹으면 여기가 멕시코",
  },
  {
    id: 6,
    name: "항아리된장족발",
    category: "한식",
    emoji: "🐷",
    menu: "보쌈정식",
    price: 9000,
    comment: "팀플 끝나고 다 같이 뜯는 맛",
  },
];
