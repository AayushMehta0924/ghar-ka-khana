export type Dish = {
  slug: string;
  name: string;
  description: string;
  tag: "veg" | "egg";
  emoji: string;
};

export const dishes: Dish[] = [
  {
    slug: "aloo-gobhi",
    name: "Aloo Gobhi",
    description: "Potato and cauliflower slow-cooked with cumin, turmeric and fresh coriander.",
    tag: "veg",
    emoji: "🥔",
  },
  {
    slug: "daal-chawal",
    name: "Daal Chawal",
    description: "Yellow daal tadka with ghee, jeera rice and a side of pickle.",
    tag: "veg",
    emoji: "🍲",
  },
  {
    slug: "rajma-chawal",
    name: "Rajma Chawal",
    description: "Punjabi-style kidney beans in a rich tomato-onion gravy with steamed basmati.",
    tag: "veg",
    emoji: "🫘",
  },
  {
    slug: "chhole-chawal",
    name: "Chhole Chawal",
    description: "Slow-simmered chickpeas with warming spices, served with jeera rice.",
    tag: "veg",
    emoji: "🍛",
  },
  {
    slug: "bhindi",
    name: "Bhindi Masala",
    description: "Dry-cooked okra tossed with onions, tomato and ajwain.",
    tag: "veg",
    emoji: "🌿",
  },
  {
    slug: "mix-veg",
    name: "Mix Veg",
    description: "A homestyle medley of seasonal vegetables with ginger and garam masala.",
    tag: "veg",
    emoji: "🥕",
  },
  {
    slug: "egg-curry",
    name: "Egg Curry",
    description: "Boiled eggs in an onion-tomato masala with fresh herbs.",
    tag: "egg",
    emoji: "🥚",
  },
  {
    slug: "malai-pyaaz",
    name: "Malai Pyaaz",
    description: "Caramelised onions in a creamy cashew gravy — rich and comforting.",
    tag: "veg",
    emoji: "🧅",
  },
  {
    slug: "matar-paneer",
    name: "Matar Paneer",
    description: "Fresh paneer cubes and sweet peas in a silky tomato-cream sauce.",
    tag: "veg",
    emoji: "🧀",
  },
  {
    slug: "baingan",
    name: "Baingan Bharta",
    description: "Fire-roasted eggplant mashed with onions, tomatoes and green chillies.",
    tag: "veg",
    emoji: "🍆",
  },
];
