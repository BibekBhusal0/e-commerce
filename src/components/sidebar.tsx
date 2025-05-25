import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { navItems, categories } from "../data/mock-data";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onOpenChange={onClose} placement="left">
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="border-b border-divider">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="lucide:shopping-bag"
                    className="text-primary"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">ShopEase</span>
                </div>
              </DrawerHeader>
              <DrawerBody className="p-0">
                <div className="flex flex-col">
                  <div className="border-b border-divider p-4">
                    <p className="mb-2 text-sm font-medium text-foreground-500">Navigation</p>
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center gap-2 rounded-md p-2 text-sm ${
                          location.pathname === item.href
                            ? "bg-primary-100 text-primary-600"
                            : "text-foreground hover:bg-default-100"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-sm font-medium text-foreground-500">Categories</p>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category}`}
                        className="flex items-center gap-2 rounded-md p-2 text-sm text-foreground hover:bg-default-100"
                        onClick={onClose}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className="sticky top-16 hidden h-[calc(100vh-64px)] w-64 overflow-auto border-r border-divider sm:block">
        <div className="flex flex-col">
          <div className="border-b border-divider p-4">
            <p className="mb-2 text-sm font-medium text-foreground-500">Navigation</p>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 rounded-md p-2 text-sm ${
                  location.pathname === item.href
                    ? "bg-primary-100 text-primary-600"
                    : "text-foreground hover:bg-default-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="p-4">
            <p className="mb-2 text-sm font-medium text-foreground-500">Categories</p>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="flex items-center gap-2 rounded-md p-2 text-sm text-foreground hover:bg-default-100"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
