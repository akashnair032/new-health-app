/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import TableElement from '../Components/TableElement';

const VitalValuesPage = ({patientsInitialSymptoms, pocd, patient}) => {
  return (
    <SafeAreaView style={{marginHorizontal: 16}}>
      <View style={{marginTop: 20, marginBottom: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          PATIENT'S VITALS
        </Text>
        <Text style={{fontSize: 16}}>
          {patient.date} {patient.time}
        </Text>
      </View>

      <ScrollView horizontal={true}>
        <TableElement patient={patient} />
      </ScrollView>

      <View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          PATIENT'S INITIAL SYMPTOMS
        </Text>
        <View>
          <Text style={{fontSize: 16, marginBottom: 5}}>
            {'\u2022'} {patientsInitialSymptoms.one}{' '}
          </Text>
          <Text style={{fontSize: 16}}>
            {'\u2022'} {patientsInitialSymptoms.two}{' '}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          POCD ANALYSIS
        </Text>
        <View>
          <Text style={{fontSize: 16, marginBottom: 5, textAlign: 'justify'}}>
            {'\u2022'} {pocd.one}{' '}
          </Text>
          <Text style={{fontSize: 16, marginBottom: 5, textAlign: 'justify'}}>
            {'\u2022'} {pocd.two}{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VitalValuesPage;
