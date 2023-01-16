/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Animated from 'react-native-reanimated';
import FirstPage from './FirstPage';
// import PatientProfile from './PatientProfile';
import Login from './Login';
import {TextInput, IconButton} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const [search, setSearch] = useState(false);
  return (
    <Drawer.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerTintColor: '#3CDBC0',
        headerRight: () =>
          search ? (
            <TextInput
              label="search"
              mode="outlined"
              style={{width: '80%', height: 40, marginHorizontal: 10}}
              outlineColor="white"
              activeOutlineColor="#3CDBC0"
              right={
                <TextInput.Icon
                  style={styles.textIconStyle}
                  name="close"
                  onPress={() => setSearch(false)}
                  color="#3CDBC0"
                />
              }
            />
          ) : (
            <IconButton
              icon="home-search-outline"
              size={30}
              color={'#3CDBC0'}
              onPress={() => setSearch(true)}
            />
          ),
      }}>
      {/* <Drawer.Screen name="Login/Signup" component={Login} options={{headerShown: false}}  /> */}
      {/* <Drawer.Screen name="PatientProfile" component={PatientProfile} options={{
                    title: "Akash Nair's Profile",
                    headerRight: ()=> (
                                    <IconButton icon='text-box-search-outline'
                                      size={30} 
                                      color={"#3CDBC0"}
                                      // eslint-disable-next-line no-trailing-spaces
                                      // onPress={setPatientprofilesearch(true)} />)
                        }} /> */}
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Help" component={Login} />
      <Drawer.Screen name="About" component={Login} />
      <Drawer.Screen name="FAQs" component={Login} />
      <Drawer.Screen name="Connect to a POCD" component={Login} color="red" />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  textIconStyle: {
    alignContent: 'center',
  },
});

export default DrawerScreen;
