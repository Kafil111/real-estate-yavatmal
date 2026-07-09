import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
};

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300 ease-out";

    const variants = {
        primary:
            "bg-amber-400 text-slate-900 shadow-xl hover:bg-amber-300 hover:-translate-y-2 hover:shadow-2xl",

        secondary:
            "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900 hover:-translate-y-2 hover:shadow-xl",
    };

    const styles = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    );
}