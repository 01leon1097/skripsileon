// import styles from './styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import {
  AvatarScreen,
  FriendsScreen,
  LeaderboardScreen,
  ShopScreen,
  PlayScreen,
  WelcomeScreen,
} from '../index';
import firebase, { User } from 'firebase';
import { ImageButton } from '../../components';
import { TextButton } from '../../components';

const Stack = createStackNavigator();

type Datum = {
  key: string;
  name: string;
  email: string;
  score: number;
  // description?: string;
  avatar: string;
  energy: number;
  gem: number;
  money: number;
};

type UserData = Array<Datum>;

type Props = NavigationScreenProp<NavigationRoute<any>>;

type State = {
  isLoading: boolean;
  league: 'Gold' | 'Silver' | 'Bronze';
  userData: UserData;
  curTime: number;
};

class HomeScreen extends Component {
  state: State = {
    isLoading: true,
    league: 'Gold',
    userData: [],
    curTime: new Date().getMinutes(),
  };

  user = firebase.auth().currentUser;
  // _data = firebase.database().ref(`users/${firebase.auth().currentUser.uid}`);

  componentDidMount() {
    // let user: any = firebase.auth().currentUser;
    console.log('email', this.user.email);
    console.log('uid', this.user.uid);
    let userid = this.user.uid;

    let userdata = '';
    firebase
      .database()
      .ref(`users/${userid}`)
      .on('value', (snapshot: any) => {
        // console.log('test', snapshot.val());
        userdata = snapshot.val();
        this.setState({
          isLoading: false,
          userData: userdata,
        });
      });

    // setInterval(() => {
    //   this.setState({
    //     curTime: new Date().toLocaleString(),
    //   });
    // }, 1000);
    // 300000  5 minutes
  }

  render() {
    let { isLoading, league, userData, curTime } = this.state;
    console.log('data', userData);

    return !isLoading ? (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.homeheader}>
            <View style={styles.homeheaderprops}>
              <SimpleLineIcons
                name="energy"
                size={24}
                // color={color}
              />
              <Text> {userData.energy}/20</Text>
            </View>
            <View style={styles.homeheaderprops}>
              <FontAwesome5
                name="money-bill-wave"
                size={24}
                // color={color}
              />
              <Text> {userData.money}</Text>
            </View>
            <View style={styles.homeheaderprops}>
              <FontAwesome5
                name="gem"
                size={24}
                // color={color}
              />
              <Text> {userData.gem}</Text>
            </View>
          </View>
          <View style={styles.homeicons}>
            <View>
              <FontAwesome5
                name="scroll"
                size={32}
                // onPress={() => this.navigate('Study')}
              />
              <Text>Quest!</Text>
            </View>
            <View>
              <FontAwesome5 name="address-card" size={32} />
              <Text>Profile!</Text>
            </View>
          </View>
          <View style={styles.homeicons}>
            <FontAwesome5 name="yin-yang" size={32} />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                Top 3 get gems as reward {curTime}
              </Text>
            </View>
            <View style={styles.imagecontainer}>
              <ImageButton
                style={{ height: 220, width: 220 }}
                source={{
                  uri:
                    'https://gamepedia.cursecdn.com/forwhomthealchemistexists_gamepedia_en/f/fe/Game%2CPortraitsM%2Czayi_dark.png?version=798ea38fb01d876b25beab9dadfaa289',
                }}
                onPress={() => {
                  this.setState({ league: 'Bronze' });
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.playcontainer}>
            <Text
              style={{ fontSize: 32, fontWeight: 'bold' }}
              onPress={() => {
                // this.setState({ league: 'Silver' });
                // AvatarScreen;
                this.props.navigation.navigate('Play');
              }}
            >
              PLAY!
            </Text>
            {/* <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Study!</Text> */}
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>EXIT!</Text>
          </View>
        </View>
      </View>
    ) : (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color="coral" />
        <Text style={{ paddingVertical: 10 }}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeheader: {
    // flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    // alignItems: 'center',
  },
  homeicons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  homeheaderprops: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    flex: 1,
    height: 120,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playcontainer: {
    // backgroundColor: 'blue',
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 52,
  },
});

export default HomeScreen; // e.g. DetailScreen
