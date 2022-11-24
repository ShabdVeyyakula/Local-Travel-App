import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Colors from "./app/utilities/Color";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import DashScreen from "./app/screens/DashScreen";

//hola
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <DashScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
