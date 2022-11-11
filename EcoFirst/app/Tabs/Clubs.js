import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar'
export const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    const [search, setSearch] =useState('')
    useEffect(() => {
        const getAllProfesionals = async () => {
            axios.get('http://192.168.1.3:5000/clubs/viewClubs')
                .then((res) => setClubs(res.data))
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
        <View style={styles.container} >
          
                  {clubs.filter(c=>c.clubName.toLowerCase().includes(search)).map((club) => (
                       <View style={styles.professionalList}>
                      <View style = {styles.userPrfile}>
                          <UserAvatar size={100} name = {club.clubName}/>
                      </View>
                      <View style = {styles.userDetails}>
                              <Text style={{
                                  fontSize: 20,
                              fontWeight:'bold'}}>
                          {club.clubName}
                              </Text>
                              <Text style={{
                                  fontSize: 18,
                                  marginTop:10,
                             }}>
                          {club.city}
                              </Text>
                              <Text style={{
                                  fontSize: 18,
                                  marginTop:10,
                             }}>
                                  {club.memberCount} members
                      </Text>
                      </View>
                     
          </View>
    
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
