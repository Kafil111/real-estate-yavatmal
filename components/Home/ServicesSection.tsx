"use client";

import {
    Tractor,
    Home,
    Building2,
    FileCheck,
    BadgeDollarSign,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Tractor,
        title: "Agricultural Land",
        description:
            "Premium road-touch agricultural land with clear title and excellent future appreciation.",
    },
    {
        icon: Home,
        title: "Residential Plots",
        description:
            "Residential plots in rapidly developing areas with excellent connectivity.",
    },
    {
        icon: Building2,
        title: "Commercial Properties",
        description:
            "Commercial plots and investment opportunities at strategic locations.",
    },
    {
        icon: FileCheck,
        title: "Documentation",
        description:
            "Complete assistance with registration, verification and legal documentation.",
    },
    {
        icon: BadgeDollarSign,
        title: "Investment Advisory",
        description:
            "Expert guidance to maximize your real estate investment returns.",
    },
    {
        icon: ArrowRight,
        title: "Property Resale",
        description:
            "Professional resale assistance to help you achieve the best market value.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-slate-900 py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        OUR SERVICES
                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">
                        Everything You Need
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        From finding the perfect property to completing legal documentation,
                        we guide you throughout the entire journey.
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

                                    <button className="mt-8 flex items-center gap-2 font-semibold text-amber-400 transition group-hover:gap-4">

                                        Learn More

                                        <ArrowRight size={18} />

                                    </button>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}