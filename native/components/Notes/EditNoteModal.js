import React, { Component } from 'react'
import { View, Label, Item, Input, Content, Form, Grid, Col } from 'native-base';
import { Modal,Text,TouchableHighlight } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import {views, button, noteEditMod } from '../../styles'

export default class NewNoteModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tempTitle: this.props.title,
            tempContent: this.props.content,
            title: this.props.title,
            content: this.props.content,
            date: this.props.date,

        }
    }

    /**
     * Handler for save button click.
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const {tempTitle, tempContent} = this.state
        const {toggleModal, onButtonSaveClick, handleDelete} = this.props

        onButtonSaveClick(tempTitle, tempContent)
        handleDelete()

        this.setState({
            title: '',
            content: ''
        })
        toggleModal()
    }

    /**
     * Handle for button close click.
     * Resets the original content to state
     * Closes model
     */
    handleButtonClose = () => {
        const { title, content } = this.state
        const {toggleModal} = this.props

        this.setState({
            tempTitle: title,
            tempContent: content
        })
        toggleModal()
    }


    render() {
        const { toggleModal, isOpen } = this.props
        const { tempTitle, tempContent } = this.state

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {alert("EditNoteModal has been closed.")}}>

                <DefaultHeader title={"Edit Note"} toggleModal={toggleModal}/>
                <Content>
                    <Form>

                        <View style={{flex:1, flexDirection:'column',justifyContent:'center'}}>
                            <Item floatingLabel>
                                <Label>
                                    Title
                                </Label>
                                <Input
                                    onChangeText={(tempTitle) => this.setState({tempTitle})}
                                    value={tempTitle}/>
                            </Item>
                        </View>

                        <View>
                            <Item floatingLabel>
                                <Label>
                                    Content
                                </Label>
                                <Input
                                    onChangeText={(tempContent) => this.setState({tempContent})}
                                    value={tempContent}
                                    multiline={true}
                                    style={{height:500}}/>
                            </Item>
                        </View>

                    </Form>
                </Content>

                <View style={{position:'absolute',
                    bottom: 0,
					height:50,
					justifyContent:'center',
					width: '100%'}}>
                    <Grid>
                        <Col>
                    <TouchableHighlight
                        onPress={this.handleButtonSaveClick}
                        style={{
                            backgroundColor:'#21BA45',
							flex:1,
							justifyContent:'center',
							alignItems:'center',
                            height:'100%'}}>

                        <Text style={{
							color:'white',
                            fontWeight:'bold'}}>
                            SAVE
                        </Text>

                    </TouchableHighlight>
                        </Col>
                        <Col>

                            <TouchableHighlight
                                onPress={this.handleButtonClose}
                                style={{
                                    backgroundColor:'#767676',
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:'100%'}}>

                                <Text style={{
                                    color:'white',
                                    fontWeight:'bold'}}>
                                    CLOSE
                                </Text>
                            </TouchableHighlight>

                        </Col>
                    </Grid>
                </View>

            </Modal>
        )
    }
}