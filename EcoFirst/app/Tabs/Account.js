import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'

export const Account = () => {
  return (
    <ScrollView>
      <View style={styles.profile}>
          <Text>ssdwcwsd</Text>
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    position: 'relative',
    top:'10',
    backgroundColor: '#C8CCBF',
      
    width: '90%',
    height: '20%'
  },
});