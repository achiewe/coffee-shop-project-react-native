import {Image, StyleSheet, Text, View} from 'react-native';

export default function BasketHeadline() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.basketView}>
        <Text style={styles.componentName}>Basket</Text>
      </View>
      <View style={styles.viewQuantity}>
        <View style={styles.imageTitleView}>
          <Image
            style={styles.coffeeImage}
            source={require('../../assets/classicCappuccino.png')}
          />
          <View style={styles.titleView}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  basketView: {
    width: 154,
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  componentName: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#FFFFFF',
  },

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

  titleView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
});
