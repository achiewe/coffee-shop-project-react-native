import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../../data.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features/store';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {setAddCard} from '../../features/AddBasketSlice';

// function for data map
export default function ItemList() {
  // call id state
  const TitleId = useSelector((store: RootState) => store.id.id);

  const dispatch = useDispatch();

  // filter the data with id
  const cappuccinoCoffee = data.coffee_categories.find(
    category => category.id === TitleId,
  );

  const addBasket = useSelector((store: RootState) => store.addCard.addCard);
  console.log(addBasket);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const getCoffeeId = (itemId: number) => {
    // Navigate to the 'Basket' screen if addBasket is true, else navigate to 'Detail'
    if (addBasket) {
      navigation.navigate('Basket', {itemId});
    } else {
      navigation.navigate('Detail', {itemId});
    }
  };
  return (
    <View style={styles.mainContainer}>
      {cappuccinoCoffee &&
        cappuccinoCoffee.coffees.map(item => (
          <View style={styles.itemView} key={item.id}>
            <View style={styles.imageTitle}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setAddCard(false));
                  getCoffeeId(item.id);
                }}>
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
              </TouchableOpacity>
              <Text style={styles.CoffeeTitle}>{item.title}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.price}>{`$ ${item.price}`}</Text>
              <TouchableOpacity
                style={styles.addCartBut}
                onPress={() => {
                  dispatch(setAddCard(true));
                  getCoffeeId(item.id);
                }}>
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
