/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';

const Login = ({setIsSigned, navigation}) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState();
  const [password, setPassword] = useState();
  const [signedin, setSignedin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'royalblue'}}>
          Sensor<Text style={{color: 'orange'}}>LifeLine</Text>
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          outlineColor="#ffffff"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.textinput}
          label="Unique ID"
          activeOutlineColor="#3CDBC0"
        />

        {show === false ? (
          <TextInput
            mode="outlined"
            outlineColor="#ffffff"
            value={password}
            onChangeText={password => setPassword(password)}
            style={styles.textinput}
            label="Password"
            activeOutlineColor="#3CDBC0"
            autoCorrect={false}
            secureTextEntry
            right={
              show === false ? (
                <TextInput.Icon
                  icon="eye"
                  size={30}
                  csolor="#3CDBC0"
                  onPress={() => {
                    setShow(true);
                  }}
                />
              ) : (
                <TextInput.Icon
                  icon="close"
                  size={30}
                  color="#3CDBC0"
                  style={{color: '#3CDBC0'}}
                  onPress={() => {
                    setShow(false);
                  }}
                />
              )
            }
          />
        ) : (
          <TextInput
            mode="outlined"
            style={styles.textinput}
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
            outlineColor="#ffffff"
            activeOutlineColor="#3CDBC0"
            autoCorrect={false}
            right={
              show === false ? (
                <TextInput.Icon
                  icon="eye"
                  size={30}
                  color="#3CDBC0"
                  onPress={() => {
                    setShow(true);
                  }}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  size={30}
                  color="#3CDBC0"
                  onPress={() => {
                    setShow(false);
                  }}
                />
              )
            }
          />
        )}
      </View>

      <View style={{display: 'flex', alignItems: 'flex-end', marginBottom: 32}}>
        <Pressable
          style={{alignItems: 'flex-end', display: 'flex'}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{fontSize: 16, color: '#3CDBC0', fontWeight: 'bold'}}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      <Button
        // icon="camera"
        mode="contained"
        // color="#3CDBC0"
        style={{
          borderRadius: 10,
          paddingVertical: 5,
          marginVertical: 16,
          backgroundColor: '#3CDBC0',
        }}
        onPress={() => {
          navigation.navigate('DrawerNavigation');
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
      </Button>

      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        or
      </Text>

      <Button
        // icon="camera"
        mode="contained"
        style={{
          borderRadius: 10,
          paddingVertical: 5,
          marginVertical: 16,
          backgroundColor: 'white',
          borderColor: '#3CDBC0',
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate('RegisterNow');
        }}>
        <Text style={{color: '#3CDBC0', fontWeight: 'bold'}}>Register Now</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  textinput: {
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 10,
  },
  inputcontainer: {
    width: '100%',
    marginTop: 30,
  },
});

export default Login;
