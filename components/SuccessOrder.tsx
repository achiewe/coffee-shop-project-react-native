import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../features/store';
import {setDefaultProduct} from '../features/BuyProductSlice';

export default function SuccessOrder(): JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const filterItems = useSelector(
    (store: RootState) => store.filteredItems.filteredItems,
  );

  console.log(filterItems);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
      dispatch(setDefaultProduct([]));
    }, 3000); // Change 3000 to the desired delay in milliseconds

    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.MainCont}>
      <Image source={require('../assets/iconSuccess.png')} />
      <View style={styles.viewSuccess}>
        <Text style={styles.congratSuccess}>Congratulations!</Text>
        <Text style={styles.successText}>
          Your order have been submitted successfully
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  viewSuccess: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  congratSuccess: {
    color: '#2F2D2C',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  successText: {
    color: '#9B9B9B',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
  },
});
