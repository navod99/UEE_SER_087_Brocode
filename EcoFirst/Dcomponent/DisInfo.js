import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'


export const DiscussTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{fontStyle:'italic', fontSize: titleSize,
    color:COLORS.primary}}>{title}</Text>
    <Text style={{ fontSize: subTitleSize,
    color:COLORS.primary}}>{subTitle}</Text>
    </View>
  )
}

export const Date = () => {
    return (
      <View
       style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
       }}>
        <Text style={{ 
            fontSize:SIZES.small,
            color:COLORS.primary
             }}>Posted
             </Text>
        <Text style={{ 
            fontSize:SIZES.medium,
            color:COLORS.primary
             }}>3 days ago
             </Text>
      </View>
    )
  }
  
  export const Answers = ({price}) => {
    return (
      <View>
        <Text>{price}</Text>
      </View>
    )
  }

  export const DisInfo = () => {
    return (
      <View style ={{
        width:"100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection:"row",
        justifyContent:'space-between'
      }}>
        <Date/>
        
      </View>
    )
  }
  
  
  