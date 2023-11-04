import Icon from 'react-native-vector-icons/Ionicons';
import '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabHomeDueniosScreen } from './TabHomeDueniosScreen';
import { TabProfileDueniosScreen } from './TabProfileDueniosScreen';
import { FormAgregarPropiedad } from '../components/FormAgregarPropiedad';

const Tab = createBottomTabNavigator();

export const HomePageDueniosScreen = () => {
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
      <Tab.Screen name="FormAgregarPropiedad" component={FormAgregarPropiedad} options={{
        tabBarIcon:({focused,})=>{
          return   <Icon name='add-outline' size={35} style={{
            borderRadius:90,
            textAlign:'center',
            textAlignVertical:'center',
            marginBottom:25,
            borderColor: '#1F4068',
            width:70,
            height:70,
            borderWidth: 8,
            backgroundColor:'#EAEAEA'}}
            color={
              focused? "#B5CC2B" : "#6A6A77"}/>
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
