import Product from '../types/Product';


export const newArrivals:Product[] = [
    {
        id: '1',
        title: 'Traveler Tote',
        brand: 'The Marc Jacobs',
        price: 195.00,
        imgPaths: [require('../assets/images/new_arrivals_bag.png')],
        description: 'Some description here',
        category: 'Bag',
        rating: 5,
        isInStock: true,
        size: [],
        colors: [],
        reviewsNumber: 200,
    },
    {
        id: '2',
        title: 'Clean 90 Triale Sneakers',
        brand: 'Axel Arigato',
        price: 245.00,
        imgPaths: [require('../assets/images/new_arrivals_sneakers.png')],
        description: 'Some description here',
        category: 'Shoes',
        rating: 5,
        isInStock: true,
        size: ['39', '39.5', '40', '40.5', '41', '41.5'],
        colors: [],
        reviewsNumber: 270,
    },
];
