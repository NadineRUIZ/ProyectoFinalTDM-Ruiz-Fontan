import React from "react";
import Homepage from "../screens/Homepage";
import MiPerfil from "../screens/MiPerfil";
import NewPost from "../screens/NewPost";

function HomeMenu(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Homepage" component={Homepage} />
            <Tab.Screen name="NewPost" component={NewPost}/>
            <Tab.Screen name="MiPerfil" component={MiPerfil}/>
        </Tab.Navigator>
    )
}

export default HomeMenu;