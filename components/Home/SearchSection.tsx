"use client";

import { useState } from "react";

import {
    Search,
    MapPin,
    Building2,
    IndianRupee,
    Ruler,
} from "lucide-react";

import { SearchFilters } from "@/hooks/usePropertyFilters";

type Props = {
    onSearch: (filters: SearchFilters) => void;
};

export default function SearchSection({ onSearch }: Props) {
    const [filters, setFilters] = useState<SearchFilters>({
        location: "",
        type: "",
        budget: "",
        area: "",
    });

    function updateField(
        key: keyof SearchFilters,
        value: string
    ) {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    return (
        <section className="relative z-30 px-6 pt-12 pb-20">
            <div className="mx-auto max-w-7xl">

                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">

                    <div className="mb-8">

                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
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
                                value={filters.location}
                                onChange={(e) =>
                                    updateField("location", e.target.value)
                                }
                                placeholder="Yavatmal"
                                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                            />

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <Building2 size={16} />

                                Property Type

                            </label>

                            <select
                                value={filters.type}
                                onChange={(e) =>
                                    updateField("type", e.target.value)
                                }
                                className="w-full bg-transparent text-white outline-none"
                            >

                                <option value="" className="bg-slate-900">
                                    All
                                </option>

                                <option
                                    value="Agricultural Land"
                                    className="bg-slate-900"
                                >
                                    Agricultural
                                </option>

                                <option
                                    value="Residential"
                                    className="bg-slate-900"
                                >
                                    Residential
                                </option>

                                <option
                                    value="Commercial"
                                    className="bg-slate-900"
                                >
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
                                value={filters.budget}
                                onChange={(e) =>
                                    updateField("budget", e.target.value)
                                }
                                placeholder="₹45 Lakh"
                                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                            />

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-4">

                            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">

                                <Ruler size={16} />

                                Area

                            </label>

                            <input
                                value={filters.area}
                                onChange={(e) =>
                                    updateField("area", e.target.value)
                                }
                                placeholder="5 Acre"
                                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                            />

                        </div>

                        <button
                            onClick={() => onSearch(filters)}
                            className="flex items-center justify-center gap-3 rounded-2xl bg-amber-400 font-bold text-slate-900 transition hover:scale-105"
                        >

                            <Search size={20} />

                            Search

                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}