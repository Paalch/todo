import React, { Component } from 'react'
import { Divider, Grid, Header, Segment, Container, Button } from 'semantic-ui-react'
import moment from 'moment'
import _ from 'lodash'

import Event from './Event'
import CreateEvent from './CreateEvent'
import EditModal from './EditModal'
import Navbar from '../Navbar'

export default class EventContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
    }

    componentWillMount = () => {
        let localEvents = JSON.parse(localStorage.getItem('events'))
        this.setState({
            events: localEvents || []
        })
    }

    updateEvent = (text, where, date, time) => {
        const { events } = this.state
        let event = {
            text: text,
            where: where,
            createdAt: moment(),
            date: moment(`${date}`).format('MMM Do'),
            day: moment(`${date}`).format('dddd'),
            time: moment(`${time}`).format('h:mm a')
        }
        events.push(event)
        this.updateState({
            events: events
        })
    }

    deleteItem = (event) => {
        let { events } = this.state
        const i = events.indexOf(event)
        if (i >= 0) {
            events.splice(i, 1)
            this.updateState({
                events: events
            })
        } else {
            console.error(`[EventContainer](checkBoxClick) Couldn't find object at index ${i}`)
        }
    }

    updateLocalStorage = () => {
        const { events } = this.state
        localStorage.setItem('events', JSON.stringify(events))
    }

    updateState = (state) => {
        this.setState(state, () => {
            this.updateLocalStorage()
        })
    }

    render () {
        const { events, event } = this.state
        return (
            <div>
                <Navbar/>
                <Divider hidden/>
                <Container text textAlign='center'>
                    <Grid>
                        <Grid.Column width={3}>
                            <Button content='Last' icon='left arrow' labelPosition='left'/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as='h1' >Week 42</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button content='Next' icon='right arrow' labelPosition='right'/>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden/>
                    <div>
                        { events.map((event) => <Event key={event.createdAt} event={event} deleteItem={this.deleteItem} updateEvent={this.updateEvent}/>) }
                    </div>
                    <Divider hidden/>
                    <CreateEvent updateEvent={this.updateEvent}/>
                </Container>
            </div>
        )
    }
}
