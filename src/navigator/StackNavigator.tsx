import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '../screens/LandingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { LoginGeneralScreen } from '../screens/LoginGeneralScreen';
import { RecuperoPwdScreen } from '../screens/RecuperoPwdScreen';
import { HomePageDueniosScreen } from '../screens/HomePageDueniosScreen';
import { RegistroUsuarioScreen } from '../screens/RegistroUsuarioScreen';
import { ModalScreen } from '../Modal/ModalScreen';

export type RootStackParams = {
  LandingScreen: undefined,
  LoginScreen: undefined,
  LoginGeneralScreen: undefined,
  RecuperoPwdScreen: undefined,
  HomePageDueniosScreen:undefined,
  RegistroUsuarioScreen:undefined,
  ModalScreen:undefined,
  RegisterModal: undefined,
  PersonaScreen: {id:number, nombre:string},
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
     {/*  <Stack.Screen name="Pagina1Screen" options={{title:"Página 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Página 3"}} component={Pagina3Screen} />
    <Stack.Screen name="PersonaScreen" component={PersonaScreen} />*/}
      <Stack.Screen name="LandingScreen"  component={LandingScreen} />
      <Stack.Screen name="LoginScreen"  component={LoginScreen} />
      <Stack.Screen name="LoginGeneralScreen"  component={LoginGeneralScreen} />
      <Stack.Screen name="RecuperoPwdScreen" component={RecuperoPwdScreen} /> 
      <Stack.Screen name="HomePageDueniosScreen"  component={HomePageDueniosScreen} />
      <Stack.Screen name="RegistroUsuarioScreen"  component={RegistroUsuarioScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen}/>
    </Stack.Navigator>
  );
}