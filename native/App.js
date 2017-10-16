import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import Navbar from './Navbar'
import TodoContainer from './Todo/TodoContainer'

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <TodoContainer/>
      </Container>
    );
  }
}


