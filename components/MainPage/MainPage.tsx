import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';
import Advertisment from './Advertisment';

// mainPage component
export default function MainPage() {
  return (
    <ScrollView style={styles.mainDiv}>
      <InputDiv />
      <Advertisment />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
