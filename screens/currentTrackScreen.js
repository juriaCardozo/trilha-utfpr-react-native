import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header'


const CurrentTrackScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Header> titleText={'Trilha Atual'}</Header>
           <BottomNavigationBar></BottomNavigationBar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEECCD',
        flex: 1,
    },
});


export default CurrentTrackScreen;