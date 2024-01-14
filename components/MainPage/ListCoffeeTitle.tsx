import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import data from '../../data.json';
import {useDispatch} from 'react-redux';
import {setId} from '../../features/TitleCategoryIdSlice';

// list of the data
export default function ListCoffeeTitle() {
  const dispatch = useDispatch();

  const getId = (id: number): void => {
    dispatch(setId(id));
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style.MainContainer}>
      {data.coffee_categories.map(item => {
        return (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => {
              getId(item.id);
            }}>
            <View key={item.id} style={style.TitleView}>
              <Text style={style.titleText}>{item.category}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
}

// style for the ListCoffeeTitle
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
