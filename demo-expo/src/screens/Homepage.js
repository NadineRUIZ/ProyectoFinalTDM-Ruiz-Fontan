import React, {useEffect, useState} from "react";
import {Text, View, Flatlist, ActiviyIndicator, StyleSheet } from "react-native";
import {db, auth} from "../firebase/config"


function Homepage(props){
const[post, setPost] = useState("")

useEffect (() => {
    auth.onAuthStateChanged(usuario => {
        if (usuario){
            db.collection("post").orderBy("createdAt", "desc").add({
                user: auth.currentUser.email, 
                description: descripcion, 
                createdAt: Date.now(),
            })
            .then()
            .catch(e => console.log(e))
        } else {
            props.navigation.navigate("Login");
        }
        setPost();
    });
}, []);

    return(
    <View style = {Styles.conteiner}>

    </View>
    )
    }

export default Homepage;


