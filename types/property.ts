export type Property = {
    id: string;

    title: string;

    type: string;

    location: string;

    area: string;

    price: string;

    totalPrice: string;

    image: string;

    gallery: string[];

    featured: boolean;

    available: boolean;

    badges: string[];

    highlights: string[];

    description: string;

    mapUrl: string;

    distances: {
        [key: string]: string;
    };

    contact: {
        phone: string;
        whatsapp: string;
    };
};