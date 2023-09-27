import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// All screens here...
import BottomTabs from './screens/BottomTabs';

// Stack
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TABS" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
