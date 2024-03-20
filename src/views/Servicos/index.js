import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './InicioScreen';
import LoginScreen from './LoginScreen';
import { SafeAreaView,StyleSheet,Image } from 'react-native';

const Stack = createStackNavigator();

const Servicos = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" headerMode="none">
        <Stack.Screen name="InicioScreen" component={InicioScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Servicos;