import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, StyleSheet, View, FlatList, FlatListComponent } from "react-native";
import {db, auth} from "../firebase/config"; 

function Comentarios(props){
    const[comentarios, setComentarios] = useState([])
    const[comentario, setComentario] = useState("")

    useEffect(() => {
        db.collection("comentarios").onSnapshot( docs =>{

            let arrayComentarios = [];

            docs.forEach (doc => {
                arrayComentarios.push({
                    id: doc.id,
                    datos: doc.data()
                });
            })
        });
        setComentarios(arrayComentarios)
    }, []);


    function agregarComentario() {
        db.collection("comentarios").add({
            email: auth.currentUser.email,
            textoComentario: comentario, 
            createdAt: Date.now()
        })
        .then(()=>  {
            setComentario("");
            props.navigation.navigate("Homepage")
        })
        .catch ( e => console.log(e));

    }

    return(
        <View style= {styles.contenedor}> 
        <Text> comentarios </Text>

        <FlatList

            data = {comentarios}
            keyExtractor={(item)=> item.id }
            renderItem={({item}) => 
            (<View>
              <Text> {item.datos.email}</Text>  
              <Text> {item.datos.textoComentario}</Text>
              <Text> {item.datos.createdAt}</Text>
            </View>)}
        />

        <Text> comentar post: </Text>
        <TextInput 
            style = {styles.input}
            placeholder=" escribi tu comentario ...."
            value={comentario}
            onChange={(text)=> setComentario(text)}

        />

        <Pressable style= {styles.boton} onPress={() => agregarComentario()}>
            <Text> Publica tu comentario! </Text>

        </Pressable>

       
        </View>
    )

    // FALTA HACER EL CSS 
}

export default Comentarios;