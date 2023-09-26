import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import Header from '../components/header';
import AchievementItem from '../components/achievementItem';
import BlockedAchievement from '../components/blockedAchievement';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AchievementsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header titleText={'Conquistas'}></Header>
            <View style={styles.homeContainer}>
                <AchievementItem text={'Desbravador!'} text2={'(Concluiu uma trilha)'} iconName={'award'} ></AchievementItem>
                <AchievementItem text={'Biólogo!'} text2={'(Investigou uma planta)'} iconName={'award'} ></AchievementItem>
                <BlockedAchievement></BlockedAchievement>
            </View>
            <BottomNavigationBar navigation={navigation} />
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

export default AchievementsScreen;
