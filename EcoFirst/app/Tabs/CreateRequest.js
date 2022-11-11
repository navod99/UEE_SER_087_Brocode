
import {React,useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Snackbar } from 'react-native-paper';
import axios from 'axios'
export const CreateRequest = () => {


  const [projectName, setProjectName] = useState('');
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('')
  const [color,setColr] = useState('')
  const [visible, setVisible] = useState(false)
  
  const submit = () => {
    const project = {
      projectName: projectName,
      clubName: clubName,
      startDate: '12/11/2022',
      endDate: "13/11/2022",
      description: description
    }

    axios.post('http://192.168.1.3:5000/requests/create', project)
      .then(() => {
        setMsg('Request Sent Sucessfully')
        setVisible(true)
        setColr('chartreuse')
      })
      .catch(() => {
      setMsg('Oops! Somthing Went Wrong')
        setVisible(true)
        setColr('crimson')
    })
  }

  const countries = ["Club", "Environmentalist"]

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView}>
        <View style={styles.formView}>
         
          <TextInput
            style={styles.input}
            label="Club Name"
            value={clubName}
            onChangeText={e=>setClubName(e)}
          />
           <TextInput
            style={styles.input}
            label="Project Name"
            value={projectName}
            onChangeText = {(e)=>setProjectName(e)}
          />
             
          <TextInput
            style={styles.input}
            label="Description"
            value = {description}
            onChangeText={e=>setDescription(e)}
          />
          
          <Button
            style={styles.login_btn}
            title="Add"
            onPress={submit}
          />
        </View>
      </ScrollView>
         <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          
          style={{backgroundColor: color}}
        >
        <View><Text>{msg }</Text></View>
        </Snackbar>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 60,
    width: "90%",
    padding: 5,
    marginTop: 15,
  },

  login_btn: {
    height: 50,
    width: "90%",
    padding: 10,
    marginTop: 15,
    backgroundColor: '#14AE5C'
  },
  scrollView: {
    flex: 1,
    width: '100%',

  },
  formView: {
    flex: 1,
    alignItems: 'center'
  },
  dropdownBtnStyle: {
    marginTop: 15,
    width: '88%',
    height: 60,
    backgroundColor: '#F5F5F5',
    borderBottomWidth:1,
    borderBottomColor: '#C9C9C9'
  },
  dropdownBtnTxtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  dropStyle: {
    marginTop:-24,
  },
  dropdownRowStyle: {borderBottomColor: '#C5C5C5', backgroundColor: '#F5F5F5'},
  dropdownRowTxtStyle: {
    textAlign: 'left',
  },

});