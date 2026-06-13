import React from "react";
import Homepage from "../Screens/Homepage";
import MiPerfil from "../Screens/MiPerfil";
import NewPost from "../Screens/NewPost";

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