import App from './src/App';
import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBSXPGp_7hAUAIwZZpo7UfxCJKPyTCqo-c',
  authDomain: 'skripsi-1a035.firebaseapp.com',
  databaseURL: 'https://skripsi-1a035.firebaseio.com',
  projectId: 'skripsi-1a035',
  storageBucket: 'skripsi-1a035.appspot.com',
  messagingSenderId: '626136749220',
  appId: '1:626136749220:web:a4efb4e307942bc4d20231',
  measurementId: 'G-LWH5BNPCXG',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default App;
