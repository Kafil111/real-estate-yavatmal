"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DesktopMenu() {
    return (
        <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/90 font-medium transition duration-300 hover:text-amber-400"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}