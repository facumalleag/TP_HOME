import React,{useContext} from 'react'
import { Text, View } from "react-native"
import { styles } from '../theme/appTheme'
import { Button } from 'react-native'
import { AuthContext, AuthState } from '../context/AuthContext';

export const ContactsScreen = () => {
  
const {signIn,authState:{isLoggedIn}} = useContext (AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen</Text>

{
  !isLoggedIn ? <Button    title='SignIn'    onPress={signIn} /> : null
}
    </View>
  )
}