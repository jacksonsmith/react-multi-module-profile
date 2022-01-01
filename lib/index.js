import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Modules

function ProfileScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Navigator</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.setLoggedIn(false);
        }}></Button>
    </View>
  );
}

export function ProfileNavigator(props) {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={props}
      />
    </MainStack.Navigator>
  );
}
