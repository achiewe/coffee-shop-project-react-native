// Import necessary components and modules
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonBasket from './ButtonBasket';
import itemType from '../../typesData';
import {useSelector} from 'react-redux';
import {RootState} from '../../features/store';

// Define the props interface for the component
interface AddOnBasketProps {
  coffeeItems: itemType[];
}

// Functional component for displaying additional items in the basket
export default function AddOnBasket({
  coffeeItems,
}: AddOnBasketProps): JSX.Element {
  // Retrieve the total price from the Redux store using useSelector
  const totalPrice = useSelector(
    (store: RootState) => store.TotalPrice.TotalPrice,
  );

  // Render the component
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
              <Text style={styles.amountOfMoney}>
                $
                {totalPrice !== undefined
                  ? parseFloat(totalPrice) * 1 + 1.0
                  : 'N/A'}
              </Text>
            </View>
          </View>
          <Image source={require('../../assets/dots.png')} />
        </View>
        <ButtonBasket />
      </View>
    </View>
  );
}

// Styles for the component using StyleSheet.create
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
    display: 'flex',
    alignItems: 'center',
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
