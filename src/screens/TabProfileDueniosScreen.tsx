import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useImageLogo } from '../hooks/useImageLogo';
import { TouchableIcon } from '../components/TouchableIcon';


export const TabProfileDueniosScreen = () => {
  const logo = useImageLogo();
  const { top } = useSafeAreaInsets();

  return (

    <View>
      {logo}
      <View style={styles.container
      }>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Ventas
          </Text>

          <Text style={styles.value}>313</Text>

        </View>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Alquileres
          </Text>

          <Text style={styles.value}>1050</Text>

        </View>

        <View style={styles.indicatorBlock}>
          <Text
            style={styles.titleIndicator}
          >Llamadas
          </Text>

          <Text style={styles.value}>5822</Text>

        </View>

      </View>
      <View 
      style={styles.containerStar}>
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="star-outline" />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20,

  },
  containerStar:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  indicatorBlock: {
    width: 100,
    height: 100,
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    alignContent: 'center',
    borderColor: '#B5CC2B',
  },
  titleIndicator: {
    width: 90,
    marginTop:5,
    alignSelf: 'center',
    color: '#6A6A77',
    textAlign: 'center',
    fontFamily: 'Fraunces',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  value: {
    width: 100,
    color: '#6A6A77',
    textAlign: 'center',
    fontFamily: 'Fraunces',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
