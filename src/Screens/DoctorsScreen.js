/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeaderElement from '../Components/HeaderElement';

const DoctorsScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderElement navigation={navigation} />
      <Text>DoctorsScreen</Text>
    </View>
  );
};

export default DoctorsScreen;
