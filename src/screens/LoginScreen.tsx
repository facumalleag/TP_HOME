import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import {  TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';


const imagen_logo = 'https://s3-alpha-sig.figma.com/img/56a7/88d7/dc8cddbcd3f59dd1009c5ca4be9c6e26?Expires=1698624000&Signature=idOu0jGqZSLuV6jlftjkc-QzRh39W7~RfF5g9xBKZiw3r4Jeo0EtD~G0VajA0wb3b7HKpjChnocNeptkKVBPIagTDYhn9zFd0mZelSIlPN7GmFS9vKXsH0D5pyRcZVONCYuUKwVijJr~IRZrvXyWFQJpQqkgS5s7suuqVc5KzVctf~-bIS~mYs3UKBx4WJFbDy~-DdbG9tFYy0yErCp4nXTI1gdxyTBMZuOt~eJuVydaWv1czgzzwaIWzigirDOy0XVfN-BaAApQ2uxfl0EnqLfR1IK2V~qn8g-pNTT3i7dZghPceYxe6hoA3Bn3-Accq-PyEXMi6E6EklHgnRDTnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

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
          <Image source={{ uri: imagen_logo }} style={{ width: 150, height: 100, alignSelf: 'center' }} />
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