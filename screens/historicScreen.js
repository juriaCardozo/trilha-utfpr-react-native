import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import Header from '../components/header';
import ListItem from '../components/listItem';
import BlockedAchievement from '../components/blockedAchievement';

const HistoricScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header titleText={'Conquistas'}></Header>
            <View style={styles.homeContainer}>
                <ListItem text={'Desbravador!'} text2={'(Concluiu uma trilha)'} iconName={'award'} ></ListItem>
                <ListItem text={'Biólogo!'} text2={'(Investigou uma planta)'} iconName={'award'} ></ListItem>
                <BlockedAchievement></BlockedAchievement>
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
        paddingTop: 18,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
    }
});

export default HistoricScreen;
