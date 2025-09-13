import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessAreas from "@/components/BusinessAreas";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
