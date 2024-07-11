import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screens/StartScreen/indexStart';
import LoginScreen from '../Screens/LoginScreen/indexLogin';
import RegisterScreen from '../Screens/RegisterScreen/indexRegister';
import TaskDetailScreen from '../Screens/TaskDetailScreen/indexTaskDetail';
import TaskScreen from '../Screens/TaskScreen/indexTask';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
            name="Start" 
            component={StartScreen} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} 
            />
        <Stack.Screen 
            name="Sign In" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="Task" 
            component={TaskScreen} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="Task Detail" 
            component={TaskDetailScreen} 
            options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
