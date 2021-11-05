import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'

const Mascota = ({navigation, route}) => {
    const [nombres, setNombres] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [color, setColor] = useState(' ');
    const [peso, setPeso] = useState(' ');
    const [vacunas, setVacunas] = useState(' ');
    const [errorText, setErrorText] = useState(' ');

    const validarRegistrar = () =>{
        var validado = true;
        var mensaje = "";
        if(nombres === "")
            validado = false;
        if(especie === "")
            validado = false;
        if(raza === "")
            validado = false;
        if(edad === "")
            validado = false;
        if(sexo === "")
            validado = false;
        if(color === "")
            validado = false;
        if(peso === "")
            validado = false;
        if (vacunas==="")
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
                nombres: nombres,
                especie: especie,
                raza: raza,
                edad: edad,
                sexo: sexo,
                color: color,
                peso: peso,
                vacunas: vacunas,
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
                <Text style={styles.labelInput}>Nombre</Text>
                <TextInput
                    onChangeText={text => setNombres(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Especie</Text>
                <TextInput
                    onChangeText={text => setEspecie(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Raza</Text>
                <TextInput
                    onChangeText={text => setRaza(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Edad de la Mascota</Text>
                <TextInput
                    onChangeText={text => setEdad(text)}
                    style={styles.input}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Sexo</Text>
                <TextInput
                    onChangeText={text => setSexo(text)}
                    style={styles.input}
                />
            </View>
          
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Color de piel de la Mascota</Text>
                <TextInput
                    onChangeText={text => setColor(text)}
                    style={styles.input}
                />
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Peso</Text>
                <TextInput
                    onChangeText={text => setPeso(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Vacunas</Text>
                <TextInput
                    onChangeText={text => setVacunas(text)}
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
                    <Text style={styles.buttonText}>Registrar Mascota</Text>
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
