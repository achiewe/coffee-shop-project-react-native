import {Image, StyleSheet, Text, View} from 'react-native';

export default function ImageTitle() {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/classicCappuccino.png')} />
      <View style={styles.titleRateCont}>
        <View style={styles.titleView}>
          <Text style={styles.title}> Cappucino</Text>
          <View style={styles.ratingView}>
            <Image source={require('../../assets/Rating.png')} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    marginTop: 29,
  },

  titleRateCont: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 97,
  },

  titleView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  ratingView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
