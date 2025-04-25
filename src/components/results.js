'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants de Chart.js nécessaires
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// Données du graphique pour l'analyse des performances
const performanceData = {
  labels: [20, 50, 100, 200, 500, 1000], // Taille de l'instance
  datasets: [
    {
      label: 'Temps de résolution (en secondes)',
      data: [0.01, 0.1, 1, 5, 30, 300], // Temps en secondes pour chaque taille d'instance
      fill: false,
      borderColor: 'rgb(75, 192, 192)', // Couleur de la ligne
      tension: 0.1,
    },
  ],
};

// Options du graphique (personnalisables)
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Analyse des performances',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Temps de résolution: ${context.raw} s`;
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
        text: 'Temps de résolution (s)',
      },
    },
  },
};

export default function Results() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Résultats et Interprétation</h2>

        <div className="mb-12">
          <h3 className="section-subtitle">Comparaison des résultats avec différentes tailles d&apos;instances</h3>
          
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
                  <p className="text-sm text-yellow-600">Gap d&apos;optimalité moyen</p>
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
                <div className="text-center p-4 w-full">
                  <p className="text-gray-500">Graphique de performance</p>
                  <p className="text-sm text-gray-400">(Temps de résolution vs Nombre d&apos;objets)</p>
                  <Line data={performanceData} options={options} />
                </div>
              </div>
              
              <p className="text-gray-700">
                Le graphique ci-dessus montre l&apos;évolution du temps de résolution en fonction du nombre d&apos;objets. 
                On observe une croissance exponentielle typique des problèmes NP-difficiles. Néanmoins, CPLEX 
                parvient à résoudre efficacement des instances de taille moyenne grâce à ses algorithmes avancés.
              </p>
            </div>
            
            {/* Autres sections de l'analyse */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">Facteurs influençant la difficulté</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <h5 className="font-semibold text-blue-800 mb-1">Corrélation valeur/poids</h5>
                  <p className="text-sm text-gray-700">
                    Les instances où les valeurs et les poids sont fortement corrélés sont généralement plus 
                    difficiles à résoudre car l&apos;algorithme glouton n&apos;est pas efficace.
                  </p>
                </div>
                {/* Autres facteurs... */}
              </div>
            </div>
          </div>
          
          {/* Résultats détaillés */}
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

          </div>
        </div>
      </div>
    </section>
  );
}
