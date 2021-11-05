import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

const Edit = ({ navigation, route }) => {
    const [errorText, setErrorText] =useState('');
    const [detalle, setDetalle] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        setTipo(route.params.tipo);
        setDetalle(route.params.tipo.detalle);
    }, []);

    const validarEditar = () =>{
        var validado = true;
        if(detalle ===""){
            validado = false;
            setErrorText("El nombre del tipo de cita no puede ser vacio.");
        }

        if(validado){
            handleEdit();
        }
    }

    const handleEdit = () => {
        setErrorText("");
        fetch('http://127.0.0.1:8000/api/vetya-tipocitas/' + tipo.id, { 
            method: 'PUT', 
            headers: { 
                Accept: 'application/json', 
                'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                detalle: detalle,
            }) 
        })
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            if(json.resultado === "OK"){
                alert("Se ha editado con exito.");
                navigation.push("TipoCitasIndex");
            }else{
                setErrorText("Hubo un error al editar.");
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
                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Detalle</Text>
                    <TextInput
                        onChangeText={text => setDetalle(text)}
                        style={styles.input}
                        defaultValue={detalle}
                        editable="true"
                    />
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={validarEditar}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() => navigation.navigate('TipoCitasIndex')}
                    >
                        <Text style={styles.buttonOutlineText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Edit

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
        color: "#e53935",
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})
