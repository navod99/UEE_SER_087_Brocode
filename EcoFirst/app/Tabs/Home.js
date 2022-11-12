import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Request } from './Request'
import { Discussions } from './Discussions'
import { Events } from './Events';

export const Home = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Clubs" component={Discussions} />
        <Drawer.Screen name="Professionals" component={Discussions} />
      </Drawer.Navigator>
    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
