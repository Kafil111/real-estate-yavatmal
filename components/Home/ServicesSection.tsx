"use client";

import { useTranslations } from "next-intl";
import {
    Tractor,
    Home,
    Building2,
    FileCheck,
    BadgeDollarSign,
    ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
    const t = useTranslations("ServicesSection");

    const services = [
        {
            icon: Tractor,
            title: t("service1Title"),
            description: t("service1Description"),
            href: "#properties",
        },
        {
            icon: Home,
            title: t("service2Title"),
            description: t("service2Description"),
            href: "#properties",
        },
        {
            icon: Building2,
            title: t("service3Title"),
            description: t("service3Description"),
            href: "#properties",
        },
        {
            icon: FileCheck,
            title: t("service4Title"),
            description: t("service4Description"),
            href: "#contact",
        },
        {
            icon: BadgeDollarSign,
            title: t("service5Title"),
            description: t("service5Description"),
            href: "#contact",
        },
        {
            icon: ArrowRight,
            title: t("service6Title"),
            description: t("service6Description"),
            href: "#contact",
        },
    ];

    return (
        <section className="bg-slate-900 py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        {t("ourServices")}
                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">
                        {t("heading")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        {t("description")}
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={service.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-8 transition duration-500 hover:-translate-y-3 hover:border-amber-400/40"
                            >

                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-transparent to-amber-400/5 opacity-0 transition group-hover:opacity-100" />

                                <div className="relative">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-slate-900">

                                        <Icon size={30} />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-400">
                                        {service.description}
                                    </p>

                                    <a href={service.href} aria-label={`Learn more about ${service.title}`} className="mt-8 flex items-center gap-2 font-semibold text-amber-400 transition group-hover:gap-4">

                                        {t("learnMore")}

                                        <ArrowRight size={18} />

                                    </a>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}