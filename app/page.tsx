"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Smartphone, Laptop, Bell, Cloud, CheckCircle, Mail } from "lucide-react"

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
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="https://i.postimg.cc/zD0RMBZy/logo-removebg.png" alt="Control Bovino" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold"></span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contacto
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Acerca de nosotros
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contáctanos
            </Link>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Descargar app
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Descargar aplicación</DialogTitle>
                  <DialogDescription>Seleccione la versión que desea descargar</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4"
                    onClick={() => handleDownload("mobile")}
                  >
                    <Smartphone className="h-12 w-12 mb-2" />
                    <span>Versión Móvil</span>
                    <span className="text-xs text-gray-500 mt-1">APK para Android</span>
                  </Button>
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
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
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <Button
                      variant="outline"
                      className="flex flex-col items-center justify-center h-32 p-4"
                      onClick={() => handleDownload("mobile")}
                    >
                      <Smartphone className="h-12 w-12 mb-2" />
                      <span>Versión Móvil</span>
                      <span className="text-xs text-gray-500 mt-1">Proximamente...</span>
                    </Button>
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
              <span className="text-xl font-bold"></span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contacto
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Acerca de nosotros
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contáctanos
              </Link>
            </nav>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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
