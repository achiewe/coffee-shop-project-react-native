import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';

interface coffeItemProps {
  coffeeItem: string | undefined;
}

// description component
export default function Description({coffeeItem}: coffeItemProps): JSX.Element {
  return (
    <View style={styles.mainDesc}>
      <View style={styles.line} />
      <View style={styles.titleDescView}>
        <Text style={styles.title}> Description</Text>
        <ReadMore style={styles.paragraph}>{coffeeItem}</ReadMore>
      </View>
    </View>
  );
}

// description style
const styles = StyleSheet.create({
  mainDesc: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 28,
    marginBottom: 20,
    paddingLeft: 31,
    paddingRight: 31,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAEAEA',
  },

  titleDescView: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 15,
  },

  title: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  paragraph: {
    fontSize: 14,
    color: '#9B9B9B',
    fontWeight: '400',
    fontStyle: 'normal',
    alignSelf: 'flex-end',
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // toucOpa: {
  //   backgroundColor: 'red',
  // },

  // readMoreText: {
  //   fontSize: 14,
  //   color: '#9B9B9B',
  //   fontWeight: '400',
  //   fontStyle: 'normal',
  //   alignSelf: 'center',
  //   lineHeight: 20,
  // },
});
