export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 249,
    note: "No hidden fees. No weekend surcharge",
    title: "Manual Unclogging",
    features: ["Toilets", "Sinks & drains", "Showers & tubs", "Dishwasher", "Washing machine"],
    description:
      "We use low pressure drain blaster, a mechanical or motorized snake depending on your installation.",
  },
  {
    price: 399,
    note: "No hidden fees. No weekend surcharge",
    title: "Camera Inspection",
    features: [
      "Sewer line video inspection",
      "Crack, root, and obstruction detection",
      "High-resolution recording for reports",
    ],
    description:
      "Our endoscopic camera gives real-time visuals so we can diagnose issues without digging or guesswork.\n\nPrice per pipe. Pipes must be drained.",
  },
  {
    price: 349,
    note: "No hidden fees. No weekend surcharge",
    title: "Hydro Jet Unclogging",
    features: [
      "Clears sewer & main lines",
      "Removes grease, scale, and heavy buildup",
      "Restores full pipe flow",
    ],
    description:
      "High-pressure hydro jetting reaches deeper and cleans better than traditional unclogging tools.\n\nPrice is per line. Residential rate.",
    highlight: true,
  },
  {
    price: 399,
    note: "No hidden fees. No weekend surcharge",
    title: "Grease Trap Pumping & Maintenance",
    features: [
      "Complete pumping and interior cleaning",
      "Inlet & outlet drain line flushing",
      "Preventive maintenance for surrounding drains",
      "Inspection and detailed compliance report",
    ],
    description:
      "Ideal for restaurants and food-service facilities needing fast, reliable, compliant service.\n\nLicensed hauler. Price varies by trap size.",
  },
];
