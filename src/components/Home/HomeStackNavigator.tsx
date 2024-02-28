import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import ProductListScreen from '../../screens/ProductListScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';
import Product from '../../types/Product';


export type RootStackParamList = {
    HomeScreen: undefined;
    ProductListScreen: undefined;
    ProductDetailsScreen: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC<{navigation: any, route:any}> = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
