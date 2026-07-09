import { notFound } from "next/navigation";
import Image from "next/image";
import PropertyGallery from "@/components/Property/PropertyGallery";
import { properties } from "@/data/properties";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PropertyPage({ params }: PageProps) {
    const { id } = await params;

    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-100 py-12">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">
                {/* Property Image */}
                <PropertyGallery
                    images={property.gallery}
                    title={property.title}
                />

                {/* Property Content */}
                <div className="p-10">
                    {/* Status Badges */}
                    <div className="flex items-center gap-4">
                        <span className="rounded-full bg-yellow-400 px-4 py-2 font-bold">
                            ⭐ FEATURED
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                            Available
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="mt-6 text-5xl font-bold">
                        {property.title}
                    </h1>

                    {/* Location */}
                    <p className="mt-4 text-xl text-slate-600">
                        📍 {property.location}
                    </p>

                    {/* Property Information */}
                    <div className="mt-8 flex flex-wrap gap-10">
                        <div>
                            <p className="text-slate-500">Area</p>
                            <p className="text-2xl font-bold">
                                {property.area}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Price</p>
                            <p className="text-2xl font-bold text-green-700">
                                {property.price}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Total Price</p>
                            <p className="text-2xl font-bold">
                                {property.totalPrice}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="tel:9657594144"
                            className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
                        >
                            📞 Call Now
                        </a>

                        <a
                            href={`https://wa.me/919657594144?text=Hello, I am interested in Property ${property.id}. Please share more details.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
                        >
                            💬 WhatsApp
                        </a>
                    </div>

                    {/* Highlights */}
                    <section className="mt-14">
                        <h2 className="mb-6 text-3xl font-bold">
                            Property Highlights
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {property.highlights.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl bg-slate-100 p-4"
                                >
                                    ✅ {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Description */}
                    <section className="mt-14">
                        <h2 className="mb-6 text-3xl font-bold">
                            Description
                        </h2>

                        <p className="leading-8 text-slate-700">
                            {property.description}
                        </p>
                    </section>

                    {/* Nearby Distances */}
                    <section className="mt-14">
                        <h2 className="mb-6 text-3xl font-bold">
                            Nearby Distances
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {Object.entries(property.distances).map(
                                ([place, distance]) => (
                                    <div
                                        key={place}
                                        className="flex justify-between rounded-xl bg-slate-100 p-4"
                                    >
                                        <span>{place}</span>
                                        <strong>{distance}</strong>
                                    </div>
                                )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}