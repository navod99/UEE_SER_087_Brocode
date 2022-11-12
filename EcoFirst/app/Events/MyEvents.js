import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import axios from 'axios'
import EditMenu from './EditMenu';

export default function MyEvents({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [events, setEvents] = useState([])

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const handleEditPage = () => {
        navigation.push('Editevent')
    }

    const handleView = (id) => {
        navigation.push('viewEvent', {
            eventId : id
        })
    }

    useEffect(() => {
        axios.get(`http://192.168.1.15:5000/events/viewEvents`)
            .then((res) => {
                setEvents(res.data)

            }).catch((err) => {
                console.log("error", err)
            })

    }, [])

    const formatTime = (time) => {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flex: 1, alignItems: 'center', marginBottom: 80 }}>

                    {events && events.map((event, index) => (
                        <View style={styles.card} key={index}>
                            <View>
                                <Image source={require('../../assets/logoeco.png')} style={{ width: 150, height: 150 }} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: '700', marginTop: 35, fontSize: 16 }}>{event.eventName}</Text>
                                <Text style={{ marginTop: 3 }}>{(new Date(event.date).getDate()) + '/' + (new Date(event.date).getMonth() + 1) + '/' +
                                    (new Date(event.date).getFullYear()) + ' ' + formatTime(new Date(event.time))}</Text>
                                <Text style={{ marginTop: 3 }}>3 days left</Text>
                                <TouchableOpacity style={styles.vieweventbtn}>
                                    <Text style={styles.viewEventText} onPress={() => handleView(event._id)}>View Event</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 15, width:50 }}>
                                {/* <Menu
                                    visible={visible}
                                    anchor={<MaterialIcons onPress={showMenu} name="more-vert" size={24} color="black" />}
                                    onRequestClose={hideMenu}
                                >
                                    <MenuItem onPress={handleEditPage}>Edit</MenuItem>
                                    <MenuItem onPress={hideMenu}>Delete</MenuItem>
                                </Menu> */}
                                <EditMenu id={event._id} navigation={navigation}/>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        width: '90%',
        flexDirection: 'row',
        backgroundColor: '#DAF8DF',
        height: 180,
        borderRadius: 40,
        marginTop: 20,
        position:'relative'
    },
    vieweventbtn: {
        width: "70%",
        height: 40,
        backgroundColor: '#0EA063',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 15
    },
    viewEventText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
});
