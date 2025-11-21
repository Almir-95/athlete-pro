"use client";

import { 
  Moon, 
  Sun,
  TrendingUp,
  Clock,
  Activity,
  Crown,
  Play,
  Volume2,
  Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SleepPage() {
  const lastNightData = {
    duration: 7.5,
    quality: 85,
    deepSleep: 2.1,
    remSleep: 1.8,
    lightSleep: 3.2,
    awakeTime: 0.4
  };

  const weekData = [
    { day: 'Seg', hours: 6.5, quality: 72 },
    { day: 'Ter', hours: 7.2, quality: 78 },
    { day: 'Qua', hours: 8.0, quality: 88 },
    { day: 'Qui', hours: 7.5, quality: 85 },
    { day: 'Sex', hours: 6.8, quality: 75 },
    { day: 'Sáb', hours: 8.5, quality: 92 },
    { day: 'Dom', hours: 7.8, quality: 86 },
  ];

  const recommendations = [
    {
      icon: Moon,
      title: 'Hora de Dormir Ideal',
      description: 'Baseado no seu padrão, durma às 22:30 para acordar revigorado',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Activity,
      title: 'Evite Treinos Intensos',
      description: 'Após 19h para não prejudicar a qualidade do sono',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Recuperação Ótima',
      description: 'Seu sono profundo está excelente. Continue assim!',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const sleepSounds = [
    { name: 'Chuva Suave', duration: '30 min', icon: '🌧️' },
    { name: 'Ondas do Mar', duration: '45 min', icon: '🌊' },
    { name: 'Floresta Noturna', duration: '60 min', icon: '🌲' },
    { name: 'Meditação Guiada', duration: '20 min', icon: '🧘' }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Regulador de Sono
              </h1>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
            <p className="text-gray-400">
              Análise com 95% de precisão • Recomendações personalizadas
            </p>
          </div>
        </div>

        {/* Last Night Summary */}
        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/50 p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Última Noite</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {lastNightData.duration}h
                  </div>
                  <div className="text-gray-400">Duração Total</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                    {lastNightData.quality}%
                  </div>
                  <div className="text-gray-400">Qualidade</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-64 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Sono Profundo</span>
                <span className="text-white font-semibold">{lastNightData.deepSleep}h</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{ width: '70%' }} />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Sono REM</span>
                <span className="text-white font-semibold">{lastNightData.remSleep}h</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600" style={{ width: '60%' }} />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Sono Leve</span>
                <span className="text-white font-semibold">{lastNightData.lightSleep}h</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </Card>

        {/* Week Overview */}
        <Card className="bg-slate-900/50 border-slate-800 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Últimos 7 Dias</h2>
          <div className="flex items-end justify-between gap-2 h-48">
            {weekData.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-xs text-gray-400">{day.hours}h</div>
                <div 
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-600 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${(day.hours / 10) * 100}%` }}
                />
                <div className="text-sm text-gray-400">{day.day}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Recomendações Personalizadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-purple-500/50 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${rec.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                  <rec.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{rec.title}</h3>
                <p className="text-gray-400 text-sm">{rec.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sleep Sounds */}
        <Card className="bg-slate-900/50 border-slate-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Sons para Dormir</h2>
              <p className="text-sm text-gray-400">Meditações e sons relaxantes</p>
            </div>
            <Volume2 className="w-6 h-6 text-purple-400" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sleepSounds.map((sound, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all group cursor-pointer">
                <div className="text-4xl mb-3">{sound.icon}</div>
                <div className="font-semibold text-white mb-1">{sound.name}</div>
                <div className="text-sm text-gray-400 mb-3">{sound.duration}</div>
                <Button size="sm" variant="outline" className="w-full group-hover:bg-purple-500/20 group-hover:border-purple-500/50">
                  <Play className="w-4 h-4 mr-2" />
                  Reproduzir
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Sleep Schedule */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Moon className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Rotina Ideal</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50">
                <Clock className="w-8 h-8 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Hora de Dormir</div>
                  <div className="text-2xl font-bold text-purple-400">22:30</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50">
                <Sun className="w-8 h-8 text-orange-400" />
                <div>
                  <div className="font-semibold text-white">Hora de Acordar</div>
                  <div className="text-2xl font-bold text-orange-400">06:00</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Impacto no Treino</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30">
                <div className="text-sm text-gray-400 mb-2">Recuperação Muscular</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600" style={{ width: '90%' }} />
                  </div>
                  <span className="text-white font-semibold">90%</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
                <div className="text-sm text-gray-400 mb-2">Energia para Treino</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600" style={{ width: '85%' }} />
                  </div>
                  <span className="text-white font-semibold">85%</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                ✨ Seu sono está otimizado para máxima performance!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
