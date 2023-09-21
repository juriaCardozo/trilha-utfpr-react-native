import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/header'


const RegisterScreen = () => {


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxClick = () => {
        setIsChecked(!isChecked);
    };


    return (
        <View style={styles.container}>
            <View>
                <Header></Header>
            </View>
            <View style={styles.cadastroContainer}>
                <View style={styles.cadastro}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.subtitle}>Nome completo:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.subtitle}>E-mail:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.subtitle}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginTop: 20}} onPress={handleCheckBoxClick}>
                        <View
                            style={[
                                styles.checkbox,
                                isChecked ? styles.checked : styles.unchecked,
                            ]}
                        />    
                    <Text style={{fontSize: 16, alignSelf: 'center', justifyContent: 'center', flex: 1}}>Li e aceito os termos de uso do aplicativo</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.cadastroButtonText}>Fazer Cadastro</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginButton}>ou faça login aqui</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        width: 28,
        height: 28,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        borderRadius: 5,
        alignSelf: 'center'
    },
    checked: {
        backgroundColor: 'green', // You can use any color you prefer for the checked state.
    },
    unchecked: {
        backgroundColor: 'white', // You can use any color you prefer for the unchecked state.
    },
    container: {
        backgroundColor: '#FEECCD',
        flex: 1,
    },
    cadastroContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    cadastro: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDC773',
        padding: 20,
        borderRadius: 10,
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 4,
    },
    title: {
        fontSize: 35,
        color: '#000000',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 22,
        color: '#000000',
        alignSelf: 'flex-start',
        marginTop: 8
    },
    input: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        width: '100%',
        height: 31,
        paddingHorizontal: 10
    },
    cadastroButton: {
        marginTop: 20,
        backgroundColor: '#FEECCD',
        width: '100%',
        paddingVertical: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    cadastroButtonText: {
        fontSize: 30,
    },
    loginButton: {
        fontWeight: 'bold',
        color: '#5B2F14',
        fontSize: 20,
        marginTop: 8
    }
});


export default RegisterScreen;