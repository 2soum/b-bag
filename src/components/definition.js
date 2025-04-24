// components/Definition.js
export default function Definition() {
    return (
      <section id="definition" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Le Problème du Sac à Dos Binaire</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="section-subtitle">Définition</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le problème du sac à dos binaire (Binary Knapsack Problem) est un 
                problème d'optimisation combinatoire fondamental. Il consiste à 
                sélectionner un ensemble d'objets ayant chacun une valeur et un poids, 
                de manière à maximiser la valeur totale tout en respectant une 
                contrainte de poids maximum.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dans la version binaire du problème, chaque objet peut être soit 
                entièrement sélectionné (1), soit entièrement exclu (0). L'objectif 
                est de trouver la combinaison d'objets qui maximise la valeur totale 
                sans dépasser la capacité du sac.
              </p>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Applications concrètes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Allocation de budget et investissements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Chargement de cargo et logistique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Sélection de projets avec contraintes de ressources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Découpe de matériaux avec minimisation des pertes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-subtitle">Caractéristiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Type de problème</h4>
                  <p className="text-gray-700">Problème d'optimisation combinatoire NP-difficile</p>
                </div>
                
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Complexité</h4>
                  <p className="text-gray-700">Exponentielle dans le cas général (2ⁿ)</p>
                </div>
                
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Variables</h4>
                  <p className="text-gray-700">Variables de décision binaires (0 ou 1)</p>
                </div>
                
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Objectif</h4>
                  <p className="text-gray-700">Maximisation de la valeur totale</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="section-subtitle">Approches de résolution</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Programmation dynamique</h4>
                      <p className="text-sm text-gray-600">Résolution exacte en temps pseudo-polynomial</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Branch and Bound</h4>
                      <p className="text-sm text-gray-600">Exploration intelligente de l'espace de solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Programmation linéaire (CPLEX)</h4>
                      <p className="text-sm text-gray-600">Formulation en programme linéaire en nombres entiers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Heuristiques</h4>
                      <p className="text-sm text-gray-600">Algorithmes gloutons et métaheuristiques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }