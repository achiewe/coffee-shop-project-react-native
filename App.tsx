import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Login from './components/Login';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.mainDiv}>
      <Login />
    </ScrollView>
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
