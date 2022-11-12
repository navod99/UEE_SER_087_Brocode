import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios'

export default function ViewEvent({ route }) {
    const { eventId } = route.params;
    const [event, setEvent] = useState()

    useEffect(() => {
        axios.get(`http://192.168.1.15:5000/events/viewEvents/${eventId}`)
            .then((res) => {
                setEvent(res.data)
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
            <View style={{ position: 'relative', alignItems: 'center', width: '98%' }}>
                <Text style={{ fontWeight: '700', fontSize: 20, marginTop: 30 }}>
                    {event && event.eventName}
                </Text>
                <MaterialCommunityIcons style={{ position: 'absolute', marginTop: 30, alignSelf: 'flex-end' }} name="share-variant" size={30} color="black" />
                <View>
                    <Image source={require('../../assets/Treeplant.png')} style={{ width: 250, height: 180, marginTop: 10 }} />
                </View>

            </View>
            <View style={{ marginRight: 6 }}>
                <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30, marginLeft: 30 }}>
                    {event && (new Date(event.date).getDate()) + '/' + (new Date(event.date).getMonth() + 1) + '/' +
                        (new Date(event.date).getFullYear()) + ' ' + formatTime(new Date(event.time))}
                </Text>
                <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 20, marginLeft: 30 }}>
                    Venue - {event && event.venue}
                </Text>
                <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 20, marginLeft: 30 }}>
                    {event && event.description}
                </Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});