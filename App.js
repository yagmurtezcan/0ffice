import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';

import useAuthStatus from './src/hooks/use-auth-status';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const {status} = useAuthStatus();

  if (status == null) {
    return null;
  }
  const initialRouteName = status ? 'Dashboard' : 'StartScreen'; // eğer status dashboardsa initial routename dashboarda eşitle değilse startscreen

  console.log(status, initialRouteName);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="StartScreen" component={StartScreen} />
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
          <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
