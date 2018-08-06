/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "" 
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.calculate = this.calculate.bind(this)

  }

  handleChangeText(text) {
    this.setState({
      value: text
    })
  }

  calculate() {
    const price = this._price._lastNativeText
    console.log(price)
    this.props.navigation.navigate('result', {
      price: price
    })
  }


  render() {
    return (
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to RN!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      */
      
    <View style={styles.container}>
      <Text style={styles.text}>VAT Calculator</Text> 
      <TextInput 
      defaultValue={this.state.value}
      onChangeText={this.handleChangeText}
      style={styles.textInput}  
      placeholder='Enter price'
      placeholderTextColor='gray'
      ref={input => this._price= input} 
      /> 
      <Button title={'Calculate'} 
        onPress={this.calculate}
      />
   </View>
    );
  }
}

class Result extends Component {
  constructor() {
    super()
    this.state = {
      value: "" 
    }

  }




  render() {
    const {navigation} = this.props; 
    const price = navigation.getParam('price', 'There is no price')
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>The VAT is {price*0.05}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 20
  },

  textInput: {
    height: 40,
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'stretch',

  }, 

  resultText: {
    fontSize: 50, 
    borderWidth: 1, 
    borderColor: 'black' 
  }

  /*
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
});

export default createStackNavigator({
  main: App, 
  result: Result 
})
