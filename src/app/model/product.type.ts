export interface Product {
    id?: string;
    name?: string;
    index?: number;
    price?: number;
    quantity?: number;
    image?: string;
    description?: string;
    detail?: {
        tag?: string[];
    };
}
