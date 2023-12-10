import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    androidClientId: '472973832447-jhf4qp6v4n8tcbl9skaq8i4gmo4d9bek.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });
};