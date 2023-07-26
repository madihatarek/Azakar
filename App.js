import * as React from 'react';
import {
  View, Text, StatusBar, ImageBackground, Dimensions,
  TextInput, Button, TouchableOpacity, ScrollView, Image,
  StyleSheet, Modal
} from 'react-native';

import TestApp from './Tasks/TestApp'


export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <Alazkar/> */}

        <TestApp/>

     </>
    )
  }
}