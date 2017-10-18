import React, { Component } from 'react'
import {  View, Icon, Fab } from 'native-base';
import { views, button } from '../styles'

export default class FABNewItem extends Component {

    /**
     * Handle button click for new note
     * Open new note modal
     */
  handleNewNote = () => {
      const { toggleModal } = this.props
      toggleModal()
  }

  render() {
      return (
          <View style={views.flex1}>
              <Fab
                  active
                  direction="up"
                  containerStyle={{ }}
                  style={button.successColor}
                  position="bottomRight"
                  onPress={this.handleNewNote}>
                  <Icon name="add"/>
              </Fab>
          </View>
      )
  }
}
