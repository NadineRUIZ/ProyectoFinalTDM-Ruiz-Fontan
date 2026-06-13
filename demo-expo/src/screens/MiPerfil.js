import { useEffect } from "react"
import { db, auth } from "../firebase/config";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native-web";



function MiPerfil(props) {

    const [dataUsuario, setDataUsuario] = useState("")
    const [posteos, setPosteos] = useState("")

    function logout() {

        auth.singout()
        props.navigation.navigate("Login")
    }


    useEffect(() => {
        db.collection('post')
            .where('email', '==', 'auth.currentUser.email')
            .onSnapshot(
                docs => {
                    let post = [];
                    docs.forEach(doc => {

                        if (doc.data().description !== "") {
                            post.push({
                                id: doc.id,
                                data: doc.data()
                            })

                        }


                        setPosteos(posts)
                    })


                }
            )


    })

    useEffect(() => {
        auth.onAuthStateChanged(user => {

            if (user == "")
                return;

            else (

                db.collection('users')
                    .where("email", "==", (auth.currentUser.email))
                    .onSnapshot(
                        docs => {
                            let users = [];
                            docs.forEach(doc => {
                                users.push({
                                    id: doc.id,
                                    data: doc.data()

                                })
                                SetDataUsuario(users)

                            })
                        }
                    )
            )

        })
    })


    return (
        <View
            style={style.container}>
            <Text style={style.datos}>
                {dataUsuario.length === 0 ? "Cargando" : `Usuario: ${dataUsuario[0]?.data?.usuario}`}
            </Text>

            <Text style={style.datos}>
                {dataUsuario.length === 0 ? "" : `Email: ${dataUsuario[0]?.data?.email}`}
            </Text>
            <Text>Mis posteos</Text>
            {posteos == "" ? <Text>No hay posteos</Text> :
             
             <FlatList
                    data={posteos}
                    keyExtractor={post => post.id.toString()}
                    renderItem={({ item }) => <Text>{item.description}</Text>} //chequear .descripcion de NewPost

                />
            }


        </View>

    )



}

const style = StyleSheet.create({
    container: {

    }
})


export default MiPerfil;