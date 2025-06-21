"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Laptop, Bell, Cloud, CheckCircle, Mail } from "lucide-react"

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

  // Evitar problemas de hidratación esperando a que el componente se monte
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // No renderizar nada en el servidor
  if (!isMounted) {
    return null
  }

  // Función para manejar la descarga
  const handleDownload = (type: "mobile" | "desktop") => {
    const fileName = type === "mobile" ? "controlbovino.apk" : "controlbovino.exe"
    const link = document.createElement("a")
    link.href = `/downloads/${fileName}`
    link.setAttribute("download", fileName) // Esto fuerza la descarga en lugar de navegar
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-center- px-4">
          <div className="flex items-center gap-2">
            <Image src="https://i.postimg.cc/zD0RMBZy/logo-removebg.png" alt="Control Bovino" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold"></span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Descargar app
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md items-center">
                <DialogHeader>
                  <DialogTitle>Descargar aplicación</DialogTitle>
                  <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4"
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
          <div className="flex items-center">
          </div>
        </div>
      </header>
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image src="https://i.postimg.cc/KzbMX38M/Especies-forrajeras.jpg" alt="Ganado bovino en campo" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">ControlBovino</h1>
            <p className="text-xl md:text-2xl">
              Tu aliado para llevar el control de tu ganado.
            </p>
          </div>
        </div>
      </div>
      <main className="flex-1">
        <section className="container mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="https://i.postimg.cc/KzbMX38M/Especies-forrajeras.jpg" alt="Ganado bovino" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Gestión sencilla para tu ganado</h2>
              <p className="text-gray-700 mb-6">
                ¿Te cuesta recordar cuándo paren tus vacas? ¿O cuándo toca desparasitar? Con ControlBovino, puedes
                registrar toda la información de tus animales y fincas desde el celular o el computador, de forma
                sencilla y rápida. ¡Ideal para el pequeño ganadero que quiere llevar su finca al siguiente nivel!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">¿Qué puedes hacer con ControlBovino?</h2>
            <p className="text-center text-gray-600 mb-10">
              Todo en un solo lugar, sin papeles ni cuadernos que se pierden.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
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
                  Registra la producción de leche diaria o semanal y lleva un control preciso de tu rendimiento.
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

        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">¿Tienes dudas?</h2>
            <div className="flex items-center justify-center gap-2 text-xl">
              <Mail className="h-6 w-6" />
              <span>Escríbenos a: </span>
              <a href="mailto:controlbovino@ejemplo.com" className="font-medium text-blue-600 hover:underline">
                proyectocontrolbovino@gmail.com
              </a>
            </div>
            <div className="mt-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="px-8">
                    <Download className="h-5 w-5 mr-2" />
                    Descargar ControlBovino
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Descargar aplicación</DialogTitle>
                    <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Button
                      variant="outline"
                      className="flex flex-col items-center justify-center h-32 p-4"
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
      </main>
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="https://i.postimg.cc/zD0RMBZy/logo-removebg.png" alt="Control Bovino" width={40} height={40} className="h-10 w-auto" />
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>Copyright © 2024 Control Bovino. Todos los derechos reservados.</p>
            <div className="mt-2">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Términos y Condiciones
              </Link>
              <span className="mx-2">·</span>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
