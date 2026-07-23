"use client";

import { useTranslations } from "next-intl";
import {
    Phone,
    MapPin,
    MessageCircle,
    Clock3,
    Send,
} from "lucide-react";

export default function ContactSection() {
    const t = useTranslations("ContactSection");

    return (
        <section
            id="contact"
            className="bg-[#030817] py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        {t("contactUs")}
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                        {t("heading")}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        {t("description")}
                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="space-y-6">

                        {[
                            {
                                icon: Phone,
                                title: t("callUs"),
                                value: "+91 9657594144",
                            },
                            {
                                icon: MessageCircle,
                                title: t("whatsapp"),
                                value: "+91 9657594144",
                            },
                            {
                                icon: MapPin,
                                title: t("location"),
                                value: t("locationValue"),
                            },
                            {
                                icon: Clock3,
                                title: t("availability"),
                                value: t("availabilityValue"),
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="flex items-center gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-slate-900">

                                        <Icon size={28} />

                                    </div>

                                    <div>

                                        <p className="text-sm uppercase tracking-wider text-slate-400">
                                            {item.title}
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-white">
                                            {item.value}
                                        </h3>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* RIGHT */}

                    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

                        <h3 className="text-3xl font-bold text-white">
                            {t("sendEnquiry")}
                        </h3>

                        <p className="mt-3 text-slate-400">
                            {t("formIntro")}
                        </p>

                        <div className="mt-8 space-y-5">

                            <input
                                placeholder={t("yourName")}
                                className="w-full rounded-2xl border border-white/10 bg-slate-800 p-4 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                            />

                            <input
                                placeholder={t("mobileNumber")}
                                className="w-full rounded-2xl border border-white/10 bg-slate-800 p-4 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                            />

                            <select aria-label="Property type of interest" className="w-full rounded-2xl border border-white/10 bg-slate-800 p-4 text-white outline-none focus:border-amber-400">

                                <option>{t("agriculturalLand")}</option>
                                <option>{t("residentialPlot")}</option>
                                <option>{t("commercialProperty")}</option>

                            </select>

                            <input
                                placeholder={t("budget")}
                                className="w-full rounded-2xl border border-white/10 bg-slate-800 p-4 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                            />

                            <textarea
                                rows={5}
                                placeholder={t("requirementPlaceholder")}
                                className="w-full rounded-2xl border border-white/10 bg-slate-800 p-4 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                            />

                            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-400 py-4 font-bold text-slate-900 transition duration-300 hover:scale-[1.02]">

                                <Send size={20} />

                                {t("sendEnquiryButton")}

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}