import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pending from '../Request/Pending';
import Confirmed from '../Request/Confirmed';

export const Request = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Pending" component={Pending} />
        <Drawer.Screen name="Confirmed" component={Confirmed} />
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
  card: {
    width:'90%',
    flexDirection: 'row',
    backgroundColor: '#DAF8DF',
    borderRadius: 40,
    marginTop:20
},

});