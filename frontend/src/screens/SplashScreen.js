import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({navigation}) => {
    
    useEffect(() => {
        getData();
    }, []); 
      
    const getData = async () => {  
        try {   
            const logueado = await AsyncStorage.getItem('@logueado');
            /*
            await AsyncStorage.removeItem('@logueado');
            await AsyncStorage.removeItem('@usuario');
           */
            if(logueado !== null) {      
                var usuario = await AsyncStorage.getItem('@usuario');
                usuario = JSON.parse(usuario);
                if(usuario.tipousuario_id == 1){
                    setTimeout(() => {
                        navigation.push('AdminNavigation', usuario);
                    }, 2000);
                }
                if(usuario.tipousuario_id == 4){
                    setTimeout(() => {
                        navigation.push('ClientNavigation', usuario);
                    }, 2000);
                }    
            }  
            else{
                setTimeout(() => {
                    navigation.push('Login');
                }, 2000);
            }
        } catch(e) {   
            console.log(e);
        }
    }

    return (
        <>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image 
                style={{height: 100, width: 300, marginBottom: 40}}
                source={require('../img/logonew.png')}
            />
            
        </KeyboardAvoidingView>
        </>
    )
}

export default SplashScreen

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
    labelInput:{
        fontWeight: 'bold',
        color:"#D7D7D7"
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
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#819830",
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    errorText:{
        color: "#f44336",
        fontWeight: 'bold',
        fontSize: 21,
        alignSelf: 'center'
    }
})
