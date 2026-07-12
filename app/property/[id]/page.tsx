import { notFound } from "next/navigation";
import PropertyCard from "@/components/Properties/PropertyCard";
import PropertyGallery from "@/components/Properties/PropertyGallery";
import { properties } from "@/data/properties";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PropertyPage({
    params,
}: PageProps) {
    const { id } = await params;

    const property = properties.find(
        (p) => p.id === id
    );

    if (!property) {
        notFound();
    }

    const relatedProperties = properties
        .filter(
            (p) =>
                p.id !== property.id &&
                p.type === property.type
        )
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#030817] py-12">

            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl">

                <PropertyGallery
                    images={property.gallery}
                    title={property.title}
                />

                <div className="p-8 md:p-10">

                    {/* Badges */}

                    <div className="flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">
                            ⭐ FEATURED
                        </span>

                        <span className="rounded-full bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
                            Available
                        </span>

                    </div>

                    {/* Title */}

                    <h1 className="mt-6 text-4xl font-black text-white md:text-5xl">
                        {property.title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-400">
                        📍 {property.location}
                    </p>

                    {/* Property Specifications */}

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                            <p className="text-sm text-slate-400">
                                Property ID
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-white">
                                {property.id}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                            <p className="text-sm text-slate-400">
                                Property Type
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-white">
                                {property.type}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                            <p className="text-sm text-slate-400">
                                Area
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-white">
                                {property.area}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                            <p className="text-sm text-slate-400">
                                Total Price
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-amber-400">
                                {property.totalPrice}
                            </h3>

                        </div>

                    </div>

                    {/* Contact + Price */}

                    <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">

                        <div className="rounded-3xl border border-white/10 bg-slate-800 p-8">

                            <h2 className="text-3xl font-bold text-white">
                                Interested in this property?
                            </h2>

                            <p className="mt-4 text-slate-400">
                                Schedule your site visit today.
                                We will provide complete property
                                documents, legal verification and
                                assist you throughout the buying
                                process.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <a
                                    href={`tel:${property.contact.phone}`}
                                    className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
                                >
                                    📞 Call Now
                                </a>

                                <a
                                    href={`https://wa.me/${property.contact.whatsapp}?text=Hello, I am interested in Property ${property.id}. Please share more details.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
                                >
                                    💬 WhatsApp
                                </a>

                            </div>

                        </div>

                        <div className="rounded-3xl bg-amber-400 p-8">

                            <p className="text-sm font-semibold uppercase text-slate-900/70">
                                Property Price
                            </p>

                            <h2 className="mt-2 text-5xl font-black text-slate-900">
                                {property.totalPrice}
                            </h2>

                            <p className="mt-4 text-lg font-semibold text-slate-900/80">
                                {property.price}
                            </p>

                            <div className="mt-8 rounded-2xl bg-slate-900/10 p-5">

                                <p className="text-sm text-slate-900/70">
                                    Property Code
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {property.id}
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* Highlights */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Property Highlights
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">

                            {property.highlights.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-white/10 bg-slate-800 p-5 text-slate-200"
                                >
                                    <span className="text-amber-400">✅</span> {item}
                                </div>
                            ))}

                        </div>

                    </section>

                    {/* Description */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Description
                        </h2>

                        <p className="leading-8 text-slate-400">
                            {property.description}
                        </p>

                    </section>

                    {/* Google Map */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Property Location
                        </h2>

                        <div className="overflow-hidden rounded-3xl border border-white/10">

                            <iframe
                                src={property.mapUrl}
                                width="100%"
                                height="450"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />

                        </div>

                    </section>

                    {/* Nearby Distances */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Nearby Distances
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">

                            {Object.entries(property.distances).map(
                                ([place, distance]) => (

                                    <div
                                        key={place}
                                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800 p-5"
                                    >

                                        <span className="font-medium text-slate-200">
                                            {place}
                                        </span>

                                        <span className="font-bold text-amber-400">
                                            {distance}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>

                    </section>

                    {/* Related Properties */}

                    {relatedProperties.length > 0 && (

                        <section className="mt-20">

                            <div className="mb-10">

                                <h2 className="text-4xl font-black text-white">
                                    Similar Properties
                                </h2>

                                <p className="mt-3 text-slate-400">
                                    You may also be interested in these
                                    properties.
                                </p>

                            </div>

                            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                                {relatedProperties.map((item) => (

                                    <PropertyCard
                                        key={item.id}
                                        property={item}
                                    />

                                ))}

                            </div>

                        </section>

                    )}

                </div>

            </div >

        </main >

    );

}