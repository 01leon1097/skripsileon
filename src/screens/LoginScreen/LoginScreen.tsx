import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

export type Props = NavigationScreenProp<NavigationRoute<any>>;

class LoginScreen extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    user_uid: '',
    errorMessage: null,
    isLoading: false,
  };

  onPressLogin = () => {
    const { email, password } = this.state;
    if (email.length <= 0 || password.length <= 0) {
      alert('Please fill out the required fields.');
      return;
    }
    this.setState({
      isLoading: true,
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.setState({
          isLoading: false,
        });
        this.props.navigation.navigate('Main');
      })
      .catch((error) => {
        const { code, message } = error;
        alert(message);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <ActivityIndicator color="coral" />
          <Text style={{ paddingVertical: 10 }}>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.loginContainer}
          // onPress={() => this.props.navigation.navigate('First')}
          onPress={() => this.onPressLogin()}
        >
          <Text style={{ color: 'white' }}> Log In </Text>
        </TouchableOpacity>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: 20,
          }}
        >
          Forgot Password ?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  textInput: {
    width: '70%',
    borderRadius: 25,
    padding: 8,
    borderWidth: 1,
    borderColor: '#938aff',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 10,
  },
  inputbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    borderWidth: 0.5,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    width: 180,
    borderWidth: 0.5,
    borderRadius: 19,
    marginBottom: 12,
    paddingVertical: 12,
  },
  iconContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    width: 200,
    height: 40,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
  },
  errorContainer: {
    paddingBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  signupLink: {
    flexDirection: 'row',
  },
  errorText: { fontSize: 13, color: 'red' },
  errorBorder: { borderColor: 'red', borderWidth: 1 },
});

export default LoginScreen; // e.g. DetailScreen
