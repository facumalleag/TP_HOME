import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


interface Props {
  leftText: string;
  rightText: string;
  onLeftPress: () => void;
  onRightPress: () => void;
}

export const MenuDual = ({ leftText, rightText, onLeftPress, onRightPress } : Props ) => {
  const [isActiveIzquierda, setIsActiveIzquierda] = useState(true);

  const handlePressIzquierda = () => {
    setIsActiveIzquierda(true);
    onLeftPress();
  };

  const handlePressDerecha = () => {
    setIsActiveIzquierda(false);
    onRightPress();
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 40,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: '#099A97',
          borderStyle: 'solid',
          backgroundColor: isActiveIzquierda ? '#099A97' : 'transparent',
        }}
        onPress={handlePressIzquierda}
      >
        <Text style={{ color: isActiveIzquierda ? 'white' : '#6A6A77', textAlign: 'center' }}>
          {leftText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 40,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: '#099A97',
          borderStyle: 'solid',
          backgroundColor: isActiveIzquierda ? 'transparent' : '#099A97',
        }}
        onPress={handlePressDerecha}
      >
        <Text style={{ color: isActiveIzquierda ? '#6A6A77' : 'white', textAlign: 'center' }}>
          {rightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};