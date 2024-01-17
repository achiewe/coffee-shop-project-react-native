import React, {useState} from 'react';
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

export default function ListCoffeeTitle() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getId = (id: number): void => {
    dispatch(setId(id));
    setSelectedId(id);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style.MainContainer}>
      {data.coffee_categories.map(item => {
        const isSelected = selectedId === item.id;

        return (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => {
              getId(item.id);
            }}>
            <View
              key={item.id}
              style={[
                style.TitleView,
                {backgroundColor: isSelected ? '#C67C4E' : '#F3F3F3'},
              ]}>
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
