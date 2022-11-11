import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Professionals} from './Professionals';
import { Discussions } from './Discussions'
import { Clubs } from './Clubs';
export const Home = () => {
  const Drawer = createDrawerNavigator();
  return (
    
       <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Professionals" component={Professionals}  />
    <Drawer.Screen name="Clubs" component={ Clubs} />
      </Drawer.Navigator>
    </>
      
     
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
