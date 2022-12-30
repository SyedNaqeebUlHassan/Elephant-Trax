
import {StyleSheet, } from 'react-native';
import Login from './Screens/Login';
import SignINScreen from './Screens/SignINScreen';
import ResetPassScreen from './Screens/ResetPassScreen';
import Home from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePackageScreen from './Screens/CreatePackageScreen';
import SavePackageScreen from './Screens/SavePackageScreen';
import AddItemScreen from './Screens/AddItemScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FindScreen from './Screens/FindScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignINScreen}/>
        <Stack.Screen name="Reset Pass" component={ResetPassScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Create Package" component={CreatePackageScreen}/>
        <Stack.Screen name="Save Package" component={SavePackageScreen}/>
        <Stack.Screen name="Add Item" component={AddItemScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name='Find' component={FindScreen}/>
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
