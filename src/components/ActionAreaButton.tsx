import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  isActive?: boolean;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined; // <-- Ajuste aquí
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress, isActive = false, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(containerStyle as Record<string, any>), // <-- Ajuste aquí
        backgroundColor: isActive ? '#099A97' : '#FFFFFF',
      }}
      onPress={onPress}>
      <Text style={{ ...styles.text, ...(textStyle as Record<string, any>), color: isActive ? 'white' : '#6A6A77' }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 205,
    height: 40,
    flexShrink: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: '#099A97',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
  },
};

export default ActionButton;

