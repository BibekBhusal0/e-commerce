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
  cn,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import { navItems, categories } from "../data/mock-data";
import NumberFlow from "@number-flow/react";

export const Header = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Navbar maxWidth="2xl" className="border-b border-divider" aria-label="Main Navigation">
      <NavbarContent className="md:hidden" justify="start">
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
                    className={cn(
                      "w-full",
                      location.pathname === item.href
                        ? "font-medium text-primary"
                        : "text-foreground"
                    )}
                    aria-label={`Navigate to ${item.name}`}
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
                  <Link
                    href="#"
                    className="w-full text-foreground"
                    aria-label={`View category ${category}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </DropdownItem>
              ))}
            </>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarBrand>
        <Link href="/" className="flex gap-2" aria-label="Homepage">
          <Icon icon="lucide:shopping-bag" className="text-primary" width={28} height={28} />
          <p className="font-bold text-inherit">ShopEase</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.name} isActive={location.pathname === item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm",
                location.pathname === item.href ? "font-medium text-primary" : "text-foreground"
              )}
              aria-label={`Navigate to ${item.name}`}
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
                aria-label="Open categories menu"
              >
                Categories
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Categories">
              {categories.map((category) => (
                <DropdownItem key={category} textValue={category}>
                  <Link
                    href="#"
                    className="w-full text-foreground"
                    aria-label={`View category ${category}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex-1 md:w-64 md:flex-none">
          <Input
            classNames={{
              base: "max-w-full",
              inputWrapper: "h-9",
            }}
            placeholder="Search products..."
            startContent={<Icon icon="lucide:search" className="text-default-400" width={18} />}
            aria-label="Search products"
          />
        </NavbarItem>

        <NavbarItem>
          <Badge
            content={
              <NumberFlow value={cartCount} spinTiming={{ duration: 100 }} className="text-xs" />
            }
            size="lg"
            color="primary"
            className="aspect-square min-h-5 min-w-5 rounded-full p-[1px] transition-all duration-300"
            isInvisible={cartCount === 0}
          >
            <Button as={Link} href="/cart" isIconOnly variant="light" aria-label="Cart">
              <Icon icon="lucide:shopping-cart" width={24} />
            </Button>
          </Badge>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button isIconOnly variant="light" aria-label="User account">
            <Icon icon="lucide:user" width={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
