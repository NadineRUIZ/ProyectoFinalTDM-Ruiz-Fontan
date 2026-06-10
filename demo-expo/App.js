import { StatusBar } from 'expo-status-bar';
import Register from './src/Components/Register';
import Login from './src/Components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Components/Home';
import LikearPost from './src/Components/LikearPost';
import MiPerfil from './src/Components/MiPerfil';




const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Login" component={ Login } /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LikearPost" component={LikearPost} />
        <Stack.Screen name="MiPerfil" component={MiPerfil} />
    

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;