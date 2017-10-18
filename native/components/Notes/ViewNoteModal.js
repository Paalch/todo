import React, { Component } from 'react'
import { View, Text, Content, Title , Button, Grid, Col } from 'native-base';
import { Modal } from 'react-native'
import DefaultHeader from '../DefaultHeader'
import {noteVwMod, views, button } from '../../styles'

export default class ViewNoteModal extends Component {


    render() {
        const { toggleModal, isOpen, title, content, date } = this.props

        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={isOpen}
                onRequestClose={() => {toggleModal()}}>

                <DefaultHeader title={title} toggleModal={toggleModal}/>
                <View style={views.flex1}>
                    <Content>
                        <Grid>

                            <Col size={75}>
                                <View style={views.flex1}>
                                    <Text style={noteVwMod.titleStyle}>
                                        {title}
                                    </Text>
                                </View>
                            </Col>

                            <Col size={26}>
                                <View style={views.flex1}>
                                    <Text style={noteVwMod.dateStyle}>
                                        {date}

                                        </Text>
                                </View>
                            </Col>
                        </Grid>

                        <View
                            style={noteVwMod.borderStyle}/>

                        <View style={{flex:2}}>
                            <Text style={noteVwMod.contentStyle}>
                                {content}
                            </Text>
                        </View>

                    </Content>
                </View>

                <View style={views.buttonView}>
                    <Button
                        block
                        onPress={toggleModal}
                        style={button.closeColor}>
                        <Text>Close</Text>
                    </Button>
                </View>

            </Modal>
        )
    }
}
