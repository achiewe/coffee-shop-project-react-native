import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types';

// Footer component
export default function Footer(): JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footerWarp}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Image
          style={styles.basketImage}
          source={require('../assets/Bag.png')}
        />
        <View style={styles.amountOfCoffeeView}>
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// styles for the footer
const styles = StyleSheet.create({
  footerWarp: {
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
    width: 15,
    height: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    right: -7,
    top: -3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
