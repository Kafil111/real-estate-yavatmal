type LocalizedText = {
    en: string;
    hi: string;
    mr: string;
};

export function getLocalizedText(
    text: LocalizedText,
    locale: string
): string {
    return text[locale as keyof LocalizedText] ?? text.en;
}