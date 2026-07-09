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
        <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="max-w-2xl">

                <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                    {subtitle}
                </p>

                <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                    {title}
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
                    {description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

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

                <div className="mt-12 grid grid-cols-3 gap-4">

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
                    />

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="hidden lg:flex justify-end">

                <div className="space-y-6 w-full max-w-sm">

                    <GlassCard>

                        <p className="text-sm uppercase tracking-widest text-amber-400">
                            Featured Property
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                            Road Touch Farm Land
                        </h3>

                        <p className="mt-3 text-slate-300">
                            Prime investment opportunity near Yavatmal with excellent road connectivity.
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