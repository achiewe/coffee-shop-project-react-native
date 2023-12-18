import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#313131']}
      style={styles.mainInput}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text> hu</Text>
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
});
