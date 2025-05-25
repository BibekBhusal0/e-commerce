import { useLocation } from "react-router-dom";
import {
  Navbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Badge,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import { navItems, categories } from "../data/mock-data";

export const Header = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Navbar maxWidth="2xl" className="border-b border-divider">
      <NavbarContent className="sm:hidden" justify="start">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" aria-label="Menu">
              <Icon icon="lucide:menu" width={24} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Navigation">
            <DropdownItem
              key="nav-header"
              className="text-sm font-medium text-foreground-500"
              isReadOnly
            >
              Navigation
            </DropdownItem>
            <>
              {navItems.map((item) => (
                <DropdownItem key={item.name} textValue={item.name}>
                  <Link
                    href={item.href}
                    className={`w-full ${location.pathname === item.href ? "font-medium text-primary" : "text-foreground"}`}
                  >
                    {item.name}
                  </Link>
                </DropdownItem>
              ))}
            </>
            <DropdownItem
              key="categories-header"
              className="text-sm font-medium text-foreground-500"
              isReadOnly
            >
              Categories
            </DropdownItem>
            <>
              {categories.map((category) => (
                <DropdownItem key={category} textValue={category}>
                  <Link href="#" className="w-full text-foreground">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </DropdownItem>
              ))}
            </>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarBrand>
        <Link href="/" className="flex gap-2">
          <Icon icon="lucide:shopping-bag" className="text-primary" width={28} height={28} />
          <p className="font-bold text-inherit">ShopEase</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.name} isActive={location.pathname === item.href}>
            <Link
              href={item.href}
              className={`text-sm ${location.pathname === item.href ? "font-medium text-primary" : "text-foreground"}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-sm"
                endContent={<Icon icon="lucide:chevron-down" width={16} />}
              >
                Categories
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              {categories.map((category) => (
                <DropdownItem key={category} textValue={category}>
                  <Link href="#" className="w-full text-foreground">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex-1 sm:w-64 sm:flex-none">
          <Input
            classNames={{
              base: "max-w-full",
              inputWrapper: "h-9",
            }}
            placeholder="Search products..."
            startContent={<Icon icon="lucide:search" className="text-default-400" width={18} />}
          />
        </NavbarItem>

        <NavbarItem>
          <Link href="/cart">
            <Badge content={cartCount} color="primary" isInvisible={cartCount === 0}>
              <Button isIconOnly variant="light" aria-label="Cart">
                <Icon icon="lucide:shopping-cart" width={24} />
              </Button>
            </Badge>
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <Button isIconOnly variant="light" aria-label="User">
            <Icon icon="lucide:user" width={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
