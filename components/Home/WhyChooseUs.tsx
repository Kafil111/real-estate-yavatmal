"use client";

import { useTranslations } from "next-intl";
import {
    ShieldCheck,
    MapPinned,
    BadgeCheck,
    Headphones,
    ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
    const t = useTranslations("WhyChooseUs");

    const features = [
        {
            icon: ShieldCheck,
            title: t("feature1Title"),
            description: t("feature1Description"),
        },
        {
            icon: MapPinned,
            title: t("feature2Title"),
            description: t("feature2Description"),
        },
        {
            icon: BadgeCheck,
            title: t("feature3Title"),
            description: t("feature3Description"),
        },
        {
            icon: Headphones,
            title: t("feature4Title"),
            description: t("feature4Description"),
        },
    ];

    return (
        <section
            id="about"
            className="bg-[#030817] py-16 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                            {t("whyChooseUs")}
                        </p>

                        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                            {t("headingLine1")}
                            <span className="block text-amber-400">
                                {t("headingLine2")}
                            </span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                            {t("description")}
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-6">

                            <div>
                                <h3 className="text-5xl font-black text-amber-400">
                                    500+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    {t("propertiesSold")}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-amber-400">
                                    100%
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    {t("verifiedListings")}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-amber-400">
                                    24/7
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    {t("clientSupport")}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-5xl font-black text-amber-400">
                                    10+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    {t("yearsExperience")}
                                </p>
                            </div>

                        </div>

                        <button className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-bold text-slate-900 transition duration-300 hover:scale-105">

                            {t("learnMore")}
                            <ArrowRight size={20} />

                        </button>

                    </div>

                    {/* RIGHT */}

                    <div className="grid gap-6 sm:grid-cols-2">

                        {features.map((feature) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={feature.title}
                                    className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)]"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-slate-900 transition duration-500 group-hover:rotate-6">

                                        <Icon size={28} />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {feature.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}