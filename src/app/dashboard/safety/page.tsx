"use client";

import { useState } from "react";
import { 
  Shield,
  MapPin,
  Phone,
  AlertTriangle,
  Users,
  Clock,
  Navigation,
  Radio,
  Bell,
  CheckCircle,
  XCircle,
  Activity,
  Zap,
  Heart
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SafetyPage() {
  const [isLiveTrackingActive, setIsLiveTrackingActive] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);

  const emergencyContacts = [
    { name: "Maria Silva", phone: "+55 11 98765-4321", relation: "Esposa" },
    { name: "João Santos", phone: "+55 11 91234-5678", relation: "Irmão" },
  ];

  const safetyFeatures = [
    {
      icon: MapPin,
      title: "Compartilhamento em Tempo Real",
      description: "Compartilhe sua localização ao vivo com contatos selecionados",
      status: isLiveTrackingActive ? "Ativo" : "Inativo",
      color: isLiveTrackingActive ? "text-green-600" : "text-gray-400"
    },
    {
      icon: AlertTriangle,
      title: "Detecção de Acidentes",
      description: "Detecta quedas e paradas bruscas automaticamente",
      status: "Ativo",
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Modo Emergência",
      description: "Botão SOS para alertar contatos imediatamente",
      status: emergencyMode ? "EMERGÊNCIA ATIVA" : "Pronto",
      color: emergencyMode ? "text-red-600" : "text-green-600"
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Notificações sobre condições climáticas e segurança",
      status: "Ativo",
      color: "text-green-600"
    }
  ];

  const handleStartLiveTracking = () => {
    setIsLiveTrackingActive(!isLiveTrackingActive);
  };

  const handleEmergency = () => {
    setEmergencyMode(true);
    // Simular envio de alerta
    setTimeout(() => {
      alert("🚨 ALERTA ENVIADO!\n\nSua localização e mensagem de emergência foram enviadas para:\n- Maria Silva\n- João Santos\n\nServiços de emergência foram notificados.");
    }, 500);
  };

  const handleCancelEmergency = () => {
    setEmergencyMode(false);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Central de Segurança
              </h1>
              <p className="text-gray-400">
                Recursos premium para sua proteção
              </p>
            </div>
          </div>
          <Badge className="bg-orange-600 text-white border-0">
            Recurso Premium
          </Badge>
        </div>

        {/* Emergency Mode Alert */}
        {emergencyMode && (
          <Card className="bg-red-600 border-red-500 p-6 mb-6 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    MODO EMERGÊNCIA ATIVO
                  </h3>
                  <p className="text-white/90">
                    Seus contatos foram notificados e estão recebendo sua localização
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleCancelEmergency}
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
              >
                Cancelar Emergência
              </Button>
            </div>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Tracking Card */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${isLiveTrackingActive ? 'bg-green-600' : 'bg-slate-800'} flex items-center justify-center`}>
                    <Radio className={`w-5 h-5 ${isLiveTrackingActive ? 'text-white animate-pulse' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Rastreamento ao Vivo
                    </h2>
                    <p className="text-sm text-gray-400">
                      {isLiveTrackingActive 
                        ? "Sua localização está sendo compartilhada" 
                        : "Compartilhe sua localização em tempo real"}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleStartLiveTracking}
                  className={isLiveTrackingActive 
                    ? "bg-red-600 hover:bg-red-700" 
                    : "bg-green-600 hover:bg-green-700"}
                >
                  {isLiveTrackingActive ? "Parar" : "Iniciar"}
                </Button>
              </div>

              {isLiveTrackingActive && (
                <div className="space-y-4">
                  <div className="h-64 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-lg flex items-center justify-center border border-slate-800">
                    <div className="text-center">
                      <Navigation className="w-16 h-16 text-green-600 mx-auto mb-4 animate-pulse" />
                      <p className="text-white font-medium">Transmitindo localização...</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Av. Paulista, 1000 - São Paulo, SP
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Clock className="w-5 h-5 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">15:32</div>
                      <div className="text-xs text-gray-400">Tempo ativo</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Users className="w-5 h-5 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">2</div>
                      <div className="text-xs text-gray-400">Visualizando</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <Activity className="w-5 h-5 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">12.5 km</div>
                      <div className="text-xs text-gray-400">Distância</div>
                    </div>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-medium">
                          Seus contatos estão acompanhando sua atividade
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Maria Silva e João Santos podem ver sua localização em tempo real
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!isLiveTrackingActive && (
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-3">Como funciona:</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Compartilhe sua localização GPS em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Seus contatos recebem um link seguro para acompanhar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Atualização automática a cada 10 segundos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Encerra automaticamente ao finalizar a atividade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Card>

            {/* Accident Detection */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-600 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Detecção de Acidentes
                  </h2>
                  <p className="text-sm text-gray-400">
                    Proteção automática durante suas atividades
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Status do Sistema</span>
                    <Badge className="bg-green-600 text-white border-0">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Ativo
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Sensor de movimento</span>
                      <span className="text-green-600 font-medium">Operacional</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Detecção de queda</span>
                      <span className="text-green-600 font-medium">Ativo</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Parada brusca</span>
                      <span className="text-green-600 font-medium">Monitorando</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
                  <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-600" />
                    Como funciona a detecção
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    O sistema monitora constantemente seus movimentos usando sensores do smartphone:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>Detecta quedas através do acelerômetro e giroscópio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>Identifica paradas bruscas durante atividades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>Aguarda 60 segundos para você cancelar o alerta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>Envia alerta automático se não houver resposta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Safety Features Overview */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Recursos de Segurança
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400 mb-2">{feature.description}</p>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            feature.status.includes("EMERGÊNCIA") 
                              ? "border-red-600 text-red-600" 
                              : feature.status === "Ativo" 
                                ? "border-green-600 text-green-600"
                                : "border-gray-600 text-gray-400"
                          }`}
                        >
                          {feature.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Button */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Modo Emergência
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Pressione o botão abaixo em caso de emergência. Seus contatos serão notificados imediatamente.
              </p>
              
              <Button
                onClick={handleEmergency}
                disabled={emergencyMode}
                className={`w-full h-32 text-xl font-bold ${
                  emergencyMode 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-red-600 hover:bg-red-700 active:scale-95"
                } transition-all`}
              >
                {emergencyMode ? (
                  <>
                    <CheckCircle className="w-8 h-8 mr-3" />
                    ALERTA ENVIADO
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-8 h-8 mr-3" />
                    SOS EMERGÊNCIA
                  </>
                )}
              </Button>

              {!emergencyMode && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  Use apenas em situações reais de emergência
                </p>
              )}
            </Card>

            {/* Emergency Contacts */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Contatos de Emergência
                </h2>
                <Button size="sm" variant="outline" className="border-slate-700">
                  Editar
                </Button>
              </div>

              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white">{contact.name}</div>
                        <div className="text-sm text-gray-400">{contact.relation}</div>
                        <div className="text-xs text-gray-500 mt-1">{contact.phone}</div>
                      </div>
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4 border-slate-700">
                Adicionar Contato
              </Button>
            </Card>

            {/* Safety Tips */}
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Dicas de Segurança
              </h2>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sempre ative o rastreamento ao vivo em treinos solitários</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mantenha seus contatos de emergência atualizados</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Leve seu celular com bateria carregada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Informe alguém sobre sua rota planejada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Evite treinar em locais isolados à noite</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
