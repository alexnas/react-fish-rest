import Rebase from 're-base';
import firebase from 'firebase';

const API_KEY = process.env.REACT_APP_FISH_REST_API_KEY;

export const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: 'react-fish-rest.firebaseapp.com',
  databaseURL: 'https://react-fish-rest.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
