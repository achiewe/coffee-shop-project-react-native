import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonBasket from './ButtonBasket';

export default function AddOnBasket() {
  return (
    <View style={styles.addBasketView}>
      <View style={styles.lineStyle}>
        <View style={styles.paymentMethodCont}>
          <View style={styles.paymentCashCard}>
            <Image source={require('../../assets/moneys.png')} />
            <View style={styles.cashPrice}>
              <View style={styles.cashView}>
                <Text style={styles.cashText}> Cash</Text>
              </View>
              <Text style={styles.amountOfMoney}> $ 5.53</Text>
            </View>
          </View>
          <Image source={require('../../assets/dots.png')} />
        </View>
        <ButtonBasket />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addBasketView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    marginTop: 30,
  },

  lineStyle: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingTop: 16,
  },

  paymentMethodCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 40,
    paddingLeft: 40,
  },

  paymentCashCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 22,
  },

  cashPrice: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  cashView: {
    width: 51,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C67C4E',
  },

  cashText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
  },

  amountOfMoney: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#2F2D2C',
  },
});
