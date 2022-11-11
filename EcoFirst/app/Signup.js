import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Signup() {

  const [name, SetName] = useState('');
  const [mobileNo, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [userRole, setUserRole] = useState('');
  const [password, setPassword] = useState('');
  const signup = () => {
    console.log("Touch")
  }

  const countries = ["Club", "Environmentalist"]

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView}>
        <View style={styles.formView}>
          <TextInput
            style={styles.input}
            label="Name"
            value={name}
            onChangeText={e=>SetName(e)}
             />
             <TextInput
            style={styles.input}
            label="Mobile No"
            value={mobileNo}
            onChangeText={e=>setMobile(e)}
             />
          <TextInput
            style={styles.input}
            label="Email"
            
            value={email}
            onChangeText={e=>setEmail(e)}
             />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            defaultButtonText={"Register As"}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownStyle={styles.dropStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
            
          />
          <TextInput
            style={styles.input}
            label="Password"
            value={password}
            onChangeText={e=>setPassword(e)}
          />
          <TextInput
            style={styles.input}
            label="Re-Enter Password"
            textContentType='password' />
          <Button
            style={styles.login_btn}
            title="Signup"
            onPress={() => { console.log("press") }}
          />
        </View>
      </ScrollView>
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