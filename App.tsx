import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Login from './components/Login';
import Footer from './components/Footer';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import MainPage from './components/MainPage/MainPage';
import Basket from './components/Basket/Basket';
import Detail from './components/Detail/Detail';
import {RootStackParamList} from './types';
import {Provider} from 'react-redux';
import store from './features/store';

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

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainDiv}>
        {showLogin ? (
          <Login />
        ) : (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={MainPage} />
              <Stack.Screen name="Basket" component={Basket} />
              <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
            <Footer />
          </NavigationContainer>
        )}
      </SafeAreaView>
    </Provider>
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
