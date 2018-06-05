import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';

export default class App extends Component {
  renderSquares() {
    const nums = [];
    for (let i = 0; i < 49; i++) {
      nums.push(i);
    }
	return nums.map((i) => <Square key={i} />);
  }
  render() {
    return (
      <View style={styles.container}>
		{this.renderSquares()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
	flex: 1,
	flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
	alignItems: 'center',
    justifyContent: 'center',
	paddingTop: 150
  },
});
