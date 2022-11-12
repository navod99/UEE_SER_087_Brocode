import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

export default function Confirmed({navigation}) {
    const handleEdit = () => {
        navigation.push('EditRequest')
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{position:'relative',width:'90%'}}>
                    <Text style={{ fontWeight: '700', marginTop: 15, fontSize: 20 }}>Tree Planting Campaign</Text>
                    <Feather onPress={handleEdit} style={{position:'absolute', marginTop: 15,alignSelf:'flex-end'}} name="edit" size={30} color="black" />
                    <Text style={{ marginTop: 3, fontWeight: '500', fontSize: 15 }}>Leo Club nilwala</Text>
                    <Text style={{ marginTop: 10, fontSize: 18,color:'grey',fontWeight:'600' }}>17 jul 2022 2.00 P.M.</Text>
                    <Text style={{ marginTop: 2,marginBottom:6,fontSize: 18,color:'grey',fontWeight:'600',textDecorationLine:'underline' }}>https//isjuxasxusxnas sax</Text>
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
        width: '90%',
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
