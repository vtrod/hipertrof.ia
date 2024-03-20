import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Servicos from './src/views/Servicos';
import InicioScreen from './src/views/Servicos/InicioScreen';
import IndexScreen from './src/views/Servicos/IndexScreen';
import LoginScreen from './src/views/Servicos/LoginScreen';
import CadastroScreen from './src/views/Servicos/CadastroScreen';
import EsqueciSenhaScreen from './src/views/Servicos/EsqueciSenhaScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="InicioScreen" component={InicioScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="EsqueciSenhaScreen" component={EsqueciSenhaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

