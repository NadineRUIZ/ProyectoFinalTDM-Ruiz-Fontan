import React from "react";
import Homepage from "../screens/Homepage";
import MiPerfil from "../screens/MiPerfil";
import crearPosts from "../components/CrearPost";
import Comentarios from "../screens/Comentarios"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";



const Tab = createBottomTabNavigator();

function HomeMenu(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options= { {headerShown: false}, {tabBarIcon: () => <MaterialIcons name="home" size={24} color="black" />}} />
            <Tab.Screen name="crearPosts" component={crearPosts} options={ {headerShown: false}, {tabBarIcon: () => <AntDesign name="plus-circle" size={24} color="black"/> }} / >
            <Tab.Screen name="MiPerfil" component={MiPerfil} options={{tabBarIcon: () => <MaterialCommunityIcons name="human-female-dance" size={24} color="black" />}}/>
           
        </Tab.Navigator>
    )
}

export default HomeMenu;