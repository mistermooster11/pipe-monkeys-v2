export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Residential Drain Cleaning", href: "/residential-drain-cleaning" },
      { label: "Sewer Line Services", href: "/sewer-line-services" },
      { label: "Camera Inspection", href: "/camera-inspection" },
      { label: "Commercial Drain Cleaning", href: "/commercial-drain-cleaning" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Residential Drain Cleaning", href: "/residential-drain-cleaning/" },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
  { label: "Camera Inspection", href: "/camera-inspection/" },
  { label: "Commercial Drain Cleaning", href: "/commercial-drain-cleaning/" },
];
