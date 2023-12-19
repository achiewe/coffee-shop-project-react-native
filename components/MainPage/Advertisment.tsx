import {ImageBackground, StyleSheet, View} from 'react-native';

export default function Advertisment() {
  return (
    <View style={styles.viewImg}>
      <ImageBackground
        source={require('../../assets/coffeeImg.png')}
        resizeMode="contain"
        imageStyle={{borderRadius: 10}}
        style={styles.coffeeImg}>
        <View style={styles.promoView}></View>
      </ImageBackground>
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
    paddingLeft: 24,
    paddingBottom: 8,
    paddingTop: 13,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  promoView: {
    width: 60,
    height: 26,
    backgroundColor: '#ED5151',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
