/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './Home/HomeStackNavigator';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { tabStyles } from '../styles/TabStyle';
import { TabIcon, TabLabel } from './Tab';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import { useAuth } from './Auth/AuthContext';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();


const checkStackScreen = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  if (routeName === 'ProductDetailsScreen') {
    return { display: 'none' };
  }
  return;
};


function AuthStackNavigator() {

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
}


export default function AppNavigator() {

  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: [tabStyles.tabContainer, tabStyles.shadowStyle],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({route}) => ({
          headerShown: false,
          tabBarStyle: checkStackScreen(route) ? { display: 'none' } : tabStyles.tabContainer,
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} title="Home" />
          ),
          tabBarItemStyle: tabStyles.tabBarItem,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="home" />
          ),
        })}

      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} title="Cart" />
          ),
          tabBarItemStyle: tabStyles.tabBarItem,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="cart" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} title="Notiff" />
          ),
          tabBarItemStyle: tabStyles.tabBarItem,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="notifications" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} title="Profile" />
          ),
          tabBarItemStyle: tabStyles.tabBarItem,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="person" />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <AuthStackNavigator />
  );

}
