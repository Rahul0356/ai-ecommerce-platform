import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { CartSheet } from "@/components/CartSheet";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ChatStoreProvider>
        <CartStoreProvider>
          <Header />
          <main>{children}</main>
          <CartSheet/>
          <Toaster position="bottom-center" />
          <SanityLive />
        </CartStoreProvider>
      </ChatStoreProvider>
    </ClerkProvider>
  );
}

export default Layout;
