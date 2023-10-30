import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'

interface Props{
    iconName:string,
}

 export const TouchableIcon = ({iconName}:Props) => {


  //const {changeFavortiteIcon} = useContext(AuthContext)
  return (
    <TouchableOpacity
    /* onPress={()=>changeFavortiteIcon(iconName)} */
    >
         <Icon name={iconName}
         size={40} 
         color='#FABF35'
         />
    </TouchableOpacity>
  )
}