/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BlockElement from '../Components/BlockElement';
// import HeaderElement from '../Components/HeaderElement';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderElement drawer={drawer} setDrawer={setDrawer} /> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 10,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <BlockElement
          name="home"
          title="POCD Centers"
          nav="POCD"
          navigation={navigation}
        />
        <BlockElement
          name="face-man-profile"
          title="Patient Profile"
          nav="PatientProfile"
          navigation={navigation}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 10,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <BlockElement
          name="doctor"
          title="Doctors"
          nav="Doctors"
          navigation={navigation}
        />
        <BlockElement
          name="hospital-box"
          title="Labs"
          nav="Labs"
          navigation={navigation}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 10,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <BlockElement
          name="hospital-building"
          title="Hospitals"
          nav="Hospitals"
          navigation={navigation}
        />
        <BlockElement
          name="chat-outline"
          title="Quick Connect/Chats"
          nav="QuickConnect"
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    height: '100%',
    // marginHorizontal: 10
  },
});

export default FirstPage;
