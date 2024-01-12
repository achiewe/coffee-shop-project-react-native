import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../../data.json';
import {useDispatch, useSelector} from 'react-redux';
import store, {RootState} from '../../features/store';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {setAddCard} from '../../features/AddBasketSlice';
import {useEffect} from 'react';
import {setFilteredItems} from '../../features/FilteredItemSlice';
import itemType from '../../typesData';

// function for data map
export default function ItemList() {
  // call id state
  const TitleId = useSelector((store: RootState) => store.id.id);

  const dispatch = useDispatch();

  // filter the data with id
  const cappuccinoCoffee = data.coffee_categories.find(
    category => category.id === TitleId,
  );

  const searchText = useSelector(
    (store: RootState) => store.searchTitle.searchTitle,
  );

  const filteredItems = useSelector(
    (store: RootState) => store.filteredItems.filteredItems,
  );

  useEffect(() => {
    // Filter the items based on the searchText
    const filteredData = cappuccinoCoffee?.coffees.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    dispatch(setFilteredItems(filteredData || []));
  }, [cappuccinoCoffee, searchText]);

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
      {filteredItems.map(item => (
        <View style={styles.itemView} key={item.id}>
          <View style={styles.imageTitle}>
            <TouchableOpacity
              onPress={() => {
                getCoffeeId(item.id);
                dispatch(setAddCard(false));
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
                getCoffeeId(item.id);
                dispatch(setAddCard(true));
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
