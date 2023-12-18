import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#525252']}
      style={styles.mainInput}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <View style={styles.inputDiv}>
        <Image source={require('../../assets/search-normal.png')} />
        <TextInput
          placeholder="Search coffee"
          placeholderTextColor={'#989898'}
        />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 21,
  },
});
