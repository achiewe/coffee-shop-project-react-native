import {StyleSheet, View} from 'react-native';

export default function ItemList() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemView}>
        <View style={styles.imageTitle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: 14,
    columnGap: 24,
    flexWrap: 'wrap',
  },

  itemView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },

  imageTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});
