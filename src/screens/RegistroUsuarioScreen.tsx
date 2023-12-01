import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Platform, ScrollView, TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, Alert } from 'react-native';
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
  
  const handleRegistration = async () => {
    console.log("Inicio Registro")
    console.log(form)
  
    // Llamada a la API de registro
    try {
      const response = await fetch('http://18.224.38.52:3000/owner/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreFantasia: form.nombre_inmobiliaria,
          email: form.email,
          password: form.password,
        }),
      });
  
      const data = await response.json();
      console.log(data)
  
      // Puedes agregar lógica adicional según la respuesta de la API
      if (response.ok) {
        // Registro exitoso, navegar a la pantalla de confirmación
        navigation.navigate('ModalScreen', {
          message: 'Se ha enviado un correo para confirmar su registro',
        });
      } else if (response.status === 409) {
        // El correo electrónico ya está registrado
        console.error('Error en la solicitud de registro: El correo electrónico ya está registrado');
        navigation.navigate('ModalScreen', {
          message: 'Mail ya registrado. Pruebe recuperando la contraseña',
        });
        // Aquí puedes mostrar un mensaje de error al usuario si es necesario
      } else {
        // Manejar errores de la API, por ejemplo, mostrar un mensaje de error
        console.error('Error en la solicitud de registro:', data.error);
        // Aquí puedes mostrar un mensaje de error al usuario si es necesario
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al procesar la solicitud de registro:', error);
      // Puedes mostrar un mensaje de error al usuario si es necesario
    }
  };


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
            onChangeText={(value) => onChange(value, 'nombre_inmobiliaria')}
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
            onPress={handleRegistration}>
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