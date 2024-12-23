import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Nav = () => {
    return (
        <View style={styles.navbar}>
            <Text>Categoties</Text>
            <Text>Resturants</Text>
            <Text>Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flex: true,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%"
    },
});

export default Nav
