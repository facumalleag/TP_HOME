import Icon from 'react-native-vector-icons/Ionicons';
import '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabHomeDueniosScreen } from './TabHomeDueniosScreen';
import { TabProfileDueniosScreen } from './TabProfileDueniosScreen';

const Tab = createBottomTabNavigator();

export const HomePageDueniosScreen = () => {

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

    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#E5EDDA',
      }}

      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1F4068',
          borderRadius: 10,
        },
        headerShown: false,
        labeled: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })
      }
    >
      <Tab.Screen name="TabHomeDueniosScreen" component={TabHomeDueniosScreen} options={{   
        tabBarIcon:({focused})=>{
          return   <Icon name='home-outline' size={25} color={
            focused? "#B5CC2B" : "#EAEAEA"
          }/>
        }
      }}
      />
      <Tab.Screen name="TabProfileDueniosScreen" component={TabProfileDueniosScreen} options={{
        tabBarIcon:({focused})=>{
          return   <Icon name='person-outline' size={25} color={
            focused? "#B5CC2B" : "#EAEAEA"
          }/>
        }
      }}/>
       
    </Tab.Navigator>
    
  );
}
