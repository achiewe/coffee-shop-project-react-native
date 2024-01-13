import {StyleSheet, Text, View} from 'react-native';
import ItemQuantity from './ItemQuantity';

interface coffeItemProp {
  coffeeItem:
    | {
        id: number;
        title: string;
        price: number;
        image: string;
        description: string;
        rating: number;
      }
    | undefined;
}

// component basketHeadline
export default function BasketHeadline({
  coffeeItem,
}: coffeItemProp): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.basketView}>
        <Text style={styles.componentName}>Basket</Text>
      </View>
      <ItemQuantity />
    </View>
  );
}

// basketHeadline styles
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
});
