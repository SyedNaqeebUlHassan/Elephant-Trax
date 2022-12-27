import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputField from './Components/InputField';
import Login from './Screens/Login';
import SplashScreen from './Screens/SplashScreen';
import Email from './assets/Email.png'

export default function App() {
  return (
    // <SplashScreen/>
    <Login/>
    // <InputField image={Email}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
