"use client"

import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(to bottom, #240453, #000000)" }}>
      {/* Countdown Timer */}
      <div className="bg-black py-4 sticky top-0 z-10 border-b-2" style={{ borderColor: "#3a0a80" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-lg px-6 py-3 mb-3 shadow-lg">
            <div className="text-3xl font-bold text-black">
              {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
            </div>
          </div>
          <p className="text-red-500 font-bold text-xl md:text-2xl animate-pulse">
            Corra! Oferta por tempo limitado - Apenas {minutes} minutos restantes para aproveitar esta oferta!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-4 pb-12 md:pt-6 md:pb-20 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <div className="mb-4 flex justify-center">
            <Image
              src="https://softcloseroficial.com/wp-content/uploads/2025/03/logo-hiperagentes-branca.png"
              alt="HiperAgentes Logo"
              width={240}
              height={120}
              className="object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Descubra como criar e conectar <span className="text-purple-300">Inteligências Artificiais</span> no
            WhatsApp das Empresas
          </h1>

          <p className="text-lg md:text-xl text-purple-200 mb-8">
            Faça seus primeiros R$50.000,00 com sua própria agência de IA na palma da sua mão.
          </p>

          <div className="rounded-lg p-4 mb-8 inline-block" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
            <p className="text-black font-bold">Sem saber programação e sem experiência prévia!</p>
          </div>

          <Button className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            SIM, QUERO PARTICIPAR! <ChevronRight size={20} />
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 mb-4 text-purple-300 font-medium">
            <CheckCircle size={20} />
            <p>100% Online e Gratuito</p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-2 text-purple-200">
            <Calendar size={18} />
            <p>Começa hoje às 10:00</p>
          </div>

          <p className="text-purple-200 mt-4">
            Toque no botão acima para receber seu link de participação no Whatsapp!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="container mx-auto px-4 py-12 bg-black bg-opacity-40 backdrop-blur-sm rounded-xl shadow-sm max-w-4xl border"
        style={{ borderColor: "#240453" }}
      >
        {/* Mentor Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Conheça seu mentor</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div
              className="w-48 h-48 rounded-full overflow-hidden relative flex-shrink-0 mx-auto md:mx-0 border-2"
              style={{ backgroundColor: "#240453", borderColor: "#3a0a80" }}
            >
              <Image
                src="https://softcloseroficial.com/wp-content/uploads/2025/02/Screenshot_5-e1738681129464.png"
                alt="André Miranda"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">André Miranda</h3>
              <p className="text-purple-200 mb-4">
                É um especialista em tecnologia e inovação com mais de 10 anos de experiência.
              </p>
              <p className="text-purple-200 mb-4">
                Com uma trajetória que inclui a liderança de equipes de alta performance em empresas de renome, ele se
                destaca pela capacidade de transformar conceitos técnicos complexos em soluções práticas e acessíveis.
              </p>
              <p className="text-purple-200">
                Ajudou milhares de pessoas a alavancarem seus negócios através do uso estratégico das ferramentas de
                Inteligência Artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Button
          className="text-white px-8 py-6 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          style={{ backgroundColor: "#3a0a80", ":hover": { backgroundColor: "#4c0ca6" } }}
        >
          SIM, QUERO PARTICIPAR! <ChevronRight size={20} />
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-purple-300 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <Image
              src="https://softcloseroficial.com/wp-content/uploads/2024/10/cropped-LOGO-SOFT-CLOSERS-2.png"
              alt="HiperAgentes Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
            <p className="text-sm">Copyright © 2025</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

