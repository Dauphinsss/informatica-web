"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fondo estático */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/about.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed flex items-center justify-between px-4 sm:px-[5%] w-full z-[3] h-16 sm:h-20 text-[clamp(0.5rem,1.5vw,1rem)] tracking-[0.1em] sm:tracking-[0.3em]">
          <div className="hidden sm:block">Ingeniería Informática</div>
          <div className="text-sm sm:hidden">ING. INFORMÁTICA</div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm sm:text-base hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-gray-400">
              Última actualización: 30 de enero de 2025
            </p>
          </div>

          {/* Introducción */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Introducción</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Bienvenido a Informática. Esta Política de Privacidad describe cómo manejamos
                tus datos cuando utilizas nuestra aplicación móvil para Android.
              </p>
            </CardContent>
          </Card>

          {/* Información que Recopilamos */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Datos de Google:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nombre y correo electrónico</li>
                  <li>Foto de perfil (opcional)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">Contenido del usuario:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Publicaciones y archivos compartidos</li>
                  <li>Comentarios y reacciones</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">NO recopilamos:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-medium">
                    Ubicación
                  </Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-medium">
                    Contactos
                  </Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-medium">
                    Datos biométricos
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso de la Información */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Cómo Usamos tu Información</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Crear y gestionar tu cuenta</li>
                <li>Permitir compartir contenido educativo</li>
                <li>Enviar notificaciones de nuevas publicaciones</li>
                <li>Mejorar la experiencia del usuario</li>
              </ul>
            </CardContent>
          </Card>

          {/* Servicios de Terceros */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Servicios de Terceros</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p>Usamos los siguientes servicios de Google Firebase:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Authentication (autenticación)</li>
                <li>Firestore (base de datos)</li>
                <li>Storage (almacenamiento de archivos)</li>
                <li>Cloud Messaging (notificaciones)</li>
              </ul>
              <p className="font-semibold text-white mt-4">
                ✓ No vendemos ni alquilamos tu información personal
              </p>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Seguridad</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Protegemos tus datos mediante:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Autenticación con Google</li>
                <li>Cifrado HTTPS</li>
                <li>Reglas de seguridad de Firebase</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tus Derechos */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-4">
                {[
                  { label: "ACCESO", desc: "Ver y actualizar tu información" },
                  { label: "ELIMINACIÓN", desc: "Borrar tus publicaciones y cuenta" },
                  { label: "PORTABILIDAD", desc: "Solicitar copia de tus datos" },
                  { label: "NOTIFICACIONES", desc: "Desactivar en cualquier momento" }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <Badge className="mt-0.5 bg-white/10 hover:bg-white/20 border-white/30 text-white font-semibold px-3 py-1 text-xs uppercase">
                      {item.label}
                    </Badge>
                    <p className="text-sm text-gray-300 flex-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="mb-8 bg-white/5 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Contacto</CardTitle>
              <CardDescription className="text-gray-400">
                ¿Preguntas sobre tu privacidad? Contáctame
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="w-24 h-24 ring-2 ring-white/20">
                  <AvatarImage src="/marko.jpg" alt="Marcos Velasquez Vela" />
                  <AvatarFallback className="bg-white/10 text-white text-xl">MV</AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div>
                    <p className="font-bold text-xl text-white">Marcos Velasquez Vela</p>
                    <p className="text-sm text-gray-400">Desarrollador</p>
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href="mailto:marcosvelasquezvela123@gmail.com"
                      className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      marcosvelasquezvela123@gmail.com
                    </a>
                    <a
                      href="https://github.com/Dauphinsss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      github.com/Dauphinsss
                    </a>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    Respondo dentro de 30 días
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 space-y-2 pb-8">
            <p>© 2025 Informática App - Todos los derechos reservados</p>
            <p>Centro de Estudiantes de Ingeniería Informática - UMSS</p>
            <p className="text-xs">Versión 1.0 • Vigente desde: 30 de enero de 2025</p>
          </div>
        </main>
      </div>
    </div>
  );
}
