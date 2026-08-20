import AISection from "./_components/sections/ai-section";
import Capabilities from "./_components/sections/capabilities";
import Challenges from "./_components/sections/challenges";
import CTA from "./_components/sections/cta";
import Footer from "./_components/sections/footer";
import Hero from "./_components/sections/hero";
import Navbar from "./_components/sections/navbar";
import ProductPreview from "./_components/sections/product-preview";
import Workflow from "./_components/sections/workflow";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Workflow />
      <Challenges />
      <Capabilities />
      <ProductPreview />
      <AISection />
      <CTA />
      <Footer />
    </main>
  );
}
