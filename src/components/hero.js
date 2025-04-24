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
              Une approche interactive à l'optimisation combinatoire avec simulation visuelle et résolution CPLEX
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#simulation" className="btn-primary flex items-center gap-2">
                <span>Explorer la simulation</span>
                <ArrowDownCircle size={20} />
              </a>
              <a href="#definition" className="btn-secondary text-white border-white hover:bg-white/10">
                En savoir plus
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-400 opacity-20 rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
                <svg
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Sac à dos stylisé */}
                  <rect x="50" y="50" width="200" height="180" rx="10" fill="#2c5282" stroke="white" strokeWidth="2" />
                  <path d="M80 50 V 20 H 220 V 50" stroke="white" strokeWidth="2" fill="none" />
                  
                  {/* Objets */}
                  <rect x="90" y="80" width="50" height="50" rx="5" fill="#f6ad55" stroke="white" />
                  <text x="115" y="110" textAnchor="middle" fill="white" fontSize="14">10€</text>
                  
                  <rect x="160" y="90" width="60" height="40" rx="5" fill="#68d391" stroke="white" />
                  <text x="190" y="115" textAnchor="middle" fill="white" fontSize="14">15€</text>
                  
                  <rect x="100" y="150" width="30" height="30" rx="5" fill="#f687b3" stroke="white" />
                  <text x="115" y="170" textAnchor="middle" fill="white" fontSize="12">8€</text>
                  
                  <rect x="150" y="140" width="70" height="35" rx="5" fill="#90cdf4" stroke="white" />
                  <text x="185" y="162" textAnchor="middle" fill="white" fontSize="14">20€</text>
                  
                  {/* Symbole d'optimisation */}
                  <circle cx="240" cy="210" r="20" fill="#4299e1" />
                  <text x="240" y="215" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                    OPT
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

