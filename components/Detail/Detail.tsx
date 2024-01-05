import {StyleSheet, Text, View} from 'react-native';
import ImageTitle from './ImageTitle';

export default function Detail() {
  return (
    <View style={styles.mainDetail}>
      <ImageTitle />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});
