import type { NavigateOptions } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate, BrowserRouter } from "react-router-dom";
import { ToastProvider } from "@heroui/react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <CartProvider>{children}</CartProvider>
      </HeroUIProvider>
      <ToastProvider />
    </BrowserRouter>
  );
}
