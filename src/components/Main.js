import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router'

const style = {
  paper: {
    display: 'inline-block',
    height: '90vh'
  },
  container: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none'
  },
  quotes: {
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  }
};

const MenuExampleSimple = (props) => (
  <div style={style.container}>
    <Paper style={style.paper}>
      <Menu width={200} >
        <Link to='/memes/movieQuote' style={style.link}>
          <MenuItem primaryText="movieQuote" />
        </Link>
        <Link to='/memes/chucknorris' style={style.link}>
          <MenuItem primaryText="Chuck Norris Quote" />
        </Link>
        <Link to='/memes/cats' style={style.link}>
          <MenuItem primaryText="Cats" />
        </Link>
        <Link to='/memes/memeGenerator' style={style.link}>
          <MenuItem primaryText="memeGenerator" />
        </Link>
      </Menu>
    </Paper>
    <div style={style.quotes}>
      {props.children}
    </div>
  </div>
);

export default MenuExampleSimple;
