import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const Index = ({ route, navigation }) => {
    const [tipos, setTipos] = useState([]);
    

    const getTipos = () => {

        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/vetya-tipousuarios', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.length != 0) {
                    setTipos(json);
                }
            })
            .catch((error) => {
                setErrorText("Error al obtener los datos.");
            });
    }
    

    const editarTipo = (tipo) => {
        navigation.push('TipoUsuarioEdit', {tipo});
    }

    useEffect(() => {
        getTipos();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <Text style={styles.titulo}>Detalle</Text>
            <View style={styles.item}>
                <View style={{ width: "60%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Tipos de Usuario</Text>
                </View>

                <View style={{ width: "40%", alignItems: "flex-end" }}>
                    <Text style={styles.detalle}>Acciones</Text>
                </View>
            </View>
            <FlatList
                data={tipos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ width: "60%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.detalle}</Text>
                        </View>

                        <View style={{ width: "40%", alignItems: "flex-end" }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => editarTipo(item)}
                            >
                                <Icon name='edit' color="#FFFFFF"  />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#0F4F94",
        width: "100%"

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
        width: 50,
        height: 50,
        padding: 15,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: 'center',
        fontSize: 23
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
    errorText: {
        color: "#f44336",
        fontWeight: 'bold',
        fontSize: 21,
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 25,
        alignSelf: "center",
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40
    },
    item: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
        borderBottomColor: "#819830",
        borderBottomWidth: 2,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10

    },
    detalle: {
        fontSize: 18
    }
})

