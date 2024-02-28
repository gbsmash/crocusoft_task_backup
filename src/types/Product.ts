type Product = {
    id: string;
    title: string;
    brand: string;
    price: number;
    imgPaths: ReturnType<typeof require>[];
    description: string;
    category: string;
    rating : number;
    isInStock: boolean;
    size: string[];
    colors: string[];
    reviewsNumber: number;
};

export default Product;
