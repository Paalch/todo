import React, { Component } from 'react'
import { View,Content, Label, Grid, Col, Button, Text } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from './DefaultHeader'
import { views, button, deleteMod } from '../styles'

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
                <Grid>

                    <Col>
                        <View style={views.buttonView}>
                            <Button
                                block
                                onPress={this.handleButtonDeleteClick}
                                style={button.failColor}>
                                <Text>Delete</Text>
                            </Button>
                        </View>
                    </Col>

                    <Col>
                        <View style={views.buttonView}>
                            <Button
                                block
                                onPress={this.handleButtonCloseClick}
                                style={button.closeColor}>
                                <Text>
                                    Cancel
                                </Text>
                            </Button>
                        </View>
                    </Col>

                </Grid>

            </Modal>
        )
    }
}
