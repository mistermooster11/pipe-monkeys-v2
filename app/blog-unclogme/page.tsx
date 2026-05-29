import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — Pipe Monkeys | Drain Cleaning Tips & NYC Plumbing Guides",
  description:
    "Expert tips on drain cleaning, sewer maintenance, and keeping your NYC home or business plumbing in top shape — from the Pipe Monkeys team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Expert tips, plumbing guides, and service insights from the Pipe Monkeys team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
