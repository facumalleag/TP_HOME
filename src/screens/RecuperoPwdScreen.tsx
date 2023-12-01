import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { TextInput, View , Alert} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';


const imagen_logo = 'https://s3-alpha-sig.figma.com/img/56a7/88d7/dc8cddbcd3f59dd1009c5ca4be9c6e26?Expires=1698624000&Signature=idOu0jGqZSLuV6jlftjkc-QzRh39W7~RfF5g9xBKZiw3r4Jeo0EtD~G0VajA0wb3b7HKpjChnocNeptkKVBPIagTDYhn9zFd0mZelSIlPN7GmFS9vKXsH0D5pyRcZVONCYuUKwVijJr~IRZrvXyWFQJpQqkgS5s7suuqVc5KzVctf~-bIS~mYs3UKBx4WJFbDy~-DdbG9tFYy0yErCp4nXTI1gdxyTBMZuOt~eJuVydaWv1czgzzwaIWzigirDOy0XVfN-BaAApQ2uxfl0EnqLfR1IK2V~qn8g-pNTT3i7dZghPceYxe6hoA3Bn3-Accq-PyEXMi6E6EklHgnRDTnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

interface Props extends StackScreenProps<any, any> { }


export const RecuperoPwdScreen = ({ navigation }: Props) => {

  const [form, setForm] = useState({
    email: '',
  });
  const [isEmpty,setIsEmpty] = useState(false)

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })

  }
  const handlePasswordRecovery = async () => {
    console.log("Inicio recupero pass " + form.email)
    // Verificar si el campo de correo electrónico está vacío
    if (form.email === '') {
      setIsEmpty(true);
      return;
    }

    try {
      // Realizar la solicitud a la API de recuperación de contraseña
      const response = await fetch('http://18.224.38.52:3000/owner/recover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
        }),
      });

      // Verificar el estado de la respuesta
      if (response.ok) {
        // Manejar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito
        navigation.navigate('ModalScreen', {
          message: 'Se ha enviado un correo electrónico para restablecer la contraseña',
        });
      } else {
        // Manejar errores de recuperación de contraseña
        navigation.navigate('ModalScreen', {
          message: 'No se pudo enviar el correo electrónico de recuperación de contraseña',
        });
      }
    } catch (error) {
      console.error('Error en la solicitud de recuperación de contraseña:', error);
    }
  };
  return (
        <View>
          <Image source={{ uri: imagen_logo }} style={{ width: 150, height: 100, alignSelf: 'center' }} />
          <Text style={{
            ...styles.myHome,
            alignSelf: 'center',
          }} >
            MyHome
          </Text>
          <Text style={{
            color: '#1F4C6B',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
            Recupero de Contraseña
          </Text>
          <TextInput
            style={{
              ...styles.input,
              bottom:-10
            }}
            
            onChangeText={(value) => onChange(value, 'email')}
            placeholder='Email'
            autoCorrect={false}
            keyboardType='email-address'
            autoCapitalize='none'
          />


          <TouchableOpacity
            onPress={handlePasswordRecovery}>
            <Text
              style={{
                ...styles.registrobtn,
                bottom:-50
              }}
            >
              Recuperar
            </Text>
          </TouchableOpacity>

        </View>


  );
}