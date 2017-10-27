import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'
// import Tabs from './components/Tabs'
import firebase from 'react-native-firebase'

export default class App extends Component<{}> {

  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      ds: ds
    }
  }

  _updateDataSource (arr) {
    this.setState({dataSource: this.state.ds.cloneWithRows(arr)})
  }

  componentDidMount () {
    var that = this
    // let firebaseApp = firebase.initializeApp(config)
    // console.log(firebaseApp )
    // var defaultDatabase = firebase.database()
    // console.log(defaultDatabase)
    var sensorRef = firebase.database().ref('envisensor/chula/sensor')
    sensorRef.on('value', function (snapshot) {
      console.log(snapshot)
    })

    var natRef = firebase.database().ref('nat')
    natRef.on('value', function (snapshot) {
      const data = []
      snapshot.forEach(function (childSnapshot) {
        data.push(childSnapshot.key)
      })
      that._updateDataSource(data)
      // console.log(snapshot)
    })

    // sensorRef.
    //   firebase.auth().signInAnonymously()
    //     .then((user) => {
    //       console.log(user.isAnonymous)
    //     })
    // var rootRef = firebase.database().ref('nat/data')
    // rootRef.set('©2016 androidhive. All rights Reserved')

  }

  render () {

    const styles = StyleSheet.create({
      // App container
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Take up all screen
        backgroundColor: '#E91E63',         // Background color
      },
      // Tab content container
      content: {
        flex: 1,                            // Take up all available space
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',               // Center horizontally
        backgroundColor: '#C2185B',         // Darker background for content area
      },
      // Content header
      header: {
        margin: 10,                         // Add margin
        color: '#FFFFFF',                   // White color
        fontFamily: 'Avenir',               // Change font family
        fontSize: 26,                       // Bigger font size
      },
      // Content text
      text: {
        marginHorizontal: 20,               // Add horizontal margin
        color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
        textAlign: 'center',                // Center
        fontFamily: 'Avenir',
        fontSize: 18,
      },
    });

    return (
      <View style={styles.container}>

        <Text>
          Firebase Work!
        </Text>

        {/*<Tabs>*/}

          {/*/!* First tab *!/*/}
          {/*<View title="WELCOME" style={styles.content}>*/}
            {/*<Text style={styles.header}>*/}
              {/*Welcome to React Native*/}
            {/*</Text>*/}
            {/*<Text style={styles.text}>*/}
              {/*The best technology to build cross platform mobile apps with*/}
            {/*</Text>*/}
          {/*</View>*/}

          {/*/!* Second tab *!/*/}
          {/*<View title="NATIVE" style={styles.content}>*/}
            {/*<Text style={styles.header}>*/}
              {/*Truly Native*/}
            {/*</Text>*/}
            {/*<Text style={styles.text}>*/}
              {/*Components you define will end up rendering as native platform widgets*/}
            {/*</Text>*/}
          {/*</View>*/}

          {/*/!* Third tab *!/*/}
          {/*<View title="EASY" style={styles.content}>*/}
            {/*<Text style={styles.header}>*/}
              {/*Ease of Learning*/}
            {/*</Text>*/}
            {/*<Text style={styles.text}>*/}
              {/*It’s much easier to read and write comparing to native platform’s code*/}
            {/*</Text>*/}
          {/*</View>*/}

        {/*</Tabs>*/}
      </View>
    )

  }
}

