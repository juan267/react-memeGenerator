import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import ActionFace from 'material-ui/svg-icons/action/face';

export default class Quote extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      text: '',
      author: ''
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({loading: true})
    this.fetchApi(newProps.params.quote)
  }
  componentDidMount() {
    this.fetchApi(this.props.params.quote)
  }
  fetchApi(quote) {
   switch(quote) {
     case 'movieQuote':
       fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",{
         method: "POST",
         headers: {
           "Accept": "application/json",
           "X-Mashape-Key": "C97OaLQKzbmshhfS8gPRBmthUikOp1iWta5jsniBBSNyvFxYBB",
           "Content-Type": "application/x-www-form-urlencoded"
         }
       })
         .then(data => data.json())
         .then(response => this.setState({
            text: response.quote,
            loading: false,
            author: response.author
          }))
       break
     case 'chucknorris':
       fetch('https://api.chucknorris.io/jokes/random')
        .then(data => data.json())
        .then(response => this.setState({text: response.value, author: '', loading: false}))
       break
   }
  }
  render() {
    console.log(__dirname)
    return (
      this.state.loading ? <CircularProgress /> :
      <div style={styles.quote}>
        <Avatar
          icon={<ActionFace />}
          size={50}
        />
        <h3>{this.state.text}</h3>
        <p><strong>Author: </strong>{this.state.author || 'Chuck Norris'}</p>
      </div>
    )
  }
}

const styles = {
  quote: {
    width: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
