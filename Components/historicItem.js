import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HistoricItem = ({ text, navigation, screen }) => {
  return (
    <TouchableOpacity style={styles.container} onPress = {() => navigation.navigate(screen)}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDC773',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    width: 376,
    height: 62,
    borderRadius: 20
  },
  text: {
    fontWeight: '600',
    fontSize: 30,
    color: '#000',
  },
});

export default HistoricItem;
