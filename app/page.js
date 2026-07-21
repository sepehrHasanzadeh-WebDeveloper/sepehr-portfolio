import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import ContactFromSec from "@/Components/ContactFromSec/ContactFromSec";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";
import { Toaster } from "sonner";


export default function Home() {
  return (
    <>
    <Toaster position="top-center" richColors   />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ContactFromSec />
      <Footer />
    </>
  );
}
