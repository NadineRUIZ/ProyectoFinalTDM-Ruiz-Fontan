import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Pressable, Text } from "react-native-web";
import { auth, db} from "../firebase/config";

function LikearPost(props) {
    const [likes, setLikes] = useState(0)


    function darLike() {

        if (posteo.data.likes.includes(auth.currentUser.email)) {
            let nuevosLikes = props.posteo.data.likes.filter(email => email !== auth.currentUser.email)

            db.collection("posts")
                .doc(props.posteo.id).
                update({
                    likes: nuevosLikes
                });
        } else {
            props.posteo.data.likes.push(emailUsuario);

            db.collection("posts").doc(props.posteo.id).update({
                likes: props.posteo.data.likes
            });

        }


        return (
            <View>
                <Text style={style.corazon}>
                    ❤️
                    <Text style={style.cantLikes}>
                        {props.posteo.data.likes.length}
                    </Text>
                </Text>

                <Pressable onPress={darLike} style={style.botonLike}>
                    <Text style={style.meGusta}>
                        {props.posteo.data.likes.includes(auth.currentUser.email) ? "Quitar me gusta" : "Me gusta"}
                    </Text>
                </Pressable>
            </View>
        )

    }

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