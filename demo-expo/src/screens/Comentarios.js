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
            });
             setComentarios(arrayComentarios)
        });
    
    }, []);


    function agregarComentario() {
        db.collection("comentarios").add({
            postId: props.route.params.id,
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

        <Text style = {styles.textBoton}> comentar post: </Text>
        <TextInput 
             keyboardType= "default"
            placeholder=" escribi tu comentario ...."
            value={comentario}
            onChangeText={(text)=> setComentario(text)}

        />

        <Pressable style= {styles.boton} onPress={() => agregarComentario()}>
            <Text style= {styles.textoBotonPublica}> Publica tu comentario! </Text>

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

        textBoton: {
            color: "black",
            textAlign: "center",
    
        },
        textoBotonPublica: {
            color: "white",
        }
    });


export default Comentarios;