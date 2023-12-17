import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import SignInButton from './SignInButton';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={styles.linearGradient}>
        <ImageBackground
          source={require('../assets/coffeebg.png')}
          resizeMode="contain"
          style={styles.image}>
          <View style={styles.textDiv}>
            <Text style={styles.coffeeTitle}>
              Coffee so good, your taste buds will love it.
            </Text>
            <Text style={styles.paraCoffee}>
              The best grain, the finest roast, the powerful flavor.
            </Text>
            <SignInButton />
          </View>
        </ImageBackground>
      </LinearGradient>
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
    marginBottom: 100,
    width: '100%',
  },

  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    elevation: 0,
  },

  textDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
    marginBottom: -60,
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
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    width: 250,
  },
});
