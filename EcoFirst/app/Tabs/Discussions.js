import React from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'


import {COLORS, NFTData} from '../../constants';
import { DiscussionCard, DisHeader, FocusedStatusBar } from '../../Dcomponent';

export const Discussions = () => {

const [discussionData, setDiscussionData] = useState(NFTData);

const handleSearch = (value) =>{
   if(!value.length) setDiscussionData(NFTData);

   const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

   if(filteredData.length){
    setDiscussionData(filteredData);
   }else{
    setDiscussionData(NFTData);
   }

}

    return (
        <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar backgroundColor={COLORS.primary}/>

            <View style={{flex:1}}>
                <View style={{zIndex:0}}>
                    <FlatList
                    data={discussionData}
                    renderItem={({item}) =><DiscussionCard data={item}/>}
                    keyExtractor={(item)=>item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<DisHeader onSearch={handleSearch}/>}
                    />
                </View>
                <View style={{
                    position:"absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    <View style={{height: 300, backgroundColor: COLORS.primary}}/>
                    <View style={{flex: 1, backgroundColor: COLORS.white}}/> 

                </View>
            </View>


        </SafeAreaView>
    )
}
