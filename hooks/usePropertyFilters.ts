import { useMemo } from "react";
import { Property } from "@/types/property";

export type SearchFilters = {
    location: string;
    type: string;
    budget: string;
    area: string;
};

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

            const matchesArea =
                !filters.area ||
                property.area
                    .toLowerCase()
                    .includes(filters.area.toLowerCase());

            const matchesBudget =
                !filters.budget ||
                property.totalPrice
                    .toLowerCase()
                    .includes(filters.budget.toLowerCase());

            return (
                matchesLocation &&
                matchesType &&
                matchesArea &&
                matchesBudget
            );
        });
    }, [properties, filters]);
}