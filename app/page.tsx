import ClientPage from "./ClientPage"

// Función para generar parámetros estáticos
export async function generateStaticParams() {
  return [{}]
}

export default function Home() {
  return <ClientPage />
}
