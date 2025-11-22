import { ProductItem, ServiceItem, TeamMember } from './types';

// Logo URL from requirements
export const LOGO_URL = "https://i.ibb.co/2NnwNcT/Primepeak-Logo.png";

export const NAV_LINKS = [
  { label: 'Home', value: 'HOME' },
  { label: 'About Us', value: 'ABOUT' },
  { label: 'Contact', value: 'CONTACT' },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Premium Corporate Diary",
    category: "Stationery",
    imageUrl: "https://picsum.photos/id/24/800/800"
  },
  {
    id: 2,
    title: "Branded Ceramic Mug",
    category: "Drinkware",
    imageUrl: "https://picsum.photos/id/30/800/800"
  },
  {
    id: 3,
    title: "Executive Metal Pen",
    category: "Writing Instruments",
    imageUrl: "https://picsum.photos/id/175/800/800" // Clock/Pen vibe
  },
  {
    id: 4,
    title: "Eco-Friendly Gift Box",
    category: "Gift Sets",
    imageUrl: "https://picsum.photos/id/201/800/800" // Laptop/tech vibe
  },
  {
    id: 5,
    title: "Custom USB Drive",
    category: "Technology",
    imageUrl: "https://picsum.photos/id/3/800/800" // Tech vibe
  },
  {
    id: 6,
    title: "Crystal Trophy Award",
    category: "Awards",
    imageUrl: "https://picsum.photos/id/449/800/800" // Abstract/shiny
  },
  {
    id: 7,
    title: "Wireless Power Bank",
    category: "Technology",
    imageUrl: "https://picsum.photos/id/367/800/800" // Tech
  },
  {
    id: 8,
    title: "Tote Bag with Branding",
    category: "Apparel",
    imageUrl: "https://picsum.photos/id/435/800/800" // Fabric
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Advertising Solutions",
    description: "Strategic ad placements and creative campaigns designed to elevate your brand visibility.",
    iconName: "Megaphone"
  },
  {
    title: "Corporate Gift Items",
    description: "A vast selection of premium, customizable gifts to foster business relationships.",
    iconName: "Gift"
  },
  {
    title: "Printing & Branding",
    description: "High-quality offset and digital printing services for all your marketing collateral.",
    iconName: "Printer"
  },
  {
    title: "Promotions & Events",
    description: "End-to-end event marketing support and promotional merchandise management.",
    iconName: "Calendar"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Alexander James",
    role: "CEO & Founder",
    imageUrl: "https://picsum.photos/id/1005/400/400"
  },
  {
    name: "Sarah Williams",
    role: "Head of Design",
    imageUrl: "https://picsum.photos/id/1011/400/400"
  },
  {
    name: "Michael Chen",
    role: "Sales Director",
    imageUrl: "https://picsum.photos/id/1025/400/400"
  }
];

export const CONTACT_INFO = {
  phone: "+971 4 123 4567",
  email: "info@primepeak.ae",
  address: "1205, Business Bay Tower, Dubai, UAE"
};