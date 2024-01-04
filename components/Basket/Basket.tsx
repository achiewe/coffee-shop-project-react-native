import {StyleSheet, Text, View} from 'react-native';

// component for the basket component
export default function Basket() {
  return (
    <View style={styles.mainContainer}>
      <Text> whats up guys</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
});
