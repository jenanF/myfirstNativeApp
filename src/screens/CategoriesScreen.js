import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import ScreenHeader from '../components/ScreenHeader';

const categories = [
    { id: '1', name: 'Pizza', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Burgers', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Sushi', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Asian', image: 'https://via.placeholder.com/150' },
];

const CategoriesScreen = ({ navigation }) => {
    const renderCategory = ({ item }) => (
        <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Restaurants', { category: item.name })}
        >
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScreenHeader title="Categories" />
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    categoryCard: {
        flex: 1,
        margin: 8,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
    },
    categoryImage: {
        width: '100%',
        height: 120,
    },
    categoryName: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CategoriesScreen; 