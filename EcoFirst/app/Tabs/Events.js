import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import axios from 'axios'

export const Events = ({ navigation }) => {

    const scheduleEvent = () => {
        navigation.push('ScheduleEvent')
    }

    const viewMyEvents = () => {
        navigation.push('MyEvents')
    }

    const handleView = (id) => {
        navigation.push('viewEvent', {
            eventId : id
        })
    }

    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        axios.get(`http://192.168.1.15:5000/events/viewEvents`)
            .then((res) => {
                setUpcoming(res.data)

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
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
                <View style={{ flex: 1, alignItems: 'center',marginBottom:80}}>
                    <View style={styles.btnWrapper}>
                        <TouchableOpacity style={styles.schedulebtn} onPress={scheduleEvent}>
                            <MaterialCommunityIcons name="clock" size={24} color="white" />
                            <Text style={styles.scheduleText}>Schedule An Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewbtn} onPress={viewMyEvents}>
                            <MaterialCommunityIcons name="eye" size={24} color="white" />
                            <Text style={styles.viewText}>View My events</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.upcommingEvents}>
                        <Text style={styles.upcommingText}>Upcomming Events</Text>
                    </View>
                    {upcoming.map((event, index) => (
                        <View style={styles.card} key={index}>
                            <View>
                                <Image source={require('../../assets/logoeco.png')} style={{ width: 150, height: 150 }} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: '700', marginTop: 15, fontSize: 16 }}>{event.eventName}</Text>
                                <Text style={{ marginTop: 3,fontSize: 16  }}>{(new Date(event.date).getDate()) + '/' + (new Date(event.date).getMonth() + 1) + '/' + 
                                (new Date(event.date).getFullYear()) + ' ' + formatTime(new Date(event.time))}</Text>
                                <TouchableOpacity style={styles.vieweventbtn}>
                                    <Text style={styles.viewEventText} onPress={ () => handleView(event._id)}>View Event</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    schedulebtn: {
        width: "45%",
        height: 44,
        padding: 10,
        backgroundColor: '#00B5EE',
        borderRadius: 20,
        flexDirection: 'row',
    },
    scheduleText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 16,
        fontWeight: '600',
    },
    viewbtn: {
        width: "42%",
        height: 44,
        marginLeft: 6,
        padding: 10,
        backgroundColor: '#F1560B',
        borderRadius: 20,
        flexDirection: 'row',
    },
    viewText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 16,
        fontWeight: '600',
    },
    btnInside: {
        flex: 1,
        flexDirection: 'row',
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    upcommingText: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20,
    },
    upcommingEvents: {
        width: '100%',
        marginTop: 40
    },
    card: {
        width: '90%',
        flexDirection: 'row',
        backgroundColor: '#DAF8DF',
        borderRadius: 40,
        marginTop: 20,
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
