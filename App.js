// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import MapView from 'react-native-maps';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <Login />
//     </>
//   );
// };

// export default App;
// In App.js in a new project
// import Login from './src/component/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/component/Login';
import MainNavigators from './src/navigator/MainNavigators';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navigation" component={MainNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
