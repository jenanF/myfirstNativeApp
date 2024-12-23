import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, restaurantId, restaurantName) => {
        setCartItems(prevItems => {
            // Check if item already exists in cart
            const existingItem = prevItems.find(
                cartItem => cartItem.id === item.id && cartItem.restaurantId === restaurantId
            );

            if (existingItem) {
                // Update quantity if item exists
                return prevItems.map(cartItem =>
                    cartItem.id === item.id && cartItem.restaurantId === restaurantId
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            // Add new item if it doesn't exist
            return [...prevItems, {
                ...item,
                quantity: 1,
                restaurantId,
                restaurantName
            }];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, change) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === itemId) {
                    const newQuantity = item.quantity + change;
                    if (newQuantity < 1) return item;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 