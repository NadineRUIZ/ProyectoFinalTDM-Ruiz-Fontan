import React, { useState } from "react";
import { Pressable, Text, TextInput, StyleSheet, View } from "react-native";
import { db, auth } from "../firebase/config";

function Login(props) {
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [error, setLoginError] = useState("")

    function onSubmit() {
        if (email === "" || password === "") {
            setLoginError("completar los campos");
        } else {
            auth.signInwithEmailAndPassword(email, password)
                .then((response) => {
                    setLogin(true);
                    props.navigation.navigate("Home");
                })
                .catch(error => {
                    setLoginError("credenciales Invalidas")
                });
        }
    }





    return (
        <View style={style.container}>
            <Text style={style.login}> Login </Text>
            <TextInput style={style.texto}
                keyboardType="email-address"
                placeholder="email"
                onChangeText={text => setEmail(text)}
                value={email} />

            <TextInput style={style.texto}
                keyboardType="default"
                placeholder="password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password} />

            <Pressable style={style.boton} onPress={() => onSubmit()}>
                <Text style={style.textoBoton}> Login </Text>
            </Pressable>

            <Text style={style.irARegistro}> No tenes cuenta?
                <Pressable onPress={() => props.navigation.navigate("Register")}>
                    <Text style={style.irARegistro}> Registrate </Text>
                </Pressable>
            </Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        margin: 200

    },

    login: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
    },

    texto: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10,

    },

    boton: {
        backgroundColor: '#5f0082',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#8d56c2fc',
    },

    textoBoton: {
        color: '#fff',
        textAlign: "center",

    },

    irARegistro: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 12,
        textDecorationLine: "underline",
        marginTop: 20,

    },

    textoBotonRegistro: {
    }

});

export default Login;