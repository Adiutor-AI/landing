import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background shapes - adjusted for responsiveness */}
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-blue-50 rounded-bl-full opacity-50 md:w-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/2 bg-blue-50 rounded-tr-full opacity-50 md:w-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-40">
          {/* 24/7 AI Legal Assistance */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-md animate-pulse">
              <Sparkle className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1.5 sm:mr-2" />
              <span>24/7 AI Legal Assistance</span>
            </div>
          </div>

          {/* Main heading - centered with responsive font sizes */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
              <span className="block">Asesoramiento jurídico basado en </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                inteligencia artificial
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
              Adiutor utiliza IA avanzada para proporcionar orientación legal
              instantánea y precisa para particulares y empresas. Obtenga
              asesoramiento jurídico experto sin los elevados costes ni los
              largos tiempos de espera.
            </p>

            {/* Action buttons - centered with responsive sizing */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Star decoration - hidden on smaller screens, adjusted positioning */}
      <div className="hidden sm:block absolute top-32 sm:top-40 md:right-48 lg:right-64">
        <div className="text-blue-600 text-2xl sm:text-3xl">✦</div>
      </div>
    </section>
  );
}
