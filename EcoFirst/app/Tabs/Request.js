import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export const Request = () => {
  return (
      <View style={styles.container}>
          <Text >
            Request
          </Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});