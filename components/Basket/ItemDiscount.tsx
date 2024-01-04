import {StyleSheet, View} from 'react-native';

export default function ItemDiscount() {
  return (
    <View style={styles.discountCont}>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  discountCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  line: {
    width: '100%',
    height: 4,
    backgroundColor: '#F4F4F4',
  },
});
