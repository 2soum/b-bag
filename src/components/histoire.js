// components/Literature.js
export default function Literature() {
    return (
      <section id="literature" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Revue de Littérature</h2>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="section-subtitle">Évolution des approches de résolution</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Le problème du sac à dos binaire est l'un des problèmes d'optimisation combinatoire les plus étudiés 
                dans la littérature scientifique. Son importance théorique et ses nombreuses applications pratiques 
                ont conduit à un riche corpus de recherche depuis plus de 50 ans.
              </p>
              
              <div className="space-y-6">
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Approches classiques</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-md">
                      <h5 className="font-semibold text-blue-800 mb-1">Programmation dynamique</h5>
                      <p className="text-gray-700">
                        <strong>Bellman (1957)</strong> a proposé l'une des premières approches de résolution basée sur la 
                        programmation dynamique, avec une complexité de O(nW), où n est le nombre d'objets et W la capacité 
                        du sac. Cette approche reste fondamentale et est toujours utilisée comme base de nombreux algorithmes.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-md">
                      <h5 className="font-semibold text-blue-800 mb-1">Branch and Bound</h5>
                      <p className="text-gray-700">
                        <strong>Kolesar (1967)</strong> et <strong>Horowitz et Sahni (1974)</strong> ont développé 
                        des algorithmes de Branch and Bound qui explorent intelligemment l'espace de solutions en 
                        utilisant des bornes supérieures pour élaguer des branches non prometteuses.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-md">
                      <h5 className="font-semibold text-blue-800 mb-1">Algorithmes gloutons</h5>
                      <p className="text-gray-700">
                        <strong>Dantzig (1957)</strong> a proposé une approche gloutonne qui trie les objets par 
                        ratio valeur/poids décroissant. Cette méthode donne la solution optimale pour le problème 
                        fractionnel mais seulement une approximation pour le problème binaire.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Approches modernes</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-md">
                      <h5 className="font-semibold text-green-800 mb-1">Algorithmes d'approximation</h5>
                      <p className="text-gray-700">
                        <strong>Ibarra et Kim (1975)</strong> ont développé le premier schéma d'approximation en temps 
                        polynomial (FPTAS) pour le problème du sac à dos, garantissant une solution à ε près de l'optimum 
                        en temps polynomial en fonction de 1/ε.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-md">
                      <h5 className="font-semibold text-green-800 mb-1">Métaheuristiques</h5>
                      <p className="text-gray-700">
                        <strong>Chu et Beasley (1998)</strong> ont appliqué des algorithmes génétiques au problème 
                        du sac à dos avec d'excellents résultats. D'autres approches comme le recuit simulé 
                        (<strong>Aarts et Korst, 1989</strong>) et la recherche tabou (<strong>Glover, 1990</strong>) 
                        ont également été adaptées avec succès.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-md">
                      <h5 className="font-semibold text-green-800 mb-1">Hybridation d'algorithmes</h5>
                      <p className="text-gray-700">
                        <strong>Puchinger et al. (2010)</strong> ont montré l'efficacité des approches hybrides 
                        combinant des méthodes exactes (comme la programmation dynamique) avec des heuristiques 
                        pour résoudre des instances de grande taille.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Applications de la programmation mathématique</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-md">
                      <h5 className="font-semibold text-purple-800 mb-1">Programmation linéaire en nombres entiers</h5>
                      <p className="text-gray-700">
                        <strong>Nemhauser et Wolsey (1988)</strong> ont formalisé la résolution du problème du sac à dos 
                        par programmation linéaire en nombres entiers, établissant les bases théoriques des approches 
                        modernes de résolution par des solveurs comme CPLEX.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-md">
                      <h5 className="font-semibold text-purple-800 mb-1">Relaxation lagrangienne</h5>
                      <p className="text-gray-700">
                        <strong>Fisher (1981)</strong> a appliqué avec succès la relaxation lagrangienne au problème 
                        du sac à dos, permettant d'obtenir de meilleures bornes et d'accélérer la résolution des 
                        instances difficiles.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-md">
                      <h5 className="font-semibold text-purple-800 mb-1">Génération de coupes</h5>
                      <p className="text-gray-700">
                        <strong>Balas et Zemel (1980)</strong> ont développé l'algorithme du "core" et introduit 
                        des techniques de génération de coupes spécifiques au sac à dos qui sont encore à la base 
                        des méthodes utilisées par les solveurs commerciaux modernes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Chronologie des avancées majeures</h3>
                  
                  <div className="relative pl-8 space-y-8">
                    <div className="absolute left-3 top-0 bottom-0 w-1 bg-blue-200"></div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">1957</div>
                        <div className="font-semibold">Bellman et Dantzig</div>
                        <p className="text-sm text-gray-600">
                          Fondements de la programmation dynamique et approche gloutonne
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">1970s</div>
                        <div className="font-semibold">Horowitz, Sahni, Ibarra, Kim</div>
                        <p className="text-sm text-gray-600">
                          Algorithmes de Branch and Bound améliorés et premiers FPTAS
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">1980s</div>
                        <div className="font-semibold">Martello et Toth, Balas et Zemel</div>
                        <p className="text-sm text-gray-600">
                          Algorithmes exacts efficaces et techniques de réduction
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">1990s</div>
                        <div className="font-semibold">Pisinger, Chu et Beasley</div>
                        <p className="text-sm text-gray-600">
                          Algorithmes spécialisés et application des métaheuristiques
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">2000s</div>
                        <div className="font-semibold">Kellerer, Pferschy, Pisinger</div>
                        <p className="text-sm text-gray-600">
                          Systématisation des connaissances et nouvelles variantes
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-20px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                      <div>
                        <div className="font-bold text-blue-800">2010s - présent</div>
                        <div className="font-semibold">Approches hybrides et parallèles</div>
                        <p className="text-sm text-gray-600">
                          Combinaison de méthodes exactes et heuristiques, calcul haute performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-yellow-50">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Ouvrages de référence</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-16 bg-yellow-100 border border-yellow-200 rounded flex items-center justify-center text-yellow-800 font-bold">
                        📚
                      </div>
                      <div>
                        <div className="font-semibold">Kellerer, H., Pferschy, U., Pisinger, D. (2004)</div>
                        <div className="text-sm text-gray-700">
                          <em>Knapsack Problems</em>, Springer
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          L'ouvrage le plus complet sur tous les aspects du problème du sac à dos
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-16 bg-yellow-100 border border-yellow-200 rounded flex items-center justify-center text-yellow-800 font-bold">
                        📚
                      </div>
                      <div>
                        <div className="font-semibold">Martello, S., Toth, P. (1990)</div>
                        <div className="text-sm text-gray-700">
                          <em>Knapsack Problems: Algorithms and Computer Implementations</em>, Wiley
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Un classique avec des algorithmes fondamentaux encore utilisés aujourd'hui
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-16 bg-yellow-100 border border-yellow-200 rounded flex items-center justify-center text-yellow-800 font-bold">
                        📚
                      </div>
                      <div>
                        <div className="font-semibold">Pisinger, D. (1995)</div>
                        <div className="text-sm text-gray-700">
                          <em>Algorithms for Knapsack Problems</em>, Thèse de doctorat
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Une contribution majeure avec des algorithmes spécialisés très efficaces
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-yellow-100 rounded-md">
                    <h4 className="font-semibold text-yellow-800 mb-1">Articles fondamentaux</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Dantzig, G.B. (1957). "Discrete-Variable Extremum Problems"</li>
                      <li>• Balas, E., Zemel, E. (1980). "An Algorithm for Large Zero-One Knapsack Problems"</li>
                      <li>• Pisinger, D. (1999). "Core Problems in Knapsack Algorithms"</li>
                      <li>• Martello, S., Pisinger, D., Toth, P. (2000). "New Trends in Exact Algorithms for the 0-1 Knapsack Problem"</li>
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