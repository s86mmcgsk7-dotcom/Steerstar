import { useEffect } from 'react';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Why from './components/Why';
import Products from './components/Products';
import Cylinders from './components/Cylinders';
import Process from './components/Process';
import Quality from './components/Quality';
import Custom from './components/Custom';
import Footer from './components/Footer';
import { setLenis } from './lib/scroll';

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    setLenis(lenis);
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-paper font-sans text-brand-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Why />
        <Products />
        <Cylinders />
        <Process />        <Quality />
        <Custom />
        <Footer />
      </main>
    </div>
  );
}

export default App;
