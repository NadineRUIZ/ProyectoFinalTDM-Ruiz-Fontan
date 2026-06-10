import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native-web";

function Home(props){

    function irALike(){
        return(
             props.navigation.navigate('LikearPost')

        )
  }
    
  function irAPerfil(){
        return(
            props.navigation.navigate('MiPerfil')
        )
    }
       
  
    return(
        <View>
        <Pressable onPress={irALike}> 
 <Text>Likes</Text>
        </Pressable>

        <Pressable onPress={irAPerfil}> 
 <Text>Mi perfil</Text>
        </Pressable>
       
        </View>
    )

}

export default Home;