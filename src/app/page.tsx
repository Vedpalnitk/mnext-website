import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Verticals } from "@/components/Verticals";
import { AIAgents } from "@/components/AIAgents";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Verticals />
      <AIAgents />
      <CTA />
      <Footer />
      <ContactModal />
    </>
  );
}
