// import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

class HomeScreen extends Component {
  render() {
    return (
      // <View>
      //   <Text>This is the Home!</Text>
      // </View>
      <ImageBackground
        source={'https://wallpaperaccess.com/full/804241.jpg'}
        style={{ width: '100%', height: '100%' }}
      >
        <Text>This is the Home!</Text>
      </ImageBackground>
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

export default HomeScreen; // e.g. DetailScreen
