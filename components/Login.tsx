import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.textDiv}>
          <Text style={styles.coffeeTitle}> he asdasdasdassdi</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 17,
  },

  coffeeTitle: {
    color: 'white',
  },
});
