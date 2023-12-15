import {ImageBackground, StyleSheet, View} from 'react-native';

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
  },

  bgImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});
