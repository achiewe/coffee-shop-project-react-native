import {ScrollView, StyleSheet} from 'react-native';
import InputDiv from './InputDiv';

export default function MainPage() {
  return (
    <ScrollView style={styles.mainDiv}>
      <InputDiv />
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
