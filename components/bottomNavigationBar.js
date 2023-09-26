import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomNavigationBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <View style={[styles.circle, styles.separator]}>
                    <TouchableOpacity onPress={() => navigation.navigate('CurrentTrack')}>
                        <Icon name='navigation' size={25} color='#FFC126'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.circle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Achievements')}>
                        <Icon name='award' size={28} color='#FFC126'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={[styles.largeCircle, styles.separator]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name='home' size={37} color='#FFC126'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.circle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name='camera' size={28} color='#FFC126'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={[styles.circle, styles.separator]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Historic')}>
                        <Icon name='list' size={28} color='#FFC126'></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CDC773',
        alignItems: 'center',
        height: 70,
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#5B2F14',
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeCircle: {
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#5B2F14',
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        marginHorizontal: '8%',
    },
});

export default BottomNavigationBar;
