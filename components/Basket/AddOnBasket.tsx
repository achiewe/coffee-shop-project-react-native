import {Image, StyleSheet, View} from 'react-native';

export default function AddOnBasket() {
  return (
    <View style={styles.addBasketView}>
      <View style={styles.lineStyle} />
      <View style={styles.paymentMethodCont}>
        <View style={styles.paymentCashCard}>
          <Image source={require('../../assets/Heart.png')} />
        </View>
      </View>
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
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#EAEAEA',
    borderWidth: 1,
  },

  paymentMethodCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  paymentCashCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
  },
});
