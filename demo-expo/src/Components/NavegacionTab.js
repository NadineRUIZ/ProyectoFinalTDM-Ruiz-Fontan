import React from "react";
import { View } from "react-native-web";
import Homepage from "../Screens/Homepage";
import NewPost from "../Screens/NewPost";
import MiPerfil from "../Screens/MiPerfil";

function NavegacionTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Homepage" component={Homepage} options= {{tabBarIcon: () => <MaterialIcons name="home" size={24} color="black" />}} />
            <Tab.Screen name="NewPost" component={NewPost} options={{tabBarIcon: () => <AntDesign name="plus-circle" size={24} color="black"/> }}/>
            <Tab.Screen name="MiPerfil" component={MiPerfil} options={{tabBarIcon: () => <MaterialCommunityIcons name="human-female-dance" size={24} color="black" />}}/>
        </Tab.Navigator>
    )
}

export default NavegacionTab;