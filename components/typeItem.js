import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TypeItem = ({ text }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#336633',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    width: 376,
    height: 37,
    borderRadius: 20
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
});

export default TypeItem;
