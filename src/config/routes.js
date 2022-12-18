import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/register/register';
const Stack = createNativeStackNavigator();

//Création du router
const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;