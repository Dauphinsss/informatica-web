"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, ArrowLeft, Trash2, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function EliminarCuenta() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fondo estático */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/maya.jpg')"
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
        <main className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
          {/* Título */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 p-4 rounded-full">
                <Trash2 className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Eliminación de Cuenta
            </h1>
            <p className="text-gray-400">
              Informática App
            </p>
          </div>

          {/* Información principal */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">¿Cómo eliminar tu cuenta?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Si deseas eliminar tu cuenta de <strong className="text-white">Informática App</strong>,
                puedes enviar una solicitud escribiendo a:
              </p>

              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <a
                  href="mailto:marcosvelasquezvela123@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg font-semibold">marcosvelasquezvela123@gmail.com</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Proceso de eliminación */}
          <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Proceso de eliminación
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Una vez recibida la solicitud, eliminaremos tu cuenta y todos los datos asociados en un
                <strong className="text-white"> plazo máximo de 7 días hábiles</strong>.
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-white">Datos que se eliminarán:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Foto de perfil</li>
                  <li>Todas tus publicaciones y archivos compartidos</li>
                  <li>Comentarios y reacciones</li>
                  <li>Cualquier información vinculada a tu perfil</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Nota importante */}
          <Card className="mb-8 bg-white/5 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Nota importante
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Si iniciaste sesión con Google, la eliminación se aplica únicamente a los datos
                almacenados por nuestra aplicación, <strong className="text-white">no a tu cuenta de Google</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="mb-8 bg-white/5 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">¿Necesitas ayuda?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="w-20 h-20 ring-2 ring-white/20">
                  <AvatarImage src="/marko.jpg" alt="Marcos Velasquez Vela" />
                  <AvatarFallback className="bg-white/10 text-white text-xl">MV</AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div>
                    <p className="font-bold text-lg text-white">Marcos Velasquez Vela</p>
                    <p className="text-sm text-gray-400">Desarrollador</p>
                  </div>

                  <a
                    href="mailto:marcosvelasquezvela123@gmail.com"
                    className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    marcosvelasquezvela123@gmail.com
                  </a>

                  <p className="text-xs text-gray-500 mt-2">
                    Respondo dentro de 30 días
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 space-y-2 pb-8">
            <p>© 2025 Informática App - Todos los derechos reservados</p>
            <p>Centro de Estudiantes de Ingeniería Informática</p>
          </div>
        </main>
      </div>
    </div>
  );
}
