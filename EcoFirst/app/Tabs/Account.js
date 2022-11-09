import React from 'react'
import { Text, View,StyleSheet, ScrollView, Button } from 'react-native'
import UserAvatar from 'react-native-user-avatar'
export const Account = () => {
  return (
    <ScrollView >
      <View style={styles.container}>
      <View style={styles.profile}>
        <UserAvatar name={'Name'} size={100}  />
          <Text style={styles.name}>ssdwcwsd</Text>
          <Text style = {{fontSize:20}}>ssdwcwsd</Text>
        </View>
        <View style={styles.profileDes}>
          <Text>
            I’m a research scientist working to better understand how neural
            activity motivates and shapes human behavior. My expertise includes project design and management,
            data analysis and interpretation, and the development and implementation of research tools.
            
          </Text>  

        </View>
      </View>
      <View style={styles.projectDetails}>
        <View style = {styles.project}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Project Name</Text>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Project Name</Text>
          <Button style = {styles.showProjectbtn} title='Show Project' color={'#075F5D'}/>
        </View>
         <View style = {styles.project}>
          <Text>Project Name</Text>
        </View>
         <View style = {styles.project}>
          <Text>Project Name</Text>
        </View>
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    top:90
    
  },
  name: {
    fontSize: 30,
    fontWeight:'bold'
  },
  profile: {
    
    position: 'relative',
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8CCBF',
    height: 200,
    width: '98%',
    padding:10
  },
  profileDes: {
   
    margin:10,
    position: 'relative',
    marginTop:5,
    
  },
  projectDetails: {
    flex: 2,
    alignItems:'center',
    position: 'relative',
    top:150,
  },
  project: {
    //borderWidth: 1,
    borderBottomWidth:1,
    margin: 3,
    width: '90%',
    height: 180,
    
    //backgroundColor: '#1EEE41',
    
  },
  showProjectbtn: {
    position: 'relative',
    
    backgroundColor: '#075F5D',
    
  }
});