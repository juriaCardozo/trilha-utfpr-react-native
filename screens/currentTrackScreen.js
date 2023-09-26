import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from '../components/header'
import BottomNavigationBar from '../components/bottomNavigationBar';


const CurrentTrackScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header titleText={'Trilha Atual'}></Header>
           <View style={styles.trackContainer}>
           <Image source={require('../assets/images/track.png')} style={styles.track}></Image>
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
    trackContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    track: {
        height: 600,
        borderRadius: 40,
        alignSelf: 'center',
    },
});


export default CurrentTrackScreen;