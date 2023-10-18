import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { StackNaviagtor } from '../navigator/StackNavigator';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen Effect');
  }, []) 
  
  return (
    <StackNaviagtor/>
    
  )
}
