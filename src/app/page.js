// app/page.js - Page principale
import Hero from '../components/hero';
import Definition from '../components/definition';
import Mathematical from '../components/mathematical';
import Simulation from '../components/simulation';
import Variants from '../components/variants';
import CplexSection from '../components/cplexsection';
import Results from '../components/results';
import Deliverables from '../components/delivrables';
import Footer from '../components/footer';
import Histoire from '../components/histoire';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Definition />
      <Histoire />
      <Mathematical />
      <Simulation />
      <Variants />
      <CplexSection />
      <Results />
      <Deliverables />
      <Footer />
    </main>
  );
}