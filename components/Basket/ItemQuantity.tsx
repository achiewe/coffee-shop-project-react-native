import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features/store';
import {
  setaddQuantity,
  settSubtractQuantity,
} from '../../features/QuantityItemSlice';

interface ItemQuantityProp {
  coffeeItem: string | undefined;
}

export default function ItemQuantity({
  coffeeItem,
}: ItemQuantityProp): JSX.Element {
  const quantity = useSelector((store: RootState) => store.quantity.quantity);
  const dispatch = useDispatch();

  return (
    <View style={styles.viewQuantity}>
      <View style={styles.imageTitleView}>
        <Image
          style={styles.coffeeImage}
          source={require('../../assets/classicCappuccino.png')}
        />
        <Text style={styles.coffeeTitle}>{coffeeItem}</Text>
      </View>
      <View style={styles.qunatityView}>
        <TouchableOpacity
          onPress={() => {
            if (quantity !== 0) {
              dispatch(settSubtractQuantity());
            }
          }}>
          <View style={styles.ButQuantity}>
            <Image source={require('../../assets/minus.png')} />
          </View>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(setaddQuantity());
          }}>
          <View style={styles.ButQuantity}>
            <Image source={require('../../assets/plus.png')} />
          </View>
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
    gap: 15,
    alignItems: 'center',
  },

  ButQuantity: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2F2D2C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2D2C',
  },
});
