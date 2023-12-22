import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../data.json';

export default function ListCoffeeTitle() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style.MainContainer}>
      {data.coffee_categories.map(item => {
        return (
          <TouchableWithoutFeedback key={item.id}>
            <View key={item.id} style={style.TitleView}>
              <Text>{item.category}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  MainContainer: {
    width: '100%',
    paddingLeft: 29,
    display: 'flex',
    flexDirection: 'row',
  },
  TitleView: {},
});
