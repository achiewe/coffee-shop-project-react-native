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
      {itemId === 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>Empty Basket</Text>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <BasketHeadline coffeeItem={coffeeItem?.title} />
          <ItemDiscount />
          <Payment coffeeItem={coffeeItem} />
          <AddOnBasket coffeeItem={coffeeItem} />
        </View>
      )}
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

  emptyView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },

  emptyText: {},
});

export default Basket;
