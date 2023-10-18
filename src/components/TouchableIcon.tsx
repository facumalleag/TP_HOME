import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface Props{
    iconName:string,
}

 const TouchableIcon = ({iconName}:Props) => {


  const {changeFavortiteIcon} = useContext(AuthContext)
  return (
    <TouchableOpacity
    onPress={()=>changeFavortiteIcon(iconName)}
    >
         <Icon name={iconName}
         size={80} 
         color={colors.primary} />
    </TouchableOpacity>
  )
}

export default TouchableIcon
