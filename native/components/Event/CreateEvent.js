import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Modal, Text, View, TouchableHighlight } from 'react-native';
import { Header, Button, Icon, Item, Input, Form, Grid, Col, H3 } from 'native-base';
import DefaultHeader from '../DefaultHeader'
import { eventMod, views, modalButtons } from '../../styles'

import moment from 'moment'

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            text: '',
            where: '',
            date: null
        }
    }

  /**
   * Updates the date on change
   * @param event
   * @param date
   */
    handleDate = (event, date) => {
        this.setState({date: date})
    }

  /**
   * Closes the createEventModal(this)
   */
  handleClose = () => {
        const{toggleModal} = this.props
        toggleModal()
    }

  /**
   * Creates a new event
   */
  createEvent = () =>  {
        const { text, where, date } = this.state
        if(text !== '' && where !=='' && date !==null){
          this.props.updateEvent(text, where, date)
          this.setState({
              text: '',
              where: '',
              date: null
          })
      }
    }

    render() {
        //Define constants
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

                </Form>
                    <H3>At what time is the event starting:</H3>
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
                </View>
                <View style={modalButtons.view}>
                    <Grid>
                        <Col>
                            <TouchableHighlight
                                onPress={this.createEvent}
                                style={modalButtons.save}>

                                <Text style={modalButtons.text}>
                                    ADD
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
