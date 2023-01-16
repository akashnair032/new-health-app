/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import RegisterNowScreen from '../Screens/RegisterNowScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import DrawerNavigation from './DrawerNavigation';
import VitalValuesPage from '../Screens/VitalValuesPage';

import DoctorsScreen from '../Screens/DoctorsScreen';
import LabsScreen from '../Screens/LabsScreen';
import HospitalScreen from '../Screens/HospitalScreen';
import QuickConnectScreen from '../Screens/QuickConnectScreen';
import PocdScreen from '../Screens/PocdScreen';
import PatientProfile from '../Screens/PatientProfile';

import MainScreen from '../Screens/operatorScreens/MainScreen';
import NewPatientScreen from '../Screens/operatorScreens/NewPatientScreen';
import OldPatientScreen from '../Screens/operatorScreens/OldPatientScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      {/* operator screens start */}
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NewPatientScreen"
        component={NewPatientScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OldPatientScreen"
        component={OldPatientScreen}
        options={{headerShown: false}}
      />
      {/* operator screens end */}
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="RegisterNow" component={RegisterNowScreen} />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="VitalValuesPage" component={VitalValuesPage} />

      <Stack.Screen
        name="PatientProfile"
        component={PatientProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doctors"
        component={DoctorsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Labs"
        component={LabsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hospitals"
        component={HospitalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuickConnect"
        component={QuickConnectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="POCD"
        component={PocdScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name='ModalScreen' component={ModalScreen} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
