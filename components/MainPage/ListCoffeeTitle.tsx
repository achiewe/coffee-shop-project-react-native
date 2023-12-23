import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../data.json';

// list of the data
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
              <Text style={style.titleText}>{item.category}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  MainContainer: {
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 18,
  },
  TitleView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#F3F3F3',
    height: 38,
    padding: 10,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 14,
    color: '#2F4B4E',
    fontWeight: '400',
    fontStyle: 'normal',
  },
});
