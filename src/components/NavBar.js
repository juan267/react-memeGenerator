import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Main from './Main'

const NavBar = (props) => {
  return (
    <div>
      <AppBar
        title="Quote and Meme Generator"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Main>
        {props.children}
      </Main>
    </div>
  )
}

export default NavBar

