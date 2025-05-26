import React from "react";
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
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = React.useState(false);
  const [scrollLeftDisabled, setScrollLeftDisabled] = React.useState(true);
  const [scrollRightDisabled, setScrollRightDisabled] = React.useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollLeftDisabled(scrollLeft === 0);
      setScrollRightDisabled(scrollLeft + clientWidth === scrollWidth);
    }
  };

  React.useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        setShowScrollButtons(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        );
      }
      checkScrollPosition();
    };
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          {showScrollButtons && (
            <div className="hidden gap-2 sm:flex">
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={scrollLeft}
                aria-label="Scroll left"
                isDisabled={scrollLeftDisabled}
              >
                <Icon icon="lucide:chevron-left" width={18} />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                onPress={scrollRight}
                aria-label="Scroll right"
                isDisabled={scrollRightDisabled}
              >
                <Icon icon="lucide:chevron-right" width={18} />
              </Button>
            </div>
          )}
          <Button
            size="sm"
            variant="light"
            color="primary"
            endContent={<Icon icon="lucide:arrow-right" width={16} />}
            aria-label={`View all ${title} products`}
          >
            View All
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex snap-x gap-4 overflow-x-auto pb-4 scrollbar-hide"
        onScroll={checkScrollPosition}
        aria-label={`scrollable container for ${title}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] max-w-[220px] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
