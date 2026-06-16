import { useEffect } from "react"
import { db, auth } from "../firebase/config";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator, FlatList } from "react-native-web";
import PostCard from './PostCard';



function MiPerfil(props) {

    const [dataUsuario, setDataUsuario] = useState([])
    const [posteos, setPosteos] = useState("")
    const [loading, setLoading] = useState(true)

    function logout() {
        auth.signOut()
            .then(() => {
                props.navigation.navigate("Login");
            });
    }


    useEffect(() => {
        auth.onAuthStateChanged(usuario => {

            if (usuario == null)
                return;

            
             db.collection('posts')
            .where('user', '==', auth.currentUser.email)
            .orderBy("createdAt", "desc")
                .onSnapshot(
                    docs => {
                        let post = [];
                        docs.forEach(doc => {
                                    post.push({
                                    id: doc.id,
                                    data: doc.data()
                                });

                            
                            setPosteos(post)

                        });


                    });


    });

        
 }, []);
        




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
                                setLoading(false)
                            })
                        }
                    )
            )

        })
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="violet" />;
    }

    return (
        <View
            style={style.container}>
            <View style={style.header}>
                <Text style={style.usario}>
                    {dataUsuario.length === 0 ? "Cargando" : <Text style={style.usuario}> {dataUsuario[0].data.usuario}</Text>}
                </Text>

                <Text style={style.email}>
                    {dataUsuario.length === 0 ? "" : <Text style={style.email}>{dataUsuario[0].data.email}</Text>}
                </Text>

                <Pressable onPress={logout} style={style.botonLogout}>
                    <Text style={style.textoLogout}>Cerrar Sesion</Text>
                </Pressable>
            </View>

            <FlatList
                data={posteos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PostCard post={item} navegar={props.navigation} />
                )}
            />







        </View>

    )



}

const style = StyleSheet.create({
    container: {
        flex: 1

    },
    usuario: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 16,
    },
    email: {
        fontSize: 18,
        color: "gray",
        marginTop: 8,
        marginLeft: 10,
        marginBottom: 20,
    },

    botonLogout: {
        backgroundColor: "#6200ea",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,


    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    textoLogout: {
        color: "white",
        fontSize: 13,
    }
})


export default MiPerfil;