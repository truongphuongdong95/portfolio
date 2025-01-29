import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Experience from "@/components/ui/Experience";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
