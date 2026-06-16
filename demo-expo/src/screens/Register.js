import React from "react";
import { useState, useEffect } from "react";
import { TextInput, View } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";


function Register(props) {
    const [registro, setRegistro] = useState("")
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorFirebase, setErrorFirebase] = useState("")
  

    function onSubmit() {

        if (usuario === "" || email === "" || password === "") {
            setErrorFirebase("Error: debe completar todos los campos")
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                db.collection('users').add({
                    usuario: usuario,
                    email: email,
                    createdAt: Date.now()
                })
                    .then(() => {
                        setRegistro(true)
                        props.navigation.navigate('Login')
                    })
            })
            .catch((error) => {
                setErrorFirebase(error.message)
            })

   

}

function irALogin() {
    props.navigation.navigate('Login')
}

return (
    <View style={style.container}>
        <Text style={style.registro}> Registro</Text>
        <TextInput style={style.texto}
            keyboardType='phone-pad'
            placeholder='Usuario'
            onChangeText={text => setUsuario(text)}
            value={usuario}
        />
        <TextInput style={style.texto}
            keyboardType='email-adress'
            placeholder='Email'
            onChangeText={text => setEmail(text)}
            value={email}
        />
        <TextInput style={style.texto}
            keyboardType='phone-pad'
            placeholder='password'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
        />

        <Pressable style={style.boton} onPress={onSubmit} >
            <Text style={style.textoBoton}> Registrarme </Text>
        </Pressable>

        {errorFirebase !== "" ? <Text style={style.errorRegistro}>{errorFirebase}</Text> : null}

        <Pressable onPress={irALogin}>
            <Text style={style.irALogin} >
                Ir a Login
            </Text>
        </Pressable>

    </View>

)
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        margin: 200,
        width: "100%",
        alignSelf: "center",
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

    errorRegistro: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },

    irALogin: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 12,
        textDecorationLine: "underline",
        marginTop: 20,
    },

    registro: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,



    }

})




export default Register;