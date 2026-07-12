"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";

import { heroSlides } from "@/data/heroSlides";

import HeroContent from "./HeroContent";
import HeroNavigation from "./HeroNavigation";

const AUTOPLAY_DELAY = 6000;
const SWIPE_THRESHOLD = 50;

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const isTransitioningRef = useRef(false);
    const [isClientReady, setIsClientReady] = useState(false);
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        setIsClientReady(true);
    }, []);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        const total = heroSlides.length;
        setCurrent(((index % total) + total) % total);
    }, []);

    const nextSlide = useCallback(() => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        setCurrent((index) => (index + 1) % heroSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        setCurrent((index) =>
            index === 0 ? heroSlides.length - 1 : index - 1
        );
    }, []);

    useEffect(() => {
        if (isPaused || heroSlides.length < 2) {
            return;
        }

        const interval = window.setInterval(nextSlide, AUTOPLAY_DELAY);

        return () => window.clearInterval(interval);
    }, [isPaused, nextSlide]);

    function handleTouchStart(event: TouchEvent<HTMLElement>) {
        touchStartX.current = event.touches[0]?.clientX ?? null;
    }

    function handleTouchEnd(event: TouchEvent<HTMLElement>) {
        const startX = touchStartX.current;
        const endX = event.changedTouches[0]?.clientX;

        touchStartX.current = null;

        if (startX === null || endX === undefined) {
            return;
        }

        const distance = startX - endX;

        if (Math.abs(distance) < SWIPE_THRESHOLD) {
            return;
        }

        if (distance > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            prevSlide();
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            nextSlide();
        }
    }

    return (
        <section
            aria-roledescription="carousel"
            id="home"
            aria-label="Featured property categories"
            className="relative h-[100svh] min-h-[38rem] overflow-hidden touch-pan-y outline-none"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={(event) => {
                setIsPaused(true);
                handleTouchStart(event);
            }}
            onTouchEnd={(event) => {
                handleTouchEnd(event);
                setIsPaused(false);
            }}
            onTouchCancel={() => {
                touchStartX.current = null;
                setIsPaused(false);
            }}
            tabIndex={0}
        >
            <div
                className="flex h-full will-change-transform transition-transform duration-700 ease-out motion-reduce:transition-none"
                style={{
                    width: `${heroSlides.length * 100}%`,
                    transform: `translate3d(-${(current * 100) / heroSlides.length}%, 0, 0)`,
                }}
                onTransitionEnd={() => { isTransitioningRef.current = false; }}
            >
                {heroSlides.map((slide, index) => (
                    <article
                        key={slide.id}
                        aria-hidden={current !== index}
                        className="relative h-full flex-none overflow-hidden"
                        style={{ width: `${100 / heroSlides.length}%` }}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="pointer-events-none object-cover select-none"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/30" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="relative z-10 flex h-full items-start">
                            <div className="mx-auto w-full max-w-7xl px-6 pt-32">
                                <HeroContent
                                    title={slide.title}
                                    subtitle={slide.subtitle}
                                    description={slide.description}
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <HeroNavigation
                total={heroSlides.length}
                current={current}
                onPrev={prevSlide}
                onNext={nextSlide}
                onSelect={goToSlide}
            />

            <p className="sr-only" aria-live="polite">
                Slide {current + 1} of {heroSlides.length}: {heroSlides[current]?.title}
            </p>
        </section>
    );
}
