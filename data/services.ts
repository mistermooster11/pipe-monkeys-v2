export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Drain Cleaning", href: "/residential-drain-cleaning/" },
  { label: "Sewer Line Services",        href: "/sewer-line-services/" },
  { label: "Camera Inspection",          href: "/camera-inspection/" },
  { label: "Commercial Drain Cleaning",  href: "/commercial-drain-cleaning/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Drain Cleaning",
    image: "/images/service-1.png",
    href: "/residential-drain-cleaning/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Sewer Line Services",
    image: "/images/service-2.png",
    href: "/sewer-line-services/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Camera Inspection",
    image: "/images/service-3.webp",
    href: "/camera-inspection/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Commercial Drain Cleaning",
    image: "/images/service-4.webp",
    href: "/commercial-drain-cleaning/",
    width: 535,
    height: 643,
  },
];
