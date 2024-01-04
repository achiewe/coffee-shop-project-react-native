import {StyleSheet, View} from 'react-native';
import BasketHeadline from './BasketHeadline';
import ItemDiscount from './ItemDiscount';
import Payment from './Payment';
import AddOnBasket from './AddOnBasket';

// component for the basket component
export default function Basket(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <BasketHeadline />
      <ItemDiscount />
      <Payment />
      <AddOnBasket />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});
