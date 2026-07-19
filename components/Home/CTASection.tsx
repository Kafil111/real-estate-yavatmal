import { useTranslations } from "next-intl";

export default function CTASection() {
    const t = useTranslations("CTASection");

    return (
        <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-white">

            <div className="mx-auto max-w-5xl px-6 text-center">

                <h2 className="text-5xl font-bold">
                    {t("heading")}
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
                    {t("description")}
                </p>

                <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">


                    <a href="tel:96575 94144"
                        className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
                    >
                        📞 {t("callNow")}
                    </a>


                    <a href="https://wa.me/9196575 94144"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
                    >
                        💬 {t("whatsapp")}
                    </a>

                </div>

            </div >

        </section >
    );
}