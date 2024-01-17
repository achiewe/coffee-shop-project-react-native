import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    }, 400000); // Change 3000 to the desired delay in milliseconds

    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.MainCont}>
      <Text>adasdas </Text>
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
});
