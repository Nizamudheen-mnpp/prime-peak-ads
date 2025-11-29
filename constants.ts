
import { ProductItem, ServiceItem, TeamMember } from './types';

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
    title: "3D Signage",
    description: "Custom-designed 3D signages that enhance your brand visibility with premium finishes.",
    imageUrl: "https://www.dlxprint.com/images/signages/3d_aluminum_signage_dubai_01.webp"
  },
  {
    title: "Vinyl Sticker",
    description: "High-quality vinyl stickers for indoor and outdoor branding applications.",
    imageUrl: "https://images.unsplash.com/photo-1711337914909-02a8f8e05f30?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Digital Printing",
    description: "Fast and vibrant digital printing solutions for marketing materials.",
    imageUrl: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Vehicle Graphics",
    description: "Eye-catching vehicle wrapping and graphics to turn your fleet into mobile advertising.",
    imageUrl: "https://images.unsplash.com/photo-1618458715022-a18d229aca79?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Promotional Gift Items",
    description: "Premium promotional gifts customized with your brand for events and corporate needs.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
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
  phone: "+971 56 2674946",
  email: "primepeakadvertising@gmail.com",
  address: "Shabiya 10, Musaffah, Abu Dhabi, UAE"
};

export const WHATSAPP_URL = "https://wa.me/971562674946?text=Hi%20Primepeak,%20I%20would%20like%20to%20enquire%20about%20your%20services.";
