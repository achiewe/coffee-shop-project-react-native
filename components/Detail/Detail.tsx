import {StyleSheet, Text, View} from 'react-native';
import ImageTitle from './ImageTitle';
import Description from './Description';
import BuyNow from './BuyNow';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// detail component
const Detail: React.FC<{route: DetailScreenRouteProp}> = ({route}) => {
  const {itemId} = route.params;
  return (
    <View style={styles.mainDetail}>
      <ImageTitle />
      <Description />
      <BuyNow />
    </View>
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
