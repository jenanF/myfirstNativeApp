import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { restaurants } from '../data/restaurants';

// Combine all restaurants into a single array
const allRestaurants = Object.values(restaurants).flat();

const AllRestaurantsScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredRestaurants, setFilteredRestaurants] = React.useState(allRestaurants);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = allRestaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

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
            <View style={styles.searchContainer}>
                <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search restaurants..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredRestaurants}
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 16,
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

export default AllRestaurantsScreen; 