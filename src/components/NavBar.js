import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';

const NavBar = (props) => {
  return (
    <div>
      <AppBar
        title="Quote and Meme Generator"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      {props.children}
    </div>
  )
}

export default NavBar

