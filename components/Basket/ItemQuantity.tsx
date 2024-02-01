// import packages
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../features/store';
import {
  decrementQuantity,
  incrementQuantity,
  setQuantity,
} from '../../features/QuantityItemSlice';
import {useEffect} from 'react';
import {setRemoveProduct} from '../../features/BuyProductSlice';

// ItemQuantity component for managing the quantity of individual items in the basket
interface ItemQuantityProp {
  coffeeItem: string | undefined;
  coffeeImage: string | undefined;
  index: number;
}

export default function ItemQuantity({
  coffeeItem,
  coffeeImage,
  index,
}: ItemQuantityProp): JSX.Element {
  // Redux state for item quantities and selected products
  const quantity = useSelector((store: RootState) => store.quantity.quantities);
  const dispatch = useDispatch();
  const product = useSelector(
    (store: RootState) => store.AddProduct.AddProduct,
  );

  // Set initial quantities when the product list changes
  useEffect(() => {
    dispatch(setQuantity(Array(product.length).fill(1)));
  }, [product]);

  // Handler to remove the item from the basket
  const handleRemoveItem = () => {
    const itemIdToRemove = product[index]; // Use the individual item, not an array
    dispatch(setRemoveProduct(itemIdToRemove));
  };

  // Render the component ssas
  return (
    <View style={styles.viewQuantity}>
      <View style={styles.imageTitleView}>
        <TouchableOpacity
          onPress={() => {
            handleRemoveItem();
          }}>
          <Image
            style={styles.deleteIcon}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.coffeeImage}
          source={{
            uri: coffeeImage,
          }}
        />
        <Text style={styles.coffeeTitle}>{coffeeItem}</Text>
      </View>
      <View style={styles.qunatityView}>
        <TouchableOpacity
          onPress={() => {
            dispatch(decrementQuantity(index));
          }}>
          <View style={styles.ButQuantity}>
            <Image source={require('../../assets/minus.png')} />
          </View>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity[index]}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(incrementQuantity(index));
          }}>
          <View style={styles.ButQuantity}>
            <Image source={require('../../assets/plus.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// style of the component
const styles = StyleSheet.create({
  viewQuantity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  imageTitleView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  deleteIcon: {
    width: 20,
    height: 20,
  },

  coffeeImage: {
    width: 40,
    height: 40,
  },

  coffeeTitle: {
    fontSize: 16,
    color: '#2F2D2C',
    fontStyle: 'normal',
    fontWeight: '600',
    maxWidth: 150,
    minWidth: 150,
    alignSelf: 'flex-start',
  },

  qunatityView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
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
