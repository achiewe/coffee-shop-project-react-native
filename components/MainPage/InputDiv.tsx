import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#525252']}
      style={styles.mainInput}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <View style={styles.imgDiv}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatarImg}
        />
      </View>
      <View style={styles.InputSortDiv}>
        <View style={styles.inputSearch}>
          <Image source={require('../../assets/search-normal.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Search coffee"
            placeholderTextColor={'#989898'}
          />
        </View>
        <TouchableOpacity style={styles.sortButton}>
          <Image source={require('../../assets/sorting.png')} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainInput: {
    display: 'flex',
    justifyContent: 'center',
    gap: 26,
    alignItems: 'center',
    height: 270,
  },

  imgDiv: {
    width: 315,
    display: 'flex',
    alignItems: 'flex-end',
  },

  avatarImg: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  InputSortDiv: {
    width: 315,
    backgroundColor: '#313131',
    height: 52,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 5,
  },

  inputSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  textInput: {
    color: 'white',
    fontSize: 14,
  },

  sortButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C67C4E',
    borderRadius: 12,
  },
});
