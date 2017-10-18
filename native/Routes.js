import React, { Component } from 'react'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import NoteContainer from './components/Notes/NoteContainer'
import TodoContainer from './components/Todo/TodoContainer'
import EventContainer from './components/Event/EventContainer'
import NavFooter from './components/NavFooter'
import HomeComponent from './components/HomeComponent'

import { routes } from './styles'

/**
 * Navigation between scenes, from React Native Router Flux.
 * The main component of the App. This renders all other components
 * based on what scene is on the top of the navigation stack.
 */

export default class Routes extends Component {
    render = () => {
        return(
            <Router navigationBarStyle={routes.navBar} backAndroidHandler={Actions.home}>
                <Stack key="root">
                    <Scene key="home"
                           component={Home}
                           title="Home"
                           headerTitleStyle={routes.title}
                           navBarButtonColor='white'
                           init={true}/>
                    <Scene key="notes"
                           component={Notes}
                           title="Notes"
                           headerTitleStyle={routes.title}
                           navBarButtonColor='white'
                           />
                    <Scene key="todos"
                           component={Todos}
                           title="Todos"
                           headerTitleStyle={routes.title}
                           navBarButtonColor='white'
                           />
                    <Scene key="events"
                           component={Events}
                           title="Events"
                           headerTitleStyle={routes.title}
                           navBarButtonColor='white'/>
                </Stack>
            </Router>
        )
    }
}

/**
 * Renders Todo in todo scene.
 * @constructor
 */
const Todos = () => (
    <Container>
        <TodoContainer/>
        <NavFooter active="todos"/>
    </Container>
)

/**
 * Renders Notes in notes scene.
 * @constructor
 */
const Notes = () => (
    <Container>
        <NoteContainer/>
        <NavFooter active="notes"/>
    </Container>
)

/**
 * Renders Events in events scene.
 * @constructor
 */
const Events = () => (
    <Container>
        <EventContainer/>
        <NavFooter active="events"/>
    </Container>
)

/**
 * Renders Home in home scene.
 * @constructor
 */
const Home = () => (
    <Container>
        <HomeComponent/>
        <NavFooter active='home' />
    </Container>
)
