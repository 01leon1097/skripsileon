// import styles from './styles';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import {
  AvatarScreen,
  FriendsScreen,
  LeaderboardScreen,
  ShopScreen,
  // PlayScreen,
} from '../index';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavProp } from '../../types/Navigation';

export type Props = NavigationScreenProp<NavigationRoute<any>>;
// interface Props {
//   navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

class WelcomeScreen extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isLoading: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'Main' : 'Home');
    });
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color="#ff5a66"
        />
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text style={styles.title}>Say hello to your new app</Text>
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={{ color: 'white' }}> Log In </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupContainer}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={{ color: '#938aff' }}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // async tryToLoginFirst() {
  //   const email = await AsyncStorage.getItem("@loggedInUserID:key");
  //   const password = await AsyncStorage.getItem("@loggedInUserID:password");
  //   const id = await AsyncStorage.getItem("@loggedInUserID:id");
  //   if (
  //     id != null &&
  //     id.length > 0 &&
  //     password != null &&
  //     password.length > 0
  //   ) {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(user => {
  //         const { navigation } = this.props;
  //         firebase
  //           .firestore()
  //           .collection("users")
  //           .doc(id)
  //           .get()
  //           .then(function(doc) {
  //             var dict = {
  //               id: id,
  //               email: email,
  //               profileURL: doc.photoURL,
  //               fullname: doc.displayName
  //             };
  //             if (doc.exists) {
  //               navigation.dispatch({
  //                 type: "Login",
  //                 user: dict
  //               });
  //             }
  //           })
  //           .catch(function(error) {
  //             const { code, message } = error;
  //             alert(message);
  //           });
  //         this.state.isLoading = false;
  //       })
  //       .catch(error => {
  //         const { code, message } = error;
  //         alert(message);
  //         // For details of error codes, see the docs
  //         // The message contains the default Firebase string
  //         // representation of the error
  //       });
  //     return;
  //   }
  //   const fbToken = await AsyncStorage.getItem(
  //     "@loggedInUserID:facebookCredentialAccessToken"
  //   );
  //   if (id != null && id.length > 0 && fbToken != null && fbToken.length > 0) {
  //     const credential = firebase.auth.FacebookAuthProvider.credential(fbToken);
  //     firebase
  //       .auth()
  //       .signInWithCredential(credential)
  //       .then(result => {
  //         var user = result.user;
  //         var userDict = {
  //           id: user.uid,
  //           fullname: user.displayName,
  //           email: user.email,
  //           profileURL: user.photoURL
  //         };
  //         this.props.navigation.dispatch({
  //           type: "Login",
  //           user: userDict
  //         });
  //       })
  //       .catch(error => {
  //         this.setState({ isLoading: false });
  //       });
  //     return;
  //   }
  //   this.setState({ isLoading: false });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
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
    width: '70%',
    backgroundColor: '#938aff',
    borderRadius: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: '#938aff',
    marginTop: 30,
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

export default WelcomeScreen; // e.g. DetailScreen
