import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import moment from 'moment'

export default class TodoInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',

        }

        this.onChange = this.onChange.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onChange(e, {value}) {
        this.setState({
            text: value
        })
    }

    onButtonClick() {
        const { text } = this.state
        if(text !== '') {
            this.props.onButtonClick(text)
            this.setState({
                text: '',
                date: moment()

            })
        }
    }

    render() {
        const { text } = this.state
        return(
            <div>
                <Input action fluid placeholder='Write your Todo...' onChange={this.onChange} value={text}>
                    <input />
                    <Button icon='plus' color='green' onClick={this.onButtonClick}/>
                </Input>
            </div>
        )
    }
}