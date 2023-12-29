import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ItemList() {
  return (
    <View style={styles.mainContainer}>
      <Text> asdasd</Text>
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
    flexWrap: 'wrap',
  },
});
