"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Laptop, Bell, Cloud, CheckCircle, Mail } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Refs para las animaciones
  const [heroRef, heroVisible] = useScrollReveal()
  const [mainSectionRef, mainSectionVisible] = useScrollReveal()
  const [featuresRef, featuresVisible] = useScrollReveal()
  const [benefitsRef, benefitsVisible] = useScrollReveal()
  const [contactRef, contactVisible] = useScrollReveal()
  const [teamRef, teamVisible] = useScrollReveal()
  const [downloadRef, downloadVisible] = useScrollReveal()
  const [requirementsRef, requirementsVisible] = useScrollReveal()

  // Evitar problemas de hidratación esperando a que el componente se monte
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Función para manejar la descarga
  const handleDownload = (type: "mobile" | "desktop") => {
    const fileName = type === "mobile" ? "controlbovino.apk" : "controlbovino.exe"
    const link = document.createElement("a")
    link.href = `/downloads/${fileName}`
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {isMounted && (
        <style jsx global>{`
          .scroll-reveal {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal:not(.visible) {
            opacity: 0;
            transform: translateY(50px);
          }
          
          .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .scroll-reveal-scale {
            opacity: 1;
            transform: scale(1);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-scale:not(.visible) {
            opacity: 0;
            transform: scale(0.95);
          }
          
          .scroll-reveal-scale.visible {
            opacity: 1;
            transform: scale(1);
          }

          .stagger-children > * {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .stagger-children:not(.visible) > * {
            opacity: 0;
            transform: translateY(30px);
          }

          .stagger-children.visible > * {
            opacity: 1;
            transform: translateY(0);
          }

          .stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; }
          .stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; }
          .stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; }
          .stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; }
          .stagger-children.visible > *:nth-child(5) { transition-delay: 0.5s; }
          .stagger-children.visible > *:nth-child(6) { transition-delay: 0.6s; }
        `}</style>
      )}

      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-full">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.postimg.cc/zD0RMBZy/logo-removebg.png"
              alt="Control Bovino"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold"></span>
          </div>
          <nav className="flex items-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-white text-black text-sm px-3 py-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Descargar app</span>
                  <span className="sm:hidden">App</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md w-[90vw] max-w-[400px] mx-auto">
                <DialogHeader>
                  <DialogTitle>Descargar aplicación</DialogTitle>
                  <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4 bg-white text-black"
                    onClick={() => handleDownload("desktop")}
                  >
                    <Laptop className="h-12 w-12 mb-2" />
                    <span>Versión Escritorio</span>
                    <span className="text-xs text-gray-500 mt-1">EXE para Windows</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      <div
        ref={heroRef as any}
        className={`relative h-[300px] md:h-[400px] w-full overflow-hidden ${isMounted ? `scroll-reveal-scale ${heroVisible ? "visible" : ""}` : ""}`}
      >
        <Image
          src="https://i.postimg.cc/KzbMX38M/Especies-forrajeras.jpg"
          alt="Ganado bovino en campo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">ControlBovino</h1>
            <p className="text-xl md:text-2xl">Tu aliado para llevar el control de tu ganado.</p>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section
          ref={mainSectionRef as any}
          className={`container mx-auto py-12 px-4 max-w-full ${isMounted ? `scroll-reveal ${mainSectionVisible ? "visible" : ""}` : ""}`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg w-full">
              <Image
                src="https://i.postimg.cc/KzbMX38M/Especies-forrajeras.jpg"
                alt="Ganado bovino"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4">Gestión sencilla para tu ganado</h2>
              <p className="text-gray-700 mb-6">
                ¿Te cuesta recordar cuándo paren tus vacas? ¿O cuándo toca desparasitar? Con ControlBovino, puedes
                registrar toda la información de tus animales y fincas desde el computador, de forma sencilla y rápida.
                ¡Ideal para el pequeño ganadero que quiere llevar su finca al siguiente nivel!
              </p>
            </div>
          </div>
        </section>

        <section
          ref={featuresRef as any}
          className={`bg-gray-50 py-12 ${isMounted ? `scroll-reveal ${featuresVisible ? "visible" : ""}` : ""}`}
        >
          <div className="container mx-auto px-4 max-w-full">
            <h2 className="text-3xl font-bold text-center mb-2">¿Qué puedes hacer con ControlBovino?</h2>
            <p className="text-center text-gray-600 mb-10">
              Todo en un solo lugar, sin papeles ni cuadernos que se pierden.
            </p>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isMounted ? `stagger-children ${featuresVisible ? "visible" : ""}` : ""}`}
            >
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Registra tus fincas</h3>
                </div>
                <p className="text-gray-700">
                  Registra tus fincas y potreros de manera organizada para tener un mejor control de tu ganado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Datos de cada vaca</h3>
                </div>
                <p className="text-gray-700">
                  Guarda datos de cada vaca: nombre, raza, fecha de nacimiento y toda la información importante.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Control de embarazos</h3>
                </div>
                <p className="text-gray-700">
                  Anota embarazos y recibe avisos cuando se acerque el parto para estar preparado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Desparasitaciones</h3>
                </div>
                <p className="text-gray-700">
                  Lleva el control de desparasitaciones y mantén a tu ganado saludable con recordatorios oportunos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Producción de leche</h3>
                </div>
                <p className="text-gray-700">
                  Registra la producción de leche diaria y lleva un control preciso de tu rendimiento.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold">Reportes simples</h3>
                </div>
                <p className="text-gray-700">
                  Ve reportes simples que te muestran cómo va tu ganado y toma mejores decisiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={benefitsRef as any}
          className={`py-16 container mx-auto px-4 max-w-full ${isMounted ? `scroll-reveal ${benefitsVisible ? "visible" : ""}` : ""}`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isMounted ? `stagger-children ${benefitsVisible ? "visible" : ""}` : ""}`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Bell className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-bold mb-3">🔔 Recibe recordatorios importantes</h3>
              <p className="text-gray-700">
                No más olvidos. ControlBovino te avisa cuándo se acerca un parto o cuándo debes desparasitar. Si varias
                vacas tienen la misma fecha, recibes un solo aviso, para que no te llenes de notificaciones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Cloud className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-3">☁️ Tus datos siempre guardados</h3>
              <p className="text-gray-700">
                Toda la información se guarda en la nube, así no se pierde si cambias de celular o se apaga tu
                computador.
              </p>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold mb-3">🤝 Acompañamos tu trabajo diario</h3>
              <p className="text-gray-700">
                ControlBovino fue creado pensando en los pequeños productores. Sabemos que el día a día en la finca es
                exigente, por eso te damos una herramienta que te ahorra tiempo y te ayuda a tomar mejores decisiones
                para el bienestar de tus animales.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={contactRef as any}
          className={`bg-gray-50 py-16 ${isMounted ? `scroll-reveal ${contactVisible ? "visible" : ""}` : ""}`}
        >
          <div className="container mx-auto px-4 text-center max-w-full">
            <h2 className="text-3xl font-bold mb-8">¿Tienes dudas?</h2>
            <div className="grid items-center justify-center gap-2 text-xl">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-6 w-6" />
                <span>Escríbenos a: </span>
              </div>
              <a
                href="mailto:proyectocontrolbovino@gmail.com"
                className="font-medium text-blue-600 hover:underline break-all px-4"
              >
                proyectocontrolbovino@gmail.com
              </a>
            </div>
            <div className="mt-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="px-6 md:px-8">
                    <Download className="h-5 w-5 mr-2" />
                    Descargar ControlBovino
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md w-[90vw] max-w-[400px] mx-auto">
                  <DialogHeader>
                    <DialogTitle>Descargar aplicación</DialogTitle>
                    <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Button
                      variant="outline"
                      className="flex flex-col items-center justify-center h-32 p-4 bg-white text-black"
                      onClick={() => handleDownload("desktop")}
                    >
                      <Laptop className="h-12 w-12 mb-2" />
                      <span>Versión Escritorio</span>
                      <span className="text-xs text-gray-500 mt-1">EXE para Windows</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <section
          ref={teamRef as any}
          className={`py-16 bg-white ${isMounted ? `scroll-reveal ${teamVisible ? "visible" : ""}` : ""}`}
        >
          <div className="container mx-auto px-4 max-w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestro Equipo de Desarrollo</h2>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isMounted ? `stagger-children ${teamVisible ? "visible" : ""}` : ""}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="https://i.postimg.cc/dVRLFVZP/usuario-1.png"
                    alt="Desarrollador 1"
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-green-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Daniel Manrique</h3>
                <p className="text-green-600 font-semibold mb-3">Desarrollador</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="https://i.postimg.cc/dVRLFVZP/usuario-1.png"
                    alt="Desarrollador 2"
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-green-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Josver Marquez</h3>
                <p className="text-green-600 font-semibold mb-3">Desarrollador</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">SENA - Ficha: 2825962</span>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Proyecto desarrollado como parte de la formación en Análisis y Desarrollo de Software
              </p>
            </div>
          </div>
        </section>

        <section
          ref={downloadRef as any}
          className={`bg-gray-50 py-16 ${isMounted ? `scroll-reveal ${downloadVisible ? "visible" : ""}` : ""}`}
        >
          <div className="container mx-auto px-4 max-w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Cómo descargar ControlBovino?</h2>
              <p className="text-gray-600 text-lg">Sigue estos sencillos pasos para empezar a usar la aplicación</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ${isMounted ? `stagger-children ${downloadVisible ? "visible" : ""}` : ""}`}
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Haz clic en "Descargar"</h3>
                  <p className="text-gray-600">
                    Presiona cualquiera de los botones de descarga en esta página para abrir el modal de descarga.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Selecciona tu versión</h3>
                  <p className="text-gray-600">Elige la versión de escritorio (EXE para Windows).</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instala y disfruta</h3>
                  <p className="text-gray-600">
                    Ejecuta el archivo descargado, sigue las instrucciones de instalación y comienza a gestionar tu
                    ganado.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda?</h3>
                  <p className="text-gray-600 mb-6">
                    Descarga nuestro manual de usuario completo con instrucciones detalladas, capturas de pantalla y
                    consejos para aprovechar al máximo ControlBovino.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-6 md:px-8"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = "/downloads/manual-usuario-controlbovino.pdf"
                        link.setAttribute("download", "Manual-Usuario-ControlBovino.pdf")
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Descargar Manual de Usuario (PDF)
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="px-6 md:px-8">
                          <Download className="h-5 w-5 mr-2" />
                          Descargar ControlBovino
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md w-[90vw] max-w-[400px] mx-auto">
                        <DialogHeader>
                          <DialogTitle>Descargar aplicación</DialogTitle>
                          <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Button
                            variant="outline"
                            className="flex flex-col items-center justify-center h-32 p-4 bg-white text-black"
                            onClick={() => handleDownload("desktop")}
                          >
                            <Laptop className="h-12 w-12 mb-2" />
                            <span>Versión Escritorio</span>
                            <span className="text-xs text-gray-500 mt-1">EXE para Windows</span>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Consejo:</strong> Te recomendamos descargar primero el manual de usuario para
                      familiarizarte con todas las funcionalidades de ControlBovino.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={requirementsRef as any}
          className={`py-16 bg-white border-t ${isMounted ? `scroll-reveal ${requirementsVisible ? "visible" : ""}` : ""}`}
        >
          <div className="container mx-auto px-4 max-w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Requerimientos del Sistema</h2>
              <p className="text-gray-600 text-lg">
                Asegúrate de que tu computador cumple con estos requisitos mínimos
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isMounted ? `stagger-children ${requirementsVisible ? "visible" : ""}` : ""}`}
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Requisitos Mínimos
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Sistema Operativo:</span>
                        <p className="text-gray-700">Windows 10</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Memoria RAM:</span>
                        <p className="text-gray-700">2 GB mínimo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Espacio en disco:</span>
                        <p className="text-gray-700">500 MB libres</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Procesador:</span>
                        <p className="text-gray-700">Intel Core i3</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Recomendado
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Sistema Operativo:</span>
                        <p className="text-gray-700">Windows 10 o superior</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Memoria RAM:</span>
                        <p className="text-gray-700">4 GB</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Espacio en disco:</span>
                        <p className="text-gray-700">2 GB libres</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">Procesador:</span>
                        <p className="text-gray-700">Intel Core i3 o superior</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Cloud className="h-5 w-5 mr-2 text-blue-500" />
                  Requisitos Adicionales
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Conexión a internet para sincronización</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Resolución mínima: 1024x768</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Microsoft .NET Framework 4.8</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Permisos de administrador para instalación</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
                  <p className="text-yellow-800 text-sm">
                    <strong>💡 Nota importante:</strong> ControlBovino se instala automáticamente con todos los
                    componentes necesarios. No necesitas instalar software adicional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://i.postimg.cc/zD0RMBZy/logo-removebg.png"
                alt="Control Bovino"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© 2024 Control Bovino.</p>
            <div className="mt-2">
              <span className="text-gray-500 hover:text-gray-700">Desarrollado por aprendices del SENA</span>
              <span className="mx-2">·</span>
              <span className="text-gray-500 hover:text-gray-700">ficha: 2825962</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
