import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.restaurantName}>{item.restaurantName}</Text>
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <View style={styles.itemActions}>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, -1)}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, 1)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => removeFromCart(item.id)}
                >
                    <Icon name="delete" size={24} color="#FF6B6B" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <View style={styles.container}>
            {cartItems.length > 0 ? (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutButtonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <View style={styles.emptyCart}>
                    <Icon name="shopping-cart" size={64} color="#ccc" />
                    <Text style={styles.emptyCartText}>Your cart is empty</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cartItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    restaurantName: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
        flex: 2,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B6B',
    },
    itemActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    quantityButton: {
        padding: 8,
    },
    quantityButtonText: {
        fontSize: 18,
        color: '#FF6B6B',
        fontWeight: 'bold',
    },
    quantity: {
        paddingHorizontal: 15,
        fontSize: 16,
    },
    deleteButton: {
        padding: 8,
    },
    totalContainer: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    checkoutButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyCartText: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
});

export default CartScreen; 