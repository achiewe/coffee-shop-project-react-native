import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types';
import {useSelector} from 'react-redux';
import {RootState} from '../features/store';

// Footer component
export default function Footer(): JSX.Element {
  // Access the navigation prop for navigating between screens
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const product = useSelector(
    (store: RootState) => store.AddProduct.AddProduct,
  );

  // Retrieve the current route state from the Redux store
  const routeState = useSelector(
    (store: RootState) => store.stateRoute.stateRoute,
  );

  return (
    // Footer container with Home and Basket icons
    <View style={styles.footerWrap}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assets/Home.png')}
          style={[
            styles.pagePng,
            {tintColor: routeState === 'Home' ? '#C67C4E' : '#8D8D8D'},
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Image
          style={[
            styles.basketImage,
            {tintColor: routeState === 'Basket' ? '#C46200' : '#8D8D8D'},
          ]}
          source={require('../assets/Bag.png')}
        />
        <View
          style={[
            styles.amountOfCoffeeView,
            {display: product.length === 0 ? 'none' : 'flex'},
          ]}>
          <Text style={styles.CoffeeQuantityText}>{product.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the Footer component
const styles = StyleSheet.create({
  footerWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    height: 50,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    gap: 60,
    tintColor: '#8D8D8D',
  },

  pagePng: {
    tintColor: '#8D8D8D',
    width: 23,
    height: 23,
  },

  onThePage: {
    tintColor: '#C67C4E',
    width: 23,
    height: 23,
  },

  basketImage: {
    position: 'relative',
  },

  amountOfCoffeeView: {
    position: 'absolute',
    width: 20,
    height: 17,
    backgroundColor: 'red',
    borderRadius: 5,
    right: -10,
    top: -3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  CoffeeQuantityText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'normal',
  },
});
