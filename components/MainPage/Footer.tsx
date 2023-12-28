import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerWarp}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/Home.png')}
          style={styles.pagePng}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerWarp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    height: 50,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    gap: 59,
    tintColor: '#8D8D8D',
  },

  pagePng: {
    tintColor: '#8D8D8D',
    width: 19,
    height: 19,
  },
});
