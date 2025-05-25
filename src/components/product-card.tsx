import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Product, ProductTag } from "../types";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const getTagColor = (tag: ProductTag) => {
    switch (tag) {
      case "new":
        return {
          color: "success",
          gradient: "from-green-400 to-emerald-600",
          icon: "lucide:sparkles",
        };
      case "hot":
        return {
          color: "danger",
          gradient: "from-red-400 to-rose-600",
          icon: "lucide:flame",
        };
      case "30% off":
        return {
          color: "warning",
          gradient: "from-amber-400 to-orange-600",
          icon: "lucide:tag",
        };
      case "most popular":
        return {
          color: "secondary",
          gradient: "from-purple-400 to-violet-600",
          icon: "lucide:trending-up",
        };
      default:
        return {
          color: "default",
          gradient: "from-blue-400 to-indigo-600",
          icon: "",
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full w-full" isPressable disableRipple>
        <Link to={`/product/${product.id}`} className="flex h-full flex-col">
          <div className="relative">
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
              {product.tags.map((tag) => {
                const tagStyle = getTagColor(tag);
                return (
                  <Chip
                    key={tag}
                    size="sm"
                    className={`bg-gradient-to-r ${tagStyle.gradient} border-none text-white`}
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
            <Button
              size="sm"
              color="primary"
              variant="flat"
              onPress={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
              startContent={<Icon icon="lucide:shopping-cart" width={16} />}
            >
              Add
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
};
