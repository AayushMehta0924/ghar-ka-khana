export type Dish = {
  slug: string;
  name: string;
  description: string;
  tag: "veg" | "egg";
  emoji: string;
  image?: string;
};

export const dishes: Dish[] = [
  {
    slug: "aloo-gobi",
    name: "Aloo Gobi",
    description: "Potato and cauliflower slow-cooked with cumin, turmeric and fresh coriander.",
    tag: "veg",
    emoji: "🥔",
    image: "/menu/aloo-gobi.jpg",
  },
  {
    slug: "daal-chawal",
    name: "Daal Chawal",
    description: "Yellow daal tadka with ghee, jeera rice and a side of pickle.",
    tag: "veg",
    emoji: "🍲",
    image: "/menu/daal-chawal.jpg",
  },
  {
    slug: "rajma-chawal",
    name: "Rajma Chawal",
    description: "Punjabi-style kidney beans in a rich tomato-onion gravy with steamed basmati.",
    tag: "veg",
    emoji: "🫘",
    image: "/menu/rajma-chawal.jpg",
  },
  {
    slug: "chhole-chawal",
    name: "Chhole Chawal",
    description: "Slow-simmered chickpeas with warming spices, served with jeera rice.",
    tag: "veg",
    emoji: "🍛",
    image: "/menu/chhole-chawal.jpg",
  },
  {
    slug: "bhindi",
    name: "Bhindi Masala",
    description: "Dry-cooked okra tossed with onions, tomato and ajwain.",
    tag: "veg",
    emoji: "🌿",
    image: "/menu/bhindi.jpg",
  },
  {
    slug: "mix-veg",
    name: "Mix Veg",
    description: "A homestyle medley of seasonal vegetables with ginger and garam masala.",
    tag: "veg",
    emoji: "🥕",
    image: "/menu/mix-veg.jpg",
  },
  {
    slug: "egg-curry",
    name: "Egg Curry",
    description: "Boiled eggs in an onion-tomato masala with fresh herbs.",
    tag: "egg",
    emoji: "🥚",
    image: "/menu/egg-curry.jpg",
  },
  {
    slug: "malai-pyaaz",
    name: "Malai Pyaaz",
    description: "Caramelised onions in a creamy cashew gravy — rich and comforting.",
    tag: "veg",
    emoji: "🧅",
    image: "/menu/malai-pyaaz.jpg",
  },
  {
    slug: "matar-paneer",
    name: "Matar Paneer",
    description: "Fresh paneer cubes and sweet peas in a silky tomato-cream sauce.",
    tag: "veg",
    emoji: "🧀",
    image: "/menu/matar-paneer.jpg",
  },
  {
    slug: "baingan",
    name: "Baingan Bharta",
    description: "Fire-roasted eggplant mashed with onions, tomatoes and green chillies.",
    tag: "veg",
    emoji: "🍆",
  },
];
