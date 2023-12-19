import {ImageBackground, StyleSheet, View} from 'react-native';

export default function Advertisment() {
  return (
    <View style={styles.viewImg}>
      <ImageBackground
        source={require('../../assets/coffeeImg.png')}
        resizeMode="contain"
        imageStyle={{borderRadius: 10}}
        style={styles.coffeeImg}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  viewImg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  coffeeImg: {
    width: 315,
    height: 140,
    marginTop: -60,
  },
});
