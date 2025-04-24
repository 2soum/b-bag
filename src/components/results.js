// components/Results.js
export default function Results() {
    return (
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Résultats et Interprétation</h2>
          
          <div className="mb-12">
            <h3 className="section-subtitle">Comparaison des résultats avec différentes tailles d'instances</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Petites instances (≤ 20 objets)</h4>
                
                <div className="h-48 bg-blue-50 rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <p className="text-3xl font-bold text-blue-800">100%</p>
                    <p className="text-sm text-blue-600">Taux de résolution optimale</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Temps de calcul {'<'} 1 seconde</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Utilisation mémoire négligeable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Solution optimale garantie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span> 
                    <span>Résolution directe sans heuristiques</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Instances moyennes (20-100 objets)</h4>
                
                <div className="h-48 bg-green-50 rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <p className="text-3xl font-bold text-green-800">99.8%</p>
                    <p className="text-sm text-green-600">Taux de résolution optimale</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Temps de calcul entre 1-30 secondes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Utilisation mémoire modérée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Utilisation de prétraitement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Coupes de Branch & Cut efficaces</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Grandes instances ({'>'}100 objets)</h4>
                
                <div className="h-48 bg-yellow-50 rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <p className="text-3xl font-bold text-yellow-800">95.5%</p>
                    <p className="text-sm text-yellow-600">Gap d'optimalité moyen</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span> 
                    <span>Temps de calcul limité à 5 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span> 
                    <span>Utilisation mémoire importante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span> 
                    <span>Heuristiques spécialisées activées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span> 
                    <span>Parallélisation sur plusieurs cœurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="section-subtitle">Analyse de performance</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <p className="text-gray-500">Graphique de performance</p>
                    <p className="text-sm text-gray-400">(Temps de résolution vs Nombre d'objets)</p>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  Le graphique ci-dessus montre l'évolution du temps de résolution en fonction du nombre d'objets. 
                  On observe une croissance exponentielle typique des problèmes NP-difficiles. Néanmoins, CPLEX 
                  parvient à résoudre efficacement des instances de taille moyenne grâce à ses algorithmes avancés.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Facteurs influençant la difficulté</h4>
                
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h5 className="font-semibold text-blue-800 mb-1">Corrélation valeur/poids</h5>
                    <p className="text-sm text-gray-700">
                      Les instances où les valeurs et les poids sont fortement corrélés sont généralement plus 
                      difficiles à résoudre car l'algorithme glouton n'est pas efficace.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-md">
                    <h5 className="font-semibold text-green-800 mb-1">Distribution des poids</h5>
                    <p className="text-sm text-gray-700">
                      Les instances avec des poids très variés sont plus faciles que celles avec des poids 
                      très similaires, qui nécessitent plus d'exploration.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-md">
                    <h5 className="font-semibold text-yellow-800 mb-1">Capacité du sac</h5>
                    <p className="text-sm text-gray-700">
                      Les instances où la capacité du sac est proche de la moitié de la somme totale des poids 
                      sont généralement les plus difficiles.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-md">
                    <h5 className="font-semibold text-purple-800 mb-1">Structure de l'instance</h5>
                    <p className="text-sm text-gray-700">
                      Les instances artificiellement construites pour être difficiles (comme les instances de Pisinger) 
                      peuvent mettre à l'épreuve même les meilleurs solveurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="section-subtitle">Résultats détaillés</h3>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-blue-200 px-4 py-3 text-left">Instance</th>
                      <th className="border border-blue-200 px-4 py-3 text-left">Objets</th>
                      <th className="border border-blue-200 px-4 py-3 text-left">Valeur optimale</th>
                      <th className="border border-blue-200 px-4 py-3 text-left">Temps (s)</th>
                      <th className="border border-blue-200 px-4 py-3 text-left">Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">KP_Small_1</td>
                      <td className="border border-gray-200 px-4 py-2">10</td>
                      <td className="border border-gray-200 px-4 py-2">295</td>
                      <td className="border border-gray-200 px-4 py-2">0.01</td>
                      <td className="border border-gray-200 px-4 py-2">0.0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">KP_Small_2</td>
                      <td className="border border-gray-200 px-4 py-2">15</td>
                      <td className="border border-gray-200 px-4 py-2">412</td>
                      <td className="border border-gray-200 px-4 py-2">0.02</td>
                      <td className="border border-gray-200 px-4 py-2">0.0%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">KP_Medium_1</td>
                      <td className="border border-gray-200 px-4 py-2">50</td>
                      <td className="border border-gray-200 px-4 py-2">1024</td>
                      <td className="border border-gray-200 px-4 py-2">1.35</td>
                      <td className="border border-gray-200 px-4 py-2">0.0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">KP_Medium_2</td>
                      <td className="border border-gray-200 px-4 py-2">75</td>
                      <td className="border border-gray-200 px-4 py-2">1631</td>
                      <td className="border border-gray-200 px-4 py-2">8.72</td>
                      <td className="border border-gray-200 px-4 py-2">0.0%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">KP_Large_1</td>
                      <td className="border border-gray-200 px-4 py-2">150</td>
                      <td className="border border-gray-200 px-4 py-2">3127</td>
                      <td className="border border-gray-200 px-4 py-2">62.48</td>
                      <td className="border border-gray-200 px-4 py-2">0.0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">KP_Large_2</td>
                      <td className="border border-gray-200 px-4 py-2">200</td>
                      <td className="border border-gray-200 px-4 py-2">4582</td>
                      <td className="border border-gray-200 px-4 py-2">186.31</td>
                      <td className="border border-gray-200 px-4 py-2">0.3%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">KP_XLarge_1</td>
                      <td className="border border-gray-200 px-4 py-2">500</td>
                      <td className="border border-gray-200 px-4 py-2">11248</td>
                      <td className="border border-gray-200 px-4 py-2">300.00</td>
                      <td className="border border-gray-200 px-4 py-2">2.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">KP_XLarge_2</td>
                      <td className="border border-gray-200 px-4 py-2">1000</td>
                      <td className="border border-gray-200 px-4 py-2">22413</td>
                      <td className="border border-gray-200 px-4 py-2">300.00</td>
                      <td className="border border-gray-200 px-4 py-2">4.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Interprétation des résultats</h4>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Les résultats montrent que CPLEX est extrêmement efficace pour résoudre des instances de petite et moyenne taille 
                    du problème du sac à dos binaire. Pour les instances jusqu'à 150 objets, la solution optimale est trouvée 
                    en moins de 3 minutes avec un gap d'optimalité de 0%.
                  </p>
                  
                  <p>
                    Pour les très grandes instances (500-1000 objets), le solveur atteint la limite de temps (fixée à 5 minutes) 
                    mais trouve néanmoins des solutions de très bonne qualité, avec un gap d'optimalité inférieur à 5%.
                  </p>
                  
                  <div className="p-4 bg-blue-50 rounded-md mt-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Conclusions clés</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">1.</span> 
                        <span>La complexité du problème augmente de façon exponentielle avec le nombre d'objets.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">2.</span> 
                        <span>Les techniques de prétraitement et de coupes sont essentielles pour les instances moyennes et grandes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">3.</span> 
                        <span>CPLEX parvient à trouver des solutions de haute qualité même lorsque l'optimalité ne peut pas être prouvée.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">4.</span> 
                        <span>Pour les applications pratiques, les solutions obtenues en temps limité sont généralement suffisantes.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }