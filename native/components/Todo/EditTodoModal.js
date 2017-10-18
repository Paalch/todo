import React, { Component } from 'react'
import { View, Item, Input, Text, Content, Title, Button, Form, H1, Grid, Col, Label } from 'native-base';
import { Modal, TouchableHighlight } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import { modalButtons, views } from '../../styles'


export default class EditTodoModal extends Component  {

    constructor(props) {
        super(props)

        //Sets state, tempContent is the text in the textfield and content is the text from the todo object
        this.state = {
            tempContent: this.props.content,
            content: this.props.content,
        }
    }

  /**
   * Button handler for save button
   */
    handleButtonSaveClick = () => {
        const { tempContent } = this.state
        //Checks that the content in not empty
        if(tempContent !== "") {
            this.props.onButtonSaveClick(tempContent)
            //resets the state
            this.setState({
                tempContent: '',
                content: ''
            })
            //Hides the modal
            this.props.toggleModal()
            //removes the old todo
            this.props.handleDelete()
        }
    }

	/**
	 * Handle for button close click.
	 * Resets the original content to state
	 * Closes model
	 */
	handleButtonCloseClick = () => {
		const {toggleModal} = this.props
		toggleModal()

	}

    render() {
        //define constants
        const { toggleModal, isOpen } = this.props
        const { tempContent } = this.state

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
                                <Item floatingLabel>
                                    <Label>
                                        Edit your todo
                                    </Label>
                                    <Input
                                        onChangeText={(tempContent) => this.setState({tempContent})}
                                        value={tempContent}
                                        placeholde="Write your todo here"
                                        style={views.addText}/>
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
