"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const basePlans = [
  {
    name: "Free",
    monthly: "0.00",
    description: "Perfecto para individuos con dudas legales ocasionales",
    features: [
      "1 Canal",
      "IA para respuestas inteligentes",
      "Análisis preliminar",
      "Analytics en tiempo real",
    ],
    cta: "Comenzar prueba",
    highlighted: false,
  },
  {
    name: "PRO",
    monthly: "45.00",
    yearly: "450.00",
    description: "Ideal para profesionales y pequeñas empresas",
    features: [
      "3 Canales",
      "IA para respuestas inteligentes",
      "Analytics en tiempo real",
      "Gestión de turnos",
      "Recordatorios automáticos",
      "Creación de expedientes",
    ],
    cta: "Comenzar prueba",
    highlighted: true,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Precios
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes para cada necesidad jurídica
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Elija el plan perfecto para sus necesidades.
          </p>
        </div>

        {/* Toggle con estilos activos */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              !isYearly
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Mensual
          </button>
          <Switch
            id="billingToggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isYearly
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Anual
          </button>
        </div>

        {/* Cards responsive */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {basePlans.map((plan) => {
            const price =
              plan.name === "PRO"
                ? isYearly
                  ? plan.yearly
                  : plan.monthly
                : plan.monthly;

            return (
              <div
                key={plan.name}
                className={`rounded-lg shadow-lg overflow-hidden transition ${
                  plan.highlighted
                    ? "border-2 border-teal-500 transform scale-[1.02] z-10"
                    : "border border-gray-200"
                } bg-white flex flex-col`}
              >
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    ${price}
                    <span className="ml-1 text-2xl font-medium text-gray-500">
                      /{isYearly ? "año" : "mes"}
                    </span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {plan.description}
                  </p>
                </div>

                <div className="px-6 pt-6 pb-8 sm:p-10 mt-auto">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-6 w-6 text-teal-500" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      className={`w-full py-6 ${
                        plan.highlighted
                          ? "bg-teal-600 hover:bg-teal-700 text-white"
                          : "bg-white border border-teal-600 text-teal-600 hover:bg-teal-50"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
