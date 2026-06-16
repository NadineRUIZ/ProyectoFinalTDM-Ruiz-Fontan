import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import LikearPost from "../components/LikearPost";


function PostCard(props) {
    return (
        <View style={styles.cartaContenedora}>
            <Text style={styles.usuario}> {props.post.data.user}</Text>
            <View style = {styles.espacioimagen}>
                <Text> Imagen post</Text>
            </View>
            <Text style={styles.descripcion}> {props.post.data.description}</Text>
            <Text>{new Date(props.post.data.createdAt).toLocaleString()}</Text>
            <LikearPost style={styles.likes} post={props.post} />
            <Pressable onPress={() => props.navegar.navigate("Comentarios", { postId: props.post.id })}>
                <Text style={styles.boton} >Comentar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    cartaContenedora: {
        borderRadius: 12,
        borderWidth: 1,
        gap: 10,
        marginHorizontal: 60,
        backgroundColor: "#ffffff",
       
        padding: 20,
        marginBottom: 30,
        marginTop: 10,
    
        borderColor: "#d99ffc",

   
    },
    usuario:{
        fontWeight: "bold", 
        marginBottom: 8, 

    },
    descripcion:{
        fontSize:20,
        width:"100%",
       
    }, 
    likes:{
        fontSize:12,
    },
    boton:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#rgba(95, 0, 130, 0.4)",
        gap: 6,
        width:100,
        textAlign:"center",

    },
    espacioimagen:{
        width: "100%",
        height: 300,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "#rgba(95, 0, 130, 0.5)",
        borderRadius: 10,

    }
})

export default PostCard;