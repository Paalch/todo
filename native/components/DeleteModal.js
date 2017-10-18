import React, { Component } from 'react'
import { View,Content, Label, Grid, Col, Button, Text } from 'native-base';
import { Modal, TouchableHighlight } from 'react-native'
import DefaultHeader from './DefaultHeader'
import { views, button, deleteMod, modalButtons } from '../styles'

export default class DeleteModal extends Component {

    /**
     * Handle for close button.
     * Closes modal
     */
    handleButtonCloseClick = () => {
        const { toggleModal } = this.props
        toggleModal()
    }

    /**
     * Handle for delete button.
     * Deletes given object and closes modal
     */
    handleButtonDeleteClick = () => {
        const { deleteFunction, object } = this.props
        deleteFunction(object)
        this.handleButtonCloseClick()
    }


    render() {
        const { isOpen, title, headerTitle } = this.props

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("DeleteModal has been closed.")}}>

                <DefaultHeader title={`Delete ${headerTitle}`} toggleModal={this.handleButtonCloseClick}/>
                <View style={deleteMod.outerView}>

                            <Label style={deleteMod.delLabel}>
                                Delete this {headerTitle}? {'\n'}
                            </Label>

                    <Label style={deleteMod.titleLabel}>
                        '{ title }'
                    </Label>
                </View>

                <View style={modalButtons.view}>
                    <Grid>
                        <Col>
                            <TouchableHighlight
                                onPress={this.handleButtonDeleteClick}
                                style={modalButtons.delete}>

                                <Text style={modalButtons.text}>
                                    DELETE
                                </Text>

                            </TouchableHighlight>
                        </Col>
                        <Col>

                            <TouchableHighlight
                                onPress={this.handleButtonCloseClick}
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
