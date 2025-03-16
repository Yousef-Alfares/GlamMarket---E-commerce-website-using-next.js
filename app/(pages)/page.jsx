import Hero from "@/app/(pages)/components/Hero";
import Products from "@/app/(pages)/components/products/Products";
import About from "@/app/(pages)/components/About";
import Services from "@/app/(pages)/components/Services";
import TestimonialList from "@/app/(pages)/components/testimonials/TestimonialList";
import Contact from "@/app/(pages)/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Services />
      <TestimonialList />
      <Contact />
    </div>
  );
}
