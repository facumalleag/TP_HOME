import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

interface Props extends StackScreenProps<any, any> { }

/* const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);

const _signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    setloggedIn(true);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}; */
GoogleSignin.configure({
  scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

export const LoginGeneralScreen = ({ navigation }: Props) => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Aquí puedes enviar la información del usuario al backend para la autenticación.
      console.log('User Info:', userInfo);
      
      // Luego, puedes redirigir al usuario a la siguiente pantalla o realizar otras acciones según tu lógica.
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // El usuario canceló la autenticación.
        console.log('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.error('Error during Google Sign-In:', error);
      }
    }
  };


  /*   const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setloggedIn(false);
        setuserInfo([]);
      } catch (error) {
        console.error(error);
      }
    }; */

  /*   
    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      });
    }, []); */

  return (

    <View style={styles.root}>
      <Image source={require('../images/logo.png')} style={{ width: 320, height: 230, alignSelf: 'center' }} />
      <Text style={
        {
          color: '#B4CC1E',
          fontFamily: 'Fraunces',
          fontSize: 32,
          top:-100,
          alignSelf: 'center',
        }
      }>MyHome</Text>

    <GoogleSigninButton
        onPress={handleGoogleSignIn}
        style={{
          alignSelf: 'center',
          top: -80,
        }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
       />
      
      <TouchableOpacity
        style={{
          ...styles.area_duenios,
          justifyContent: 'space-evenly',
          alignSelf: 'flex-end',
          top: -8,
          left: -5

        }}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.letra_btn_duenios}>Area Dueños</Text>
      </TouchableOpacity>


    </View>

  );
}