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
                onClick={onPrev}
                className="
                    absolute
                    left-4
                    md:left-8
                    top-1/2
                    -translate-y-1/2
                    z-30
                    h-12
                    w-12
                    md:h-14
                    md:w-14
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    text-white
                    text-xl
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-slate-900
                    hover:scale-110
                "
            >
                ❮
            </button>

            {/* Next */}
            <button
                onClick={onNext}
                className="
                    absolute
                    right-4
                    md:right-8
                    top-1/2
                    -translate-y-1/2
                    z-30
                    h-12
                    w-12
                    md:h-14
                    md:w-14
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    text-white
                    text-xl
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-slate-900
                    hover:scale-110
                "
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {Array.from({ length: total }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-300
                            ${current === index
                                ? "bg-amber-400 w-10"
                                : "bg-white/60 hover:bg-white"
                            }
                        `}
                    />
                ))}
            </div>
        </>
    );
}