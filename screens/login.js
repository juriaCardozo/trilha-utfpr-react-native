import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>E-mail:</Text>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.subtitle}>Senha:</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Fazer Login</Text>
            </TouchableOpacity>
            <Text style={styles.registerButton}>ou cadastre-se aqui</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDC773',
        padding: 20,
        borderRadius: 10,
        borderRadius: 20
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
        width: 300,
        height: 31,
        paddingHorizontal: 10
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#FEECCD',
        width: 300,
        paddingVertical: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        fontSize: 30,
    },
    registerButton: {
        fontWeight: 'bold',
        color: '#5B2F14',
        fontSize: 20,
        marginTop: 3
    }

});

export default Login;
