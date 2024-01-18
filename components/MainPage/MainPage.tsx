import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';
import Advertisment from './Advertisment';
import ListCoffeeTitle from './ListCoffeeTitle';
import ItemList from './ItemList';
import {
  NavigationProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setStateRoute} from '../../features/RouteStateSlice';
import {RootState} from '../../features/store';

// mainPage function
export default function MainPage() {
  // const route = useRoute();
  // const dispatch = useDispatch();

  // const RouteState = useSelector(
  //   (store: RootState) => store.stateRoute.stateRoute,
  // );

  // console.log(RouteState);

  // useEffect(() => {
  //   const name = route.name;
  //   dispatch(setStateRoute(name));
  // }, []);

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
