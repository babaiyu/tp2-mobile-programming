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
import {storage} from '../storages';
import {StyleSheet, Text, View} from 'react-native';

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

const HeaderRight = () => {
  const jsonUser = storage.getString('user');
  if (jsonUser !== undefined) {
    const userObj = JSON.parse(jsonUser);
    return (
      <View style={styles.headerRight}>
        <Text style={styles.title}>{userObj?.name}</Text>
      </View>
    );
  }
  return null;
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        headerRight: () => <HeaderRight />,
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

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 16,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.dark,
  },
});
