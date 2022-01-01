
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export function TabBarMock(props) {
      
    return (
        <NavigationContainer>
                {props.children}
        </NavigationContainer>
    );
  }