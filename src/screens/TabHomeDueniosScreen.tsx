import React, { useContext } from 'react'
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { PropiedadFirstView } from './PropiedadFirstView';
import { useImageLogo } from '../hooks/useImageLogo';
import { AuthContext } from '../context/AuthContext'

const logo=useImageLogo();

export const TabHomeDueniosScreen = () => {
  const { authState } = useContext(AuthContext);
  return (
   
    <View>
    {logo}

    <Text style={{
      color: '#1F4C6B',
      fontSize: 20,
      padding:5,
      fontWeight: 'bold',
    }}>
      Bienvenido {authState.username}
    </Text>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',

    }}>
      <TouchableOpacity
        style={[
          {
            width: 205,
            height: 40,
            flexShrink: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: '#099A97',
            borderStyle: 'solid',
          },
          ,
        ]}
        onPress={() => {
          Alert.alert('Left button pressed')
        }}>
        <Text style={{ color: '#6A6A77', textAlign: 'center', }}>
          Ventas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 205,
          height: 40,
          flexShrink: 0,
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 0,
          borderWidth: 1,
          borderColor: '#099A97',
          borderStyle: 'solid',
          backgroundColor: '#099A97',
        }}
        onPress={() => Alert.alert('Right button pressed')}

      >
        <Text style={{ color: 'white', textAlign: 'center', }}>
          Alquiler
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{
      flexDirection: 'row',
      top:20,
      justifyContent: 'space-evenly',

    }}>
      <TouchableOpacity
        style={[
          {
            width: 205,
            height: 40,
            flexShrink: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 10,
            borderWidth: 1,
            padding: 10,
            borderColor: '#099A97',
            borderStyle: 'solid',
          },
          ,
        ]}
        onPress={() => Alert.alert('Left button pressed')}>
        <Text style={{ color: '#6A6A77', textAlign: 'center', }}>
          En Venta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 205,
          height: 40,
          flexShrink: 0,
          padding: 10,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 0,
          borderWidth: 1,
          borderColor: '#099A97',
          borderStyle: 'solid',
          backgroundColor: '#099A97',
        }}
        onPress={() => Alert.alert('Right button pressed')}
      >
        <Text style={{ color: 'white', textAlign: 'center', }}>
          Vendidos
        </Text>
      </TouchableOpacity>
      
    </View>
    
    <PropiedadFirstView/>

    </View>
  )
}
