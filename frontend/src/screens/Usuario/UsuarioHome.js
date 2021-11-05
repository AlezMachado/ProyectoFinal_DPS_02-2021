import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const UsuarioHome = ({route, navigation}) => {
    //Obtiene el valor del usuario registrado
    var usuario = route.params;
    
    return (
        <View>
            <Text>Hola, {usuario.nombres}</Text>
        </View>
    )
}

export default UsuarioHome

const styles = StyleSheet.create({})
