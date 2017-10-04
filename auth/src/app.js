import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });                
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()} >Log Out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View> 
        );
    }
}

export default App;
