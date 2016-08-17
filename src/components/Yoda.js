import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';


export default class Yoda extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      formOpen: true,
      text: ''
    }
  }
  renderText() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <FlatButton label="Again!" secondary={true} onClick={() => this.setState({formOpen: true})}/>
      </div>
    )
  }
  fetchYoda(e) {
    e.preventDefault()
    this.setState({loading: true})
    const sentence = e.target.yoda.value.split(' ').join('+')
    fetch(`https://yoda.p.mashape.com/yoda?sentence=${sentence}`, {
      method: "GET",
      headers: {
        "Accept": "text/plain",
        "X-Mashape-Key": "C97OaLQKzbmshhfS8gPRBmthUikOp1iWta5jsniBBSNyvFxYBB"
      }
    })
      .then(data => data.text())
      .then(response => {
         this.setState({
           loading: false,
           formOpen: false,
           text: response
         })
      })
  }
  renderForm() {
    return (
      <form onSubmit={this.fetchYoda.bind(this)}>
        <TextField
          name="yoda"
          hintText="Escribe algo que quieras Yodificar"
          floatingLabelText="Escribe algo que quieras Yodificar"
          required
        /><br />
        <input type='submit' value='Yodificar' />
      </form>
    )
  }
  render() {
    return (
      this.state.loading ? <CircularProgress /> :
      this.state.formOpen ? this.renderForm() : this.renderText()
    )
  }
}
