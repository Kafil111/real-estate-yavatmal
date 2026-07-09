export default function HeroStats() {
    const stats = [
        {
            value: "500+",
            label: "Properties",
        },
        {
            value: "1000+",
            label: "Acres",
        },
        {
            value: "250+",
            label: "Happy Clients",
        },
        {
            value: "Trusted",
            label: "Property Partner",
        },
    ];

    return (
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl md:grid-cols-4">

            {stats.map((stat) => (

                <div
                    key={stat.label}
                    className="text-center"
                >
                    <h3 className="text-4xl font-extrabold text-yellow-400">
                        {stat.value}
                    </h3>

                    <p className="mt-2 text-white">
                        {stat.label}
                    </p>
                </div>

            ))}

        </div>
    );
}