import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { Dimensions } from "react-native";
import { ConsoleLogger } from "@aws-amplify/core";
import Colors from "../utilities/Color";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomBar from "../components/BottomBar";

export default function DashScreen() {
  return (
    <View style={{flex:1}}>
      <Navbar />
      <View style={styles.container}></View>
      <View style={styles.noLocal}>
        <Image source={require("../../assets/map.png")} />
        <Text style={styles.noLocalTxt}>
          Find a local to talk to in{"\n"}your area
        </Text>
        <Pressable style={styles.noLocalBtn}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{color:"white"}}>Lets Go!</Text>
            <Ionicons name="arrow-forward-outline" color={"white"} size={20} style={{marginLeft: 45}}></Ionicons>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.3,
    backgroundColor: "red",
  },

  noLocal: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },

  noLocalTxt: {
    color: Colors.TEXT,
    fontSize: 20,
    textAlign: "center",
  },

  noLocalBtn: {
    width: 150,
    height: 40,
    backgroundColor: Colors.NAV,
    borderRadius: 7,
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 20


  },
});
