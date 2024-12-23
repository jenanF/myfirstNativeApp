import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllRestaurantsScreen from '../screens/AllRestaurantsScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';

const Stack = createStackNavigator();

const RestaurantsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AllRestaurants" component={AllRestaurantsScreen} options={{ title: null }} />
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={({ route }) => ({ title: route.params.restaurant.name })}
            />
        </Stack.Navigator>
    );
};

export default RestaurantsStack; 