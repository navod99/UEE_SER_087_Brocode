import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS, assets} from '../constants';
import { CircleButton, RectangleButton } from './DButton';
import { DiscussTitle, DisInfo, Date } from './DisInfo';

const DiscussionCard = ({data}) => {

  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge, 
      margin: SIZES.base,
      ...SHADOWS.dark}}>

      <View style={{width: "100%", height:250}}>
        <Image source={data.image}
        resizeMode="cover"
        style={{
          width:"100%",
          height:"100%",
          borderTopLeftRadius: SIZES.font,
          borderBottomRightRadius: SIZES.font}}/>

          <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>

      <DisInfo/>
      <View style={{width:"100%", padding:SIZES.font}}>
        <DiscussTitle
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.large}
        subTitleSize={SIZES.small}/>

<View style={{
          marginTop:SIZES.font,
          flexDirection: "row",
          marginLeft:100,
          justifyContent:"space-between",
          alignItems:"center",
        }}>
        <RectangleButton
           minWidth={120}
           fontSize={SIZES.font}
           handlePress={()=> navigation.navigate("DiscussionView", {data})}/>

        </View>
      </View>
    </View>
  )
}

export default DiscussionCard