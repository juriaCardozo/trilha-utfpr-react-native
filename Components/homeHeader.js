import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Icon name='search' size={45} color='#000000' style={{marginTop: 8}}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#CDC773', 
    paddingVertical: 20, 
    alignItems: 'flex-end',
    paddingTop:30,
    elevation: 10,
    paddingHorizontal: 26
  },
});

export default HomeHeader;
