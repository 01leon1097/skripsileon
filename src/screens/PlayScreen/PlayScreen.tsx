// import styles from './styles';
import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationEvents,
  NavigationRoute,
} from 'react-navigation';
import firebase from 'firebase';
import { Button } from 'react-native-elements';

type Datum = {
  key: string;
  answers: string;
  full: string;
  quiz: string;
};
type QuizData = Array<Datum>;

type Props = NavigationScreenProp<NavigationRoute<any>>;
type State = {
  QuizData: QuizData;
  isLoading: boolean;
  league: 'Gold' | 'Silver' | 'Bronze';
  answers: string;
  full: string;
  quiz: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  answer1: string;
  answer2: string;
  answer3: string;
  // imageopacity: any;
};

class PlayScreen extends Component {
  state: State = {
    QuizData: [],
    isLoading: false,
    league: 'Bronze',
    answers: '',
    full: '',
    quiz: '',
    line1: '',
    line2: '',
    line3: '',
    line4: '',
    line5: '',
    answer1: '',
    answer2: '',
    answer3: '',
    // imageopacity: 0.2,
  };

  _quiz = firebase.database().ref('w3schools/quiz/variables/level1/');

  componentDidMount() {
    this._quiz.on('value', (querySnapshot: any) => {
      let dataTemp: Datum[] = [];
      let data = querySnapshot.val();

      let keys = Object.keys(data);

      let unsortedData: Array<Datum> = keys.map((key) => data[key]);
      console.log('data', data.answers);

      this.setState({
        QuizData: unsortedData,
        isLoading: false,
        answers: data.answers,
        full: data.full,
        quiz: data.quiz,
        line1: data.line1,
        line2: data.line2,
      });
    });
  }

  render() {
    let { isLoading, QuizData, league } = this.state;
    return !isLoading ? (
      <View style={{ flex: 1 }}>
        <View style={styles.cardquiz}>
          <Text style={styles.quiztext}>VARIABLES</Text>
        </View>
        <View style={styles.cardquiz}>
          <Text style={styles.quiztext}>{this.state.quiz}</Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={{ width: 30, backgroundColor: 'white' }}
              // placeholder="Type here to translate!"
              onChangeText={(answer1) => this.setState({ answer1 })}
              value={this.state.answer1}
            />
            <Text> </Text>
            <TextInput
              style={{ width: 60, backgroundColor: 'white' }}
              // placeholder="Type here to translate!"
              onChangeText={(answer2) => this.setState({ answer2 })}
              value={this.state.answer2}
            />
            <Text> </Text>
            <Text>{this.state.line1}</Text>
          </View>
          <View>
            <Text>{this.state.line2}</Text>
          </View>
        </View>
        <Button
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          title="Submit"
          onPress={() => {
            // this.setState({ league: 'Silver' });
            // AvatarScreen;
            // this.props.navigation.navigate('Play');
            console.log('1', this.state.answer1);
            console.log('2', this.state.answer2);
            console.log('asdf', this.state.answers.answer1);

            if (
              this.state.answer1 == this.state.answers.answer1 &&
              this.state.answer2 == this.state.answers.answer2
            ) {
              console.log('true');
            } else {
              console.log('false');
            }
          }}
        />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  card: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // flexDirection: 'row',
    shadowOpacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#938aff',
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 10,
  },
  cardquiz: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // flexDirection: 'row',
    shadowOpacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  quiztext: {
    fontSize: 18,
  },
});

export default PlayScreen; // e.g. DetailScreen
