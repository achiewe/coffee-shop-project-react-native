import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

interface coffeItemProps {
  coffeeItem: string | undefined;
  coffeeItemShort: string | undefined;
}

// description component
export default function Description({
  coffeeItem,
  coffeeItemShort,
}: coffeItemProps): JSX.Element {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <View style={styles.mainDesc}>
      <View style={styles.line} />
      <View style={styles.titleDescView}>
        <Text style={styles.title}> Description</Text>
        <Text style={styles.paragraph} onPress={toggleDescription}>
          {showFullDescription ? coffeeItem : coffeeItemShort}
          <Text style={styles.readMoreText}>
            {' '}
            {showFullDescription ? 'Read less' : 'Read more'}
          </Text>
        </Text>
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
    width: 290,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  readMoreText: {
    fontSize: 14,
    color: '#C67C4E',
    fontWeight: '600',
    fontStyle: 'normal',
    alignSelf: 'center',
    lineHeight: 20,
  },
});
