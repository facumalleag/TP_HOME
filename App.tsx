import { NavigationContainer } from '@react-navigation/native';

import React, { useEffect, useState } from "react"
import { AuthProvider } from "./src/context/AuthContext"
import { StackNaviagtor } from './src/navigator/StackNavigator';
import { HomePageDueniosScreen } from './src/screens/HomePageDueniosScreen';

const App = () => {
  
  return (
    <NavigationContainer >
      <AppState>
        <StackNaviagtor/>
      </AppState>
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