import {StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#525252']}
      style={styles.mainInput}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <TextInput style={styles.inputCoffee} placeholder="Search coffee" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
  },

  inputCoffee: {
    width: 315,
    backgroundColor: '#313131',
    height: 52,
  },
});
