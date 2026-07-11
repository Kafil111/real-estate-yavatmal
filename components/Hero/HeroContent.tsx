import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";

type HeroContentProps = {
    title: string;
    subtitle: string;
    description: string;
};

export default function HeroContent({
    title,
    subtitle,
    description,
}: HeroContentProps) {
    return (
        <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div className="max-w-2xl">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-amber-400 sm:text-sm">
                    {subtitle}
                </p>

                <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl md:leading-8">
                    {description}
                </p>

                {/* Buttons */}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                    <Button href="#properties">
                        Explore Properties
                    </Button>

                    <Button
                        href="https://wa.me/919657594144"
                        variant="secondary"
                    >
                        WhatsApp Us
                    </Button>

                </div>

                {/* Stats */}

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">

                    <StatCard
                        value="500+"
                        label="Properties"
                    />

                    <StatCard
                        value="100%"
                        label="Verified"
                    />

                    <StatCard
                        value="24/7"
                        label="Support"
                        className="hidden sm:block"
                    />

                </div>

            </div>

            {/* RIGHT */}

            <div className="hidden lg:flex justify-end">

                <div className="w-full max-w-sm space-y-6">

                    <GlassCard>

                        <p className="text-sm uppercase tracking-widest text-amber-400">
                            Featured Property
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                            Road Touch Farm Land
                        </h3>

                        <p className="mt-3 text-slate-300">
                            Prime investment opportunity near
                            Yavatmal with excellent road connectivity.
                        </p>

                        <div className="mt-6 flex items-center justify-between">

                            <div>

                                <p className="text-xs uppercase tracking-widest text-slate-400">
                                    Starting From
                                </p>

                                <p className="text-3xl font-black text-amber-400">
                                    ₹9L
                                </p>

                            </div>

                            <Button href="#properties">
                                View
                            </Button>

                        </div>

                    </GlassCard>

                    <div className="grid grid-cols-2 gap-4">

                        <GlassCard>

                            <p className="text-sm text-slate-300">
                                Residential
                            </p>

                            <h4 className="mt-2 text-xl font-bold text-white">
                                1200+
                            </h4>

                            <p className="text-slate-400">
                                Plots
                            </p>

                        </GlassCard>

                        <GlassCard>

                            <p className="text-sm text-slate-300">
                                Commercial
                            </p>

                            <h4 className="mt-2 text-xl font-bold text-white">
                                Prime
                            </h4>

                            <p className="text-slate-400">
                                Locations
                            </p>

                        </GlassCard>

                    </div>

                </div>

            </div>

        </div>
    );
}