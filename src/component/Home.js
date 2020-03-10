import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Ionicons';
import Chat from 'react-native-vector-icons/Ionicons';
import Maps from '../component/Maps';
function HomeScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return <Maps />;
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: () => (
            <View>
              <Chat size={35} name={'md-chatbubbles'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: () => (
            <View>
              <Feather size={35} name={'md-map'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
