import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/Components/Register';
import Login from './src/Components/Login';
import HomeMenu from './src/Components/HomeMenu';


function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Register" component={ Register} />
        <Stack.Screen name="Login" component={ Login } /> 
        <Stack.Screen name="HomeMenu" component ={HomeMenu} /> 

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;