import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TipoCitasIndex from '../screens/TipoCita/Index';
import TipoCitasCreate from '../screens/TipoCita/Create';
import TipoCitasEdit from '../screens/TipoCita/Edit';


const Stack = createNativeStackNavigator();

const TipoCitasNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return (
        <Stack.Navigator initialRouteName="TipoCitasIndex">
            <Stack.Screen options={{ headerShown: false }} name="TipoCitasIndex" component={TipoCitasIndex} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="TipoCitasCreate" component={TipoCitasCreate} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="TipoCitasEdit" component={TipoCitasEdit} initialParams={usuario}/>
        </Stack.Navigator>
    )
}

export default TipoCitasNavigation

const styles = StyleSheet.create({})
