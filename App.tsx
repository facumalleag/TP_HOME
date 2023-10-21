import { NavigationContainer } from '@react-navigation/native';

import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { AuthProvider } from "./src/context/AuthContext"
import { LandingScreen } from "./src/screens/LandingScreen"
import { LoginScreen } from "./src/screens/loginScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNaviagtor } from './src/navigator/StackNavigator';

const App = () => {
  
  return (
    <NavigationContainer >
      <StackNaviagtor>
      </StackNaviagtor>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App