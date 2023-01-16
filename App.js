/* eslint-disable no-unused-vars */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/Screens/Login';
import PatientProfile from './src/Screens/PatientProfile';
import FirstPage from './src/Screens/FirstPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VitalValuesPage from './src/Screens/VitalValuesPage';
import DrawerScreen from './src/Screens/DrawerScreen';
import DoctorsScreen from './src/Screens/DoctorsScreen';
import LabsScreen from './src/Screens/LabsScreen';
import HospitalScreen from './src/Screens/HospitalScreen';
import QuickConnectScreen from './src/Screens/QuickConnectScreen';
import PocdScreen from './src/Screens/PocdScreen';
import {TextInput, IconButton, Drawer} from 'react-native-paper';

import AuthNavigation from './src/navigations/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
