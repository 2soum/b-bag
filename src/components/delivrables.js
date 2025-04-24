// components/Deliverables.js
export default function Deliverables() {
    return (
      <section id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Livrables du Projet</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="section-subtitle">Rapport du projet</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Le rapport de projet est un document complet qui présente en détail notre travail sur le problème 
                du sac à dos binaire. Il est structuré de manière claire et concise pour faciliter la compréhension 
                et l'évaluation de notre approche.
              </p>
              
              <div className="bg-white p-6 border border-blue-200 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-blue-700 mb-4">Structure du rapport</h4>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Introduction</h5>
                      <p className="text-gray-600 text-sm">
                        Présentation du problème, des objectifs et de la méthodologie adoptée.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Définition du problème</h5>
                      <p className="text-gray-600 text-sm">
                        Description détaillée du problème du sac à dos binaire, de ses caractéristiques et applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Revue de la littérature</h5>
                      <p className="text-gray-600 text-sm">
                        Synthèse des travaux de recherche antérieurs sur le problème du sac à dos et ses variantes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Formulation mathématique</h5>
                      <p className="text-gray-600 text-sm">
                        Modélisation mathématique du problème avec variables, fonction objectif et contraintes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Implémentation avec CPLEX</h5>
                      <p className="text-gray-600 text-sm">
                        Description de l'implémentation en OPL, des jeux de données et de la configuration utilisée.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">6</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Résultats expérimentaux</h5>
                      <p className="text-gray-600 text-sm">
                        Présentation des résultats obtenus pour différentes tailles d'instances.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">7</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Analyse et interprétation</h5>
                      <p className="text-gray-600 text-sm">
                        Analyse détaillée des performances, des facteurs influençant la difficulté, et des limites.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">8</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Conclusion et perspectives</h5>
                      <p className="text-gray-600 text-sm">
                        Synthèse du travail réalisé et des enseignements tirés, perspectives d'amélioration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-subtitle">Code source et données</h3>
              
              <div className="bg-white p-6 border border-green-200 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4">Contenu du code source</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Modèle OPL principal</span>
                      <p className="text-sm text-gray-600">
                        Implémentation complète du modèle mathématique en langage OPL.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Fichiers de données</span>
                      <p className="text-sm text-gray-600">
                        Jeux de données pour différentes tailles d'instances: petites, moyennes et grandes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Scripts d'expérimentation</span>
                      <p className="text-sm text-gray-600">
                        Scripts pour automatiser les tests sur différentes instances et collecter les résultats.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Configurations CPLEX</span>
                      <p className="text-sm text-gray-600">
                        Fichiers de configuration pour ajuster les paramètres du solveur selon les instances.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Visualisation des résultats</span>
                      <p className="text-sm text-gray-600">
                        Scripts pour générer les graphiques et tableaux d'analyse des performances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-purple-200 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">Présentation du projet</h4>
                
                <p className="text-gray-700 mb-4">
                  En plus du rapport écrit, une présentation synthétique sera fournie pour exposer les aspects clés 
                  du projet et ses résultats principaux.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Format</span>
                      <p className="text-sm text-gray-600">
                        Présentation PowerPoint ou PDF, avec des diapositives claires et concises.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Durée</span>
                      <p className="text-sm text-gray-600">
                        Conçue pour une présentation de 15-20 minutes avec démonstration.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Contenu</span>
                      <p className="text-sm text-gray-600">
                        Vue d'ensemble du problème, approche méthodologique, démonstration de l'implémentation, 
                        résultats clés et conclusions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span> 
                    <div>
                      <span className="font-medium">Visuels</span>
                      <p className="text-sm text-gray-600">
                        Graphiques, schémas et animations pour illustrer le problème et les résultats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-md"
                >
                  Télécharger les modèles de livrables
                </a>
                <p className="mt-2 text-sm text-gray-600">
                  Templates pour faciliter la création des rapports et présentations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }