// components/Simulation.js
'use client';

import { useState, useEffect } from 'react';
import { Trash2, Plus, RefreshCw, Play, Award } from 'lucide-react';

export default function Simulation() {
  const [items, setItems] = useState([
    { id: 1, name: "Ordinateur portable", value: 500, weight: 3, selected: false },
    { id: 2, name: "Appareil photo", value: 300, weight: 2, selected: false },
    { id: 3, name: "Smartphone", value: 400, weight: 1, selected: false },
    { id: 4, name: "Tablette", value: 350, weight: 1.5, selected: false },
    { id: 5, name: "Console de jeux", value: 250, weight: 2.5, selected: false }
  ]);
  
  const [capacity, setCapacity] = useState(5);
  const [newItem, setNewItem] = useState({ name: "", value: "", weight: "" });
  const [solution, setSolution] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [animationLog, setAnimationLog] = useState([]);
  
  // Ajouter un nouvel objet
  const handleAddItem = () => {
    if (newItem.name && newItem.value && newItem.weight) {
      const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
      setItems([...items, { 
        id: newId, 
        name: newItem.name, 
        value: parseFloat(newItem.value), 
        weight: parseFloat(newItem.weight),
        selected: false
      }]);
      setNewItem({ name: "", value: "", weight: "" });
    }
  };
  
  // Supprimer un objet
  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  // Réinitialiser la simulation
  const resetSimulation = () => {
    setItems(items.map(item => ({ ...item, selected: false })));
    setSolution(null);
    setIsAnimating(false);
    setAnimationStep(0);
    setAnimationLog([]);
  };
  
  // Sélectionner/désélectionner manuellement un objet
  const toggleItemSelection = (id) => {
    if (isAnimating) return;
    
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };
  
  // Calculer la valeur et le poids totaux des objets sélectionnés
  const calculateTotals = () => {
    return items.reduce(
      (acc, item) => {
        if (item.selected) {
          return {
            totalValue: acc.totalValue + item.value,
            totalWeight: acc.totalWeight + item.weight
          };
        }
        return acc;
      },
      { totalValue: 0, totalWeight: 0 }
    );
  };
  
  // Résoudre le problème avec l'algorithme de programmation dynamique
  const solveKnapsack = () => {
    setIsAnimating(true);
    setAnimationStep(0);
    setAnimationLog([]);
    setSolution(null);
    
    try {
      // Initialiser l'animation
      const animationSteps = dynamicProgrammingAnimation(items, capacity);
      
      // Vérification de sécurité pour éviter les erreurs
      if (!animationSteps || animationSteps.length === 0) {
        console.error("Erreur: Impossible de générer les étapes d'animation");
        setIsAnimating(false);
        return;
      }
      
      // Lancer l'animation étape par étape
      let currentStep = 0;
      const animationInterval = setInterval(() => {
        if (currentStep < animationSteps.length && animationSteps[currentStep]) {
          setAnimationStep(currentStep);
          
          // Vérifier que le message existe - utiliser une valeur par défaut si non
          const stepMessage = animationSteps[currentStep]?.message || "Étape d'animation";
          setAnimationLog(prevLog => [...prevLog, stepMessage]);
          
          // Mise à jour de la sélection des objets à la dernière étape
          if (currentStep === animationSteps.length - 1) {
            // Vérification de sécurité pour selectedItems
            const currentSelectedItems = animationSteps[currentStep]?.selectedItems || [];
            
            setItems(prev => prev.map(item => ({
              ...item,
              selected: currentSelectedItems.includes(item.id)
            })));
            
            // Définir la solution avec des valeurs par défaut si nécessaire
            setSolution({
              selectedItems: currentSelectedItems,
              totalValue: animationSteps[currentStep]?.totalValue || 0,
              totalWeight: animationSteps[currentStep]?.totalWeight || 0
            });
          }
          
          currentStep++;
        } else {
          clearInterval(animationInterval);
          setIsAnimating(false);
        }
      }, 800); // Intervalle entre les étapes d'animation
      
      return () => clearInterval(animationInterval);
    } catch (error) {
      console.error("Erreur lors de la résolution:", error);
      setIsAnimating(false);
      setAnimationLog(["Une erreur s'est produite lors de la simulation"]);
      return () => {};
    }
  };
  
  // Algorithme de programmation dynamique avec animation
  const dynamicProgrammingAnimation = (items, capacity) => {
    // Vérification de sécurité pour items
    if (!items || items.length === 0) {
      return [{ 
        message: "Aucun objet disponible pour la simulation",
        selectedItems: [],
        totalValue: 0,
        totalWeight: 0
      }];
    }
    
    const n = items.length;
    const W = Math.floor(capacity * 10); // Convertir en nombres entiers pour la programmation dynamique
    const weights = items.map(item => Math.floor(item.weight * 10));
    const values = items.map(item => item.value);
    
    // Tableau pour la programmation dynamique
    const dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));
    
    // Tableaux pour suivre les objets sélectionnés à chaque étape
    const selected = Array(n + 1).fill().map(() => Array(W + 1).fill().map(() => []));
    
    const steps = [
      {
        message: "Initialisation de la table de programmation dynamique...",
        selectedItems: [],
        totalValue: 0,
        totalWeight: 0
      }
    ];
    
    // Remplir le tableau DP
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
        if (weights[i-1] <= w) {
          // Si l'objet peut entrer dans le sac
          if (values[i-1] + dp[i-1][w-weights[i-1]] > dp[i-1][w]) {
            // Prendre l'objet est meilleur
            dp[i][w] = values[i-1] + dp[i-1][w-weights[i-1]];
            selected[i][w] = [...selected[i-1][w-weights[i-1]], items[i-1].id];
          } else {
            // Ne pas prendre l'objet est meilleur
            dp[i][w] = dp[i-1][w];
            selected[i][w] = [...selected[i-1][w]];
          }
        } else {
          // L'objet ne peut pas entrer dans le sac
          dp[i][w] = dp[i-1][w];
          selected[i][w] = [...selected[i-1][w]];
        }
      }
      
      // Ajouter une étape d'animation après avoir traité chaque objet
      // Vérification de sécurité pour les valeurs
      const currentSelected = selected[i][W] || [];
      const currentTotalValue = dp[i][W] || 0;
      
      // Calcul sécurisé du poids total
      const currentTotalWeight = currentSelected.reduce(
        (total, id) => {
          const item = items.find(item => item.id === id);
          return item ? total + item.weight : total;
        },
        0
      );
      
      steps.push({
        message: `Évaluation de l'objet ${i}: "${items[i-1]?.name || 'Objet'}" (valeur: ${values[i-1] || 0}, poids: ${(weights[i-1] || 0)/10})...`,
        selectedItems: currentSelected,
        totalValue: currentTotalValue,
        totalWeight: currentTotalWeight
      });
    }
    
    // Récupérer la solution finale de manière sécurisée
    const finalSelected = (selected && selected[n] && selected[n][W]) ? selected[n][W] : [];
    const finalValue = (dp && dp[n] && dp[n][W]) ? dp[n][W] : 0;
    
    // Calcul sécurisé du poids total final
    const finalWeight = finalSelected.reduce(
      (total, id) => {
        const item = items.find(item => item.id === id);
        return item ? total + item.weight : total;
      },
      0
    );
    
    // Ajouter l'étape finale avec la solution
    steps.push({
      message: `Solution optimale trouvée avec une valeur totale de ${finalValue} !`,
      selectedItems: finalSelected,
      totalValue: finalValue,
      totalWeight: finalWeight
    });
    
    return steps;
  };
  
  // Calcul des totaux actuels
  const { totalValue, totalWeight } = calculateTotals();
  const isOverCapacity = totalWeight > capacity;
  
  return (
    <section id="simulation" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Simulation Interactive</h2>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Configuration des paramètres */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card">
              <h3 className="section-subtitle">Paramètres du problème</h3>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Capacité du sac à dos
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={capacity}
                    onChange={(e) => setCapacity(parseFloat(e.target.value))}
                    className="flex-grow"
                  />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-medium min-w-[60px] text-center">
                    {capacity} kg
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Objets disponibles</h4>
                
                <div className="overflow-x-auto rounded-md border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valeur
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Poids
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr 
                          key={item.id} 
                          className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                            item.selected ? 'bg-blue-50' : ''
                          }`}
                          onClick={() => toggleItemSelection(item.id)}
                        >
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={item.selected}
                                onChange={() => {}}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                              />
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-blue-700 font-medium">
                            {item.value} €
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {item.weight} kg
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteItem(item.id);
                              }}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nom de l'objet"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Valeur (€)
                  </label>
                  <input
                    type="number"
                    value={newItem.value}
                    onChange={(e) => setNewItem({...newItem, value: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Valeur"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Poids (kg)
                  </label>
                  <input
                    type="number"
                    value={newItem.weight}
                    onChange={(e) => setNewItem({...newItem, weight: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Poids"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>
              
              <button
                onClick={handleAddItem}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                <Plus size={18} />
                <span>Ajouter un objet</span>
              </button>
            </div>
            
            <div className="card">
              <h3 className="section-subtitle">Contrôles de simulation</h3>
              
              <div className="flex flex-col gap-4">
                <button
                  onClick={solveKnapsack}
                  disabled={isAnimating}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <Play size={18} />
                  <span>Résoudre automatiquement</span>
                </button>
                
                <button
                  onClick={resetSimulation}
                  className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  <RefreshCw size={18} />
                  <span>Réinitialiser</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Visualisation et résultats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card">
              <h3 className="section-subtitle">Visualisation</h3>
              
              <div className="relative">
                <div className="mb-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200 relative min-h-[300px]">
                  <div className="absolute top-2 right-3 bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    Capacité: {capacity} kg
                  </div>
                  
                  {/* Visualisation du sac et des objets */}
                  <div className="flex gap-6 items-end h-full">
                    {/* Sac à dos */}
                    <div className="w-1/3 h-[240px] bg-blue-100 border-2 border-blue-300 rounded-md relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 bg-blue-300 transition-all duration-500" style={{
                        height: `${Math.min(100, (totalWeight / capacity) * 100)}%`,
                      }}>
                        {totalWeight > 0 && (
                          <div className="absolute top-1/2 left-0 right-0 text-center transform -translate-y-1/2 font-bold text-blue-800">
                            {totalWeight.toFixed(1)} / {capacity} kg
                          </div>
                        )}
                      </div>
                      
                      {isOverCapacity && (
                        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white py-1 text-center text-sm font-medium">
                          Capacité dépassée !
                        </div>
                      )}
                    </div>
                    
                    {/* Objets sélectionnés */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Objets sélectionnés</h4>
                      
                      {items.some(item => item.selected) ? (
                        <div className="grid grid-cols-2 gap-2">
                          {items.filter(item => item.selected).map(item => (
                            <div 
                              key={item.id}
                              className="bg-white p-2 rounded border border-blue-200 text-sm flex flex-col"
                            >
                              <span className="font-medium">{item.name}</span>
                              <div className="flex justify-between text-gray-600 text-xs">
                                <span>{item.value} €</span>
                                <span>{item.weight} kg</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">Aucun objet sélectionné</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Résultats de la sélection actuelle */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-lg border ${
                    isOverCapacity ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="text-lg font-semibold mb-1">Valeur totale</div>
                    <div className="text-2xl font-bold text-blue-800">{totalValue} €</div>
                  </div>
                  
                  <div className={`p-4 rounded-lg border ${
                    isOverCapacity ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="text-lg font-semibold mb-1">Poids total</div>
                    <div className="text-2xl font-bold text-blue-800">
                      {totalWeight.toFixed(1)} / {capacity} kg
                    </div>
                  </div>
                </div>
                
                {/* Solution optimale */}
                {solution && solution.selectedItems && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={24} className="text-yellow-600" />
                      <h4 className="text-lg font-semibold text-yellow-800">Solution optimale trouvée!</h4>
                    </div>
                    <p className="text-gray-700">
                      Valeur maximale: <span className="font-bold">{solution.totalValue} €</span> avec un poids de <span className="font-bold">{solution.totalWeight.toFixed(1)} kg</span>.
                    </p>
                  </div>
                )}
                
                {/* Logs de l'algorithme */}
                {animationLog.length > 0 && (
                  <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200 max-h-[150px] overflow-y-auto">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Étapes de l&apos;algorithme:</h4>
                    <ol className="space-y-1 text-sm text-gray-600 list-decimal list-inside">
                      {animationLog.map((log, index) => (
                        <li key={index} className={index === animationLog.length - 1 ? 'font-medium text-blue-700' : ''}>
                          {log}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}