import React from "react";
import { View } from "react-native-web";
import Homepage from "../screens/Homepage";
import NewPost from "../screens/NewPost";
import MiPerfil from "../screens/MiPerfil";

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