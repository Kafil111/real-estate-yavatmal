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
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition duration-500 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">

            {/* IMAGE */}

            <div className="relative h-72 overflow-hidden">

                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {property.featured && (
                    <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black shadow-lg">

                        FEATURED

                    </div>
                )}

                <div className="absolute right-5 top-5 rounded-full bg-slate-900/80 px-4 py-2 text-xs text-white backdrop-blur">

                    {property.id}

                </div>

            </div>

            {/* CONTENT */}

            <div className="space-y-5 p-6">

                <h3 className="text-3xl font-bold text-white">

                    {property.title}

                </h3>

                <div className="flex items-center gap-2 text-slate-300">

                    <MapPin size={18} />

                    <span>{property.location}</span>

                </div>

                <div className="flex items-center gap-2 text-slate-300">

                    <Ruler size={18} />

                    <span>{property.area}</span>

                </div>

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-widest text-slate-400">
                            Starting From
                        </p>

                        <p className="text-3xl font-black text-amber-400">

                            {property.price}

                        </p>

                    </div>

                    <BadgeCheck
                        size={34}
                        className="text-green-400"
                    />

                </div>

                {/* BADGES */}

                <div className="flex flex-wrap gap-2">

                    {property.badges.map((badge) => (

                        <span
                            key={badge}
                            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300"
                        >

                            {badge}

                        </span>

                    ))}

                </div>

                <Link
                    href={`/property/${property.id}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-4 font-bold text-slate-900 transition hover:scale-[1.02]"
                >

                    View Property

                    <ArrowRight size={18} />

                </Link>

            </div>

        </div>
    );
}