export default function CTASection() {
    return (
        <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-white">

            <div className="mx-auto max-w-5xl px-6 text-center">

                <h2 className="text-5xl font-bold">
                    Looking for the Right Property?
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-xl text-green-100">
                    Whether you are buying agricultural land, residential plots
                    or commercial property, we are here to help.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">

                    <a
                        href="tel:8793398909"
                        className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
                    >
                        📞 Call Now
                    </a>

                    <a
                        href="https://wa.me/918793398909"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
                    >
                        💬 WhatsApp
                    </a>

                </div>

            </div>

        </section>
    );
}