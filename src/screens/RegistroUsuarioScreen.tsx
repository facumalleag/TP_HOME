import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Platform, ScrollView, TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';


interface Props extends StackScreenProps<any, any> { }



export const RegistroUsuarioScreen = ({ navigation }: Props) => {

  const [form, setForm] = useState({
    nombre_inmobiliaria: '',
    email: '',
    password: ''
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

  const email:any = useRef();
  const password:any = useRef();
  
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View>
        <Image source={require('../images/logo.png')} style={{ width: 150, height: 100, alignSelf: 'center' }} />
          <Text style={{
            ...styles.myHome,
            alignSelf: 'center',
          }} >
            MyHome
          </Text>
          <Text style={{
            color: '#1F4C6B',
            fontSize: 30,
            fontWeight: 'bold',
            margin: 10
          }}>
            Registro
          </Text>
          <TextInput
            style={{
              ...styles.registro_input,
            }}
            onChangeText={(value) => onChange(value, 'email')}
            placeholder='Nombre Inmobiliaria'
            autoCorrect={false}
            returnKeyType = {"next"}
            onFocus={()=>setIsEmpty(!isEmpty)
            }
            autoCapitalize='none'
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
              ...styles.registro_input,
            }}
            ref={password}
            onChangeText={(value) => onChange(value, 'password')}
            autoCorrect={false}
            placeholder="Contraseña"
            returnKeyType = {"next"}
            onFocus={()=>setIsEmpty(!isEmpty)
            }
            secureTextEntry={true}
            onSubmitEditing={() => {
              email.current.focus();
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
              ...styles.registro_input,
            }}
            ref={email}
            onChangeText={(value) => onChange(value, 'email')}
            placeholder='Email'
            autoCorrect={false}
            keyboardType='email-address'
            onFocus={()=>setIsEmpty(!isEmpty)
            }
            autoCapitalize='none'
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ModalScreen',{
              message:'Se ha enviado un correo para confirmar su registro'})
              }
              >
            <Text
              style={{
                ...styles.registrobtn,
              }}
            >
              Resgistrarse
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}