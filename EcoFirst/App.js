import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/Login';
import Signup from './app/Signup';
import { Tabs } from './app/Tab';
import ScheduleEvent from './app/Events/ScheduleEvent';
import MyEvents from './app/Events/MyEvents';
import EditEvent from './app/Events/EditEvent';
import ViewEvent from './app/Events/ViewEvent';
import AcceptRequestForm from './app/Request/AcceptRequestForm';
import EditRequestForm from './app/Request/EditRequestForm';
import { Home } from './app/Tabs/Home';
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
            headerShown: false,
          }}

        />
        <Stack.Screen
          name="Signup"
          component={Signup}


        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerShown: false,
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
          name="ScheduleEvent"
          component={ScheduleEvent}
          options={{
            title: "Schedule an Event",

          }}
        />
        <Stack.Screen
          name="MyEvents"
          component={MyEvents}
          options={{
            title: "My Events",

          }}
        />
        <Stack.Screen
          name="Editevent"
          component={EditEvent}
          options={{
            title: "Edit Event",
          }}
        />
        <Stack.Screen
          name="viewEvent"
          component={ViewEvent}
          options={{
            title: "Event",
          }}
        />
        <Stack.Screen
          name="AcceptRequest"
          component={AcceptRequestForm}
          options={{
            title: "Accept Form",
          }}
        />
        <Stack.Screen
          name="EditRequest"
          component={EditRequestForm}
          options={{
            title: "Edit Form",
          }}
        />
        
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
