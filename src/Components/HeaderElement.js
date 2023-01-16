/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {IconButton, TextInput} from 'react-native-paper';
// import DrawerScreen from '../Screens/DrawerScreen';
// import {NavigationContainer} from '@react-navigation/native';

const HeaderElement = ({navigation}) => {
  const [search, setSearch] = useState(false);

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left-bold"
        size={30}
        color={'#3CDBC0'}
        onPress={() => {
          navigation.navigate('FirstPage');
        }}
      />
      {search ? (
        <TextInput
          label="search"
          mode="outlined"
          style={{width: '60%', height: 40, marginHorizontal: 10}}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight,
    marginVertical: 10,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textIconStyle: {
    alignContent: 'center',
  },
});

export default HeaderElement;
