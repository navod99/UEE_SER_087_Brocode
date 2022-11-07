import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './Tabs/Home'
import { Discussions } from './Tabs/Discussions'
import { Request } from './Tabs/Request'
import { Account } from './Tabs/Account'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#14AE5C',
                    elevation: 0,
                    height: 60,
                    borderTopWidth: 0,

                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {focused ?
                                <>
                                    <Entypo name='home' style={style.activeBtn} size={45} />
                                    <Text style={style.activeTxt} >Home</Text>
                                </>
                                :
                                <>
                                    <Ionicons name="ios-home-outline" size={35} color="black" />
                                    <Text>Home</Text>
                                </>
                            }
                        </View>
                    ))
                }}
            />
            <Tab.Screen
                name='Discussions'
                component={Discussions}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {focused ?
                                <>
                                    <Ionicons name="chatbubble-sharp" style={style.activeBtn} size={45} />
                                    <Text style={style.activeTxt} >Discussions</Text>
                                </>
                                :
                                <>
                                    <Ionicons name="chatbubble-outline" size={35} color="black" />
                                    <Text>Discussions</Text>
                                </>
                            }
                        </View>
                    ))
                }}
            />
            <Tab.Screen
                name='Request'
                component={Request}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {focused ?
                                <>
                                    <FontAwesome name="telegram" style={style.activeBtn} size={45}  />
                                    <Text style={style.activeTxt} >Requests</Text>
                                </>
                                :
                                <>
                                    <EvilIcons name="sc-telegram" size={45} color="black" />
                                    <Text>Requests</Text>
                                </>
                            }

                        </View>
                    ))
                }} />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            {focused ?
                                <>
                                    <MaterialCommunityIcons name="account-circle" style={style.activeBtn} size={45} />
                                    <Text style={style.activeTxt} >Account</Text>

                                </>
                                :
                                <>
                                    <MaterialCommunityIcons name="account-circle-outline" size={35} color="black" />
                                    <Text >Account</Text>

                                </>

                            }
                        </View>
                    ))
                }} />
        </Tab.Navigator>
    )
}


const style = StyleSheet.create(
    {
        shadow: {
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
        },
        activeBtn: {
            top: -15,
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 2
        },
        activeTxt: {
            top: -10,
            fontWeight:'bold'
        }
    }

)
