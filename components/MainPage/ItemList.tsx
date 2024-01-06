import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../../data.json';

// function for data map
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
              <Image
                style={{
                  width: 51,
                  height: 51,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: `data:image/png;base64, ${item.image}`,
                }}
              />
              <Text style={styles.CoffeeTitle}>{item.title}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.price}>{`$ ${item.price}`}</Text>
              <TouchableOpacity style={styles.addCartBut}>
                <Image source={require('../../assets/add.png')} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
}

// style for itemList
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 14,
    columnGap: 24,
    marginTop: 28,
  },

  itemView: {
    display: 'flex',
    flexDirection: 'column',
    width: 141,
    gap: 15,
  },

  imageTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },

  image: {
    width: 50,
    height: 60,
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
    justifyContent: 'space-between',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
