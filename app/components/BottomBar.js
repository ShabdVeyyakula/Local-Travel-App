import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../utilities/Color";




export default function BottomBar() {
  return (
    <View>
        <View style={styles.main}>
            <Ionicons name="grid-outline" color={Colors.TEXT} size={20} />
            <Ionicons name="navigate-outline" color={Colors.TEXT} size={20} />
            <Ionicons name="person-outline" color={Colors.TEXT} size={20} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        backgroundColor: Colors.NAV,
        height: 70,
        alignItems: 'center',
        bottom: 0

    }
})