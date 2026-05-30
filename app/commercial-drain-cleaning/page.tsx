import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Commercial Drain Cleaning — Pipe Monkeys | Multi-Unit & Business Service NYC",
  description:
    "Drain cleaning and sewer service for commercial properties and multi-unit buildings in Brooklyn, Queens, and Nassau County. Minimal disruption, fast response.",
};

export default function CommercialDrainCleaningPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/masthead-commercial.jpg"
        title="Commercial Drain Cleaning"
        subtitle="Drain cleaning and sewer service for businesses, property managers, and multi-unit buildings across Brooklyn, Queens & Nassau County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Commercial Drain Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Drain Cleaning"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Commercial & Multi-Unit Drain Cleaning"
        intro={[
          "Drain blockages in commercial properties and multi-unit buildings can affect multiple tenants and cost your operation hours of downtime. Pipe Monkeys provides fast, professional drain cleaning for businesses, property managers, and landlords across Brooklyn, Queens, and Nassau County.",
          "We work around your schedule to minimize disruption, and we bring the right equipment to handle high-capacity drain systems in apartment buildings, offices, restaurants, and retail spaces.",
        ]}
        whatWeDo={[
          "Multi-unit residential building drain service",
          "Commercial kitchen and restaurant drain clearing",
          "High-capacity drain snaking and augering",
          "Hydro jetting for large-diameter pipe systems",
          "Camera inspection to identify root causes",
          "Same-day and scheduled service for property managers",
        ]}
        whyChooseUs={[
          "Minimal tenant disruption — we work efficiently",
          "Industrial-grade equipment for large drain systems",
          "Upfront pricing with no hidden costs",
          "Licensed and insured for commercial properties",
          "Fast same-day response across Brooklyn, Queens & Nassau County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
