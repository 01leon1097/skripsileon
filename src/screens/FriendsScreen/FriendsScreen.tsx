import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

class FriendsScreen extends Component {
  render() {
    return (
      // title: 'Home',
      // headerStyle: {
      //   backgroundColor: 'white',
      // },
      // headerTitleStyle: {
      //   color: 'black',
      // },
      <View>
        <Text>This is the Friends!</Text>
      </View>
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

export default FriendsScreen; // e.g. DetailScreen
