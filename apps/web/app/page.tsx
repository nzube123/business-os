import Navbar from "@/components/landing/navbar";
import Capabilities from "@/components/landing/capabilities";
import Challenges from "@/components/landing/challenges";
import Hero from "@/components/landing/hero";
import AISection from "@/components/landing/ai-section";
import Workflow from "@/components/landing/workflow";
import Preview from "@/components/landing/product-preview";
import Pricing from "@/components/landing/pricing";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Workflow />
      <Challenges />
      <Capabilities />
      <Preview />
      <AISection />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}