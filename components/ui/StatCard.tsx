type StatCardProps = {
    value: string;
    label: string;
    className?: string;
};

export default function StatCard({
    value,
    label,
    className = "",
}: StatCardProps) {
    return (
        <div
            className={`
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-5
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:shadow-xl
                ${className}
            `}
        >
            <h3 className="text-3xl font-extrabold text-amber-400 md:text-4xl">
                {value}
            </h3>

            <p className="mt-2 text-sm font-medium tracking-wide text-slate-200 md:text-base">
                {label}
            </p>
        </div>
    );
}