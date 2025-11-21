"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Activity, 
  Users, 
  Trophy,
  Settings,
  Crown,
  Menu,
  X,
  Home,
  TrendingUp,
  MapPin,
  Target,
  Bell,
  User,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userPlan, setUserPlan] = useState<'free' | 'premium'>('free');
  const pathname = usePathname();

  const navigation = [
    { name: 'Feed', href: '/dashboard', icon: Home, free: true },
    { name: 'Minhas Atividades', href: '/dashboard/activities', icon: Activity, free: true },
    { name: 'Explorar', href: '/dashboard/explore', icon: MapPin, free: true },
    { name: 'Segmentos', href: '/dashboard/segments', icon: Target, free: true },
    { name: 'Desafios', href: '/dashboard/challenges', icon: Trophy, free: true },
    { name: 'Atletas', href: '/dashboard/athletes', icon: Users, free: true },
    { name: 'Progresso', href: '/dashboard/progress', icon: TrendingUp, free: false },
    { name: 'Segurança', href: '/dashboard/safety', icon: Shield, free: false },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Athlete Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 bg-slate-900/95 backdrop-blur-sm border-r border-slate-800 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-800">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Athlete Pro</span>
            </Link>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white">João Silva</div>
                <div className="text-sm text-gray-400">São Paulo, BR</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-white">142</div>
                <div className="text-xs text-gray-400">Seguindo</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">1.2k</div>
                <div className="text-xs text-gray-400">Seguidores</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">89</div>
                <div className="text-xs text-gray-400">Atividades</div>
              </div>
            </div>
          </div>

          {/* Plan Badge */}
          {userPlan === 'free' && (
            <div className="p-6">
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-semibold">Upgrade Premium</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Análises avançadas, treinos personalizados e muito mais
                </p>
                <Button
                  onClick={() => setUserPlan('premium')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0"
                  size="sm"
                >
                  Testar 14 Dias Grátis
                </Button>
              </Card>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isLocked = !item.free && userPlan === 'free';
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={isLocked ? '#' : item.href}
                  onClick={(e) => {
                    if (isLocked) {
                      e.preventDefault();
                      alert('Este recurso está disponível apenas no plano Premium. Faça upgrade para desbloquear!');
                    }
                    setSidebarOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-r from-orange-500/20 to-red-600/20 text-white'
                      : isLocked
                      ? 'text-gray-500 hover:text-gray-400'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isLocked && (
                    <Crown className="w-4 h-4 ml-auto text-orange-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="p-4 border-t border-slate-800">
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Configurações</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
