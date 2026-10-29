import type { Metadata } from "next";

import Footer from "../_components/sections/footer";
import Navbar from "../_components/sections/navbar";
import PricingContent from "./_components/pricing-content";

export const metadata: Metadata = {
  title: "Pricing — Business OS",
  description:
    "Choose the Business OS capacity that fits your operation today, with room to grow as your business evolves.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
