import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';



export default function DashScreen() {
  return (
    <View style={styles.page}>
      <Navbar />
      <View style={styles.container}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
  });