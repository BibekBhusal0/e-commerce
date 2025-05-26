import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Divider, Chip, Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/mock-data";
import { RatingStars } from "../../components/rating-stars";
import { ProductCategorySection } from "../../components/product-category-section";
import { motion } from "framer-motion";
import { Avatar } from "@heroui/react";
import { getTagColor } from "../../utils/tag-styles";
import NumberFlow from "@number-flow/react";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  if (!product || !id) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Icon
          icon="lucide:alert-circle"
          width={48}
          className="mb-4 text-danger"
          aria-hidden={true}
        />
        <h2 className="mb-2 text-xl font-semibold">Product Not Found</h2>
        <p className="mb-6 text-default-500">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/">
          <Button color="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(id, quantity);
    setQuantity(1);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleQuantityChange = (value: number) => {
    if (value >= 1) setQuantity(value);
  };

  return (
    <div className="pb-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Product Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-square h-auto w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex flex-wrap gap-1">
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
                    aria-label={tag}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="mb-2 text-2xl font-semibold">{product.title}</h1>

          <div className="mb-4 flex items-center gap-2">
            <RatingStars rating={product.rating} />
            <span className="text-sm text-default-500">
              ({product.rating.toFixed(1)}) • {product.reviews.length} reviews
            </span>
          </div>

          <p className="mb-6 text-2xl font-bold">${product.price.toFixed(2)}</p>

          <div className="mb-6">
            <p className="mb-4 text-sm text-default-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel
              tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.
            </p>

            <div className="mb-2 flex items-center gap-2">
              <Icon
                icon="lucide:check-circle"
                className="text-success"
                width={16}
                aria-hidden={true}
              />
              <span className="text-sm">In stock and ready to ship</span>
            </div>

            <div className="flex items-center gap-2">
              <Icon
                icon="lucide:truck"
                className="text-default-500"
                width={16}
                aria-hidden={true}
              />
              <span className="text-sm">Free shipping on orders over $50</span>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center">
              <Button
                aria-label="Decrease quantity"
                isIconOnly
                variant="flat"
                size="sm"
                onPress={() => handleQuantityChange(quantity - 1)}
                isDisabled={quantity <= 1}
              >
                <Icon icon="lucide:minus" width={16} />
              </Button>
              <NumberFlow
                className="px-2"
                value={quantity}
                spinTiming={{ duration: 100 }}
                aria-label="Product Quantity"
              />
              <Button
                aria-label="Increase quantity"
                isIconOnly
                variant="flat"
                size="sm"
                onPress={() => handleQuantityChange(quantity + 1)}
              >
                <Icon icon="lucide:plus" width={16} />
              </Button>
            </div>

            <Button
              color="primary"
              className="flex-1"
              startContent={<Icon icon="lucide:shopping-cart" width={18} />}
              onPress={handleAdd}
              aria-label="Add to cart"
            >
              Add to Cart
            </Button>
          </div>

          <Accordion aria-label="Product details and shipping options">
            <AccordionItem key="1" title="Product Details" aria-label="Product Details">
              <div className="text-sm text-default-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel
                  tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed
                  euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc
                  nisl eu lectus.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem key="2" title="Shipping & Returns" aria-label="Shipping & Returns">
              <div className="text-sm text-default-600">
                <p>
                  Free standard shipping on orders over $50. Expedited and international shipping
                  options available at checkout. Returns accepted within 30 days of delivery.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold">Customer Reviews</h2>

        {product.reviews.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="rounded-lg border border-divider p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar src={review.profilePicture} name={review.name} size="md" />
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <RatingStars rating={review.rating} size={14} />
                    </div>
                  </div>
                  <span className="text-xs text-default-400">2 days ago</span>
                </div>
                <p className="text-sm text-default-600">{review.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-divider py-8 text-center">
            <Icon
              icon="lucide:message-square"
              className="mx-auto mb-2 text-default-400"
              width={32}
              aria-hidden={true}
            />
            <p className="text-default-500">No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <ProductCategorySection
            title="You May Also Like"
            products={relatedProducts}
            category={product.category}
          />
        </div>
      )}
    </div>
  );
};
