type HeroNavigationProps = {
    total: number;
    current: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
};

export default function HeroNavigation({
    total,
    current,
    onPrev,
    onNext,
    onSelect,
}: HeroNavigationProps) {
    return (
        <>
            {/* Previous */}
            <button
                type="button"
                aria-label="Previous Slide"
                onClick={onPrev}
                className="
                    hidden
                    sm:flex
                    absolute
                    left-3
                    sm:left-4
                    md:left-8
                    top-1/2
                    -translate-y-1/2
                    z-50
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    text-2xl
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white
                    hover:text-slate-900
                    active:scale-95
                "
            >
                ❮
            </button>
            {/* Next */}
            <button
                type="button"
                aria-label="Next Slide"
                onClick={onNext}
                className="
                    hidden
                    sm:flex
                    absolute
                    right-3
                    sm:right-4
                    md:right-8
                    top-1/2
                    -translate-y-1/2
                    z-50
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    text-2xl
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white
                    hover:text-slate-900
                    active:scale-95
                "
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2 sm:gap-3">
                {Array.from({ length: total }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => onSelect(index)}
                        className={`
                            h-3
                            rounded-full
                            transition-all
                            duration-300
                            ${current === index
                                ? "w-10 bg-amber-400"
                                : "w-3 bg-white/60 hover:bg-white"
                            }
                        `}
                    />
                ))}
            </div>
        </>
    );
}