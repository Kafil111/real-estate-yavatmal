"use client";

import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    return (
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-amber-400 transition">
            <Globe size={18} />
            EN
        </button>
    );
}