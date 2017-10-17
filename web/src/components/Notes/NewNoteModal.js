import React, { Component } from 'react'
import { Button, Input, Modal, Grid, Form } from 'semantic-ui-react'

export default class NewNoteModal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            titleError: false,
            contentError: false
        }

        this.handleTitleInput = this.handleTitleInput.bind(this)
        this.handleContentInput = this.handleContentInput.bind(this)
    }

  // Monitor title input
    handleTitleInput (e, {value}) {
        this.setState({
            title: value
        })
    }

  // Monitor content input
    handleContentInput (e, {value}) {
        this.setState({
            content: value
        })
    }

    /**
     * Handler for save button click.
     * Checks if input fields are empty, if they are, give feedback to user (red input fields)
     * Saves the given information from user as a new note and reset input fields
     * Close modal
     */
    handleButtonSaveClick = () => {
        const { title, content } = this.state

        if ((title.length !== 0) && (content.length !== 0)) {
            this.props.onButtonSaveClick(title, content)
            this.setState({
                title: '',
                content: ''
            })

            this.props.onClose()
        }

        if (title.length === 0) {
            this.toggleErrorTitleInput()
            setTimeout(this.toggleErrorTitleInput, 3000)
        }
        if (content.length === 0) {
            this.toggleErrorContentInput()
            setTimeout(this.toggleErrorContentInput, 3000)
        }
    }

    /**
     * Toggles title input error value on/off
     */
    toggleErrorTitleInput = () => {
        const { titleError } = this.state
        this.setState({
            titleError: !titleError
        })
    }

    /**
     * Toggles content input error value on/off
     */
    toggleErrorContentInput = () => {
        const { contentError } = this.state
        this.setState({
            contentError: !contentError
        })
    }

    /**
     * Handle for close button click
     * Reset input fields
     * Closes modal
     */
    handleButtonClose = () => {
        this.setState({
            title: '',
            content: ''
        })
        this.props.onClose()
    }

    render () {
        /**
         * Render nothing if model isOpen is false
         */
        const { isOpen } = this.props
        const { title, content, titleError, contentError } = this.state

        if (!this.props.isOpen) {
            return null
        }
        return (
            <Modal
                open={isOpen}
                size='tiny'>
                <Modal.Header>

                    <Grid width={16} >
                        <Grid.Column width={13} >
                            <Input
                                error={titleError}
                                onChange={ this.handleTitleInput }
                                value={ title }
                                placeholder='Title ...'/>
                        </Grid.Column>
                    </Grid>

                </Modal.Header>
                <Modal.Content scrolling>

                    <Modal.Description>
                        <Form>
                            <Form.TextArea
                                error={contentError}
                                onChange={ this.handleContentInput }
                                value={ content }
                                size='small'
                                placeholder='Note text ...'
                                autoHeight={true}/>
                        </Form>
                    </Modal.Description>

                </Modal.Content>
                <Modal.Actions>
                    <Button.Group>
                        <Button
                            onClick={ this.handleButtonSaveClick }
                            color='green'>
                            Save
                        </Button>
                        <Button
                            onClick={this.handleButtonClose}
                            color='grey'>Close
                        </Button>
                    </Button.Group>
                </Modal.Actions>
            </Modal>
        )
    }
}
