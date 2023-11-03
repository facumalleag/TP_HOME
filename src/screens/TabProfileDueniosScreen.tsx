import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import { useImageLogo } from '../hooks/useImageLogo';
import { TouchableIcon } from '../components/TouchableIcon';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const TabProfileDueniosScreen = ({ navigation }: Props) => {
  const logo = useImageLogo();

  return (

    <View
      style={{
        flex: 1
      }}
    >
      {logo}
      <View style={styles.container
      }>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Ventas
          </Text>

          <Text style={styles.value}>313</Text>

        </View>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Alquileres
          </Text>

          <Text style={styles.value}>1050</Text>

        </View>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Llamadas
          </Text>

          <Text style={styles.value}>5822</Text>

        </View>

      </View>
      <View
        style={styles.containerStar}>
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
      </View>
      <View
        style={styles.containerStar}>
        <TouchableOpacity
          style={styles.comments}
          onPress={() => navigation.navigate('ComentariosParaDuenios')}>
          <Text
            style={{
              fontSize: 15,
              alignSelf: 'center',
            }}
          >Ver Comentarios</Text>

        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.dataProfile}>
          <Icon name='person-circle-outline'
            size={25}
            color='#1F4C6B'
            style={{
              bottom: -20,
              left: 10,
              position: 'relative',
            }
            }
          />

          <Text style={styles.textDatos}>Remax</Text>
        </View>

        <View style={styles.dataProfile}>
          <Icon name='mail-outline'
            size={25}
            color='#1F4C6B'
            style={{
              bottom: -20,
              left: 10,
              position: 'relative'
            }
            }
          />

          <Text style={styles.textDatos}>Email Contacto</Text>
        </View>

        <View style={styles.dataProfile}>
          <Icon name='mail-outline'
            size={25}
            color='#1F4C6B'
            style={{
              bottom: -20,
              left: 10,
              position: 'relative'
            }
            }
          />

          <Text style={styles.textDatos}>Email Login</Text>
        </View>

        <View style={styles.dataProfile}>
          <Icon name='call-outline'
            size={25}
            color='#1F4C6B'
            style={{
              bottom: -20,
              left: 10,
              position: 'relative'
            }
            }
          />

          <Text style={styles.textDatos}>Telefono de Contacto</Text>
        </View>

        <TouchableOpacity style={{
          alignSelf: 'center',
          margin: 30,
          width: 200,
          height: 50,
          alignContent: 'center',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#099A97',
        }}>
          <Text style={{
            color: '#099A97',
            textAlign: 'center',
            padding: 10,
            fontSize: 16
          }}>Modificar</Text>

        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }
          }>
          <TouchableOpacity 
          onPress={() => Alert.alert('¿Quiere Cerrar Sesión?','', [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')}
          ])}
          style={{
            margin: 10,
            width: 150,
            height: 40,
            alignContent: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#6C63FF',
          }}>
            <Text style={{
              color: '#6C63FF',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              width: 147,
              height: 35,
            }}>Cerrar Sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => Alert.alert('¿Quiere dar de Baja su cuenta?','', [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])}
           style={styles.botonCierre}>
            <Text style={styles.cerrarCuenta}>Baja de Cuenta</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20,
  },
  containerStar: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10
  },
  indicatorBlock: {
    width: 100,
    height: 100,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    alignContent: 'center',
    borderColor: '#B5CC2B',
  },
  titleIndicator: {
    width: 90,
    marginTop: 5,
    alignSelf: 'center',
    color: '#6A6A77',
    textAlign: 'center',
    fontFamily: 'Fraunces',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  comments: {
    width: 200,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#B5CC2B',
    marginBottom: 20
  },
  value: {
    width: 100,
    color: '#6A6A77',
    textAlign: 'center',
    fontFamily: 'Fraunces',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  dataProfile: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    width: 290,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
  },
  textDatos: {
    height: 42,
    color: '#6A6A77',
    textAlign: 'center',
    fontSize: 14,
  },
  botonCierre: {
    margin: 10,
    width: 150,
    height: 40,
    alignContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF6584',
  },
  cerrarCuenta: {
    width: 147,
    height: 35,
    color: '#FF6584',
    textAlign: 'center',
    fontSize: 15,
    padding: 5
  },

});
