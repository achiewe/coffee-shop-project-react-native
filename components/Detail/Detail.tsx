import {StyleSheet, Text, View} from 'react-native';

export default function Detail() {
  return <View style={styles.mainDetail}></View>;
}

const styles = StyleSheet.create({
  mainDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});
