"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const videos: Video[] = [
  {
    id: "1",
    title: "Introducción a React y Next.js",
    youtubeId: "j-QT6bUCu2A",
    author: {
      name: "Leandro Wilson Soliz Alcocer",
      title: "Ing. Informático",
      avatar: "/leo.jpg",
    },
  },
  {
    id: "2",
    title: "Arquitectura de Software Moderna",
    youtubeId: "xXs97eQVoWk",
    author: {
      name: "Jhon Corrales",
      title: "Ing. Informático",
      avatar: "/jhon.png",
    },
  },
  {
    id: "3",
    title: "Patrones de Diseño en JavaScript",
    youtubeId: "xLaSbyn2pRQ",
    author: {
      name: "Javier Nina Paco",
      title: "Ing. Informático",
      avatar: "/javi.png",
    },
  },
  {
    id: "4",
    title: "TypeScript Avanzado",
    youtubeId: "GBDFhHV8UGw",
    author: {
      name: "Leonardo Jorge Garnica Salazar",
      title: "Ing. Informático",
      avatar: "/lei.png",
    },
  },
  {
    id: "5",
    title: "TypeScript Avanzado",
    youtubeId: "elJIn75URcQ",
    author: {
      name: "José Eduardo Padilla Pérez",
      title: "Ing. Informático",
      avatar: "/edu.jpg",
    },
  },
  {
    id: "6",
    title: "TypeScript Avanzado",
    youtubeId: "6BjRnAvgTH0",
    author: {
      name: "Jose Daniel Virreira",
      title: "Ing. Informático",
      avatar: "/dani.png",
    },
  },
];

export function YoutubeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = videos.length - slidesPerView;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, slidesPerView]);

  const handleIndicatorClick = (idx: number) => {
    const maxIndex = videos.length - slidesPerView;
    setCurrentIndex(Math.min(idx, maxIndex));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleVideoClick = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const slideWidth = 100 / slidesPerView;

  return (
    <div className="w-full px-4">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 px-2 lg:px-4 z-10"
              style={{ width: `${slideWidth}%` }}
              onClick={handleVideoClick}
            >
              <Card className="overflow-hidden hover:shadow-lg bg-white/10 hover:bg-white/20 py-0 border-0 transition-all h-full">
                <div className="pt-4 px-4 border-border">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={video.author.avatar || "/placeholder.svg"}
                        alt={video.author.name}
                      />
                      <AvatarFallback>
                        {video.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-white">
                        {video.author.name}
                      </p>
                      <p className="text-xs text-white">{video.author.title}</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 pt-6">
        {Array.from({ length: videos.length - slidesPerView + 1 }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Ir al video ${idx + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
