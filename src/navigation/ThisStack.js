import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/Login';
import Register from '../screen/Register';
import Welcome from '../screen/Welcome';

const Stack = createNativeStackNavigator();

const ThisStack = (props) => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {/* <Stack.Screen name='Welcome' component={Welcome} /> */}
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

export default ThisStack