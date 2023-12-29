import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';
import Advertisment from './Advertisment';
import ListCoffeeTitle from './ListCoffeeTitle';
import ItemList from './ItemList';

// mainPage function
export default function MainPage() {
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
  },
});
