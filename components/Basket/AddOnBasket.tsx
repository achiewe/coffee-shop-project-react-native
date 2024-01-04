import {StyleSheet, View} from 'react-native';

export default function AddOnBasket() {
  return (
    <View style={styles.addBasketView}>
      <View style={styles.lineStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  addBasketView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  lineStyle: {
    width: '100%',
    height: 1,
    backgroundColor: '#EAEAEA',
  },
});
