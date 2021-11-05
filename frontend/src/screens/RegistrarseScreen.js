import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'

const RegistrarseScreen = ({navigation}) => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [errorText, setErrorText] = useState(' ');

    const validarRegistrar = () =>{
        var validado = true;
        var mensaje = "";
        if(nombres === "")
            validado = false;
        if(apellidos === "")
            validado = false;
        if(correo === "")
            validado = false;
        if(telefono === "")
            validado = false;
        if(password === "")
            validado = false;
        if(confirmPassword === "")
            validado = false;

        if(confirmPassword != password){
            validado = false;
            mensaje = "Las contraseñas no coinciden.\n";
        }

        if(validado){
            handleRegistrar();
        }else{
            mensaje += "Uno o más campos están vacios.";
            setErrorText(mensaje);
        }

    }
    const handleRegistrar = () => {

        setErrorText(" ");
        fetch('http://127.0.0.1:8000/api/vetya-usuarios', { 
            method: 'POST', 
            headers: { 
                Accept: 'application/json', 
                'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                nombres: nombres,
                apellidos: apellidos,
                correo: correo,
                telefono: telefono,
                password: password,
                tipousuario_id: 4
            }) 
        })
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            if(json.resultado === "OK"){
                alert("Se ha registrado con exito.");
            }else{
                alert("Hubo un error al registrarse.");
            }
        })
        .catch((error)=>{
            setErrorText(error);
        });
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
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Nombre</Text>
                <TextInput
                    onChangeText={text => setNombres(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Apellidos</Text>
                <TextInput
                    onChangeText={text => setApellidos(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Correo Eléctronico</Text>
                <TextInput
                    onChangeText={text => setCorreo(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Núm. de Telefono</Text>
                <TextInput
                    onChangeText={text => setTelefono(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Contraseña</Text>
                <TextInput
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Confirmar Contraseña</Text>
                <TextInput
                    onChangeText={text => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.errorText}>{errorText}</Text>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={validarRegistrar}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonOutlineText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </>
    )
}

export default RegistrarseScreen

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
        backgroundColor: "#819830",
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
        color: "#e53935",
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})
