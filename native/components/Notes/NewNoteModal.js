import React, { Component } from 'react'
import { View, Label, Item, Input, Text, Content , Button, Form, Grid, Col } from 'native-base'
import { Modal, TouchableHighlight } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import { noteNewMod, views, button, modalButtons, modal } from '../../styles'

export default class NewNoteModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',

        }
    }

    /**
     * Handler for save button click.
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const {title, content} = this.state
        const {toggleModal, onButtonSaveClick} = this.props

        onButtonSaveClick(title, content)
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
            title: '',
            content: '',
        })
    }

    
    render() {
        const { isOpen, toggleModal } = this.props
        const { title, content } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}>

                <DefaultHeader title={"New Note"} toggleModal={this.handleButtonCloseClick}/>
                    <Content >
                        <Form>
                            <View style={modalButtons.flexView}>
                                <Item floatingLabel>
                                    <Label>
                                        Title
                                    </Label>
                                    <Input
                                        onChangeText={(title) => this.setState({title})}
                                        value={title}
                                        style={modal.inputText}/>
                                </Item>
                            </View>

                            <View>
                                <Item floatingLabel>
                                    <Label>
                                        Content
                                    </Label>
                                    <Input
                                        onChangeText={(content) => this.setState({content})}
                                        value={content}
                                        multiline={true}
                                        style={modalButtons.multiLineInput}/>
                                </Item>
                            </View>
                        </Form>
                    </Content>


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

