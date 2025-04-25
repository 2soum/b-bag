// components/Hero.js
import { ArrowDownCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Problème du Sac à Dos Binaire
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Une approche interactive à l&apos;optimisation combinatoire avec simulation visuelle et résolution CPLEX
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#simulation" className="btn-primary flex items-center gap-2">
                <span>Explorer la simulation</span>
                <ArrowDownCircle size={20} />
              </a>

              <a href="#definition" className="btn-secondary text-blue border-blue bg-white hover:bg-white/10 hover:text-white hover:border-white">
                En savoir plus
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-400 opacity-20 rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
                <img
                  src="/OPT_LOGO.png"
                  alt="Logo OPT"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

