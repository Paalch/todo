import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import moment from 'moment'

import NotFound from './components/NotFound'
import HomeContainer from './components/Home/HomeContainer'
import TodoContainer from './components/Todo/TodoContainer'
import NoteContainer from './components/Notes/NoteContainer'
import EventContainer from './components/Events/EventContainer'

moment.locale('en-gb')

const App = () => (
    <div>
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route exact path='/todos' component={TodoContainer} />
                    <Route exact path='/notes' component={NoteContainer} />
                    <Route exact path='/events' component={EventContainer} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </div>
)

export default App
