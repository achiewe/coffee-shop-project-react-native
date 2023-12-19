import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function Advertisment() {
  return (
    <View style={styles.viewImg}>
      <ImageBackground
        source={require('../../assets/coffeeImg.png')}
        resizeMode="contain"
        imageStyle={{borderRadius: 10}}
        style={styles.coffeeImg}>
        <View style={styles.promoView}>
          <Text style={styles.pomoTxt}> Promo</Text>
        </View>
        <View style={styles.promoTitleDiv}>
          <View style={styles.promoHalfTitle}>
            <Text style={styles.txt}> Buy one get</Text>
          </View>
          <View style={styles.promoHalfSecTitle}>
            <Text style={styles.txtSec}> one Free</Text>
          </View>
        </View>
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
    gap: 31,
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

  pomoTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },

  promoTitleDiv: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: 14.5,
  },

  promoHalfTitle: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    height: 27,
    position: 'relative',
  },

  txt: {
    color: '#FFF',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    position: 'absolute',
    top: -23,
  },

  promoHalfSecTitle: {
    width: 149,
    backgroundColor: '#1C1C1C',
    height: 23,
    position: 'relative',
  },

  txtSec: {
    color: '#FFF',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    position: 'absolute',
    top: -21,
  },
});
