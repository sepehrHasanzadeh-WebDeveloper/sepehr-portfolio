import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
