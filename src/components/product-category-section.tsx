import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductCard } from "./product-card";
import { Product } from "../types";

interface ProductCategorySectionProps {
  title: string;
  products: Product[];
  category: string;
}

export const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
  title,
  products,
  category,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex gap-2">
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              onPress={scrollLeft}
              aria-label="Scroll left"
            >
              <Icon icon="lucide:chevron-left" width={18} />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              onPress={scrollRight}
              aria-label="Scroll right"
            >
              <Icon icon="lucide:chevron-right" width={18} />
            </Button>
          </div>
          <Link to={`/category/${category}`}>
            <Button
              size="sm"
              variant="light"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              View All
            </Button>
          </Link>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[220px] max-w-[220px] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
