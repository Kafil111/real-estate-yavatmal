"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed right-0 top-0 z-50 h-screen w-80 bg-slate-950 border-l border-white/10 p-8"
                        initial={{ x: 350 }}
                        animate={{ x: 0 }}
                        exit={{ x: 350 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={onClose}
                            className="mb-10"
                        >
                            <X className="text-white" size={30} />
                        </button>

                        <div className="space-y-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={onClose}
                                    className="block text-xl text-white hover:text-amber-400"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}