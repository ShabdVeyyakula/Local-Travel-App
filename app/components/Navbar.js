import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Colors from "../utilities/Color";
export default function Navbar() {
  return (
    <View style={styles.main}>
      <Ionicons
        name="reorder-three-outline"
        color={Colors.TEXT}
        size={40}
      />

      <View style={styles.searchBox}>
        <Ionicons 
          name="search"
          color={Colors.TEXT}
          size={25}
        />
      <TextInput
        style={styles.inputBox}
        placeholder="Travel Destination..."
        placeholderTextColor= {Colors.TEXT}
        color="white"
      ></TextInput>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },

  searchBox: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 35,
  },

  inputBox: {
    marginLeft: 10,
    width: 150,
    height: 30
  }
});
