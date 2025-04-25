// components/Variants.js
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';

export default function Variants() {
  const [activeTab, setActiveTab] = useState('fractional');
  const [openAccordion, setOpenAccordion] = useState('description');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="variants" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Variantes du Problème</h2>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'fractional' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('fractional')}
              >
                Sac à Dos Fractionnel
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'unbounded' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('unbounded')}
              >
                Sac à Dos Non Borné
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'multiple' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('multiple')}
              >
                Sac à Dos Multiple
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${activeTab === 'multidimensional' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('multidimensional')}
              >
                Sac à Dos Multidimensionnel
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'fractional' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start gap-4">
                    <div className="w-2/3 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-800">Problème du Sac à Dos Fractionnel</h3>

                      <p className="text-gray-700">
                        Dans cette variante, les objets peuvent être fractionnés. Au lieu de prendre un objet entier
                        ou de le laisser, on peut prendre une fraction de chaque objet. Cela rend le problème
                        beaucoup plus simple à résoudre.
                      </p>

                      <div
                        className="cursor-pointer border-t border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('description')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Description du problème</h4>
                          {openAccordion === 'description' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'description' && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-3">
                              Le problème du sac à dos fractionnel est une variante où l'on peut sélectionner
                              une fraction arbitraire de chaque objet. La variable de décision x<sub>i</sub> peut
                              prendre n'importe quelle valeur réelle entre 0 et 1.
                            </p>
                            <p className="text-gray-700">
                              Cette variante peut être pertinente dans des situations où les objets sont divisibles,
                              comme des liquides, des poudres ou des matériaux en vrac.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('formulation')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Formulation mathématique</h4>
                          {openAccordion === 'formulation' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'formulation' && (
                          <div className="mt-3">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <p className="font-mono mb-2">Maximiser: ∑<sub>i=1</sub><sup>n</sup> v<sub>i</sub> × x<sub>i</sub></p>

                              <p className="font-mono mb-2">Sous les contraintes:</p>
                              <p className="font-mono ml-4 mb-2">∑<sub>i=1</sub><sup>n</sup> w<sub>i</sub> × x<sub>i</sub> ≤ W</p>
                              <p className="font-mono ml-4">0 ≤ x<sub>i</sub> ≤ 1 pour tout i = 1, ..., n</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('resolution')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Méthode de résolution</h4>
                          {openAccordion === 'resolution' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'resolution' && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-3">
                              Contrairement au sac à dos binaire, le sac à dos fractionnel peut être résolu
                              avec un algorithme glouton en temps polynomial O(n log n):
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                              <li>Calculer le ratio valeur/poids (v<sub>i</sub>/w<sub>i</sub>) pour chaque objet.</li>
                              <li>Trier les objets par ratio valeur/poids décroissant.</li>
                              <li>Sélectionner les objets dans l'ordre, en prenant la fraction maximale possible de chaque objet jusqu'à remplir le sac.</li>
                            </ol>
                            <p className="mt-3 text-gray-700">
                              Cette approche gloutonne garantit une solution optimale pour le problème fractionnel.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-1/3 bg-blue-50 p-4 rounded-lg">
                      <div className="relative h-full">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-blue-700 mb-2">Illustration</h4>
                          <div className="bg-white p-3 rounded border border-blue-100">
                            <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" className="w-full">
                              {/* Sac à dos */}
                              <rect x="50" y="50" width="200" height="180" fill="#e6f2ff" stroke="#3482F6" strokeWidth="2" rx="5" />

                              {/* Objets entiers */}
                              <rect x="70" y="70" width="50" height="50" fill="#34D399" stroke="#065F46" strokeWidth="1" rx="2" />
                              <text x="95" y="95" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="bold">100%</text>

                              <rect x="70" y="130" width="50" height="50" fill="#F87171" stroke="#991B1B" strokeWidth="1" rx="2" />
                              <text x="95" y="155" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">100%</text>

                              {/* Objet fractionné */}
                              <g>
                                <rect x="180" y="70" width="50" height="50" fill="#E5E7EB" stroke="#4B5563" strokeWidth="1" rx="2" />
                                <rect x="180" y="70" width="50" height="25" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />
                                <text x="205" y="95" textAnchor="middle" fill="#1E40AF" fontSize="12" fontWeight="bold">50%</text>
                              </g>

                              {/* Légende */}
                              <text x="150" y="210" textAnchor="middle" fill="#1F2937" fontSize="10">
                                Les objets peuvent être fractionnés pour maximiser la valeur
                              </text>
                            </svg>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'unbounded' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start gap-4">
                    <div className="w-2/3 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-800">Problème du Sac à Dos Non Borné</h3>

                      <p className="text-gray-700">
                        Dans cette variante, chaque type d'objet peut être sélectionné un nombre illimité de fois.
                        L'objectif reste de maximiser la valeur totale sans dépasser la capacité du sac.
                      </p>

                      <div
                        className="cursor-pointer border-t border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('formulation')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Formulation mathématique</h4>
                          {openAccordion === 'formulation' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'formulation' && (
                          <div className="mt-3">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <p className="font-mono mb-2">Maximiser: ∑<sub>i=1</sub><sup>n</sup> v<sub>i</sub> × x<sub>i</sub></p>

                              <p className="font-mono mb-2">Sous les contraintes:</p>
                              <p className="font-mono ml-4 mb-2">∑<sub>i=1</sub><sup>n</sup> w<sub>i</sub> × x<sub>i</sub> ≤ W</p>
                              <p className="font-mono ml-4">0 ≤ x<sub>i</sub> pour tout i = 1, ..., n</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('resolution')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Méthode de résolution</h4>
                          {openAccordion === 'resolution' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'resolution' && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-3">
                              Le problème du sac à dos non borné peut être résolu par un algorithme glouton qui maximise la valeur
                              tout en respectant les contraintes de capacité du sac.
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                              <li>Calculer le ratio valeur/poids (v<sub>i</sub>/w<sub>i</sub>) pour chaque objet.</li>
                              <li>Sélectionner un objet à la fois et l'ajouter au sac, répéter jusqu'à ce que la capacité soit atteinte.</li>
                              <li>Ajouter des objets jusqu'à ce que la capacité du sac soit remplie ou qu'il n'y ait plus d'objets à ajouter.</li>
                            </ol>
                            <p className="mt-3 text-gray-700">
                              Cette approche peut ne pas être optimale dans certains cas où un objet répété apporte une meilleure solution.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('applications')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Applications</h4>
                          {openAccordion === 'applications' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'applications' && (
                          <div className="mt-3">
                            <p className="text-gray-700">
                              Le problème du sac à dos non borné est utilisé dans divers domaines, comme la gestion de stocks,
                              la planification de la production, et même dans les systèmes de compression de données. Il est particulièrement
                              utile lorsque les objets sont répartis sur plusieurs catégories ou types, et que leur quantité peut être infinie.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>


                    <div className="w-1/3 bg-yellow-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">Illustration</h4>
                      <div className="bg-white p-3 rounded border border-yellow-200">
                        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
                          {/* Sac à dos */}
                          <rect x="50" y="50" width="200" height="130" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" rx="5" />

                          {/* Objets multiples du même type */}
                          <rect x="70" y="70" width="30" height="30" fill="#34D399" stroke="#065F46" strokeWidth="1" rx="2" />
                          <rect x="75" y="75" width="30" height="30" fill="#34D399" stroke="#065F46" strokeWidth="1" rx="2" />
                          <rect x="80" y="80" width="30" height="30" fill="#34D399" stroke="#065F46" strokeWidth="1" rx="2" />

                          <rect x="170" y="70" width="30" height="30" fill="#F87171" stroke="#991B1B" strokeWidth="1" rx="2" />
                          <rect x="175" y="75" width="30" height="30" fill="#F87171" stroke="#991B1B" strokeWidth="1" rx="2" />

                          <rect x="120" y="120" width="30" height="30" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />
                          <rect x="125" y="125" width="30" height="30" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />
                          <rect x="130" y="130" width="30" height="30" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />
                          <rect x="135" y="135" width="30" height="30" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />

                          {/* Légende */}
                          <text x="150" y="195" textAnchor="middle" fill="#1F2937" fontSize="10">
                            Chaque type d'objet peut être pris plusieurs fois
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'multiple' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start gap-4">
                    <div className="w-2/3 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-800">Problème du Sac à Dos Multiple</h3>

                      <p className="text-gray-700">
                        Dans cette variante, nous avons plusieurs sacs à dos, chacun avec sa propre capacité.
                        L'objectif est de répartir les objets entre les sacs de manière à maximiser la valeur totale.
                      </p>

                      <div
                        className="cursor-pointer border-t border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('formulation')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Formulation mathématique</h4>
                          {openAccordion === 'formulation' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'formulation' && (
                          <div className="mt-3">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <p className="font-mono mb-2">Maximiser: ∑<sub>i=1</sub><sup>n</sup> v<sub>i</sub> × x<sub>i</sub></p>

                              <p className="font-mono mb-2">Sous les contraintes:</p>
                              <p className="font-mono ml-4 mb-2">∑<sub>i=1</sub><sup>n</sup> w<sub>i</sub> × x<sub>i</sub> ≤ W<sub>k</sub>, pour chaque sac k</p>
                              <p className="font-mono ml-4">0 ≤ x<sub>i</sub> ≤ 1 pour tout i = 1, ..., n</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('resolution')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Méthode de résolution</h4>
                          {openAccordion === 'resolution' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'resolution' && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-3">
                              Le problème du sac à dos multiple peut être résolu avec une approche gloutonne similaire,
                              mais en prenant en compte plusieurs sacs, chacun ayant une capacité différente.
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                              <li>Calculer la valeur/poids de chaque objet.</li>
                              <li>Pour chaque sac, déterminer les objets à ajouter tout en respectant sa capacité maximale.</li>
                              <li>Distribuer les objets entre les sacs de manière à maximiser la valeur totale.</li>
                            </ol>
                            <p className="mt-3 text-gray-700">
                              Cette approche peut également inclure une méthode de programmation dynamique pour optimiser la solution
                              en tenant compte de toutes les combinaisons possibles entre les sacs et les objets.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('applications')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Applications</h4>
                          {openAccordion === 'applications' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'applications' && (
                          <div className="mt-3">
                            <p className="text-gray-700">
                              Le problème du sac à dos multiple peut être utilisé dans des contextes comme la gestion des stocks,
                              la planification de la production et le stockage dans des entrepôts ayant des capacités variées.
                              Il est également pertinent dans des situations où différents espaces de stockage doivent être optimisés.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>


                    <div className="w-1/3 bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Illustration</h4>
                      <div className="bg-white p-3 rounded border border-green-200">
                        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
                          {/* Premier sac */}
                          <rect x="30" y="50" width="100" height="120" fill="#D1FAE5" stroke="#059669" strokeWidth="2" rx="5" />
                          <text x="80" y="40" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">Sac 1</text>

                          {/* Deuxième sac */}
                          <rect x="170" y="50" width="100" height="120" fill="#D1FAE5" stroke="#059669" strokeWidth="2" rx="5" />
                          <text x="220" y="40" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">Sac 2</text>

                          {/* Objets */}
                          <rect x="50" y="70" width="30" height="30" fill="#F87171" stroke="#991B1B" strokeWidth="1" rx="2" />
                          <rect x="60" y="110" width="40" height="40" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />

                          <rect x="190" y="70" width="50" height="25" fill="#A78BFA" stroke="#5B21B6" strokeWidth="1" rx="2" />
                          <rect x="190" y="110" width="35" height="35" fill="#F59E0B" stroke="#B45309" strokeWidth="1" rx="2" />

                          {/* Légende */}
                          <text x="150" y="190" textAnchor="middle" fill="#1F2937" fontSize="10">
                            Répartition des objets entre plusieurs sacs
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'multidimensional' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start gap-4">
                    <div className="w-2/3 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-800">Problème du Sac à Dos Multidimensionnel</h3>

                      <p className="text-gray-700">
                        Cette variante considère plusieurs contraintes (dimensions) pour chaque objet, comme le poids,
                        le volume, ou d'autres ressources. Chaque dimension a sa propre capacité maximale.
                      </p>

                      <div
                        className="cursor-pointer border-t border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('formulation')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Formulation mathématique</h4>
                          {openAccordion === 'formulation' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'formulation' && (
                          <div className="mt-3">
                            <div className="bg-gray-50 p-4 rounded-md">
                              <p className="font-mono mb-2">Maximiser: ∑<sub>i=1</sub><sup>n</sup> v<sub>i</sub> × x<sub>i</sub></p>

                              <p className="font-mono mb-2">Sous les contraintes:</p>
                              <p className="font-mono ml-4 mb-2">∑<sub>i=1</sub><sup>n</sup> w<sub>i</sub> × x<sub>i</sub> ≤ W<sub>k</sub>, pour chaque contrainte k</p>
                              <p className="font-mono ml-4">0 ≤ x<sub>i</sub> pour tout i = 1, ..., n</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('resolution')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Méthode de résolution</h4>
                          {openAccordion === 'resolution' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'resolution' && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-3">
                              Le problème du sac à dos multidimensionnel peut être résolu en utilisant des techniques comme la programmation
                              dynamique pour gérer les multiples dimensions et contraintes.
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                              <li>Pour chaque dimension, calculer le ratio valeur/ressources.</li>
                              <li>Utiliser la programmation dynamique pour explorer les différentes combinaisons possibles entre les objets.</li>
                              <li>Appliquer les contraintes de chaque dimension pour déterminer la meilleure distribution des objets.</li>
                            </ol>
                            <p className="mt-3 text-gray-700">
                              Cette approche permet de maximiser la valeur tout en respectant les différentes contraintes simultanément.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className="cursor-pointer border-b py-3 hover:bg-gray-50"
                        onClick={() => toggleAccordion('applications')}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-700">Applications</h4>
                          {openAccordion === 'applications' ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        {openAccordion === 'applications' && (
                          <div className="mt-3">
                            <p className="text-gray-700">
                              Le problème du sac à dos multidimensionnel est utilisé dans des domaines où plusieurs ressources
                              sont limitées, comme la gestion de projets, l'optimisation des espaces de stockage dans des entrepôts,
                              ou la planification de la production avec des contraintes multiples (poids, volume, temps, etc.).
                            </p>
                          </div>
                        )}
                      </div>
                    </div>


                    <div className="w-1/3 bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-800 mb-2">Illustration</h4>
                      <div className="bg-white p-3 rounded border border-purple-200">
                        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
                          {/* Sac à dos avec plusieurs dimensions */}
                          <rect x="50" y="30" width="200" height="140" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" rx="5" />

                          {/* Divisions pour les différentes dimensions */}
                          <line x1="50" y1="80" x2="250" y2="80" stroke="#7C3AED" strokeWidth="1" strokeDasharray="5,5" />
                          <line x1="50" y1="130" x2="250" y2="130" stroke="#7C3AED" strokeWidth="1" strokeDasharray="5,5" />

                          <text x="30" y="55" textAnchor="end" fill="#7C3AED" fontSize="10" fontWeight="bold">Poids</text>
                          <text x="30" y="105" textAnchor="end" fill="#7C3AED" fontSize="10" fontWeight="bold">Volume</text>
                          <text x="30" y="155" textAnchor="end" fill="#7C3AED" fontSize="10" fontWeight="bold">Fragilité</text>

                          {/* Objets avec plusieurs dimensions */}
                          <rect x="70" y="40" width="40" height="30" fill="#F87171" stroke="#991B1B" strokeWidth="1" rx="2" />
                          <rect x="120" y="90" width="30" height="30" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1" rx="2" />
                          <rect x="170" y="140" width="40" height="20" fill="#34D399" stroke="#065F46" strokeWidth="1" rx="2" />

                          {/* Légende */}
                          <text x="150" y="190" textAnchor="middle" fill="#1F2937" fontSize="10">
                            Plusieurs contraintes (poids, volume, etc.) à satisfaire
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}