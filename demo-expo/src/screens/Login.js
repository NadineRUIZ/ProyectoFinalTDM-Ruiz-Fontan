import React, { useState } from "react";
import { Pressable, Text, TextInput, StyleSheet, View } from "react-native";
import {db, auth} from "../firebase/config"; 

function Login(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[login, setLogin] = useState(false)
    const [errorLogin, setLoginError] = useState("")

    function onSubmit(){
        if (email === "" || password === "") {
            setLoginError("completar los campos");
            return;
        } else{
            auth.signInWithEmailAndPassword(email, password)
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
         {errorLogin !== "" && <Text style={styles.error}>{(errorLogin)}</Text>}
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
    error: {
        color:"red",
    }
});

export default Login;