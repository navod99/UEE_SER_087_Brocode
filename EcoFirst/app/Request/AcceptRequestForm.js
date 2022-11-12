import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function AcceptRequestForm() {
    return (
        <View style={styles.container} >
            <Text>
                AcceptRequestForm
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
