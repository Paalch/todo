import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Modal, Text, View, TouchableHighlight } from 'react-native';
import { Header, Button, Icon, Item, Input, Form, Grid, Col, H3} from 'native-base';
import DefaultHeader from '../DefaultHeader'
import { eventMod, views, modalButtons } from '../../styles'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            text: this.props.text,
            where: this.props.where,
            date: this.props.date,
            time: this.props.date,
        }
    }

  /**
   * Updates the date, onChange
   * @param event
   * @param date
   */

  handleDate = (event, date) => {
      this.setState({date: date})

  }

  /**
   * Closes the modal
   */
  handleClose = () => {
      const{toggleModal} = this.props
      toggleModal()
    }

  /**
   * Updates the event
   */
  updateEvent = () =>  {
      const { text, where, date } = this.state


      //Checks that date and text have a value
      if (text !== '' && date && where) {
          //creates a new event
          this.props.updateEvent(text, where, date)
      }
      //Closes the app
      this.handleClose()
      //Deletes the old version
      this.props.handleDelete()
  }

  render() {
      //define constants
      const { text, where } = this.state
      const { toggleModal, isOpen } = this.props

      return(
          <Modal
              animationType="slide"
              transparent={false}
              visible={isOpen}
              onRequestClose={() => {toggleModal()}}
          >
              <DefaultHeader title={"New event"} toggleModal={toggleModal}/>
              <View style={views.flex1}>
                  <Form>
                      <H3>Event name:</H3>
                      <Item>
                          <Input
                              placeholder="Description"
                              onChangeText={(text) => this.setState({text})}
                              value={text} />
                      </Item>
                      <H3>Where is the event:</H3>
                      <Item last>
                          <Input
                              placeholder="Where"
                              onChangeText={(where) => this.setState({where})}
                              value={where} />
                      </Item>
                      <DatePicker
                          style={eventMod.datePick}
                          date={this.state.date}
                          mode="datetime"
                          placeholder="select date"
                          format="YYYY-MM-DD HH:mm"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                              dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                              },
                              dateInput: {
                                  marginLeft: 36
                              }
                          }}
                          onDateChange={(date) => {this.setState({date: date})}}
                      />
                  </Form>
              </View>
              <View style={modalButtons.view}>
                  <Grid>
                      <Col>
                          <TouchableHighlight
                              onPress={this.updateEvent}
                              style={modalButtons.save}>

                              <Text style={modalButtons.text}>
                                  SAVE
                              </Text>

                          </TouchableHighlight>
                      </Col>
                      <Col>

                          <TouchableHighlight
                              onPress={this.handleClose}
                              style={modalButtons.close}>

                              <Text style={modalButtons.text}>
                                  CANCEL
                              </Text>
                          </TouchableHighlight>

                      </Col>
                  </Grid>
              </View>

          </Modal>
      )
  }
}
