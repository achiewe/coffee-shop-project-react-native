import {Image, StyleSheet, Text, View} from 'react-native';
import itemType from '../../typesData';

interface ImageTitleProps {
  coffeeItem: itemType | undefined;
}

// imageTitle component
export default function ImageTitle({coffeeItem}: ImageTitleProps): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.CoffeeImage}
        source={{
          uri: coffeeItem?.image,
        }}
      />
      <View style={styles.titleRateCont}>
        <View style={styles.titleView}>
          <Text style={styles.title}> {coffeeItem?.title}</Text>
          <View style={styles.ratingView}>
            <Image source={require('../../assets/Rating.png')} />
            <Text style={styles.rating}> {coffeeItem?.rating}</Text>
          </View>
        </View>
        <View style={styles.coffeeLogoCont}>
          <View style={styles.coffeeGrainView}>
            <Image
              style={styles.coffeeGrain}
              source={require('../../assets/coffeeGrain.png')}
            />
          </View>
          <View style={styles.coffeeGrainView}>
            <Image
              style={styles.coffeeGrain}
              source={require('../../assets/milk.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

// style for component
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    marginTop: 29,
  },

  CoffeeImage: {
    width: 250,
    height: 226,
  },

  titleRateCont: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 31,
    paddingRight: 31,
    flexDirection: 'row',
  },

  titleView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2F2D2C',
  },

  ratingView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  rating: {
    fontSize: 16,
    color: '#2F2D2C',
    fontWeight: '600',
    fontStyle: 'normal',
  },

  coffeeLogoCont: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },

  coffeeGrainView: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    borderRadius: 14,
  },

  coffeeGrain: {
    width: 30,
    height: 30,
  },
});
