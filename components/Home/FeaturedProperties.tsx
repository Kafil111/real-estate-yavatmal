"use client";

import { useTranslations } from "next-intl";

import { ArrowRight } from "lucide-react";

import PropertyCard from "@/components/Properties/PropertyCard";

import { properties } from "@/data/properties";

import {
    SearchFilters,
    usePropertyFilters,
} from "../../hooks/usePropertyFilters";

type Props = {
    filters: SearchFilters;
};

export default function FeaturedProperties({
    filters,
}: Props) {
    const t = useTranslations("FeaturedProperties");
    const filteredProperties = usePropertyFilters(
        properties,
        filters
    );

    return (
        <section
            id="properties"
            className="bg-[#030817] py-16 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        {t("featuredProperties")}
                    </p>

                    <h2 className="text-5xl font-black text-white md:text-6xl">
                        {t("discoverNextInvestment")}
                    </h2>

                    <p className="mt-6 text-xl text-slate-400">
                        {t("description")}
                    </p>

                </div>

                <div className="mb-10 flex justify-center">

                    <p className="rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-black">

                        {filteredProperties.length} {t("propertiesFound")}

                    </p>

                </div>

                {filteredProperties.length === 0 ? (
                    <div className="rounded-3xl border border-white/10 bg-slate-900 p-20 text-center">

                        <h3 className="text-3xl font-bold text-white">
                            {t("noPropertiesFound")}
                        </h3>

                        <p className="mt-4 text-slate-400">
                            {t("tryChangingFilters")}
                        </p>

                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {filteredProperties.map((property) => (

                            <PropertyCard
                                key={property.id}
                                property={property}
                            />

                        ))}

                    </div>
                )}

                <div className="mt-16 text-center">

                    <button className="inline-flex items-center gap-3 rounded-2xl border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-slate-900">

                        {t("viewAllProperties")}

                        <ArrowRight size={20} />

                    </button>

                </div>

            </div>
        </section>
    );
}