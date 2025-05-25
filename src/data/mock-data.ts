import { Banner, Product, NavItem } from "../types";

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "Deals", href: "/deals" },
  { name: "Contact", href: "/contact" },
];

export const banners: Banner[] = [
  {
    id: "1",
    image: "https://img.heroui.chat/image/fashion?w=1200&h=400&u=banner1",
    title: "Summer Collection 2024",
    description: "Get up to 50% off on our new summer collection. Explore the latest trends in fashion with breathable fabrics perfect for the season. Limited time offer!",
  },
  {
    id: "2",
    image: "https://img.heroui.chat/image/fashion?w=1200&h=400&u=banner2",
    title: "Exclusive New Arrivals",
    description: "Be the first to discover our latest products. Premium quality items that combine style and comfort. Free shipping on orders over $50!",
  },
  {
    id: "3",
    image: "https://img.heroui.chat/image/fashion?w=1200&h=400&u=banner3",
    title: "Limited Time Offer",
    description: "Buy one get one free on selected items. This weekend only! Shop our curated collection of seasonal must-haves before they're gone.",
  },
  {
    id: "4",
    image: "https://img.heroui.chat/image/fashion?w=1200&h=400&u=banner4",
    title: "Premium Accessories",
    description: "Complete your look with our handcrafted accessories. Designed for style and durability. Use code EXTRA10 for an additional 10% off!",
  },
  {
    id: "5",
    image: "https://img.heroui.chat/image/fashion?w=1200&h=400&u=banner5",
    title: "Sustainable Collection",
    description: "Eco-friendly fashion that doesn't compromise on style. Made from recycled materials and ethically sourced fabrics. Join us in making a difference.",
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Leather Jacket",
    image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=product1",
    price: 199.99,
    category: "clothing",
    tags: ["new", "hot"],
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        name: "John Doe",
        text: "Great quality and fits perfectly! The leather is soft yet durable, and the stitching is impeccable. I've received many compliments wearing this jacket.",
        rating: 5,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user1"
      },
      {
        id: "r2",
        name: "Jane Smith",
        text: "Love the design and material. The color is exactly as shown in the pictures. Shipping was fast too!",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user2"
      },
    ],
  },
  {
    id: "2",
    title: "Wireless Headphones",
    image: "https://img.heroui.chat/image/ai?w=400&h=500&u=product2",
    price: 89.99,
    category: "electronics",
    tags: ["30% off", "most popular"],
    rating: 4.8,
    reviews: [
      {
        id: "r3",
        name: "Mike Johnson",
        text: "Amazing sound quality! The noise cancellation is perfect for my daily commute. Battery life is impressive too - lasts me a full week of regular use.",
        rating: 5,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user3"
      },
      {
        id: "r4",
        name: "Sarah Williams",
        text: "Great headphones for the price. Comfortable to wear for long periods and the sound is crisp and clear.",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user4"
      },
    ],
  },
  {
    id: "3",
    title: "Smart Watch",
    image: "https://img.heroui.chat/image/ai?w=400&h=500&u=product3",
    price: 149.99,
    category: "electronics",
    tags: ["new"],
    rating: 4.2,
    reviews: [
      {
        id: "r5",
        name: "Alex Chen",
        text: "Sleek design and intuitive interface. The fitness tracking features are accurate and the battery lasts longer than expected.",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user5"
      },
    ],
  },
  {
    id: "4",
    title: "Running Shoes",
    image: "https://img.heroui.chat/image/shoes?w=400&h=500&u=product4",
    price: 79.99,
    category: "footwear",
    tags: ["hot"],
    rating: 4.7,
    reviews: [
      {
        id: "r6",
        name: "Emma Davis",
        text: "Perfect for my morning runs! Comfortable, lightweight, and provide great support.",
        rating: 5,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user6"
      },
    ],
  },
  {
    id: "5",
    title: "Casual T-Shirt",
    image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=product5",
    price: 24.99,
    category: "clothing",
    tags: ["30% off"],
    rating: 4.0,
    reviews: [
      {
        id: "r7",
        name: "Tom Wilson",
        text: "Good quality fabric and the fit is true to size. Would buy again in different colors.",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user7"
      },
    ],
  },
  {
    id: "6",
    title: "Laptop Backpack",
    image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=product6",
    price: 59.99,
    category: "accessories",
    tags: ["most popular"],
    rating: 4.6,
    reviews: [
      {
        id: "r8",
        name: "Lisa Brown",
        text: "Spacious and well-designed. Has plenty of compartments and the padding protects my laptop well.",
        rating: 5,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user8"
      },
    ],
  },
  {
    id: "7",
    title: "Wireless Mouse",
    image: "https://img.heroui.chat/image/ai?w=400&h=500&u=product7",
    price: 29.99,
    category: "electronics",
    tags: ["hot", "30% off"],
    rating: 4.3,
    reviews: [
      {
        id: "r9",
        name: "David Miller",
        text: "Responsive and comfortable to use. Battery life is excellent and the wireless connection is stable.",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user9"
      },
    ],
  },
  {
    id: "8",
    title: "Sunglasses",
    image: "https://img.heroui.chat/image/fashion?w=400&h=500&u=product8",
    price: 49.99,
    category: "accessories",
    tags: ["new"],
    rating: 4.1,
    reviews: [
      {
        id: "r10",
        name: "Olivia Taylor",
        text: "Stylish design and good UV protection. The case that comes with it is sturdy too.",
        rating: 4,
        profilePicture: "https://img.heroui.chat/image/avatar?w=200&h=200&u=user10"
      },
    ],
  },
];

export const categories = [...new Set(products.map(product => product.category))];