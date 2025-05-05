"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bot, Send } from "lucide-react";

const aiMessages = [
  "He tenido un siniestro automovilístico en CABA, ¿cómo podrían ayudarme?",
  "Según la información proporcionada, primero debería realizar la denuncia a su seguro dentro de las 72 horas. También puede consultar nuestros servicios de representación legal.",
  "¿Qué documentación necesito para iniciar un reclamo por despido injustificado?",
  "Necesitará su contrato laboral, recibos de sueldo de los últimos 6 meses, carta de despido y cualquier comunicación relevante con su empleador.",
];

const aiProviders = [
  {
    name: "Claude AI",
    logoPath: "/img/claude-logo.webp",
    width: 80,
  },
  {
    name: "Meta AI",
    logoPath: "/img/meta-llm-logo.png",
    width: 80,
  },
  {
    name: "Google Gemini",
    logoPath: "/img/gemini-logo.svg",
    width: 96,
  },
  {
    name: "Mistral AI",
    logoPath: "/img/mistral-ai.png",
    width: 80,
  },
  {
    name: "OpenAI",
    logoPath: "/img/chatgpt-logo.png",
    width: 80,
  },
];

export default function AIFeaturesCard() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setIsTyping(true);
    let index = 0;
    const message = aiMessages[currentMessage];

    const typingInterval = setInterval(() => {
      if (index <= message.length) {
        setDisplayedText(message.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentMessage]);

  const handleNextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % aiMessages.length);
  };

  return (
    <section className="relative  overflow-hidden bg-gray-50">
      <Card className="w-full max-w-7xl mx-auto p-8 bg-gradient-to-b from-white to-gray-50">
        <CardContent className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Asistente jurídico con inteligencia artificial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mejorado con OpenAI ChatGPT, Meta Llama, Google Gemini, Anthropic
              Claude, y más.
            </p>
          </div>

          <div className="relative">
            {/* Interactive Chat Demo */}
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-primary" />
                <span className="font-medium">Adiutor</span>
              </div>

              <div className="min-h-[100px] mb-4">
                <div
                  className={`inline-block bg-primary/10 rounded-2xl px-4 py-2 text-sm transition-opacity duration-300 ${
                    isTyping ? "opacity-70" : "opacity-100"
                  }`}
                >
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-2 h-4 ml-1 bg-primary/60 animate-pulse">
                      |
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleNextMessage}
                  className=" hover:bg-primary/90 text-white rounded-full bg-gradient-to-r from-blue-600 to-teal-500 font-semibold text-sm shadow-md "
                >
                  Pruébalo
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* AI Provider Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              {aiProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="group relative w-20 h-20 cursor-pointer"
                >
                  <Image
                    src={provider.logoPath}
                    alt={provider.name}
                    width={provider.width}
                    height={80}
                    className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
