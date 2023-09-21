import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import HomeHeader from '../components/homeHeader';
import BottomNavigationBar from '../components/bottomNavigationBar';
import Header from '../components/header';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
                <HomeHeader></HomeHeader>
            <View style={styles.homeContainer}>
            </View>
                <BottomNavigationBar></BottomNavigationBar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEECCD',
        flex: 1,
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default HomeScreen;
