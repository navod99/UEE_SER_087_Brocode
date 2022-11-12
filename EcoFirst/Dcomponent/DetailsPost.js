import { View, Text } from 'react-native'
import React from 'react'
import { Answers } from './DisInfo'

import { COLORS, SIZES, FONTS } from '../constants'

const DetailsPost = ({bid}) => {
  return (
    <View style={{
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base
    }}>
      <Text style={{
        fontSize: SIZES.font,
        color:COLORS.primary
      }}>{bid.name}</Text>
      <Text style={{
        fontSize: SIZES.small-1,
        color:COLORS.secondary,
        marginTop:3,
      }}>{bid.date}</Text>

      <Answers price={bid.price}/>
    </View>
  )
}

export default DetailsPost