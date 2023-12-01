import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { PropiedadSimple } from '../interfaces/propiedadInterfaces';
import { FadeInImage } from './FadeInImage';
import Icon from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native';
import { cardStyle } from '../theme/cardStyle';
import { useNavigation } from '@react-navigation/native';

const window_width = Dimensions.get('window').width

interface Props {
    propiedad: PropiedadSimple;
}


export const PropCard = ({ propiedad }: Props) => {
    const navigation=useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PropiedadDetails',{
                PropiedadSimple:propiedad
            }
            )}
        >
            <View style={{
                ...cardStyle.cardcontainer,
                width: window_width * 0.43
            }}>

                <TouchableOpacity
                    style={{
                        ...cardStyle.actionBtnRight
                    }}
                    onPress={() => {
                        Alert.alert('button pressed')
                    }}
                >
                    <Icon name='close-outline' size={23} color='white' />

                </TouchableOpacity>

                <View>
                    <Text style={{
                        ...cardStyle.datos,
                    }}>
                        {propiedad.name} {/* //Direccion */}
                        {'\n#' + propiedad.id} {/* //precio */}
                        Ubicacion
                    </Text>
                </View>

                <FadeInImage
                    //source={{uri: item.picture}}
                    uri={propiedad.picture}
                    style={{
                        ...cardStyle.propImage
                    }}
                />

                <TouchableOpacity
                    style={{
                        ...cardStyle.actionBtnLeft
                    }}
                    onPress={() => {
                        Alert.alert('button pressed')
                        console.log('Boton')
                    }}
                >
                    <Icon name='hammer-outline' size={23} color='white' />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}