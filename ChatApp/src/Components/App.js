import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Home from './home';
import Chat from './chat';

import {
  Router,
  Scene
} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{ paddingTop: 64 }}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='chat' component={Chat} title='Chat' />

        </Scene>
      </Router>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}
export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
