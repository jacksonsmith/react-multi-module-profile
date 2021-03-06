/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 import {TabBarMock} from './TabBar.mock'
 import { ProfileNavigator } from './lib/';
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <TabBarMock children={ProfileNavigator(undefined)}></TabBarMock>
   );
 };
 
 
 export default App;
 