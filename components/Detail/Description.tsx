import {StyleSheet, View} from 'react-native';

export default function Description() {
  return (
    <View style={styles.mainDesc}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDesc: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },

  line: {
    height: 1,
    width: 315,
    backgroundColor: '#EAEAEA',
  },
});
