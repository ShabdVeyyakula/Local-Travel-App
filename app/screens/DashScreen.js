import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoic2hhYmRndiIsImEiOiJja3gyZWpzaGIxaTh0MzN0OWJzeGJwenhuIn0.58wv6DxgJHGQ5EbG1NrXqg');

export default function DashScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: 300,
      width: 300,
    },
    map: {
      flex: 1
    }
  });