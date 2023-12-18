import {StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#525252']}
      style={styles.mainInput}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <View style={styles.inputDiv}>
        <TextInput placeholder="Search coffee" />
      </View>
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

  inputDiv: {
    width: 315,
    backgroundColor: '#313131',
    height: 52,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 21,
  },
});
