import { ReactNode } from "react";
import { StickyCTA } from "@/components/StickyCTA";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <StickyCTA />
    </>
  );
}
