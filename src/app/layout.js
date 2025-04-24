// app/layout.js
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Optimisation du Sac à Dos Binaire | Projet d\'Optimisation',
  description: 'Simulation interactive et résolution du problème du sac à dos binaire avec IBM CPLEX Optimizer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <a href="#" className="text-blue-900 font-bold text-xl">OptimBag</a>
              <div className="flex gap-6">
                <a href="#definition" className="text-gray-700 hover:text-blue-700 transition-colors">Définition</a>
                <a href="#simulation" className="text-gray-700 hover:text-blue-700 transition-colors">Simulation</a>
                <a href="#variants" className="text-gray-700 hover:text-blue-700 transition-colors">Variantes</a>
                <a href="#cplex" className="text-gray-700 hover:text-blue-700 transition-colors">CPLEX</a>
                <a href="#results" className="text-gray-700 hover:text-blue-700 transition-colors">Résultats</a>
              </div>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
