import { notFound } from "next/navigation";
import PropertyCard from "@/components/Property/PropertyCard";
import PropertyGallery from "@/components/Property/PropertyGallery";
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
        <main className="min-h-screen bg-slate-100 py-12">

            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">

                <PropertyGallery
                    images={property.gallery}
                    title={property.title}
                />

                <div className="p-8 md:p-10">

                    {/* Badges */}

                    <div className="flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold">
                            ⭐ FEATURED
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            Available
                        </span>

                    </div>

                    {/* Title */}

                    <h1 className="mt-6 text-4xl font-black md:text-5xl">
                        {property.title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-600">
                        📍 {property.location}
                    </p>

                    {/* Property Specifications */}

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-2xl border border-slate-200 p-6">

                            <p className="text-sm text-slate-500">
                                Property ID
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {property.id}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">

                            <p className="text-sm text-slate-500">
                                Property Type
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {property.type}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">

                            <p className="text-sm text-slate-500">
                                Area
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {property.area}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">

                            <p className="text-sm text-slate-500">
                                Total Price
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-green-700">
                                {property.totalPrice}
                            </h3>

                        </div>

                    </div>

                    {/* Contact + Price */}

                    <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">

                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

                            <h2 className="text-3xl font-bold">
                                Interested in this property?
                            </h2>

                            <p className="mt-4 text-slate-600">
                                Schedule your site visit today.
                                We will provide complete property
                                documents, legal verification and
                                assist you throughout the buying
                                process.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <a
                                    href={`tel:${property.contact.phone}`}
                                    className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
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

                            <p className="text-sm uppercase font-semibold">
                                Property Price
                            </p>

                            <h2 className="mt-2 text-5xl font-black">
                                {property.totalPrice}
                            </h2>

                            <p className="mt-4 text-lg font-semibold">
                                {property.price}
                            </p>

                            <div className="mt-8 rounded-2xl bg-white/70 p-5">

                                <p className="text-sm">
                                    Property Code
                                </p>

                                <h3 className="text-2xl font-bold">
                                    {property.id}
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* Highlights */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold">
                            Property Highlights
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">

                            {property.highlights.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl bg-slate-100 p-5"
                                >
                                    ✅ {item}
                                </div>
                            ))}

                        </div>

                    </section>

                    {/* Description */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold">
                            Description
                        </h2>

                        <p className="leading-8 text-slate-700">
                            {property.description}
                        </p>

                    </section>
                    {/* Google Map */}

                    <section className="mt-16">

                        <h2 className="mb-6 text-3xl font-bold">
                            Property Location
                        </h2>

                        <div className="overflow-hidden rounded-3xl border border-slate-200">

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

                        <h2 className="mb-6 text-3xl font-bold">
                            Nearby Distances
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">

                            {Object.entries(property.distances).map(
                                ([place, distance]) => (

                                    <div
                                        key={place}
                                        className="flex items-center justify-between rounded-2xl bg-slate-100 p-5"
                                    >

                                        <span className="font-medium">
                                            {place}
                                        </span>

                                        <span className="font-bold text-green-700">
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

                                <h2 className="text-4xl font-black">
                                    Similar Properties
                                </h2>

                                <p className="mt-3 text-slate-600">
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

            </div>

        </main>

    );

}