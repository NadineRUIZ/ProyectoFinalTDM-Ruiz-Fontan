import React, {useEffect, useState} from "react";
import {Text, View, Flatlist, StyleSheet, Pressable } from "react-native";
import {db, auth} from "../firebase/config"
import { TextInput } from "react-native-web";

function crearPosts(props){
    const [descripcion, setDescripcion] = useState("")

    useEffect(() => {
         auth.onAuthStateChanged(usuario => {
            if(!usuario){
                props.navigation.navigate("Login");
         }
        });
    }, []);

    function publicarPost(){
        db.collection("posts").add({
            user: auth.currentUser.email, 
            description: descripcion, 
            likes: [],
            createdAt: Date.now(),
        })
        .then(() =>{
            console.log("Post publicado");
           
        })
        .catch(e => console.log(e))

    };


    return(
    <View style= {styles.contenedor}>
        <Text style= {styles.title}> Crear posteo </Text>

         <TextInput style={styles.field}
                        keyboardType="default"
                        placeholder="escribi la descripcion del post ....."
                        onChangeText={text => setDescripcion(text)}
                        value={descripcion} />
        <Pressable style = {styles.boton}  onPress={() => publicarPost()}>
            
        <Text style={styles.textoBoton}> Publicar!</Text>
        </Pressable>

    </View>
)


}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        margin: 200,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
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
    
    });



export default crearPosts;