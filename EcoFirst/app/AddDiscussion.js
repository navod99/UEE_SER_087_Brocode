import { Button } from '@react-native-material/core'
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SubmitButton } from '../Dcomponent'

import { COLORS,SIZES, SHADOWS, assets } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'


const AddDiscussion = () => {
  return (
    <SafeAreaView>
        <Text style={{padding:15, marginLeft:80, fontSize:25, marginBottom:10 ,fontWeight:'bold'}}>Add Discussion</Text>
        <Text style={{padding:10, fontSize:20, fontStyle:'italic'}}>Title*</Text>
        <TextInput 
        style={{marginLeft:10, marginRight:10 , marginBottom:15 ,padding:5 ,backgroundColor:'rgba(72,122,180,0.2)'}}/>
        <Text style={{padding:10, fontSize:20, fontStyle:'italic'}}>Description*</Text>
        <TextInput 
        style={{marginLeft:10, marginRight:10 , marginBottom:15 ,padding:60 ,backgroundColor:'rgba(72,122,180,0.2)'}}/>
         <Text style={{padding:10, fontSize:20, fontStyle:'italic'}}>Image (Optional)</Text>
        <TextInput  placeholder='choose a file'
        style={{marginLeft:10, marginRight:10 , marginBottom:15 ,padding:5 ,backgroundColor:'rgba(72,122,180,0.2)'}}/>
        <SubmitButton/>
    </SafeAreaView>
  )
}

export default AddDiscussion