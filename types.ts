
export enum PageView {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface ProductItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
}
