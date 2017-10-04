import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';     
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyColWfu2Xp2eW6Qq7SyueuI0zkGx56bGJw',
            authDomain: 'react-add-ict.firebaseapp.com',
            databaseURL: 'https://react-add-ict.firebaseio.com',
            projectId: 'react-add-ict',
            storageBucket: 'react-add-ict.appspot.com',
            messagingSenderId: '865167814872'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
