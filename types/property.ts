type LocalizedText = {
    en: string;
    hi: string;
    mr: string;
};

export type Property = {
    id: string;

    title: LocalizedText;

    type: string;

    location: LocalizedText;

    area: string;

    price: string;

    totalPrice: string;

    image: string;

    gallery: string[];

    featured: boolean;

    available: boolean;

    badges: LocalizedText[];

    highlights: LocalizedText[];

    description: LocalizedText;

    mapUrl: string;

    distances: {
        [key: string]: string;
    };

    contact: {
        phone: string;
        whatsapp: string;
    };
};