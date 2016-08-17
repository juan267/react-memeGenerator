import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import querystring from 'querystring'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class Yoda extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      formOpen: true,
      memes: [],
      value: '',
      imgUrl: ''
    }
  }
  componentDidMount() {
    fetch("https://ronreiter-meme-generator.p.mashape.com/images", {
      method: 'GET',
      headers: {
        "X-Mashape-Key": "C97OaLQKzbmshhfS8gPRBmthUikOp1iWta5jsniBBSNyvFxYBB",
        "Accept": "application/json"
      }
    })
      .then(data => data.json())
      .then(memes => {
        const newMemes = memes.slice(0,50).map((meme, i) => {
          return <MenuItem value={meme} key={i} primaryText={meme} />
        })
        this.setState({memes: newMemes})
      })
  }
  fetchMeme(e) {
    e.preventDefault()
    this.setState({loading: true})
    const query = {
      bottom: e.target.bottomText.value,
      font: 'Impact',
      font_size: 50,
      meme: this.state.value,
      top: e.target.topText.value
    }
    const parseQuery = querystring.stringify(query)
    console.log(parseQuery)
    fetch(`https://ronreiter-meme-generator.p.mashape.com/meme?${parseQuery}`, {
      method: "GET",
      headers: {
        "X-Mashape-Key": "C97OaLQKzbmshhfS8gPRBmthUikOp1iWta5jsniBBSNyvFxYBB"
      }
    })
      .then(data => data.blob())
      .then(response => {
         var objectURL = URL.createObjectURL(response)
         this.setState({
           imgUrl: objectURL,
           loading: false,
           formOpen: false,
         })
      })
  }
  handleChange = (event, index, value) => {
    this.setState({value});
  };
  renderText() {
    return (
      <div>
        <img src={this.state.imgUrl} alt='' /><br />
        <FlatButton label="Again!!!" secondary={true} onClick={() => {this.setState({formOpen: true})}}/>
      </div>
    )
  }
  renderForm() {
    return (
      <form onSubmit={this.fetchMeme.bind(this)}>
        <SelectField  value={this.state.value} onChange={this.handleChange} maxHeight={200}>
          {this.state.memes}
        </SelectField><br />
        <TextField
          name="topText"
          hintText="Top Text"
          floatingLabelText="El texto que va arriba"
          required
        /><br />
        <TextField
          name="bottomText"
          hintText="Bottom Text"
          floatingLabelText="El texto que va a abajo"
        /><br />
        <input type='submit' value='Crear Meme' />
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
