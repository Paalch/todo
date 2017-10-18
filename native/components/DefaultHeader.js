import React, { Component } from 'react'
import { Container, Header, Content, Left ,Right, Title, Body, Icon, Button } from 'native-base';
import { modalHead } from '../styles'

export default class DefaultHeader extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { title, toggleModal } = this.props

    return (
        <Header style={modalHead.head}>
          <Left>
            <Button transparent onPress={toggleModal} >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>{title}</Title>
          </Body>
        </Header>
    )
  }
}
