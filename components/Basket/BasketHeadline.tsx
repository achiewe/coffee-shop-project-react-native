import {StyleSheet, Text, View} from 'react-native';
import ItemQuantity from './ItemQuantity';
import itemType from '../../typesData';

interface BasketHeadlineProps {
  coffeeItems: itemType[];
}

// component basketHeadline
export default function BasketHeadline({
  coffeeItems,
}: BasketHeadlineProps): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {coffeeItems.map(item => (
        <ItemQuantity key={item.id} coffeeItem={item.title} />
      ))}
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
});
