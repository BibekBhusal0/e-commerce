import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Button, Chip, cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { getTagColor } from "../utils/tag-styles";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="size-full">
        <Link
          to={`/product/${product.id}`}
          className="flex h-full flex-col"
          aria-label={`View details for ${product.title}`}
        >
          <div>
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
              {product.tags.map((tag) => {
                const tagStyle = getTagColor(tag);
                return (
                  <Chip
                    key={tag}
                    size="sm"
                    className={cn("border-none bg-gradient-to-r text-white", tagStyle.gradient)}
                    startContent={
                      tagStyle.icon ? <Icon icon={tagStyle.icon} width={14} /> : undefined
                    }
                  >
                    {tag}
                  </Chip>
                );
              })}
            </div>
          </div>

          <CardBody className="flex-grow p-3">
            <h3 className="line-clamp-2 text-sm font-medium">{product.title}</h3>
            <div className="mt-1 flex items-center">
              <Icon icon="lucide:star" className="text-warning" width={16} />
              <span className="ml-1 text-xs">{product.rating.toFixed(1)}</span>
            </div>
          </CardBody>
          <CardFooter className="flex items-center justify-between p-3 pt-0">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          </CardFooter>
        </Link>
      </Card>
      <Button
        size="sm"
        color="primary"
        variant="flat"
        className="absolute bottom-2 right-2"
        onPress={() => {
          addToCart(product.id);
        }}
        startContent={<Icon icon="lucide:shopping-cart" width={16} />}
        aria-label={`Add ${product.title} to cart`}
      >
        Add
      </Button>
    </motion.div>
  );
};
