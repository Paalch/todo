import React, { Component } from 'react'
import { View, Content, List, Text } from 'native-base'
import { AsyncStorage } from 'react-native';
import Todo from './Todo'
import moment from "moment";
import FABNewItem from '../FABNewItem'
import NewTodoModal from './NewTodoModal'
import { todoCont } from '../../styles'

export default class TodoContainer extends Component {
    constructor(props) {
        super(props)

        //Sets the state
        this.state = {
            newModalOpen: false,
            todos: []
        }
    }

  /**
   * Loads content from localStorage
   */
  componentWillMount = async () => {
        let localTodos = JSON.parse(await AsyncStorage.getItem('todos'))
        this.setState({
            todos: localTodos || []
        })
    }

  /**
   * Handles the checkbox button in todo
   * @param todo
   */
  checkBoxClick = (todo) => {
        const { todos } = this.state
        const i = todos.indexOf(todo)
        if (i >= 0) {
            todos[i].checked = !todos[i].checked
            this.updateState({
                newModalOpen: false,
                todos: todos
            })
        } else {
            console.error(`[TodoContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }

    }

  /**
   * Adds a new todo to the list, and updates localStorage
   * @param text
   */
  newTodo = (text) => {
        const { todos } = this.state
        let todo = {
            text: text,
            date: moment(),
            checked: false,
            isStar:false,
        }
        todos.splice(0,0,todo)
        this.updateState({
            todos: todos
        })
    }

    /**
     * Toggles new note modal on/off
     */
    toggleNewModal = () => {
        this.setState({
            newModalOpen: !this.state.newModalOpen
        })
    }

  /**
   * Removes given todo
   * @param todo
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
   * Updates localStorage
   * @returns {Promise.<void>}
   */
  updateLocalStorage = async () => {
        const { todos } = this.state
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error(error)
        }
    }

  /**
   * Updates state
   * @param state
   */
  updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

  /**
   * Updates the todo list for a given todo
   * @param todo
   */
  updateToDos = (todo) => {
        const {todos} = this.state;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i] === todo){
                todos.splice(i,1)
                todo.isStar ? todos.splice(0,0,todo) :  todos.push(todo)
                this.updateState(todos)
                break
            }
        }
    }

    render() {
        //define constants
        const { todos, newModalOpen } = this.state
        return(
                <View style={todoCont.view}>
                    <Content>

                    <NewTodoModal
                        toggleModal={this.toggleNewModal}
                        onButtonSaveClick={this.newTodo}
                        isOpen={ newModalOpen }/>

                    <List>
                    { todos.map((todo) => (
                        <Todo key={todo.date}
                            todo={todo}
                            checkBoxClick={this.checkBoxClick}
                            deleteItem={this.deleteItem}
                            onButtonClick = {this.newTodo}
                            updateToDos = {this.updateToDos}
                        />)
                    )}
                    </List>

                  { todos.length ?
                    <Text style={todoCont.endText}>
                        End of your list
                    </Text> :
                    <Text style={todoCont.endText}>
                        No todos
                    </Text>
                  }
                    </Content>
                    <View>
                  <FABNewItem toggleModal={this.toggleNewModal}/>
                    </View>

                </View>
            </View>
        )
    }

}