import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../../data.json';

export default function ItemList() {
  const cappuccinoCoffee = data.coffee_categories.find(
    category => category.category === 'Cappuccino',
  );

  return (
    <View style={styles.mainContainer}>
      {cappuccinoCoffee &&
        cappuccinoCoffee.coffees.map(item => (
          <View style={styles.itemView} key={item.id}>
            <View style={styles.imageTitle}>
              <Image source={{uri: `../../assets/${item.image}`}} />
              <Text style={styles.CoffeeTitle}>{item.title}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.price}>{`$ ${item.price}`}</Text>
              <TouchableOpacity style={styles.addCartBut}></TouchableOpacity>
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

  CoffeeTitle: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  priceView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },

  price: {
    color: '#2F4B4E',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  addCartBut: {
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    width: 32,
    height: 32,
  },
});
