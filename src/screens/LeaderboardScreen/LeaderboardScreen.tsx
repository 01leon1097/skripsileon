// import styles from './styles';
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
} from 'react-native-card-view';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

class LeaderboardScreen extends Component {
  render() {
    return (
      // <View>
      //   <Text>This is the Leaderboard!</Text>
      // </View>
      // <Card>
      // <CardTitle>
      //   <Text style={styles.title}>This is the Leaderboard!</Text>
      // </CardTitle>
      //   <CardContent>
      //     <Text>This is Content!</Text>
      //   </CardContent>
      //   {/* <CardAction>

      //   </CardAction> */}
      // </Card>
      // <Card>
      //   <CardTitle>
      //     <Text style={styles.title}>This is the Leaderboard!</Text>
      //   </CardTitle>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin', description: 'cool' },
            { key: 'Dan', description: 'cool' },
            { key: 'Dominic', description: 'cool' },
            { key: 'Jackson', description: 'cool' },
            { key: 'James', description: 'cool' },
            { key: 'Joel', description: 'cool' },
            { key: 'John', description: 'cool' },
            { key: 'Jillian', description: 'hehe' },
            { key: 'Jimmy', description: 'hehe' },
            { key: 'Julie', description: 'hehe' },
            { key: 'Devin', description: 'hehe' },
            { key: 'Dan', description: 'hehe' },
            { key: 'Dominic', description: 'hehe' },
            { key: 'Jackson', description: 'hehe' },
            { key: 'James', description: 'haha' },
            { key: 'Joel', description: 'haha' },
            { key: 'John', description: 'haha' },
            { key: 'Jillian', description: 'haha' },
            { key: 'Jimmy', description: 'haha' },
            { key: 'Julie', description: 'haha' },
            { key: 'Devin', description: 'haha' },
            { key: 'Dan', description: 'lelele' },
            { key: 'Dominic', description: 'lelele' },
            { key: 'Jackson', description: 'lelele' },
            { key: 'James', description: 'lelele' },
            { key: 'Joel', description: 'lalalala' },
            { key: 'John', description: 'lalalala' },
            { key: 'Jillian', description: 'lalalala' },
            { key: 'Jimmy', description: 'lalalala' },
            { key: 'Julie', description: 'lalalala' },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.key}
              {'\n'}
              {item.description}
            </Text>
          )}
        />
      </View>
      // </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: BACKGROUND_COLOR,
//   },
//   contentContainer: {
//     marginHorizontal: 14,
//     marginVertical: 19,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: FONT_COLOR,
//   },
// });

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
    fontSize: 12,
    backgroundColor: 'yellow',
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
});

export default LeaderboardScreen; // e.g. DetailScreen
