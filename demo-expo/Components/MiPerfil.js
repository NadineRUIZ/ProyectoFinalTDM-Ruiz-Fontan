import React, { useEffect } from "react";


function MiPerfil() {

    const [dataUsuario, setDataUsuario] = useState("")
    const [posteos, setPosteos] = useState("")

    function logout(){

        auth.singout()
    }

    useEffect(() => {
        db.collection('posts')
        .where('owner', '==', 'auth.currentUser.email')
        .onSnapshot(
            docs => {
                let posts = [];
                docs.forEach( doc => {
                    //Traer las descripciones obtenidas en el archivo de crear posteo
                    

                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })

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
                    .where("owner", "==", (auth.currentUser.email))
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
        <View style={style.container}>
            <Text style={style.perfil}> Mi Perfil</Text>
            <Text style={style.datos}>
                {dataUsuario == [] ? <Text>Cargando</Text> : <View><Text> {dataUsuario[0].data.user} </Text></View>}
                  </Text>
        </View>

    )



}

const style = StyleSheet.create({
    container: {

    }
})


export default MiPerfil;