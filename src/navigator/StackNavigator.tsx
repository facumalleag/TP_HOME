import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '../screens/LandingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { LoginGeneralScreen } from '../screens/LoginGeneralScreen';
import { RecuperoPwdScreen } from '../screens/RecuperoPwdScreen';
import { HomePageDueniosScreen } from '../screens/HomePageDueniosScreen';
import { RegistroUsuarioScreen } from '../screens/RegistroUsuarioScreen';
import { ModalScreen } from '../Modal/ModalScreen';
import { PropiedadDetails } from '../screens/PropiedadDetails';
import { PropiedadSimple } from '../interfaces/propiedadInterfaces';
import { ComentariosParaDuenios } from '../screens/ComentariosParaDuenios';
import  OwnerVisitScreen  from '../screens/OwnerVisitScreen';



export type RootStackParams = {
  /* LandingScreen: undefined, */
  LoginScreen: undefined,
  LoginGeneralScreen: undefined,
  RecuperoPwdScreen: undefined,
  HomePageDueniosScreen:undefined,
  RegistroUsuarioScreen:undefined,
  ModalScreen:undefined,
  RegisterModal: undefined,
  PropiedadDetails:PropiedadSimple,
  ComentariosParaDuenios:undefined,
  OwnerVisitScreen:undefined,
  Prueba:undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNaviagtor=() =>{
  return (
    <Stack.Navigator
      //initialRouteName='LandingScreen'
      screenOptions={{
        headerShown:false,
        headerStyle:{
          elevation:0,
          shadowColor:'transparent'
        },
        cardStyle:{
          backgroundColor:'#E5EDDA'
        }
      }}
    >
     {/*  <Stack.Screen name="LandingScreen"  component={LandingScreen} /> */}
     <Stack.Screen name="LoginGeneralScreen"  component={LoginGeneralScreen} />
      <Stack.Screen name="LoginScreen"  component={LoginScreen} />
      <Stack.Screen name="RecuperoPwdScreen" component={RecuperoPwdScreen} /> 
      <Stack.Screen name="HomePageDueniosScreen"  component={HomePageDueniosScreen} />
      <Stack.Screen name="RegistroUsuarioScreen"  component={RegistroUsuarioScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen}/>
      <Stack.Screen name="PropiedadDetails" component={PropiedadDetails}/>
      <Stack.Screen name="ComentariosParaDuenios" component={ComentariosParaDuenios}/>
      <Stack.Screen name="OwnerVisitScreen" component={OwnerVisitScreen}/>

    </Stack.Navigator>
  );
}