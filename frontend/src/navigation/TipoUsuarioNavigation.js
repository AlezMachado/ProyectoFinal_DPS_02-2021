import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TipoUsuarioIndex from '../screens/TipoUsuario/Index'
import TipoUsuarioEdit from '../screens/TipoUsuario/Edit'

const Stack = createNativeStackNavigator();

const TipoUsuarioNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return (
        <Stack.Navigator initialRouteName="TipoUsuarioIndex">
            <Stack.Screen options={{ headerShown: false }} name="TipoUsuarioIndex" component={TipoUsuarioIndex} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="TipoUsuarioEdit" component={TipoUsuarioEdit} initialParams={usuario}/>
        </Stack.Navigator>
    )
}

export default TipoUsuarioNavigation

const styles = StyleSheet.create({})
