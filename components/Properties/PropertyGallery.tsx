"use client";

import { useState } from "react";
import Image from "next/image";

type PropertyGalleryProps = {
    images: string[];
    title: string;
    code: string;
};

export default function PropertyGallery({
    images,
    title,
    code,
}: PropertyGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            {/* Main Image */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                    {code}
                </span>
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        aria-label={`Show image ${index + 1} of ${title}`}
                        className={`relative h-24 w-full overflow-hidden rounded-lg border-4 transition ${selectedImage === image
                            ? "border-green-600"
                            : "border-transparent hover:border-gray-300"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${title} ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}