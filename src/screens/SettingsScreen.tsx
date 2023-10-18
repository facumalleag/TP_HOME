import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<any, any> { }

export const SettingsScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets()

  const { authState } = useContext(AuthContext)


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
      <Text style={styles.title}>Screen Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

{
  authState.favoriteIcon!==undefined? 
  <Icon
        name={authState.favoriteIcon}
        size={50}
        color={colors.primary}
      />
      :
      null
}
    </View>
  )
}
