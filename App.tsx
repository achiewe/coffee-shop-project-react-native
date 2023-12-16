import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Login from './components/Login';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainDiv}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
  },
});

export default App;
