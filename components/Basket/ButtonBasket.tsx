// import packages
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {StackActions} from '@react-navigation/native';

// ButtonBasket component for handling the order button
export default function ButtonBasket(): JSX.Element {
  // Access navigation functions using useNavigation hook
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Render the button component
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        // Navigate to the 'Success' screen on button press
        navigation.dispatch(StackActions.replace('Success'));
      }}>
      <Text style={styles.buttonText}> Order</Text>
    </TouchableOpacity>
  );
}

// Styles for the ButtonBasket component
const styles = StyleSheet.create({
  button: {
    width: 315,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
});
