import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Esta función crea un archivo de muestra si no existe
async function ensureFileExists(filePath: string, fileType: string) {
  const dir = path.dirname(filePath)

  // Crear directorio si no existe
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Crear archivo de muestra si no existe
  if (!fs.existsSync(filePath)) {
    let content = ""

    if (fileType === "apk") {
      content = "Este es un archivo APK de muestra para ControlBovino"
    } else if (fileType === "exe") {
      content = "Este es un archivo EXE de muestra para ControlBovino"
    }

    fs.writeFileSync(filePath, content)
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const fileType = url.searchParams.get("type")

  if (!fileType || (fileType !== "apk" && fileType !== "exe")) {
    return new NextResponse("Tipo de archivo no válido", { status: 400 })
  }

  const fileName = fileType === "apk" ? "controlbovino.apk" : "controlbovino.exe"
  const filePath = path.join(process.cwd(), "public", "downloads", fileName)

  // Asegurar que el archivo existe
  await ensureFileExists(filePath, fileType)

  // Configurar headers para descarga
  const headers = new Headers()
  headers.set("Content-Disposition", `attachment; filename=${fileName}`)

  if (fileType === "apk") {
    headers.set("Content-Type", "application/vnd.android.package-archive")
  } else {
    headers.set("Content-Type", "application/octet-stream")
  }

  // Leer el archivo
  const fileBuffer = fs.readFileSync(filePath)

  return new NextResponse(fileBuffer, {
    headers,
  })
}
