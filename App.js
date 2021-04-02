import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingMallNavigator from './navigation/ShoppingMallNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <ShoppingMallNavigator />
    </NavigationContainer>
  );
}


