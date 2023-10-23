import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import { styles } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Platform, ScrollView, TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';


const imagen_logo = 'https://s3-alpha-sig.figma.com/img/56a7/88d7/dc8cddbcd3f59dd1009c5ca4be9c6e26?Expires=1698624000&Signature=idOu0jGqZSLuV6jlftjkc-QzRh39W7~RfF5g9xBKZiw3r4Jeo0EtD~G0VajA0wb3b7HKpjChnocNeptkKVBPIagTDYhn9zFd0mZelSIlPN7GmFS9vKXsH0D5pyRcZVONCYuUKwVijJr~IRZrvXyWFQJpQqkgS5s7suuqVc5KzVctf~-bIS~mYs3UKBx4WJFbDy~-DdbG9tFYy0yErCp4nXTI1gdxyTBMZuOt~eJuVydaWv1czgzzwaIWzigirDOy0XVfN-BaAApQ2uxfl0EnqLfR1IK2V~qn8g-pNTT3i7dZghPceYxe6hoA3Bn3-Accq-PyEXMi6E6EklHgnRDTnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

interface Props extends StackScreenProps<any, any> { }



export const HomePageDueniosScreen = ({ navigation }: Props) => {

  const [form, setForm] = useState({
    email: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })

  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View >
          <Image source={{ uri: imagen_logo }} style={{ width: 150, height: 100, alignSelf: 'center' }} />
          <Text style={{
            ...styles.myHome,
            alignSelf: 'center',
          }} >
            MyHome
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}