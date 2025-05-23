"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  title: string;
  description: string;
  videoSrc: string;
}

export default function VideoSection({
  title,
  description,
  videoSrc,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error al intentar mostrar pantalla completa: ${err.message}`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Actualizar progreso del video
  const updateProgress = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Cambiar posición del video al hacer clic en la barra de progreso
  const setVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
        (e.clientX - progressBar.getBoundingClientRect().left) /
        progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  // Mostrar/ocultar controles automáticamente
  const handleMouseMove = () => {
    setShowControls(true);

    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }

    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Formatear tiempo (segundos a MM:SS)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Efecto para manejar eventos de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Efecto para limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto my-12 bg-gray-50">
      <div
        ref={videoContainerRef}
        className="relative overflow-hidden rounded-xl shadow-xl bg-black aspect-video"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          onTimeUpdate={updateProgress}
          onLoadedMetadata={() =>
            videoRef.current && setDuration(videoRef.current.duration)
          }
          onClick={togglePlay}
          playsInline
        />

        {/* Overlay para efectos */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Controles */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-in-out",
            showControls ? "translate-y-0" : "translate-y-full"
          )}
        >
          {/* Barra de progreso */}
          <div
            className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
            onClick={setVideoProgress}
          >
            <div
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 shadow-md" />
            </div>
          </div>

          {/* Botones de control */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <span className="text-sm text-white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              aria-label={
                isFullscreen
                  ? "Salir de pantalla completa"
                  : "Pantalla completa"
              }
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5" />
              ) : (
                <Maximize className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Botón central de reproducción */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-primary/80 hover:bg-primary transition-colors"
            aria-label="Reproducir video"
          >
            <Play className="w-10 h-10 text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
