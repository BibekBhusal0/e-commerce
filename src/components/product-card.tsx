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
          icon: "lucide:sparkles"
        };
      case "hot":
        return {
          color: "danger",
          gradient: "from-red-400 to-rose-600",
          icon: "lucide:flame"
        };
      case "30% off":
        return {
          color: "warning",
          gradient: "from-amber-400 to-orange-600",
          icon: "lucide:tag"
        };
      case "most popular":
        return {
          color: "secondary",
          gradient: "from-purple-400 to-violet-600",
          icon: "lucide:trending-up"
        };
      default:
        return {
          color: "default",
          gradient: "from-blue-400 to-indigo-600",
          icon: ""
        };
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="w-full h-full"
        isPressable
        disableRipple
      >
        <Link to={`/product/${product.id}`} className="flex flex-col h-full">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {product.tags.map((tag) => {
                const tagStyle = getTagColor(tag);
                return (
                  <Chip
                    key={tag}
                    size="sm"
                    className={`bg-gradient-to-r ${tagStyle.gradient} text-white border-none`}
                    startContent={tagStyle.icon ? <Icon icon={tagStyle.icon} width={14} /> : undefined}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </div>
          </div>
          
          <CardBody className="p-3 flex-grow">
            <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
            <div className="flex items-center mt-1">
              <Icon icon="lucide:star" className="text-warning" width={16} />
              <span className="text-xs ml-1">{product.rating.toFixed(1)}</span>
            </div>
          </CardBody>
          
          <CardFooter className="p-3 pt-0 flex justify-between items-center">
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
