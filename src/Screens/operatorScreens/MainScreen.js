/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import NewPatientScreen from './NewPatientScreen';
import OldPatientScree from './OldPatientScreen';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingVertical: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('NewPatientScreen');
          }}
          style={{
            backgroundColor: '#3CDBC0',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            New Patient
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate('OldPatientScreen');
          }}
          style={{
            backgroundColor: '#3CDBC0',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Existing Patient
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
