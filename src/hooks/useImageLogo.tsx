import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';


export const useImageLogo = () => {
    return (
        <View>

            {/* <Image source={require('../images/logo.svg')}  style={styles.logo_home} /> */}
            <Image source={require('../images/logo.png')}  style={styles.logo_home} /> 
            <Text style={styles.myHometext}>
                MyHome
            </Text>
        </View>
    )
}

