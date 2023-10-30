import Icon from 'react-native-vector-icons/Ionicons';
import '@react-navigation/bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab3Screen } from '../screens/TabProfileDueniosScreen';
import { Tab2Screen } from '../screens/TabHomeDueniosScreen';
import { colors } from '../theme/appTheme';
import { Text } from "react-native"
import { TopTapNavigator } from './TopTabNavigator';




const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      
      }}
      
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle:{
          backgroundColor:colors.secondary
      },
      headerShown:false,
        tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let icon_name: string = "";
          switch (route.name) {
            case 'Tab1Screen':
              icon_name = 'airplane-outline'
              break;
            case 'Tab2Screen':
              icon_name = 'balloon-outline'
              break;
            case 'Tab3Screen':
              icon_name = 'boat-outline'
              break;
            default:
              break;
          }
          //return <Text style={{ color }}>{icon_name}</Text>
          return ( 
          <Text>
            <Icon name={icon_name} size={15} color="white" />
          </Text>
          )
                     
          
        }
      })
      }
    >
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} options={{
        title: 'STACK',
      }} />
      
      <Tab.Screen name="Tab2Screen" component={TopTapNavigator} options={{
        title: 'TAB1',
      }} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} options={{
        title: 'TAB2',
      }} />
    </Tab.Navigator>
  );
}