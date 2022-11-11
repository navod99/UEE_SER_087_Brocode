import {React,useEffect,useState} from 'react'
import { Text, View,StyleSheet, ScrollView, Button, Pressable } from 'react-native'
import UserAvatar from 'react-native-user-avatar'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';
export const Account = ({ navigation }) => {
  
const [visible, setVisible] = useState(false);
  const [projects,setProjects] = useState([])
  const addProjects = () => {
   navigation.navigate('Add Project')
  }

  useEffect(() => {
    const getProjects = async () => {
      axios.get('http://192.168.1.3:5000/projects/viewProjects')
        .then((res) => { setProjects(res.data) })
    }
    getProjects();
  })
   const hideDialog = () => setVisible(false); 
  return (
  <View >
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
      <View style = {styles.projectsTitle}>
        <Text
          style={{
          fontWeight: 'bold',
          fontSize: 30
          }}>
          Projects
        </Text>
        <Pressable onPress={addProjects}>
          <View >
            <Ionicons
          style={{
           left:200
          }}
          name="add-circle" size={40} color="black" />
          </View>
          </Pressable>
        
        
        </View>
        {projects.map((project) => (
          <View style={styles.projectDetails}>
        <View style={styles.project}>
          <View style = {styles.nameBtn}>
            <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{project.projectName }</Text>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>{project.startDate }</Text>
            </View>
            <View style={styles.editDelete} >
              <TouchableHighlight>
              <Entypo name="edit" size={24} color="black" />
              </TouchableHighlight>
              <TouchableHighlight>
                <AntDesign style={{ marginTop: 10 }} name="delete" size={24} color="red" />
                </TouchableHighlight>
            </View>
          </View>
          
         
          <View  style={styles.showProjectbtn}>
            <Button title='Show Project' color={'white'} />
           </View>
        </View>
        </View>

        )) }
      
       
      </ScrollView>

     
      </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    top: 20,
    
    
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
    // borderBottomWidth:1,
    margin: 3,
    width: '95%',
    height: 180,
    backgroundColor:'white'
    //backgroundColor: '#1EEE41',
    
  },
  showProjectbtn: {
    flex:0.3,
    position: 'relative',
   
    backgroundColor: '#075F5D',
    width: '40%',
    height:'10%',
    left:'30%'
    
  },
  nameBtn: {
    flex:0.6,
    flexDirection:'row'
  },
  editDelete: {
    
    //flexDirection:'row',
    left:200
  },
  projectsTitle: {
    flexDirection:'row',
    position: 'relative',
    top: 120,
    left: 10,
     alignItems:'baseline'
  }
});