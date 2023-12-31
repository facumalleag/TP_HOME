import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StackNaviagtor } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppState>
        <StackNaviagtor />
      </AppState>
    </NavigationContainer>
  );
}



export default App