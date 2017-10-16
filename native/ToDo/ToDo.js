import React, { Component } from 'react'
import { Segment, CheckBox, Button, Icon, Content, Text, ListItem, Item } from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';
import moment from 'moment'
import EditTodoModal from "./EditTodoModal"


class Todo extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            editModalOpen: false,
            date: this.props.todo.date,
        }
    }

    handleCheckBoxClick = () => {
        const { todo, checkBoxClick } = this.props
        checkBoxClick(todo)
    }

    handleDelete = () => {
        const { todo, deleteItem } = this.props
        deleteItem(todo)
    }


    toggleEditModal = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        })
    }
    markAsFavorite = () => {
        let { todo } = this.props
        todo.isStar = !todo.isStar
        this.props.updateToDos(todo)
    }




    render() {
        const { date, editModalOpen} = this.state
        const { todo, onButtonClick} = this.props
        console.log(todo.checked , "this ibe")
        return(
            <ListItem>
                    <Content>
                        <Text> { todo.text } </Text>
                        <Grid>
                            <Col style={{height: 50}}>
                                <Item>
                                    <Icon name={todo.isStar ? 'star' : 'md-star'} color='yellow' onPress={this.markAsFavorite}/>
                                </Item>
                            </Col>
                            <Col style={{height: 50}}>
                                <Text>{ moment(date).calendar()}</Text>
                            </Col>
                            <Col style={{height: 50}}>
                                <CheckBox onPress={this.handleCheckBoxClick} checked={todo.checked} />
                            </Col>
                            <Col style={{height: 50}}>
                                <Item>
                                    <Button onPress={this.toggleEditModal} color="green">
                                        <Icon name='create'/>
                                    </Button>
                                    <Button onPress={this.handleDelete} color="firebrick">
                                        <Icon name='trash'/>
                                    </Button>
                                </Item>
                            </Col>
                        </Grid>
                        <EditTodoModal />
                </Content>
            </ListItem>
        )
    }
}

export default Todo
