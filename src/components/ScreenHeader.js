import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ScreenHeader; 