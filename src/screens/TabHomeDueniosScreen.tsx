import React, { useContext , useState , useEffect } from 'react'
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text  } from 'react-native';
import { PropiedadFirstView } from './PropiedadFirstView';
import { useImageLogo } from '../hooks/useImageLogo';
import { AuthContext } from '../context/AuthContext'
import { MenuDual } from '../components/MenuDual';
import { MenuTriple } from '../components/MenuTriple';

const logo=useImageLogo();

export const TabHomeDueniosScreen = () => {
  const { authState } = useContext(AuthContext);
  const [showSubMenu, setShowSubMenu] = useState(false);


  const handleLeftMenuPress = () => {
    Alert.alert('Left button pressed');
    setShowSubMenu(false);
  };

  const handleRightMenuPress = () => {
    alert('Right button pressed');
    setShowSubMenu(true);
  };

  const handleMiddleSubPress = () => {
    alert('Middle button pressed');
    // Tu lógica para la opción del medio
  };

  const handleRightSubPress = () => {
    alert('Right button pressed');
  };

  const handleLeftSubPress = () => {
    alert('Left button pressed');
  };

  useEffect(() => {
    console.log('showSubMenu state:', showSubMenu);
  }, [showSubMenu]);
  return (
   
    <View>
    {logo}

    <Text style={{
      color: '#1F4C6B',
      fontSize: 20,
      padding:5,
      fontWeight: 'bold',
    }}>
      Bienvenido {authState.username}
    </Text>
    <View>
      <MenuDual
          leftText="Venta"
          rightText="Alquiler"
          onLeftPress={handleLeftMenuPress}
          onRightPress={handleRightMenuPress}
        />

        {showSubMenu ? (
          <MenuTriple
            leftText="En Alquiler"
            middleText="Reservados"
            rightText="Alquilados"
            onLeftPress={handleLeftSubPress}
            onMiddlePress={handleMiddleSubPress}
            onRightPress={handleRightSubPress}
          />
        ) : (
          <MenuDual
            leftText="En Venta"
            rightText="Vendidos"
            onLeftPress={handleLeftMenuPress}
            onRightPress={handleRightMenuPress}
          />
        )}

    </View>
    
    <PropiedadFirstView/>

    </View>
  )
}
