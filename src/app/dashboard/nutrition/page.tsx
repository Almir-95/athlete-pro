"use client";

import { useState } from "react";
import { 
  Camera, 
  Scan,
  TrendingUp,
  Apple,
  Flame,
  Activity,
  Crown,
  Upload,
  Search,
  Plus
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function NutritionPage() {
  const [scanning, setScanning] = useState(false);

  const todayStats = {
    calories: { consumed: 1850, target: 2200 },
    protein: { consumed: 95, target: 150 },
    carbs: { consumed: 180, target: 220 },
    fat: { consumed: 62, target: 75 }
  };

  const recentMeals = [
    {
      name: 'Frango Grelhado com Arroz',
      time: '12:30',
      calories: 520,
      protein: 45,
      carbs: 52,
      fat: 12,
      image: '🍗'
    },
    {
      name: 'Smoothie de Frutas',
      time: '09:15',
      calories: 280,
      protein: 8,
      carbs: 58,
      fat: 4,
      image: '🥤'
    },
    {
      name: 'Ovos com Abacate',
      time: '07:00',
      calories: 380,
      protein: 18,
      carbs: 12,
      fat: 28,
      image: '🥑'
    }
  ];

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      alert('Escaneamento concluído! Alimento reconhecido: Banana (105 kcal, 27g carbs)');
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Nutrição Inteligente
              </h1>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
            <p className="text-gray-400">
              Scanner AI com 95% de precisão • Banco com +1M alimentos
            </p>
          </div>
        </div>

        {/* Scanner Card */}
        <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/50 p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Scanner de Alimentos
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Aponte a câmera para qualquer alimento e receba análise nutricional completa em menos de 3 segundos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  Reconhecimento visual
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  Cálculo de porções
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  Macros detalhados
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button 
                size="lg"
                onClick={handleScan}
                disabled={scanning}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-lg px-8"
              >
                {scanning ? (
                  <>
                    <Scan className="w-5 h-5 mr-2 animate-pulse" />
                    Escaneando...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5 mr-2" />
                    Escanear Alimento
                  </>
                )}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-orange-500/50 text-white hover:bg-orange-500/10"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload de Foto
              </Button>
            </div>
          </div>
        </Card>

        {/* Daily Stats */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Resumo de Hoje</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Calories */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <Flame className="w-8 h-8 text-orange-400" />
                <span className="text-2xl font-bold text-white">
                  {todayStats.calories.consumed}
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">
                Calorias / {todayStats.calories.target} meta
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-red-600" 
                  style={{ width: `${(todayStats.calories.consumed / todayStats.calories.target) * 100}%` }}
                />
              </div>
            </Card>

            {/* Protein */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">
                  {todayStats.protein.consumed}g
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">
                Proteína / {todayStats.protein.target}g meta
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600" 
                  style={{ width: `${(todayStats.protein.consumed / todayStats.protein.target) * 100}%` }}
                />
              </div>
            </Card>

            {/* Carbs */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <Apple className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">
                  {todayStats.carbs.consumed}g
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">
                Carboidratos / {todayStats.carbs.target}g meta
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600" 
                  style={{ width: `${(todayStats.carbs.consumed / todayStats.carbs.target) * 100}%` }}
                />
              </div>
            </Card>

            {/* Fat */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">
                  {todayStats.fat.consumed}g
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">
                Gordura / {todayStats.fat.target}g meta
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-600" 
                  style={{ width: `${(todayStats.fat.consumed / todayStats.fat.target) * 100}%` }}
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Meals */}
        <Card className="bg-slate-900/50 border-slate-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Refeições de Hoje</h2>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
          </div>
          <div className="space-y-4">
            {recentMeals.map((meal, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all">
                <div className="text-4xl">{meal.image}</div>
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">{meal.name}</div>
                  <div className="text-sm text-gray-400">{meal.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white mb-1">{meal.calories} kcal</div>
                  <div className="text-xs text-gray-400">
                    P: {meal.protein}g • C: {meal.carbs}g • G: {meal.fat}g
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Food Database Search */}
        <Card className="bg-slate-900/50 border-slate-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">
            Buscar no Banco de Dados
          </h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Busque entre +1 milhão de alimentos..."
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
              <Search className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            💡 Dica: Use o scanner para adicionar alimentos instantaneamente sem precisar buscar
          </p>
        </Card>
      </div>
    </div>
  );
}
