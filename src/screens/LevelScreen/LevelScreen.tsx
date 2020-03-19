// import styles from './styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

type Datum = {
  id: string;
  title: string;
};

type LevelList = Array<Datum>;

const DATA = [
  {
    id: '1',
    title: 'Level 1',
  },
  {
    id: '2',
    title: 'Level 2',
  },
  {
    id: '3',
    title: 'Level 3',
  },
  {
    id: '4',
    title: 'Level 4',
  },
  {
    id: '5',
    title: 'Level 5',
  },
  {
    id: '6',
    title: 'Level 6',
  },
  {
    id: '7',
    title: 'Level 7',
  },
  {
    id: '8',
    title: 'Level 8',
  },
  {
    id: '9',
    title: 'Level 9',
  },
  {
    id: '10',
    title: 'Level 10',
  },
  {
    id: '11',
    title: 'Level 11',
  },
  {
    id: '12',
    title: 'Level 12',
  },
];

class LevelScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <FlatList data={DATA} renderItem={this._renderItem} />
        </View>
      </View>
    );
  }

  _renderItem = ({ item, index }: ListRenderItemInfo<Datum>) => {
    return (
      <TouchableOpacity
        style={styles.loginContainer}
        // onPress={() => this.props.navigation.navigate('Login')}
      >
        <Text style={{ color: 'white' }}> {item.title} </Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginBottom: 150,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    // fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    width: '100%',
    backgroundColor: '#938aff',
    borderRadius: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: '#938aff',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
  },
  signupContainer: {
    width: '70%',
    borderRadius: 25,
    padding: 8,
    borderWidth: 1,
    borderColor: '#938aff',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: '#ff5a66',
  },
  spinner: {
    marginTop: 200,
  },
});

export default LevelScreen; // e.g. DetailScreen
