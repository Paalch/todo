import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content , Button, Form, Grid, Col } from 'native-base';
import { Modal, StyleSheet, TouchableHighlight } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import { modalButtons, todoNewMod } from '../../styles'

export default class NewTodoModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',

        }
    }

    /**
     * Handler for save button click.
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const {text} = this.state
        const {toggleModal, onButtonSaveClick} = this.props

        onButtonSaveClick(text)
        this.clearInput()
        toggleModal()
    }

    /**
     * Handle for button close click.
     * Resets the original content to state
     * Closes model
     */
    handleButtonCloseClick = () => {
        const {toggleModal} = this.props
        this.clearInput()
        toggleModal()

    }

    /**
     * Clear title and content in state
     */
    clearInput = () => {
        this.setState({
            text: '',
        })
    }


    render() {
        const { isOpen, toggleModal } = this.props
        const { text } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}>

                <DefaultHeader title={"New Todo"}
                               toggleModal={this.handleButtonCloseClick}/>
                <View style={todoNewMod.view}>
                    <Content >
                        <Form>
                            <View style={todoNewMod.view}>
                                <Item floatingLabel>
                                    <Label>
                                        Your todo
                                    </Label>
                                    <Input
                                        onChangeText={(text) => this.setState({text})}
                                        value={text}
                                        style={todoNewMod.addText}/>
                                </Item>
                            </View>

                        </Form>
                    </Content>

                </View>

                <View style={modalButtons.view}>
                    <Grid>
                        <Col>
                            <TouchableHighlight
                                onPress={this.handleButtonSaveClick}
                                style={modalButtons.save}>

                                <Text style={modalButtons.text}>
                                    ADD
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

