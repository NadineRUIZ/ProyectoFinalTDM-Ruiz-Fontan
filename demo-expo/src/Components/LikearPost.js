import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Pressable, Text } from "react-native-web";
import { auth, db } from "../firebase/config";
import firebase from 'firebase';


function LikearPost(props) {
  


    function darLike() {

    const id = props.post.id;
    const likes = props.post.data.likes;
    const email = auth.currentUser.email;
        if (likes.includes(email)) {
            db.collection('posts')
                .doc(id)
                .update({
                    likes: firebase.firestore.FieldValue.arrayRemove(email)
                })

                .then(() => { })
                .catch(e => console.log(e))
        } else {
            db.collection('posts')
                .doc(id)
                .update({
                    likes: firebase.firestore.FieldValue.arrayUnion(email)
                })
                .then(() => { })
                .catch(e => console.log(e))
        }
    }


    return (
    <View>
        <Text style={style.corazon}>
            ❤️
            <Text style={style.cantLikes}>
                {props.post.data.likes.length}
            </Text>
        </Text>
        <Pressable onPress={darLike}>
            <Text>{likes.includes(email) ? "Quitar like" : "Me gusta"}</Text>
        </Pressable>

    </View>
)


}










export default LikearPost;