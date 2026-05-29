import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Drain Cleaning — Pipe Monkeys | Brooklyn, Queens & Nassau",
  description:
    "Kitchen sinks, bathroom drains, tubs, showers, and toilets — Pipe Monkeys clears any residential clog in Brooklyn, Queens, and Nassau County. Same-day service, upfront pricing.",
};

export default function ResidentialDrainCleaningPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Drain Cleaning"
        subtitle="Fast, reliable drain cleaning for homes across Brooklyn, Queens & Nassau County — upfront pricing, same-day service, and a 100% cleanup guarantee."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Drain Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Drain Cleaning"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Home Drain Cleaning Services"
        intro={[
          "A clogged drain at home disrupts your whole routine. Pipe Monkeys' residential team arrives fast, diagnoses the problem on the spot, and clears the blockage — kitchen sinks, bathroom drains, tubs, showers, toilets, and more.",
          "We serve homeowners across Brooklyn, Queens, and Nassau County with transparent upfront pricing and professional equipment. No surprise charges, no mess left behind.",
        ]}
        whatWeDo={[
          "Kitchen sink drain cleaning",
          "Bathroom sink, tub, and shower drain clearing",
          "Toilet clogs and slow-flush issues",
          "Laundry and utility room drain service",
          "Floor drain cleaning in basements and garages",
          "Same-day service across Brooklyn, Queens & Nassau County",
        ]}
        whyChooseUs={[
          "Upfront pricing — you approve the cost before we start",
          "Licensed and insured residential technicians",
          "Same-day scheduling, 7 days a week",
          "100% cleanup guarantee — we leave no mess",
          "4.9-star rated by NYC homeowners",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
