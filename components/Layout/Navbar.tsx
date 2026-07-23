"use client";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const tLang = useTranslations("LanguageSwitcher");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        const currentLocalePrefixes = ["en", "hi", "mr"];

        if (currentLocalePrefixes.includes(segments[1])) {
            segments[1] = newLocale;
        } else {
            segments.splice(1, 0, newLocale);
        }

        let newPath = segments.join("/") || "/";

        if (newLocale === "en") {
            newPath = newPath.replace(/^\/en/, "") || "/";
        }

        router.push(newPath);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: t("home"), href: "/#home" },
        { name: t("properties"), href: "/#properties" },
        { name: t("about"), href: "/#about" },
        { name: t("contact"), href: "/#contact" },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">

                <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/65 backdrop-blur-2xl px-5 py-3 sm:px-8 sm:py-5 shadow-2xl">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight transition hover:scale-[1.02]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="text-white">
                            Real Estate
                        </span>{" "}

                        <span className="text-amber-400">
                            Yavatmal
                        </span>
                    </Link>

                    {/* Desktop Menu */}

                    <div className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (

                            <a key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-200 transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Language Switcher — always visible, mobile and desktop */}

                    <select
                        aria-label={tLang("language")}
                        value={locale}
                        onChange={(e) => switchLocale(e.target.value)}
                        className="rounded-lg border border-white/20 bg-slate-800 px-2 py-1.5 text-xs text-white outline-none sm:px-3 sm:py-2 sm:text-sm"
                    >
                        <option value="en">EN</option>
                        <option value="hi">हिं</option>
                        <option value="mr">मर</option>
                    </select>

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden"
                    >
                        <span className="relative block h-4 w-6">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "top-2 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "top-2 -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>

                </nav>

                {/* Mobile Dropdown Panel */}

                {
                    isMenuOpen && (
                        <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl p-4 shadow-2xl md:hidden">
                            <div className="flex flex-col gap-1">
                                {links.map((link) => (

                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-amber-400"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div >
                    )
                }

            </div >
        </header >
    );
}