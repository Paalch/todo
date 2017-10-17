import React, { Component } from 'react'
import { AsyncStorage, StyleSheet } from 'react-native'
import { Content, List,View, Button, Text,Footer } from 'native-base';
import moment from 'moment'

import HeaderMenu from '../HeaderMenu'
import NewNoteModal from './NewNoteModal'
import FABNewNote from './FABNewNote'
import Note from './Note'
import NavFooter from '../NavFooter'

export default class NoteContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            newModalOpen: false,

        }
    }

    /**
     * Use built in method to fetch Notes from localStorage on the host.
     * If localStoreage doesn't contain any Notes, set an empty list to avoid problems.
     */
    componentWillMount = async () => {
        let localNotes = JSON.parse(await AsyncStorage.getItem('notes'))
        this.setState({
            notes: localNotes || []
        })
    }

    /**
     * This method is used to update localStorage on the host with the current state od the Component.
     */
    updateLocalStorage = async () => {
        const { notes } = this.state
        await AsyncStorage.setItem('notes', JSON.stringify(notes))
    }

    /**
     * This method is used as a wrapper for the Component setState() method.
     * It is used so that the localStorage is updated every time the state is finished setting.
     */
    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
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
     * Creates a note if it does not exists, pushes new note to note list
     * @param title Title text for the given note
     * @param content Content text for the given note
     */
    onButtonSaveClick = (title, content) => {
        const { notes } = this.state
        let note = {
            title: title,
            content: content,
            date: moment()
        }

        notes.push(note)
        this.updateState({
            notes: notes,
            newModalOpen: false
        })
    }

    /**
     * Delete this note from local storage
     */
    deleteItem = (note) => {
        let { notes } = this.state
        const i = notes.indexOf(note)
        if (i >= 0) {
            notes.splice(i,1)
            this.updateState({
                notes: notes
            })
        } else {
            console.error(`[NotesContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }



  render() {
      const { newModalOpen, notes } = this.state

      return (
          <View style={{flex:1, backgroundColor:"white"}}>


              <NewNoteModal
                  toggleModal={this.toggleNewModal}
                  onButtonSaveClick={this.onButtonSaveClick}
                  isOpen={ newModalOpen }/>
              <Content>
                  <List>
                      {notes.sort((b,a) => {
                          return moment(a.date).unix() - moment(b.date).unix()}).map((note) =>
                          <Note
                              note={note}
                              key={note.date}
                              deleteItem={this.deleteItem}
                              onButtonSaveClick={this.onButtonSaveClick}/>)}
                              </List>

                  { notes.length ?
                      <Text style={styles.endText}>
                          End of your list
                      </Text> :
                      <Text style={styles.endText}>
                          No notes
                      </Text>
                  }
                  </Content>
              <View>
                  <FABNewNote toggleModal={this.toggleNewModal}/>
              </View>
              <NavFooter/>
          </View>
      )
  }
}

const styles = StyleSheet.create({

    endText: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        color:'#999999',
        marginBottom:25,
        marginTop:30,

    }

})
