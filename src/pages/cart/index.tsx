import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Divider, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from '@number-flow/react'

export const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getProduct } =
    useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Icon icon="lucide:shopping-cart" width={48} className="mb-4 text-default-400" />
        <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
        <p className="mb-6 text-default-500">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link to="/">
          <Button color="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="pb-12">
      <h1 className="mb-6 text-2xl font-semibold">Shopping Cart</h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-5">
            <AnimatePresence mode='sync' >
              {cartItems.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                return (
                  <motion.div
                    key={item.productId}
                    className="overflow-hidden rounded-lg border border-divider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20, x: -300 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <div className="flex flex-col sm:flex-row">
                      <Link to={`/product/${product.id}`} className="h-32 sm:w-32">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col justify-between p-4">
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/product/${product.id}`}>
                              <h3 className="mb-1 font-medium">{product.title}</h3>
                            </Link>
                            <p className="mb-2 text-sm text-default-500">
                              Category:{" "}
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </p>
                          </div>
                          <p className="font-semibold">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <Button
                              isIconOnly
                              variant="flat"
                              size="sm"
                              onPress={() => handleQuantityChange(product.id, item.quantity - 1)}
                            >
                              <Icon icon="lucide:minus" width={16} />
                            </Button>
                            <NumberFlow
                              spinTiming={{ duration: 100, }}
                              className='px-2' value={item.quantity} />
                            <Button
                              isIconOnly
                              variant="flat"
                              size="sm"
                              onPress={() => handleQuantityChange(product.id, item.quantity + 1)}
                            >
                              <Icon icon="lucide:plus" width={16} />
                            </Button>
                          </div>

                          <Button
                            isIconOnly
                            variant="light"
                            color="danger"
                            size="sm"
                            onPress={() => removeFromCart(product.id)}
                          >
                            <Icon icon="lucide:trash-2" width={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              <motion.div layout className="mt-6 flex justify-between">
                <Button
                  variant="flat"
                  color="danger"
                  startContent={<Icon icon="lucide:trash" width={16} />}
                  onPress={clearCart}
                >
                  Clear Cart
                </Button>

                <Link to="/">
                  <Button variant="light" startContent={<Icon icon="lucide:arrow-left" width={16} />}>
                    Continue Shopping
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>

          </div>

        </motion.div>

        {/* Order Summary */}
        <motion.div
          className="lg:w-80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardBody className="gap-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-default-600">Subtotal</span>
                  <NumberFlow
                    value={subtotal}
                    format={{ style: 'currency', currency: 'USD', }}
                  />
                </div>

                <div className="flex justify-between">
                  <span className="text-default-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : <NumberFlow
                    value={shipping}
                    format={{ style: 'currency', currency: 'USD', }}
                  />}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-default-600">Tax</span>
                  <NumberFlow
                    value={tax}
                    format={{ style: 'currency', currency: 'USD', }}
                  />
                </div>

                <Divider />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <NumberFlow
                    value={total}
                    format={{ style: 'currency', currency: 'USD', }}
                  />
                </div>
              </div>

              <div className="mt-2">
                <Input
                  label="Promo Code"
                  placeholder="Enter code"
                  endContent={
                    <Button size="sm" variant="flat">
                      Apply
                    </Button>
                  }
                />
              </div>
            </CardBody>

            <CardFooter>
              <Button
                color="primary"
                className="w-full"
                endContent={<Icon icon="lucide:arrow-right" width={16} />}
              >
                Checkout
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-4 text-xs text-default-500">
            <div className="mb-1 flex items-center gap-1">
              <Icon icon="lucide:shield" width={14} />
              <span>Secure checkout</span>
            </div>
            <div className="mb-1 flex items-center gap-1">
              <Icon icon="lucide:refresh-ccw" width={14} />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="lucide:truck" width={14} />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

