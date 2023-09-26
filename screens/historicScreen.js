import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import Header from '../components/header';
import TypeItem from '../components/typeItem';
import HistoricItem from '../components/historicItem';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HistoricScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header titleText={'Histórico'}></Header>
            <ScrollView>
                <View style={styles.homeContainer}>
                    <TypeItem text={'Trilha'}></TypeItem>
                    <HistoricItem text={'Eco Trilha'}></HistoricItem>
                    <HistoricItem text={'Trilha Calouros'}></HistoricItem>
                    <HistoricItem text={'Ubaia-Doce'}></HistoricItem>
                    <HistoricItem text={'Cachoeira da Fumaça'}></HistoricItem>
                    <TypeItem text={'Planta'}></TypeItem>
                    <HistoricItem text={'Girassol'} navigation={navigation} screen={'Detail'}></HistoricItem>
                    <HistoricItem text={'Violeta'}></HistoricItem>
                    <HistoricItem text={'Figueira'}></HistoricItem>
                </View>
            </ScrollView>
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
    },
});

export default HistoricScreen;
