import React from 'react'
import {Route, IndexRoute} from 'react-router'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Quote from '../components/Quote'
import Cats from '../components/Cats'
import Yoda from '../components/Yoda'
import MemeGenerator from '../components/MemeGenerator'

export default (
  <Route path='/' component={NavBar}>
    <Route path='memes/cats' component={Cats}/>
    <Route path='memes/memeGenerator' component={MemeGenerator}/>
    <Route path='memes/:quote' component={Quote} />
  </Route>
)
