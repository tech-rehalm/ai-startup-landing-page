import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return <div>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </div>;
}