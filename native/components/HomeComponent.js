import React, { Component } from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { homeComp} from '../styles'

/**
 * Home screen. Short info about project.
 * Detects OS and gives info accordingly.
 */

const instructions = Platform.select({
    ios: 'Your device: iOS.\n' +
    'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Your device: Android\n' +
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class HomeComponent extends Component {
    render() {
        return (
                <View style={homeComp.view}>
                    <Content>
                        <Text style={homeComp.welcome}>
                            Personal Information Manager Project
                        </Text>
                        <Text style={homeComp.group}>
                            Group 22
                        </Text>
                        <Text style={homeComp.message}>
                            The PIMP is made as a group project in
                            the course IT2810 Web Development at NTNU.
                        </Text>
                        <Text style={homeComp.instructions}>
                            {instructions} {'\n'}

                        </Text>
                        <Text style={homeComp.runBy}>

                            <Image
                                source={require('../img/rn_logo.png')} /> {'\n'}
                            This app is run by {'\n'}
                            React Native

                        </Text>


                    </Content>



                </View>


        );
    }
}
