"use client";

import { useState } from "react";
import { Shield, Zap, Smartphone, Scale, Clock, Database } from "lucide-react";
const features2 = [
  {
    name: "Análisis Legal Experto",
    description:
      "Nuestra IA analiza miles de casos legales y precedentes para proporcionar asesoramiento preciso adaptado a tu situación.",
    icon: Scale,
  },
  {
    name: "Base de Datos Completa",
    description:
      "Accede a información de una amplia base de datos de leyes, regulaciones y precedentes de casos en múltiples jurisdicciones.",
    icon: Database,
  },
  {
    name: "Análisis Inteligente de Documentos",
    description:
      "Sube contratos y documentos legales para revisión por IA y obtén explicaciones en lenguaje sencillo de términos complejos.",
  },
  {
    name: "Perspectivas Predictivas",
    description:
      "Recibe evaluaciones basadas en probabilidades de posibles resultados legales a partir de datos históricos de casos.",
  },
];

const features = [
  {
    name: "Privacidad Protegida",
    description:
      "Tu información está encriptada y segura. Nunca compartimos tus datos con terceros.",
    icon: Shield,
    color: "bg-blue-500",
    hoverColor: "bg-blue-500",
  },
  {
    name: "Perspectivas Predictivas",
    description:
      "Recibe evaluaciones basadas en probabilidades de posibles resultados legales a partir de datos históricos de casos.",
    icon: Zap,
    color: "bg-orange-500",
    hoverColor: "bg-orange-500",
  },
  {
    name: "Diseño Responsivo",
    description:
      "Interfaces totalmente adaptables que funcionan a la perfección en cualquier tamaño de pantalla.",
    icon: Smartphone,
    color: "bg-green-500",
    hoverColor: "bg-green-500",
  },
  {
    name: "Análisis Legal Experto",
    description:
      "Nuestra IA analiza miles de casos legales y precedentes para proporcionar asesoramiento preciso adaptado a tu situación.",
    icon: Scale,
    color: "bg-purple-500",
    hoverColor: "bg-purple-500",
  },
  {
    name: "Disponibilidad 24/7",
    description:
      "Obtén orientación legal cuando la necesites, día o noche, sin programar citas ni esperar devoluciones de llamadas.",
    icon: Clock,
    color: "bg-red-500",
    hoverColor: "bg-red-500",
  },
  {
    name: "Base de datos completa",
    description:
      "Accede a información de una amplia base de datos de leyes, regulaciones y precedentes de casos en múltiples jurisdicciones.",
    icon: Database,
    color: "bg-yellow-500",
    hoverColor: "bg-yellow-500",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Características
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Todo lo que necesitás
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-400 mx-auto">
            Nuestra plataforma proporciona todas las herramientas y funciones
            esenciales para ayudarle a a alcanzar el éxito.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="relative bg-teal-50 rounded-lg p-8 transition-all duration-300 hover:bg-teal-100"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}
                  >
                    <feature.icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-gray-900 flex-grow ">
                    {feature.description}
                  </p>

                  {/* Línea de color en hover */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                      hoveredIndex === index ? "w-full" : "w-0"
                    } ${feature.hoverColor}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
