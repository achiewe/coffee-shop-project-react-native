import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types';

export default function Footer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const route = useRoute();

  return (
    <View style={styles.footerWarp}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assets/Home.png')}
          style={route.name === 'Home' ? styles.onThePage : styles.pagePng}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
        <Image
          source={require('../assets/Bag.png')}
          // style={route.name === 'Basket' ? styles.onThePage : styles.pagePng}
        />
      </TouchableOpacity>
    </View>
  );
}

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
});
