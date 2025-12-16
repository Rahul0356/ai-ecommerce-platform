import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";


function Layout({children}: {children: React.ReactNode}){
    return (
        <ClerkProvider>
        <main>{children}</main>
        <SanityLive/>
        </ClerkProvider>
    )
}
export default Layout;