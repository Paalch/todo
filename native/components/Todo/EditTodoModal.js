import React, { Component } from 'react'
import { View, Item, Input, Text, Content, Title, Button, Form, H1, Grid, Col } from 'native-base';
import { Modal, TouchableHighlight } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import { modalButtons, views } from '../../styles'


export default class EditTodoModal extends Component  {

    constructor(props) {
        super(props)

        //Sets state, tempText is the text in the textfield and text is the text from the todo object
        this.state = {
            tempText: this.props.text,
            text: this.props.text,
        }
    }

    /**
     * Button handler for save button
     */
    handleButtonSaveClick = () => {
        const { tempText } = this.state
        //Checks that the text in not empty
        if(tempText !== "") {
            this.props.onButtonSaveClick(tempText)
            //resets the state
            this.setState({
                tempText: '',
                text: ''
            })
            //Hides the modal
            this.props.toggleModal()
            //removes the old todo
            this.props.handleDelete()
        }
    }

    /**
     * Handle for button close click.
     * Resets the original text to state
     * Closes model
     */
    handleButtonCloseClick = () => {
        const {toggleModal} = this.props
        toggleModal()

    }

    render() {
        //define constants
        const { toggleModal, isOpen } = this.props
        const { tempText } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}>
                <DefaultHeader title={"Edit Todo"} toggleModal={toggleModal}/>
                <View style={views.flex1}>
                    <Content>
                        <Form>
                            <View style={views.flex1}>
                                <H1>Write your todo here:</H1>
                                <Item>
                                    <Input
                                        onChangeText={(tempText) => this.setState({tempText})}
                                        value={tempText}
                                        placeholde="Write your todo here"/>
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
                                    SAVE
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
