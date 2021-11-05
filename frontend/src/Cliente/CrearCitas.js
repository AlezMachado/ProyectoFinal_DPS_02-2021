import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Mascota = ({navigation, route}) => {
  
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [motivo, setMotivo] = useState('');
    const [estado, setEstado] = useState('');
    const [detalles, setDetalles] = useState(' ');
    const [tipo_cita, setTipo_cita] = useState(' ');
    const [clientes, setClientes] = useState(' ');
    const [empleado, setEmpleado] = useState(' ');
    const [mascota, setMascota] = useState(' ');
    const [errorText, setErrorText] = useState(' ');

    const validarRegistrar = () =>{
        var validado = true;
        var mensaje = "";
        if(fecha === "")
            validado = false;
        if(hora === "")
            validado = false;
        if(motivo === "")
            validado = false;
        if(estado === "")
            validado = false;
        if(detalles === "")
            validado = false;
        if(tipo_cita === "")
            validado = false;
        if(clientes === "")
            validado = false;
        if (empleado==="")
            validado= false;
        if (mascota==="")
            validado= false;

        if(validado){
            handleRegistrar();
        }else{
            mensaje += "Uno o más campos están vacios.";
            setErrorText(mensaje);
        }

    }
    const handleRegistrar = () => {

        setErrorText(" ");
        fetch('http://127.0.0.1:8000/api/vetya-mascotas', { 
            method: 'POST', 
            headers: { 
                Accept: 'application/json', 
                'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                fecha: fecha,
                hora: hora,
                motivo: motivo,
                estado: estado,
                detalles: detalles,
                tipo_cita: tipo_cita,
                clientes: clientes,
                empleado: empleado,
                mascota: mascota,
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
    
    const usuario = route.params;
    console.log(usuario);
    return (
        <>
        
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Fecha</Text>
                <TextInput
                    onChangeText={text => setFecha(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Hora</Text>
                <TextInput
                    onChangeText={text => setHora(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Motivo de la Cita</Text>
                <TextInput
                    onChangeText={text => setMotivo(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Estado de la Cita</Text>
                <TextInput
                    onChangeText={text => setEstado(text)}
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Detalles de la Cita</Text>
                <TextInput
                    onChangeText={text => setDetalles(text)}
                    style={styles.input}
                />
            </View>
          
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Tipo de Cita</Text>
                <TextInput
                    onChangeText={text => setTipo_cita(text)}
                    style={styles.input}
                />
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Nombre del Cliente</Text>
                <TextInput
                    onChangeText={text => setClientes(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Nombre del Empleado</Text>
                <TextInput
                    onChangeText={text => setEmpleado(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Mascota</Text>
                <TextInput
                    onChangeText={text => setMascota(text)}
                    style={styles.input}
                />
            </View>


                <Text style={styles.errorText}>{errorText}</Text>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={validarRegistrar}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Registrar Cita</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text style={styles.buttonOutlineText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </>
    )
}

export default Mascota

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
        fontSize: 15
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
        color: "#e53935",
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})

