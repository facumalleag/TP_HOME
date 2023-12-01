import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

const imagen_logo= 'https://s3-alpha-sig.figma.com/img/56a7/88d7/dc8cddbcd3f59dd1009c5ca4be9c6e26?Expires=1698624000&Signature=idOu0jGqZSLuV6jlftjkc-QzRh39W7~RfF5g9xBKZiw3r4Jeo0EtD~G0VajA0wb3b7HKpjChnocNeptkKVBPIagTDYhn9zFd0mZelSIlPN7GmFS9vKXsH0D5pyRcZVONCYuUKwVijJr~IRZrvXyWFQJpQqkgS5s7suuqVc5KzVctf~-bIS~mYs3UKBx4WJFbDy~-DdbG9tFYy0yErCp4nXTI1gdxyTBMZuOt~eJuVydaWv1czgzzwaIWzigirDOy0XVfN-BaAApQ2uxfl0EnqLfR1IK2V~qn8g-pNTT3i7dZghPceYxe6hoA3Bn3-Accq-PyEXMi6E6EklHgnRDTnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const imagen_bienvenida = 'https://s3-alpha-sig.figma.com/img/aa0f/3807/bd04432dad5e82b86783ebc24b8ac98b?Expires=1698624000&Signature=kw~GzumQemCQXyXL8kp~rgFTshp39PGf9wPwdBOyYfxQILvSGM4n9CXtNqUN6s905YZknIgwUsqikGhILkTitbENVpvHs2NuT7pcwrDt7KICMEPIMZrH~MuyesOf~wT71~a9VH5moXe23omynk-vqjSzJet7pb0gKOe0K3baJhBYhk2PuuCacDxzLKefDGu4Shyz3lpJhyK7rNCT7piojcgVFlcdnGiww6S4KXtkjlUWWADrhHo6Ka~zUdFWa~VNSWCWaWPE61mgP5D~-Z6owwfIWffsOe5LqtYtx4S~noDK~Fifpi1Hm3e5xEoBPqCmqejOP2GLiU0Nmm8NuX81nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

interface Props extends StackScreenProps<any, any> { }


export const LandingScreen = ({ navigation }: Props) => {

  return (

    <View style={styles.root}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginGeneralScreen')}
      >
        <Image source={{ uri: imagen_logo}} style={{ width: 300, height: 200, alignSelf:'center'}}/>
        <Text style={{...styles.myHome, alignSelf:'center'}}>
          MyHome
        </Text>
        <Image source={{ uri: imagen_bienvenida }} 
        style={{ 
          width: 400, height: 420,alignSelf:'center',
          bottom:-20,
        borderTopRightRadius: 1000,
        borderTopLeftRadius: 1000,
           }} />
      </TouchableOpacity>
    </View>
  );
}