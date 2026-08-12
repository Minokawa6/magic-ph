export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Product {
    id: number;
    name: string;
    product_type: string;
    images: ProductImage[];
}

export interface ProductImage {
    id: number;
    image_path: string;
    is_primary: boolean;
}

export interface ProductListing {
    id: number;
    product_id: number;
    condition: string;
    stock_quantity: number;
    price: number;
    product: Product;
}

export interface SingleDetail {
    id: number;
}

export interface SealedDetail {
    id: number;
}
