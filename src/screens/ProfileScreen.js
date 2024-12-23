import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://via.placeholder.com/150' }}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>john.doe@example.com</Text>
            </View>

            <View style={styles.section}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>My Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Delivery Addresses</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Payment Methods</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.option, styles.logoutButton]}>
                    <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        color: '#666',
    },
    section: {
        padding: 20,
    },
    option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
    },
    logoutButton: {
        marginTop: 20,
        borderBottomWidth: 0,
    },
    logoutText: {
        color: '#FF6B6B',
    },
});

export default ProfileScreen; 