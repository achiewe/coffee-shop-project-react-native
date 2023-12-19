import {ImageBackground, StyleSheet, View} from 'react-native';

export default function Advertisment() {
  return (
    <ImageBackground
      source={require('../../assets/coffeeImg.png')}
      resizeMode="contain"
      style={styles.coffeeImg}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  coffeeImg: {
    width: 315,
    height: 140,
  },
});
