import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import FloatingButtons from "@/components/Layout/FloatingButtons";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLocalizedText } from "@/lib/getLocalizedText";
import PropertyCard from "@/components/Properties/PropertyCard";
import PropertyGallery from "@/components/Properties/PropertyGallery";
import { properties } from "@/data/properties";

type PageProps = {
    params: Promise<{
        locale: string;
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { id, locale } = await params;

    const property = properties.find((p) => p.id === id);

    if (!property) {
        return {
            title: "Property Not Found",
        };
    }

    const title = getLocalizedText(property.title, locale);
    const description = getLocalizedText(property.description, locale);

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: property.image,
                    width: 1200,
                    height: 800,
                    alt: title,
                },
            ],
            type: "website",
        },
    };
}

export default async function PropertyPage({
    params,
}: PageProps) {
    const { id, locale } = await params;
    const t = await getTranslations("PropertyDetail");

    const property = properties.find(
        (p) => p.id === id
    );

    if (!property) {
        notFound();
    }

    const title = getLocalizedText(property.title, locale);
    const location = getLocalizedText(property.location, locale);
    const description = getLocalizedText(property.description, locale);
    const highlights = property.highlights.map((h) => getLocalizedText(h, locale));

    const relatedProperties = properties
        .filter(
            (p) =>
                p.id !== property.id &&
                p.type === property.type
        )
        .slice(0, 3);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: property.title,
        description: property.description,
        url: `https://realestateyavatmal.com/property/${property.id}`,
        image: `https://realestateyavatmal.com${property.image}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: property.location,
            addressRegion: "Maharashtra",
            addressCountry: "IN",
        },
        offers: {
            "@type": "Offer",
            price: property.totalPrice.replace(/[^\d]/g, ""),
            priceCurrency: "INR",
            availability: property.available
                ? "https://schema.org/InStock"
                : "https://schema.org/SoldOut",
        },
    };
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#030817] pb-12 pt-26">

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl">
                    <PropertyGallery
                        images={property.gallery}
                        title={title}
                        code={property.id}
                    />

                    <div className="p-8 md:p-10">

                        {/* Badges */}

                        <div className="flex flex-wrap items-center gap-3">

                            <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">
                                ⭐ {t("featured")}
                            </span>

                            <span className="rounded-full bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
                                {t("available")}
                            </span>

                        </div>

                        {/* Title */}

                        <h1 className="mt-6 text-4xl font-black text-white md:text-5xl">
                            {title}
                        </h1>

                        <p className="mt-4 text-lg text-slate-400">
                            📍 {location}
                        </p>

                        {/* Property Specifications */}

                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                                <p className="text-sm text-slate-400">
                                    {t("propertyId")}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    {property.id}
                                </h3>

                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                                <p className="text-sm text-slate-400">
                                    {t("propertyType")}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    {property.type}
                                </h3>

                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                                <p className="text-sm text-slate-400">
                                    {t("area")}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    {property.area}
                                </h3>

                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

                                <p className="text-sm text-slate-400">
                                    {t("totalPrice")}
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
                                    {t("interestedHeading")}
                                </h2>

                                <p className="mt-4 text-slate-400">
                                    {t("interestedDescription")}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">

                                    <a
                                        href={`tel:${property.contact.phone}`}
                                        className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
                                    >
                                        📞 {t("callNow")}
                                    </a>

                                    <a
                                        href={`https://wa.me/${property.contact.whatsapp}?text=Hello, I am interested in Property ${property.id}. Please share more details.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
                                    >
                                        💬 {t("whatsapp")}
                                    </a>

                                </div>

                            </div>

                            <div className="rounded-3xl bg-amber-400 p-8">

                                <p className="text-sm font-semibold uppercase text-slate-900/70">
                                    {t("propertyPrice")}
                                </p>

                                <h2 className="mt-2 text-5xl font-black text-slate-900">
                                    {property.totalPrice}
                                </h2>

                                <p className="mt-4 text-lg font-semibold text-slate-900/80">
                                    {property.price}
                                </p>

                                <div className="mt-8 rounded-2xl bg-slate-900/10 p-5">

                                    <p className="text-sm text-slate-900/70">
                                        {t("propertyCode")}
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
                                {t("highlights")}
                            </h2>

                            <div className="grid gap-4 md:grid-cols-2">

                                {highlights.map((item) => (
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
                                {t("description")}
                            </h2>

                            <p className="leading-8 text-slate-400">
                                {description}
                            </p>

                        </section>

                        {/* Google Map */}

                        <section className="mt-16">

                            <h2 className="mb-6 text-3xl font-bold text-white">
                                {t("propertyLocation")}
                            </h2>

                            <div className="overflow-hidden rounded-3xl border border-white/10">

                                <iframe
                                    src={property.mapUrl}
                                    title={`${t("mapTitle")} ${title}`}
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
                                {t("nearbyDistances")}
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
                                        {t("similarProperties")}
                                    </h2>

                                    <p className="mt-3 text-slate-400">
                                        {t("similarPropertiesDescription")}
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

            </main >

            <Footer />

            <FloatingButtons />

        </>
    );
}