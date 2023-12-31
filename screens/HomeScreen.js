import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BottomNavigationBar from '../components/bottomNavigationBar';
import Header from '../components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Header titleText={'Home'}></Header>
            <View style={styles.homeContainer}>
                <Image source={require('../assets/images/map.png')} style={styles.map}></Image>
                <TouchableOpacity onPress={handleButtonPress} style={{ position: 'absolute' }}>
                    <Icon name='map-pin' size={60} color='#ff0000' style={styles.mapPinIcon}></Icon>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
                style={styles.modalContent}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.textMapPinDetails}>Informações sobre a trilha selecionada</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                        <Icon name='star' size={40} color='#FFBF00' style={styles.starIcon} ></Icon>
                        <Icon name='star' size={40} color='#FFBF00' style={styles.starIcon}></Icon>
                        <Icon name='star' size={40} color='#FFBF00' style={styles.starIcon}></Icon>
                        <Icon name='star' size={40} color='#FFBF00' style={styles.starIcon}></Icon>
                        <Icon name='star' size={40} color='#FFBF00' style={styles.starIcon}></Icon>
                    </View>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        justifyContent: 'space-evenly',
    },
    mapPinIcon: {
        position: 'absolute',
        top: 310,
        left: 200
    },
    map: {
        width: 357,
        height: 528,
        borderRadius: 40,
        alignSelf: 'center',
    },
    modalContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        paddingVertical: 20
    },
    modalContent: {
        height: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    textMapPinDetails: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    }
});

export default HomeScreen;
