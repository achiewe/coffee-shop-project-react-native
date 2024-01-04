import {StyleSheet, View} from 'react-native';
import BasketHeadline from './BasketHeadline';

// component for the basket component
export default function Basket(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <BasketHeadline />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
});
