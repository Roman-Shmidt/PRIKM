import { ComparisonType } from "./ComparisonType";

export interface FilteringOptions {
    isEmpty: boolean;
    attributeName: string;
    filters: Record<string, ComparisonType>;
    value: string;
    comparisonType: ComparisonType;
}
