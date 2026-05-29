export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Daniel Pipitone",
    rating: 5,
    text: "Professional service with a very fair price. They send you info about the assigned technician in advance and showed up exactly on time. Forget Roto Rooter — Pipe Monkeys will be my new go-to for plumbing needs.",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    name: "Maria S.",
    rating: 5,
    text: "Had a badly clogged kitchen drain that another company couldn't fix. Pipe Monkeys came out the same day and cleared it completely. Upfront about the price and left the area clean. Highly recommend.",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Called on a Saturday morning with a backed-up sewer line and they were at my house within two hours. Fast, professional, and no mess. Exactly what you want in an emergency.",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    name: "Karen L.",
    rating: 5,
    text: "Great experience from start to finish. The technician explained everything clearly before starting the job. Price was exactly what they quoted. Will definitely call them again.",
    avatar: "/images/avatar-placeholder.png",
  },
];
