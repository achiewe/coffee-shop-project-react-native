import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainDiv}>
      <Login />
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default App;
