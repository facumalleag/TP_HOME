import React, { useState } from 'react'
import { View, Text, Modal, Alert, Pressable, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { modalStyles } from '../theme/modalStyles';


interface Props extends StackScreenProps<any, any> { }

export const RegisterModal = ({ navigation }: Props) => {
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
            <Text style={modalStyles.modalText}>Se ha enviado un correo para confirmar su registro</Text>
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
