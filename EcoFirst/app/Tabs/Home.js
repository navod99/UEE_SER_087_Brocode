import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Request } from './Request'
import { Discussions } from './Discussions'
export const Home = () => {
  const Drawer = createDrawerNavigator();
  return (
    
       <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Request}  />
    <Drawer.Screen name="Notifications" component={ Discussions} />
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
