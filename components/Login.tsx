import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

export default function Login(): JSX.Element {
  return (
    <View style={styles.MainCont}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover" // Try changing this to "contain"
        style={styles.bgImage}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  MainCont: {
    flex: 2,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },

  bgImage: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
});
