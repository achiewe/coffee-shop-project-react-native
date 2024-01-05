import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonBasket() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}> Order</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 315,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {},
});
