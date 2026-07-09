"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Are all properties legally verified?",
        answer:
            "Yes. Every property listed by Real Estate Yavatmal is carefully verified before being offered to buyers.",
    },
    {
        question: "Can you help with documentation?",
        answer:
            "Absolutely. We assist with agreements, land records, registration guidance and complete documentation.",
    },
    {
        question: "Can I schedule a property visit?",
        answer:
            "Yes. Simply contact us through WhatsApp or phone and we'll arrange a visit at your preferred time.",
    },
    {
        question: "Do you deal only in agricultural land?",
        answer:
            "No. We also offer residential plots, commercial properties and investment opportunities across Yavatmal.",
    },
    {
        question: "Do you provide after-sale support?",
        answer:
            "Yes. Our relationship doesn't end after registration. We continue assisting our clients whenever required.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-[#07111f] py-20 md:py-28">

            <div className="mx-auto max-w-5xl px-6">

                <div className="text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        FAQ
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Everything you need to know before investing with us.
                    </p>

                </div>

                <div className="mt-16 space-y-5">

                    {faqs.map((faq, index) => {

                        const active = open === index;

                        return (

                            <div
                                key={faq.question}
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