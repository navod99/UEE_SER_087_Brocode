import { View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONTS, SIZES, assets } from '../constants'
import { CircleButton } from './DButton'


const DisHeader = ({onSearch}) => {

    const navigation = useNavigation();

  return (
    <View style={{
        backgroundColor: COLORS.primary,
        padding:SIZES.font,

    }}>
      <View style={{ marginTop: SIZES.font }}>
       <View style={{
        width:'100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small -2
       }}>
        <Image
        source={assets.search}
        resizeMode="contain"
        style={{width: 20, height: 20, marginRight: SIZES.base}}/>
        <TextInput
         placeholder='Search'
         style={{flex:1}}
         onChangeText={onSearch}
        />
        <CircleButton 
        imgUrl={require('../assets/icons/add.png')} right={7} top={4}
        handlePress={()=> navigation.navigate('AddDiscussion')}/>
       </View>
      </View>
    </View>
  )
}

export default DisHeader