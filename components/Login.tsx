import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

export default function Login(): JSX.Element {
  return (
    <View style={styles.MainCont}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover"
        style={styles.bgImage}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: 'red',
  },

  bgImage: {
    flex: 1,
  },
});
