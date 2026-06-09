import React, { useState } from "react";
import { Pressable, Text, TextInput, StyleSheet, View } from "react-native";

import NavegacionTab from "./NavegacionTab";
import { auth } from "../firebase/config";


function Login(){
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[login, setLogin] = useState("")
    const [error, setLoginError] = useState("")

    function onSubmit(){
        if (email === "" || password === "") {
            setLoginError("completar los campos");
        } else{
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
   



    return(
        <View style= {styles.container}>
            <Text style= {styles.title}> Login </Text>
            <TextInput style= {styles.field}
                keyboardType = "email-address"
                placeholder = "email"
                onChangeText = {text => setEmail(text)}
                value = {email} />

            <TextInput style= {styles.field}
                keyboardType = "default"
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {text => setPassword(text)}
                value = {password} />

            <Pressable onPress = {() => onSubmit()}>
                <Text> Login </Text>
            </Pressable>
         
         <Text style={styles.title}> No tenes cuenta? Registrate: </Text>
           <Pressable onPress={() => props.navigation.navigate("Register")}>
               <Text style={styles.buttonText}> ir a registro </Text>
           </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
    },
    buttonText: {
        fontSize: 18,
        color: "red",
    },
});

export default Login;