import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BottomNavigationBar = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            console.log(photo);
        }
    };

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
                    <TouchableOpacity  onPress={takePicture}>
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
            {hasPermission === null ? (
        <View />
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{ flex: 1, display: 'none' }} // Esconda a visualização da câmera
          type={type}
        />
      )}
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
