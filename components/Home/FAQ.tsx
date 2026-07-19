"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const t = useTranslations("FAQ");
    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        { question: t("q1"), answer: t("a1") },
        { question: t("q2"), answer: t("a2") },
        { question: t("q3"), answer: t("a3") },
        { question: t("q4"), answer: t("a4") },
        { question: t("q5"), answer: t("a5") }
    ];

    return (
        <section className="bg-[#07111f] py-20 md:py-28">

            <div className="mx-auto max-w-5xl px-6">

                <div className="text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        {t("faq")}
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                        {t("heading")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        {t("description")}
                    </p>

                </div>

                <div className="mt-16 space-y-5">

                    {faqs.map((faq, index) => {

                        const active = open === index;

                        return (

                            <div
                                key={index}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl"
                            >

                                <button
                                    onClick={() =>
                                        setOpen(active ? null : index)
                                    }
                                    className="flex w-full items-center justify-between p-7 text-left"
                                >

                                    <span className="text-lg font-semibold text-white">

                                        {faq.question}

                                    </span>

                                    {active ? (
                                        <Minus
                                            className="text-amber-400"
                                            size={22}
                                        />
                                    ) : (
                                        <Plus
                                            className="text-amber-400"
                                            size={22}
                                        />
                                    )}

                                </button>

                                <div
                                    className={`grid transition-all duration-500 ${active
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >

                                    <div className="overflow-hidden">

                                        <p className="px-7 pb-7 leading-8 text-slate-400">

                                            {faq.answer}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}