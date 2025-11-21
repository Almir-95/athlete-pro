"use client";

import { useState } from "react";
import { 
  Activity, 
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  TrendingUp,
  Trophy,
  Users,
  Play,
  Plus,
  Filter,
  Clock,
  Zap,
  Target,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'feed' | 'you'>('feed');

  const activities = [
    {
      user: { name: 'Maria Santos', avatar: 'MS', isPro: true },
      type: 'Corrida Matinal',
      time: 'Hoje às 7:30',
      distance: '10.5 km',
      duration: '52:30',
      pace: '5:00 /km',
      calories: 520,
      kudos: 42,
      comments: 8,
      hasMap: true
    },
    {
      user: { name: 'Carlos Oliveira', avatar: 'CO', isPro: false },
      type: 'Pedal no Parque',
      time: 'Ontem às 18:00',
      distance: '32.8 km',
      duration: '1:25:15',
      pace: '23.1 km/h',
      calories: 680,
      kudos: 28,
      comments: 5,
      hasMap: true
    },
    {
      user: { name: 'Ana Costa', avatar: 'AC', isPro: true },
      type: 'Natação',
      time: '2 dias atrás',
      distance: '2.0 km',
      duration: '45:00',
      pace: '2:15 /100m',
      calories: 420,
      kudos: 35,
      comments: 12,
      hasMap: false
    }
  ];

  const weekStats = [
    { label: 'Distância', value: '45.3 km', icon: MapPin, color: 'text-orange-600' },
    { label: 'Tempo', value: '4h 32m', icon: Clock, color: 'text-blue-600' },
    { label: 'Atividades', value: '8', icon: Activity, color: 'text-green-600' },
    { label: 'Calorias', value: '3.2k', icon: Zap, color: 'text-red-600' },
  ];

  const challenges = [
    { name: 'Desafio de Junho', progress: 75, target: '100 km', current: '75 km' },
    { name: 'Corrida Semanal', progress: 60, target: '5 corridas', current: '3 corridas' },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Feed de Atividades
                </h1>
                <p className="text-gray-400">
                  Veja o que seus amigos estão fazendo
                </p>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nova Atividade
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-slate-800">
              <button
                onClick={() => setActiveTab('feed')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'feed'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Feed
              </button>
              <button
                onClick={() => setActiveTab('you')}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === 'you'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Você
              </button>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-slate-700">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-slate-700 text-gray-400">
                  Corrida
                </Badge>
                <Badge variant="outline" className="border-slate-700 text-gray-400">
                  Ciclismo
                </Badge>
                <Badge variant="outline" className="border-slate-700 text-gray-400">
                  Todos
                </Badge>
              </div>
            </div>

            {/* Activities Feed */}
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-orange-600/50 transition-all">
                  {/* User Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                      {activity.user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{activity.user.name}</span>
                        {activity.user.isPro && (
                          <Badge className="bg-orange-600 text-white border-0 text-xs">
                            PRO
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{activity.type} • {activity.time}</div>
                    </div>
                  </div>

                  {/* Activity Stats */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white mb-3">{activity.distance}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {activity.pace}
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        {activity.calories} kcal
                      </div>
                    </div>
                  </div>

                  {/* Map Preview */}
                  {activity.hasMap && (
                    <div className="h-48 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-lg mb-4 flex items-center justify-center border border-slate-800">
                      <MapPin className="w-12 h-12 text-orange-600" />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{activity.kudos} Kudos</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{activity.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="border-slate-700 text-gray-400 hover:text-white">
                Carregar Mais Atividades
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Week Stats */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Esta Semana</h2>
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-4">
                {weekStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-gray-400">{stat.label}</span>
                    </div>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenges */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Desafios</h2>
                <Trophy className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-medium">{challenge.name}</span>
                      <span className="text-gray-400">{challenge.current} / {challenge.target}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600" 
                        style={{ width: `${challenge.progress}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-slate-700 text-gray-400 hover:text-white">
                Ver Todos os Desafios
              </Button>
            </Card>

            {/* Segments */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Segmentos</h2>
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all cursor-pointer">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Subida da Avenida</div>
                    <div className="text-xs text-gray-400">2º lugar • 5:32</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all cursor-pointer">
                  <Award className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Sprint do Parque</div>
                    <div className="text-xs text-gray-400">8º lugar • 1:15</div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-slate-700 text-gray-400 hover:text-white">
                Explorar Segmentos
              </Button>
            </Card>

            {/* Community */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Comunidade</h2>
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                    MS
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Maria Santos</div>
                    <div className="text-xs text-gray-400">Seguindo</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-slate-700 text-gray-400 hover:text-white">
                    Ver
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    CO
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">Carlos Oliveira</div>
                    <div className="text-xs text-gray-400">Seguindo</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-slate-700 text-gray-400 hover:text-white">
                    Ver
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-slate-700 text-gray-400 hover:text-white">
                Encontrar Atletas
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
