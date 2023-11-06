import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import {  TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })

  } 

  return (
 
        <View style={styles.root}>
          <Image source={require('../images/logo.png')} style={{ width: 150, height: 100, alignSelf: 'center' }} />
          <Text style={{
            ...styles.myHome,
            alignSelf: 'center',
          }}>
            MyHome
          </Text>

          <Text style={{
            color: '#1F4C6B',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
            Logueate Acá
          </Text>
          <TextInput
            style={{
              ...styles.input,
            }}
            onChangeText={(value) => onChange(value, 'email')}
            placeholder='Email'
            autoCorrect={false}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <TextInput
            style={{
              ...styles.input,
            }}
            onChangeText={(value) => onChange(value, 'password')}
            placeholder="Contraseña"
            autoCorrect={false}
            secureTextEntry={true}

          />
          <View style={styles.root}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('RecuperoPwdScreen') }}>
            <Text
              style={{
                color: '#1F4C6B',
                fontSize: 15,
                fontWeight: 'bold',
                alignSelf: 'center',
                padding:10
              }}

            >
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

           
          <TouchableOpacity
            onPress={() => { navigation.navigate('HomePageDueniosScreen') }}>
            <Text
              style={{
                ...styles.loginbtn,
              }}
            >
              Ingresar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('RegistroUsuarioScreen') }}>
            <Text
              style={{
                color: '#1F4C6B',
                fontSize: 15,
                alignSelf: 'center',
                fontWeight: 'bold',
                padding:30
              }}

            >
              ¿Todavía no estás registrado? Registrate
            </Text>
          </TouchableOpacity>
          </View>

        </View>



  );
}