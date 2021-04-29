import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRemoveVar } from './actions';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dob:"",
      address:"",
      phoneNUmber:"",
      booking:{
        dob:"",
        name:"",
        data:""
      }
    }
  }



  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>

      </View>
    );
  }
}



export default Test;
