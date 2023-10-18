import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNaviagtor } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native'

const Drawer = createDrawerNavigator();

export const  MenuLateral= () =>{
const {width}=useWindowDimensions()

  return (
    <Drawer.Navigator
      //drawerType={width>=768 ? 'permanent' :'front'}
    >
      <Drawer.Screen name="StackNavigator" component={StackNaviagtor} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}