import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text, ScrollView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import DetailHeader from '../components/detailHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DetailHeader text={'Girassol'} text2={'Helianthus annuus'}></DetailHeader>
            <View style={styles.detailContainer}>
                <Image source={require('../assets/images/Box.png')} style={styles.image}></Image>
                <ScrollView>
                    <Text style={styles.textDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, tortor eu gravida mollis, lacus mi dignissim odio, sed consequat ex erat ac risus. Suspendisse tempus nisl eu orci pharetra, et ullamcorper augue fermentum. In laoreet, ipsum in mattis condimentum, dolor velit porttitor nulla, id accumsan ipsum nunc eget risus. viverra turpis vel erat tempus, id tristique elit suscipit. Proin quis leo sed turpis interdum lobortis ac at lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </Text>
                </ScrollView>
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
    detailContainer: {
        flex: 1,
        paddingTop: 18,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        margin: 18,
        backgroundColor: '#CDC773',
        height: 680,
        width: 360
    },
    image: {
        height: 220,
        borderRadius: 20
    },
    textDetail: {
        fontSize: 19,
        padding: 10
    }
});

export default DetailScreen;
