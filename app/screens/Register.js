import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import React from 'react'
import Colors from '../utilities/Color'

export default function Register() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Hello{"\n"}Welcome Back!</Text>
      <Text style={styles.moto}>Some cool travel phrase will write later something somethimg something</Text>
      <TextInput style={styles.inputBox} placeholder="Name" placeholderTextColor="#BABABA">

      </TextInput>
      <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#BABABA">

      </TextInput>
      <TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="#BABABA" secureTextEntry={true}>
        
      </TextInput>
      <TextInput style={styles.inputBox} placeholder="Repeat Password" placeholderTextColor="#BABABA" secureTextEntry={true}>
        
        </TextInput>
      <Pressable style={styles.btn}>
        <Text style={styles.btntxt}>Register</Text>
      </Pressable>
      <Text style={{color:'#BABABA', marginTop: 30}}>Or</Text>
    </View>
  )
}

const styles = StyleSheet.create({


    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    title: {
        color: Colors.TEXT,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
    },

    moto: {
        color: '#AAAAAA',
        textAlign: 'center',
        width: 280,
        marginTop: 30,
        marginBottom: 20,

    },

    inputBox: {
        placeholderTextColor: 'white',
        backgroundColor: Colors.NAV,
        height: 60,
        width: 340,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
        color: 'white',
        paddingLeft: 10
    },

    btn: {
        backgroundColor: Colors.TEXT,
        height: 60,
        width: 340,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
        color: 'white',
    },

    btntxt: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    }
})