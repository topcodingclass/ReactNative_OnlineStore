import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createStackNavigator();

const StackNavigator = () =>{
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ProductDetailScreen} />
    </Stack.Navigator>
}


const ShoppingMallNavigator = () =>{
    return(
        StackNavigator
    )
}
