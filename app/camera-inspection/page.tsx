import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Camera Inspection — Pipe Monkeys | Sewer & Drain Diagnostics NYC",
  description:
    "High-definition sewer and drain camera inspection in Brooklyn, Queens, and Nassau County. Pinpoint blockages, cracks, and root intrusions before they become costly problems.",
};

export default function CameraInspectionPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/masthead-camera.jpg"
        title="Camera Inspection"
        subtitle="See exactly what's inside your pipes. Professional sewer and drain camera inspection across Brooklyn, Queens & Nassau County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Camera Inspection" },
        ]}
      />
      <ServiceDetailSection
        activeService="Camera Inspection"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Drain & Sewer Camera Inspection"
        intro={[
          "Camera inspections take the guesswork out of drain and sewer problems. Our technicians insert a high-definition waterproof camera directly into your pipe to identify blockages, cracks, root intrusions, and pipe deterioration — so you know exactly what's wrong before any work begins.",
          "We serve homeowners, property managers, and business owners across Brooklyn, Queens, and Nassau County with fast, accurate pipe inspections and a clear written report after every job.",
        ]}
        whatWeDo={[
          "HD waterproof camera inserted directly into your drain or sewer line",
          "Real-time video feed with live explanation from our technician",
          "Identification of blockages, root intrusions, cracks, and pipe collapses",
          "Pre-purchase sewer line inspections for home buyers",
          "Video recording and written diagnosis report included",
          "Residential and commercial properties served",
        ]}
        whyChooseUs={[
          "Accurate diagnosis before any repair work or excavation begins",
          "No guesswork — you see the problem before approving any work",
          "Licensed NYC technicians with professional-grade equipment",
          "Upfront pricing on all inspections",
          "Same-day scheduling across Brooklyn, Queens & Nassau County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
