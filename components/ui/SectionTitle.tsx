type SectionTitleProps = {
    subtitle?: string;
    title: string;
    description?: string;
    center?: boolean;
};

export default function SectionTitle({
    subtitle,
    title,
    description,
    center = true,
}: SectionTitleProps) {
    return (
        <div className={`${center ? "text-center" : "text-left"} mb-14`}>
            {subtitle && (
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
                    {subtitle}
                </p>
            )}

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {title}
            </h2>

            {description && (
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}