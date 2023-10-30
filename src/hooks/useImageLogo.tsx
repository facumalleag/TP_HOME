import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

const imagen_logo = 'https://s3-alpha-sig.figma.com/img/56a7/88d7/dc8cddbcd3f59dd1009c5ca4be9c6e26?Expires=1698624000&Signature=idOu0jGqZSLuV6jlftjkc-QzRh39W7~RfF5g9xBKZiw3r4Jeo0EtD~G0VajA0wb3b7HKpjChnocNeptkKVBPIagTDYhn9zFd0mZelSIlPN7GmFS9vKXsH0D5pyRcZVONCYuUKwVijJr~IRZrvXyWFQJpQqkgS5s7suuqVc5KzVctf~-bIS~mYs3UKBx4WJFbDy~-DdbG9tFYy0yErCp4nXTI1gdxyTBMZuOt~eJuVydaWv1czgzzwaIWzigirDOy0XVfN-BaAApQ2uxfl0EnqLfR1IK2V~qn8g-pNTT3i7dZghPceYxe6hoA3Bn3-Accq-PyEXMi6E6EklHgnRDTnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'


export const useImageLogo = () => {
    return (
        <View>
            <Image source={{ uri: imagen_logo }} style={styles.logo_home} />
            <Text style={styles.myHometext}>
                MyHome
            </Text>
        </View>
    )
}

