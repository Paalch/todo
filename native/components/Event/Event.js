import React, { Component } from 'react'
import { List, ListItem, Left, Right, Body, Text, Button, Icon, Grid, Col, Row} from 'native-base';

import moment from 'moment'

import EditModal from './EditModal'
import DeleteModal from '../DeleteModal'
import { eventStyle, icons } from '../../styles'


export default class Event extends Component {
    constructor(props) {
        super(props)

        //init state
        this.state ={
            editModalOpen: false,
            deleteModalOpen:false
        }
    }

  /**
   * Calls the delete function in the EventContainer
   */
  handleDelete = () => {
        const { event, deleteItem } = this.props
        deleteItem(event)
    }

  /**
   * Opens and closes the editEventModal
   */
  toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    /**
     * Opens and closes the deleteModal
     */
    toggleDeleteModal = () => {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        })
    }

    render() {
      //define constants
        const { event, isNew, updateEvent, deleteItem } = this.props
        const { editModalOpen, deleteModalOpen } = this.state

        return(
            <List style={eventStyle.outerList}>
                {isNew ?
                    <ListItem itemDivider>
                        <Text>
                        {moment(event.date).format('dddd')} {moment(event.date).format('Do')}
                        </Text>
                    </ListItem> : undefined
                }
                <ListItem>
                    <Grid>
                          <Col size={80}>
                              <Row>
                                  <Left>
                                      <Text style={eventStyle.titleStyle}>
                                          {event.text}
                                      </Text>
                                  </Left>
                                  <Body>
                                      <Text style={eventStyle.whereStyle}>
                                          {event.where}
                                      </Text>
                                      <Text style={eventStyle.dateStyle}>
                                          {moment(event.date).format('HH:mm')}
                                      </Text>
                                  </Body>
                              </Row>
                          </Col>

                          <Col size={25}>
                              <Row>
                              <Button
                                  onPress={this.toggleDeleteModal}
                                  style={eventStyle.closeButton}>
                                  <Icon name='close' style={icons.whiteColor}/>
                              </Button>
                              <Button
                                  onPress={this.toggleEditModal}
                                  style={eventStyle.createButton}>
                                  <Icon name='create' style={icons.whiteColor}/>
                              </Button>
                              </Row>
                        </Col>
                    </Grid>
                    <EditModal
                        isOpen={editModalOpen}
                        toggleModal={this.toggleEditModal}
                        updateEvent={updateEvent}
                        handleDelete={this.handleDelete}
                        text={event.text}
                        date={event.date}
                        where={event.where}/>

                    <DeleteModal
                        isOpen={deleteModalOpen}
                        toggleModal={this.toggleDeleteModal}
                        deleteFunction={deleteItem}
                        object={event}
                        title={event.text}
                        headerTitle={"event"}/>

                </ListItem>
            </List>
        )
    }
}

