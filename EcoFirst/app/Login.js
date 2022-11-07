import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { Image } from 'react-native';
import { logoeco } from '../assets/logoeco.png'

export default function Login({ navigation }) {
  const signupNavi = () => {
    navigation.push('Signup')
  }
  const loginNavi = () => {
    navigation.push('Home')
  }
  return (
    <SafeAreaView style={styles.container} >
      <View style={{}}>
        <Image source={require('../assets/logoeco.png')} style={{ width: 250, height: 250 }} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="User Name" />
        <TextInput
          style={styles.input}
          label="Password" />

        <TouchableOpacity
          onPress={loginNavi}
          style={styles.login_btn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
          <Text style={styles.signup_txt}> Do not have an account? </Text>
          <Pressable onPress={signupNavi}>
            <Text style={styles.signup}> Register </Text>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  input: {
    height: 60,
    width: "90%",
    marginTop: 24,
    padding: 10,
  },

  login_btn: {
    height: 50,
    width: "90%",
    marginTop: 24,
    padding: 10,
    backgroundColor: '#14AE5C',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  form: {
    position: 'absolute',
    top: 170,
    alignItems: 'center',
    width: '100%',
  },
  signup_txt: {
    marginTop: 12,
    
  },
  signup: {
    marginTop: 4,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#14AE5C',



  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    textAlign: 'center',
    flexDirection: 'row',
  }


});