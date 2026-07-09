"use client"; import Image from "next/image";

<Image
    src="/logo.svg"
    alt="Real Estate Yavatmal"
    width={240}
    height={60}
    priority
/>

import Link from "next/link";

const links = [
    { name: "Home", href: "#" },
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 py-4">

                <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/65 backdrop-blur-xl border border-white/10 px-8 py-5 backdrop-blur-2xl shadow-2xl">

                    {/* Logo */}

                    <Link
                        href="/" className="text-4xl font-black tracking-tight transition hover:scale-[1.02]"
                    >

                        <span className="text-white">
                            Real Estate
                        </span>{" "}

                        <span className="text-amber-400">
                            Yavatmal
                        </span>

                    </Link>

                    {/* Menu */}

                    <div className="hidden items-center gap-10 md:flex">

                        {links.map((link) => (

                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-200 transition-all duration-300 hover:text-amber-400 hover:-translate-y-0.5"
                            >
                                {link.name}
                            </a>

                        ))}

                    </div>

                </nav>

            </div>
        </header>
    );
}