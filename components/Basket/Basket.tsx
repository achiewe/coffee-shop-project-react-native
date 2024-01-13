import {StyleSheet, Text, View} from 'react-native';
import BasketHeadline from './BasketHeadline';
import ItemDiscount from './ItemDiscount';
import Payment from './Payment';
import AddOnBasket from './AddOnBasket';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import data from '../../data.json';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Basket'>;

// component for the basket component
const Basket: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  const coffeeItem = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    <View style={styles.mainContainer}>
      <BasketHeadline />
      <ItemDiscount />
      <Payment />
      <Text> </Text>
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
