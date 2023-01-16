/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Avatar, TextInput, Button, IconButton} from 'react-native-paper';
import VitalValuesPage from './VitalValuesPage';
import DownloadModalScreen from './DownloadModalScreen';
import ModalScreen from './ModalScreen';
import HeaderElement from '../Components/HeaderElement';

const patient = {
  id: '1',
  name: 'Akash Nair',
  image: '',
  patientId: '1234567',
  age: '21',
  gender: 'Male',
  weight: '60',
  bloodgroup: 'O +ve',
  oxygen: '97',
  oxygenseverity: 'Low',
  heartrate: 120,
  heartseverity: 'High',
  ecg: 1560,
  ecgseverity: 'High',
  date: '11/11/2022',
  time: '09:30 A.M',
  patientsInitialSymptoms: {
    one: 'Chest Pain',
    two: 'Severe Pain',
  },
  PocdAnalysis: {
    one: 'As per the vitals recorded on 14/08/2022 at 6:00 pm. Jame seems to suffer from anxiety/hypertension',
    two: 'Suggested Medication: Approx. 0-2ml',
  },
};

const PatientProfile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const image = {
    uri: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} style={{}}>
        <View style={{}}>
          {/* <HeaderElement navigation={navigation} /> */}
          <View style={{height: 200}}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={{flex: 1, justifyContent: 'center', position: 'relative'}}>
              <IconButton
                icon="arrow-left-thick"
                size={20}
                mode="outlined"
                // color="#3CDBC0"
                onPress={() => navigation.navigate('FirstPage')}
                style={{bottom: 50, color: 'white'}}
              />
              <Image
                source={require('../Assets/brock-lesnar-ufc-4_feature.webp')}
                style={styles.avatar}
              />
            </ImageBackground>
          </View>

          {/* <View style={styles.avatar} >
            
                <Avatar.Image
                    
                    size={150} 
                    source={require('../Assets/brock-lesnar-ufc-4_feature.webp')} />
        </View> */}

          <TextInput
            mode="outlined"
            label="Patient Name"
            activeOutlineColor="#3CDBC0"
            value={patient.name}
            outlineColor="#ffffff"
            disabled
            // selectionColor='#3CDBC0'
            style={{marginVertical: 8, marginTop: 50, marginHorizontal: 16}}
          />
          <TextInput
            mode="outlined"
            label="Patient ID"
            value={patient.patientId}
            disabled
            activeOutlineColor="#3CDBC0"
            outlineColor="#ffffff"
            style={{marginVertical: 8, marginHorizontal: 16}}
          />

          {/* <Text style={styles.textStyle} >Name: {patient.name} </Text>
        <Text style={styles.textStyle} >Patient ID: {patient.patientId}</Text> */}

          <View style={styles.row}>
            <TextInput
              style={{width: '48%'}}
              mode="outlined"
              label="Age"
              value={patient.age}
              disabled
              activeOutlineColor="#3CDBC0"
              outlineColor="#ffffff"
            />

            <TextInput
              style={{width: '48%'}}
              mode="outlined"
              label="Gender"
              value={patient.gender}
              disabled
              activeOutlineColor="#3CDBC0"
              outlineColor="#ffffff"
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={{width: '48%'}}
              mode="outlined"
              label="Weight"
              value={patient.weight}
              disabled
              activeOutlineColor="#3CDBC0"
              outlineColor="#ffffff"
            />

            <TextInput
              style={{width: '48%'}}
              mode="outlined"
              label="Blood Group"
              value={patient.bloodgroup}
              disabled
              activeOutlineColor="#3CDBC0"
              outlineColor="#ffffff"
            />
          </View>

          {/* <Pressable style={styles.vitalvalues} onPress={()=> {}} >
           
            <Icon name='chart-line' size={40} color="#3CDBC0" style={{alignSelf: 'center'}} />           
            
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center'}}>Vital Values and Analysis...</Text>
        </Pressable> */}

          <VitalValuesPage
            patient={patient}
            patientsInitialSymptoms={patient.patientsInitialSymptoms}
            pocd={patient.PocdAnalysis}
          />

          <Button
            icon="file"
            mode="contained"
            labelStyle={{color: '#3CDBC0'}}
            style={{
              backgroundColor: '#ffffff',
              // marginVertical: 10,
              marginTop: 20,
              marginBottom: 10,
              paddingVertical: 10,
              borderWidth: 0.8,
              borderColor: 'lightgrey',
              borderRadius: 10,
              marginHorizontal: 16,
            }}
            onPress={() => {
              styles.container.backgroundColor = 'grey';
              setModalVisible(true);
            }}>
            Download Attached Reports
          </Button>
          {modalVisible ? (
            <ModalScreen
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#ffffff',
    // padding: 16
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginHorizontal: 16,
  },
  avatar: {
    // display: 'flex',
    // alignItems: 'center',
    // margin: 10

    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 4,
    alignSelf: 'center',
    bottom: -50,
  },
  vitalvalues: {
    display: 'flex',
    flexDirection: 'column',

    borderWidth: 1,
    width: '50%',
    height: 150,
    borderRadius: 20,
    marginTop: 16,
    marginHorizontal: 16,
  },

  textStyle: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: '#3CDBC0',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default PatientProfile;
