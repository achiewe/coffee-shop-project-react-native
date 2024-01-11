import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BuyNowProps {
  coffeeItem: number | undefined;
}

// BuyNow component
export default function BuyNow({coffeeItem}: BuyNowProps): JSX.Element {
  return (
    <View style={styles.mainView}>
      <View style={styles.viewPrice}>
        <Text style={styles.textPrice}>Price</Text>
        <Text style={styles.priceAmount}>$ {coffeeItem}</Text>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

// style for BuyNow component
const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderTopRightRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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

  buyButton: {
    width: 217,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
