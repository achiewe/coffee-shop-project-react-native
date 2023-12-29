import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './components/Login';
import MainPage from './components/MainPage/MainPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  // create state for show the login component
  const [showLogin, setShowLogin] = useState(true);

  // useEffect for set the screen login page at the beggining
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogin(false);
    }, 2000); // Change 3000 to the desired delay in milliseconds

    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(timeout);
  }, []);

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="">
        <View style={styles.mainDiv}>
          {showLogin ? <Login /> : <MainPage />}
        </View>
      </stack.Navigator>
    </NavigationContainer>
  );
}

// style of the component
const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});

export default App;
