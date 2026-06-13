import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/Screens/Register';
import Login from './src/Components/Login';
import Homepage from './src/Screens/Homepage';
import HomeMenu from './src/Components/HomeMenu';




const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={ Login } /> 
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Homepage" component ={Homepage} /> 
         <Stack.Screen name="HomeMenu" component ={HomeMenu} /> 

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;