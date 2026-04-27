import { Navbar } from "@/components/nakhla/Navbar";
import { Hero } from "@/components/nakhla/Hero";
import { WhyUs } from "@/components/nakhla/WhyUs";
import { Products } from "@/components/nakhla/Products";
import { Story } from "@/components/nakhla/Story";
import { Benefits } from "@/components/nakhla/Benefits";
import { Contact } from "@/components/nakhla/Contact";
import { Footer } from "@/components/nakhla/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Products />
        <Story />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
