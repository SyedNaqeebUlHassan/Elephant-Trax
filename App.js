
import {StyleSheet, } from 'react-native';
import Login from './Screens/Login';
import SignINScreen from './Screens/SignINScreen';
import ResetPassScreen from './Screens/ResetPassScreen';
import Home from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    // {/* // <SplashScreen/> */}
    // <Login/>
    // {/* // <InputField image={Email}/> */}
    // <SignINScreen/>
    // <Login/>
    // <ResetPassScreen/>
    // <Background/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignINScreen}/>
        <Stack.Screen name="Reset Pass" component={ResetPassScreen}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
