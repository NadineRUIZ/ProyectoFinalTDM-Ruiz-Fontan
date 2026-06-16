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
    
        backgroundColor: "#C1E0F7",
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#A4DEF9",
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 12,
        
        overflow: "hidden",
        gap: 10,
        marginHorizontal: 10,

   
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
        borderColor: "black",
        backgroundColor: "#77D7E4",
        gap: 6,
        width:100,
        textAlign:"center",

    },
    espacioimagen:{
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "white",

    }
})

export default PostCard;