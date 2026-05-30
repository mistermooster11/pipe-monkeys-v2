import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Sewer Line Services — Pipe Monkeys | Main Line Clearing & Hydro Jetting NYC",
  description:
    "Main sewer line clearing and hydro jetting for homes and multi-unit buildings in Brooklyn, Queens, and Nassau County. Fast response, upfront pricing.",
};

export default function SewerLineServicesPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/masthead-sewer.jpg"
        title="Sewer Line Services"
        subtitle="Main sewer line clearing, drain snaking, and hydro jetting for homes and buildings across Brooklyn, Queens & Nassau County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Sewer Line Services" },
        ]}
      />
      <ServiceDetailSection
        activeService="Sewer Line Services"
        sidebarImage="/images/service-2.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Main Sewer Line Clearing & Hydro Jetting"
        intro={[
          "A blocked main sewer line is one of the most disruptive plumbing emergencies a homeowner or property manager can face. Multiple slow drains, gurgling toilets, and sewage odors are all signs that your main line needs attention.",
          "Pipe Monkeys specializes in main sewer line clearing, professional drain snaking, and high-pressure hydro jetting for homes and multi-unit buildings across Brooklyn, Queens, and Nassau County.",
        ]}
        whatWeDo={[
          "Main sewer line clearing with professional augers",
          "High-pressure hydro jetting for root intrusion and grease buildup",
          "Drain snaking for stubborn or deep blockages",
          "Emergency sewer line service, same-day response",
          "Camera inspection to locate the exact source of the blockage",
          "Service for single-family homes and multi-unit buildings",
        ]}
        whyChooseUs={[
          "Upfront pricing — no surprises after the job",
          "Industrial-grade hydro jetting equipment",
          "Same-day emergency response across NYC",
          "Licensed NYC technicians with sewer line expertise",
          "100% cleanup guarantee on every job",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
