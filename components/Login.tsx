import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
      <View style={styles.textDiv}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  textDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 17,
  },
});
