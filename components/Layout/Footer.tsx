"use client";

import { useTranslations } from "next-intl";
import {
    Phone,
    MapPin,
    MessageCircle,
    Camera,
    ArrowUp,
} from "lucide-react";

export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer className="border-t border-white/10 bg-[#020611]">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-6">

                    {/* Brand */}

                    <div className="lg:col-span-3">

                        <h2 className="text-3xl font-black text-white">

                            Real Estate{" "}

                            <span className="text-amber-400">
                                Yavatmal
                            </span>

                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            {t("tagline")}
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            {t("quickLinks")}
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <a href="/#home" className="text-slate-400 hover:text-amber-400">
                                {t("home")}
                            </a>

                            <a href="/#properties" className="text-slate-400 hover:text-amber-400">
                                {t("properties")}
                            </a>

                            <a href="/#about" className="text-slate-400 hover:text-amber-400">
                                {t("about")}
                            </a>

                            <a href="/#contact" className="text-slate-400 hover:text-amber-400">
                                {t("contact")}
                            </a>

                        </div>

                    </div>

                    {/* Property Types */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            {t("propertyTypes")}
                        </h3>

                        <div className="mt-6 flex flex-col gap-4 text-slate-400">

                            <p>{t("agriculturalLand")}</p>

                            <p>{t("residentialPlots")}</p>

                            <p>{t("commercialProperty")}</p>

                            <p>{t("investmentLand")}</p>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            {t("contactHeading")}
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex items-center gap-3 text-slate-400">


                                <a href="tel:+9196575 94144"
                                    className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition"
                                >
                                    <Phone size={18} className="flex-shrink-0" />
                                    <span className="whitespace-nowrap">+91 96575 94144</span>
                                </a>

                            </div>


                            <a href="https://wa.me/9196575 94144"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition"
                            >
                                <MessageCircle size={18} />
                                {t("whatsappUs")}
                            </a>

                        </div>

                        <div className="mt-5 flex items-center gap-3 text-slate-400">

                            <MapPin size={18} />

                            {t("locationValue")}

                        </div>

                        <div className="mt-8 flex gap-4">


                            <a href="https://www.instagram.com/realestate_yavatmal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Instagram"
                                className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:bg-amber-400 hover:text-slate-900"
                            >
                                <Camera size={20} />
                            </a>


                            <a href="https://chat.whatsapp.com/HgURIIa77lvGrIryfUccLH"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="join our WhatsApp community"
                                className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:bg-amber-400 hover:text-slate-900"
                            >
                                <MessageCircle size={20} />
                            </a>

                        </div>

                    </div >

                </div >

            </div >

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

                <p className="text-sm text-slate-400">
                    © 2026 Real Estate Yavatmal. {t("allRightsReserved")}
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
                >
                    {t("backToTop")}

                    <ArrowUp size={18} />

                </button>

            </div>

        </footer >
    );
}