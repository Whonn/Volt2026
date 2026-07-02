import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Programs from "@/components/Programs";
import Transformations from "@/components/Transformations";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <Programs />
      <Transformations />
      <Coaches />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
