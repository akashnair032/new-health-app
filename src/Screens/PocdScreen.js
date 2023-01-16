/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeaderElement from '../Components/HeaderElement';

const PocdScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderElement navigation={navigation} />
      <Text>PocdScreen</Text>
    </View>
  );
};

export default PocdScreen;
