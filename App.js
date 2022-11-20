import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Colors from './app/utilities/Color';

import WelcomeScreen from './app/screens/WelcomeScreen';

//hola
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
  },
});
