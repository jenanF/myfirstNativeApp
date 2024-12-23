import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useCart } from '../context/CartContext';
import MenuItemDetail from '../components/MenuItemDetail';

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    const { addToCart } = useCart();
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleAddToCart = (menuItem) => {
        addToCart(menuItem, restaurant.id, restaurant.name);
    };

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const renderMenuItem = ({ item }) => (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleItemPress(item)}
        >
            <Image source={{ uri: item.image }} style={styles.menuItemImage} />
            <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
                <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: restaurant.image }} style={styles.headerImage} />
                <View style={styles.headerInfo}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <View style={styles.restaurantDetails}>
                        <Text style={styles.rating}>★ {restaurant.rating}</Text>
                        <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
                        <Text style={styles.minOrder}>Min. ${restaurant.minOrder}</Text>
                    </View>
                </View>

                <Text style={styles.menuTitle}>Menu</Text>
                <FlatList
                    data={restaurant.menu}
                    renderItem={renderMenuItem}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />
            </ScrollView>
            <MenuItemDetail
                item={selectedItem}
                visible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                    setSelectedItem(null);
                }}
                onAddToCart={(item, quantity) => {
                    for (let i = 0; i < quantity; i++) {
                        handleAddToCart(item);
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 200,
    },
    headerInfo: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    restaurantDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
    deliveryTime: {
        color: '#666',
    },
    minOrder: {
        color: '#666',
    },
    menuTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
    },
    menuItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    menuItemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    menuItemInfo: {
        flex: 1,
        marginLeft: 12,
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    menuItemDescription: {
        color: '#666',
        fontSize: 14,
        marginBottom: 4,
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B6B',
    },
    addButton: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginLeft: 8,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default RestaurantDetailScreen; 