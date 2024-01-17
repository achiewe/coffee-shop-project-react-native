import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BasketHeadline from './BasketHeadline';
import ItemDiscount from './ItemDiscount';
import Payment from './Payment';
import AddOnBasket from './AddOnBasket';
import data from '../../data.json';
import {useSelector} from 'react-redux';
import {RootState} from '../../features/store';

// component for the basket component
export default function Basket(): JSX.Element {
  const product = useSelector(
    (store: RootState) => store.AddProduct.AddProduct,
  );

  const coffeeItems = data.coffee_categories
    .flatMap(category => category.coffees)
    .filter(item => product.includes(item.id));

  console.log(coffeeItems);
  return (
    <ScrollView style={styles.mainContainer}>
      {coffeeItems.length < 1 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>Your basket is empty </Text>
          <Image
            style={styles.emptyBasketImg}
            source={require('../../assets/sadBasket.png')}
          />
        </View>
      ) : (
        <View style={styles.basketDiv}>
          <View style={styles.mainContainer}>
            <BasketHeadline coffeeItems={coffeeItems} />
            <ItemDiscount />
            <Payment coffeeItems={coffeeItems} />
            <AddOnBasket coffeeItems={coffeeItems} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

// style for the basket
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },

  basketView: {
    width: 154,
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  componentName: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#FFFFFF',
  },

  emptyView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },

  emptyText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  emptyBasketImg: {
    width: 70,
    height: 70,
  },

  basketDiv: {
    width: '100%',
    paddingBottom: 30,
  },
});
