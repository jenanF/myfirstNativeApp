export const restaurants = {
    Pizza: [
        {
            id: '1',
            name: "Mario's Pizza",
            image: 'https://via.placeholder.com/150',
            rating: 4.5,
            deliveryTime: '30-45 min',
            minOrder: 15,
            menu: [
                {
                    id: 'm1',
                    name: 'Margherita Pizza',
                    description: 'Fresh tomatoes, mozzarella, basil',
                    price: 12.99,
                    image: 'https://via.placeholder.com/100',
                },
                {
                    id: 'm2',
                    name: 'Pepperoni Pizza',
                    description: 'Pepperoni, cheese, tomato sauce',
                    price: 14.99,
                    image: 'https://via.placeholder.com/100',
                },
                // Add more menu items...
            ],
        },
        {
            id: '2',
            name: 'Pizza Express',
            image: 'https://via.placeholder.com/150',
            rating: 4.2,
            deliveryTime: '25-40 min',
            minOrder: 12,
        },
    ],
    Burgers: [
        {
            id: '3',
            name: 'Burger King',
            image: 'https://via.placeholder.com/150',
            rating: 4.0,
            deliveryTime: '20-35 min',
            minOrder: 10,
        },
        {
            id: '4',
            name: 'Five Guys',
            image: 'https://via.placeholder.com/150',
            rating: 4.7,
            deliveryTime: '25-40 min',
            minOrder: 15,
        },
    ],
    Sushi: [
        {
            id: '5',
            name: 'Sushi Master',
            image: 'https://via.placeholder.com/150',
            rating: 4.8,
            deliveryTime: '35-50 min',
            minOrder: 20,
        },
        {
            id: '6',
            name: 'Tokyo Sushi',
            image: 'https://via.placeholder.com/150',
            rating: 4.4,
            deliveryTime: '30-45 min',
            minOrder: 18,
        },
    ],
    Asian: [
        {
            id: '7',
            name: 'Wok & Roll',
            image: 'https://via.placeholder.com/150',
            rating: 4.3,
            deliveryTime: '25-40 min',
            minOrder: 15,
        },
        {
            id: '8',
            name: 'Panda Express',
            image: 'https://via.placeholder.com/150',
            rating: 4.1,
            deliveryTime: '20-35 min',
            minOrder: 12,
        },
    ],
}; 