import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Pipe Monkeys | NYC Drain Cleaning Specialists",
  description:
    "Learn about Pipe Monkeys, Brooklyn's trusted drain cleaning and sewer service company serving Brooklyn, Queens, and Nassau County.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Brooklyn's trusted drain cleaning and sewer service team — serving Brooklyn, Queens &amp; Nassau County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
