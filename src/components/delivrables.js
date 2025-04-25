// components/Deliverables.js
export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Livrables du Projet</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="section-subtitle mb-6">Code Source CPLEX</h3>
              <p className="text-lg text-gray-700 mb-8">
                Téléchargez nos implémentations du problème du sac à dos binaire pour IBM CPLEX Optimizer.
                Nous proposons deux variantes avec des instances de différentes tailles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-white p-6 border border-blue-200 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800">Petites Instances</h4>
                </div>
                
                <div className="text-gray-700 mb-6">
                  <p className="mb-2">
                    <span className="font-medium">bag_knapsack_small.zip</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Modèle OPL avec instances de 5 à 20 objets
                  </p>
                  <p className="text-sm text-gray-600">
                    Temps d&apos;exécution rapide, idéal pour l&apos;apprentissage
                  </p>
                </div>
                
                <a 
                  href="/bag_knapsack_small.zip"
                  download
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Télécharger bag_knapsack_small.zip
                </a>
              </div>
              
              <div className="card bg-white p-6 border border-green-200 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-green-800">Grandes Instances</h4>
                </div>
                
                <div className="text-gray-700 mb-6">
                  <p className="mb-2">
                    <span className="font-medium">bag_knapsack_large.zip</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Modèle OPL avec instances de 50 à 1000 objets
                  </p>
                  <p className="text-sm text-gray-600">
                    Configuration avancée pour les performances
                  </p>
                </div>
                
                <a 
                  href="/bag_knapsack_large.zip"
                  download
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Télécharger bag_knapsack_large.zip
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-700 text-sm">
                Ces fichiers contiennent le code source OPL, les jeux de données et les instructions d&apos;utilisation.
                <br />Compatibles avec IBM CPLEX Optimizer 12.10 et versions ultérieures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}