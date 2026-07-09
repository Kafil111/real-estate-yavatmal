"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                        ? "bg-slate-950/90 backdrop-blur-xl shadow-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    <Link
                        href="/"
                        className="text-2xl font-black text-white"
                    >
                        Real Estate
                        <span className="text-amber-400"> Yavatmal</span>
                    </Link>

                    <DesktopMenu />

                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageSwitcher />

                        <a
                            href="https://wa.me/919657594144"
                            target="_blank"
                            className="rounded-full bg-amber-400 px-5 py-3 font-bold text-slate-900 hover:scale-105 transition"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <Menu size={30} className="text-white" />
                    </button>
                </div>
            </header>

            <MobileDrawer
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}