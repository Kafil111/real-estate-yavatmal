"use client";

import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/Property/PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
    return (
        <section
            id="properties"
            className="bg-[#030817] py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        FEATURED PROPERTIES
                    </p>

                    <h2 className="text-5xl font-black text-white md:text-6xl">
                        Discover Your Next Investment
                    </h2>

                    <p className="mt-6 text-xl text-slate-400">
                        Carefully selected premium agricultural and residential
                        properties across Yavatmal.
                    </p>

                </div>

                {/* Filter Pills */}

                <div className="mb-12 flex flex-wrap justify-center gap-4">

                    <button className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
                        All
                    </button>

                    <button className="rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-white transition hover:border-amber-400 hover:text-amber-400">
                        Agricultural
                    </button>

                    <button className="rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-white transition hover:border-amber-400 hover:text-amber-400">
                        Residential
                    </button>

                    <button className="rounded-full border border-white/10 bg-slate-900 px-6 py-3 text-white transition hover:border-amber-400 hover:text-amber-400">
                        Commercial
                    </button>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {properties.map((property) => (

                        <PropertyCard
                            key={property.id}
                            property={property}
                        />

                    ))}

                </div>

                {/* View All */}

                <div className="mt-16 text-center">

                    <button className="inline-flex items-center gap-3 rounded-2xl border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-slate-900">

                        View All Properties

                        <ArrowRight size={20} />

                    </button>

                </div>

            </div>
        </section>
    );
}