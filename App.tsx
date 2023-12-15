import React from 'react';
import {StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return <View style={styles.mainDiv}></View>;
}

const styles = StyleSheet.create({
  mainDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: '#F9F9F9',
  },
});

export default App;
