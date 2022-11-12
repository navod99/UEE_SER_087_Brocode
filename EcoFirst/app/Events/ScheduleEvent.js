import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { TextInput, Button, Stack } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { Snackbar, ActivityIndicator } from "@react-native-material/core";

export default function ScheduleEvent({ navigation }) {
    const [datePicker, setDatePicker] = useState(false);

    const [timePicker, setTimePicker] = useState(false);
    const [singleFile, setSingleFile] = useState('');
    let times = null
    const [st, setSt] = useState(null)

    const [name, setName] = useState('')
    const [venue, setVenue] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')
    const [time, setTime] = useState(new Date(Date.now()));
    const [date, setDate] = useState(new Date())
    const [snackVisible, setSnackVisible] = useState(false)

    const snack = () => {
        setSnackVisible(true)
        setTimeout(() => {
            navigation.push('Home')
        }, 2000);
    }


    function showDatePicker() {
        setDatePicker(true);
    }

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onTimeSelected(event, value) {
        console.log('times', times)
        setTime(value);
        setTimePicker(false);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setSt(result.assets[0].uri);
        }
    }

    const handleSubmit = () => {
        console.log(name, venue, description, budget, date, time)
        const body = {
            eventName: name,
            venue: venue,
            date: date,
            time: time,
            estimatedBudjet: budget,
            description: description,
        }

        axios.post(`http://192.168.1.15:5000/events/create`, body)
            .then((res) => {
                console.log(res.data, "res")
                setName('')
                setVenue('')
                setDescription('')
                setBudget('')
                snack()


            }).catch((err) => {
                console.log("error", err)
            })

    }

    return (
        <SafeAreaView style={styles.container} >
            {snackVisible &&
                <View>
                    <Snackbar
                        message="Sucessfully schedule the event"
                        action={<Button variant="text" title="Dismiss" color="white" compact />}
                        style={{ position: "absolute", start: 16, end: 16, backgroundColor: '#4caf50', zIndex: 999 }}
                    />
                        <ActivityIndicator size="large" style={{ position: "absolute", zIndex: 2000, top:250, start: 48, end: 48 }} />
                </View>
            }
            <ScrollView style={styles.scrollView}>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.input}
                        label="Event Name*"
                        value={name}
                        onChangeText={newText => setName(newText)}
                    />
                    <TextInput
                        style={styles.input}
                        label="Venue*"
                        value={venue}
                        onChangeText={newText => setVenue(newText)}
                    />

                    <TouchableOpacity style={styles.viewdate} onPress={showDatePicker}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="calendar" size={30} color="black" />
                            {date ?
                                <Text style={{ marginLeft: 10, marginTop: 5 }}>{date.toDateString()}</Text>
                                :
                                <Text style={{ marginLeft: 10, marginTop: 5 }}>Select Date*</Text>
                            }
                        </View>
                    </TouchableOpacity>
                    {datePicker &&
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onDateSelected}
                        />
                    }


                    <TouchableOpacity style={styles.viewdate} onPress={showTimePicker}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="clock" size={30} color="black" />
                            {date ?
                                <Text style={{ marginLeft: 10, marginTop: 5 }}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                :
                                <Text style={{ marginLeft: 10, marginTop: 5 }}>Select Time*</Text>
                            }
                        </View>
                    </TouchableOpacity>
                    {timePicker && (
                        <DateTimePicker
                            value={time}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={false}
                            onChange={onTimeSelected}
                        />
                    )}

                    <TextInput
                        style={styles.input}
                        label="Description"
                        value={description}
                        onChangeText={newText => setDescription(newText)}
                        multiline
                    />
                    <TextInput
                        style={styles.input}
                        label="Estimated Budget (Optional)"
                        value={budget}
                        onChangeText={newText => setBudget(newText)}
                    />

                    <Button
                        style={styles.login_btn}
                        title="Schedule Event"
                        onPress={handleSubmit}
                    />
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
    input: {
        height: 60,
        width: "90%",
        padding: 5,
        marginTop: 20,
    },

    login_btn: {
        height: 50,
        width: "90%",
        padding: 10,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#14AE5C'
    },
    scrollView: {
        flex: 1,
        width: '100%',

    },
    formView: {
        flex: 1,
        alignItems: 'center'
    },
    dropdownBtnStyle: {
        marginTop: 15,
        width: '88%',
        height: 60,
        backgroundColor: '#F5F5F5',
        borderBottomWidth: 1,
        borderBottomColor: '#C9C9C9'
    },
    dropdownBtnTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    dropStyle: {
        marginTop: -24,
    },
    dropdownRowStyle: { borderBottomColor: '#C5C5C5', backgroundColor: '#F5F5F5' },
    dropdownRowTxtStyle: {
        textAlign: 'left',
    },
    viewdate: {
        backgroundColor: '#F5F5F5',
        width: "90%",
        paddingLeft: 10,
        marginTop: 20,
        height: 60,
        justifyContent: 'center'
    },

});