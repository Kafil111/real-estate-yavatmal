"use client";

import {
    Quote,
    Star,
    ArrowRight,
} from "lucide-react";

const testimonials = [
    {
        name: "Rahul Patil",
        place: "Yavatmal",
        review:
            "Very professional service. They helped us purchase agricultural land with complete documentation.",
    },
    {
        name: "Anjali Deshmukh",
        place: "Babulgaon",
        review:
            "Transparent pricing and genuine advice. I highly recommend Real Estate Yavatmal.",
    },
    {
        name: "Imran Shaikh",
        place: "Pandharkawada",
        review:
            "Excellent support from property visit to registration. Everything was handled smoothly.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#030817] py-20 md:py-28">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                        CLIENT TESTIMONIALS
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                        Trusted By Families Across Yavatmal
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Our biggest achievement isn't selling land —
                        it's earning lifelong trust from our clients.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {testimonials.map((item) => (

                        <div
                            key={item.name}
                            className="group rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]"
                        >

                            <Quote
                                size={42}
                                className="text-amber-400"
                            />

                            <div className="mt-6 flex gap-1">

                                {[1, 2, 3, 4, 5].map((star) => (

                                    <Star
                                        key={star}
                                        size={18}
                                        fill="currentColor"
                                        className="text-amber-400"
                                    />

                                ))}

                            </div>

                            <p className="mt-6 leading-8 italic text-slate-300">
                                "{item.review}"
                            </p>

                            <div className="mt-10 flex items-center justify-between">

                                <div>

                                    <h3 className="text-xl font-bold text-white">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-slate-400">
                                        {item.place}
                                    </p>

                                </div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-xl font-black text-slate-900">

                                    {item.name.charAt(0)}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* CTA */}

                <div className="mt-16 flex justify-center">

                    <button className="inline-flex items-center gap-3 rounded-2xl border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition duration-300 hover:bg-amber-400 hover:text-slate-900">

                        Join Our Happy Clients

                        <ArrowRight size={20} />

                    </button>

                </div>

            </div>

        </section>
    );
}