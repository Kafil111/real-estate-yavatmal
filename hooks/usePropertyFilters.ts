import { useMemo } from "react";
import { Property } from "@/types/property";

export type SearchFilters = {
    location: string;
    type: string;
    budget: string;
    area: string;
};

const SQFT_PER_ACRE = 43560;

// --- Budget Helpers ---

function parseBudgetToLakhs(priceStr: string): number {
    const match = priceStr.match(/[\d,.]+/);
    if (!match) return 0;

    const value = parseFloat(match[0].replace(/,/g, ""));

    if (priceStr.toLowerCase().includes("crore")) {
        return value * 100;
    }

    return value;
}

function matchesBudgetRange(priceStr: string, rangeValue: string): boolean {
    if (!rangeValue) return true;

    const lakhs = parseBudgetToLakhs(priceStr);

    if (rangeValue === "100+") {
        return lakhs >= 100;
    }

    const [min, max] = rangeValue.split("-").map(Number);
    return lakhs >= min && lakhs < max;
}

// --- Area Helpers ---

function parseAreaToAcres(areaStr: string): number {
    const match = areaStr.match(/[\d.]+/);
    if (!match) return 0;

    const value = parseFloat(match[0]);

    if (areaStr.toLowerCase().includes("sq")) {
        return value / SQFT_PER_ACRE;
    }

    return value;
}

function matchesAreaRange(areaStr: string, rangeValue: string): boolean {
    if (!rangeValue) return true;

    const acres = parseAreaToAcres(areaStr);

    if (rangeValue === "20+") {
        return acres >= 20;
    }

    const [min, max] = rangeValue.split("-").map(Number);
    return acres >= min && acres < max;
}

// --- Main Hook ---

export function usePropertyFilters(
    properties: Property[],
    filters: SearchFilters
) {
    return useMemo(() => {
        return properties.filter((property) => {
            const matchesLocation =
                !filters.location ||
                property.location
                    .toLowerCase()
                    .includes(filters.location.toLowerCase());

            const matchesType =
                !filters.type ||
                property.type === filters.type;

            const matchesArea = matchesAreaRange(
                property.area,
                filters.area
            );

            const matchesBudget = matchesBudgetRange(
                property.totalPrice,
                filters.budget
            );

            return (
                matchesLocation &&
                matchesType &&
                matchesArea &&
                matchesBudget
            );
        });
    }, [properties, filters]);
}