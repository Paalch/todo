import React, { Component } from 'react'
import { Button, Icon, Text, ListItem, Item ,Grid ,Col,Row } from 'native-base';
import moment from 'moment'
import EditNoteModal from './EditNoteModal'
import ViewNoteModal from './ViewNoteModal'
import DeleteModal from '../DeleteModal'
import { noteStyle} from '../../styles'

export default class Note extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.note.title,
            content: this.props.note.content,
            date: this.props.note.date,
            editModalOpen:false,
            viewModalOpen:false,
            deleteModalOpen:false
        }
    }

    /**
     * Delete this note from local storage
     */
    handleDelete = () => {
        const { note, deleteItem } = this.props
        deleteItem(note)
    }

    /**
     * Toggle edit modal on/off
     */
    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }

    /**
     * Toggle delete modal on/off
     */
    toggleDeleteModal = () => {
        this.setState({
            deleteModalOpen: !this.state.deleteModalOpen
        })
    }

    /**
     * Toggle view modal on/off
     */
    toggleViewModal = () => {
        this.setState({
            viewModalOpen: !this.state.viewModalOpen
        })
    }

    render() {
        const { note, onButtonSaveClick, deleteItem } = this.props
        const { editModalOpen, viewModalOpen, deleteModalOpen } = this.state


        return (
            <ListItem onPress={this.toggleViewModal}>
                <Grid>
                    <Col size={80}>
                        <Row>
                            <Text style={noteStyle.titleStyle}>
                                {note.title}
                            </Text>
                        </Row>
                        <Row>
                            <Text style={noteStyle.dateStyle}>
                                {moment(note.date).calendar()}
                            </Text>
                        </Row>
                    </Col>


                    <Col size={25} style={noteStyle.col}>
                        <Row>
                            <Button
                                onPress={this.toggleDeleteModal}
                                style={noteStyle.closeButton}>
                                <Icon
                                    name='close'
                                    style={{color:'white'}}/>
                            </Button>

                            <Button
                                onPress={this.toggleEditModal}
                                style={noteStyle.createButton}>
                                <Icon name='create' style={{color:'white'}}/>
                            </Button>
                        </Row>
                    </Col>
                </Grid>
                <EditNoteModal
                    isOpen={editModalOpen}
                    toggleModal={this.toggleEditModal}
                    onButtonSaveClick={onButtonSaveClick}
                    handleDelete={this.handleDelete}
                    title={note.title}
                    content={note.content}/>

                <ViewNoteModal
                    isOpen={viewModalOpen}
                    toggleModal={this.toggleViewModal}
                    title={note.title}
                    content={note.content}
                    date={moment(note.date).calendar()}/>


                <DeleteModal
                    isOpen={deleteModalOpen}
                    toggleModal={this.toggleDeleteModal}
                    deleteFunction={deleteItem}
                    object={note}
                    title={note.title}
                    headerTitle={"note"}
                />

            </ListItem>
        )
    }
}

