import { View, Text } from 'react-native'
import {useState} from 'react'

import { DiscussTitle  } from './DisInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({data}) => {
  return (
    <View style={{
        width:'100%',
        alignItems:'center'}}>

      <DiscussTitle
      title={data.name}
      subTitle={data.creator}
      titleSize={SIZES.extraLarge}
      subTitleSize={SIZES.font}
      />

      <View style={{marginVertical:SIZES.extraLarge * 1.5}}>
       <Text style={{fontSize: SIZES.font, color:COLORS.primary}}>Best Answer!</Text>
       <View style={{marginTop: SIZES.base}}>
       <Text style={{fontSize: SIZES.small, color:COLORS.secondary, lineHeight:SIZES.large}}>{data.description}</Text>
       </View>
      </View>

    </View>
  )
}

export default DetailsDesc