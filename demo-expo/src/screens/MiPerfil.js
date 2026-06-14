import { useEffect } from "react"
import { db, auth } from "../firebase/config";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Text, Pressable } from "react-native-web";



function MiPerfil(props) {

    const [dataUsuario, setDataUsuario] = useState([])
    const [posteos, setPosteos] = useState("")

   function logout() {
  auth.signOut()
    .then(() => {
      props.navigation.navigate("Login");
    });
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
        auth.onAuthStateChanged(usuario => {

            if (usuario == null)
                return;

            else (

                db.collection('users')
                    .where("email", "==", (usuario.email))
                    .onSnapshot(
                        docs => {
                            let users = [];
                            docs.forEach(doc => {
                                users.push({
                                    id: doc.id,
                                    data: doc.data()

                                })
                                setDataUsuario(users)

                            })
                        }
                    )
            )

        })
    })


    return (
        <View
            style={style.container}>
            <Text>
                {dataUsuario.length === 0 ? "Cargando" : <Text style={style.usuario}> {dataUsuario[0].data.usuario}</Text>}
            </Text>

            <Text style={style.datos}>
                {dataUsuario.length === 0 ? "" : <Text style={style.email}>{dataUsuario[0].data.email}</Text>}
            </Text>

            <Pressable onPress={logout}>
                <Text>Cerrar Sesion</Text>
            </Pressable>

            
             


        </View>

    )



}

const style = StyleSheet.create({
    container: {

    }
})


export default MiPerfil;