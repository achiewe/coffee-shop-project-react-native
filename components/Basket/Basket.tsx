import {StyleSheet, View} from 'react-native';
import BasketHeadline from './BasketHeadline';
import ItemDiscount from './ItemDiscount';
import Payment from './Payment';
import AddOnBasket from './AddOnBasket';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Basket'>;

// component for the basket component
const Basket: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  return (
    <View style={styles.mainContainer}>
      <BasketHeadline />
      <ItemDiscount />
      <Payment />
      <AddOnBasket />
    </View>
  );
};

// style for the basket
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default Basket;
