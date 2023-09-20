import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header'
import Login from './screens/login';

const App = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View  style ={styles.content}>
        <Login></Login>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEECCD',
  },
  content: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
