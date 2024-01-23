import {ScrollView, StyleSheet} from 'react-native';
import ImageTitle from './ImageTitle';
import Description from './Description';
import BuyNow from './BuyNow';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import data from '../../data.json';

// Define the type for the Detail screen route
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// Detail component
const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  // Extract the itemId from the route params
  const {itemId} = route.params;

  // Find the coffee item based on the itemId from the data
  const coffeeItem = data.coffee_categories
    .flatMap(category => category.coffees)
    .find(item => item.id === itemId);

  return (
    // ScrollView containing ImageTitle, Description, and BuyNow components
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

// Styles for the Detail component
const styles = StyleSheet.create({
  mainDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default Detail;
