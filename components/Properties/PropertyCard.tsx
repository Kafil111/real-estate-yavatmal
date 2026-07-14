import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Ruler,
    ArrowRight,
    BadgeCheck,
} from "lucide-react";

import { Property } from "@/types/property";

type PropertyCardProps = {
    property: Property;
};

export default function PropertyCard({
    property,
}: PropertyCardProps) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-2xl">

            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {property.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black shadow">
                        FEATURED
                    </span>
                )}

                <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {property.id}
                </span>

            </div>

            {/* Content */}

            <div className="space-y-5 p-5 md:p-6">

                <div>

                    <h3 className="line-clamp-2 text-2xl font-bold text-white md:text-3xl">
                        {property.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">

                        <MapPin size={16} />

                        <span>{property.location}</span>

                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">

                        <Ruler size={16} />

                        <span>{property.area}</span>

                    </div>

                </div>

                {/* Price */}

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-xs uppercase tracking-widest text-slate-400">
                            Starting From
                        </p>

                        <h4 className="text-2xl font-black text-amber-400 md:text-3xl">
                            {property.price}
                        </h4>

                    </div>

                    <BadgeCheck
                        size={30}
                        className="text-green-400"
                    />

                </div>

                {/* Badges */}

                <div className="flex flex-wrap gap-2">

                    {property.badges.map((badge) => (
                        <span
                            key={badge}
                            className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-300"
                        >
                            {badge}
                        </span>
                    ))}

                </div>

                {/* Button */}

                <Link
                    href={`/property/${property.id}`}
                    aria-label={`View details for ${property.title}`}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3 font-bold text-slate-900 transition hover:bg-amber-300 active:scale-95"
                >
                    View Property

                    <ArrowRight size={18} />
                </Link>

            </div>

        </article>
    );
}