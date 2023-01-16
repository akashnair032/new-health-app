/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Portal, Provider, Button, IconButton, Avatar} from 'react-native-paper';
import Modal from 'react-native-modal';
import {SlideInDown, SlideInUp} from 'react-native-reanimated';

const ModalScreen = ({modalVisible, setModalVisible}) => {
  // const [visible, setVisible] = React.useState(false);

  const showModal = () => modalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    bottom: '-30%',
    borderRadius: 20,
  };

  // const toggleModal = () => {
  //   setModalVisible(!modalVisible);
  // };

  return (
    // <Provider>
    //     <Portal>
    //       <Modal visible={modalVisible}
    //                 onDismiss={hideModal}
    //                 dismissable
    //                 contentContainerStyle={containerStyle}>
    //       <View style={{marginVertical: 30}} >

    //         <View style={{marginBottom: 10}} >

    //           <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
    //             Attached Reports
    //           </Text>

    //         </View>
    //         <View style={{}} >
    //           <View style={styles.reportStyle}>
    //             <Avatar.Icon icon='microsoft-word' size={50} color='royalblue' backgroundColor='white' />
    //             <Text style={{fontSize: 20, color: 'black'}}>Report O2.docx</Text>
    //             <IconButton
    //                       icon='download'
    //                       color='#3CDBC0'
    //                       size={28}
    //             />

    //           </View>

    //           <View style={styles.reportStyle}>
    //             <Avatar.Icon icon='microsoft-excel' size={50} color='green' backgroundColor='white' />
    //             <Text style={{fontSize: 20, color: 'black'}}>Report Heart Rate.xls</Text>
    //             <IconButton
    //                         icon='download'
    //                         color='#3CDBC0'
    //                         size={28}
    //               />

    //           </View>

    //           <View style={styles.reportStyle}>
    //             <Avatar.Icon icon='microsoft-powerpoint' size={50} color='red' backgroundColor='white' />
    //             <Text style={{fontSize: 20, color: 'black'}}>Report Heart Rate.ppt</Text>
    //             <IconButton
    //                         icon='download'
    //                         color='#3CDBC0'
    //                         size={28}
    //               />

    //           </View>
    //           <View style={styles.reportStyle}>
    //             <Avatar.Icon icon='text' size={50} color='red' backgroundColor='white' />
    //             <Text style={{fontSize: 20, color: 'black'}} >Report Heart Rate.pdf</Text>
    //               <IconButton
    //                           icon='download'
    //                           color='#3CDBC0'
    //                           size={28}
    //                 />
    //           </View>

    //           <Button mode='contained' labelStyle={{color: 'white'}}
    //                   style={{backgroundColor: '#3CDBC0', borderRadius: 20, marginVertical: 5}}

    //           >
    //                               Download all
    //           </Button>

    //         </View>
    //       </View>
    //       </Modal>
    //     </Portal>
    //     {/* <Button style={{marginTop: 30}} onPress={showModal}>
    //     Show
    //     </Button> */}
    // </Provider>

    // <View style={{ display: 'flex',  }}>
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={400}
      onBackButtonPress={() => {
        setModalVisible(!modalVisible);
      }}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(!modalVisible)}
      style={styles.modalView}>
      <View
        style={{
          flex: 1,
          // marginTop: '75%',
          bottom: '-35%',
          width: '140%',
          backgroundColor: 'white',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#3CDBC0',
          // shadowColor: "#000",
          // shadowOffset: {
          //   width: 0,
          //   height: 2
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 4,
          // elevation: 5
        }}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 50,
            width: 50,
            alignSelf: 'center',
            color: '#3CDBC0',
            marginTop: 10,
          }}
        />
        <View style={{padding: 10}}>
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
              // marginVertical: 10,
              backgroundColor: '#3CDCB0',
              padding: 10,
            }}>
            Download all
          </Button>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

// const styles = StyleSheet.create({
//     containerStyle: {

//     },
//     modalView: {

//     },
//     reportStyle: {
//      display: 'flex',
//      flexDirection: 'row',
//      justifyContent: 'space-between',
//      alignItems: 'center',
//      marginVertical: 8,

//      paddingHorizontal: 10,
//      borderWidth: 1,
//      borderColor: '#3CDBC0',
//      borderRadius: 10,
//      marginVertical: 10

//   }});

const styles = StyleSheet.create({
  centeredView: {
    display: 'flex',
  },
  modalView: {
    // flex: 0.5,
    // margin: 20,
    // backgroundColor: "grey",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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

export default ModalScreen;
