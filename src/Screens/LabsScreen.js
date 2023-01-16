/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeaderElement from '../Components/HeaderElement';

const LabsScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderElement navigation={navigation} />
      <Text>LabsScreen</Text>
    </View>
  );
};

export default LabsScreen;
