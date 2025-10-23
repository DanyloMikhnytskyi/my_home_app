export type ProductMeta = {
  calories: number;
  carbs?: number;
  protein?: number;
  fat?: number;
  fiber?: number;
  [key: string]: number | undefined;
};
export type Product = {
  id: number;
  title: string;
  description: string;
  meta: ProductMeta;
  image: string;
};
export const productsMock: Product[] = [
  {
    id: 1,
    title: "Avocado",
    description: "Fresh ripe avocado, perfect for salads and toast.",
    meta: {
      calories: 160,
      carbs: 9,
      protein: 2,
      fat: 15,
      fiber: 7,
    },
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1675",
  },
  {
    id: 2,
    title: "Chicken Breast",
    description: "Lean grilled chicken breast, rich in protein.",
    meta: { calories: 165, carbs: 0, protein: 31, fat: 3.6 },
    image:
      "https://images.unsplash.com/photo-1682991136736-a2b44623eeba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2231",
  },
  {
    id: 3,
    title: "Brown Rice",
    description: "Whole grain brown rice, a great source of fiber.",
    meta: { calories: 111, carbs: 23, protein: 2.6, fat: 0.9 },
    image:
      "https://images.unsplash.com/photo-1613728913341-8f29b02b8253?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd24lMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 4,
    title: "Broccoli",
    description: "Fresh green broccoli florets, rich in vitamins.",
    meta: { calories: 34, carbs: 6.6, protein: 2.8, fat: 0.4 },
    image:
      "https://images.unsplash.com/photo-1685504445355-0e7bdf90d415?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
  },
  {
    id: 5,
    title: "Banana",
    description: "Sweet ripe banana, great for quick energy.",
    meta: { calories: 89, carbs: 23, protein: 1.1, fat: 0.3 },
    image:
      "https://plus.unsplash.com/premium_photo-1724250081102-cab0e5cb314c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 6,
    title: "Salmon Fillet",
    description: "Fresh Atlantic salmon fillet, rich in Omega-3.",
    meta: { calories: 208, carbs: 0, protein: 20, fat: 13 },
    image:
      "https://plus.unsplash.com/premium_photo-1726768907990-d3cbc8efdee5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1091",
  },
  {
    id: 7,
    title: "Greek Yogurt",
    description: "Thick creamy Greek yogurt, high in protein.",
    meta: { calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
    image:
      "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2073",
  },
  {
    id: 8,
    title: "Oatmeal",
    description: "Rolled oats cooked to creamy perfection.",
    meta: {
      calories: 68,
      carbs: 12,
      protein: 2.4,
      fat: 1.4,
      fiber: 1.7,
    },
    image:
      "https://plus.unsplash.com/premium_photo-1676686125407-227f3d352df8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 9,
    title: "Eggs",
    description: "Boiled eggs, an excellent source of protein.",
    meta: { calories: 78, carbs: 0.6, protein: 6, fat: 5 },
    image:
      "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 10,
    title: "Almonds",
    description: "Crunchy almonds full of healthy fats.",
    meta: {
      calories: 575,
      carbs: 22,
      protein: 21,
      fat: 49,
      fiber: 12,
    },
    image:
      "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 11,
    title: "Apple",
    description: "Crisp red apple packed with vitamins.",
    meta: {
      calories: 52,
      carbs: 14,
      protein: 0.3,
      fat: 0.2,
      fiber: 2.4,
    },
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 12,
    title: "Peanut Butter",
    description: "Natural peanut butter made with roasted peanuts.",
    meta: { calories: 588, carbs: 20, protein: 25, fat: 50 },
    image:
      "https://images.unsplash.com/flagged/photo-1625402535207-953e03369f59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 13,
    title: "Spinach",
    description: "Fresh baby spinach leaves rich in iron.",
    meta: { calories: 23, carbs: 3.6, protein: 2.9, fat: 0.4 },
    image:
      "https://plus.unsplash.com/premium_photo-1701699257548-8261a687236f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 14,
    title: "Sweet Potato",
    description: "Baked sweet potato — naturally sweet and rich in fiber.",
    meta: {
      calories: 86,
      carbs: 20,
      protein: 1.6,
      fat: 0.1,
      fiber: 3,
    },
    image:
      "https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 15,
    title: "Tomato",
    description: "Juicy red tomatoes full of antioxidants.",
    meta: { calories: 18, carbs: 3.9, protein: 0.9, fat: 0.2 },
    image:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 16,
    title: "Blueberries",
    description: "Fresh blueberries — a powerful antioxidant fruit.",
    meta: {
      calories: 57,
      carbs: 14,
      protein: 0.7,
      fat: 0.3,
      fiber: 2.4,
    },
    image:
      "https://plus.unsplash.com/premium_photo-1674347951519-ba11f53502ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988",
  },
  {
    id: 17,
    title: "Tofu",
    description: "Soy-based tofu, a great vegan protein option.",
    meta: { calories: 76, carbs: 1.9, protein: 8, fat: 4.8 },
    image:
      "https://images.unsplash.com/photo-1722635940350-d1b2e5129379?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9mdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 18,
    title: "Quinoa",
    description: "Cooked quinoa rich in complete protein and fiber.",
    meta: { calories: 120, carbs: 21, protein: 4.1, fat: 1.9 },
    image:
      "https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UXVpbm9hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 19,
    title: "Orange",
    description: "Juicy orange packed with vitamin C.",
    meta: { calories: 47, carbs: 12, protein: 0.9, fat: 0.1 },
    image:
      "https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JhbmdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 20,
    title: "Cottage Cheese",
    description: "Low-fat cottage cheese, rich in casein protein.",
    meta: { calories: 98, carbs: 3.4, protein: 11, fat: 4.3 },
    image:
      "https://images.unsplash.com/photo-1632200729570-1043effd1b77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvdHRhZ2UlMjBDaGVlc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  },
];
