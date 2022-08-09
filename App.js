import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import HomeScreen from './HomeScreen';
import StepsScreen from './StepsScreen';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Steps" component={StepsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
