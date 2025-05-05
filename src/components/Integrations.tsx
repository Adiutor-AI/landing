"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function IntegrationsSection() {
  const integrations = [
    {
      name: "Messenger",
      description:
        "Conecta tu cuenta para enviar mensajes y gestionar conversaciones con clientes directamente.",
      icon: "/img/messenger.webp",
    },
    {
      name: "Slack",
      description:
        "Integra notificaciones y comandos para colaborar con tu equipo sin cambiar de plataforma.",
      icon: "/img/slack.webp",
    },
    {
      name: "WhatsApp",
      description:
        "Gestiona conversaciones, envía actualizaciones automáticas y atiende consultas de clientes.",
      icon: "/img/whatsapp.webp",
    },
    {
      name: "Telegram",
      description:
        "Implementa bots personalizados y gestiona comunicaciones grupales e individuales.",
      icon: "/img/telegram.webp",
    },
    {
      name: "Instagram",
      description:
        "Administra mensajes directos y comentarios desde una interfaz centralizada y eficiente.",
      icon: "/img/instagram.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const cardsPerSlide = { base: 1, sm: 3 }; // 1 card on mobile, 3 on sm and up
  const totalSlides = {
    base: integrations.length, // 1 card per slide on mobile
    sm: Math.ceil(integrations.length / cardsPerSlide.sm), // 3 cards per slide on desktop
  };

  useEffect(() => {
    // Auto-play functionality
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex =
        window.innerWidth < 640 ? totalSlides.base - 1 : totalSlides.sm - 1;
      return prevIndex < maxIndex ? prevIndex + 1 : 0;
    });
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Calculate the translate percentage based on screen size
  const getTranslateX = () => {
    const isMobile = window.innerWidth < 640;
    const slideWidth = isMobile ? 100 : 100 / cardsPerSlide.sm;
    return currentIndex * slideWidth;
  };

  return (
    <section id="integrations" className="py-12 sm:py-16 bg-gray-50 relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-sm sm:text-base font-semibold text-teal-600 tracking-wide uppercase">
            Integraciones
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Integra tus canales favoritos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Mejore su flujo de trabajo conectando las herramientas que utiliza a
            diario. Nuestras integraciones fluidas te ayudan a automatizar
            tareas y a mantener todo sincronizado.
          </p>
        </div>

        {/* Carousel container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Carousel content */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${getTranslateX()}%)`,
            }}
          >
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[33.333%] px-2 sm:px-3 mb-4 sm:mb-0"
              >
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm flex items-start space-x-3 sm:space-x-4 hover:shadow-md transition-shadow h-full">
                  <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    width={36}
                    height={36}
                    className="w-9 h-9 sm:w-10 sm:h-10"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
          {Array.from({
            length: window.innerWidth < 640 ? totalSlides.base : totalSlides.sm,
          }).map((_, index) => (
            <button
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all focus:outline-none ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-teal-600"
                  : "w-1.5 sm:w-2 bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
