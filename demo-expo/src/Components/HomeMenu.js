import React from "react";
import { View } from "react-native-web";
import Home from "./Home";
import NewPost from "./NEwPost";
import MiPerfil from "./MiPerfil";

function HomeMenu(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="NewPost" component={NewPost}/>
            <Tab.Screen name="MiPerfil" component={MiPerfil}/>
        </Tab.Navigator>
    )
}

export default HomeMenu;