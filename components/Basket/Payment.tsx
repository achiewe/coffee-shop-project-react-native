// import packages
import {StyleSheet, Text, View} from 'react-native';
import itemType from '../../typesData';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features/store';
import {useEffect} from 'react';
import {setTotalPrice} from '../../features/TotalPriceSlice';

// state type
interface PaymentProps {
  coffeeItems: itemType[];
}

export default function Payment({coffeeItems}: PaymentProps): JSX.Element {
  // Redux selectors to get total price and quantity from the store
  const totalPrice = useSelector(
    (store: RootState) => store.TotalPrice.TotalPrice,
  );
  const quantity = useSelector((store: RootState) => store.quantity.quantities);

  // Redux dispatcher for updating total price in the store
  const dispatch = useDispatch();

  const calculateTotalPrice = (): number => {
    let totalPrice = 0;
    for (let i = 0; i < coffeeItems.length; i++) {
      totalPrice += coffeeItems[i].price * quantity[i];
    }
    // Dispatching action to update total price in the store
    dispatch(setTotalPrice(totalPrice.toFixed(2)));
    return totalPrice;
  };

  // useEffect to recalculate total price whenever the quantity changes
  useEffect(() => {
    calculateTotalPrice();
  }, [quantity]);

  return (
    <View style={styles.containetPayment}>
      <Text style={styles.paymentText}> Payment Summary</Text>
      <View style={styles.priceContainer}>
        <View style={styles.priceDeliveryView}>
          <View style={styles.priceDelView}>
            <Text style={styles.priceTitle}> Price</Text>
            <Text style={styles.amountPrice}>${totalPrice}</Text>
          </View>
          <View style={styles.priceDelView}>
            <Text style={styles.priceTitle}> Delivery Fee</Text>
            <View style={styles.deliveryAmount}>
              <Text style={styles.amountPriceSale}> $ 2.0</Text>
              <Text style={styles.amountPrice}>$ 1.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.priceDelView}>
          <Text style={styles.priceTitle}> Total Payment</Text>
          <Text style={styles.amountPrice}>
            $
            {totalPrice !== undefined
              ? parseFloat(totalPrice) * 1 + 1.0
              : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  containetPayment: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 9,
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 21,
  },

  paymentText: {
    color: '#2F2D2C',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },

  priceContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 21,
  },

  priceDeliveryView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },

  priceDelView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2F2D2C',
    fontStyle: 'normal',
  },

  deliveryAmount: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  amountPrice: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  amountPriceSale: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textDecorationLine: 'line-through',
    color: '#2F2D2C',
  },

  lineStyle: {
    width: 315,
    height: 1,
    backgroundColor: '#EAEAEA',
  },
});
