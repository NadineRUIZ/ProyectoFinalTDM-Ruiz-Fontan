import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../screens/Homepage";
import Comentarios from "../screens/Comentarios";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Homepage" 
        component={Homepage} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Comentarios" 
        component={Comentarios} 
       
      />
    </Stack.Navigator>
  );
}

export default HomeStack;