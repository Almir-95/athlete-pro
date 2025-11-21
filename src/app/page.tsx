"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Trophy,
  MapPin,
  Heart,
  MessageCircle,
  Share2,
  Play,
  ArrowRight,
  Check,
  Zap,
  Target,
  Award,
  Shield,
  AlertTriangle,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: Activity,
      title: "Tracking de Atividades",
      description: "Registre corridas, ciclismo, natação e mais de 30 esportes"
    },
    {
      icon: MapPin,
      title: "Rotas e Segmentos",
      description: "Crie rotas, descubra segmentos e compete com a comunidade"
    },
    {
      icon: Users,
      title: "Feed Social",
      description: "Siga atletas, dê kudos e comente em atividades"
    },
    {
      icon: Trophy,
      title: "Desafios e Conquistas",
      description: "Participe de desafios mensais e desbloqueie troféus"
    },
    {
      icon: TrendingUp,
      title: "Análise de Performance",
      description: "Estatísticas detalhadas, gráficos e insights de treino"
    },
    {
      icon: Target,
      title: "Metas Personalizadas",
      description: "Defina objetivos e acompanhe seu progresso"
    }
  ];

  const stats = [
    { value: "100M+", label: "Atletas" },
    { value: "3B+", label: "Atividades" },
    { value: "195", label: "Países" },
    { value: "30+", label: "Esportes" }
  ];

  const premiumFeatures = [
    "Tudo do plano grátis",
    "Análise avançada de performance",
    "Treinamento personalizado com IA",
    "Rotas e segmentos privados",
    "Compartilhamento de rota em tempo real",
    "Detecção automática de acidentes",
    "Modo emergência com alerta SOS",
    "Comparação com outros atletas",
    "Metas e planejamento de treinos",
    "Integração com dispositivos (Garmin, Apple Watch)",
    "Suporte prioritário"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-white">Athlete Pro</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  Entrar
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  Cadastrar Grátis
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              A rede social para atletas
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Registre suas atividades, conecte-se com milhões de atletas e 
              alcance seus objetivos com a maior comunidade fitness do mundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
                  Começar Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8">
                Baixar App
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para treinar melhor
          </h2>
          <p className="text-xl text-gray-600">
            Ferramentas poderosas para atletas de todos os níveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Safety Features Section - NEW */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-600 text-white border-0 mb-4">
              Exclusivo Premium
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Segurança Avançada para Atletas
            </h2>
            <p className="text-xl text-gray-400">
              Treine com tranquilidade sabendo que você está protegido
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-orange-600/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Rastreamento em Tempo Real
              </h3>
              <p className="text-gray-400">
                Compartilhe sua localização ao vivo com contatos de confiança durante suas atividades
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-orange-600/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-yellow-600/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Detecção de Acidentes
              </h3>
              <p className="text-gray-400">
                Sistema inteligente detecta quedas e paradas bruscas, alertando automaticamente seus contatos
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-orange-600/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Modo Emergência
              </h3>
              <p className="text-gray-400">
                Botão SOS que envia sua localização e alerta para contatos de emergência instantaneamente
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/dashboard">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Ativar Recursos de Segurança
                <Shield className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Feed Preview */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conecte-se com atletas do mundo todo
            </h2>
            <p className="text-xl text-gray-600">
              Compartilhe suas conquistas e inspire outros
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Sample Activity Card */}
            <Card className="border-gray-200 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">João Silva</div>
                  <div className="text-sm text-gray-600">Corrida Matinal • Hoje às 7:30</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-2">10.5 km</div>
                <div className="flex gap-6 text-sm text-gray-600">
                  <div>⏱️ 52:30</div>
                  <div>⚡ 5:00 /km</div>
                  <div>🔥 520 kcal</div>
                </div>
              </div>

              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-orange-600" />
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">42 Kudos</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">8 Comentários</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600">
            Comece grátis e faça upgrade quando quiser
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-gray-200 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Grátis</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                $0
                <span className="text-lg text-gray-600 font-normal">/mês</span>
              </div>
              <p className="text-gray-600">Perfeito para começar</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Tracking ilimitado de atividades",
                "Feed social e kudos",
                "Análise básica de performance",
                "Rotas e segmentos públicos",
                "Desafios mensais",
                "App mobile completo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/dashboard">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Começar Grátis
              </Button>
            </Link>
          </Card>

          {/* Premium Plan */}
          <Card className="border-orange-500 border-2 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-orange-600 text-white border-0">
                <Award className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              
              {/* Billing Toggle */}
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    billingCycle === 'monthly' 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    billingCycle === 'yearly' 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Anual
                  <span className="ml-1 text-xs">(economize 40%)</span>
                </button>
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-4">
                ${billingCycle === 'monthly' ? '11.99' : '5.99'}
                <span className="text-lg text-gray-600 font-normal">/mês</span>
              </div>
              {billingCycle === 'yearly' && (
                <p className="text-sm text-orange-600 mb-2">$71.88 cobrado anualmente</p>
              )}
              <p className="text-gray-600">Recursos avançados para atletas sérios</p>
            </div>

            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/dashboard">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Testar 14 Dias Grátis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Play className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a 100 milhões de atletas e transforme seus treinos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
                Cadastrar Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-6">
            Grátis para sempre • Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Athlete Pro</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 Athlete Pro. A rede social para atletas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
