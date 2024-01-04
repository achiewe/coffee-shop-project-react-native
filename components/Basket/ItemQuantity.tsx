import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ItemQuantity() {
  return (
    <View style={styles.viewQuantity}>
      <View style={styles.imageTitleView}>
        <Image
          style={styles.coffeeImage}
          source={require('../../assets/classicCappuccino.png')}
        />
        <Text style={styles.coffeeTitle}>Cappucino</Text>
      </View>
      <View style={styles.qunatityView}>
        <TouchableOpacity>
          <View style={styles.minusQuantity}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewQuantity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 43,
  },

  imageTitleView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
  },

  coffeeImage: {
    width: 54,
    height: 54,
  },

  coffeeTitle: {
    fontSize: 16,
    color: '#2F2D2C',
    fontStyle: 'normal',
    fontWeight: '600',
  },

  qunatityView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  minusQuantity: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2F2D2C',
  },
});
