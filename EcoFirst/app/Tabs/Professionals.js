import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";

import UserAvatar from 'react-native-user-avatar'
export const Professionals = () => {
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
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text>All registerd Professionals</Text>
          </View>
                  {professionals.map((professional) => (
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
