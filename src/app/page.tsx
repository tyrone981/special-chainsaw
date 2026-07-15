import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
