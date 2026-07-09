"use client";

import { useState } from "react";
import Image from "next/image";

type PropertyGalleryProps = {
    images: string[];
    title: string;
};

export default function PropertyGallery({
    images,
    title,
}: PropertyGalleryProps) {
    const [selectedImage, setSelectedImage] = useState("/properties/w323/main.jpg");

    return (
        <div>
            {/* Main Image */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                <img
                    src={selectedImage}
                    alt={title}
                    className="h-[500px] w-full object-cover"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`overflow-hidden rounded-lg border-4 transition ${selectedImage === image
                            ? "border-green-600"
                            : "border-transparent hover:border-gray-300"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${title} ${index + 1}`}
                            className="h-24 w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}