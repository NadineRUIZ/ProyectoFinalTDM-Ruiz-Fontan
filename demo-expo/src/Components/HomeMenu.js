import React from "react";
import Homepage from "../screens/Homepage";
import MiPerfil from "../screens/MiPerfil";
import crearPosts from "../components/PostCard";
import Comentarios from "../screens/Comentarios"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

function HomeMenu(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Homepage" component={Homepage} options= {{tabBarIcon: () => <MaterialIcons name="home" size={24} color="black" />}} />
            <Tab.Screen name="crearPosts" component={crearPosts} options={{tabBarIcon: () => <AntDesign name="plus-circle" size={24} color="black"/> }}/>
            <Tab.Screen name="MiPerfil" component={MiPerfil} options={{tabBarIcon: () => <MaterialCommunityIcons name="human-female-dance" size={24} color="black" />}}/>
            <Tab.Screen name="Comentarios" component={Comentarios} options={{tabBarIcon: () => <MaterialCommunityIcons name="comment-outline" size={24} color="black" />}}/>
        </Tab.Navigator>
    )
}

export default HomeMenu;