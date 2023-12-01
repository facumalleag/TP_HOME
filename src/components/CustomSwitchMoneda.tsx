import React from 'react'
import { Switch } from 'react-native';
import {useState} from 'react';

interface Props{
    isPesos:boolean;
    onChange:(value:boolean)=>void
}

export const CustomSwitchMoneda = ({isPesos,onChange}:Props) => {
    const [isEnabled, setIsEnabled] = useState(isPesos);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    }

  return (
    <Switch
    trackColor={{false: 'white', true: 'white'}}
    thumbColor={isEnabled ? '#00bfff' : 'green'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
    />
  )
}

