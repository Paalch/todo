import React, {Component} from 'react'
//import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Switch, Route } from 'react-router'


import NotFound from "../../components/NotFound";
import moment from 'moment'
import HomeContainer from "../../components/Home/HomeContainer";
import TodoContainer from "../../components/Todo/TodoContainer";
import NoteContainer from "../../components/Notes/NoteContainer";
import EventContainer from "../../components/Events/EventContainer";


moment.locale('en-gb');


const App = () => (

  <Switch>
    <Route exact path='/' component={HomeContainer}/>
    <Route exact path='/todos' component={TodoContainer}/>
    <Route exact path='/notes' component={NoteContainer}/>
    <Route exact path='/events' component={EventContainer}/>
    <Route component={NotFound}/>
  </Switch>

)

export default App
