/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Modal} from 'react-native';
import React from 'react';
import {Button, IconButton, Avatar} from 'react-native-paper';

const DownloadModalScreen = ({modalVisible, setModalVisible}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modalView}
        onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            // marginTop: '75%',
            bottom: '-44%',
            backgroundColor: 'white',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#3CDBC0',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <View style={{margin: 5}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black',
              }}>
              Attached Reports
            </Text>
          </View>
          <View style={{margin: 10}}>
            <View style={styles.reportStyle}>
              <Avatar.Icon
                icon="microsoft-word"
                size={50}
                color="royalblue"
                backgroundColor="white"
              />
              <Text style={{fontSize: 20, color: 'black'}}>Report O2.docx</Text>
              <IconButton icon="download" color="#3CDBC0" size={28} />
            </View>

            <View style={styles.reportStyle}>
              <Avatar.Icon
                icon="microsoft-excel"
                size={50}
                color="green"
                backgroundColor="white"
              />
              <Text style={{fontSize: 20, color: 'black'}}>
                Report Heart Rate.xls
              </Text>
              <IconButton icon="download" color="#3CDBC0" size={28} />
            </View>

            <View style={styles.reportStyle}>
              <Avatar.Icon
                icon="microsoft-powerpoint"
                size={50}
                color="red"
                backgroundColor="white"
              />
              <Text style={{fontSize: 20, color: 'black'}}>
                Report Heart Rate.ppt
              </Text>
              <IconButton icon="download" color="#3CDBC0" size={28} />
            </View>
            <View style={styles.reportStyle}>
              <Avatar.Icon
                icon="text"
                size={50}
                color="red"
                backgroundColor="white"
              />
              <Text style={{fontSize: 20, color: 'black'}}>
                Report Heart Rate.pdf
              </Text>
              <IconButton icon="download" color="#3CDBC0" size={28} />
            </View>

            <Button
              mode="contained"
              labelStyle={{color: 'white'}}
              style={{
                borderRadius: 10,
                marginVertical: 10,
                backgroundColor: '#3CDCB0',
                padding: 10,
              }}>
              Download all
            </Button>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    // flex: 0.5,
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  reportStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3CDBC0',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default DownloadModalScreen;
