"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scale, CheckCircle, ArrowRight } from "lucide-react";

export default function CtaSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("cta-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits = [
    "Respuestas en segundos, no en días",
    "Asesoría legal 24/7",
    "Sin costos ocultos",
  ];

  return (
    <section
      id="cta-section"
      className={`relative overflow-hidden transition-all duration-1000 ${
        isInView ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Ondas decorativas en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-8 opacity-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:max-w-2xl lg:mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg">
              <Scale className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Listo para transformar su experiencia jurídica?
          </h2>

          <p className="mt-4 text-lg leading-6 text-teal-100">
            Únase a las miles de empresas que confían en Adiutor para sus
            necesidades legales. Inicie su prueba hoy mismo y experimente el
            futuro del asesoramiento jurídico.
          </p>

          {/* Botones de acción principales */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div
              className="relative group w-full sm:w-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition duration-500 ${
                  isHovered ? "animate-pulse" : ""
                }`}
              ></div>
              <Button className="relative bg-white text-teal-700 hover:text-teal-200 text-lg px-8 py-6 flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-xl w-full sm:w-auto">
                <span>Comience Ahora</span>
                <ArrowRight
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Lista de beneficios */}
          <div className="mt-10">
            <ul className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ondas decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-8 opacity-30 transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
