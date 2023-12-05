import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAog6AdGizbyv7lBlDCiEoLkt1UlAMz7is',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'myhome-distribuidas',
  storageBucket: 'gs://myhome-distribuidas.appspot.com',
  messagingSenderId: '425830167483',
  appId: '1:425830167483:android:b1b7138901b19662654a9e',
};

const app = firebase.initializeApp(firebaseConfig);

// Inicializar Firebase Auth y Storage
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, auth, storage };


// GoogleSignin.configure({
//   scopes: ['email'],
//   webClientId: '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com',
//   offlineAccess: true,
// });