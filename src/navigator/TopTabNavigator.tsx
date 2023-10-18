import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from "react-native"

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

  const { top } = useSafeAreaInsets()
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,

      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}

      screenOptions={({ route }) => ({
        //tabBarAndroidRipple: { borderless: false },
        tabBarShowIcon: true,
        tabBarInactiveTintColor: colors.secondary,
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.secondary,
        tabBarIndicatorStyle: {//PARA IOS
          backgroundColor: colors.primary
        },
        tabBarIcon: ({ color, focused }) => {
          let icon_name: string = "";
          switch (route.name) {
            case 'Chat':
              icon_name = 'chatbubbles-outline'
              break;
            case 'Contact':
              icon_name = 'accessibility-outline'
              break;
            case 'Album':
              icon_name = 'file-tray-full-outline'
              break;
            default:
              break;
          }
          console.log(route.name)
          return (
            <Text>
              <Icon name={icon_name} size={20} color={colors.primary} />
            </Text>
          )
        }
      })
      }
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}