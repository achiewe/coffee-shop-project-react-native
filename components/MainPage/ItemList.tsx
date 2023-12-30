import {Image, StyleSheet, Text, View} from 'react-native';
import data from '../../data.json';

const cappuccinoCoffee = data.coffee_categories.find(
  category => category.category === 'Cappuccino',
);

export default function ItemList() {
  return (
    <View style={styles.mainContainer}>
      {cappuccinoCoffee &&
        cappuccinoCoffee.coffees.map(item => (
          <View style={styles.itemView} key={item.id}>
            <View style={styles.imageTitle}>
              <Image source={{uri: `../../assets/${item.image}`}} />
              <Text>{item.title}</Text>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: 14,
    columnGap: 24,
    flexWrap: 'wrap',
  },

  itemView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },

  imageTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});
