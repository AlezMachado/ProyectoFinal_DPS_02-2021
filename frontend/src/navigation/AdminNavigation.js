import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TipoCitasNavigation from './TipoCitasNavigation';
import TipoUsuarioNavigation from './TipoUsuarioNavigation';
import Perfil from '../screens/Usuario/Perfil'

const Drawer = createDrawerNavigator();

const AdminHome = ({ route, navigation }) => {
    //Obtiene el valor del usuario registrado
    const Drawer = createDrawerNavigator();
    var usuario = route.params;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">   
            <Image
                style={{ height: 100, width: 300, marginBottom: 40 }}
                source={require('../img/logonew.png')}
            />
            <Text style={styles.titulo}>Administración</Text>
        </KeyboardAvoidingView>
    )
}

const CerrarSesion = ({ route, navigation }) => {
    useEffect(() => {
        logout();
    }, []);
    
    const logout = async () => {  
        try {   
            await AsyncStorage.removeItem('@logueado');
            await AsyncStorage.removeItem('@usuario').then(navigation.navigate('Login'));            
            
        } catch(e) {   
            console.log(e);
        }
    }
    return(<></>);
}

const AdminNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return ( 
        <Drawer.Navigator initialRouteName="AdminHome">
            <Drawer.Screen name="Inicio" component={AdminHome} initialParams={usuario}/>
            <Drawer.Screen name="Mi Perfil" component={Perfil} initialParams={usuario}/>
            <Drawer.Screen name="Empleados" component={AdminHome} initialParams={usuario}/>
            <Drawer.Screen name="Tipo de Usuarios" component={TipoUsuarioNavigation} initialParams={usuario}/>
            <Drawer.Screen name="Tipo de Citas" component={TipoCitasNavigation} initialParams={usuario}/>
            <Drawer.Screen name="Cerrar Sesión" component={CerrarSesion} initialParams={usuario} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
}

export default AdminNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0F4F94"

    },
    inputContainer: {
        width: '80%'
    },
    labelInput: {
        fontWeight: 'bold',
        color: "#D7D7D7"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 21
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: "#819830",
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: "#819830",
        marginTop: 5,
        borderColor: "#819830",
        borderWidth: 2
    },
    buttonText: {
        color: "#819830",
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#819830",
        fontWeight: 'bold',
        fontSize: 16
    },
    errorText: {
        color: "#f44336",
        fontWeight: 'bold',
        fontSize: 21,
        alignSelf: 'center'
    },
    titulo:{
        fontSize: 35,
        color:'white',
        fontWeight: 'bold'
    }
})

