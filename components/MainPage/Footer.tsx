import {StyleSheet, View} from 'react-native';

export default function Footer() {
  return <View style={styles.footerWarp}></View>;
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
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    gap: 59,
  },
});
