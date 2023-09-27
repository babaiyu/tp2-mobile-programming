/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreens';
import ProfileScreen from './ProfileScreens';
import MapsScreen from './MapsScreen';
import {
  HomeActive,
  HomeInactive,
  MapActive,
  MapInactive,
  ProfileActive,
  ProfileInactive,
} from '../assets';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  focused,
  type,
}: {
  focused: boolean;
  type: 'home' | 'profile' | 'map';
}) => {
  if (type === 'home') {
    return focused ? (
      <HomeActive color={colors.dark} width={20} height={20} />
    ) : (
      <HomeInactive color={colors.dark} width={20} height={20} />
    );
  } else if (type === 'profile') {
    return focused ? (
      <ProfileActive color={colors.dark} width={20} height={20} />
    ) : (
      <ProfileInactive color={colors.dark} width={20} height={20} />
    );
  } else if (type === 'map') {
    return focused ? (
      <MapActive color={colors.dark} width={20} height={20} />
    ) : (
      <MapInactive color={colors.dark} width={20} height={20} />
    );
  }

  return null;
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} type="home" />,
          title: 'Beranda',
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} type="profile" />
          ),
          title: 'Profil',
        }}
      />
      <Tab.Screen
        name="MAPS"
        component={MapsScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} type="map" />,
          title: 'Peta',
        }}
      />
    </Tab.Navigator>
  );
}
