
'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants de Chart.js nécessaires
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// Données pour le graphique (exemple simple)
const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Taille de l'instance
  datasets: [
    {
      label: 'Temps de résolution (en ms)', // Label de la courbe
      data: [1, 3, 5, 8, 10, 15, 20, 30, 40, 50], // Temps en millisecondes
      fill: false,
      borderColor: 'rgb(75, 192, 192)', // Couleur de la ligne
      tension: 0.1, // Lissage de la courbe
    },
  ],
};

// Options du graphique (personnalisables)
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Performance de CPLEX',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Temps de résolution: ${context.raw} ms`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Taille de l\'instance',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Temps de résolution (ms)',
      },
    },
  },
};

export default function CplexSection() {
  return (
    <section id="cplex" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Résolution avec IBM CPLEX Optimizer</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="section-subtitle">Présentation de CPLEX</h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              IBM CPLEX Optimizer est un solveur d&apos;optimisation haute performance capable de résoudre
              des problèmes de programmation linéaire, de programmation en nombres entiers, et de
              programmation quadratique. C&apos;est l&apos;un des outils les plus puissants et les plus utilisés
              dans l&apos;industrie et la recherche pour résoudre des problèmes d&apos;optimisation complexes.
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
                    <span>Rapidité d&apos;exécution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Garantie d&apos;optimalité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Interface utilisateur intuitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> 
                    <span>Intégration facile avec d&apos;autres systèmes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="section-subtitle">Le langage OPL</h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                OPL (Optimization Programming Language) est un langage de modélisation algébrique qui 
                permet d&apos;exprimer des problèmes d&apos;optimisation. Il est 
                spécialement conçu pour être utilisé avec CPLEX.
              </p>

              

              <p className="text-gray-600 text-sm mt-2">
                Ce modèle OPL représente le problème du sac à dos binaire. Les variables <code>values</code>, <code>weights</code>, et <code>capacity</code> 
                sont les données d&apos;entrée, et <code>x</code> est la variable de décision.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="section-subtitle">CPLEX Studio IDE</h3>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/Capture_decran_2025-04-25_a_13.34.50.webp" 
                alt="Interface CPLEX Studio IDE" 
                className="w-full h-auto"
              />
            </div>

            

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
                        Configurer les paramètres de CPLEX, comme le temps maximal d&apos;exécution, 
                        la tolérance d&apos;optimalité, ou les stratégies de recherche.
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
                        Lancer le solveur CPLEX pour résoudre le problème. Le solveur explore l&apos;espace 
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
                        variables, statistiques de performance etc...
                      </p>
                    </div>
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
