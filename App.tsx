import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Login from './components/Login';

function App(): React.JSX.Element {
  return (
    <View style={styles}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  // mainDiv: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   backgroundColor: 'red',
  // },
});

export default App;
