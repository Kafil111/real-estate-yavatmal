import { ReactNode } from "react";

type GlassCardProps = {
    children: ReactNode;
    className?: string;
};

export default function GlassCard({
    children,
    className = "",
}: GlassCardProps) {
    return (
        <div
            className={`
                rounded-3xl
                border border-white/15
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
                p-8
                md:p-10
                transition-all
                duration-500
                ${className}
            `}
        >
            {children}
        </div>
    );
}