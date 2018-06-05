import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	currentColor: 0
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({ 
    	currentColor: (this.state.currentColor + 1) % 7,
    });
  }

  render() {
  	const colors = [
      'black',
      'blue',
      'cyan',
      'green',
      'magenta',
      'red',
      'yellow',
    ]

	  const styles = StyleSheet.create({
	    square: {
	    backgroundColor: colors[this.state.currentColor],
	    borderWidth: 5,
	    borderColor: '#FFF',
	    width: '13%',
	    aspectRatio: 1
	    },
	  });
    return (
    <View style={styles.square}>
      <Button
        onPress={this.changeColor}
        title="    "
        color='transparent'
      />
    </View>
    );
  }
}

export default Square;