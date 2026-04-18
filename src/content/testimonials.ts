export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
};

// TODO: replace with real customer testimonials once user provides them.
export const testimonials: Testimonial[] = [
  {
    name: "Aayush M.",
    role: "Data Engineer · MS CS Graduate, ASU",
    initials: "AM",
    rating: 5,
    quote:
      "Honestly the closest thing to maa ke haath ka khana I've found in Tempe. The rotis are soft even after delivery and the daal actually tastes like home.",
  },
  {
    name: "Sudhanshu S.",
    role: "Technical Analyst · Undergrad Student, ASU",
    initials: "SS",
    rating: 5,
    quote:
      "I was eating $15 Chipotle every day. $8 for a proper Indian tiffin — fresh, warm, hygienic — is a no-brainer. I've been subscribed for two months.",
  },
  {
    name: "Ketaki D.",
    role: "Finance Strategist, Tempe",
    initials: "KD",
    rating: 5,
    quote:
      "The menu changes daily so I never get bored. The matar paneer and rajma chawal hit different. Highly recommend for anyone missing ghar ka khana.",
  },
];
