import React, { Component } from 'react'
import { StyleProvider, Container, Header, Content,View, Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { navFooter } from '../styles'

/**
 * Navigation bar at bottom. Acts as footer.
 * Contains a container with props.children, and a Footer
 * from Native Base.
 * The Footer has FooterTabs acting as tabs, and buttons with icons within.
 */

export default class NavFooter extends Component {

    render() {

        const { active } = this.props

        return (
            <View>
                <Content>
                    { this.props.children }
                </Content>
                <Footer>
                    <FooterTab style={navFooter.footerTab}>
                        <Button
                            style={navFooter.button}
                            vertical
                            active={active === 'home'}
                            onPress={() => {
                                Actions.pop()
                                Actions.home()
                            }}
                        >
                            <Icon name='home'/>
                            <Text>Home</Text>
                        </Button>
                        <Button
                            style={navFooter.button}
                            vertical
                            active={active === 'todos'}
                            onPress={() => {
                                Actions.pop()
                                Actions.todos()
                            }}
                        >
                            <Icon name='list'/>
                            <Text>Todos</Text>
                        </Button>
                        <Button
                            style={navFooter.button}
                            vertical
                            active={active === 'notes'}
                            onPress={() => {
                                Actions.pop()
                                Actions.notes()
                            }}
                        >
                            <Icon active name='clipboard' />
                            <Text>Notes</Text>
                        </Button>
                        <Button
                            style={navFooter.button}
                            vertical
                            active={active === 'events'}
                            onPress={() => {
                                Actions.pop()
                                Actions.events()
                            }}
                        >
                            <Icon name='calendar' />
                            <Text>Events</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}
