"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TrustedLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Trusted by NYC Homeowners &amp; Businesses
        </h2>
        <div className="trusted__logos">
          <div className="trusted__logo-item">
            <Image
              src="/bambi-baby-logo.svg"
              alt="Bambi Baby Logo"
              width={160}
              height={60}
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/just-bagels-logo.avif"
              alt="Just Bagels Logo"
              width={160}
              height={60}
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/tokyo-hibachi-catering-logo.avif"
              alt="Tokyo Hibachi Catering Logo"
              width={160}
              height={60}
              style={{ height: "50px", width: "auto" }}
            />
          </div>
        </div>
        <p className="trusted__disclaimer text-center text-xs mt-4">
          Logos are property of their respective owners and used for identification only.
        </p>
      </div>
    </section>
  );
}
