import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={({ route }) => ({
                    headerShown: true,
                    title: route.params.restaurant.name
                })}
            />
        </Stack.Navigator>
    );
};

export default HomeStack; 