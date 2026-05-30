export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-your-sewer-line-needs-attention/",
    image: "/images/blog-sewer.jpg",
    date: "15",
    monthYear: "May '26",
    category: "Sewer Lines",
    categoryHref: "/blog/",
    title: "5 Signs Your Sewer Line Needs Attention Before It Becomes a Major Problem",
    excerpt:
      "Slow drains throughout the house, gurgling sounds, or sewage odors aren't just annoyances — they're warning signs of a sewer line issue that only gets worse if ignored.",
  },
  {
    slug: "/blog/hydro-jetting-vs-snaking/",
    image: "/images/blog-drain.jpg",
    date: "08",
    monthYear: "May '26",
    category: "Drain Cleaning",
    categoryHref: "/blog/",
    title: "Hydro Jetting vs. Drain Snaking: Which One Does Your Drain Actually Need?",
    excerpt:
      "Both methods clear clogs, but they're not interchangeable. Here's when a snake is enough and when hydro jetting is the only thing that will get the job done right.",
  },
  {
    slug: "/blog/how-to-prevent-kitchen-drain-clogs/",
    image: "/images/blog-drain.jpg",
    date: "01",
    monthYear: "May '26",
    category: "Tips & Maintenance",
    categoryHref: "/blog/",
    title: "How to Prevent Kitchen Drain Clogs: What NYC Homeowners Need to Know",
    excerpt:
      "Grease, food scraps, and soap buildup are the top causes of kitchen drain clogs in NYC homes. Small habits make a big difference — here's what works.",
  },
];
