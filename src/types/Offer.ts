type Offer = {
    id: string;
    discount: string;
    description: string;
    code: string;
    imgPath: ReturnType<typeof require>;
};

export default Offer;
