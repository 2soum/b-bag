// components/CplexSection.js
export default function CplexSection() {
    return (
      <section id="cplex" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Résolution avec IBM CPLEX Optimizer</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="section-subtitle">Présentation de CPLEX</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                IBM CPLEX Optimizer est un solveur d'optimisation haute performance capable de résoudre 
                des problèmes de programmation linéaire, de programmation en nombres entiers, et de 
                programmation quadratique. C'est l'un des outils les plus puissants et les plus utilisés 
                dans l'industrie et la recherche pour résoudre des problèmes d'optimisation complexes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="card bg-blue-50">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Fonctionnalités clés</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> 
                      <span>Algorithmes avancés de Branch & Cut</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> 
                      <span>Parallélisation automatique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> 
                      <span>Détection de structure des problèmes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span> 
                      <span>Gestion de grandes instances</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card bg-green-50">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">Avantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> 
                      <span>Rapidité d'exécution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> 
                      <span>Garantie d'optimalité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> 
                      <span>Interface utilisateur intuitive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span> 
                      <span>Intégration facile avec d'autres systèmes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="section-subtitle">Le langage OPL</h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  OPL (Optimization Programming Language) est un langage de modélisation algébrique qui 
                  permet d'exprimer des problèmes d'optimisation de manière concise et intuitive. Il est 
                  spécialement conçu pour être utilisé avec CPLEX.
                </p>
                
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
  {`// Modèle OPL pour le problème du sac à dos binaire
  int n = ...;                // Nombre d'objets
  range Items = 1..n;
  
  int values[Items] = ...;    // Valeurs des objets
  int weights[Items] = ...;   // Poids des objets
  int capacity = ...;         // Capacité du sac
  
  // Variables de décision
  dvar boolean x[Items];      // 1 si l'objet i est sélectionné, 0 sinon
  
  // Fonction objectif: maximiser la valeur totale
  maximize sum(i in Items) values[i] * x[i];
  
  // Contrainte: le poids total ne doit pas dépasser la capacité
  subject to {
    sum(i in Items) weights[i] * x[i] <= capacity;
  }`}
                  </pre>
                </div>
                
                <p className="text-gray-600 text-sm mt-2">
                  Ce modèle OPL représente le problème du sac à dos binaire. Les variables <code>values</code>, <code>weights</code>, et <code>capacity</code> 
                  sont les données d'entrée, et <code>x</code> est la variable de décision.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-subtitle">CPLEX Studio IDE</h3>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/800/500" 
                  alt="Interface CPLEX Studio IDE" 
                  className="w-full h-auto"
                />
              </div>
              
              <p className="text-gray-700">
                CPLEX Studio IDE offre un environnement de développement intégré pour créer, déboguer et exécuter 
                des modèles d'optimisation. L'interface permet de visualiser les résultats, d'analyser les performances 
                et d'explorer différentes configurations.
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Workflow de résolution avec CPLEX</h4>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200"></div>
                  
                  <div className="relative mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          1
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800">Modélisation en OPL</h5>
                        <p className="text-gray-700 mt-1">
                          Écrire le modèle mathématique du problème en utilisant le langage OPL. 
                          Définir les variables, la fonction objectif et les contraintes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          2
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800">Préparation des données</h5>
                        <p className="text-gray-700 mt-1">
                          Préparer les jeux de données pour les différentes instances du problème. 
                          Les données peuvent être fournies sous forme de fichiers .dat ou définies directement dans le code.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          3
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800">Configuration du solveur</h5>
                        <p className="text-gray-700 mt-1">
                          Configurer les paramètres de CPLEX, comme le temps maximal d'exécution, 
                          la tolérance d'optimalité, ou les stratégies de recherche.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          4
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800">Exécution et résolution</h5>
                        <p className="text-gray-700 mt-1">
                          Lancer le solveur CPLEX pour résoudre le problème. Le solveur explore l'espace 
                          de solutions et trouve la solution optimale ou la meilleure solution possible 
                          dans le temps imparti.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                          5
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-semibold text-blue-800">Analyse des résultats</h5>
                        <p className="text-gray-700 mt-1">
                          Analyser les résultats obtenus: valeur de la fonction objectif, valeurs des 
                          variables, statistiques de performance, gap d'optimalité, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="section-subtitle">Exemple de résolution pour de petites instances</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Instance 1: 5 objets</h4>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-4 py-2">Objet</th>
                        <th className="border border-blue-200 px-4 py-2">Valeur</th>
                        <th className="border border-blue-200 px-4 py-2">Poids</th>
                        <th className="border border-blue-200 px-4 py-2">Sélectionné</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 text-center">1</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">60</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">10</td>
                        <td className="border border-gray-200 px-4 py-2 text-center font-medium text-green-600">Oui</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2 text-center">2</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">100</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">20</td>
                        <td className="border border-gray-200 px-4 py-2 text-center font-medium text-red-600">Non</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">120</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-200 px-4 py-2 text-center font-medium text-red-600">Non</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">80</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">15</td>
                        <td className="border border-gray-200 px-4 py-2 text-center font-medium text-green-600">Oui</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 text-center">5</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">40</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">5</td>
                        <td className="border border-gray-200 px-4 py-2 text-center font-medium text-green-600">Oui</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <div className="text-sm text-gray-600">Capacité du sac</div>
                    <div className="text-lg font-bold text-blue-800">45</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-md">
                    <div className="text-sm text-gray-600">Valeur optimale</div>
                    <div className="text-lg font-bold text-green-800">180</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-md">
                    <div className="text-sm text-gray-600">Temps de résolution</div>
                    <div className="text-lg font-bold text-yellow-800">0.01s</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-md">
                    <div className="text-sm text-gray-600">Noeuds explorés</div>
                    <div className="text-lg font-bold text-purple-800">1</div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Performance de CPLEX</h4>
                
                <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md mb-4">
                  <div className="text-center p-4">
                    <p className="text-gray-500">Graphique de performance</p>
                    <p className="text-sm text-gray-400">(Temps de résolution vs Taille de l'instance)</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Pour de petites instances (jusqu'à 20 objets), CPLEX trouve la solution optimale en quelques millisecondes. 
                  Le solveur utilise des techniques avancées comme la génération de coupes et le prétraitement pour réduire 
                  l'espace de recherche.
                </p>
                
                <div className="p-3 bg-blue-50 rounded-md">
                  <h5 className="font-semibold text-blue-800 mb-1">Avantages pour les petites instances</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Résolution exacte garantie</li>
                    <li>• Temps d'exécution négligeable</li>
                    <li>• Analyse de sensibilité disponible</li>
                    <li>• Exploration complète de l'espace de solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }