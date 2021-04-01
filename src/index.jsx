import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyD8EDkAfKC4J5josKNqxYZMlcYichLIzVA',
  authDomain: 'recipe-roulette-1ad9f.firebaseapp.com',
  projectId: 'recipe-roulette-1ad9f',
  storageBucket: 'recipe-roulette-1ad9f.appspot.com',
  messagingSenderId: '19727604825',
  appId: '1:19727604825:web:6c2186251a9444a0802548',
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root'),
);
