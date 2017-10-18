import React, { Component } from 'react'
import { CheckBox, Button, Icon, Content, Text, ListItem, Item } from 'native-base'
import { Col, Grid, Row } from 'react-native-easy-grid';
import moment from 'moment'
import EditTodoModal from "./EditTodoModal"
import DeleteModal from '../DeleteModal'
import { todoStyle, icons } from '../../styles'


export default class Todo extends Component {

    constructor(props) {
        super(props)

        //sets the state
        this.state = {
            //Booleans used to open and close modals
            editModalOpen: false,
            deleteModalOpen: false,
            //Sets the date to props date
            date: this.props.todo.date,
        }
    }

    /**
     * Handels checkbox click
     */
    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    /**
     * Handles delete button, removes this item
     */
    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }

    /**
     * Toggele the modal window
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
     * Sets this todo as a favorite
     */
    markAsFavorite = () => {
        let { todo } = this.props
        todo.isStar = !todo.isStar
        this.props.updateToDos(todo)
    }


    render() {
        //defines constants
        const { date, editModalOpen, deleteModalOpen } = this.state
        const { todo, onButtonClick, deleteItem } = this.props
        return(
            <ListItem style={{backgroundColor: todo.checked ? '#21ba45' : 'white' }}>
                <Content>
                    <Grid>
                        <Col size={35}>
                            <Row>
                                <CheckBox
                                    onPress={this.handleCheckBoxClick}
                                    style={todoStyle.todo}
                                    checked={todo.checked} />
                                <Icon
                                    name={todo.isStar ? 'md-star' : 'star'}
                                    style={todoStyle.star}
                                    onPress={this.markAsFavorite}/>
                            </Row>
                        </Col>

                        <Col size={74} style={todoStyle.col}>

                            <Row>
                                <Text
                                    style={todoStyle.todoText}>
                                    { todo.text }
                                </Text>
                            </Row>
                            <Row>
                                <Text>
                                    { moment(date).calendar()}
                                </Text>
                            </Row>
                        </Col>
                        <Col size={42}>
                            <Row>
                                <Button
                                    onPress={this.toggleDeleteModal}
                                    style={todoStyle.closeButton}>
                                    <Icon
                                        name='close'
                                        style={icons.whiteColor}
                                    />
                                </Button>
                                <Button
                                    onPress={this.toggleEditModal}
                                    style={todoStyle.createButton}>
                                    <Icon
                                        name='create'
                                        style={icons.whiteColor}/>
                                </Button>
                            </Row>
                        </Col>
                    </Grid>
                    <EditTodoModal toggleModal={this.toggleEditModal}
                        isOpen={editModalOpen}
                        onButtonSaveClick={onButtonClick}
                        handleDelete = {this.handleDelete}
                        content = {todo.text} />
                    <DeleteModal
                        isOpen={deleteModalOpen}
                        toggleModal={this.toggleDeleteModal}
                        deleteFunction={deleteItem}
                        object={todo}
                        title={todo.text}
                        headerTitle={"todo"}
                    />
                </Content>
            </ListItem>
        )
    }
}
