import {ScrollView, StyleSheet} from 'react-native';
import ImageTitle from './ImageTitle';
import Description from './Description';
import BuyNow from './BuyNow';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
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
      <Description
        coffeeItem={coffeeItem?.description}
        coffeeItemShort={coffeeItem?.shortDescription}
      />
      <BuyNow coffeeItem={coffeeItem?.price} coffeeItemId={coffeeItem?.id} />
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
