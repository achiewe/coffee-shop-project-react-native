import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../data.json';

export default function ListCoffeeTitle() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.coffee_categories.map(item => {
        return <View key={item.id} style={style.TitleView}></View>;
      })}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  TitleView: {},
});
