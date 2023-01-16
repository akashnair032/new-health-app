/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../Screens/drawerScreens/About';
import Help from '../Screens/drawerScreens/Help';
import FAQs from '../Screens/drawerScreens/FAQs';
import Settings from '../Screens/drawerScreens/Settings';
import ConnectToPocd from '../Screens/drawerScreens/ConnectToPocd';
import FirstPage from '../Screens/FirstPage';

import DoctorsScreen from '../Screens/DoctorsScreen';
import LabsScreen from '../Screens/LabsScreen';
import HospitalScreen from '../Screens/HospitalScreen';
import QuickConnectScreen from '../Screens/QuickConnectScreen';
import PocdScreen from '../Screens/PocdScreen';
import PatientProfile from '../Screens/PatientProfile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerTintColor: '#3CDBC0',
        drawerActiveBackgroundColor: '#3CDBC0',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#3CDBC0',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="FAQs" component={FAQs} />
      <Drawer.Screen
        name="ConnectToPocd"
        component={ConnectToPocd}
        options={{
          title: 'Connect to a POCD',
          // drawerItemStyle: {

          //     borderColor: 'black',
          //     borderRadius: 20,
          //     backgroundColor: 'royalblue',

          // }
        }}
      />

      <Drawer.Screen
        name="PatientProfile"
        component={PatientProfile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Doctors"
        component={DoctorsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Labs"
        component={LabsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Hospitals"
        component={HospitalScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="QuickConnect"
        component={QuickConnectScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="POCD"
        component={PocdScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
