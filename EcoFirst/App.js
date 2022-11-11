import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/Login';
import Signup from './app/Signup';
import { Tabs } from './app/Tab';
import AddProjects from './app/Projects/AddProjects'

export default function App() {
   const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: null,
            headerShown:false,
          }}
          
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          
          
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
           options={{
             title: null,
             headerShown:false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
          name='Add Project'
        component={AddProjects}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
