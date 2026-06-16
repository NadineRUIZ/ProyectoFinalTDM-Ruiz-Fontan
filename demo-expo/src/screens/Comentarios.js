import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, StyleSheet, View, FlatList, FlatListComponent } from "react-native";
import { db, auth } from "../firebase/config";

function Comentarios(props) {
    const [comentarios, setComentarios] = useState([])
    const [comentario, setComentario] = useState("")

    useEffect(() => {
        db.collection("comentarios")
        .orderBy("createdAt", "desc")
                .onSnapshot(docs => {

                    let arrayComentarios = [];

                    docs.forEach(doc => {
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
            postId: props.route.params.postId,
            email: auth.currentUser.email,
            textoComentario: comentario,
            createdAt: Date.now()
        })
            .then(() => {
                setComentario("");
                props.navigation.navigate("Homepage")
            })
            .catch(e => console.log(e));

    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}> comentarios </Text>

            <FlatList

                data={comentarios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                (<View style={styles.comentarioCard}>
                    <Text style={styles.email}> {item.datos.email}</Text>
                    <Text style={styles.coment}> {item.datos.textoComentario}</Text>
                    <Text style={styles.fecha}> {new Date(item.datos.createdAt).toLocaleString()}</Text>
                </View>)}
            />

            <Text style={styles.textBoton}> comentar post: </Text>
            <TextInput

                style={styles.comentario}

                keyboardType="default"
                placeholder=" escribi tu comentario ...."
                value={comentario}
                onChangeText={(text) => setComentario(text)}

            />

            <Pressable style={styles.boton} onPress={() => agregarComentario()}>
                <Text style={styles.textoBotonPublica}> Publica tu comentario! </Text>

            </Pressable>


        </View>
    )


}

const styles = StyleSheet.create({

    titulo: {
        fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",

    },
    contenedor: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        marginBottom: 12,
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
    },

    comentario: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#d99ffc",
    },

    email: {
        fontWeight: "bold",
        color: "#8e24aa",
        marginBottom: 4,

    },

    comentarioCard: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#d99ffc",

    },

    coment: {
        fontSize: 15,
        color: "#333",
        marginBottom: 4,
    },

    fecha: {
        fontSize: 11,
        color: "#999",

    }



});


export default Comentarios;