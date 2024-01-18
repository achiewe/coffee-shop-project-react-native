import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';
import Advertisment from './Advertisment';
import ListCoffeeTitle from './ListCoffeeTitle';
import ItemList from './ItemList';
import {useRoute} from '@react-navigation/native';

// mainPage function
export default function MainPage() {
  const route = useRoute();
  const name = route.name;

  console.log(name);

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
