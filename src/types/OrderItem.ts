import Product from "./Product";

type OrderItem = {
    id: string;
    product: Product;
    overallPrice: number;
    size: string;
    color: string;
    quantity: number;
};

export default OrderItem;
