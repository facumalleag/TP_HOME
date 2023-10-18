import React, { useEffect, useContext} from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';


//interface RouteParams{
  //  id:number;
   // nombre:string
//}

//interface Props extends StackScreenProps<any,any>{}
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

export const PersonaScreen = ({route,navigation}:Props) => {
  const {changeUsername} = useContext (AuthContext)
    //console.log(JSON.stringify(props,null,3))
    //const params=route.params as RouteParams

    const params=route.params

    useEffect(() => {
     navigation.setOptions({
        title:params.nombre
     })
    }, [])


    useEffect(() => {
      changeUsername(params.nombre)
     }, [])
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
{
    JSON.stringify(params,null,3)
}

        </Text>
    </View>
  )
}

