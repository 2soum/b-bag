// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OptimBag</h3>
              <p className="text-blue-200 mb-4">
                Simulation et résolution du problème du sac à dos binaire avec IBM CPLEX Optimizer
              </p>
              <p className="text-blue-300 text-sm">
                © 2025 Projet d'Optimisation
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation rapide</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#definition" className="text-blue-200 hover:text-white transition-colors">Définition</a></li>
                <li><a href="#mathematical" className="text-blue-200 hover:text-white transition-colors">Formulation</a></li>
                <li><a href="#simulation" className="text-blue-200 hover:text-white transition-colors">Simulation</a></li>
                <li><a href="#variants" className="text-blue-200 hover:text-white transition-colors">Variantes</a></li>
                <li><a href="#cplex" className="text-blue-200 hover:text-white transition-colors">CPLEX</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation CPLEX</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Articles scientifiques</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Télécharger le code source</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p className="text-blue-300 text-sm">
              Ce projet a été réalisé dans le cadre du cours d'optimisation par DAYSSAM BAKAAR, ALI KAFAGY et AHMED KAFAGY - 2025 EFREI PARIS
            </p>
            
            
          </div>
        </div>
      </footer>
    );
  }