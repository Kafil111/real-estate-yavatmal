"use client";

import { useEffect, useState } from "react";

import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";

import { heroSlides } from "@/data/heroSlides";

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === heroSlides.length - 1 ? 0 : prev + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === heroSlides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? heroSlides.length - 1 : prev - 1
        );
    };

    return (
        <section className="relative h-screen overflow-hidden">

            {/* Background Slides */}

            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className={`h-full w-full object-cover transition-transform duration-[7000ms] ${current === index ? "scale-110" : "scale-100"
                            }`}
                    />

                    {/* Premium Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/30" />

                    {/* Soft Bottom Fade */}

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
            ))}

            {/* Hero Content */}

            <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 pt-24 md:pt-28">

                <HeroContent
                    title={heroSlides[current].title}
                    subtitle={heroSlides[current].subtitle}
                    description={heroSlides[current].description}
                />

            </div>

            {/* Navigation */}

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