import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Pressable, Text } from "react-native-web";

function LikearPost() {
    const [likes, setLikes] = useState(0)


    function darLike() {
        setLikes(likes + 1)

    }

    // Cada posteo tiene un campo "likes" que es un array de emails. cuando el usuario toca "Me Gusta" pregunto: 
    // if (posteo.likes.includes(userEmail)) {
    // dislike = quitar like
    //} else {
    // like = agregar like
    // }
    //};

    // si no esta en el array, le das like arrayUnion(auth.currentUser.email)
    // si ay esta en el array, le quia=to el like arrayRemove(auth.currentUser.email)

    return (
        <View>
            <Text style={style.corazon}>❤️<Text style={style.cantLikes}>{likes}</Text></Text>
            <Pressable onPress={darLike} style={style.botonLike}>
                <Text style={style.meGusta}>Me gusta</Text>
                <Text></Text>
            </Pressable>
        </View>

    )
}

const style = StyleSheet.create({
    corazon: {

    },

    botonLike: {

    },

    meGusta: {

    },

    cantLikes: {

    },
})


export default LikearPost;