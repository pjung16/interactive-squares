import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {currentColor: "#000000"};
  }

  render() {
	const styles = StyleSheet.create({
	  square: {
		backgroundColor: this.state.currentColor,
		borderWidth: 5,
		borderColor: '#FFF',
		width: '13%',
		aspectRatio: 1
	  },
	});
    return (
	  <View style={styles.square}>
        <Button
  		  onPress={() => {
    	    
  		  }}
  		  title=""
		/>
	  </View>
    );
  }
}

export default Square;