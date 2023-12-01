import React, { useEffect, useState } from 'react'
import { View, Text, Modal, Alert, Pressable, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { modalStyles } from '../theme/modalStyles';
import { RootStackParams } from '../navigator/StackNavigator';

interface PropsMsg{
  message:string
}


interface Props extends StackScreenProps<any, any> { }

export const ModalScreen = ({ navigation,route }: Props) => {
const msg=route.params as PropsMsg
const [modalVisible, setModalVisible] = useState(true);

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>
              {msg.message}
            </Text>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={modalStyles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
