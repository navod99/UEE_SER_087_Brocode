import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,ScrollView, Pressable } from "react-native";
import { Searchbar } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar'
export const Professionals = ({navigation,route}) => {
    const [search, setSearch] =useState('')
    const [professionals, setProfessionals] = useState([]);
    useEffect(() => {
        const getAllProfesionals = async () => {
            axios('http://192.168.1.3:5000/professionals/viewProfessionals')
                .then((res) => setProfessionals(res.data))
                .catch(err => console.log(err))
            
        }
        getAllProfesionals();
    })
  return (
      <>
          <View  style = {{width:'98%',top:5}} >
           <Searchbar
      placeholder="Search"
      onChangeText={txt =>setSearch(txt.toLowerCase())}
                          value={search.toLowerCase()}
                         
    />
          </View>
      <ScrollView>
        <View style={styles.container}>
          
                  {professionals.filter(c => c.professionalName.toLowerCase().includes(search)).map((professional) => (
                      <Pressable onPress={()=> navigation.navigate('professionalDetails',{id:professional._id})}>
                       <View style={styles.professionalList}>
                      <View style = {styles.userPrfile}>
                          <UserAvatar size={100} name = {professional.professionalName}/>
                      </View>
                      <View style = {styles.userDetails}>
                              <Text style={{
                                  fontSize: 20,
                              fontWeight:'bold'}}>
                          {professional.professionalName}
                              </Text>
                              <Text style={{
                                  fontSize: 18,
                                  marginTop:10,
                             }}>
                          {professional.city}
                              </Text>
                              <Text style={{
                                  fontSize: 18,
                                  marginTop:10,
                             }}>
                                  {professional.experience}
                      </Text>
                      </View>
                     
                          </View>
                          </Pressable>
    
))}
                 
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
    professionalList: {
        flexDirection: 'row',
        margin: 5,
    padding:5,
    backgroundColor:'mediumseagreen',
        width: "98%",
     // height:'100%',
      position: 'relative',
        top: 50,
    borderRadius:20
    },
    userPrfile: {
        flex: 0.5,
        marginRight: 50,
        
        marginLeft: 10,
        
      
    },
    userDetails: {
        flex:1
    }
});
