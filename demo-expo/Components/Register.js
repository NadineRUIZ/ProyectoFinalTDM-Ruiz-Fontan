import React from "react";

function Register() {
    const [registro, setRegistro] = useState("")
    const [usuario, setUsuario] = useState("")
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")
    const [registroError, setRegistroError] = useState("")

    function onSubmit() {

        if (usuario === "" || email === "" || password === "") {
            setRegistroError("Error: debe completar todos los campos")
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                setRegistro(true)
                props.navigation.navigate('Login')
            })

            .catch(error => {
                setRegistroError('Fallo en el registro')
            })


        db.collection('users').add({
            usuario: usuario,
            email: auth.currentUser.email,
            password: auth.currentUser.password,
            createdAt: Date.now()
        })
            .then()
            .catch(e => console.log(e))

    }

    function irALogin(){
        props.navigation.navigate('Login')
    }

    return (
        <View style={style.container}>
            <Text> Registro</Text>
            <TextInput style={style.texto}
                keyboardType='phone-pad'
                placeholder='Usuario'
                onChangeText={text => setUsuario(text)}
                value={usuario}
            />
            <TextInput style={style.texto}
                keyboardType='email-adress'
                placeholder='Email'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput style={style.texto}
                keyboardType='phone-pad'
                placeholder='Contraseña'
                securteTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />

            <Pressable style={style.boton} onPress={onSubmit} >
                <Text style={style.textoBoton}> Registrarme </Text>
            </Pressable>

            {registroError !== "" ? <Text style={style.errorRegistro}>{registroError}</Text> : null}

            <Pressable style={style.irALogin} onPress={irALogin}>
            <Text>
                Ir a Login
            </Text>
            </Pressable>

        </View>

    )
}


const style = StyleSheet.create({
    container: {
        padding: 10,
        margin: 20
    },

    texto: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10,
    },

    boton: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
    },

    textoBoton: {
        color: '#fff',
    },

    errorRegistro: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    }

})




export default Register;