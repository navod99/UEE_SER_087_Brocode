import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function Pending({navigation}) {

    const handleAccept = () => {
        navigation.push('AcceptRequest')
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Text style={{ fontWeight: '700', marginTop: 15, fontSize: 20 }}>Tree Planting Campaign</Text>
                    <Text style={{ marginTop: 3,fontWeight: '500',fontSize: 15  }}>Leo Club nilwala</Text>
                    <Text style={{ marginTop: 3,fontSize: 14 }}>akdahd ajhasd ajhsdbaj sjdhabsjha djha djha jdbadjh aj djhsa dhs dhsa d</Text>
                    <View style={styles.btnWrapper}>
                        <TouchableOpacity style={styles.viewbtn}>
                            <Ionicons name="close" size={24} color="black" />
                            <Text style={styles.viewText}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.schedulebtn} >
                            <Ionicons name="checkmark" size={24} color="black" />
                            <Text style={styles.scheduleText} onPress={handleAccept}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    card: {
        width: '95%',
        flexDirection: 'row',
        backgroundColor: '#DAF8DF',
        borderRadius: 30,
        marginTop: 20,
        paddingLeft: 25
    },
    viewbtn: {
        width: "40%",
        height: 44,
        marginLeft: 6,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 20,
        flexDirection: 'row',
    },
    schedulebtn: {
        width: "40%",
        height: 44,
        padding: 10,
        backgroundColor: '#00B5EE',
        borderRadius: 20,
        flexDirection: 'row',
    },
    viewText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 18,
        fontWeight: '600',
    },
    scheduleText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 18,
        fontWeight: '600',
    },
    btnWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:12
    },
});
