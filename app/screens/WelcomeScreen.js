import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import Colors from '../utilities/Color'


export default function WelcomeScreen() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Local</Text>
      <Image source={require("../../assets/welcome.png")} style={styles.img}></Image>
      <Text style={styles.title}>Have Fun Travelling</Text>
      <View style={{flex:1, justifyContent: "flex-end"}}>
      <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({

    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        
    },

    background: {
        backgroundColor: Colors.BACKGROUND,
        flex: 1
    },

    title: {
        color: Colors.TEXT,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 60,
    },

    img: {
        height: 200,
        width: 200,
        marginTop: 50,
    },

    btn: {
        backgroundColor: Colors.NAV,
        height: 60,
        width: 310,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 30,
    },

    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }

})