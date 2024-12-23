import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { restaurants } from '../data/restaurants';
import ScreenHeader from '../components/ScreenHeader';

const RestaurantsScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const categoryRestaurants = restaurants[category] || [];

    const renderRestaurant = ({ item }) => (
        <TouchableOpacity
            style={styles.restaurantCard}
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
        >
            <Image source={{ uri: item.image }} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <View style={styles.restaurantDetails}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>★ {item.rating}</Text>
                    </View>
                    <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                    <Text style={styles.minOrder}>Min. ${item.minOrder}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScreenHeader title={category} />
            <FlatList
                data={categoryRestaurants}
                renderItem={renderRestaurant}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        padding: 16,
    },
    restaurantCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    restaurantImage: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    restaurantInfo: {
        padding: 12,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    restaurantDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
});

export default RestaurantsScreen; 