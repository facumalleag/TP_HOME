import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { colors, styles } from '../theme/appTheme';


//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        <TouchableOpacity
          style={{
            marginLeft: 10
          }}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name='grid-outline' size={35} color={colors.primary}
          />

      </TouchableOpacity>
      

      /* <Button
        title="Menu"
        
        onPress={() => navigation.toggleDrawer }
      /> */


    })
  }, [])



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title='Ir pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
      }}>Navegar con Argumentos</Text>
      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
        
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name='man-outline' size={35} color='white'
          />
          <Text style={styles.botongrandeTexto}>Pedro</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
           <Icon name='woman-outline' size={35} color='white'/>
          <Text style={styles.botongrandeTexto}>Maria</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name='hammer-outline' size={35} color={colors.primary}
          />

      </TouchableOpacity>
      </View>
    </View>
  )
}