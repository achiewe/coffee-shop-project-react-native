import {ScrollView, StyleSheet} from 'react-native';

export default function MainPage() {
  return <ScrollView style={styles.mainDiv}></ScrollView>;
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});
