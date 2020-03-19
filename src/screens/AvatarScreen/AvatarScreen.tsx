// import styles from './styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Image,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

type Datum = { key: string; description: string; image: string };
type Data = Array<Datum>;

class AvatarScreen extends Component {
  render() {
    let data: Data = [
      {
        key: 'Devin',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Dan',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Dominic',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Jackson',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'James',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Joel',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'John',
        description: 'cool',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Jillian',
        description: 'hehe',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Jimmy',
        description: 'hehe',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
      {
        key: 'Julie',
        description: 'hehe',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.avatar}>
          <Text>sdfaffsfsfsafa</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item: datum }: ListRenderItemInfo<Datum>) => {
              // console.log('>>item:', datum);
              let { key, description, image } = datum;
              // console.log('>>item destructured:', key, description);
              return (
                <View style={[styles.card, { height: 100 }]}>
                  <Image
                    style={[
                      styles.imagecontainer,
                      { width: 80, height: '100%' },
                    ]}
                    resizeMode="contain"
                    source={{ uri: datum.image }}
                  />
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        backgroundColor: 'blue',
                      }}
                    >
                      {datum.key}
                    </Text>
                    <Text>a</Text>
                    <Text>{datum.description}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
  },
  buttton: {
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  img: {
    width: 193,
    height: 110,
  },
  imagecontainer: {
    margin: 5,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  card: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    flexDirection: 'row',
    shadowOpacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    flex: 1,
  },
});

export default AvatarScreen; // e.g. DetailScreen
