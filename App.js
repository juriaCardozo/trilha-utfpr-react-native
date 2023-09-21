import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header'
import Login from './screens/login';
import Cadastro from './screens/cadastro';

const App = () => {
  return (
      <View style={styles.container}>
        <Cadastro></Cadastro>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
