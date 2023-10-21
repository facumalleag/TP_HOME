import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { LandingScreen } from '../screens/LandingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { LoginGeneralScreen } from '../screens/LoginGeneralScreen';

export type RootStackParams = {
  LandingScreen: undefined,
  LoginScreen: undefined,
  LoginGeneralScreen: undefined,
  PersonaScreen: {id:number, nombre:string},
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNaviagtor=() =>{
  return (
    <Stack.Navigator
      //initialRouteName='Pagina3Screen'
      screenOptions={{
        headerShown:false,
        headerStyle:{
          elevation:0,
          shadowColor:'transparent'
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
     {/*  <Stack.Screen name="Pagina1Screen" options={{title:"Página 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Página 3"}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} /> */}
      <Stack.Screen name="LandingScreen"  component={LandingScreen} />
      <Stack.Screen name="LoginScreen"  component={LoginScreen} />
      <Stack.Screen name="LoginGeneralScreen"  component={LoginGeneralScreen} />

    </Stack.Navigator>
  );
}