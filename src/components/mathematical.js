// components/Mathematical.js
export default function Mathematical() {
  return (
    <section id="mathematical" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Formulation Mathématique</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="card">
              <h3 className="section-subtitle">Modèle mathématique</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Notations</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">n</span>
                      <span>Nombre d&apos;objets disponibles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">v_i</span>
                      <span>Valeur de l'objet <span className="font-mono">i</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">w_i</span>
                      <span>Poids de l'objet <span className="font-mono">i</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">W</span>
                      <span>Capacité maximale du sac à dos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">x_i</span>
                      <span>Variable de décision (1 si l'objet <span className="font-mono">i</span> est sélectionné, 0 sinon)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Fonction objectif</h4>
                  <div className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto">
                    <div className="text-center font-mono text-lg">
                      Maximiser:
                      <span className="ml-2 text-blue-800">
                        ∑<sub>i=1</sub><sup>n</sup> v<sub>i</sub> × x<sub>i</sub>
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    La fonction objectif maximise la somme des valeurs des objets sélectionnés.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Contraintes</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto">
                      <div className="text-center font-mono text-lg">
                        <span className="text-blue-800">
                          ∑<sub>i=1</sub><sup>n</sup> w<sub>i</sub> × x<sub>i</sub> ≤ W
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      La somme des poids des objets sélectionnés ne doit pas dépasser la capacité du sac.
                    </p>

                    <div className="bg-white p-4 rounded-md border border-gray-200 overflow-x-auto">
                      <div className="text-center font-mono text-lg">
                        <span className="text-blue-800">
                          x<sub>i</sub> ∈ {'{0, 1}'} pour tout i = 1, ..., n
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Chaque variable de décision est binaire (0 ou 1).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Exemple illustratif</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 px-4 py-2">Objet (i)</th>
                      <th className="border border-blue-200 px-4 py-2">Valeur (v<sub>i</sub>)</th>
                      <th className="border border-blue-200 px-4 py-2">Poids (w<sub>i</sub>)</th>
                      <th className="border border-blue-200 px-4 py-2">Rapport (v<sub>i</sub>/w<sub>i</sub>)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">60</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">10</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">6.0</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">100</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">20</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">5.0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">120</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">30</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">4.0</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-center">4</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">80</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">15</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">5.33</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">5</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">40</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">5</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">8.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-blue-800 font-medium">
                  Capacité du sac (W) = 45
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Solution optimale</h4>
                <div className="p-4 bg-green-50 border border-green-100 rounded-md">
                  <p className="text-gray-700">
                    <span className="font-medium">Objets sélectionnés:</span> 1, 4, 5
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Valeur totale:</span> 60 + 80 + 40 = 180
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Poids total:</span> 10 + 15 + 5 = 30 ≤ 45
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Implémentation en OPL CPLEX</h3>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
                    {`// Modèle OPL pour le problème du sac à dos binaire
int n = 5;                // Nombre d'objets
range Items = 1..n;

int values[Items] = [60, 100, 120, 80, 40];
int weights[Items] = [10, 20, 30, 15, 5];
int capacity = 45;        // Capacité du sac

// Variables de décision
dvar boolean x[Items];    // 1 si l'objet i est sélectionné, 0 sinon

// Fonction objectif: maximiser la valeur totale
maximize sum(i in Items) values[i] * x[i];

// Contrainte: le poids total ne doit pas dépasser la capacité
subject to {
  sum(i in Items) weights[i] * x[i] <= capacity;
}`}
                  </pre>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Propriétés mathématiques</h3>

                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <h4 className="font-semibold text-yellow-800">NP-difficulté</h4>
                    <p className="text-sm text-gray-700">
                      Le problème du sac à dos est NP-difficile, ce qui signifie qu'il n'existe pas d'algorithme en temps polynomial connu pour le résoudre de manière exacte.
                    </p>
                    <p className="text-xs text-gray-600">
                      Un algorithme en temps polynomial est un algorithme dont le temps d'exécution peut être exprimé par un polynôme en fonction de la taille de l'entrée. Cela signifie que le temps de calcul augmente de manière raisonnable avec la taille du problème.
                    </p>
                  </div>


                  <div className="p-3 bg-purple-50 border border-purple-100 rounded-md">
                    <h4 className="font-semibold text-purple-800">Approximation</h4>
                    <p className="text-sm text-gray-700">
                      Il existe des algorithmes d'approximation avec une garantie de performance de (1-ε) pour tout ε ≥ 0, au prix d'une complexité en O(n/ε).
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                    <h4 className="font-semibold text-green-800">Relaxation linéaire</h4>
                    <p className="text-sm text-gray-700">
                      La relaxation linéaire (autorisant 0 ≤ x<sub>i</sub> ≤ 1) donne une borne supérieure sur la valeur optimale et peut être utilisée dans les algorithmes de <a href="https://fr.wikipedia.org/wiki/Branch_and_bound" target="_blank" className="text-blue-500 hover:underline">Branch and Bound</a>.
                    </p>
                    <p className="text-sm text-gray-700">
                      Vous pouvez consulter un exemple d'algorithme Branch and Bound <a href="https://en.wikipedia.org/wiki/Branch_and_bound" target="_blank" className="text-blue-500 hover:underline">ici</a>.
                    </p>
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