// components/Roadmap.js
export default function Roadmap() {
    return (
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="section-title">Notre Parcours et Équipe</h2>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center p-6">
              <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DA
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Dayssam</h3>
              <p className="text-sm text-gray-500 mb-4">Chef de Projet & Développeur</p>
              <p className="text-gray-700 mb-4">
                Expert en optimisation mathématique avec une spécialisation en programmation linéaire et en implémentation CPLEX.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-blue-700 mb-2">Responsabilités</h4>
                <ul className="text-gray-700 text-sm">
                  <li className="mb-1">• Coordination générale du projet</li>
                  <li className="mb-1">• Formulation mathématique</li>
                  <li className="mb-1">• Développement des modèles OPL</li>
                </ul>
              </div>
            </div>
            
            <div className="card text-center p-6">
              <div className="w-24 h-24 rounded-full bg-green-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AH
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Ahmed</h3>
              <p className="text-sm text-gray-500 mb-4">Analyste & Développeur</p>
              <p className="text-gray-700 mb-4">
                Spécialisé dans l&apos;analyse algorithmique et les structures de données avec une expertise en performance computationnelle.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-green-700 mb-2">Responsabilités</h4>
                <ul className="text-gray-700 text-sm">
                  <li className="mb-1">• Revue de littérature</li>
                  <li className="mb-1">• Conception des jeux de données</li>
                  <li className="mb-1">• Analyse des résultats</li>
                </ul>
              </div>
            </div>
            
            <div className="card text-center p-6">
              <div className="w-24 h-24 rounded-full bg-purple-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AL
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Ali</h3>
              <p className="text-sm text-gray-500 mb-4">Designer & Développeur</p>
              <p className="text-gray-700 mb-4">
                Passionné par l&apos;UI/UX et la visualisation de données avec des compétences avancées en développement front-end.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-purple-700 mb-2">Responsabilités</h4>
                <ul className="text-gray-700 text-sm">
                  <li className="mb-1">• Interface de simulation</li>
                  <li className="mb-1">• Visualisation des résultats</li>
                  <li className="mb-1">• Documentation du projet</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Notre Parcours</h3>
            
            <div className="relative">
              
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-800">Définition du problème et recherche</h4>
                  </div>
                </div>
                <div className="ml-18 pl-8 mt-3">
                  <p className="text-gray-700">
                    Après avoir choisi le problème du sac à dos binaire, nous avons mené une recherche approfondie
                    de la littérature scientifique sur le sujet pour comprendre les différentes approches de résolution.
                    Ahmed a dirigé cette phase en compilant les recherches les plus pertinentes.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Ahmed</span>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Dayssam</span>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Ali</span>

                  </div>
                </div>
              </div>
              
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-blue-800 font-bold">2</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-800">Formulation mathématique et conception</h4>
                  </div>
                </div>
                <div className="ml-18 pl-8 mt-3">
                  <p className="text-gray-700">
                    Dayssam a pris la responsabilité de développer la formulation mathématique 
                    du problème et de concevoir l&apos;architecture du modèle OPL. Cette phase a nécessité
                    une analyse rigoureuse pour garantir l&apos;efficacité de la résolution.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Dayssam</span>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Ahmed</span>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Ali</span>

                  </div>
                </div>
              </div>
              
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-blue-800 font-bold">3</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-800">Implémentation CPLEX et tests</h4>
                  </div>
                </div>
                <div className="ml-18 pl-8 mt-3">
                  <p className="text-gray-700">
                    L&apos;implémentation du modèle en OPL a été réalisée par toute l&apos;équipe.
                    Dayssam a développé le modèle principal, Ahmed a créé les instances de 
                    test, et Ali a mis en place les scripts d&apos;expérimentation et de collecte des résultats.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Dayssam</span>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Ahmed</span>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Ali</span>
                  </div>
                </div>
              </div>
              
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-blue-800 font-bold">4</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-800">Analyse des résultats et optimisation</h4>
                  </div>
                </div>
                <div className="ml-18 pl-8 mt-3">
                  <p className="text-gray-700">
                    Ahmed a pris en charge l&apos;analyse des performances et l&apos;interprétation des résultats.
                    Nous avons optimisé nos modèles en fonction des conclusions, avec Dayssam qui a affiné
                    les paramètres CPLEX pour améliorer les temps de résolution.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Ahmed</span>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Dayssam</span>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Ali</span>

                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-blue-800 font-bold">5</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-800">Documentation et présentation</h4>
                  </div>
                </div>
                <div className="ml-18 pl-8 mt-3">
                  <p className="text-gray-700">
                    Ali a dirigé la création de cette landing page interactive et la documentation du projet.
                    L&apos;équipe entière a collaboré sur le rapport final et la préparation de la présentation,
                    avec Dayssam qui a coordonné les derniers détails.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">Ali</span>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Dayssam</span>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Ahmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
    );
  }