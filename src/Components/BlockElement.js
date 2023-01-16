/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BlockElement = ({name, title, nav, navigation}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(nav)}>
      <Icon name={name} size={40} color="#3CDBC0" styles={{color: '#3CDBC0'}} />
      <Text
        style={{
          fontWeight: 'bold',
          color: '#3CDBC0',
          fontSize: 20,
          textAlign: 'justify',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 175,
    borderWidth: 1,
    borderColor: '#3CDBC0',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});

export default BlockElement;
