"use client";

import Link from "next/link";
import {
    Phone,
    MapPin,
    MessageCircle,
    Globe,
    Camera,
    ArrowUp,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#020611]">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}

                    <div>

                        <h2 className="text-3xl font-black text-white">

                            Real Estate{" "}

                            <span className="text-amber-400">
                                Yavatmal
                            </span>

                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            Your trusted partner for agricultural land,
                            residential plots and premium investment
                            opportunities across Yavatmal.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <Link href="#" className="text-slate-400 hover:text-amber-400">
                                Home
                            </Link>

                            <Link href="#properties" className="text-slate-400 hover:text-amber-400">
                                Properties
                            </Link>

                            <Link href="#about" className="text-slate-400 hover:text-amber-400">
                                About
                            </Link>

                            <Link href="#contact" className="text-slate-400 hover:text-amber-400">
                                Contact
                            </Link>

                        </div>

                    </div>

                    {/* Property Types */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            Property Types
                        </h3>

                        <div className="mt-6 flex flex-col gap-4 text-slate-400">

                            <p>Agricultural Land</p>

                            <p>Residential Plots</p>

                            <p>Commercial Property</p>

                            <p>Investment Land</p>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex items-center gap-3 text-slate-400">

                                <Phone size={18} />

                                <a
                                    href="tel:+919657594144"
                                    className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition"
                                >
                                    <Phone size={18} />
                                    +91 96575 94144
                                </a>

                            </div>

                            <a
                                href="https://wa.me/919657594144"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Us
                            </a>

                        </div>

                        <div className="flex items-center gap-3 text-slate-400">

                            <MapPin size={18} />

                            Yavatmal, Maharashtra

                        </div>

                    </div>

                    <div className="mt-8 flex gap-4">

                        <button className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:bg-amber-400 hover:text-slate-900">

                            <Globe size={20} />

                        </button>

                        <button className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:bg-amber-400 hover:text-slate-900">

                            <Camera size={20} />

                        </button>

                    </div>

                </div>

            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

                <p className="text-sm text-slate-500">
                    © 2026 Real Estate Yavatmal. All Rights Reserved.
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
                >
                    Back to Top

                    <ArrowUp size={18} />

                </button>

            </div>

        </footer>
    );
}