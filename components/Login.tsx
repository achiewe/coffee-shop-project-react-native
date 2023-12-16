import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/coffeebg.png')}
        resizeMode="cover"
        style={styles.image}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}
        />
        <View style={styles.textDiv}>
          <Text style={styles.coffeeTitle}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.paraCoffee}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
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

  linearGradient: {
    flex: 1,
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
    paddingBottom: 15,
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

  button: {
    width: 317,
    height: 54,
    backgroundColor: '#FFF',
  },
});
