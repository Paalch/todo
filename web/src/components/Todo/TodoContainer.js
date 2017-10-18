import React, { Component } from 'react'
import { Container, Divider, Header, Grid } from 'semantic-ui-react'
import moment from 'moment'

import Todo from './Todo'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {
    constructor (props) {
        super(props)

        /**
         * Set the initial state on the Component.
         * Initialize Todos as an empty list because Component isn't mounted yet.
         */
        this.state = {
            todos: []
        }
    }

    /**
     * Use built in method to fetch Todos from localStorage on the host.
     * If localStoreage doesn't contain any Todos, set an empty list to avoid problems.
     */
    componentWillMount = () => {
        let localTodos = JSON.parse(localStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

    /**
     * This method handles checkbox toggles on a given Todo.
     * @param todo The Todo on which the 'checked' variable should be toggled.
     */
    checkBoxClick = (todo) => {
        const { todos } = this.state
        const i = todos.indexOf(todo)
        if (i >= 0) {
            todos[i].checked = !todos[i].checked
            this.updateState({
                todos: todos
            })
        } else {
            console.error(`[TodoContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    /**
     * Create a new Todo and add it to state.
     * @param text The text of the new Todo which is created.
     */
    newTodo = (text) => {
        const { todos } = this.state
        let todo = {
            text: text,
            date: moment(),
            checked: false,
            isStar: false
        }
        todos.splice(0, 0, todo)
        this.updateState({
            todos: todos
        })
    }

    /**
     * This method deletes a given Todo from the state and localStorage
     * If given Todo doesn't exist, throw error to console.
     * @param todo Todo object to be deleted.
     */
    deleteItem = (todo) => {
        let { todos } = this.state
        const i = todos.indexOf(todo)
        if (i >= 0) {
            todos.splice(i, 1)
            this.updateState({
                todos: todos
            })
        } else {
            console.error(`[TodoContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    /**
     * This method is used to update localStorage on the host with the current state od the Component.
     */
    updateLocalStorage = () => {
        const { todos } = this.state
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    /**
     * This method is used as a wrapper for the Component setState() method.
     * It is used so that the localStorage is updated every time the state is finished setting.
     * @param state Changes to be added to state.
     */
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    /**
     * Updates the order of the todos
     */
    updateTodos = (todo) => {
        const {todos} = this.state
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === todo) {
                todos.splice(i, 1)
                todo.isStar ? todos.splice(0, 0, todo) : todos.push(todo)
                this.updateState(todos)
                break
            }
        }
    }

    render () {
        /**
         * Fetch 'todos' from state.
         */
        const { todos } = this.state
        return (
            <div>
                <Divider hidden />
                <Container text>
                    <Grid.Column>
                        <Grid.Row width={10}>
                            <Header as='h1' floated='left'>Your todos</Header>
                            <TodoInput onButtonClick={this.newTodo}/>
                        </Grid.Row>
                    </Grid.Column>
                    <Divider hidden/>
                    { todos.map((todo) =>
                        < Todo key={todo.date}
                            todo={todo}
                            checkBoxClick={this.checkBoxClick}
                            deleteItem={this.deleteItem}
                            onButtonClick = {this.newTodo}
                            updateTodos = {this.updateTodos}
                        />
                    )}

                    { !todos.length
                        ? <Header as='h3' block textAlign='center'>
                            You have no todos
                        </Header> : undefined
                    }
                </Container>
                <Divider hidden />
            </div>
        )
    }
}
