import {Image, StyleSheet, View} from 'react-native';

export default function ItemQuantity() {
  return (
    <View style={styles.viewQuantity}>
      <View style={styles.imageTitleView}>
        <Image
          style={styles.coffeeImage}
          source={require('../../assets/classicCappuccino.png')}
        />
        <View style={styles.titleView}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewQuantity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 43,
  },

  imageTitleView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
  },

  coffeeImage: {
    width: 54,
    height: 54,
  },

  titleView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
});
