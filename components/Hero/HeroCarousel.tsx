"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";

import { heroSlides } from "@/data/heroSlides";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        console.log("Current:", current);
    }, [current]);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        console.log("NEXT SLIDE");

        setCurrent((prev) =>
            prev === heroSlides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        console.log("PREVIOUS SLIDE");

        setCurrent((prev) =>
            prev === 0 ? heroSlides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (
        e: React.TouchEvent<HTMLDivElement>
    ) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (
        e: React.TouchEvent<HTMLDivElement>
    ) => {
        touchEndX.current = e.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX.current;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    };

    return (
        <section
            className="relative min-h-[100svh] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ${current === index
                        ? "opacity-100 scale-100"
                        : "pointer-events-none opacity-0 scale-105"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/30" />

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
                        <div className="mx-auto w-full max-w-7xl px-6 pt-24 md:pt-28 pointer-events-auto">
                            <HeroContent
                                title={slide.title}
                                subtitle={slide.subtitle}
                                description={slide.description}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <HeroNavigation
                total={heroSlides.length}
                current={current}
                onPrev={prevSlide}
                onNext={nextSlide}
                onSelect={setCurrent}
            />
        </section>
    );
}