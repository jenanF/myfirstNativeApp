import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CartProvider } from './src/context/CartContext';

import HomeStack from './src/navigation/HomeStack';
import RestaurantsStack from './src/navigation/RestaurantsStack';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Restaurants') {
                iconName = 'restaurant';
              } else if (route.name === 'Cart') {
                iconName = 'shopping-cart';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >

          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Restaurants" component={RestaurantsStack} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
