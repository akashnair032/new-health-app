/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeaderElement from '../Components/HeaderElement';

const QuickConnectScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderElement navigation={navigation} />
      <Text>QuickConnectScreen</Text>
    </View>
  );
};

export default QuickConnectScreen;
