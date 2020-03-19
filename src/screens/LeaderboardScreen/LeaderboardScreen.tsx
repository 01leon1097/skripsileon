import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Image,
  ActivityIndicator,
} from 'react-native';
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
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageButton } from '../../components';

type Datum = {
  key: string;
  name: string;
  email: string;
  score: number;
  // description?: string;
  avatar: string;
};
type LeaderboardData = Array<Datum>;

type Props = NavigationScreenProp<NavigationRoute<any>>;
type State = {
  leaderboardData: LeaderboardData;
  isLoading: boolean;
  league: 'Gold' | 'Silver' | 'Bronze';
  // imageopacity: any;
};

class LeaderboardScreen extends Component<Props, State> {
  state: State = {
    leaderboardData: [],
    isLoading: true,
    league: 'Bronze',
    // imageopacity: 0.2,
  };

  _leaderboardSubs = firebase.database().ref('users/');

  componentDidMount() {
    this._leaderboardSubs.on('value', (querySnapshot: any) => {
      let dataTemp: Datum[] = [];
      let data = querySnapshot.val();

      let keys = Object.keys(data);

      let unsortedData: Array<Datum> = keys.map((key) => data[key]);

      let sortedData = unsortedData.sort((a, b) => b.score - a.score);

      this.setState({
        leaderboardData: sortedData,
        isLoading: false,
      });
    });
  }

  render() {
    let { isLoading, leaderboardData, league } = this.state;
    return !isLoading ? (
      <View style={{ flex: 1 }}>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <Text>sdfaffsfsfsafa</Text>
          <View style={{ height: 120, marginTop: 20 }}>
            {/* justifyContent: 'center' */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ImageButton
                style={{ height: 120, width: 120 }}
                source={{
                  uri:
                    'https://gamepedia.cursecdn.com/forwhomthealchemistexists_gamepedia_en/f/fe/Game%2CPortraitsM%2Czayi_dark.png?version=798ea38fb01d876b25beab9dadfaa289',
                }}
                onPress={() => {
                  this.setState({ league: 'Bronze' });
                }}
              />
              <ImageButton
                style={{ height: 120, width: 120 }}
                source={{
                  uri:
                    'https://gamepedia.cursecdn.com/forwhomthealchemistexists_gamepedia_en/1/11/Game%2CPortraitsM%2Cpok_b_masa.png?version=31d50fc7f5ff617a066690688f48ad7a',
                }}
                onPress={() => {
                  this.setState({ league: 'Silver' });
                }}
              />
              <ImageButton
                style={{ height: 120, width: 120 }}
                source={{
                  uri:
                    'https://gamepedia.cursecdn.com/forwhomthealchemistexists_gamepedia_en/0/08/Game%2CPortraitsM%2Ccloe_dark.png?version=fa386a66fcd8588514a4cd5cb7124361',
                }}
                onPress={() => {
                  this.setState({ league: 'Gold' });
                }}
              />
            </ScrollView>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {league} League
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              textAlign: 'center',
              color: 'gray',
            }}
          >
            Top 3 get gems as reward
          </Text>
        </View>

        <View style={styles.container}>
          <FlatList data={leaderboardData} renderItem={this._renderItem} />
        </View>
      </View>
    ) : (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color="coral" />
        <Text style={{ paddingVertical: 10 }}>Loading...</Text>
      </View>
    );
  }

  _renderItem = ({ item, index }: ListRenderItemInfo<Datum>) => {
    return (
      <View style={[styles.card, { height: 100 }]}>
        <Image
          style={[styles.imagecontainer, { width: 80, height: '100%' }]}
          resizeMode="contain"
          source={{ uri: item.avatar }}
        />

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              backgroundColor: 'blue',
            }}
          >
            {item.name}
          </Text>
          {/* <View> */}
          <Text>{item.email}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Score : {item.score}</Text>
            <Text>#{index + 1}</Text>
          </View>
          {/* </View> */}
          {/* <Text>Test</Text> */}
        </View>
      </View>
    );
  };
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
    flex: 3,
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
});

export default LeaderboardScreen; // e.g. DetailScreen
