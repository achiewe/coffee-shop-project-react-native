import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ImageTitle from './ImageTitle';
import Description from './Description';
import BuyNow from './BuyNow';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {useSelector} from 'react-redux';
import {RootState} from '../../features/store';
import data from '../../data.json';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// detail component
const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;

  const coffeeItem = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    <ScrollView style={styles.mainDetail}>
      <ImageTitle coffeeItem={coffeeItem} />
      <Description coffeeItem={coffeeItem?.description} />
      <BuyNow coffeeItem={coffeeItem?.price} />
    </ScrollView>
  );
};

// detail style
const styles = StyleSheet.create({
  mainDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default Detail;
