import Hero from "@/app/components/local/Hero";
import Products from "./components/global/products/Products";
import About from "./components/local/About";
import Services from "./components/local/Services";
import Testmonials from "./components/local/testimonials/Testimonials";
import Contact from "./components/local/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Services />
      <Testmonials />
      <Contact />
    </div>
  );
}
