import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return <ScrollView style={styles.mainDiv}></ScrollView>;
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
