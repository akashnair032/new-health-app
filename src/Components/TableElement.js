/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TableElement = ({patient}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        // borderColor: 'grey',
        borderRadius: 10,
        display: 'flex',
        borderColor: '#3CDBC0',
        overflow: 'hidden',
      }}>
      <View
        style={[styles.view, {backgroundColor: '#3CDBC0', overflow: 'hidden'}]}>
        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>Vital</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>Actual Value</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>Standard Value</Text>
        </View>

        <View style={{width: 100, height: 50, padding: 10}}>
          <Text style={styles.text}>Severity</Text>
        </View>
      </View>

      <View style={styles.view}>
        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>O2</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.oxygen}</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>97-100%</Text>
        </View>

        <View style={{width: 100, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.oxygenseverity}</Text>
        </View>
      </View>

      <View style={styles.view}>
        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>Heart Rate</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.heartrate} BPM</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>60-100 BPM</Text>
        </View>

        <View style={{width: 100, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.heartseverity}</Text>
        </View>
      </View>

      <View style={styles.view}>
        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>ECG</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.ecg}</Text>
        </View>

        <View style={{width: 150, height: 50, padding: 10}}>
          <Text style={styles.text}>1435</Text>
        </View>

        <View style={{width: 100, height: 50, padding: 10}}>
          <Text style={styles.text}>{patient.ecgseverity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',

    // justifyContent: 'space-around',
    // alignItems: 'flex-start'
    // padding: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',

    // margin: 10
  },
});

export default TableElement;
