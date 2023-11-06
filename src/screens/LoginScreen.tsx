import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react'
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

  const [isEmpty,setIsEmpty] = useState(false)

  const onChange = (value: string, field: string) => {
    if(value==''|| value.length==0){
      setIsEmpty(true)
    }
    setForm({
      ...form,
      [field]: value
    })
  } 

  const password:any = useRef();

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
            Ingresá Acá
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
            onFocus={()=>setIsEmpty(!isEmpty)
            }
            returnKeyType = {"next"}
            onSubmitEditing={() => {
              password.current.focus();
            }}
          />
      {isEmpty?
        (<Text style={{
          fontSize: 15,
          color: 'red',
          marginLeft:10,
          fontWeight:'bold'
        }}>Campo obligatorio</Text>)
        :
        null
      }  
          <TextInput
            style={{
              ...styles.input,
            }}
            onChangeText={(value) => onChange(value, 'password')}
            placeholder="Contraseña"
            autoCorrect={false}
            returnKeyType = {"done"}
            onFocus={()=>setIsEmpty(!isEmpty)
            }
            secureTextEntry={true}
            ref={password}
          />
{isEmpty?
        (<Text style={{
          fontSize: 15,
          color: 'red',
          marginLeft:10,
          fontWeight:'bold'
        }}>Campo obligatorio</Text>)
        :
        null
      }  
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
            onPress={() => {
              navigation.navigate('HomePageDueniosScreen')}}>
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