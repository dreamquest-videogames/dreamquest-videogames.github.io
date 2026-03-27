import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedInventory from "./components/FeaturedInventory";
import ReconditioningCTA from "./components/ReconditioningCTA";
import Collectibles from "./components/Collectibles";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedInventory />
      <ReconditioningCTA />
      <Collectibles />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
