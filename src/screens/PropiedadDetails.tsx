import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, ScrollView } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage';
import { usePropiedad } from '../hooks/usePropiedad';
import { ActivityIndicator } from 'react-native-paper';
import { PropiedadBottomDetail } from '../components/PropiedadBottomDetail';

interface Props extends StackScreenProps<RootStackParams, 'PropiedadDetails'> { }

export const PropiedadDetails = ({ navigation, route }: Props) => {

    const { PropiedadSimple } = route.params
    const { id, name, picture } = PropiedadSimple
    const { top } = useSafeAreaInsets()
    const { isLoading, propiedad } = usePropiedad(id)
    // console.log(propiedad)

    return (

        <View
            style={{
                flex: 1
            }}>
            <FadeInImage
                //source={{uri: item.picture}}
                uri={picture}
                style={styles.headerContainer}
            />



            {/*  <Image
                    source={require('../images/depto.png')}
                    style={{
                        height: 400,
                        width: 400,
                         alignSelf: 'center',
                         top:-345,
                         opacity:0.5
                    }}
                />  */}

            {/* <Text
                    style={{
                        ...styles.propname,
                        borderColor: 'black'

                    }}>{picture}</Text> */}



            {/* ///Detalles y loading    {name + '\n'}#*/}

            {isLoading ?
                <View
                    style={styles.loadingStyle}>
                    <ActivityIndicator
                        color='#099A97'
                        size={30}
                    />
                </View>
                :
                <PropiedadBottomDetail propiedad={propiedad} />
            }


            <View style={{
                ...styles.backButton,
                top: top + 5
            }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}

                >
                    <Icon
                        name='arrow-back-outline'
                        color="black"
                        size={35}
                    />
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 350,
        width: 350,
        padding: 5,
        alignSelf: 'center',
    },
    backButton: {
        position: 'absolute',
    },
    propname: {
        fontSize: 15,
        alignSelf: 'flex-start',
        left: 20,
    },
    loadingStyle: {
        height: 200,
        justifyContent: 'center',
    }
})