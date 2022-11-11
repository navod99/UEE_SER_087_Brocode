import {React,useEffect,useState} from 'react'
import { Text, View,StyleSheet, ScrollView, Button, Pressable } from 'react-native'
import UserAvatar from 'react-native-user-avatar'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';

export const ProfessionalsDetails = ({ navigation, route }) => {
    
    const id = route.params.id
    const [professional, setProfessional] = useState();
const [visible, setVisible] = useState(false);
  const [projects,setProjects] = useState([])
  const addProjects = () => {
   navigation.navigate('Add Project')
  }

  useEffect(() => {
    
      const getProf = async () => {
        await axios.get(`http://192.168.1.3:5000/professionals/viewProfessionals/${id}`)
              .then((res) => {  setProfessional(res.data);  console.log('ss')})
              .catch((err) => console.log(err))
          
      }
      const getProjects = async () => {
     await axios.get(`http://192.168.1.3:5000/projects/viewProjects`)
        .then((res) => { setProjects(res.data) })
      }
      getProjects();
      getProf();
      console.log(professional)
  },[])
   
  return (
  <View >
    <ScrollView >
      <View style={styles.container}>
      <View style={styles.profile}>
        <UserAvatar name={'Name'} size={100}  />
                      {/* <Text style={styles.name}>{professional.professionalName}</Text> */}
          <Text style = {{fontSize:20}}>Environmentalist</Text>
        </View>
        <View style={styles.profileDes}>
          <Text>
            {/* {professional.description} */}
            
          </Text>  

        </View>
        <Button title='Request' onPress={()=>navigation.navigate('CreateRequest')} />
              </View>
              
      <View style = {styles.projectsTitle}>
        <Text
          style={{
          fontWeight: 'bold',
          fontSize: 30
          }}>
          Projects
        </Text>
       
        
        
        </View>
        {projects.map((project) => (
          <View style={styles.projectDetails}>
        <View style={styles.project}>
          <View style = {styles.nameBtn}>
            <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{project.projectName }</Text>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>{project.startDate }</Text>
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
      alignItems: 'center',
    justifyContent:'center',
    position: 'relative',
    top:150,
  },
  project: {
    //borderWidth: 1,
    // borderBottomWidth:1,
    margin: 3,
    width: '95%',
    height: 180,
      backgroundColor: 'white',
    alignItems:'center'
    //backgroundColor: '#1EEE41',
    
  },
  showProjectbtn: {
    flex:0.3,
    position: 'relative',
   
    backgroundColor: '#075F5D',
    width: '40%',
    height:'10%',
    
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