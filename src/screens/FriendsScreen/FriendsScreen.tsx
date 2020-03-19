import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Dimensions,
  // Modal,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import Overlay from 'react-native-modal-overlay';
import Modal from 'react-native-modal';

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
  search: any;
  loadedData: LeaderboardData;
  isModalVisible: boolean;
};

class FriendsScreen extends React.Component {
  state: State = {
    leaderboardData: [],
    isLoading: true,
    search: '',
    loadedData: [],
    isModalVisible: false,
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
        loadedData: sortedData,
      }); ////
    });
  }

  clear = () => {
    this.state.search.clear();
  };

  _updateSearch = (search: any) => {
    // this.setState({ search });
    const newData = this.state.leaderboardData.filter(function(item: any) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      loadedData: newData,
      search: search,
    });
  };

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    let { isLoading, leaderboardData, search, loadedData } = this.state;
    return !isLoading ? (
      <>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={this.closeModal}
          onSwipeComplete={this.closeModal}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={{
            backgroundColor: 'white',
            maxHeight: Dimensions.get('window').height / 2,
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>
              This is the modal content for now!
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ backgroundColor: 'green', width: '50%' }}
              >
                <Text
                  style={{ color: 'white', textAlign: 'center', padding: 10 }}
                >
                  Ok
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: 'red', width: '50%' }}
                onPress={() => this.closeModal()}
              >
                <Text
                  style={{ color: 'white', textAlign: 'center', padding: 10 }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <SearchBar
          round
          // searchIcon={{ size: 24 }}
          onChangeText={this._updateSearch}
          // onClear={() => this._onClear}
          placeholder="Type Here..."
          value={search}
        />
        <View style={styles.container}>
          <FlatList data={loadedData} renderItem={this._renderItem} />
        </View>
      </>
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
        <TouchableOpacity onPress={() => this.openModal}>
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
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text>Score : {item.score}</Text>
              <Text>#{index + 1}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default FriendsScreen; // e.g. DetailScreen
