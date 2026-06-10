import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import Homepage from './src/screens/Homepage';





const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Login" component={ Login } /> 
        <Stack.Screen name="HomeMenu" component ={Homepage} /> 

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;