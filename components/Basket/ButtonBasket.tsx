import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {StackActions} from '@react-navigation/native';

// component buttonBasket
export default function ButtonBasket() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.dispatch(StackActions.replace('Success'));
      }}>
      <Text style={styles.buttonText}> Order</Text>
    </TouchableOpacity>
  );
}

// component style
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
