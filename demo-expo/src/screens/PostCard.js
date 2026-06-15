import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import LikearPost from "../components/LikearPost";



function PostCard(props){

    return(
        <View style= {styles.cartaContenedora}>
            <Text style = {styles.usuario}> {props.post.data.user}</Text>
            <Text style = {styles.descripcion} > {props.post.data.description}</Text>
            <Text> {props.post.data.createdAt}</Text>
            <LikearPost style  = {styles.likes} post={props.post} />
            
        </View>


    );

}

const styles = StyleSheet.create({

    cartaContenedora: {
        backgroundColor: "#dedcdc", 
        padding: 15, 
        borderRadius: 5, 
        borderColor: "#d99ffc",
        borderWidth: 1,
        alignItems: "center",

    },
    usuario:{
        fontWeight: "bold", 
        marginBottom: 8, 
    },
    descripcion:{
        fontSize:18,
    }, 
    likes:{
        fontSize:12,
    }
})

export default PostCard;