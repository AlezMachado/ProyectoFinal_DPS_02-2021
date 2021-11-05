import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrarseScreen from './src/screens/RegistrarseScreen';
/*Homes*/
import UsuarioHome from './src/screens/Usuario/UsuarioHome';
import AdminNavigation from './src/navigation/AdminNavigation';
import ClientNavigation from './src/navigation/ClientNavigation';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="ClientNavigation">
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Registrarse" component={RegistrarseScreen} />

        <Stack.Screen options={{headerShown: false}} name="UsuarioHome" component={UsuarioHome} />
        <Stack.Screen options={{headerShown: false}} name="AdminNavigation" component={AdminNavigation} />
        <Stack.Screen options={{headerShown: false}} name="ClientNavigation" component={ClientNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
