import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './components/Login';
import Footer from './components/Footer';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import MainPage from './components/MainPage/MainPage';
import Basket from './components/Basket/Basket';
import {RootStackParamList} from './types';

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

  const stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <View style={styles.mainDiv}>
      {showLogin ? (
        <Login />
      ) : (
        <NavigationContainer>
          <stack.Navigator initialRouteName="MainPage">
            <stack.Screen name="MainPage" component={MainPage} />
            <stack.Screen name="Basket" component={Basket} />
          </stack.Navigator>
          <Footer />
        </NavigationContainer>
      )}
    </View>
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
