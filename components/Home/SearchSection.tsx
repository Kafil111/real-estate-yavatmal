"use client";

import {
    Search,
    MapPin,
    Building2,
    IndianRupee,
    Ruler,
} from "lucide-react";

export default function SearchSection() {
    return (
        <section className="relative z-30 px-6 pt-8 pb-12">

            <div className="mx-auto max-w-7xl">

                <div className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl p-8">

                    <div className="mb-8">

                        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 font-bold">
                            PROPERTY SEARCH
                        </p>

                        <h2 className="mt-3 text-4xl font-black text-white">
                            Find Your Perfect Property
                        </h2>

                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <MapPin size={16} />

                                Location

                            </label>

                            <input
                                placeholder="Yavatmal"
                                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                            />

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <Building2 size={16} />

                                Property Type

                            </label>

                            <select className="w-full bg-transparent text-white outline-none">

                                <option className="bg-slate-900">
                                    Agricultural
                                </option>

                                <option className="bg-slate-900">
                                    Residential
                                </option>

                                <option className="bg-slate-900">
                                    Commercial
                                </option>

                            </select>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <IndianRupee size={16} />

                                Budget

                            </label>

                            <input
                                placeholder="₹10 Lakh"
                                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                            />

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <Ruler size={16} />

                                Area

                            </label>

                            <input
                                placeholder="5 Acre"
                                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                            />

                        </div>

                        <button className="flex items-center justify-center gap-3 rounded-2xl bg-amber-400 font-bold text-slate-900 transition hover:scale-105">

                            <Search size={20} />

                            Search

                        </button>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">

                        {[
                            "Agricultural",
                            "Residential",
                            "Commercial",
                            "Road Touch",
                            "Low Budget",
                        ].map((item) => (

                            <button
                                key={item}
                                className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}