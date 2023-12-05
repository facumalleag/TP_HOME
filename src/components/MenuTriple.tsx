import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

interface Props {
  leftText: string;
  middleText: string;
  rightText: string;
  onLeftPress: () => void;
  onMiddlePress: () => void;
  onRightPress: () => void;
}

export const MenuTriple = ({ leftText, middleText, rightText, onLeftPress, onMiddlePress, onRightPress } : Props ) => {
  const [activeOption, setActiveOption] = useState('left');

  const handlePressLeft = () => {
    setActiveOption('left');
    onLeftPress();
  };

  const handlePressMiddle = () => {
    setActiveOption('middle');
    onMiddlePress();
  };

  const handlePressRight = () => {
    setActiveOption('right');
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
          backgroundColor: activeOption === 'left' ? '#099A97' : 'transparent',
        }}
        onPress={handlePressLeft}
      >
        <Text style={{ color: activeOption === 'left' ? 'white' : '#6A6A77', textAlign: 'center' }}>
          {leftText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 40,
          borderWidth: 1,
          padding: 10,
          borderColor: '#099A97',
          borderStyle: 'solid',
          backgroundColor: activeOption === 'middle' ? '#099A97' : 'transparent',
        }}
        onPress={handlePressMiddle}
      >
        <Text style={{ color: activeOption === 'middle' ? 'white' : '#6A6A77', textAlign: 'center' }}>
          {middleText}
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
          backgroundColor: activeOption === 'right' ? '#099A97' : 'transparent',
        }}
        onPress={handlePressRight}
      >
        <Text style={{ color: activeOption === 'right' ? 'white' : '#6A6A77', textAlign: 'center' }}>
          {rightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};