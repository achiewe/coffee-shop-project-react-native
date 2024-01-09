import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BuyNow() {
  return (
    <View style={styles.mainView}>
      <View style={styles.viewPrice}>
        <Text style={styles.textPrice}>Price</Text>
        <Text style={styles.priceAmount}>$ 4.53</Text>
        <TouchableOpacity>
          <Text> Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 23,
    paddingHorizontal: 18,
    borderTopLeftRadius: 20,
    borderColor: '#EAEAEA',
    borderWidth: 1,
  },

  viewPrice: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },

  textPrice: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#9B9B9B',
  },

  priceAmount: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#C67C4E',
  },
});
