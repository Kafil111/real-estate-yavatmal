"use client";

import { useTranslations } from "next-intl";
import { Home, Users, MapPinned, Award } from "lucide-react";

export default function StatsSection() {
    const t = useTranslations("StatsSection");

    const stats = [
        {
            icon: Home,
            value: "500+",
            label: t("verifiedProperties"),
        },
        {
            icon: Users,
            value: "350+",
            label: t("happyClients"),
        },
        {
            icon: MapPinned,
            value: "25+",
            label: t("primeLocations"),
        },
        {
            icon: Award,
            value: "8+",
            label: t("yearsOfTrust"),
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        {t("ourAchievements")}
                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">
                        {t("heading")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        {t("description")}
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        return (

                            <div
                                key={stat.label}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-amber-400/40 hover:bg-white/10"
                            >

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-slate-900 transition duration-500 group-hover:scale-110">

                                    <Icon size={36} />

                                </div>

                                <h3 className="mt-8 text-5xl font-black text-white">

                                    {stat.value}

                                </h3>

                                <p className="mt-4 text-lg text-slate-300">

                                    {stat.label}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}