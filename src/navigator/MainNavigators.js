import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../component/Login';
import Register from '../component/Register';
import Home from '../component/Home';
import Chat from '../screens/Chat';
import Maps from '../component/Maps';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Maps" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
