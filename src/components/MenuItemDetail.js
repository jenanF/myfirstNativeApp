import React from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuItemDetail = ({ item, visible, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = React.useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        onAddToCart(item, quantity);
        onClose();
        setQuantity(1); // Reset quantity after adding to cart
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Icon name="close" size={24} color="#000" />
                    </TouchableOpacity>

                    <ScrollView>
                        <Image source={{ uri: item?.image }} style={styles.image} />
                        <View style={styles.details}>
                            <Text style={styles.name}>{item?.name}</Text>
                            <Text style={styles.description}>{item?.description}</Text>
                            <Text style={styles.price}>${item?.price?.toFixed(2)}</Text>

                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={decreaseQuantity}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={increaseQuantity}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={handleAddToCart}
                            >
                                <Text style={styles.addButtonText}>
                                    Add to Cart - ${(item?.price * quantity).toFixed(2)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '90%',
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        zIndex: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 5,
    },
    image: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    details: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
        lineHeight: 24,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    quantityButton: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF6B6B',
    },
    quantity: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    addButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MenuItemDetail; 