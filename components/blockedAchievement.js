import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BlockedAchievement = ({ }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conquista Bloqueada</Text>
      <Icon name='lock' size={30} color='#000000' style={styles.iconStyle}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDC773',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
    width: 376,
    height: 62,
    borderRadius: 10
  },
  textContainer: {
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  iconStyle: {

  }
});

export default BlockedAchievement;
