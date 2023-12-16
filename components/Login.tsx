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
          <Text style={styles.coffeeTitle}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.paraCoffee}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
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
    justifyContent: 'flex-end',
  },
  textDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
  },

  coffeeTitle: {
    color: 'white',
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    width: 280,
  },

  paraCoffee: {
    color: '#A9A9A9',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    width: 250,
  },
});
