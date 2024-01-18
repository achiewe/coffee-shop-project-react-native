import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';
import Advertisment from './Advertisment';
import ListCoffeeTitle from './ListCoffeeTitle';
import ItemList from './ItemList';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setStateRoute} from '../../features/RouteStateSlice';

// mainPage function
export default function MainPage() {
  const route = useRoute();
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const name = route.name;
      dispatch(setStateRoute(name));
    }, [route]),
  );

  return (
    <ScrollView style={styles.mainDiv}>
      <InputDiv />
      <Advertisment />
      <ListCoffeeTitle />
      <ItemList />
    </ScrollView>
  );
}

// style for component
const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});
