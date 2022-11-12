import React from 'react'
import { Text, View, TextInput} from 'react-native'
import { SafeAreaView, FlatList, Image, StatusBar } from 'react-native'

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectangleButton, DisInfo, FocusedStatusBar, DetailsDesc, DetailsPost, DisHeader, SubmitButton} from '../Dcomponent';


const DetailHeader = ({data, navigation}) => (
    <View style={{width:"100%", height:373}}>
        <Image
        source={data.image}
        resizeMode="cover"
        style={{width:"100%", height:"100%"}}
      
        />
    </View>
)
  

const DiscussionView = ({route, navigation}) => {

const {data} = route.params;



  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
        />

        <FlatList
        data={data.bids}
        renderItem={({item})=><DetailsPost bid={item}/>}
        keyExtractor={(item)=> item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge*3}}
        ListHeaderComponent={()=>(
            <React.Fragment>
                <DetailHeader data={data} navigation={navigation}/>
                <DisInfo/>
                
                <View style={{padding: SIZES.font}}>
                    <DetailsDesc data={data}/>
                    <View>
                <TextInput
                 placeholder='Add a Reply'
                 style={{flex:1, marginBottom:10 ,padding:5 ,backgroundColor:'rgba(72,122,180,0.2)'}}
                />
                <SubmitButton/>
                </View>
                 {data.bids.length >0 && (
                    <Text style={{
                        fontSize:SIZES.font,
                        padding:10,
                        fontWeight:"bold",
                        color:COLORS.primary
                    }}>
                    Other Replies,
                    </Text>
                 )}   

                </View>
            </React.Fragment>
        )}
        />
    </SafeAreaView>
  )
}

export default DiscussionView