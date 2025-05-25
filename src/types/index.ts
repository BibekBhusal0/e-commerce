// types.ts
export type NavItem = {
  name: string;
  href: string;
};

export type Banner = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export type ProductTag = "new" | "hot" | "30% off" | "most popular";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  tags: ProductTag[];
  rating: number;
  reviews: Review[];
};

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  profilePicture: string; // Added profile picture field
};

export type CartItem = {
  productId: string;
  quantity: number;
};
